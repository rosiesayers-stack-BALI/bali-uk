// Mailing lists (segments) + newsletter opt-ins + automations.
//
// SOURCE OF TRUTH:
//   • Segments      → public.mailing_lists table (name/description/filter JSON)
//   • Opt-ins       → workbooks_people.newsletter_opts (JSONB string[])
//   • Automations   → still in-memory / seeded (kept as UI-only prototype)
//
// TODO (agency hand-off):
//   • Mailchimp API: on `markSynced(segmentId)`, create/refresh a Mailchimp
//     audience/tag from the current members and store the audience id back
//     on the row. Engagement figures (open/click/unsubscribe/lastSentAt) are
//     real once Mailchimp reporting is wired — until then they are seeded
//     placeholders.
//   • Automations belong in a backend scheduler (pg_cron + transactional
//     email provider). The card UI just captures the rule + template.

import { useEffect, useSyncExternalStore } from "react";
import { supabase } from "@/integrations/supabase/client";
import { refreshCrm, type Person, type Region, type MembershipStatus } from "./mock-crm";
import type { ApplicationTypeId } from "@/lib/membership-types";

// ------------- Newsletter opt-ins -------------

export const NEWSLETTERS = [
  { id: "bali_weekly", label: "BALI Weekly", description: "The essential Monday round-up of industry news, member stories and policy updates." },
  { id: "go_landscape", label: "Go Landscape", description: "Careers, apprenticeships and training opportunities across UK landscaping." },
  { id: "forum", label: "Forum", description: "Notifications when new discussions or answers arrive in the member forum." },
  { id: "landscape_news", label: "Landscape News", description: "The quarterly BALI magazine, delivered as a digital edition." },
  { id: "regional", label: "Regional newsletter", description: "News, meet-ups and events from your BALI region." },
  { id: "events_awards", label: "Event & awards updates", description: "Conference, awards evenings, regional meets and CPD events you can book." },
] as const;
export type NewsletterKey = (typeof NEWSLETTERS)[number]["id"];
export const NEWSLETTER_KEYS: NewsletterKey[] = NEWSLETTERS.map((n) => n.id);

// ------------- Person "type" (for filtering) -------------

export type PersonType =
  | "Individual Member"
  | "Contact"
  | "ROLO Trainer"
  | "Staff";

export const ALL_PERSON_TYPES: PersonType[] = [
  "Individual Member", "Contact", "ROLO Trainer", "Staff",
];

export function personType(p: Person): PersonType {
  if (p.applicationType === "bali_rolo_training_provider") return "ROLO Trainer";
  if (!p.organisationId) return "Individual Member";
  return "Contact";
}

// ------------- Mailing list segment -------------

export type SegmentFilter = {
  categories: ApplicationTypeId[];
  regions: Region[];
  statuses: MembershipStatus[];
  personTypes: PersonType[];
  requiredOptIns: NewsletterKey[];
};

export const EMPTY_FILTER: SegmentFilter = {
  categories: [], regions: [], statuses: [], personTypes: [], requiredOptIns: [],
};

export type Segment = {
  id: string;
  name: string;
  description: string;
  filter: SegmentFilter;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  lastSyncedAt: string | null;
  mailchimpAudienceId: string | null;
  // Engagement placeholders — real data needs Mailchimp integration.
  // TODO (agency): populate from Mailchimp reporting API.
  engagement: {
    sent: number;
    opens: number;
    clicks: number;
    unsubscribes: number;
    lastSentAt: string | null;
  };
};

// ------------- Automations (UI prototype) -------------

export type Automation = {
  id: string;
  name: string;
  trigger: string;
  description: string;
  channel: "Transactional" | "Marketing";
  enabled: boolean;
  template: string;
  updatedAt: string;
};

function seedAutomations(): Automation[] {
  const t = "2026-06-01T09:00:00.000Z";
  return [
    { id: "a-welcome", name: "Welcome email", trigger: "New member approved", description: "Sent to a new member on the day their application is approved.", channel: "Transactional", enabled: true, template: "Welcome to BALI, {{first_name}} — your membership is live.", updatedAt: t },
    { id: "a-onboarding", name: "Onboarding link", trigger: "Application approved → account created", description: "Emails the applicant a one-time link to set up their profile and directory listing.", channel: "Transactional", enabled: true, template: "Hi {{first_name}}, complete your BALI profile in five minutes: {{onboarding_link}}", updatedAt: t },
    { id: "a-renew-60", name: "Renewal reminder — 60 days", trigger: "60 days before membership contract end", description: "First nudge on the renewal journey.", channel: "Transactional", enabled: true, template: "Your BALI membership renews on {{renewal_date}}.", updatedAt: t },
    { id: "a-renew-30", name: "Renewal reminder — 30 days", trigger: "30 days before membership contract end", description: "Second reminder with an easy-renew CTA.", channel: "Transactional", enabled: true, template: "Renew now to keep your directory listing and member pricing — {{renew_url}}", updatedAt: t },
    { id: "a-renew-7", name: "Renewal reminder — 7 days", trigger: "7 days before membership contract end", description: "Final reminder before lapse.", channel: "Transactional", enabled: true, template: "Only 7 days left, {{first_name}}. Renew today to stay accredited.", updatedAt: t },
    { id: "a-qsr", name: "QSR reminder", trigger: "Next QSR due", description: "Reminds the member their Quality Standard Return is due.", channel: "Transactional", enabled: true, template: "Your next Quality Standard Return is due on {{qsr_due}}.", updatedAt: t },
    { id: "a-invoice", name: "Invoice / payment reminder", trigger: "Invoice unpaid after 14 days", description: "Chases unpaid invoices before escalation.", channel: "Transactional", enabled: false, template: "A gentle reminder your invoice #{{invoice_no}} is now overdue.", updatedAt: t },
    { id: "a-booking", name: "Event booking confirmation", trigger: "Event booking completed", description: "Sent on booking with tickets and calendar file.", channel: "Transactional", enabled: true, template: "You're booked onto {{event_name}} on {{event_date}}. Add to calendar: {{ics_link}}", updatedAt: t },
    { id: "a-application-update", name: "Application status update", trigger: "Application stage changed", description: "Notifies the applicant when their application moves stage.", channel: "Transactional", enabled: true, template: "Your BALI application is now at stage: {{stage}}.", updatedAt: t },
    { id: "a-winback", name: "Lapsed win-back", trigger: "Membership lapsed for 30 days", description: "Marketing win-back sequence for lapsed members.", channel: "Marketing", enabled: false, template: "We miss you at BALI — here's what you've been missing this quarter.", updatedAt: t },
  ];
}

// ------------- Store -------------

type State = {
  segments: Segment[];
  automations: Automation[];
  loaded: boolean;
};

let state: State = { segments: [], automations: seedAutomations(), loaded: false };
const listeners = new Set<() => void>();
function emit() { for (const l of listeners) l(); }
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() { return state; }

// Parse a stored filter row into a SegmentFilter, defensively.
function toFilter(raw: unknown): SegmentFilter {
  const f = (raw ?? {}) as Record<string, unknown>;
  const arr = (v: unknown) => Array.isArray(v) ? v.filter((x) => typeof x === "string") as string[] : [];
  return {
    categories: arr(f.categories) as ApplicationTypeId[],
    regions: arr(f.regions) as Region[],
    statuses: arr(f.statuses) as MembershipStatus[],
    personTypes: arr(f.personTypes) as PersonType[],
    requiredOptIns: arr(f.requiredOptIns) as NewsletterKey[],
  };
}

// Random synthetic engagement for existing rows so the UI has something to
// show until Mailchimp reporting is wired up.
function placeholderEngagement(seed: string): Segment["engagement"] {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  const sent = 400 + (h % 1600);
  return {
    sent,
    opens: Math.round(sent * (0.35 + ((h >> 3) % 30) / 100)),
    clicks: Math.round(sent * (0.05 + ((h >> 5) % 15) / 100)),
    unsubscribes: (h % 8),
    lastSentAt: null,
  };
}

type MailingRow = {
  id: string;
  name: string;
  description: string | null;
  filter: unknown;
  member_count: number;
  created_by: string | null;
  created_at: string;
  updated_at: string;
};

function mapSegment(r: MailingRow): Segment {
  return {
    id: r.id,
    name: r.name,
    description: r.description ?? "",
    filter: toFilter(r.filter),
    createdBy: r.created_by ?? "Admin",
    createdAt: r.created_at,
    updatedAt: r.updated_at,
    lastSyncedAt: null,
    mailchimpAudienceId: null,
    engagement: placeholderEngagement(r.id),
  };
}

let hydratePromise: Promise<void> | null = null;

export async function refreshSegments(): Promise<void> {
  const { data, error } = await supabase
    .from("mailing_lists")
    .select("id,name,description,filter,member_count,created_by,created_at,updated_at")
    .order("updated_at", { ascending: false });
  if (error) return;
  const segments = (data ?? []).map((r) => mapSegment(r as MailingRow));
  state = { ...state, segments, loaded: true };
  emit();
}

function ensureHydrated() {
  if (!hydratePromise) hydratePromise = refreshSegments();
  return hydratePromise;
}

export function useMailingStore() {
  const s = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  useEffect(() => { void ensureHydrated(); }, []);
  return s;
}

// ------------- Opt-ins (workbooks_people.newsletter_opts) -------------

// Kept synchronous — the CRM store caches newsletter_opts on each Person.
// Callers must ensure `useCrm()` has hydrated at least once (mailing routes
// already do).
import { getPerson } from "./mock-crm";

export function getOptIns(personId: string): NewsletterKey[] {
  const p = getPerson(personId);
  return (p?.newsletterOpts ?? []).filter((k): k is NewsletterKey =>
    NEWSLETTER_KEYS.includes(k as NewsletterKey),
  );
}

export async function setOptIns(personId: string, opts: NewsletterKey[]): Promise<void> {
  const { error } = await supabase
    .from("workbooks_people")
    .update({ newsletter_opts: opts })
    .eq("wb_id", personId);
  if (error) throw error;
  await refreshCrm();
}

export async function toggleOptIn(personId: string, key: NewsletterKey): Promise<void> {
  const cur = getOptIns(personId);
  const next = cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key];
  await setOptIns(personId, next);
}

// ------------- Segments CRUD -------------

export function listSegments(): Segment[] { return state.segments; }
export function getSegment(id: string): Segment | undefined {
  return state.segments.find((s) => s.id === id);
}

export async function createSegment(input: {
  name: string; description: string; filter: SegmentFilter; createdBy?: string;
}): Promise<Segment> {
  const { data, error } = await supabase
    .from("mailing_lists")
    .insert({
      name: input.name,
      description: input.description,
      filter: input.filter as unknown as never,
      created_by: input.createdBy ?? "Admin",
      member_count: 0,
    })
    .select("id,name,description,filter,member_count,created_by,created_at,updated_at")
    .single();
  if (error || !data) throw error ?? new Error("Failed to create mailing list");
  const seg = mapSegment(data as MailingRow);
  state = { ...state, segments: [seg, ...state.segments] };
  emit();
  return seg;
}

export async function updateSegment(id: string, patch: Partial<Pick<Segment, "name" | "description" | "filter">>): Promise<void> {
  const update: Record<string, unknown> = {};
  if (patch.name !== undefined) update.name = patch.name;
  if (patch.description !== undefined) update.description = patch.description;
  if (patch.filter !== undefined) update.filter = patch.filter;
  const { error } = await supabase.from("mailing_lists").update(update as never).eq("id", id);
  if (error) throw error;
  await refreshSegments();
}

export async function deleteSegment(id: string): Promise<void> {
  const { error } = await supabase.from("mailing_lists").delete().eq("id", id);
  if (error) throw error;
  state = { ...state, segments: state.segments.filter((s) => s.id !== id) };
  emit();
}

export async function markSynced(id: string): Promise<void> {
  // TODO (agency): real Mailchimp audience sync — POST members + tags via
  // Mailchimp API and store the audience id back on the row.
  const seg = state.segments.find((s) => s.id === id);
  if (!seg) return;
  const now = new Date().toISOString();
  state = {
    ...state,
    segments: state.segments.map((s) =>
      s.id === id
        ? { ...s, lastSyncedAt: now, mailchimpAudienceId: `mc-${Math.random().toString(36).slice(2, 8)}` }
        : s,
    ),
  };
  emit();
}

// ------------- Automations CRUD (in-memory prototype) -------------

export function listAutomations(): Automation[] { return state.automations; }
export function updateAutomation(id: string, patch: Partial<Automation>) {
  state = {
    ...state,
    automations: state.automations.map((a) =>
      a.id === id ? { ...a, ...patch, updatedAt: new Date().toISOString() } : a,
    ),
  };
  emit();
}

// ------------- Filter evaluation -------------

export function matchesFilter(p: Person, filter: SegmentFilter): boolean {
  if (filter.categories.length && !filter.categories.includes(p.applicationType)) return false;
  if (filter.regions.length && !filter.regions.includes(p.region)) return false;
  if (filter.statuses.length && !filter.statuses.includes(p.status)) return false;
  if (filter.personTypes.length && !filter.personTypes.includes(personType(p))) return false;
  if (filter.requiredOptIns.length) {
    const opts = p.newsletterOpts;
    for (const k of filter.requiredOptIns) if (!opts.includes(k)) return false;
  }
  return true;
}

export function countMembers(people: Person[], filter: SegmentFilter): number {
  let n = 0;
  for (const p of people) if (matchesFilter(p, filter)) n++;
  return n;
}

export function filteredPeople(people: Person[], filter: SegmentFilter): Person[] {
  return people.filter((p) => matchesFilter(p, filter));
}

export const ALL_STATUSES: MembershipStatus[] = ["Active", "Lapsed", "Prospect", "Applicant"];

export type { Person };
