// Advertising inventory & rotation.
// Scalable: add entries to the arrays below to expand slots. Placements pull
// from these pools and rotate daily so multiple advertisers share high-value
// positions rather than being capped to one fixed spot.

export type AdFormat = "banner" | "sponsored-card" | "featured-member";

export type BannerAd = {
  id: string;
  advertiser: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
  image?: string; // optional background/side image url
  accent?: string; // hex/css color for accent bar
  placements: BannerPlacement[];
};

export type BannerPlacement =
  | "homepage-mid"
  | "homepage-footer"
  | "news-inline"
  | "events-inline"
  | "article-footer"
  | "directory-inline";

export type SponsoredCardAd = {
  id: string;
  advertiser: string;
  title: string;
  description: string;
  image?: string;
  href: string;
  cta?: string;
  placements: SponsoredPlacement[];
};

export type SponsoredPlacement = "news-feed" | "events-feed" | "directory-feed";

export type FeaturedMemberAd = {
  id: string;
  memberId: string; // matches Member.id in directory/members
  tagline: string; // short pitch shown on the boosted listing
  boostUntil?: string; // ISO date — for admin/expiry UI later
};

// ── Banner inventory ──────────────────────────────────────────────────────────
// Placeholder creative — swap for real advertiser copy/artwork as sold.
export const BANNER_ADS: BannerAd[] = [
  {
    id: "b-stihl",
    advertiser: "STIHL GB",
    headline: "Battery power that works as hard as you do",
    body: "The AP System — one battery, over 40 professional tools. Built for landscape professionals.",
    cta: "Explore the range",
    href: "/directory",
    accent: "#F26522",
  },
  {
    id: "b-tobermore",
    advertiser: "Tobermore",
    headline: "Award-winning paving, walling & kerbing",
    body: "British-made hard landscaping products trusted on projects of every scale.",
    cta: "View products",
    href: "/directory",
    accent: "#8A1538",
  },
  {
    id: "b-greentech",
    advertiser: "Green-tech",
    headline: "Everything you need on one delivery",
    body: "Trees, tree planting, soils and street furniture — next-day nationwide.",
    cta: "Order supplies",
    href: "/directory",
    accent: "#0E8B61",
  },
  {
    id: "b-makita",
    advertiser: "Makita UK",
    headline: "40Vmax XGT for professional grounds teams",
    body: "Cordless platforms with the runtime and torque to replace petrol on site.",
    cta: "Discover XGT",
    href: "/directory",
    accent: "#0F62A8",
  },
  {
    id: "b-wyevale",
    advertiser: "Wyevale Nurseries",
    headline: "Specimen trees & instant hedging",
    body: "Contract-grown at our Herefordshire nursery for landscape professionals.",
    cta: "Browse stock",
    href: "/directory",
    accent: "#1D4D59",
  },
];

// ── Sponsored content inventory ───────────────────────────────────────────────
export const SPONSORED_CARDS: SponsoredCardAd[] = [
  {
    id: "s-tobermore",
    advertiser: "Tobermore",
    title: "Tobermore expands Sienna Stone range for 2026",
    description:
      "New formats and colourways in the flagship natural-stone-effect paving collection, developed with landscape contractors.",
    href: "/directory",
    cta: "Read the brief",
  },
  {
    id: "s-stihl",
    advertiser: "STIHL GB",
    title: "How one contractor cut fuel costs 60% with AP battery",
    description:
      "A mid-sized grounds team share the numbers behind their switch from petrol two-strokes to STIHL's AP platform.",
    href: "/directory",
    cta: "Read case study",
  },
  {
    id: "s-greentech",
    advertiser: "Green-tech",
    title: "Root barriers, tree grilles & the urban canopy",
    description:
      "A practical guide to specifying tree-pit hardware for high-traffic public realm schemes.",
    href: "/directory",
    cta: "Download guide",
  },
];

// ── Featured / boosted member inventory ───────────────────────────────────────
// A member listed here surfaces first in directory results with a Featured badge.
export const FEATURED_MEMBERS: FeaturedMemberAd[] = [
  { memberId: "m10", id: "f-stihl", tagline: "Official BALI supplier partner — battery-powered pro tools." },
  { memberId: "m12", id: "f-tobermore", tagline: "Paving, walling & kerbing manufactured in the UK & Ireland." },
  { memberId: "m13", id: "f-wyevale", tagline: "Contract-grown trees, shrubs & instant hedging for the trade." },
];

// ── Rotation helpers ──────────────────────────────────────────────────────────
/**
 * Deterministic day-bucket rotation. Advances daily so all inventory gets
 * exposure over time without needing a scheduler. `seed` lets multiple ad
 * slots on the same page show different creatives simultaneously.
 */
export function rotate<T>(items: T[], seed = 0, now: Date = new Date()): T | null {
  if (!items.length) return null;
  const day = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
  return items[(day + seed) % items.length];
}

export function bannersFor(placement: BannerPlacement): BannerAd[] {
  return BANNER_ADS.filter((a) => a.placements.length === 0 || a.placements.includes(placement) || a.placements.length === undefined);
}

export function pickBanner(placement: BannerPlacement, seed = 0): BannerAd | null {
  // Default: any banner may run in any placement unless restricted.
  const pool = BANNER_ADS.filter((a) => !a.placements?.length || a.placements.includes(placement));
  return rotate(pool.length ? pool : BANNER_ADS, seed);
}

export function pickSponsored(placement: SponsoredPlacement, seed = 0): SponsoredCardAd | null {
  const pool = SPONSORED_CARDS.filter((a) => !a.placements?.length || a.placements.includes(placement));
  return rotate(pool.length ? pool : SPONSORED_CARDS, seed);
}

// Give every banner every placement by default (keeps inventory shared).
BANNER_ADS.forEach((b) => {
  if (!b.placements || b.placements.length === 0) {
    b.placements = [
      "homepage-mid",
      "homepage-footer",
      "news-inline",
      "events-inline",
      "article-footer",
      "directory-inline",
    ];
  }
});
SPONSORED_CARDS.forEach((s) => {
  if (!s.placements || s.placements.length === 0) {
    s.placements = ["news-feed", "events-feed", "directory-feed"];
  }
});
