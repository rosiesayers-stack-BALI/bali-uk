// Central content store for all BALI website pages rendered via the splat route.
// Each entry keyed by URL path (no trailing slash).

export type PageSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type PageHighlight = {
  title: string;
  body: string;
};

export type PageCTA = { label: string; href: string };

export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  // Visual theme — drives hero gradient & accent colour.
  theme: "blue" | "green" | "slate" | "flow" | "warm" | "purple";
  sections?: PageSection[];
  highlights?: PageHighlight[];
  ctaPrimary?: PageCTA;
  ctaSecondary?: PageCTA;
  // Optional small fact-bar above the intro: list of label/value pairs.
  stats?: { value: string; label: string }[];
};

const C: Record<string, PageContent> = {
  // ─────────────────────────────── ABOUT ───────────────────────────────
  "/about": {
    eyebrow: "About BALI",
    title: "The UK's Leading Landscape Trade Association",
    theme: "blue",
    intro:
      "Founded in 1972, the British Association of Landscape Industries (BALI) represents over 900 accredited landscape professionals across the UK — from world-class garden designers and contractors to suppliers, manufacturers and training providers.",
    stats: [
      { value: "1972", label: "Founded" },
      { value: "900+", label: "Accredited Members" },
      { value: "£24bn", label: "Sector value we lobby for" },
      { value: "50+", label: "Years of leadership" },
    ],
    sections: [
      {
        heading: "Our Vision",
        body: "To champion the UK landscape industry and uphold the highest standards of quality, professionalism and environmental responsibility — connecting clients with the very best landscape professionals nationwide.",
      },
      {
        heading: "What We Do",
        body: "We set and maintain industry standards, run a rigorous accreditation programme, deliver training and CPD, host the National Landscape Awards, lobby government on behalf of our sector and provide members with day-to-day support across HR, health & safety, technical guidance and business growth.",
      },
      {
        heading: "Why Join BALI",
        body: "Membership unlocks the BALI Accredited mark — recognised by clients, specifiers and government as the gold standard in landscaping. Members get free HR & H&S reviews, exclusive discounts, eligibility for the National Landscape Awards, listing in our public Directory, and a year-round programme of events.",
      },
    ],
    highlights: [
      { title: "Accreditation", body: "Rigorous on-site assessment, peer review and ongoing standards monitoring." },
      { title: "Advocacy", body: "We represent the £24bn UK ornamental horticulture sector to UK governments." },
      { title: "Education", body: "ROLO, LISS/CSCS, training courses and CPD for every career stage." },
      { title: "Community", body: "A nationwide network of designers, contractors, suppliers and training providers." },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Meet the Board", href: "/about/board" },
  },

  "/about/board": {
    eyebrow: "Governance",
    title: "Board of Directors",
    theme: "blue",
    intro:
      "BALI is governed by an elected Board of Directors, drawn from our membership and supported by an executive team based at Landscape House, Stoneleigh Park. The Board sets strategy, oversees standards and represents members' interests at the highest level.",
    sections: [
      {
        heading: "Board Composition",
        body: "The Board is made up of a Chair, Vice-Chair, Treasurer and up to nine elected directors representing the breadth of our membership — design, contracting, supply, maintenance, interior landscaping and grounds management.",
      },
      {
        heading: "Elections",
        body: "Directors are elected by the membership for three-year terms at the AGM. Any principal member of an Accredited firm can stand for election. We actively encourage diversity and welcome candidates from across the UK regions.",
        bullets: [
          "Three-year terms, renewable once",
          "AGM elections held each autumn",
          "Open to all Accredited members in good standing",
          "Regional and discipline balance encouraged",
        ],
      },
    ],
    highlights: [
      { title: "Chair", body: "Leads the Board and represents BALI publicly." },
      { title: "Vice-Chair", body: "Deputises for the Chair and leads key strategic projects." },
      { title: "Treasurer", body: "Oversees financial stewardship and the annual budget." },
      { title: "Directors", body: "Bring deep industry expertise across every BALI discipline." },
    ],
    ctaPrimary: { label: "Stand for Election", href: "/contact" },
    ctaSecondary: { label: "Read our Code of Conduct", href: "/membership/code" },
  },

  "/about/awards": {
    eyebrow: "Since 1976",
    title: "National Landscape Awards",
    theme: "warm",
    intro:
      "The National Landscape Awards are the most prestigious awards in UK landscaping — a glittering annual celebration of the schemes, people and partnerships that define excellence in our industry. Sponsored by Green-tech and held at the InterContinental London — The O2.",
    stats: [
      { value: "45+", label: "Award categories" },
      { value: "1,200", label: "Guests each year" },
      { value: "1976", label: "First awarded" },
    ],
    sections: [
      {
        heading: "Categories",
        body: "We recognise excellence across domestic and commercial design and build, soft and hard landscaping, restoration, interior planting, grounds maintenance, employer of the year, principal designer, young landscaper and lifetime achievement.",
      },
      {
        heading: "Judging",
        body: "All entries are independently judged by a panel of senior industry figures. Shortlisted schemes are visited on site and assessed against published criteria covering design intent, technical execution, sustainability, safety and client outcomes.",
      },
    ],
    highlights: [
      { title: "Open to Members", body: "Only BALI Accredited members can enter — your membership is your entry ticket." },
      { title: "On-Site Judging", body: "Every shortlisted scheme is visited and assessed in person." },
      { title: "Black-Tie Awards", body: "The biggest night in UK landscaping, hosted at the InterContinental O2." },
      { title: "Principal Award", body: "The Grand Award recognises the single outstanding scheme of the year." },
    ],
    ctaPrimary: { label: "Visit baliawards.co.uk", href: "https://www.baliawards.co.uk" },
    ctaSecondary: { label: "Become a Member", href: "/join" },
  },

  "/about/ncf": {
    eyebrow: "Charity",
    title: "BALI-NCF: National Charity Fund",
    theme: "green",
    intro:
      "The BALI National Charity Fund (BALI-NCF) is the official charity of the landscaping industry. We provide hardship grants to landscape workers and their families facing financial difficulty due to illness, injury or bereavement.",
    sections: [
      {
        heading: "Who We Help",
        body: "Anyone currently or recently working in UK landscaping — whether self-employed, employed by a BALI member, or in a wider horticulture role — can apply for confidential hardship support.",
      },
      {
        heading: "How We Raise Funds",
        body: "The Fund is sustained by member donations, fundraising events at the National Landscape Awards, payroll giving, legacies and corporate partnerships. 100% of donations go directly to beneficiaries.",
      },
    ],
    highlights: [
      { title: "Hardship Grants", body: "One-off grants to bridge unexpected financial difficulty." },
      { title: "Confidential", body: "All applications and assessments are strictly confidential." },
      { title: "Tax-Efficient Giving", body: "Gift Aid and payroll giving multiply your contribution." },
      { title: "Volunteer Trustees", body: "Run by an unpaid trustee board drawn from the industry." },
    ],
    ctaPrimary: { label: "Donate Now", href: "/contact" },
    ctaSecondary: { label: "Apply for a Grant", href: "/help/hardship" },
  },

  "/about/careers": {
    eyebrow: "Build Your Career",
    title: "Landscaping Careers",
    theme: "grass" as any,
    intro:
      "Landscaping is one of the UK's most varied, rewarding and fast-growing career paths — combining creativity, craft, science and the great outdoors. From garden design to civil-scale contracting, our industry needs talent.",
    sections: [
      {
        heading: "Why Choose Landscaping",
        body: "You'll work outdoors on living, breathing projects that transform places and lives. Career routes span design, build, maintenance, supply, plant nurseries, arboriculture and management — with strong demand for skilled professionals nationwide.",
      },
      {
        heading: "Getting In",
        body: "There's no single route. T-Levels, apprenticeships, college courses, university degrees and on-the-job training all lead into successful careers. Many of our most senior members started on-site and worked their way up.",
        bullets: [
          "Apprenticeships (Levels 2-7) — earn while you learn",
          "College qualifications in horticulture and landscaping",
          "BSc / MSc degrees in landscape architecture and management",
          "Direct entry with on-the-job training and ROLO certification",
        ],
      },
    ],
    highlights: [
      { title: "Garden Designer", body: "Concept, plant and detail beautiful private and public spaces." },
      { title: "Landscape Contractor", body: "Build and install gardens, parks and commercial schemes." },
      { title: "Maintenance Professional", body: "Care for and enhance landscapes year-round." },
      { title: "Supplier & Grower", body: "Source, grow and distribute the materials behind every project." },
    ],
    ctaPrimary: { label: "Find a Training Provider", href: "/directory/training" },
    ctaSecondary: { label: "Apply for a SmartCard", href: "/liss-cscs/apply" },
  },

  "/about/advertise": {
    eyebrow: "Reach Our Audience",
    title: "Advertise With BALI",
    theme: "purple",
    intro:
      "Connect with the largest and most engaged community of landscape professionals in the UK — through Landscape News magazine, our weekly e-bulletin, dedicated email campaigns, website display and event sponsorship.",
    sections: [
      {
        heading: "Channels",
        body: "Choose from print, digital and live channels — or combine them for an integrated campaign across the BALI audience.",
        bullets: [
          "Landscape News — quarterly print magazine, 8,000+ readers",
          "Weekly e-bulletin — 12,000+ subscribers",
          "Standalone email blasts to members",
          "bali.org.uk display advertising",
          "Event sponsorship and exhibitor packages",
        ],
      },
      {
        heading: "Who You'll Reach",
        body: "Practising designers, principal contractors, specifiers, buyers, training providers and grounds managers — the people who choose products, plants and partners across the UK landscape sector.",
      },
    ],
    highlights: [
      { title: "Targeted", body: "100% of our audience works in or specifies landscaping." },
      { title: "Trusted", body: "BALI-branded channels carry the trust of the Accreditation." },
      { title: "Measurable", body: "Detailed analytics on email and digital campaigns." },
      { title: "Flexible", body: "Rate cards for every budget — from £150 to bespoke partnerships." },
    ],
    ctaPrimary: { label: "Request Media Pack", href: "/contact" },
    ctaSecondary: { label: "Sponsor an Event", href: "/events/sponsor" },
  },

  "/about/charities": {
    eyebrow: "Giving Back",
    title: "Supported Charities",
    theme: "green",
    intro:
      "BALI proudly supports a number of charities aligned with our industry's values — championing wellbeing, opportunity and environmental stewardship across the landscape sector and the wider community.",
    highlights: [
      { title: "BALI-NCF", body: "Hardship grants for landscape workers facing financial difficulty." },
      { title: "Greenfingers", body: "Magical gardens for children's hospices across the UK." },
      { title: "Perennial", body: "Free care and support for everyone in UK horticulture." },
      { title: "Lighthouse Construction Industry Charity", body: "Mental, physical and financial wellbeing support for our workforce." },
    ],
    sections: [
      {
        heading: "How Members Get Involved",
        body: "Members fundraise year-round through challenge events, payroll giving, charity auctions at the National Landscape Awards and dedicated days of action. We make it easy to support causes that matter to your team.",
      },
    ],
    ctaPrimary: { label: "Find Out More", href: "/contact" },
  },

  "/about/conference": {
    eyebrow: "14 July 2026",
    title: "National Conference 2026",
    theme: "blue",
    intro:
      "The BALI National Conference is the must-attend industry event of the year — bringing together hundreds of landscape professionals for keynote talks, panel debates, technical workshops, supplier showcases and the very best networking in our sector.",
    stats: [
      { value: "14 Jul", label: "2026" },
      { value: "Stoneleigh", label: "Park, Warwickshire" },
      { value: "500+", label: "Delegates expected" },
    ],
    sections: [
      {
        heading: "What's On",
        body: "A full day programme of keynote speakers, breakout sessions on sustainability, business growth, H&S and technical practice, plus a major exhibition of leading suppliers and a celebratory evening drinks reception.",
      },
      {
        heading: "Who Should Attend",
        body: "Principals and senior staff from BALI member firms — designers, contractors, suppliers, training providers and grounds managers. Discounted member rate and bring-your-team packages available.",
      },
    ],
    highlights: [
      { title: "Keynote Speakers", body: "Industry leaders and external thinkers on the future of landscaping." },
      { title: "Workshops", body: "Practical, take-away sessions on the issues that matter most." },
      { title: "Exhibition", body: "Hands-on showcases from BALI Affiliate suppliers." },
      { title: "Networking", body: "Reception, lunch and evening drinks built for meaningful conversations." },
    ],
    ctaPrimary: { label: "Book Early-Bird Tickets", href: "/events" },
    ctaSecondary: { label: "Sponsor the Conference", href: "/events/sponsor" },
  },

  // ───────────────────────────── MEMBERSHIP ────────────────────────────
  "/membership": {
    eyebrow: "Membership",
    title: "Why BALI Membership Matters",
    theme: "green",
    intro:
      "BALI Accreditation is the gold standard in UK landscaping. Membership signals quality, professionalism and accountability to clients, specifiers and the wider industry — and unlocks a portfolio of benefits that save members thousands every year.",
    sections: [
      {
        heading: "Membership Categories",
        body: "We accredit firms across the full landscape sector. Most members join as Registered, then progress to Accredited after their first independent assessment.",
        bullets: [
          "Registered — provisional first year, working toward Accreditation",
          "Accredited Designer — garden and landscape design practices",
          "Accredited Contractor — design-and-build and build-only landscape firms",
          "Accredited Maintenance — grounds maintenance specialists",
          "Affiliate — manufacturers, suppliers and service providers",
          "Training Provider — colleges and independent trainers",
        ],
      },
      {
        heading: "The Accreditation Journey",
        body: "All Accredited members pass an independent on-site assessment of live and recent projects, financial probity checks, insurance verification and a peer review. Re-assessment runs on a rolling cycle to keep standards high.",
      },
    ],
    highlights: [
      { title: "Use of the Accredited Logo", body: "Display the mark trusted by clients and specifiers nationwide." },
      { title: "Free HR & H&S Checks", body: "Annual reviews from our partner Quest, included with membership." },
      { title: "Directory Listing", body: "Get found in the UK's leading landscape professional directory." },
      { title: "Discounts & Savings", body: "Member-only deals on insurance, fuel, suppliers and more." },
    ],
    ctaPrimary: { label: "Join Today", href: "/join" },
    ctaSecondary: { label: "Read the Quality Standard", href: "/membership/quality" },
  },

  "/join": {
    eyebrow: "Join BALI",
    title: "Apply for Membership",
    theme: "green",
    intro:
      "Joining BALI is the single best investment you can make in your landscape business. Apply online in under 10 minutes — we'll be in touch within 48 hours to guide you through the next steps.",
    sections: [
      {
        heading: "How to Apply",
        body: "Submit the online enquiry form with your company details, services and recent projects. Our membership team will confirm which category fits, send the application pack, and arrange your initial assessment.",
        bullets: [
          "Step 1 — Submit enquiry form",
          "Step 2 — Membership team contact (within 48 hours)",
          "Step 3 — Complete application pack",
          "Step 4 — On-site assessment scheduled",
          "Step 5 — Approval and welcome",
        ],
      },
      {
        heading: "Fees",
        body: "Annual membership fees vary by category and turnover. There is a one-off joining fee plus a yearly subscription. Full details are sent with your application pack; instalment payments are available.",
      },
    ],
    highlights: [
      { title: "Trusted Mark", body: "Use the BALI Accredited logo on your van, site, website and proposals." },
      { title: "Free Reviews", body: "Annual HR and Health & Safety health checks worth thousands." },
      { title: "Awards Eligibility", body: "Enter the National Landscape Awards — the most prestigious in the UK." },
      { title: "Year-Round Support", body: "Technical, legal and business advice when you need it." },
    ],
    ctaPrimary: { label: "Start Enquiry", href: "/contact" },
    ctaSecondary: { label: "Member Login", href: "/login" },
  },

  "/membership/terms": {
    eyebrow: "Membership",
    title: "Terms of Membership",
    theme: "slate",
    intro:
      "These Terms of Membership set out the rights and obligations of all BALI members. They are issued under the Association's Articles and apply equally to every membership category.",
    sections: [
      {
        heading: "Eligibility",
        body: "Membership is open to firms and individuals operating within the UK landscape industry that meet our published category criteria and pass the Accreditation assessment.",
      },
      {
        heading: "Annual Subscription",
        body: "Membership is renewed annually on the anniversary of joining. Subscriptions are payable within 30 days of invoice. Lapsed members lose the right to use the Accredited mark and Directory listing.",
      },
      {
        heading: "Conduct & Suspension",
        body: "Members must observe the Code of Conduct at all times. The Board reserves the right to suspend or terminate membership for serious breach, following a published disciplinary procedure with right of appeal.",
      },
      {
        heading: "Disputes",
        body: "Members agree to engage constructively with the BALI Dispute Service for client complaints brought against them. Repeated upheld complaints may trigger re-assessment.",
      },
    ],
    ctaPrimary: { label: "Read the Code of Conduct", href: "/membership/code" },
  },

  "/membership/code": {
    eyebrow: "Membership",
    title: "Code of Conduct",
    theme: "slate",
    intro:
      "Every BALI member commits to the Code of Conduct. It is the foundation of the BALI Accredited mark and the assurance clients receive when choosing a member.",
    sections: [
      {
        heading: "Our Promises to Clients",
        body: "Members will deliver work to the standard agreed, communicate honestly, honour quotations, work safely, and resolve any complaints promptly and fairly.",
        bullets: [
          "Honest, transparent quotations and contracts",
          "Skilled, trained and competent personnel on every job",
          "Safe working practices, properly insured",
          "Respect for clients, neighbours and the environment",
          "Prompt resolution of any complaints",
        ],
      },
      {
        heading: "Our Promises to Each Other",
        body: "Members compete fairly, share knowledge generously, support new entrants to the industry, and uphold the reputation of the Association in everything they do.",
      },
    ],
    ctaPrimary: { label: "View the Quality Standard", href: "/membership/quality" },
  },

  "/membership/quality": {
    eyebrow: "Membership",
    title: "Association Quality Standard",
    theme: "slate",
    intro:
      "The BALI Association Quality Standard (AQS) is the published benchmark against which all Accredited members are independently assessed. It is the most demanding quality standard in the UK landscape industry.",
    sections: [
      {
        heading: "What's Assessed",
        body: "On-site visits to live and recent projects, review of contracts and quotations, financial probity checks, insurance verification, evidence of CPD, H&S documentation and customer references.",
      },
      {
        heading: "Assessment Cycle",
        body: "Initial assessment within 12 months of joining, then re-assessment on a rolling three-year cycle. Risk-based interim checks may be triggered by complaints or significant business change.",
      },
      {
        heading: "Outcomes",
        body: "Successful firms receive a written Accreditation report and full use of the BALI Accredited mark. Areas for improvement are tracked and re-visited at the next assessment.",
      },
    ],
    highlights: [
      { title: "Independent", body: "Assessors are vetted, trained and rotated to prevent conflicts." },
      { title: "Evidence-Based", body: "Decisions rest on documented evidence, not impressions." },
      { title: "Confidential", body: "Reports are shared only with the member firm." },
      { title: "Improving", body: "The AQS is reviewed annually with member input." },
    ],
  },

  // ───────────────────────────── DIRECTORY ─────────────────────────────
  "/directory": {
    eyebrow: "Landscape Directory",
    title: "Find a Landscape Professional",
    theme: "blue",
    intro:
      "Search the UK's most trusted directory of landscape designers, contractors, suppliers and training providers — every listed business is an independently Accredited BALI member.",
    sections: [
      {
        heading: "How to Search",
        body: "Filter by service type, region or postcode to find the right Accredited professional for your project. Each profile includes a portfolio, accreditation badge, contact details and project sizes handled.",
      },
    ],
    highlights: [
      { title: "Designer", body: "Garden and landscape designers — concept to detailed drawings." },
      { title: "Contractor", body: "Soft and hard landscaping, build and maintenance." },
      { title: "Supplier", body: "Plants, materials, machinery and equipment." },
      { title: "Training Provider", body: "Colleges and independent trainers, fully accredited." },
    ],
    ctaPrimary: { label: "Search Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why Choose a Member?", href: "/directory/why" },
  },

  "/directory/designer": {
    eyebrow: "Directory",
    title: "Garden & Landscape Designers",
    theme: "blue",
    intro:
      "Find an Accredited garden or landscape designer to bring your project to life — from compact urban courtyards and country estates to commercial public realm and roof gardens.",
    sections: [
      {
        heading: "What to Expect",
        body: "A BALI Accredited designer will work with you through site survey, brief, concept, planting plans and detailed construction drawings — and can recommend a Contractor to deliver the build.",
      },
    ],
    highlights: [
      { title: "Domestic Design", body: "Private gardens of every scale and budget." },
      { title: "Commercial Design", body: "Public realm, offices, hotels and education." },
      { title: "Roof & Podium", body: "Specialist green roof and podium design." },
      { title: "Restoration", body: "Historic and heritage garden restoration." },
    ],
    ctaPrimary: { label: "Search Designers", href: "/directory/search" },
  },

  "/directory/contractor": {
    eyebrow: "Directory",
    title: "Landscape Contractors",
    theme: "green",
    intro:
      "Accredited Landscape Contractors deliver soft and hard landscaping schemes across the UK — from residential gardens to multi-million-pound commercial public realm.",
    highlights: [
      { title: "Domestic Build", body: "Private garden construction and maintenance." },
      { title: "Commercial Build", body: "Schools, hotels, offices and public spaces." },
      { title: "Soft Landscaping", body: "Planting, turfing, seeding and aftercare." },
      { title: "Hard Landscaping", body: "Paving, walling, drainage, fencing and lighting." },
    ],
    ctaPrimary: { label: "Search Contractors", href: "/directory/search" },
  },

  "/directory/supplier": {
    eyebrow: "Directory",
    title: "Suppliers & Manufacturers",
    theme: "warm",
    intro:
      "BALI Affiliate suppliers and manufacturers cover every product category in landscaping — plants and trees, hard materials, machinery, irrigation, lighting and software.",
    highlights: [
      { title: "Plants & Trees", body: "Nurseries supplying specimen and contract stock." },
      { title: "Hard Materials", body: "Paving, walling, decking, fencing and aggregates." },
      { title: "Machinery", body: "Mowers, diggers, hand tools and PPE." },
      { title: "Specialist", body: "Irrigation, lighting, drainage and software." },
    ],
    ctaPrimary: { label: "Search Suppliers", href: "/directory/search" },
  },

  "/directory/training": {
    eyebrow: "Directory",
    title: "Accredited Training Providers",
    theme: "purple",
    intro:
      "BALI Accredited Training Providers deliver the courses, qualifications and CPD that power our industry — from new-entrant apprenticeships to specialist supervisor and management programmes.",
    highlights: [
      { title: "Apprenticeships", body: "Levels 2-7 in horticulture and landscape." },
      { title: "Short Courses", body: "Practical day and week courses across the UK." },
      { title: "CPD", body: "Continuing professional development for every role." },
      { title: "Bespoke Training", body: "Custom programmes designed for your business." },
    ],
    ctaPrimary: { label: "Search Training Providers", href: "/directory/search" },
  },

  "/directory/why": {
    eyebrow: "Choose Quality",
    title: "Why Choose a BALI Member?",
    theme: "blue",
    intro:
      "Choosing a BALI Accredited member protects you, your project and your investment. Every listed firm has passed an independent on-site assessment and committed to the Code of Conduct.",
    highlights: [
      { title: "Quality", body: "Assessed on the BALI Quality Standard, the toughest in the industry." },
      { title: "Insurance", body: "Verified public liability and professional indemnity cover." },
      { title: "Safety", body: "Documented Health & Safety systems and trained operatives." },
      { title: "Recourse", body: "Access to the BALI Dispute Service if things go wrong." },
    ],
    sections: [
      {
        heading: "Independent Assurance",
        body: "Unlike many trade marks, BALI Accreditation requires an independent on-site assessment by trained assessors — not a self-declared questionnaire. Re-assessment runs on a rolling cycle to maintain standards.",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
  },

  "/directory/search": {
    eyebrow: "Directory",
    title: "Search the BALI Directory",
    theme: "blue",
    intro:
      "Use the search tool below to find Accredited landscape professionals in your area. Filter by service type, region or specialism. Live directory search is being upgraded — in the meantime, contact us for a personal recommendation.",
    sections: [
      {
        heading: "Need Help Choosing?",
        body: "Our membership team can recommend three Accredited members suited to your project, location and budget — free of charge and without obligation.",
      },
    ],
    ctaPrimary: { label: "Request a Recommendation", href: "/contact" },
  },

  // ─────────────────────────────── NEWS ────────────────────────────────
  "/news": {
    eyebrow: "Latest News",
    title: "News from BALI",
    theme: "flow",
    intro:
      "All the latest from the British Association of Landscape Industries — policy updates, member spotlights, industry research, awards news and behind-the-scenes from Landscape House.",
    sections: [
      {
        heading: "Featured Stories",
        body: "Our editorial team publishes new stories weekly. Subscribe to the weekly e-bulletin to get the headlines straight to your inbox.",
      },
    ],
    highlights: [
      { title: "Lay of the Land 2025", body: "Our annual industry report reveals the trends shaping UK landscaping." },
      { title: "Conference 2026", body: "Speakers, sponsors and early-bird tickets announced." },
      { title: "Awards Shortlist", body: "Meet the firms shortlisted for the National Landscape Awards." },
      { title: "Policy & Lobbying", body: "What we're doing for the £24bn UK ornamental horticulture sector." },
    ],
    ctaPrimary: { label: "Read Landscape News Magazine", href: "/news/magazine" },
    ctaSecondary: { label: "Subscribe to E-Bulletin", href: "/contact" },
  },

  "/news/magazine": {
    eyebrow: "Magazine",
    title: "Landscape News",
    theme: "flow",
    intro:
      "Landscape News is the quarterly print and digital magazine of the British Association of Landscape Industries — packed with project showcases, technical features, member interviews and the industry stories you won't read anywhere else.",
    sections: [
      {
        heading: "What's Inside",
        body: "Each issue runs to 60+ pages covering project of the issue, landmark schemes, sustainability and technology, business and HR, BALI news, member spotlights and book and product reviews.",
      },
      {
        heading: "Who Reads It",
        body: "Posted free to all BALI members and circulated digitally to 8,000+ industry professionals each quarter, plus distributed at major industry events.",
      },
    ],
    highlights: [
      { title: "Quarterly Print", body: "Four high-quality issues per year, posted to members." },
      { title: "Digital Edition", body: "Browse and download every issue online." },
      { title: "Archive Access", body: "Members get access to every back issue." },
      { title: "Advertise", body: "Reach 8,000+ engaged industry professionals." },
    ],
    ctaPrimary: { label: "Read Latest Issue", href: "/news" },
    ctaSecondary: { label: "Advertise With Us", href: "/about/advertise" },
  },

  // ────────────────────────────── EVENTS ───────────────────────────────
  "/events": {
    eyebrow: "What's On",
    title: "Events & Training",
    theme: "purple",
    intro:
      "BALI runs a year-round programme of conferences, regional networking, technical workshops, training courses and the National Landscape Awards. Find what's on, book your place, and connect with the UK landscape community.",
    sections: [
      {
        heading: "Upcoming Highlights",
        body: "From the National Conference and Awards to ROLO training days and regional Member Forums, there's always something on the BALI calendar.",
      },
    ],
    highlights: [
      { title: "National Conference", body: "Our flagship one-day event at Stoneleigh Park." },
      { title: "National Landscape Awards", body: "Black-tie celebration at the InterContinental O2." },
      { title: "Regional Forums", body: "Local networking and CPD across every UK region." },
      { title: "Training Courses", body: "ROLO, H&S and technical training year-round." },
    ],
    ctaPrimary: { label: "View Training Courses", href: "/events/training" },
    ctaSecondary: { label: "Sponsor an Event", href: "/events/sponsor" },
  },

  "/events/training": {
    eyebrow: "Training",
    title: "Training Courses",
    theme: "green",
    intro:
      "BALI training courses cover the technical, safety and business skills that drive our industry forward — delivered in person, online and on-site by industry-leading trainers.",
    sections: [
      {
        heading: "Course Catalogue",
        body: "Most courses are open to both members and non-members, with substantial member discounts. In-company training can be delivered at your premises.",
        bullets: [
          "ROLO Health, Safety & Environment training",
          "First Aid at Work (1-day & 3-day)",
          "Manual handling and abrasive wheels",
          "CSCS card preparation",
          "Business development and tendering",
          "Estimating and quotations",
        ],
      },
    ],
    highlights: [
      { title: "ROLO", body: "Mandatory training behind every LISS/CSCS card." },
      { title: "On-Site", body: "Bring courses to your team and save time." },
      { title: "Member Discounts", body: "Up to 50% off for BALI Accredited members." },
      { title: "CPD Hours", body: "Every course earns documented CPD hours." },
    ],
    ctaPrimary: { label: "Book a Course", href: "/contact" },
  },

  "/events/sponsor": {
    eyebrow: "Sponsorship",
    title: "Sponsor National Conference 2026",
    theme: "warm",
    intro:
      "Put your brand in front of 500+ senior landscape professionals at the BALI National Conference 2026. A range of headline, breakout, drinks reception and exhibition packages are available.",
    sections: [
      {
        heading: "Packages",
        body: "From headline sponsorship to single exhibitor stands, we can build a package to match your goals and budget. All packages include logo placement, delegate bag inserts, and post-event mailing.",
        bullets: [
          "Headline Sponsor — single exclusive partner",
          "Breakout Stream Sponsor — own a workshop track",
          "Drinks Reception Sponsor — close out the day",
          "Exhibitor Stand — meet delegates one-on-one",
          "Delegate Bag — physical handout to every guest",
        ],
      },
    ],
    highlights: [
      { title: "500+ Delegates", body: "Senior landscape decision-makers in one room." },
      { title: "Year-Long Visibility", body: "Logo on conference website and post-event coverage." },
      { title: "Direct Access", body: "Meet, demo and network face-to-face." },
      { title: "Bespoke", body: "We'll tailor a package around your objectives." },
    ],
    ctaPrimary: { label: "Request the Sponsor Pack", href: "/contact" },
  },

  // ───────────────────────────── HELP & ADVICE ─────────────────────────
  "/help": {
    eyebrow: "Help & Advice",
    title: "Member Support & Resources",
    theme: "flow",
    intro:
      "Members get year-round access to expert support across contracts, health & safety, HR, employment law, pests and diseases, dispute resolution and hardship — all included in your membership subscription.",
    highlights: [
      { title: "Landscape Contract", body: "Industry-standard contract templates for every job size." },
      { title: "Health & Safety", body: "Templates, advice line and free annual health check." },
      { title: "Law & Regulations", body: "Up-to-the-minute guidance on what affects your business." },
      { title: "Dispute Service", body: "Independent help when client relationships break down." },
    ],
    sections: [
      {
        heading: "How to Access",
        body: "Most resources are in the My BALI portal. For one-to-one advice, call the office or email our team — most enquiries are answered within 48 hours.",
      },
    ],
    ctaPrimary: { label: "Sign in to My BALI", href: "/login" },
    ctaSecondary: { label: "Contact the Team", href: "/contact" },
  },

  "/help/contract": {
    eyebrow: "Help & Advice",
    title: "Landscape Contract",
    theme: "blue",
    intro:
      "The BALI Domestic Landscape Contract and Commercial Landscape Contract are the industry-standard agreements between landscape professionals and their clients — drafted by lawyers, refined by members, and recognised across the sector.",
    sections: [
      {
        heading: "What's Included",
        body: "Both contracts cover scope of work, payment terms, variations, programme, defects, insurance and dispute resolution — written in plain English so clients understand what they're signing.",
      },
      {
        heading: "Where to Get It",
        body: "Members can download the latest version free from the My BALI portal. Non-members can purchase a single-use copy from the office.",
      },
    ],
    highlights: [
      { title: "Plain English", body: "Easy for clients to read and sign." },
      { title: "Lawyer-Drafted", body: "Reviewed annually by specialist construction lawyers." },
      { title: "Domestic & Commercial", body: "Two versions for different project types." },
      { title: "Member-Free", body: "Included in your annual subscription." },
    ],
    ctaPrimary: { label: "Download in My BALI", href: "/login" },
  },

  "/help/health-safety": {
    eyebrow: "Help & Advice",
    title: "Health & Safety",
    theme: "warm",
    intro:
      "Keeping people safe on landscaping sites is non-negotiable. BALI provides every member with H&S templates, an advice line, and a free annual H&S Health Check delivered by our specialist partners.",
    sections: [
      {
        heading: "What's Available",
        body: "Risk assessment templates, method statement library, near-miss reporting forms, COSHH templates and the BALI H&S advice line — all included with membership.",
        bullets: [
          "Editable risk assessment library",
          "Method statement templates",
          "COSHH and PPE registers",
          "Near-miss and accident reporting",
          "Annual free H&S Health Check",
          "Telephone advice line",
        ],
      },
    ],
    highlights: [
      { title: "Free H&S Check", body: "Annual review worth £500+, included in membership." },
      { title: "Advice Line", body: "Talk to a specialist when an incident happens." },
      { title: "Templates", body: "Editable documents you can adopt immediately." },
      { title: "Training Linked", body: "Courses to upskill your team and supervisors." },
    ],
    ctaPrimary: { label: "Book Your H&S Check", href: "/login" },
  },

  "/help/law": {
    eyebrow: "Help & Advice",
    title: "Law & Regulations",
    theme: "slate",
    intro:
      "BALI keeps members up to date on the laws and regulations that affect landscape businesses — from employment and tax to planning, environment, biodiversity net gain and procurement.",
    highlights: [
      { title: "Employment Law", body: "Contracts, holidays, dismissals and HR best practice." },
      { title: "Planning & Environment", body: "BNG, tree protection orders, water and pesticide rules." },
      { title: "Tax & VAT", body: "Sector-specific guidance from our accountancy partners." },
      { title: "Procurement", body: "Working with public sector buyers and frameworks." },
    ],
    sections: [
      {
        heading: "How We Help",
        body: "Members get briefing notes, advice line access and webinars on every major regulatory change — so you can focus on running your business, confident the small print is covered.",
      },
    ],
    ctaPrimary: { label: "Contact the Team", href: "/contact" },
  },

  "/help/dispute": {
    eyebrow: "Help & Advice",
    title: "Dispute Service",
    theme: "purple",
    intro:
      "When a client relationship breaks down, the BALI Dispute Service offers an independent, low-cost route to resolution — protecting both your reputation and your client's investment.",
    sections: [
      {
        heading: "How It Works",
        body: "Either party can apply for help. Our team reviews the case, attempts conciliation, and if that fails refers to an independent expert for a binding determination. Most cases settle in conciliation, saving cost and time.",
        bullets: [
          "Step 1 — Application by either party",
          "Step 2 — Initial review by BALI",
          "Step 3 — Conciliation between the parties",
          "Step 4 — Independent expert (if needed)",
          "Step 5 — Binding determination",
        ],
      },
    ],
    highlights: [
      { title: "Low Cost", body: "Far cheaper and faster than court action." },
      { title: "Independent", body: "Decisions made by experts outside BALI." },
      { title: "Confidential", body: "Cases handled discreetly and confidentially." },
      { title: "Binding", body: "Determinations are binding on member firms." },
    ],
    ctaPrimary: { label: "Apply to the Service", href: "/contact" },
  },

  "/help/pests": {
    eyebrow: "Help & Advice",
    title: "Pests & Diseases",
    theme: "green",
    intro:
      "Biosecurity and plant health matter to every landscape professional. BALI provides up-to-date alerts and guidance on pests and diseases threatening UK landscapes — from box tree moth and oak processionary moth to phytophthora and Xylella.",
    highlights: [
      { title: "Plant Health Alerts", body: "Real-time notifications on new and emerging threats." },
      { title: "Biosecurity Best Practice", body: "Cleaning protocols and supplier checks." },
      { title: "Reporting", body: "How and where to report suspected outbreaks." },
      { title: "Webinars", body: "Expert sessions with leading plant pathologists." },
    ],
    ctaPrimary: { label: "Subscribe to Alerts", href: "/contact" },
  },

  "/help/hardship": {
    eyebrow: "Help & Advice",
    title: "BALI-NCF Hardship Fund",
    theme: "green",
    intro:
      "The BALI National Charity Fund (BALI-NCF) provides confidential one-off hardship grants to landscape workers and their families facing serious financial difficulty.",
    sections: [
      {
        heading: "Who Can Apply",
        body: "Anyone currently or recently working in UK landscaping — employed, self-employed or working for a BALI member firm — affected by illness, injury, bereavement or sudden loss of income.",
      },
      {
        heading: "How to Apply",
        body: "Download the confidential application form, complete with supporting evidence, and return to the Charity Secretary. Decisions are typically made within four weeks.",
      },
    ],
    highlights: [
      { title: "Confidential", body: "All applications handled in strict confidence." },
      { title: "Fast Decisions", body: "Most cases reviewed within four weeks." },
      { title: "Direct Help", body: "Grants paid straight to beneficiaries or suppliers." },
      { title: "Trustee Board", body: "Independent volunteer trustees from the industry." },
    ],
    ctaPrimary: { label: "Request Application Form", href: "/contact" },
    ctaSecondary: { label: "Donate to the Fund", href: "/about/ncf" },
  },

  "/help/podcast": {
    eyebrow: "Podcast",
    title: "Dig Deep: The BALI Podcast",
    theme: "purple",
    intro:
      "Dig Deep is the official BALI podcast — frank, funny and full of insight from the people shaping UK landscaping. New episodes monthly, free on every major podcast platform.",
    sections: [
      {
        heading: "Recent Episodes",
        body: "Hosted by industry veterans, each episode features an in-depth interview with a leading designer, contractor or industry figure — plus regular guests on H&S, business and policy.",
      },
    ],
    highlights: [
      { title: "Apple Podcasts", body: "Subscribe and never miss an episode." },
      { title: "Spotify", body: "Streaming-friendly with full transcripts." },
      { title: "YouTube", body: "Video version with project visuals." },
      { title: "Newsletter", body: "Episode notes delivered to your inbox." },
    ],
    ctaPrimary: { label: "Listen on Apple", href: "https://podcasts.apple.com" },
    ctaSecondary: { label: "Listen on Spotify", href: "https://open.spotify.com" },
  },

  // ───────────────────────────── LISS/CSCS ─────────────────────────────
  "/liss-cscs": {
    eyebrow: "LISS/CSCS",
    title: "Landscape Industry SmartCards",
    theme: "flow",
    intro:
      "LISS/CSCS is the SmartCard scheme for the UK landscape industry — proof that the cardholder has the training, qualifications and Health & Safety knowledge to work on live commercial sites.",
    stats: [
      { value: "20k+", label: "Active SmartCards" },
      { value: "36k+", label: "ROLO operatives" },
      { value: "5", label: "Card colours" },
    ],
    sections: [
      {
        heading: "Why LISS/CSCS",
        body: "Most commercial principals and construction clients now require every operative on site to hold a valid CSCS-affiliated card. LISS/CSCS is the landscape-industry version, recognised across UK construction.",
      },
    ],
    highlights: [
      { title: "Apply Online", body: "Quick and easy SmartCard application." },
      { title: "Check Quals", body: "See if your existing qualifications count." },
      { title: "ROLO Training", body: "The H&S course behind every card." },
      { title: "NHSS18", body: "Highways Sector Scheme for roadside landscaping." },
    ],
    ctaPrimary: { label: "Apply for a Card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check Your Qualifications", href: "/liss-cscs/check" },
  },

  "/liss-cscs/apply": {
    eyebrow: "LISS/CSCS",
    title: "Apply for a SmartCard",
    theme: "flow",
    intro:
      "Applying for a LISS/CSCS SmartCard is straightforward — most cards are issued within 10 working days of a complete application.",
    sections: [
      {
        heading: "What You'll Need",
        body: "A valid ROLO Health, Safety & Environment certificate (taken in the last five years), proof of any relevant qualifications, a passport-style photo and your application fee.",
        bullets: [
          "ROLO HS&E certificate (within 5 years)",
          "Qualification certificates (if claiming a higher card)",
          "Passport-style colour photo",
          "Application fee (paid online)",
        ],
      },
      {
        heading: "Card Types",
        body: "Cards are colour-coded by role and qualification level — from Trainee (red) through Operative (green/blue), Skilled (gold) and Manager/Supervisor (gold/black).",
      },
    ],
    ctaPrimary: { label: "Start Application", href: "/contact" },
    ctaSecondary: { label: "Book ROLO Training", href: "/liss-cscs/rolo" },
  },

  "/liss-cscs/check": {
    eyebrow: "LISS/CSCS",
    title: "Check Your Qualifications",
    theme: "blue",
    intro:
      "Not sure which SmartCard you qualify for? Use our online qualification checker to see how your existing qualifications and experience map to the LISS/CSCS card range.",
    sections: [
      {
        heading: "What's Recognised",
        body: "NVQs, City & Guilds, RHS, BTEC, T-Levels, apprenticeships, and many international qualifications all map to specific SmartCard categories. Industry experience can also qualify you for Experienced Worker cards.",
      },
    ],
    highlights: [
      { title: "NVQ Level 2/3", body: "Skilled and Advanced Skilled cards." },
      { title: "Apprenticeships", body: "Cards aligned to apprenticeship completion." },
      { title: "Experienced Worker", body: "Route for those without formal qualifications." },
      { title: "International", body: "Recognition for many overseas qualifications." },
    ],
    ctaPrimary: { label: "Use the Checker", href: "/contact" },
  },

  "/liss-cscs/rolo": {
    eyebrow: "LISS/CSCS",
    title: "ROLO Training",
    theme: "green",
    intro:
      "ROLO (Register of Land-Based Operatives) is the Health, Safety & Environment training that underpins every LISS/CSCS SmartCard. Take ROLO once every five years to stay current.",
    sections: [
      {
        heading: "Course Format",
        body: "ROLO is a one-day classroom-based course covering site safety, manual handling, COSHH, PPE, environmental awareness and emergency procedures. Available in person or online.",
      },
      {
        heading: "Where to Train",
        body: "BALI Accredited Training Providers deliver ROLO across the UK year-round. Members get discounted rates.",
      },
    ],
    highlights: [
      { title: "One Day", body: "Single day of classroom or online training." },
      { title: "5-Year Validity", body: "Refresh every five years to maintain your card." },
      { title: "Member Discount", body: "Discounted rates for BALI members." },
      { title: "In-Company", body: "Group training delivered at your premises." },
    ],
    ctaPrimary: { label: "Find a Training Provider", href: "/directory/training" },
  },

  "/liss-cscs/nhss18": {
    eyebrow: "LISS/CSCS",
    title: "NHSS18 — Highways Sector Scheme",
    theme: "warm",
    intro:
      "NHSS18 (National Highways Sector Scheme 18) is the quality scheme for landscape works on the strategic road network — required by National Highways and most local authorities for roadside landscaping contracts.",
    sections: [
      {
        heading: "What's Required",
        body: "NHSS18 demands ISO 9001 certification plus sector-specific competence requirements for supervisors and operatives — typically demonstrated through LISS/CSCS cards at the right level.",
      },
    ],
    highlights: [
      { title: "Required for Roads", body: "Mandatory for most National Highways landscape work." },
      { title: "ISO 9001", body: "Quality management system certification needed." },
      { title: "Competence", body: "Documented training records for every operative." },
      { title: "BALI Support", body: "Guidance on the journey to NHSS18 compliance." },
    ],
    ctaPrimary: { label: "Get Compliance Support", href: "/contact" },
  },

  "/liss-cscs/accreditation": {
    eyebrow: "LISS/CSCS",
    title: "Industry Accreditation",
    theme: "blue",
    intro:
      "The LISS/CSCS SmartCard scheme is fully accredited by Construction Skills Certification Scheme (CSCS), the umbrella body for the UK construction industry — making LISS/CSCS cards accepted on virtually every UK site.",
    sections: [
      {
        heading: "Recognition",
        body: "CSCS-affiliated cards are accepted by Build UK, the Major Contractors Group, National Highways, Network Rail and the vast majority of UK construction sites — including those operated by Tier 1 contractors.",
      },
    ],
    highlights: [
      { title: "CSCS Affiliated", body: "Full membership of the CSCS scheme family." },
      { title: "Build UK Recognised", body: "Accepted by Build UK member contractors." },
      { title: "Network Rail", body: "Valid on Network Rail sites with the right card." },
      { title: "National Highways", body: "Required for strategic road network work." },
    ],
    ctaPrimary: { label: "Apply for a Card", href: "/liss-cscs/apply" },
  },

  // ────────────────────────────── FOOTER ───────────────────────────────
  "/contact": {
    eyebrow: "Get In Touch",
    title: "Contact BALI",
    theme: "blue",
    intro:
      "Whether you're a prospective member, a client looking for a recommendation, a journalist or just curious about what we do — we'd love to hear from you. The BALI team aims to respond to every enquiry within 48 hours.",
    sections: [
      {
        heading: "Postal Address",
        body: "Landscape House, Stoneleigh Park, Nr Kenilworth, Warwickshire, CV8 2LG",
      },
      {
        heading: "Phone & Email",
        body: "Call +44 (0)24 7669 0333 between 9am and 5pm, Monday to Friday. Email contact@bali.org.uk and we'll route your enquiry to the right team.",
      },
      {
        heading: "Press Enquiries",
        body: "For media and press, email press@bali.org.uk. We can connect you with industry experts, member firms and our senior leadership for comment.",
      },
    ],
    highlights: [
      { title: "Membership", body: "Become an Accredited member or upgrade your category." },
      { title: "Find a Pro", body: "Get a personal recommendation for your project." },
      { title: "Training", body: "Book a course or LISS/CSCS application." },
      { title: "Press", body: "Comment, interviews and industry data on request." },
    ],
    ctaPrimary: { label: "Email Us", href: "mailto:contact@bali.org.uk" },
    ctaSecondary: { label: "Call +44 (0)24 7669 0333", href: "tel:+442476690333" },
  },

  "/lay-of-the-land-2025": {
    eyebrow: "Industry Report",
    title: "Lay of the Land 2025",
    theme: "blue",
    intro:
      "BALI's annual Lay of the Land report is the definitive analysis of the UK landscape industry — packed with member data, financial benchmarks, sentiment surveys and the trends shaping our sector for the year ahead.",
    sections: [
      {
        heading: "What's Inside",
        body: "100+ pages covering revenue and profitability benchmarks, hiring and skills, sustainability practice, technology adoption, regional variation and forward sentiment — built from anonymous data submitted by member firms.",
        bullets: [
          "Sector-wide revenue and growth benchmarks",
          "Discipline-by-discipline financial snapshots",
          "Skills shortages and recruitment trends",
          "Sustainability and biodiversity net gain readiness",
          "Technology adoption (BIM, estimating, fleet)",
          "Regional variation and outlook",
        ],
      },
    ],
    highlights: [
      { title: "Free to Members", body: "Download instantly from the My BALI portal." },
      { title: "Non-Member Edition", body: "Summary version available to non-members on request." },
      { title: "Annual Refresh", body: "New edition published every spring." },
      { title: "Cited Widely", body: "Quoted by trade press, policy makers and academia." },
    ],
    ctaPrimary: { label: "Download in My BALI", href: "/login" },
    ctaSecondary: { label: "Request the Summary", href: "/contact" },
  },

  "/disclaimer": {
    eyebrow: "Legal",
    title: "Website Disclaimer",
    theme: "slate",
    intro:
      "The information on this website is provided in good faith and updated regularly. While we make every effort to keep it accurate and current, we make no representations or warranties of any kind, express or implied, about its completeness, accuracy or reliability.",
    sections: [
      {
        heading: "External Links",
        body: "We may link to third-party websites for your convenience. We are not responsible for the content or practices of those sites, and a link does not imply endorsement.",
      },
      {
        heading: "Professional Advice",
        body: "Nothing on this website constitutes legal, financial or technical advice. Always seek qualified professional guidance before acting on any information published here.",
      },
      {
        heading: "Limitation of Liability",
        body: "To the maximum extent permitted by law, BALI shall not be liable for any loss or damage arising from use of this website or reliance on its contents.",
      },
    ],
  },

  "/terms": {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    theme: "slate",
    intro:
      "These Terms govern your use of the BALI website (bali.org.uk). By accessing or using the site you agree to be bound by them. If you do not agree, please do not use the site.",
    sections: [
      {
        heading: "Acceptable Use",
        body: "You may browse, download and print pages for personal or business use related to BALI's activities. You may not copy, redistribute or republish substantial portions of the site without written permission.",
      },
      {
        heading: "Intellectual Property",
        body: "All content (text, images, logos, code) is owned by or licensed to BALI and protected by copyright, trade mark and database rights. The BALI Accredited mark and logo are registered trade marks.",
      },
      {
        heading: "Accounts",
        body: "If you register for a My BALI account, you are responsible for the security of your login credentials and for all activity under your account. Notify us immediately of any unauthorised use.",
      },
      {
        heading: "Governing Law",
        body: "These Terms are governed by the law of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      },
    ],
  },

  "/privacy": {
    eyebrow: "Legal",
    title: "Privacy Policy",
    theme: "slate",
    intro:
      "BALI takes your privacy seriously. This Privacy Policy explains what personal data we collect, why we collect it, and your rights under UK GDPR and the Data Protection Act 2018.",
    sections: [
      {
        heading: "What We Collect",
        body: "Contact details you provide when you join, enquire, register for events or subscribe to communications. Technical data (IP address, browser, pages visited) from your use of our website.",
      },
      {
        heading: "How We Use It",
        body: "To deliver membership services, process applications and payments, send the information you've asked for, run events and training, and improve our website and services.",
      },
      {
        heading: "Lawful Basis",
        body: "We rely on contract (to deliver membership), legitimate interest (to keep members and prospects informed) and consent (for marketing emails).",
      },
      {
        heading: "Your Rights",
        body: "You can ask for access, correction or deletion of your data, restrict or object to processing, and withdraw consent at any time. Email data@bali.org.uk to exercise your rights.",
      },
    ],
    ctaPrimary: { label: "Email the Data Team", href: "mailto:data@bali.org.uk" },
  },

  "/cookies": {
    eyebrow: "Legal",
    title: "Cookie Policy",
    theme: "slate",
    intro:
      "This site uses cookies to improve your experience. Essential cookies make the site work; analytics cookies help us understand how visitors use it. You can accept or reject non-essential cookies via the banner on first visit and change your preferences at any time.",
    sections: [
      {
        heading: "Essential Cookies",
        body: "Required to operate the site — for example, maintaining your session in the My BALI portal. These cannot be turned off.",
      },
      {
        heading: "Analytics Cookies",
        body: "Help us understand which pages are popular and how visitors navigate. We use anonymised data only.",
      },
      {
        heading: "Third-Party Cookies",
        body: "Some pages embed content from third parties (e.g. YouTube). Those services may set their own cookies under their own privacy policies.",
      },
    ],
  },

  "/sitemap": {
    eyebrow: "Site Map",
    title: "All Pages",
    theme: "blue",
    intro:
      "A complete index of pages on bali.org.uk, organised by section. Use this if you can't find what you're looking for in the main navigation.",
    sections: [
      {
        heading: "About",
        body: "What We Do, Board of Directors, National Landscape Awards, BALI-NCF, Landscaping Careers, Advertise With Us, Supported Charities, National Conference 2026.",
      },
      {
        heading: "Membership",
        body: "Why Join, Apply for Membership, Terms of Membership, Code of Conduct, Association Quality Standard.",
      },
      {
        heading: "Directory",
        body: "Designer, Contractor, Supplier, Training Provider, Why Choose a Member, Search All.",
      },
      {
        heading: "News, Events & Help",
        body: "Latest News, Landscape News Magazine, Events, Training Courses, Help & Advice, LISS/CSCS, Contact.",
      },
    ],
  },

  "/forgotten-password": {
    eyebrow: "Account Recovery",
    title: "Reset Your Password",
    theme: "blue",
    intro:
      "Forgot your My BALI password? Enter the email address associated with your account and we'll send you a secure link to set a new one. If you don't receive the email within 10 minutes, check your spam folder or get in touch.",
    sections: [
      {
        heading: "Still Stuck?",
        body: "If you've changed company, your email no longer works, or you've inherited the account from a colleague, our membership team can help you regain access.",
      },
    ],
    ctaPrimary: { label: "Sign In", href: "/login" },
    ctaSecondary: { label: "Contact the Team", href: "/contact" },
  },
};

export function getPageContent(path: string): PageContent | null {
  // Strip trailing slash, lowercase
  const key = path.replace(/\/+$/, "").toLowerCase() || "/";
  return C[key] ?? null;
}
