// Frontend-only mock data for the My BALI member area.
// TODO: replace every export in this file with real backend API calls.

export const MEMBERSHIP = {
  expiry: "31/03/2027",
  eventBookings: 3,
  memberSince: "2019",
  organisation: "Green Horizon Landscapes Ltd",
  membershipNumber: "BALI-10488",
  category: "Registered Contractor",
  status: "Active" as "Active" | "Pending" | "Lapsed",
  directoryUrl: "/directory/contractor/green-horizon-landscapes",
};

export const STATS = {
  websiteViews: 1284,
  profileViews: 342,
  logins: 57,
  searchResults: 91,
  emailClicks: 26,
};

// Mock 12-month time series (oldest -> newest). Trend is generally upward.
// TODO: replace with API GET /me/stats/timeseries
export type StatSeries = { month: string; value: number };
const MONTHS_12 = [
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
];

function series(base: number, growth: number, jitter: number): StatSeries[] {
  return MONTHS_12.map((m, i) => {
    const trend = base + growth * i;
    const noise = Math.sin(i * 1.3) * jitter;
    return { month: m, value: Math.max(0, Math.round(trend + noise)) };
  });
}

export const STATS_TIMESERIES = {
  websiteViews: series(60, 8, 12),
  profileViews: series(14, 2.5, 4),
  logins: series(2, 0.4, 1),
  searchResults: series(4, 0.6, 1.5),
  emailClicks: series(1, 0.25, 0.8),
};

export function pctChange(arr: StatSeries[]): number {
  if (arr.length < 2) return 0;
  const half = Math.floor(arr.length / 2);
  const prev = arr.slice(0, half).reduce((s, x) => s + x.value, 0);
  const curr = arr.slice(half).reduce((s, x) => s + x.value, 0);
  if (prev === 0) return curr > 0 ? 100 : 0;
  return Math.round(((curr - prev) / prev) * 100);
}

export const BENEFITS = [
  { id: "logo", title: "Accredited Logo", description: "Download the BALI Accredited logo for use on your website, vehicles and marketing." },
  { id: "digital", title: "BALI Digital", description: "Digital toolkit — templates, brand assets and marketing collateral." },
  { id: "hr-hs", title: "BALI HR/H&S", description: "Discounted HR and Health & Safety support from our approved partner." },
  { id: "insure", title: "BALI Insure", description: "Preferential insurance rates through the BALI Insure scheme." },
  { id: "jobs", title: "BALI Jobs", description: "Free job posting and candidate access on the BALI Jobs board." },
  { id: "dispute", title: "Dispute Resolution Service", description: "Independent dispute resolution for member/client disputes." },
  { id: "utp", title: "Use the Professionals+", description: "Enhanced Use the Professionals directory placement." },
];

export const RESOURCES = [
  { id: "brand", title: "Brand Guidelines", href: "#" },
  { id: "domestic", title: "Domestic Contract", href: "#" },
  { id: "landscape-news", title: "Landscape News", href: "#" },
  { id: "webinar", title: "Webinar Recordings", href: "#" },
  { id: "stickers", title: "Order Vehicle Stickers", href: "#" },
  { id: "quality", title: "Quality Standard", href: "#" },
  { id: "bank", title: "BALI bank details", href: "#" },
  { id: "articles", title: "Articles of Association", href: "#" },
];

export const MEMBER_FEED = [
  { id: "n1", date: "12 Jun 2026", title: "Updated Domestic Landscape Contract now available", excerpt: "The revised contract template incorporating 2026 statutory changes is available in the members' resources area.", href: "#" },
  { id: "n2", date: "04 Jun 2026", title: "National Landscape Awards — entries open", excerpt: "Entries for the 2026 National Landscape Awards are now open. Accredited members receive discounted entry.", href: "#" },
  { id: "n3", date: "28 May 2026", title: "Regional AGM dates confirmed", excerpt: "Dates for all regional AGMs across the network have now been confirmed. Book your place from the events area.", href: "#" },
];

// Rich mock news articles — TODO: replace with API GET /me/news
export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "a1",
    slug: "biodiversity-net-gain-2026-update",
    title: "Biodiversity Net Gain: what the 2026 update means for landscape contractors",
    date: "2026-07-02",
    category: "Policy",
    excerpt: "The updated BNG metric and statutory guidance takes effect this autumn. Here's what members need to know about pricing, planting and record-keeping.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
    featured: true,
  },
  {
    id: "a2",
    slug: "national-landscape-awards-2026",
    title: "National Landscape Awards 2026 — entries now open",
    date: "2026-06-24",
    category: "Awards",
    excerpt: "Accredited members receive discounted entry. Submissions close 30 September; judging visits begin in October.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "a3",
    slug: "domestic-landscape-contract-v3",
    title: "Domestic Landscape Contract v3 released",
    date: "2026-06-12",
    category: "Resources",
    excerpt: "The revised template covers 2026 statutory changes to consumer contracts and includes editable schedules for materials and stage payments.",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80",
  },
  {
    id: "a4",
    slug: "plant-health-import-changes",
    title: "Plant health: post-Brexit import checks tighten in Q4",
    date: "2026-05-30",
    category: "Plant Health",
    excerpt: "New phytosanitary requirements for stone-fruit, olive and ornamental hedging arrive in October. Plan sourcing now.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&q=80",
  },
  {
    id: "a5",
    slug: "silica-dust-controls-update",
    title: "HSE tightens silica-dust controls on hard-landscaping sites",
    date: "2026-05-18",
    category: "Health & Safety",
    excerpt: "Water suppression is now expected on all cutting and grinding of natural stone. Practical guidance and templates in the members area.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: "a6",
    slug: "sustainable-planting-cpd",
    title: "New CPD: sustainable planting design for a changing climate",
    date: "2026-05-04",
    category: "Training",
    excerpt: "A four-part online CPD from BALI Registered Designers covering species selection, hydrology and long-term maintenance.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
  },
  {
    id: "a7",
    slug: "regional-agm-dates-2026",
    title: "Regional AGM dates confirmed across the network",
    date: "2026-04-22",
    category: "Events",
    excerpt: "All twelve regional AGMs are now scheduled. Book your place from the events area — members and guests welcome.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
];

// Mock calendar events (ISO date). TODO: replace with API GET /me/events
export type MemberEvent = {
  id: string;
  title: string;
  type: string;
  date: string; // ISO YYYY-MM-DD
  time?: string;
  venue: string;
  description: string;
  booked?: boolean;
};

export const MEMBER_EVENTS: MemberEvent[] = [
  { id: "e1", title: "South Thames Regional Connect", type: "BALI Regional Event", date: "2026-07-16", time: "18:00", venue: "Worplesdon Place Pub, Surrey", description: "Networking event with regional committee, industry insights and buffet." },
  { id: "e2", title: "ROLO Operative Training", type: "ROLO Operative Training", date: "2026-07-21", time: "09:00", venue: "BALI HQ, Reading", description: "One-day operative-level Health & Safety course leading to a ROLO card." },
  { id: "e3", title: "Chelsea Late Summer Reception", type: "BALI National Event", date: "2026-07-24", time: "18:30", venue: "RHS Chelsea", description: "Members' summer reception — drinks, canapés and keynote." },
  { id: "e4", title: "Vectorworks Bitesize: Site Modelling", type: "Vectorworks Bitesize", date: "2026-07-29", time: "13:00", venue: "Online (Zoom)", description: "60-minute focused webinar on site modelling techniques." },
  { id: "e5", title: "Futurescape 2026", type: "Trade Show", date: "2026-08-05", time: "09:00", venue: "ExCeL London", description: "The UK's leading landscape trade show. Members receive priority access." },
  { id: "e6", title: "Sustainable Planting Webinar", type: "Webinar", date: "2026-08-12", time: "12:30", venue: "Online", description: "Species selection and hydrology in a changing climate." },
  { id: "e7", title: "Midlands Regional AGM", type: "BALI Regional Event", date: "2026-08-19", time: "17:30", venue: "Warwick Racecourse", description: "Regional AGM, guest speaker, networking." },
  { id: "e8", title: "ROLO Manager Training", type: "ROLO Manager Training", date: "2026-08-26", time: "09:00", venue: "BALI HQ, Reading", description: "Manager-level ROLO Health & Safety training and certification." },
  { id: "e9", title: "National Landscape Awards Judging Briefing", type: "Industry Awards", date: "2026-09-02", time: "10:00", venue: "Online", description: "Briefing for members entering the 2026 awards." },
  { id: "e10", title: "Southport Flower Show", type: "Flower Show", date: "2026-09-10", time: "09:00", venue: "Victoria Park, Southport", description: "BALI-supported flower show — visit the members' stand." },
  { id: "e11", title: "Vectorworks Deep Dive: Landmark", type: "Vectorworks Deep Dive", date: "2026-09-17", time: "10:00", venue: "Online (Zoom)", description: "Full-day intensive training on Landmark for landscape designers." },
  { id: "e12", title: "BALI National Conference 2026", type: "BALI National Event", date: "2026-09-24", time: "09:00", venue: "The ICC, Birmingham", description: "The flagship BALI conference — keynote speakers, exhibitors and gala dinner.", booked: true },
];

export const EVENT_TYPE_COLORS: Record<string, string> = {
  "BALI National Event": "bg-bali-blue text-white",
  "BALI Regional Event": "bg-bali-green text-white",
  "Flower Show": "bg-pink-500 text-white",
  "Industry Awards": "bg-amber-500 text-white",
  "Trade Show": "bg-purple-600 text-white",
  "Webinar": "bg-sky-500 text-white",
  "ROLO Operative Training": "bg-orange-500 text-white",
  "ROLO Supervisor Training": "bg-orange-600 text-white",
  "ROLO Manager Training": "bg-orange-700 text-white",
  "Vectorworks Deep Dive": "bg-indigo-600 text-white",
  "Vectorworks Bitesize": "bg-indigo-400 text-white",
  "Member event": "bg-teal-500 text-white",
  "Member training": "bg-teal-600 text-white",
};

export const TECHNICAL_DOCS = [
  { id: "t1", title: "Plant Health — Post-Brexit Import Guidance", date: "2026-03-01", type: "PDF", size: "1.2 MB", description: "Consolidated guidance on plant health checks and import documentation." },
  { id: "t2", title: "CDM 2015 — Domestic Landscaping Guide", date: "2025-11-15", type: "PDF", size: "820 KB", description: "How CDM applies to domestic and light-commercial landscaping projects." },
  { id: "t3", title: "Hand-Arm Vibration Toolkit", date: "2025-09-02", type: "ZIP", size: "3.4 MB", description: "Risk-assessment templates and exposure calculators." },
  { id: "t4", title: "Silica Dust Control — Practical Guide", date: "2025-06-20", type: "PDF", size: "640 KB", description: "Practical controls for cutting, grinding and drilling stone." },
  { id: "t5", title: "Domestic Landscape Contract v3", date: "2025-04-10", type: "DOCX", size: "180 KB", description: "Editable contract template for domestic works." },
];

export const DISCIPLINES = [
  "Soft landscaping", "Hard landscaping", "Garden design", "Interior landscaping",
  "Arboriculture", "Sports turf", "Play & leisure", "Irrigation",
  "Water features & pools", "Tree surgery", "Green roofs & walls", "Lighting",
  "Fencing", "Paving", "Ecology & biodiversity",
];

export const REGIONS = [
  "East Anglia", "International", "Midlands", "National", "North Thames", "North West",
  "Northern Ireland", "Scotland", "South Thames", "South West", "UK Islands", "Wales", "Yorkshire North East",
];

export const TITLES = ["Master", "Miss", "Mr", "Mrs", "Ms", "Mx", "Dr"];

export const COUNTRIES = [
  "United Kingdom", "Ireland", "France", "Germany", "Netherlands", "Belgium",
  "Spain", "Italy", "United States", "Australia", "New Zealand", "Other",
];

export const EVENT_TYPES = [
  "BALI National Event", "BALI Regional Event", "Flower Show", "Industry Awards",
  "Trade Show", "Webinar", "ROLO Operative Training", "ROLO Supervisor Training",
  "ROLO Manager Training", "Vectorworks Deep Dive", "Vectorworks Bitesize",
  "Member event", "Member training",
];

export const PROFILE = {
  title: "Mr",
  firstName: "Alex",
  lastName: "Rivers",
  jobTitle: "Managing Director",
  email: "demo@bali.org.uk",
  mobile: "07700 900123",
  address: {
    street: "12 Meadow Lane",
    town: "Warwick",
    county: "Warwickshire",
    postcode: "CV34 6AA",
    country: "United Kingdom",
  },
};

// Inline SVG logo used as the mock member company logo — TODO: replace with uploaded logo URL.
const GREEN_HORIZON_LOGO =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 80'>
       <rect width='240' height='80' rx='12' fill='#0f5132'/>
       <g transform='translate(16,20)'>
         <path d='M0 32 C 10 18, 22 12, 36 20 C 30 8, 44 -2, 56 8 C 66 -2, 82 6, 78 22 C 90 24, 92 40, 74 40 L 0 40 Z' fill='#a7f3d0'/>
         <path d='M32 40 L 32 22 M 46 40 L 46 16 M 60 40 L 60 22' stroke='#065f46' stroke-width='2' fill='none'/>
       </g>
       <text x='104' y='36' font-family='Georgia, serif' font-size='20' fill='#ffffff' font-weight='700'>Green</text>
       <text x='104' y='58' font-family='Georgia, serif' font-size='20' fill='#a7f3d0' font-weight='700'>Horizon</text>
     </svg>`
  );

// Mock organisation — TODO: replace with API GET /me/organisation
export const ORGANISATION = {
  name: "Green Horizon Landscapes Ltd",
  description:
    "Award-winning landscape contractor delivering commercial and high-end residential schemes across the Midlands and South.",
  regions: ["Midlands", "South Thames", "National"] as string[],
  companyNumber: "07845321",
  vatNumber: "GB 224 8890 12",
  address: {
    street: "Unit 4 Riverside Park",
    town: "Warwick",
    county: "Warwickshire",
    region: "Midlands",
    postcode: "CV34 6BB",
    country: "United Kingdom",
  },
  telephone: "01926 555 010",
  email: "hello@greenhorizon.example",
  website: "https://greenhorizon.example",
  // Personalisation — TODO: fetch from member's uploaded brand assets
  logoUrl: GREEN_HORIZON_LOGO,
  brandAccent: "#0f5132", // deep green
  brandAccentSoft: "#a7f3d0",
  socials: {
    facebook: "https://facebook.com/greenhorizon",
    twitter: "https://twitter.com/greenhorizon",
    linkedin: "https://linkedin.com/company/greenhorizon",
    instagram: "https://instagram.com/greenhorizon",
    other: "",
  },
};

export const MY_CONTENT = [
  { id: "c1", type: "News" as const, title: "New commercial contract with Warwickshire NHS Trust", date: "2026-06-01", status: "published" as const },
  { id: "c2", type: "Event" as const, title: "Open day — sustainable planting demo", date: "2026-07-14", status: "submitted" as const },
  { id: "c3", type: "News" as const, title: "Team update — new apprentices onboarded", date: "2026-06-20", status: "draft" as const },
];

export type ContentStatus = "draft" | "submitted" | "published";

export const EVENT_BOOKINGS: Array<{
  id: string; title: string; type: string; date: string; when: "upcoming" | "past";
}> = [];
