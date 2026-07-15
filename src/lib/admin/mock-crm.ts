// Mock people + organisations layer for the admin. Applications are NOT
// in this file — they live in `applications.ts` and read from Supabase.
// TODO: replace this mock CRM layer with real backend API calls.

import { useSyncExternalStore } from "react";
import { APPLICATION_TYPES, type ApplicationTypeId } from "@/lib/membership-types";

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

// Main vs nominated contact permission model.
// A person is EITHER the main contact for their organisation OR a nominated
// contact — never both. Only ONE main contact per organisation.
//
// TODO: this maps directly to Workbooks' "main / nominated contact" model
// on the CRM side. When we wire the real backend, enforce this rule
// server-side (exactly one main contact per organisation) with a DB
// constraint or trigger — the client check here is UX only.
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
  applicationType: ApplicationTypeId; // persists after approval
  contactRole: ContactRole;
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
  applicationType: ApplicationTypeId; // persists after approval
};

const REGIONS: Region[] = [
  "South East", "South West", "London", "Midlands",
  "North West", "North East", "Yorkshire", "Scotland", "Wales", "Northern Ireland",
];
const DISCIPLINES: Discipline[] = [
  "Designer", "Contractor", "Supplier", "Training Provider", "Consultant", "Maintenance",
];

const ORG_SEED: Array<Omit<Organisation, "id" | "applicationType">> = [
  { name: "Greenacres Landscapes Ltd", town: "Guildford", county: "Surrey", region: "South East", discipline: "Contractor", website: "greenacres.co.uk", phone: "01483 555 010", status: "Active", memberSince: "2015-04-12", size: "25-50" },
  { name: "Oak & Stone Design Studio", town: "Bath", county: "Somerset", region: "South West", discipline: "Designer", website: "oakandstone.co.uk", phone: "01225 555 021", status: "Active", memberSince: "2018-09-01", size: "1-10" },
  { name: "Chiltern Nurseries", town: "High Wycombe", county: "Buckinghamshire", region: "South East", discipline: "Supplier", website: "chilternnurseries.co.uk", phone: "01494 555 099", status: "Active", memberSince: "2011-06-20", size: "50-100" },
  { name: "Northern Grounds Care", town: "Manchester", county: "Greater Manchester", region: "North West", discipline: "Maintenance", website: "northerngrounds.co.uk", phone: "0161 555 4410", status: "Active", memberSince: "2020-02-14", size: "10-25" },
  { name: "Highland Training Academy", town: "Inverness", county: "Highland", region: "Scotland", discipline: "Training Provider", website: "highland-training.scot", phone: "01463 555 200", status: "Active", memberSince: "2019-11-03", size: "10-25" },
  { name: "Rivers & Rills Consulting", town: "Bristol", county: "Bristol", region: "South West", discipline: "Consultant", website: "riversrills.co.uk", phone: "0117 555 3300", status: "Active", memberSince: "2016-07-08", size: "1-10" },
  { name: "Yorkshire Stoneworks", town: "Harrogate", county: "North Yorkshire", region: "Yorkshire", discipline: "Supplier", website: "yorkstonework.co.uk", phone: "01423 555 501", status: "Lapsed", memberSince: "2013-03-19", size: "10-25" },
  { name: "Capital Garden Design", town: "London", county: "Greater London", region: "London", discipline: "Designer", website: "capitalgardens.london", phone: "020 7555 8801", status: "Active", memberSince: "2017-05-30", size: "1-10" },
  { name: "Cambrian Landscapes", town: "Cardiff", county: "Cardiff", region: "Wales", discipline: "Contractor", website: "cambrianscapes.wales", phone: "029 2055 1188", status: "Prospect", memberSince: "2024-01-15", size: "10-25" },
  { name: "Ulster Green Spaces", town: "Belfast", county: "Antrim", region: "Northern Ireland", discipline: "Contractor", website: "ulstergreen.co.uk", phone: "028 9055 7788", status: "Active", memberSince: "2021-10-12", size: "10-25" },
  { name: "Fenland Turf & Seed", town: "Peterborough", county: "Cambridgeshire", region: "Midlands", discipline: "Supplier", website: "fenlandturf.co.uk", phone: "01733 555 220", status: "Active", memberSince: "2014-08-08", size: "10-25" },
  { name: "Tyneside Tree Care", town: "Newcastle", county: "Tyne and Wear", region: "North East", discipline: "Maintenance", website: "tynesidetrees.co.uk", phone: "0191 555 6600", status: "Active", memberSince: "2019-04-22", size: "1-10" },
];

function deriveOrgType(o: Omit<Organisation, "id" | "applicationType">): ApplicationTypeId {
  const year = Number(o.memberSince.slice(0, 4));
  const accredited = year <= 2017;
  switch (o.discipline) {
    case "Contractor":       return accredited ? "accredited_contractor" : "associate_contractor";
    case "Designer":         return accredited ? "accredited_designer" : "associate_designer";
    case "Supplier":         return accredited ? "accredited_supplier" : "associate_supplier";
    case "Training Provider":return "bali_training_provider";
    case "Consultant":       return "associate_individual";
    case "Maintenance":      return accredited ? "accredited_contractor" : "associate_contractor";
    default:                 return "associate_individual";
  }
}

function makeOrgs(): Organisation[] {
  return ORG_SEED.map((o, i) => ({ ...o, id: `org-${i + 1}`, applicationType: deriveOrgType(o) }));
}
void APPLICATION_TYPES;

const FIRST = ["Amelia","James","Priya","Ollie","Sara","Marcus","Ella","Tom","Harriet","Rhys","Isla","Ben","Chloe","David","Fiona","Grace","Henry","Jack","Kate","Liam","Nadia","Owen","Poppy","Ravi","Sophie","Theo","Ursula","Vince","Wren","Yara"];
const LAST = ["Bennett","Clarke","Patel","Hughes","O'Neill","Ward","Foster","Reid","Blake","Ellis","Doyle","Ford","Gill","Harper","Ives","Jones","Khan","Lowe","Mills","Nash"];

function makePeople(orgs: Organisation[]): Person[] {
  const people: Person[] = [];
  let i = 0;
  for (const org of orgs) {
    const count = 1 + (i % 3);
    for (let k = 0; k < count; k++) {
      const first = FIRST[(i * 3 + k) % FIRST.length];
      const last = LAST[(i * 5 + k) % LAST.length];
      const name = `${first} ${last}`;
      people.push({
        id: `p-${people.length + 1}`,
        name,
        role: k === 0 ? "Managing Director" : k === 1 ? "Operations Manager" : "Senior Designer",
        email: `${first.toLowerCase()}.${last.toLowerCase().replace(/[^a-z]/g,"")}@${org.website}`,
        phone: org.phone,
        town: org.town,
        county: org.county,
        region: org.region,
        discipline: org.discipline,
        organisationId: org.id,
        status: org.status,
        joined: org.memberSince,
        applicationType: org.applicationType,
        // First person of each org is the main contact; the rest are nominated.
        contactRole: k === 0 ? "main" : "nominated",
      });
    }
    i++;
  }
  people.push({ id: `p-${people.length + 1}`, name: "Rosa Kingsley", role: "Independent Designer", email: "rosa@kingsleydesign.co.uk", phone: "07700 900123", town: "Oxford", county: "Oxfordshire", region: "South East", discipline: "Designer", organisationId: null, status: "Active", joined: "2022-05-01", applicationType: "associate_individual", contactRole: "main" });
  people.push({ id: `p-${people.length + 1}`, name: "Alan Beckworth", role: "Consultant", email: "alan@beckworth.co.uk", phone: "07700 900987", town: "Leeds", county: "West Yorkshire", region: "Yorkshire", discipline: "Consultant", organisationId: null, status: "Active", joined: "2021-11-11", applicationType: "associate_individual", contactRole: "main" });

  // Demo accounts wired to /my-bali auth (see src/services/auth.ts).
  // Both belong to Greenacres Landscapes Ltd (org-1) so we can show the
  // main-vs-nominated permission split on a single organisation.
  const greenacresPeople = people.filter((p) => p.organisationId === "org-1");
  const demoMain = greenacresPeople[0];
  if (demoMain) { demoMain.name = "Demo Member"; demoMain.email = "demo@bali.org.uk"; demoMain.contactRole = "main"; }
  const demoNominated = greenacresPeople[1];
  if (demoNominated) { demoNominated.name = "Nominated Contact"; demoNominated.email = "nominated@bali.org.uk"; demoNominated.contactRole = "nominated"; }

  return people;
}

type State = { organisations: Organisation[]; people: Person[] };
function initial(): State { const orgs = makeOrgs(); return { organisations: orgs, people: makePeople(orgs) }; }

let state: State = initial();
const listeners = new Set<() => void>();
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() { return state; }
function emit() { for (const l of listeners) l(); }
export function useCrm() { return useSyncExternalStore(subscribe, getSnapshot, getSnapshot); }

export function getPerson(id: string) { return state.people.find((p) => p.id === id); }
export function getOrganisation(id: string) { return state.organisations.find((o) => o.id === id); }

/** Find the person record for a signed-in /my-bali user by email. */
export function getPersonByEmail(email: string | null | undefined): Person | null {
  if (!email) return null;
  const e = email.trim().toLowerCase();
  return state.people.find((p) => p.email.toLowerCase() === e) ?? null;
}

/**
 * Make `personId` the main contact for their organisation, and demote any
 * previous main contact in that organisation to a nominated contact.
 * TODO: replace with backend call that enforces the constraint server-side.
 */
export function setAsMainContact(personId: string) {
  const target = state.people.find((p) => p.id === personId);
  if (!target || !target.organisationId) return;
  const orgId = target.organisationId;
  state = {
    ...state,
    people: state.people.map((p) => {
      if (p.organisationId !== orgId) return p;
      if (p.id === personId) return { ...p, contactRole: "main" as const };
      if (p.contactRole === "main") return { ...p, contactRole: "nominated" as const };
      return p;
    }),
  };
  emit();
}

export const ALL_REGIONS = REGIONS;
export const ALL_DISCIPLINES = DISCIPLINES;

export function searchPeopleOrgs(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return { people: [], organisations: [] };
  return {
    people: state.people.filter((p) => p.name.toLowerCase().includes(s) || p.email.toLowerCase().includes(s)).slice(0, 8),
    organisations: state.organisations.filter((o) => o.name.toLowerCase().includes(s) || o.town.toLowerCase().includes(s)).slice(0, 8),
  };
}
