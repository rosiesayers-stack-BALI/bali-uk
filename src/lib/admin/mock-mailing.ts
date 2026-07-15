// Mock mailing lists / opt-ins / automations for /admin.
// Runs entirely in-memory + localStorage; no real backend.
// TODO: wire to Mailchimp API — audience sync, tag/segment create, engagement stats.
// TODO: wire to backend scheduler + Mailchimp/transactional email for automations.

import { useSyncExternalStore } from "react";
import type {
  Person, Organisation, Region, MembershipStatus,
} from "./mock-crm";
import { ALL_REGIONS } from "./mock-crm";
import type { ApplicationTypeId } from "@/lib/membership-types";
import { APPLICATION_TYPES } from "@/lib/membership-types";

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

// The "primary" opt-in every member is asked about first when they join —
// used as a sensible default for seeded people.
const DEFAULT_OPTINS: NewsletterKey[] = ["bali_weekly", "regional", "events_awards"];

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
  categories: ApplicationTypeId[];   // empty = any
  regions: Region[];                 // empty = any
  statuses: MembershipStatus[];      // empty = any
  personTypes: PersonType[];         // empty = any
  requiredOptIns: NewsletterKey[];   // person must be opted in to ALL listed
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
  // Mock engagement (last-send stats)
  engagement: {
    sent: number;
    opens: number;
    clicks: number;
    unsubscribes: number;
    lastSentAt: string | null;
  };
};

// ------------- Automations -------------

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

// ------------- Persistence -------------

const KEY_OPTINS = "bali_mailing_optins_v1";
const KEY_SEGMENTS = "bali_mailing_segments_v1";
const KEY_AUTOMATIONS = "bali_mailing_automations_v1";

function readLS<T>(k: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(k);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch { return fallback; }
}
function writeLS<T>(k: string, v: T) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(k, JSON.stringify(v)); } catch { /* quota */ }
}

// ------------- Seeds -------------

function seedOptIns(): Record<string, NewsletterKey[]> {
  // Give everyone the defaults; a handful get the extras.
  const map: Record<string, NewsletterKey[]> = {};
  // We can't know person ids until CRM initialises; instead we lazily seed
  // on first read. This function only supplies the shape.
  return map;
}

function nowIso() { return new Date().toISOString(); }

function seedSegments(): Segment[] {
  const base = (over: Partial<Segment>): Segment => ({
    id: over.id ?? `seg-${Math.random().toString(36).slice(2, 8)}`,
    name: over.name ?? "Untitled",
    description: over.description ?? "",
    filter: { ...EMPTY_FILTER, ...(over.filter ?? {}) },
    createdBy: over.createdBy ?? "Kerrie Hutchings",
    createdAt: over.createdAt ?? "2026-05-14T09:15:00.000Z",
    updatedAt: over.updatedAt ?? "2026-06-02T14:20:00.000Z",
    lastSyncedAt: over.lastSyncedAt ?? null,
    mailchimpAudienceId: over.mailchimpAudienceId ?? null,
    engagement: over.engagement ?? {
      sent: 0, opens: 0, clicks: 0, unsubscribes: 0, lastSentAt: null,
    },
  });
  return [
    base({
      id: "seg-active-all",
      name: "All active members",
      description: "Every member currently in good standing — used as the umbrella audience.",
      filter: { ...EMPTY_FILTER, statuses: ["Active"] },
      lastSyncedAt: "2026-06-24T08:00:00.000Z",
      mailchimpAudienceId: "mc-9a1f42",
      engagement: { sent: 2354, opens: 1178, clicks: 289, unsubscribes: 4, lastSentAt: "2026-06-24T08:04:00.000Z" },
    }),
    base({
      id: "seg-weekly",
      name: "Weekly Newsletter",
      description: "Active members opted in to the BALI Weekly.",
      filter: { ...EMPTY_FILTER, statuses: ["Active"], requiredOptIns: ["bali_weekly"] },
      lastSyncedAt: "2026-06-24T08:00:00.000Z",
      mailchimpAudienceId: "mc-weekly",
      engagement: { sent: 1998, opens: 1104, clicks: 341, unsubscribes: 7, lastSentAt: "2026-06-22T07:00:00.000Z" },
    }),
    base({
      id: "seg-sw-regional",
      name: "South West regional",
      description: "Members in the South West region for regional meets and news.",
      filter: { ...EMPTY_FILTER, regions: ["South West"], requiredOptIns: ["regional"] },
    }),
    base({
      id: "seg-awards-contractors",
      name: "Awards 2026 — Contractors",
      description: "Accredited & Associate Contractors for the National Landscape Awards entry campaign.",
      filter: {
        ...EMPTY_FILTER,
        categories: ["accredited_contractor", "associate_contractor"],
        statuses: ["Active"],
      },
    }),
    base({
      id: "seg-training-providers",
      name: "BALI & ROLO Training Providers",
      description: "All training provider members for CPD and scheme updates.",
      filter: {
        ...EMPTY_FILTER,
        categories: ["bali_training_provider", "bali_rolo_training_provider"],
      },
    }),
    base({
      id: "seg-staff",
      name: "Staff only",
      description: "BALI head-office staff and directors for internal comms.",
      filter: { ...EMPTY_FILTER, personTypes: ["Staff"] },
    }),
  ];
}

function seedAutomations(): Automation[] {
  const t = "2026-06-01T09:00:00.000Z";
  return [
    { id: "a-welcome", name: "Welcome email", trigger: "New member approved", description: "Sent to a new member on the day their application is approved. Introduces the benefits, portal and key contacts.", channel: "Transactional", enabled: true, template: "Welcome to BALI, {{first_name}} — your membership is live. Here's how to log in and make the most of it…", updatedAt: t },
    { id: "a-onboarding", name: "Onboarding link", trigger: "Application approved → account created", description: "Emails the applicant a one-time link to set up their profile and directory listing.", channel: "Transactional", enabled: true, template: "Hi {{first_name}}, complete your BALI profile in five minutes: {{onboarding_link}}", updatedAt: t },
    { id: "a-renew-60", name: "Renewal reminder — 60 days", trigger: "60 days before membership contract end", description: "First nudge on the renewal journey.", channel: "Transactional", enabled: true, template: "Your BALI membership renews on {{renewal_date}}. Here's a summary of the year and what's changing for {{next_year}}.", updatedAt: t },
    { id: "a-renew-30", name: "Renewal reminder — 30 days", trigger: "30 days before membership contract end", description: "Second reminder with an easy-renew CTA.", channel: "Transactional", enabled: true, template: "Renew now to keep your directory listing and member pricing — {{renew_url}}", updatedAt: t },
    { id: "a-renew-7", name: "Renewal reminder — 7 days", trigger: "7 days before membership contract end", description: "Final reminder before lapse.", channel: "Transactional", enabled: true, template: "Only 7 days left, {{first_name}}. Renew today to stay accredited.", updatedAt: t },
    { id: "a-qsr", name: "QSR reminder", trigger: "Next QSR due", description: "Reminds the member their Quality Standard Return is due.", channel: "Transactional", enabled: true, template: "Your next Quality Standard Return is due on {{qsr_due}}. Book your inspector visit here.", updatedAt: t },
    { id: "a-invoice", name: "Invoice / payment reminder", trigger: "Invoice unpaid after 14 days", description: "Chases unpaid invoices before escalation.", channel: "Transactional", enabled: false, template: "A gentle reminder your invoice #{{invoice_no}} is now overdue.", updatedAt: t },
    { id: "a-booking", name: "Event booking confirmation", trigger: "Event booking completed", description: "Sent on booking with tickets and calendar file.", channel: "Transactional", enabled: true, template: "You're booked onto {{event_name}} on {{event_date}}. Add to calendar: {{ics_link}}", updatedAt: t },
    { id: "a-application-update", name: "Application status update", trigger: "Application stage changed", description: "Notifies the applicant when their application moves stage.", channel: "Transactional", enabled: true, template: "Your BALI application is now at stage: {{stage}}. What happens next…", updatedAt: t },
    { id: "a-winback", name: "Lapsed win-back", trigger: "Membership lapsed for 30 days", description: "Marketing win-back sequence for lapsed members.", channel: "Marketing", enabled: false, template: "We miss you at BALI — here's what you've been missing this quarter.", updatedAt: t },
  ];
}

// ------------- Store -------------

type State = {
  optIns: Record<string, NewsletterKey[]>; // personId -> opt-ins
  segments: Segment[];
  automations: Automation[];
};

let state: State = {
  optIns: readLS(KEY_OPTINS, seedOptIns()),
  segments: readLS(KEY_SEGMENTS, seedSegments()),
  automations: readLS(KEY_AUTOMATIONS, seedAutomations()),
};

// Backfill any empty stored state
if (state.segments.length === 0) state = { ...state, segments: seedSegments() };
if (state.automations.length === 0) state = { ...state, automations: seedAutomations() };

const listeners = new Set<() => void>();
function emit() { for (const l of listeners) l(); }
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() { return state; }

export function useMailingStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

// The current member (linked to the mock My BALI account) — used by the
// preference centre so unsubscribes visibly shrink segment counts.
export const CURRENT_MEMBER_PERSON_ID = "p-1";

export function getOptIns(personId: string, fallbackForSeed = true): NewsletterKey[] {
  const stored = state.optIns[personId];
  if (stored) return stored;
  return fallbackForSeed ? [...DEFAULT_OPTINS] : [];
}

export function setOptIns(personId: string, opts: NewsletterKey[]) {
  state = { ...state, optIns: { ...state.optIns, [personId]: [...opts] } };
  writeLS(KEY_OPTINS, state.optIns);
  emit();
}

export function toggleOptIn(personId: string, key: NewsletterKey) {
  const cur = getOptIns(personId);
  const next = cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key];
  setOptIns(personId, next);
}

// ------------- Segments CRUD -------------

export function listSegments(): Segment[] { return state.segments; }
export function getSegment(id: string): Segment | undefined {
  return state.segments.find((s) => s.id === id);
}

export function createSegment(input: {
  name: string; description: string; filter: SegmentFilter; createdBy?: string;
}): Segment {
  const now = nowIso();
  const seg: Segment = {
    id: `seg-${Math.random().toString(36).slice(2, 9)}`,
    name: input.name,
    description: input.description,
    filter: input.filter,
    createdBy: input.createdBy ?? "Admin",
    createdAt: now,
    updatedAt: now,
    lastSyncedAt: null,
    mailchimpAudienceId: null,
    engagement: { sent: 0, opens: 0, clicks: 0, unsubscribes: 0, lastSentAt: null },
  };
  state = { ...state, segments: [seg, ...state.segments] };
  writeLS(KEY_SEGMENTS, state.segments);
  emit();
  return seg;
}

export function updateSegment(id: string, patch: Partial<Segment>) {
  state = {
    ...state,
    segments: state.segments.map((s) => (s.id === id ? { ...s, ...patch, updatedAt: nowIso() } : s)),
  };
  writeLS(KEY_SEGMENTS, state.segments);
  emit();
}

export function deleteSegment(id: string) {
  state = { ...state, segments: state.segments.filter((s) => s.id !== id) };
  writeLS(KEY_SEGMENTS, state.segments);
  emit();
}

export function markSynced(id: string) {
  // TODO: real Mailchimp audience sync — POST members + tags to Mailchimp API.
  const audienceId = `mc-${Math.random().toString(36).slice(2, 8)}`;
  updateSegment(id, { lastSyncedAt: nowIso(), mailchimpAudienceId: audienceId });
}

// ------------- Automations CRUD -------------

export function listAutomations(): Automation[] { return state.automations; }
export function updateAutomation(id: string, patch: Partial<Automation>) {
  state = {
    ...state,
    automations: state.automations.map((a) => (a.id === id ? { ...a, ...patch, updatedAt: nowIso() } : a)),
  };
  writeLS(KEY_AUTOMATIONS, state.automations);
  emit();
}

// ------------- Filter evaluation -------------

export function matchesFilter(p: Person, filter: SegmentFilter): boolean {
  if (filter.categories.length && !filter.categories.includes(p.applicationType)) return false;
  if (filter.regions.length && !filter.regions.includes(p.region)) return false;
  if (filter.statuses.length && !filter.statuses.includes(p.status)) return false;
  if (filter.personTypes.length && !filter.personTypes.includes(personType(p))) return false;
  if (filter.requiredOptIns.length) {
    const opts = getOptIns(p.id);
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

// Small helper labels
export const ALL_STATUSES: MembershipStatus[] = ["Active", "Lapsed", "Prospect", "Applicant"];

// Silence unused warnings for values re-exported for clarity/typing.
void APPLICATION_TYPES; void ALL_REGIONS;
export type { Person, Organisation };
