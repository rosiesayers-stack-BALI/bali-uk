// Real upcoming events sourced from bali.org.uk (July 2026 onwards).
// TODO: replace with live backend/CMS feed when available.
export type EventItem = {
  slug: string;
  title: string;
  date: string;
  iso_date?: string;
  venue: string;
  category: string;
  description: string;
  body: string[];
  image: { url: string; alt: string };
  booking_url?: string;
};

const book = (slug: string) => `https://www.bali.org.uk/events/${slug}/`;

function categoryFor(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("get more from your bali membership")) return "Webinar";
  if (t.includes("supplier forum")) return "Supplier Forum";
  if (t.includes("chalk fund") || t.includes("open mic")) return "BALI Chalk Fund";
  return "BALI Regional Event";
}

const raw = [
  {
    slug: "supplier-forum-event-the-way-of-the-modern-world-how-to-build-a-7016",
    title: "Supplier Forum: The way of the modern world, how to build a better business",
    iso_date: "2026-07-16",
    date: "16 Jul 2026",
    venue: "STIHL",
    image: "https://www.bali.org.uk/public/events/supplier-forum16july-800x500.png",
  },
  {
    slug: "get-more-from-your-bali-membership-7177",
    title: "Get more from your BALI membership",
    iso_date: "2026-07-28",
    date: "28 Jul 2026",
    venue: "Online",
    image: "https://www.bali.org.uk/public/events/get-more-from-your-bali-membership-2-.png",
  },
  {
    slug: "south-west-cornwall-regional-connect-7191",
    title: "South West Cornwall Regional Connect",
    iso_date: "2026-07-28",
    date: "28 Jul 2026",
    venue: "The Working Boat Pub",
    image: "https://www.bali.org.uk/public/events/sw-regional-connect-800x500.png",
  },
  {
    slug: "get-more-from-your-bali-membership-7198",
    title: "Get more from your BALI membership",
    iso_date: "2026-09-01",
    date: "1 Sep 2026",
    venue: "Online",
    image: "https://www.bali.org.uk/public/events/get-more-from-your-bali-membership-3-.png",
  },
  {
    slug: "south-thames-goodwood-art-foundation-event-7189",
    title: "South Thames Goodwood Art Foundation Event",
    iso_date: "2026-09-04",
    date: "4 Sep 2026",
    venue: "Goodwood Art Foundation",
    image: "https://www.bali.org.uk/public/events/st-goodwood-event-800x500.png",
  },
  {
    slug: "north-thames-natural-history-museum-event-7196",
    title: "North Thames Natural History Museum Event",
    iso_date: "2026-09-08",
    date: "8 Sep 2026",
    venue: "Natural History Museum",
    image: "https://www.bali.org.uk/public/events/north-thames-natural-history-800x500.png",
  },
  {
    slug: "midlands-jack-moody-landscaping-and-civil-engineering-event-7187",
    title: "Midlands Jack Moody Group Event",
    iso_date: "2026-09-24",
    date: "24 Sep 2026",
    venue: "Jack Moody Group",
    image: "https://www.bali.org.uk/public/events/midlands-jack-moody-800x500.png",
  },
  {
    slug: "get-more-from-your-bali-membership-7205",
    title: "Get more from your BALI membership",
    iso_date: "2026-09-29",
    date: "29 Sep 2026",
    venue: "Online",
    image: "https://www.bali.org.uk/public/events/get-more-from-your-bali-membership-7-.png",
  },
  {
    slug: "bali-chalk-open-mic-night-7157",
    title: "BALI Chalk Fund Landscape Open Mic Night",
    iso_date: "2026-10-01",
    date: "1 Oct 2026",
    venue: "Spice of Life Bar, Soho",
    image: "https://www.bali.org.uk/public/events/bcf-open-mic-flyer-2026-1200-x-627-px-.jpg",
  },
  {
    slug: "get-more-from-your-bali-membership-7202",
    title: "Get more from your BALI membership",
    iso_date: "2026-10-27",
    date: "27 Oct 2026",
    venue: "Online",
    image: "https://www.bali.org.uk/public/events/get-more-from-your-bali-membership-4-.png",
  },
  {
    slug: "get-more-from-your-bali-membership-7203",
    title: "Get more from your BALI membership",
    iso_date: "2026-11-17",
    date: "17 Nov 2026",
    venue: "Online",
    image: "https://www.bali.org.uk/public/events/get-more-from-your-bali-membership-5-.png",
  },
  {
    slug: "get-more-from-your-bali-membership-7204",
    title: "Get more from your BALI membership",
    iso_date: "2026-12-15",
    date: "15 Dec 2026",
    venue: "Online",
    image: "https://www.bali.org.uk/public/events/get-more-from-your-bali-membership-6-.png",
  },
];

export const events: EventItem[] = raw.map((e) => ({
  slug: e.slug,
  title: e.title,
  date: e.date,
  iso_date: e.iso_date,
  venue: e.venue,
  category: categoryFor(e.title),
  description: `${e.title} — ${e.venue}, ${e.date}.`,
  body: [
    `${e.title} at ${e.venue} on ${e.date}.`,
    "Book your place and see full details on bali.org.uk.",
  ],
  image: { url: e.image, alt: e.title },
  booking_url: book(e.slug),
}));
