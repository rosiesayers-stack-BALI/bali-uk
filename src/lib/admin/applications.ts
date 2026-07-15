// Membership applications data layer.
//
// SOURCE OF TRUTH: the public.membership_applications table. All pipeline
// overlay fields (notes_log, history, refs, docs, payment_method, fee_status,
// onboarding_status, onboarding_link, application_link, source) now persist
// as columns / JSONB on that table, so stage changes and notes are shared
// across every admin device.
//
// TODO (agency hand-off): Workbooks CRM sync — the pipeline stages map to
//   enquiry → lead → opportunity → application → invoice/payment → active
//   member. Wire two-way sync (or webhook out to Workbooks) once the
//   integration is scoped. Also wire the "send link" mutations to a real
//   transactional email provider.

import { supabase } from "@/integrations/supabase/client";
import { normaliseApplicationType, type ApplicationTypeId } from "@/lib/membership-types";

export type ApplicationStage =
  | "Enquiry received"
  | "Qualifying"
  | "Awaiting application"
  | "Application received – awaiting fee"
  | "Application received – paid"
  | "Approved"
  | "Active"
  | "Rejected"
  | "On-hold";

export const PIPELINE_STAGES: ApplicationStage[] = [
  "Enquiry received",
  "Qualifying",
  "Awaiting application",
  "Application received – awaiting fee",
  "Application received – paid",
  "Approved",
  "Active",
];
export const SIDE_STAGES: ApplicationStage[] = ["Rejected", "On-hold"];
export const ALL_STAGES: ApplicationStage[] = [...PIPELINE_STAGES, ...SIDE_STAGES];

export type OnboardingStatus = "Not started" | "Link sent" | "Started" | "Completed";
export type PaymentMethod = "Card" | "Invoice" | "Not set";
export type FeeStatus = "Unpaid" | "Awaiting invoice" | "Paid" | "N/A";

export type AppNote = { id: string; author: string; createdAt: string; text: string };
export type AppHistory = {
  id: string;
  at: string;
  from: ApplicationStage | null;
  to: ApplicationStage;
  by: string;
  note?: string;
};
export type AppReference = { id: string; name: string; organisation: string; email: string; status: "Requested" | "Received" | "Pending" };
export type AppDocument = { id: string; name: string; kind: string; uploadedAt: string };

export type MembershipApplicationRow = {
  id: string;
  category: string;
  applicant_name: string | null;
  applicant_email: string | null;
  company_name: string | null;
  payload: Record<string, unknown> | null;
  status: string | null;
  notes: string | null;
  notes_log: unknown;
  history: unknown;
  refs: unknown;
  docs: unknown;
  source: string | null;
  payment_method: string | null;
  fee_status: string | null;
  onboarding_status: string | null;
  onboarding_link: string | null;
  application_link: string | null;
  created_at: string;
  updated_at: string;
};

export type Application = {
  id: string;
  applicantName: string;
  organisation: string;
  email: string;
  phone: string;
  town: string;
  county: string;
  region: string;
  discipline: string;
  category: string;
  applicationType: ApplicationTypeId;
  dateApplied: string;
  stage: ApplicationStage;
  source: string;
  paymentMethod: PaymentMethod;
  feeStatus: FeeStatus;
  onboarding: OnboardingStatus;
  onboardingLink?: string;
  applicationLink?: string;
  notes: AppNote[];
  references: AppReference[];
  documents: AppDocument[];
  history: AppHistory[];
};

const LEGACY_STAGE_MAP: Record<string, ApplicationStage> = {
  "Applied": "Enquiry received",
  "Under review": "Qualifying",
  "Checks/references": "Awaiting application",
  "Onboarding link sent": "Approved",
  submitted: "Application received – awaiting fee",
  Submitted: "Application received – awaiting fee",
  new: "Enquiry received",
  pending: "Enquiry received",
};

function normaliseStage(raw: string | null | undefined): ApplicationStage {
  if (!raw) return "Enquiry received";
  if ((ALL_STAGES as string[]).includes(raw)) return raw as ApplicationStage;
  return LEGACY_STAGE_MAP[raw] ?? "Enquiry received";
}
function normalisePaymentMethod(raw: string | null | undefined): PaymentMethod {
  if (raw === "Card" || raw === "Invoice" || raw === "Not set") return raw;
  return "Not set";
}
function normaliseFeeStatus(raw: string | null | undefined, stage: ApplicationStage): FeeStatus {
  if (raw === "Unpaid" || raw === "Awaiting invoice" || raw === "Paid" || raw === "N/A") return raw;
  if (stage === "Application received – paid" || stage === "Approved" || stage === "Active") return "Paid";
  if (stage === "Application received – awaiting fee") return "Unpaid";
  return "N/A";
}
function normaliseOnboarding(raw: string | null | undefined, stage: ApplicationStage): OnboardingStatus {
  if (raw === "Not started" || raw === "Started" || raw === "Completed") return raw;
  return stage === "Active" ? "Completed" : "Not started";
}

function toArray<T>(v: unknown): T[] {
  return Array.isArray(v) ? (v as T[]) : [];
}

// ---------------- Public API ----------------

const SELECT_COLS = "id, category, applicant_name, applicant_email, company_name, payload, status, notes, notes_log, history, refs, docs, source, payment_method, fee_status, onboarding_status, onboarding_link, application_link, created_at, updated_at";

export function toApplication(row: MembershipApplicationRow): Application {
  const p = (row.payload ?? {}) as Record<string, unknown>;
  const stage = normaliseStage(row.status);
  const historyRows = toArray<AppHistory>(row.history);
  const history = historyRows.length
    ? historyRows
    : [{ id: `seed-${row.id}`, at: row.created_at, from: null, to: "Enquiry received" as ApplicationStage, by: "System" }];
  return {
    id: row.id,
    applicantName: row.applicant_name ?? "Unknown applicant",
    organisation: row.company_name ?? "—",
    email: row.applicant_email ?? "",
    phone: String(p.phone ?? p.telephone ?? ""),
    town: String(p.town ?? ""),
    county: String(p.county ?? ""),
    region: String(p.region ?? ""),
    discipline: String(p.discipline ?? categoryLabel(row.category)),
    category: row.category,
    applicationType: normaliseApplicationType(row.category),
    dateApplied: row.created_at,
    stage,
    source: row.source || String(p.source ?? "BALI Website"),
    paymentMethod: normalisePaymentMethod(row.payment_method ?? (typeof p.payment_method === "string" ? (p.payment_method as string) : null)),
    feeStatus: normaliseFeeStatus(row.fee_status, stage),
    onboarding: normaliseOnboarding(row.onboarding_status, stage),
    onboardingLink: row.onboarding_link ?? undefined,
    applicationLink: row.application_link ?? undefined,
    notes: toArray<AppNote>(row.notes_log),
    references: toArray<AppReference>(row.refs),
    documents: toArray<AppDocument>(row.docs),
    history,
  };
}

// Back-compat shim — some call sites still pass a second arg. Overlay is now
// on the row, so the argument is ignored.
export function toApplicationCompat(row: MembershipApplicationRow, _overlays?: unknown): Application {
  return toApplication(row);
}

/** No-op kept for back-compat with existing call sites; DB is source of truth. */
export function useAppOverlays(): Record<string, unknown> {
  return {};
}

export function categoryLabel(category: string): string {
  return category
    .replace(/^accredited_/, "Accredited ")
    .replace(/^associate_/, "Associate ")
    .replace(/^rolo_/, "ROLO ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function fetchApplications(): Promise<MembershipApplicationRow[]> {
  const { data, error } = await supabase
    .from("membership_applications")
    .select(SELECT_COLS)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as MembershipApplicationRow[];
}

export async function fetchApplication(id: string): Promise<MembershipApplicationRow | null> {
  const { data, error } = await supabase
    .from("membership_applications")
    .select(SELECT_COLS)
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return (data ?? null) as MembershipApplicationRow | null;
}

async function loadRow(id: string): Promise<MembershipApplicationRow> {
  const row = await fetchApplication(id);
  if (!row) throw new Error("Application not found");
  return row;
}

export async function updateStage(id: string, to: ApplicationStage, from: ApplicationStage | null, by = "Staff", note?: string) {
  const row = await loadRow(id);
  const history = toArray<AppHistory>(row.history);
  history.push({ id: `h-${Date.now()}`, at: new Date().toISOString(), from, to, by, note });
  const feeStatus: FeeStatus | undefined =
    to === "Application received – awaiting fee" ? "Unpaid" :
    to === "Application received – paid" ? "Paid" : undefined;
  const { error } = await supabase
    .from("membership_applications")
    .update({ status: to, history: history as unknown as never, ...(feeStatus ? { fee_status: feeStatus } : {}) })
    .eq("id", id);
  if (error) throw error;
}

export async function addNote(id: string, text: string, author = "Staff") {
  const row = await loadRow(id);
  const notes = toArray<AppNote>(row.notes_log);
  notes.push({ id: `n-${Date.now()}`, author, createdAt: new Date().toISOString(), text });
  const { error } = await supabase.from("membership_applications").update({ notes_log: notes }).eq("id", id);
  if (error) throw error;
}

export async function setPaymentMethod(id: string, method: PaymentMethod) {
  const { error } = await supabase.from("membership_applications").update({ payment_method: method }).eq("id", id);
  if (error) throw error;
}

export async function setFeeStatus(id: string, status: FeeStatus) {
  const { error } = await supabase.from("membership_applications").update({ fee_status: status }).eq("id", id);
  if (error) throw error;
}

export async function addReference(id: string, ref: Omit<AppReference, "id" | "status"> & { status?: AppReference["status"] }) {
  const row = await loadRow(id);
  const refs = toArray<AppReference>(row.refs);
  refs.push({ id: `r-${Date.now()}`, status: ref.status ?? "Requested", name: ref.name, organisation: ref.organisation, email: ref.email });
  const { error } = await supabase.from("membership_applications").update({ refs }).eq("id", id);
  if (error) throw error;
}

export async function addDocument(id: string, doc: Omit<AppDocument, "id" | "uploadedAt">) {
  const row = await loadRow(id);
  const docs = toArray<AppDocument>(row.docs);
  docs.push({ id: `d-${Date.now()}`, uploadedAt: new Date().toISOString(), name: doc.name, kind: doc.kind });
  const { error } = await supabase.from("membership_applications").update({ docs }).eq("id", id);
  if (error) throw error;
}

// TODO (agency): replace token-in-URL with a real transactional email + signed link.
export async function sendApplicationLink(id: string, from: ApplicationStage) {
  const token = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const link = `https://bali.org.uk/join/apply/${token}`;
  const row = await loadRow(id);
  const history = toArray<AppHistory>(row.history);
  history.push({ id: `h-${Date.now()}`, at: new Date().toISOString(), from, to: "Awaiting application", by: "Staff", note: "Application link generated" });
  const { error } = await supabase
    .from("membership_applications")
    .update({ application_link: link, status: "Awaiting application", history })
    .eq("id", id);
  if (error) throw error;
  return link;
}

// TODO (agency): replace with real transactional email + signed onboarding link.
export async function sendOnboardingLink(id: string, from: ApplicationStage) {
  const token = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const link = `https://bali.org.uk/onboard/${token}`;
  const row = await loadRow(id);
  const history = toArray<AppHistory>(row.history);
  history.push({ id: `h-${Date.now()}`, at: new Date().toISOString(), from, to: "Approved", by: "Staff", note: "Onboarding link generated" });
  const { error } = await supabase
    .from("membership_applications")
    .update({ onboarding_link: link, history })
    .eq("id", id);
  if (error) throw error;
  return link;
}

export async function setOnboardingStatus(id: string, status: OnboardingStatus) {
  const { error } = await supabase.from("membership_applications").update({ onboarding_status: status }).eq("id", id);
  if (error) throw error;
}
