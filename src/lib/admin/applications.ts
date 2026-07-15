// Membership applications data layer.
//
// SOURCE OF TRUTH: the public.membership_applications table (submitted via the
// public join form). This module reads them and lets admins move them through
// BALI's real enquiry → lead → opportunity → application → payment pipeline
// by writing the stage back into the `status` column.
//
// Notes, stage history, application/onboarding links, payment method, fee
// status, references and uploaded documents are held in a local overlay in
// localStorage keyed by application id.
// TODO: replace the overlay with real backend columns/tables — the pipeline
// stages map directly to BALI's Workbooks CRM (enquiry → lead → opportunity
// → application → invoice/payment → active member).

import { useSyncExternalStore } from "react";
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

export type OnboardingStatus = "Not started" | "Started" | "Completed";
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

// Map legacy stored stages to the new BALI pipeline.
const LEGACY_STAGE_MAP: Record<string, ApplicationStage> = {
  // Old generic pipeline → new BALI pipeline
  "Applied": "Enquiry received",
  "Under review": "Qualifying",
  "Checks/references": "Awaiting application",
  "Onboarding link sent": "Approved",
  // External inputs from the public join form
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

function defaultFeeStatusFor(stage: ApplicationStage): FeeStatus {
  if (stage === "Application received – paid" || stage === "Approved" || stage === "Active") return "Paid";
  if (stage === "Application received – awaiting fee") return "Unpaid";
  return "N/A";
}

// ---------------- Local overlay ----------------

type Overlay = {
  notes: AppNote[];
  history: AppHistory[];
  onboarding: OnboardingStatus;
  onboardingLink?: string;
  applicationLink?: string;
  source?: string;
  paymentMethod?: PaymentMethod;
  feeStatus?: FeeStatus;
  references?: AppReference[];
  documents?: AppDocument[];
};

const LS_KEY = "bali_admin_app_overlay_v2";

function readOverlays(): Record<string, Overlay> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Overlay>) : {};
  } catch {
    return {};
  }
}
function writeOverlays(v: Record<string, Overlay>) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(LS_KEY, JSON.stringify(v)); } catch { /* noop */ }
}
function ensure(id: string, all: Record<string, Overlay>): Overlay {
  if (!all[id]) all[id] = { notes: [], history: [], onboarding: "Not started" };
  return all[id];
}

const overlayListeners = new Set<() => void>();
let overlayCache: Record<string, Overlay> = readOverlays();
function emitOverlay() {
  overlayCache = readOverlays();
  overlayListeners.forEach((l) => l());
}
export function subscribeOverlay(l: () => void) {
  overlayListeners.add(l);
  return () => overlayListeners.delete(l);
}
function overlaySnapshot() { return overlayCache; }
export function useAppOverlays() {
  return useSyncExternalStore(subscribeOverlay, overlaySnapshot, overlaySnapshot);
}

// ---------------- Public API ----------------

export function toApplication(row: MembershipApplicationRow, overlays: Record<string, Overlay>): Application {
  const p = (row.payload ?? {}) as Record<string, unknown>;
  const overlay = overlays[row.id];
  const stage = normaliseStage(row.status);
  const historyBase: AppHistory[] = [
    { id: `seed-${row.id}`, at: row.created_at, from: null, to: "Enquiry received", by: "System" },
  ];
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
    source: overlay?.source ?? String(p.source ?? "BALI Website"),
    paymentMethod: overlay?.paymentMethod ?? (String(p.payment_method ?? "") as PaymentMethod) ?? "Not set",
    feeStatus: overlay?.feeStatus ?? defaultFeeStatusFor(stage),
    onboarding: overlay?.onboarding ?? (stage === "Active" ? "Completed" : "Not started"),
    onboardingLink: overlay?.onboardingLink,
    applicationLink: overlay?.applicationLink,
    notes: overlay?.notes ?? [],
    references: overlay?.references ?? [],
    documents: overlay?.documents ?? [],
    history: overlay?.history?.length ? overlay.history : historyBase,
  };
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
    .select("id, category, applicant_name, applicant_email, company_name, payload, status, notes, created_at, updated_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as MembershipApplicationRow[];
}

export async function fetchApplication(id: string): Promise<MembershipApplicationRow | null> {
  const { data, error } = await supabase
    .from("membership_applications")
    .select("id, category, applicant_name, applicant_email, company_name, payload, status, notes, created_at, updated_at")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return (data ?? null) as MembershipApplicationRow | null;
}

export async function updateStage(id: string, to: ApplicationStage, from: ApplicationStage | null, by = "Staff", note?: string) {
  const { error } = await supabase
    .from("membership_applications")
    .update({ status: to })
    .eq("id", id);
  if (error) throw error;
  const all = readOverlays();
  const o = ensure(id, all);
  o.history = [
    ...o.history,
    { id: `h-${Date.now()}`, at: new Date().toISOString(), from, to, by, note },
  ];
  // Auto-adjust fee status when moving into fee-related stages.
  if (to === "Application received – awaiting fee") o.feeStatus = "Unpaid";
  if (to === "Application received – paid") o.feeStatus = "Paid";
  writeOverlays(all);
  emitOverlay();
}

export function addNote(id: string, text: string, author = "Staff") {
  const all = readOverlays();
  const o = ensure(id, all);
  o.notes = [...o.notes, { id: `n-${Date.now()}`, author, createdAt: new Date().toISOString(), text }];
  writeOverlays(all);
  emitOverlay();
}

export function setPaymentMethod(id: string, method: PaymentMethod) {
  const all = readOverlays();
  const o = ensure(id, all);
  o.paymentMethod = method;
  writeOverlays(all);
  emitOverlay();
}

export function setFeeStatus(id: string, status: FeeStatus) {
  const all = readOverlays();
  const o = ensure(id, all);
  o.feeStatus = status;
  writeOverlays(all);
  emitOverlay();
}

export function addReference(id: string, ref: Omit<AppReference, "id" | "status"> & { status?: AppReference["status"] }) {
  const all = readOverlays();
  const o = ensure(id, all);
  o.references = [...(o.references ?? []), { id: `r-${Date.now()}`, status: ref.status ?? "Requested", ...ref }];
  writeOverlays(all);
  emitOverlay();
}

export function addDocument(id: string, doc: Omit<AppDocument, "id" | "uploadedAt">) {
  const all = readOverlays();
  const o = ensure(id, all);
  o.documents = [...(o.documents ?? []), { id: `d-${Date.now()}`, uploadedAt: new Date().toISOString(), ...doc }];
  writeOverlays(all);
  emitOverlay();
}

// TODO: replace with backend endpoint that emails the applicant the join-form link.
export async function sendApplicationLink(id: string, from: ApplicationStage) {
  const token = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const link = `https://bali.org.uk/join/apply/${token}`;
  const all = readOverlays();
  const o = ensure(id, all);
  o.applicationLink = link;
  o.history = [
    ...o.history,
    { id: `h-${Date.now()}`, at: new Date().toISOString(), from, to: "Awaiting application", by: "Staff", note: "Application link generated" },
  ];
  writeOverlays(all);
  emitOverlay();
  await supabase.from("membership_applications").update({ status: "Awaiting application" }).eq("id", id);
  return link;
}

// TODO: replace with backend endpoint that emails the applicant the onboarding link.
export async function sendOnboardingLink(id: string, from: ApplicationStage) {
  const token = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const link = `https://bali.org.uk/onboard/${token}`;
  const all = readOverlays();
  const o = ensure(id, all);
  o.onboardingLink = link;
  o.history = [
    ...o.history,
    { id: `h-${Date.now()}`, at: new Date().toISOString(), from, to: "Approved", by: "Staff", note: "Onboarding link generated" },
  ];
  writeOverlays(all);
  emitOverlay();
  // Stage stays "Approved" — onboarding link is a sub-action within that stage.
  return link;
}

export function setOnboardingStatus(id: string, status: OnboardingStatus) {
  const all = readOverlays();
  const o = ensure(id, all);
  o.onboarding = status;
  writeOverlays(all);
  emitOverlay();
}
