// Real news items sourced from bali.org.uk (July 2026).
// TODO: replace with live backend/CMS feed when available.
export type NewsArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  iso_date?: string;
  category?: string;
  sourceUrl?: string;
  image?: { url: string; alt: string };
  body: string[];
};

const src = (slug: string) => `https://www.bali.org.uk/news/${slug}/`;

export const newsArticles: NewsArticle[] = [
  {
    slug: "how-landscape-designers-can-thrive-in-tough-market",
    title: "Designing through uncertainty: how landscape designers can thrive in a tough market",
    description:
      "In a cautious market, landscape designer Adam Vetere (MBALI) shares how creativity, personalisation, and industry collaboration can help designers not just survive, but thrive.",
    date: "15 Jul 2026",
    iso_date: "2026-07-15",
    category: "BALI Member News",
    sourceUrl: src("how-landscape-designers-can-thrive-in-tough-market"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_adam-vetere-the-quilted-garden-3-img-ellie-walpole-hi-res-1-min.jpeg",
      alt: "Designing through uncertainty",
    },
    body: [
      "In a cautious market, landscape designer Adam Vetere (MBALI) shares how creativity, personalisation, and industry collaboration can help designers not just survive, but thrive.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "stihl-launches-high-performance-kombi-machine-for-versatile",
    title: "STIHL launches high-performance Kombi machine for versatile landscaping tasks",
    description:
      "STIHL has launched the powerful, battery-operated KMA 140 R as part of its highly versatile KombiSystem.",
    date: "13 Jul 2026",
    iso_date: "2026-07-13",
    category: "BALI Member News",
    sourceUrl: src("stihl-launches-high-performance-kombi-machine-for-versatile"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_stihl-kma-140-landscaping-spring-hq-p-2025-07-0001-global-138665-min.jpeg",
      alt: "STIHL KMA 140 R",
    },
    body: [
      "STIHL has launched the powerful, battery-operated KMA 140 R as part of its highly versatile KombiSystem.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "bali-is-on-whatsapp",
    title: "WhatsApp - You have 1 new message",
    description:
      "BALI is now on WhatsApp! There's now a simple, hassle-free way to be the first to find out about exclusive member news, offers, events and more from BALI.",
    date: "10 Jul 2026",
    iso_date: "2026-07-10",
    category: "BALI News",
    sourceUrl: src("bali-is-on-whatsapp"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_whatsapp-image-adobestock-435242065-editorial-use-only-1-min.jpeg",
      alt: "BALI on WhatsApp",
    },
    body: [
      "BALI is now on WhatsApp! There's now a simple, hassle-free way to be the first to find out about exclusive member news, offers, events and more from BALI.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "g-scapes-group-brings-together-over-fifty-years-of",
    title: "G-Scapes Group brings together over fifty years of horticultural expertise under one identity",
    description:
      "The G-Scapes Group is bringing together four specialist divisions under one family identity for the first time.",
    date: "9 Jul 2026",
    iso_date: "2026-07-09",
    category: "BALI Member News",
    sourceUrl: src("g-scapes-group-brings-together-over-fifty-years-of"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_newsletter-image-5-.png",
      alt: "G-Scapes Group",
    },
    body: [
      "The G-Scapes Group is bringing together four specialist divisions under one family identity for the first time.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "makita-xgt-tools-helping-to-maintain-the-historic-keele",
    title: "Makita XGT tools helping to maintain the historic Keele University Campus",
    description:
      "Keele University has invested in a wide range of Makita 40Vmax XGT cordless grounds maintenance tools to help its team efficiently maintain the extensive site.",
    date: "9 Jul 2026",
    iso_date: "2026-07-09",
    category: "BALI Member News",
    sourceUrl: src("makita-xgt-tools-helping-to-maintain-the-historic-keele"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_newsletter-image-3-.png",
      alt: "Makita XGT at Keele University",
    },
    body: [
      "Keele University has invested in a wide range of Makita 40Vmax XGT cordless grounds maintenance tools to help its team efficiently maintain the extensive site.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "contract-templates-available-to-members-2026",
    title: "Contract templates available to members",
    description:
      "A few years ago, BALI launched three template contract documents, intended for use by registered designers and contractors as part of a suite of project documents issued to domestic clients.",
    date: "9 Jul 2026",
    iso_date: "2026-07-09",
    category: "Technical News",
    sourceUrl: src("contract-templates-available-to-members-2026"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_newsletter-image-1-.png",
      alt: "BALI contract templates",
    },
    body: [
      "A few years ago, BALI launched three template contract documents, intended for use by registered designers and contractors as part of a suite of project documents issued to domestic clients.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "second-water-company-announces-hosepipe-ban",
    title: "Second water company announces hosepipe ban",
    description:
      "Southern Water has become the second water company to announce a hosepipe ban this year, after South East Water put restrictions in place for customers in Kent last week.",
    date: "9 Jul 2026",
    iso_date: "2026-07-09",
    category: "Technical News",
    sourceUrl: src("second-water-company-announces-hosepipe-ban"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_newsletter-image.png",
      alt: "Hosepipe ban",
    },
    body: [
      "Southern Water has become the second water company to announce a hosepipe ban this year, after South East Water put restrictions in place for customers in Kent last week.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "krcher-and-stihl-launch-ground-breaking-battery-alliance",
    title: "Kärcher and STIHL launch ground-breaking battery alliance",
    description:
      "Two drivers of innovation, one vision: Alfred Kärcher SE & Co. KG and ANDREAS STIHL AG & Co. KG have announced the launch of their joint battery alliance.",
    date: "2 Jul 2026",
    iso_date: "2026-07-02",
    category: "BALI Member News",
    sourceUrl: src("krcher-and-stihl-launch-ground-breaking-battery-alliance"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_stihl-allpro-anwendung-1-eu-row-min.jpeg",
      alt: "Kärcher and STIHL battery alliance",
    },
    body: [
      "Two drivers of innovation, one vision: Alfred Kärcher SE & Co. KG and ANDREAS STIHL AG & Co. KG have announced the launch of their joint battery alliance.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "association-issues-guidance-on-tachograph-use",
    title: "Association issues guidance on tachograph use",
    description: "When do landscape professionals need to use a tachograph?",
    date: "2 Jul 2026",
    iso_date: "2026-07-02",
    category: "Technical News",
    sourceUrl: src("association-issues-guidance-on-tachograph-use"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_tachograph-800x500.png",
      alt: "Tachograph guidance",
    },
    body: [
      "When do landscape professionals need to use a tachograph?",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "first-hosepipe-ban-of-the-year-announced",
    title: "First hosepipe ban of the year announced",
    description:
      "South East Water has become the first water company to introduce a hosepipe ban this summer, following widespread restrictions on water use in the summer of 2025.",
    date: "2 Jul 2026",
    iso_date: "2026-07-02",
    category: "BALI Member News",
    sourceUrl: src("first-hosepipe-ban-of-the-year-announced"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_untitled-design-26-.png",
      alt: "Hosepipe ban announced",
    },
    body: [
      "South East Water has become the first water company to introduce a hosepipe ban this summer, following widespread restrictions on water use in the summer of 2025.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "harrowden-acquires-george-davies-turf-and-stone-in-growth",
    title: "Harrowden acquires George Davies Turf & Stone in growth-focused move built on shared values",
    description:
      "Harrowden has acquired George Davies Turf & Stone (GDT), bringing together two highly respected businesses with shared values, complementary strengths and a shared commitment to quality, service and long-term customer relationships.",
    date: "2 Jul 2026",
    iso_date: "2026-07-02",
    category: "BALI Member News",
    sourceUrl: src("harrowden-acquires-george-davies-turf-and-stone-in-growth"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_untitled-design-25-.png",
      alt: "Harrowden acquires George Davies Turf & Stone",
    },
    body: [
      "Harrowden has acquired George Davies Turf & Stone (GDT), bringing together two highly respected businesses with shared values, complementary strengths and a shared commitment to quality, service and long-term customer relationships.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "put-nature-back-into-peoples-everyday-lives-urges-wyevale",
    title: "Put nature back into people's everyday lives urges Wyevale Nurseries",
    description:
      "Wyevale Nurseries is calling for better implementation of smarter biodiversity planning initiatives to create built environments where nature is part of everyday life.",
    date: "2 Jul 2026",
    iso_date: "2026-07-02",
    category: "BALI Member News",
    sourceUrl: src("put-nature-back-into-peoples-everyday-lives-urges-wyevale"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_untitled-design-22-.png",
      alt: "Wyevale Nurseries",
    },
    body: [
      "Wyevale Nurseries is calling for better implementation of smarter biodiversity planning initiatives to create built environments where nature is part of everyday life.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "maylim-announces-new-ceo-and-managing-director",
    title: "Maylim announces new CEO and managing director",
    description:
      "Maylim is pleased to announce changes to its senior leadership team, marking the next stage in the company's continued development.",
    date: "2 Jul 2026",
    iso_date: "2026-07-02",
    category: "BALI Member News",
    sourceUrl: src("maylim-announces-new-ceo-and-managing-director"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_untitled-design-20-.png",
      alt: "Maylim leadership",
    },
    body: [
      "Maylim is pleased to announce changes to its senior leadership team, marking the next stage in the company's continued development.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "stihl-celebrates-dealer-excellence-at-landmark-stihl-100-dealer",
    title: "STIHL celebrates dealer excellence at landmark STIHL 100 dealer conference",
    description:
      "STIHL GB has celebrated the achievements of its dealer network at its STIHL 100 Dealer Conference, marking the company's centenary year.",
    date: "29 Jun 2026",
    iso_date: "2026-06-29",
    category: "BALI Member News",
    sourceUrl: src("stihl-celebrates-dealer-excellence-at-landmark-stihl-100-dealer"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_1stihl-250626-7-1-min.jpeg",
      alt: "STIHL 100 dealer conference",
    },
    body: [
      "STIHL GB has celebrated the achievements of its dealer network at its STIHL 100 Dealer Conference, marking the company's centenary year.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "working-safely-during-the-summer",
    title: "Working safely during the summer",
    description:
      "Landscapers will be familiar with the challenges of working in hot and sunny conditions but keeping safe is one which can be tackled by taking a few simple steps.",
    date: "25 Jun 2026",
    iso_date: "2026-06-25",
    category: "BALI Member News",
    sourceUrl: src("working-safely-during-the-summer"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_1suncream-technical-image-800x500.png",
      alt: "Working safely during summer",
    },
    body: [
      "Landscapers will be familiar with the challenges of working in hot and sunny conditions but keeping safe is one which can be tackled by taking a few simple steps.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "invasive-species-week-how-can-landscaping-do-its-bit",
    title: "Invasive Species Week: how can landscaping do its bit?",
    description:
      "It is officially Invasive Species Week, giving landscapers an opportunity to refresh their memories on the risks and take practical steps.",
    date: "25 Jun 2026",
    iso_date: "2026-06-25",
    category: "Technical News",
    sourceUrl: src("invasive-species-week-how-can-landscaping-do-its-bit"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_invasive-species-800x500.png",
      alt: "Invasive Species Week",
    },
    body: [
      "It is officially Invasive Species Week, giving landscapers an opportunity to refresh their memories on the risks and take practical steps.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "97-of-hse-pesticide-enforcement-visits-in-2025-required-action",
    title: "97% of HSE Pesticide Enforcement Visits in 2025 Required Action",
    description:
      "The Amenity Forum is urging amenity businesses, contractors, local authorities and land managers to review their compliance arrangements following recent HSE pesticide enforcement findings.",
    date: "25 Jun 2026",
    iso_date: "2026-06-25",
    category: "BALI Member News",
    sourceUrl: src("97-of-hse-pesticide-enforcement-visits-in-2025-required-action"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_amenity-forum-800x500.png",
      alt: "HSE pesticide enforcement",
    },
    body: [
      "The Amenity Forum is urging amenity businesses, contractors, local authorities and land managers to review their compliance arrangements following recent HSE pesticide enforcement findings.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "blakedown-landscapes-appointed-to-fusion21s-85-million-grounds",
    title: "Blakedown Landscapes appointed to Fusion21's £85 million grounds maintenance framework",
    description:
      "Blakedown Landscapes has been appointed to Fusion21's £85 million UK-wide Grounds Maintenance Framework following a competitive procurement process.",
    date: "25 Jun 2026",
    iso_date: "2026-06-25",
    category: "BALI Member News",
    sourceUrl: src("blakedown-landscapes-appointed-to-fusion21s-85-million-grounds"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_1blakedown-landscapes-800x500.png",
      alt: "Blakedown Landscapes framework",
    },
    body: [
      "Blakedown Landscapes has been appointed to Fusion21's £85 million UK-wide Grounds Maintenance Framework following a competitive procurement process.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "bali-members-shortlisted-pro-landscaper-awards",
    title: "BALI members celebrate shortlisting at Pro Landscaper Project Awards",
    description:
      "BALI is proud to congratulate a selection of its members who have been shortlisted for the prestigious Pro Landscaper Project Awards 2026.",
    date: "25 Jun 2026",
    iso_date: "2026-06-25",
    category: "BALI Member News",
    sourceUrl: src("bali-members-shortlisted-pro-landscaper-awards"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_pro-landscaper-project-awards.png",
      alt: "Pro Landscaper Project Awards",
    },
    body: [
      "BALI is proud to congratulate a selection of its members who have been shortlisted for the prestigious Pro Landscaper Project Awards 2026.",
      "Read the full article on bali.org.uk.",
    ],
  },
  {
    slug: "time-running-out-to-enter-pro-landscaper-30-under-30",
    title: "Time running out to enter Pro Landscaper 30 Under 30",
    description:
      "There is just over a month left to enter the Pro Landscaper 30 Under 30: The Next Generation initiative for 2026.",
    date: "23 Jun 2026",
    iso_date: "2026-06-23",
    category: "Industry Awards",
    sourceUrl: src("time-running-out-to-enter-pro-landscaper-30-under-30"),
    image: {
      url: "https://www.bali.org.uk/public/news/large_pro-landscaper-30-under-30-winners-min.jpeg",
      alt: "Pro Landscaper 30 Under 30",
    },
    body: [
      "There is just over a month left to enter the Pro Landscaper 30 Under 30: The Next Generation initiative for 2026.",
      "Read the full article on bali.org.uk.",
    ],
  },
];
