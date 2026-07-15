// CRM adapter — Person + Organisation state, backed by the real
// `workbooks_orgs` and `workbooks_people` tables in Lovable Cloud.
//
// The exported API (types + functions) is preserved from the earlier
// mock version so that admin People/Organisations pages, the CRM search
// box, the mailing segment builder, and /my-bali contact-role permissions
// keep working with zero UI changes. Reads are hydrated once on first
// mount and cached in module state so getters can stay synchronous.
//
// TODO: this still passes through a client-side cache. For production,
// replace `useCrm()` with a React Query hook per view (people-list,
// organisation-detail, etc.) so admin edits invalidate correctly.

import { useEffect, useSyncExternalStore } from "react";
import { supabase } from "@/integrations/supabase/client";
import { APPLICATION_TYPES, type ApplicationTypeId } from "@/lib/membership-types";

// ---------- Types (unchanged shape) ----------

export type Discipline =
  | "Designer"
  | "Contractor"
  | "Supplier"
  | "Training Provider"
  | "Consultant"
  | "Maintenance";

export type Region =
  | "South East"
  | "South West"
  | "London"
  | "Midlands"
  | "North West"
  | "North East"
  | "Yorkshire"
  | "Scotland"
  | "Wales"
  | "Northern Ireland";

export type MembershipStatus = "Active" | "Lapsed" | "Prospect" | "Applicant";

export type ContactRole = "main" | "nominated";

export type Person = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  town: string;
  county: string;
  region: Region;
  discipline: Discipline;
  organisationId: string | null;
  status: MembershipStatus;
  joined: string;
  applicationType: ApplicationTypeId;
  contactRole: ContactRole;
  newsletterOpts: string[];
};

export type Organisation = {
  id: string;
  name: string;
  town: string;
  county: string;
  region: Region;
  discipline: Discipline;
  website: string;
  phone: string;
  status: MembershipStatus;
  memberSince: string;
  size: string;
  applicationType: ApplicationTypeId;
};

export const ALL_REGIONS: Region[] = [
  "South East", "South West", "London", "Midlands",
  "North West", "North East", "Yorkshire", "Scotland", "Wales", "Northern Ireland",
];
export const ALL_DISCIPLINES: Discipline[] = [
  "Designer", "Contractor", "Supplier", "Training Provider", "Consultant", "Maintenance",
];
void APPLICATION_TYPES;

// ---------- Mapping helpers ----------

function toRegion(v: unknown): Region {
  const s = typeof v === "string" ? v : "";
  if ((ALL_REGIONS as string[]).includes(s)) return s as Region;
  return "South East";
}
function toDiscipline(v: unknown): Discipline {
  const s = typeof v === "string" ? v : "";
  if ((ALL_DISCIPLINES as string[]).includes(s)) return s as Discipline;
  return "Contractor";
}
function toStatus(v: unknown): MembershipStatus {
  const s = typeof v === "string" ? v.toLowerCase() : "";
  if (s.includes("active")) return "Active";
  if (s.includes("lapsed")) return "Lapsed";
  if (s.includes("prospect")) return "Prospect";
  if (s.includes("applicant")) return "Applicant";
  return "Active";
}
function toAppType(v: unknown): ApplicationTypeId {
  const s = typeof v === "string" ? v : "";
  const known = APPLICATION_TYPES.find((t) => t.id === s);
  return (known?.id ?? "associate_individual") as ApplicationTypeId;
}
function firstDisciplineFromJsonb(v: unknown): Discipline {
  if (Array.isArray(v) && typeof v[0] === "string") return toDiscipline(v[0]);
  return "Contractor";
}
function cleanUrl(v: unknown): string {
  const s = typeof v === "string" ? v : "";
  return s.replace(/^https?:\/\//, "");
}

type OrgRow = {
  wb_id: string;
  name: string | null;
  category: string | null;
  status: string | null;
  region: string | null;
  disciplines: unknown;
  town: string | null;
  county: string | null;
  phone: string | null;
  website: string | null;
  membership_expires_at: string | null;
  created_at: string;
};

type PersonRow = {
  wb_id: string;
  wb_org_id: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  job_title: string | null;
  contact_role: string | null;
};

function mapOrg(row: OrgRow): Organisation {
  return {
    id: row.wb_id,
    name: row.name ?? "",
    town: row.town ?? "",
    county: row.county ?? "",
    region: toRegion(row.region),
    discipline: firstDisciplineFromJsonb(row.disciplines),
    website: cleanUrl(row.website),
    phone: row.phone ?? "",
    status: toStatus(row.status),
    memberSince: (row.created_at ?? "").slice(0, 10),
    size: "10-25",
    applicationType: toAppType(row.category),
  };
}

function mapPerson(row: PersonRow, orgMap: Map<string, Organisation>): Person {
  const org = row.wb_org_id ? orgMap.get(row.wb_org_id) ?? null : null;
  return {
    id: row.wb_id,
    name: row.name ?? "",
    role: row.job_title ?? "",
    email: row.email ?? "",
    phone: row.phone ?? "",
    town: org?.town ?? "",
    county: org?.county ?? "",
    region: org?.region ?? "South East",
    discipline: org?.discipline ?? "Contractor",
    organisationId: row.wb_org_id ?? null,
    status: org?.status ?? "Active",
    joined: org?.memberSince ?? "",
    applicationType: org?.applicationType ?? "associate_individual",
    contactRole: row.contact_role === "nominated" ? "nominated" : "main",
  };
}

// ---------- Store ----------

type State = {
  organisations: Organisation[];
  people: Person[];
  loaded: boolean;
};

let state: State = { organisations: [], people: [], loaded: false };
const listeners = new Set<() => void>();
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() { return state; }
function emit() { for (const l of listeners) l(); }

let hydratePromise: Promise<void> | null = null;

export async function refreshCrm(): Promise<void> {
  const [{ data: orgs, error: oe }, { data: peeps, error: pe }] = await Promise.all([
    supabase
      .from("workbooks_orgs")
      .select("wb_id,name,category,status,region,disciplines,town,county,phone,website,membership_expires_at,created_at"),
    supabase
      .from("workbooks_people")
      .select("wb_id,wb_org_id,name,email,phone,job_title,contact_role"),
  ]);
  if (oe || pe) return;
  const orgList: Organisation[] = (orgs ?? []).map((r) => mapOrg(r as OrgRow));
  const orgMap = new Map(orgList.map((o) => [o.id, o]));
  const peopleList: Person[] = (peeps ?? []).map((r) => mapPerson(r as PersonRow, orgMap));
  state = { organisations: orgList, people: peopleList, loaded: true };
  emit();
}

function ensureHydrated() {
  if (!hydratePromise) hydratePromise = refreshCrm();
  return hydratePromise;
}

// ---------- Hook + getters ----------

export function useCrm() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  useEffect(() => { void ensureHydrated(); }, []);
  return snapshot;
}

export function getPerson(id: string) { return state.people.find((p) => p.id === id); }
export function getOrganisation(id: string) { return state.organisations.find((o) => o.id === id); }

export function getPersonByEmail(email: string | null | undefined): Person | null {
  if (!email) return null;
  const e = email.trim().toLowerCase();
  return state.people.find((p) => p.email.toLowerCase() === e) ?? null;
}

/** Promote a person to main contact for their org; demote any existing main. */
export async function setAsMainContact(personId: string) {
  const target = state.people.find((p) => p.id === personId);
  if (!target || !target.organisationId) return;
  const orgId = target.organisationId;
  // Demote every existing main in this org, then promote the target.
  await supabase
    .from("workbooks_people")
    .update({ contact_role: "nominated", is_main_contact: false })
    .eq("wb_org_id", orgId);
  await supabase
    .from("workbooks_people")
    .update({ contact_role: "main", is_main_contact: true })
    .eq("wb_id", personId);
  await refreshCrm();
}

export function searchPeopleOrgs(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return { people: [], organisations: [] };
  return {
    people: state.people.filter((p) => p.name.toLowerCase().includes(s) || p.email.toLowerCase().includes(s)).slice(0, 8),
    organisations: state.organisations.filter((o) => o.name.toLowerCase().includes(s) || o.town.toLowerCase().includes(s)).slice(0, 8),
  };
}
