export type MemberCategory = "contractor" | "designer" | "supplier" | "training";

export type ProjectType =
  | "Garden Design"
  | "Hard Landscaping"
  | "Soft Landscaping & Planting"
  | "Grounds Maintenance"
  | "Irrigation"
  | "Trees & Arboriculture"
  | "Materials & Paving"
  | "Equipment & Tools"
  | "Public Realm & Community"
  | "Training & Education";

export const PROJECT_TYPES: ProjectType[] = [
  "Garden Design",
  "Hard Landscaping",
  "Soft Landscaping & Planting",
  "Grounds Maintenance",
  "Irrigation",
  "Trees & Arboriculture",
  "Materials & Paving",
  "Equipment & Tools",
  "Public Realm & Community",
  "Training & Education",
];

export type Member = {
  id: string;
  name: string;
  category: MemberCategory;
  region: string;
  postcode: string; // outward code, e.g. "B91", "SW1A"
  projectTypes: ProjectType[];
  specialism: string;
  description: string;
  established: number;
  accredited: true;
  website?: string;
  email?: string;
  phone?: string;
};

export const REGIONS = [
  "London",
  "South East",
  "South West",
  "East of England",
  "West Midlands",
  "East Midlands",
  "Yorkshire & Humber",
  "North West",
  "North East",
  "Wales",
  "Scotland",
  "Northern Ireland",
] as const;

export const CATEGORY_LABEL: Record<MemberCategory, string> = {
  contractor: "Contractor",
  designer: "Designer",
  supplier: "Supplier",
  training: "Training Provider",
};

export const CATEGORY_DESC: Record<MemberCategory, string> = {
  contractor: "Hard and soft landscaping, grounds maintenance and construction specialists.",
  designer: "Garden designers, landscape architects and design-build practices.",
  supplier: "Materials, plants, equipment and services for the trade.",
  training: "Colleges, commercial trainers and apprenticeship providers.",
};

export const MEMBERS: Member[] = [
  { id: "m1", name: "Mountbatten Gardens Ltd", category: "contractor", region: "South East", postcode: "PO5", projectTypes: ["Hard Landscaping", "Materials & Paving"], specialism: "Hard landscaping", description: "Bespoke residential and commercial hard landscaping with 20+ years on the south coast.", established: 2001, accredited: true, website: "https://example.com", email: "hello@mountbatten.example", phone: "+44 1234 567890" },
  { id: "m2", name: "Cheslyn Hay Landscapes", category: "contractor", region: "West Midlands", postcode: "WS6", projectTypes: ["Soft Landscaping & Planting", "Grounds Maintenance"], specialism: "Soft landscaping & grounds", description: "Award-winning soft landscaping and grounds maintenance for housebuilders and estates.", established: 1998, accredited: true, website: "https://example.com" },
  { id: "m3", name: "Worplesdon Garden Co.", category: "contractor", region: "South East", postcode: "GU3", projectTypes: ["Garden Design", "Hard Landscaping", "Soft Landscaping & Planting"], specialism: "Domestic gardens", description: "Premium residential gardens across Surrey, Hampshire and west London.", established: 2010, accredited: true },
  { id: "m4", name: "Aspire Community Works", category: "contractor", region: "Yorkshire & Humber", postcode: "LS1", projectTypes: ["Public Realm & Community", "Soft Landscaping & Planting"], specialism: "Public realm", description: "Public realm, parks and community landscape projects across the north.", established: 2007, accredited: true },
  { id: "m5", name: "JDR Group", category: "contractor", region: "East Midlands", postcode: "DE1", projectTypes: ["Grounds Maintenance", "Public Realm & Community"], specialism: "Commercial grounds", description: "National commercial grounds maintenance with FM clients across the UK.", established: 1992, accredited: true },
  { id: "m6", name: "Adrian Wickham Garden Design", category: "designer", region: "South East", postcode: "RG14", projectTypes: ["Garden Design", "Soft Landscaping & Planting"], specialism: "Country gardens", description: "Country garden design and masterplanning, RHS Chelsea medalist.", established: 1995, accredited: true, website: "https://example.com" },
  { id: "m7", name: "James Scott — The Garden Co.", category: "designer", region: "South West", postcode: "BA1", projectTypes: ["Garden Design"], specialism: "Contemporary residential", description: "Contemporary residential garden design across the south west and London.", established: 2003, accredited: true },
  { id: "m8", name: "Kersten Catella Landscape Architects", category: "designer", region: "London", postcode: "EC1", projectTypes: ["Garden Design", "Public Realm & Community"], specialism: "Urban & rooftop", description: "Urban landscape architecture, rooftop gardens and public space.", established: 2008, accredited: true },
  { id: "m9", name: "Stone Studio", category: "designer", region: "North West", postcode: "M1", projectTypes: ["Garden Design", "Soft Landscaping & Planting"], specialism: "Naturalistic planting", description: "Naturalistic planting design and ecological landscape practice.", established: 2015, accredited: true },
  { id: "m10", name: "Stihl GB", category: "supplier", region: "West Midlands", postcode: "CV37", projectTypes: ["Equipment & Tools"], specialism: "Power equipment", description: "Professional outdoor power equipment, battery systems and PPE.", established: 1971, accredited: true, website: "https://example.com" },
  { id: "m11", name: "Makita UK", category: "supplier", region: "North West", postcode: "M22", projectTypes: ["Equipment & Tools"], specialism: "Power tools", description: "Cordless tool platforms and accessories for landscape professionals.", established: 1980, accredited: true },
  { id: "m12", name: "Tobermore", category: "supplier", region: "Northern Ireland", postcode: "BT45", projectTypes: ["Materials & Paving", "Hard Landscaping"], specialism: "Paving & walling", description: "Concrete paving, walling and kerbing manufactured in Northern Ireland.", established: 1942, accredited: true },
  { id: "m13", name: "Wyevale Nurseries", category: "supplier", region: "West Midlands", postcode: "HR4", projectTypes: ["Soft Landscaping & Planting", "Trees & Arboriculture"], specialism: "Trees & shrubs", description: "Wholesale nursery stock — trees, shrubs and instant hedging.", established: 1929, accredited: true },
  { id: "m14", name: "Waterscapes Irrigation", category: "supplier", region: "East of England", postcode: "CB1", projectTypes: ["Irrigation"], specialism: "Irrigation", description: "Commercial and residential irrigation design, supply and installation.", established: 1989, accredited: true },
  { id: "m15", name: "GreenTech UK", category: "supplier", region: "Yorkshire & Humber", postcode: "LS15", projectTypes: ["Materials & Paving", "Grounds Maintenance"], specialism: "Synthetic surfaces", description: "Synthetic turf, sports surfaces and sustainable landscape products.", established: 2002, accredited: true },
  { id: "m16", name: "Pershore College", category: "training", region: "West Midlands", postcode: "WR10", projectTypes: ["Training & Education"], specialism: "FE horticulture", description: "Further education horticulture and landscape qualifications.", established: 1955, accredited: true, website: "https://example.com" },
  { id: "m17", name: "Capel Manor College", category: "training", region: "London", postcode: "EN1", projectTypes: ["Training & Education"], specialism: "Land-based FE/HE", description: "London's environmental college — horticulture, garden design, arboriculture.", established: 1968, accredited: true },
  { id: "m18", name: "LANTRA Awards Centre", category: "training", region: "East Midlands", postcode: "CV8", projectTypes: ["Training & Education"], specialism: "Short courses & tickets", description: "Short course awarding body for land-based H&S and technical tickets.", established: 1969, accredited: true },
  { id: "m19", name: "Lighthouse Apprenticeships", category: "training", region: "North East", postcode: "NE1", projectTypes: ["Training & Education"], specialism: "Apprenticeships", description: "Level 2 and 3 landscape apprenticeship delivery across the north east.", established: 2014, accredited: true },
];

export const MEMBER_COUNT_BY_CATEGORY: Record<MemberCategory, number> = MEMBERS.reduce(
  (acc, m) => {
    acc[m.category] = (acc[m.category] || 0) + 1;
    return acc;
  },
  { contractor: 0, designer: 0, supplier: 0, training: 0 } as Record<MemberCategory, number>,
);

/** Normalises a UK postcode/partial to an uppercase outward-area prefix for prefix matching. */
export function normalisePostcode(input: string): string {
  return input.replace(/\s+/g, "").toUpperCase();
}

/** Returns true when member outward code starts with the user's typed prefix (e.g. "B" → "B91", "BA1"). */
export function matchesPostcode(memberPostcode: string, query: string): boolean {
  if (!query.trim()) return true;
  const q = normalisePostcode(query);
  const m = normalisePostcode(memberPostcode);
  return m.startsWith(q);
}
