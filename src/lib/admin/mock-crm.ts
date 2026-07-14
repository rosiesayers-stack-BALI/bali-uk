// TODO: Replace this entire mock CRM layer with real backend API calls.
// This file provides in-memory + localStorage-backed mock data for the
// People / Organisations / Applications admin features.

import { useSyncExternalStore } from "react";

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
  joined: string; // ISO date
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
  size: string; // e.g. "1-10"
};

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

export type OnboardingStatus = "Not started" | "Started" | "Completed";

export type ApplicationNote = {
  id: string;
  author: string;
  createdAt: string;
  text: string;
};

export type ApplicationHistory = {
  id: string;
  at: string;
  from: ApplicationStage | null;
  to: ApplicationStage;
  by: string;
  note?: string;
};

export type Application = {
  id: string;
  applicantName: string;
  organisation: string;
  town: string;
  county: string;
  region: Region;
  discipline: Discipline;
  email: string;
  phone: string;
  dateApplied: string;
  stage: ApplicationStage;
  onboarding: OnboardingStatus;
  onboardingLink?: string;
  notes: ApplicationNote[];
  history: ApplicationHistory[];
};

// ------------------------- Sample data -------------------------

const REGIONS: Region[] = [
  "South East", "South West", "London", "Midlands",
  "North West", "North East", "Yorkshire", "Scotland", "Wales", "Northern Ireland",
];
const DISCIPLINES: Discipline[] = [
  "Designer", "Contractor", "Supplier", "Training Provider", "Consultant", "Maintenance",
];

const ORG_SEED: Array<Omit<Organisation, "id">> = [
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

function makeOrgs(): Organisation[] {
  return ORG_SEED.map((o, i) => ({ ...o, id: `org-${i + 1}` }));
}

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
      });
    }
    i++;
  }
  // Two individual (no-org) members
  people.push({ id: `p-${people.length + 1}`, name: "Rosa Kingsley", role: "Independent Designer", email: "rosa@kingsleydesign.co.uk", phone: "07700 900123", town: "Oxford", county: "Oxfordshire", region: "South East", discipline: "Designer", organisationId: null, status: "Active", joined: "2022-05-01" });
  people.push({ id: `p-${people.length + 1}`, name: "Alan Beckworth", role: "Consultant", email: "alan@beckworth.co.uk", phone: "07700 900987", town: "Leeds", county: "West Yorkshire", region: "Yorkshire", discipline: "Consultant", organisationId: null, status: "Active", joined: "2021-11-11" });
  return people;
}

function makeApplications(): Application[] {
  const rows: Array<[string, string, string, string, Region, Discipline, ApplicationStage, number]> = [
    ["Nikita Rowe", "Rowe Green Studios", "Brighton", "East Sussex", "South East", "Designer", "Applied", 2],
    ["Callum Wright", "Wright Grounds", "Sheffield", "South Yorkshire", "Yorkshire", "Maintenance", "Applied", 4],
    ["Priyanka Shah", "Shah Landscapes", "Reading", "Berkshire", "South East", "Contractor", "Under review", 7],
    ["Marcus Fielding", "Fielding & Co", "Norwich", "Norfolk", "Midlands", "Supplier", "Under review", 9],
    ["Iris O'Donnell", "Wildflower Trails", "Galway-on-Thames", "Hampshire", "South East", "Designer", "Checks/references", 12],
    ["Ben Lockwood", "Lockwood Trees", "Exeter", "Devon", "South West", "Maintenance", "Checks/references", 14],
    ["Harriet Vale", "Vale Training Ltd", "Chester", "Cheshire", "North West", "Training Provider", "Approved", 18],
    ["Sanjay Kapoor", "Kapoor Consulting", "Edinburgh", "Midlothian", "Scotland", "Consultant", "Onboarding link sent", 22],
    ["Ellie Nash", "Nash Nurseries", "Truro", "Cornwall", "South West", "Supplier", "Onboarding link sent", 25],
    ["Rhys Morgan", "Morgan Landscapes", "Swansea", "Swansea", "Wales", "Contractor", "Active", 40],
    ["Dara Lynch", "Lynch Garden Design", "Belfast", "Antrim", "Northern Ireland", "Designer", "Rejected", 30],
    ["Fiona Reid", "Reid & Sons", "Aberdeen", "Aberdeenshire", "Scotland", "Contractor", "On-hold", 20],
  ];
  const now = Date.now();
  return rows.map(([name, org, town, county, region, discipline, stage, daysAgo], idx) => {
    const applied = new Date(now - daysAgo * 86400000).toISOString();
    const onboarding: OnboardingStatus =
      stage === "Active" ? "Completed" :
      stage === "Onboarding link sent" ? (idx % 2 === 0 ? "Started" : "Not started") :
      "Not started";
    return {
      id: `app-${idx + 1}`,
      applicantName: name,
      organisation: org,
      town, county, region, discipline,
      email: `${name.split(" ")[0].toLowerCase()}@${org.toLowerCase().replace(/[^a-z]+/g,"")}.co.uk`,
      phone: "01" + (200 + idx) + " 555 " + (100 + idx),
      dateApplied: applied,
      stage,
      onboarding,
      onboardingLink: stage === "Onboarding link sent" || stage === "Active" ? `https://bali.org.uk/onboard/${idx}-mock-token` : undefined,
      notes: idx % 3 === 0 ? [{ id: "n1", author: "Staff", createdAt: applied, text: "Initial screening OK. Awaiting more info." }] : [],
      history: [{ id: "h1", at: applied, from: null, to: "Applied", by: "System" }],
    };
  });
}

// ------------------------- Store -------------------------

const LS_KEY = "bali_admin_mockcrm_v1";

type State = {
  organisations: Organisation[];
  people: Person[];
  applications: Application[];
};

function initial(): State {
  const orgs = makeOrgs();
  return { organisations: orgs, people: makePeople(orgs), applications: makeApplications() };
}

function load(): State {
  if (typeof window === "undefined") return initial();
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return initial();
    const parsed = JSON.parse(raw) as State;
    if (!parsed.applications || !parsed.people || !parsed.organisations) return initial();
    return parsed;
  } catch {
    return initial();
  }
}

let state: State = load();
const listeners = new Set<() => void>();

function persist() {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch { /* noop */ }
}
function emit() { persist(); listeners.forEach((l) => l()); }

export function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}
export function getSnapshot(): State { return state; }
function getServerSnapshot(): State { return state; }

export function useCrm() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// ------------------------- Actions -------------------------

// TODO: replace with backend PATCH /applications/:id
export function moveApplicationStage(id: string, to: ApplicationStage, by = "Staff", note?: string) {
  state = {
    ...state,
    applications: state.applications.map((a) =>
      a.id === id
        ? {
            ...a,
            stage: to,
            history: [
              ...a.history,
              { id: `h-${Date.now()}`, at: new Date().toISOString(), from: a.stage, to, by, note },
            ],
          }
        : a,
    ),
  };
  emit();
}

// TODO: replace with backend POST /applications/:id/notes
export function addApplicationNote(id: string, text: string, author = "Staff") {
  state = {
    ...state,
    applications: state.applications.map((a) =>
      a.id === id
        ? { ...a, notes: [...a.notes, { id: `n-${Date.now()}`, author, createdAt: new Date().toISOString(), text }] }
        : a,
    ),
  };
  emit();
}

// TODO: replace with backend POST /applications/:id/onboarding-link (emails member)
export function sendOnboardingLink(id: string) {
  const token = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const link = `https://bali.org.uk/onboard/${token}`;
  state = {
    ...state,
    applications: state.applications.map((a) =>
      a.id === id
        ? {
            ...a,
            stage: "Onboarding link sent",
            onboardingLink: link,
            onboarding: a.onboarding === "Not started" ? "Not started" : a.onboarding,
            history: [
              ...a.history,
              { id: `h-${Date.now()}`, at: new Date().toISOString(), from: a.stage, to: "Onboarding link sent", by: "Staff", note: "Onboarding link generated" },
            ],
          }
        : a,
    ),
  };
  emit();
  return link;
}

// ------------------------- Selectors -------------------------

export function getPerson(id: string) {
  return state.people.find((p) => p.id === id);
}
export function getOrganisation(id: string) {
  return state.organisations.find((o) => o.id === id);
}
export function getApplication(id: string) {
  return state.applications.find((a) => a.id === id);
}

export const ALL_REGIONS = REGIONS;
export const ALL_DISCIPLINES = DISCIPLINES;

export function globalSearch(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return { people: [], organisations: [], applications: [] };
  return {
    people: state.people.filter((p) => p.name.toLowerCase().includes(s) || p.email.toLowerCase().includes(s)).slice(0, 8),
    organisations: state.organisations.filter((o) => o.name.toLowerCase().includes(s) || o.town.toLowerCase().includes(s)).slice(0, 8),
    applications: state.applications.filter((a) => a.applicantName.toLowerCase().includes(s) || a.organisation.toLowerCase().includes(s)).slice(0, 6),
  };
}
