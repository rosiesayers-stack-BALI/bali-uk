// Frontend-only mock data for the My BALI member area.
// TODO: replace every export in this file with real backend API calls.

export const MEMBERSHIP = {
  expiry: "31/03/2027",
  eventBookings: 3,
  memberSince: "2019",
  organisation: "Green Horizon Landscapes Ltd",
  membershipNumber: "BALI-10488",
};

export const STATS = {
  websiteViews: 1284,
  profileViews: 342,
  logins: 57,
  searchResults: 91,
  emailClicks: 26,
};

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
  {
    id: "n1",
    date: "12 Jun 2026",
    title: "Updated Domestic Landscape Contract now available",
    excerpt: "The revised contract template incorporating 2026 statutory changes is available in the members' resources area.",
    href: "#",
  },
  {
    id: "n2",
    date: "04 Jun 2026",
    title: "National Landscape Awards — entries open",
    excerpt: "Entries for the 2026 National Landscape Awards are now open. Accredited members receive discounted entry.",
    href: "#",
  },
  {
    id: "n3",
    date: "28 May 2026",
    title: "Regional AGM dates confirmed",
    excerpt: "Dates for all regional AGMs across the network have now been confirmed. Book your place from the events area.",
    href: "#",
  },
];

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

// Mock profile — TODO: replace with API GET /me/profile
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
