// Membership applications data layer.
//
// SOURCE OF TRUTH: the public.membership_applications table (submitted via the
// public join form). This module reads them and lets admins move them through
// a lightweight pipeline by writing the stage back into the `status` column.
//
// Notes, stage history, onboarding link + onboarding progress are held in a
// local overlay in localStorage keyed by application id.
// TODO: replace the overlay with real backend columns/tables.

import { useSyncExternalStore } from "react";
import { supabase } from "@/integrations/supabase/client";

export type ApplicationStage =
  | "Applied"
  | "Under review"
  | "Checks/references"
  | "Approved"
  | "Onboarding link sent"
  | "Active"
  | "Rejected"
  | "On-hold";

export const PIPELINE_STAGES: ApplicationStage[] = [
  "Applied",
  "Under review",
  "Checks/references",
  "Approved",
  "Onboarding link sent",
  "Active",
];
export const SIDE_STAGES: ApplicationStage[] = ["Rejected", "On-hold"];
export const ALL_STAGES: ApplicationStage[] = [...PIPELINE_STAGES, ...SIDE_STAGES];

export type OnboardingStatus = "Not started" | "Started" | "Completed";

export type AppNote = { id: string; author: string; createdAt: string; text: string };
export type AppHistory = {
  id: string;
  at: string;
  from: ApplicationStage | null;
  to: ApplicationStage;
  by: string;
  note?: string;
};

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
  dateApplied: string;
  stage: ApplicationStage;
  onboarding: OnboardingStatus;
  onboardingLink?: string;
  notes: AppNote[];
  history: AppHistory[];
};

function normaliseStage(raw: string | null | undefined): ApplicationStage {
  if (!raw) return "Applied";
  const map: Record<string, ApplicationStage> = {
    submitted: "Applied",
    Submitted: "Applied",
    new: "Applied",
    pending: "Applied",
  };
  if ((ALL_STAGES as string[]).includes(raw)) return raw as ApplicationStage;
  return map[raw] ?? "Applied";
}

// ---------------- Local overlay ----------------

type Overlay = {
  notes: AppNote[];
  history: AppHistory[];
  onboarding: OnboardingStatus;
  onboardingLink?: string;
};

const LS_KEY = "bali_admin_app_overlay_v1";

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
function emitOverlay() { overlayListeners.forEach((l) => l()); }
export function subscribeOverlay(l: () => void) {
  overlayListeners.add(l);
  return () => overlayListeners.delete(l);
}
function overlaySnapshot() { return readOverlays(); }
export function useAppOverlays() {
  return useSyncExternalStore(subscribeOverlay, overlaySnapshot, overlaySnapshot);
}

// ---------------- Public API ----------------

export function toApplication(row: MembershipApplicationRow, overlays: Record<string, Overlay>): Application {
  const p = (row.payload ?? {}) as Record<string, unknown>;
  const overlay = overlays[row.id];
  const stage = normaliseStage(row.status);
  const historyBase: AppHistory[] = [
    { id: `seed-${row.id}`, at: row.created_at, from: null, to: "Applied", by: "System" },
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
    dateApplied: row.created_at,
    stage,
    onboarding: overlay?.onboarding ?? (stage === "Active" ? "Completed" : "Not started"),
    onboardingLink: overlay?.onboardingLink,
    notes: overlay?.notes ?? [],
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

// TODO: replace with backend endpoint that emails the applicant.
export async function sendOnboardingLink(id: string, from: ApplicationStage) {
  const token = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const link = `https://bali.org.uk/onboard/${token}`;
  const all = readOverlays();
  const o = ensure(id, all);
  o.onboardingLink = link;
  o.history = [
    ...o.history,
    { id: `h-${Date.now()}`, at: new Date().toISOString(), from, to: "Onboarding link sent", by: "Staff", note: "Onboarding link generated" },
  ];
  writeOverlays(all);
  emitOverlay();
  await supabase.from("membership_applications").update({ status: "Onboarding link sent" }).eq("id", id);
  return link;
}

export function setOnboardingStatus(id: string, status: OnboardingStatus) {
  const all = readOverlays();
  const o = ensure(id, all);
  o.onboarding = status;
  writeOverlays(all);
  emitOverlay();
}
