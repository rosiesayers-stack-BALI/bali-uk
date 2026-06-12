// AUTO-GENERATED from bali.org.uk — verbatim copy ported into the new site.
// Central content store for all BALI website pages rendered via the splat route.

export type PageSection = { heading: string; body: string; bullets?: string[]; image?: PageImage; role?: string; group?: string };
export type PageHighlight = { title: string; body: string };
export type PageCTA = { label: string; href: string };
export type PageImage = { url: string; alt: string };
export type PageEmbed = { url: string; title: string; height?: number };
export type PageEventInfo = {
  venue: string;
  date: string;
  tickets: { label: string; href: string };
};
export type PageTestimonial = { quote: string; name: string; role: string };
export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  theme: "blue" | "green" | "slate" | "flow" | "warm" | "purple";
  image?: PageImage;
  sections?: PageSection[];
  highlights?: PageHighlight[];
  ctaPrimary?: PageCTA;
  ctaSecondary?: PageCTA;
  stats?: { value: string; label: string }[];
  embed?: PageEmbed;
  eventInfo?: PageEventInfo;
  testimonials?: PageTestimonial[];
  gallery?: { images: PageImage[]; heading?: string; caption?: string };
};

const C: Record<string, PageContent> = {

  "/about": {
    eyebrow: "About BALI",
    title: "What we do",
    theme: "blue",
    intro: "BALI is the UK's leading trade association for the landscape industry. We set the standards, accredit the professionals, champion the sector in Westminster, and connect clients with landscape businesses they can trust — from garden designers and contractors to growers, suppliers and training providers.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "An award-winning BALI member landscape project" },
    stats: [
      { value: "900+", label: "Accredited members" },
      { value: "55", label: "Years championing the industry" },
      { value: "UK-wide", label: "Every county covered" },
      { value: "£0", label: "To search the directory" },
    ],
    highlights: [
      { title: "Set the standard", body: "Accreditation, Terms & Conditions of Membership, and our Code of Conduct give clients confidence and members a benchmark to work to." },
      { title: "Champion the industry", body: "We represent members to Government, regulators and the wider construction sector — including APPGHG and the Scottish Ministerial Roundtable." },
      { title: "Celebrate the best work", body: "The National Landscape Awards recognise outstanding design, build, maintenance and supply across the UK every year." },
      { title: "Grow the next generation", body: "Through GoLandscape, BALI-NCF and the BALI Chalk Fund we attract, train and support new talent into landscaping careers." },
      { title: "Support our members", body: "Business, technical, legal and marketing support from Landscape House — plus member benefits that can save thousands every year." },
      { title: "Bring the industry together", body: "Regional events, training courses, the National Conference, and our presence at RHS Chelsea connect members across the UK." },
    ],
    ctaPrimary: { label: "Find an accredited member", href: "/directory" },
    ctaSecondary: { label: "Become a member", href: "/join" },
    testimonials: [
      {
        quote: "The support you get from BALI members is invaluable. People genuinely care about how you're getting on, and the conversations are honest, real and incredibly reassuring.",
        name: "Will Innes-Taylor",
        role: "Hillier",
      },
      {
        quote: "BALI is about high standards and trusted referrals. When I recommend someone, it will be a BALI member, because I know the standards they have been assessed against.",
        name: "Charles Blumlein",
        role: "Location Landscapes",
      },
      {
        quote: "BALI brings the industry together. Through networking, collaboration and shared learning, we're all better, and we're all stronger.",
        name: "Nick Coslett",
        role: "BALI Awards judge and Chalk Fund Chair",
      },
    ],
  },
  "/about/board": {
    eyebrow: "About BALI",
    title: "Our Board of Directors",
    theme: "blue",
    intro: "The Board of Directors is the governing body of the Association, responsible for providing strategic leadership and the ultimate direction of the organisation. Although the Board work together for the best interests of the Association and its members, each Director has their own focus and passion within the wider industry.",
    image: { url: "/__l5e/assets-v1/2e3cf479-71c9-4fa9-8f01-dd36d49c8420/board-of-directors.jpg", alt: "The BALI Board of Directors" },
    sections: [
      {
        heading: "Adrian Wickham",
        role: "Chair",
        group: "Executive",
        body: "I believe, as a passionate member of the Board, we can protect and ensure that the future of the industry is good for all the people within it; as well as promote the industry, its disciplines, and the skills of the people within it. Equally, I wish to attract all those who may never have considered a career within the green skills sector.",
        image: { url: "/__l5e/assets-v1/3d338334-e59a-4b97-b136-9555cbeafed4/small_adrian-wickham-1.png", alt: "Adrian Wickham" },
      },
      {
        heading: "Matt Nokes",
        role: "Vice-Chair",
        group: "Executive",
        body: "I am a chartered Landscape Architect with over 20 years of industry experience. I feel I offer a perspective on the Board that compliments the other Directors and focus on encouraging and promoting integrated collaboration to create high-quality landscapes.",
        image: { url: "/__l5e/assets-v1/b738a3ac-f15f-48f4-bcf0-7fd0ec9c3e5e/small_matt-nokes-1.png", alt: "Matt Nokes" },
      },
      {
        heading: "Matt O'Conner",
        role: "Immediate Past Chair",
        group: "Executive",
        body: "My vision is one of constant innovation and delivering benchmarked landscape services via a skilled and trained workforce. I will support the current Chair and Vice-Chair and am driven to ensure quality is the golden thread that runs throughout the association and its membership.",
        image: { url: "/__l5e/assets-v1/111db854-b1f3-4ac4-b530-bc198b666f04/1matt-o-conner-1.png", alt: "Matt O'Conner" },
      },
      {
        heading: "Richard Stone",
        role: "Honorary Treasurer",
        group: "Executive",
        body: "On the Board, I undertake the role of Honorary Treasurer, responsible for financial reports, financial analysis, and budgeting. I take an active part in all Board activities, with a particular passion to help develop the Association's digital offering, evolving business planning and improving processes.",
        image: { url: "/__l5e/assets-v1/00529d70-f8b3-49c8-ab5c-ada74f91bd72/richard-stone-1.png", alt: "Richard Stone" },
      },
      {
        heading: "Wayne Grills",
        role: "Chief Executive",
        group: "Executive",
        body: "I’m committed to raising the Association’s profile at both government and industry levels. I support cross-industry working groups and committees, representing the Association and its members, including APPGHG, Scottish Ministerial Industry Roundtable Group and the OHRG.",
        image: { url: "/__l5e/assets-v1/44628158-235d-4c6e-a21e-b7cac7d5b91d/1wayne-grills-1.png", alt: "Wayne Grills" },
      },
      {
        heading: "Jake Catling",
        role: "Board Director",
        group: "Directors",
        body: "As South Thames Chair and now a Board Director, I am in a position to continue helping GoLandscape increase industry engagement both through better story-telling on a local and national level. My other focus is the development of the Academy pilot.",
        image: { url: "/__l5e/assets-v1/e98b6e40-9fc2-47ff-877c-cbe49141b4dc/jake-catling.png", alt: "Jake Catling" },
      },
      {
        heading: "Paul Downer",
        role: "Board Director",
        group: "Directors",
        body: "I am a great believer in “giving back”, carrying out guest lectures to students and acting as a mentor to provide business advice and support less experienced companies. I am also a GoLandscape Ambassador and a Trustee of the BALI Chalk Fund.",
        image: { url: "/__l5e/assets-v1/f8178405-6d82-42bf-8a08-18d31f1415dd/paul-downer.png", alt: "Paul Downer" },
      },
      {
        heading: "Richard Gill",
        role: "Board Director",
        group: "Directors",
        body: "I have been on the Yorkshire & North East committee for 10 years and am currently Vice-Chair, as well as a GoLandscape Ambassador. I’m very honoured to join the Board, and look forward to helping increase membership levels, and support the industry’s leading association.",
        image: { url: "/__l5e/assets-v1/c0af2ae4-e2c6-4adc-832e-a176037ba590/small_richard-gill-1.png", alt: "Richard Gill" },
      },
      {
        heading: "Ricky Whiteman",
        role: "Student Director",
        group: "Directors",
        body: "As Student Director, I promote the industry to people who may be considering a career or studying towards a qualification in the industry, sharing my experience and enthusiasm for how fulfilling and diverse a career in our industry can be.",
        image: { url: "/__l5e/assets-v1/f1e15ba8-e87c-44d7-95d9-06f16034f546/ricky-whiteman-1.png", alt: "Ricky Whiteman" },
      },
      {
        heading: "Mark Gregory",
        role: "Board Director",
        group: "Directors",
        body: "Returning to the BALI Board in 2024, I am a well-known technical expert in the landscape industry. I am also a RHS garden assessor and judge/Ambassador and lectures widely in the UK and overseas on landscaping",
        image: { url: "/__l5e/assets-v1/cb6850dc-fc70-4a03-b81a-47f4ae0f5f02/mark-gregory-website.gif", alt: "Mark Gregory" },
      },
      {
        heading: "Alistair Bayford",
        role: "Board Director",
        group: "Directors",
        body: "I was elected to the BALI Board at this year's AGM. I am a Chartered Member of the Landscape Institute with many years in the industry, and have worked in private, public and non-profit sectors.",
        image: { url: "/__l5e/assets-v1/46012745-96eb-4c63-82fc-7364b520bab4/alistair-bayford-website.gif", alt: "Alistair Bayford" },
      },
      {
        heading: "Kersten Catella",
        role: "Board Director",
        group: "Directors",
        body: "Newly elected to the BALI Board, I have worked in the industry for over 20 years, mentoring many colleagues. I wanted to join the BALI Board because of its commitment to excellence in landscaping and horticulture, an area I am passionate about.",
        image: { url: "/__l5e/assets-v1/529295d4-7ec2-4ddc-8141-be56a27e955d/kersten-catella-website.gif", alt: "Kersten Catella" },
      },
      {
        heading: "Paul Lynch",
        role: "Board Director",
        group: "Directors",
        body: "Chair of the South West regional committee since 2020, I have recently been elected to the BALI Board. I am committed to helping members get the most out of their BALI membership and feel strongly about the contribution mentoring can make to members' success.",
        image: { url: "/__l5e/assets-v1/8804a077-b582-4976-8c9a-c6020c8daae0/paul-lynch-website.gif", alt: "Paul Lynch" },
      },
      {
        heading: "Dave Twist",
        role: "Board Director",
        group: "Directors",
        body: "New to the BALI Board, I am a seasoned industry professional with over 40 years' experience. I support diversity on boards as a member of Women of Boards, and I am also a member of Perennial, the horticulture industry's support charity.",
        image: { url: "/__l5e/assets-v1/5383bced-dbf4-4fb1-9dc4-333c07bae006/dave-twist-website.gif", alt: "Dave Twist" },
      },
    ],
  },
  "/about/careers": {
    eyebrow: "About BALI",
    title: "GoLandscape — Careers in Landscaping",
    theme: "blue",
    intro: "GoLandscape is BALI's education, skills and careers initiative — created to inspire young people and career changers into the landscape industry and to combat the sector's severe skills shortage. With over 80 different roles, a wide variety of courses and apprenticeships, and clear progression routes, a career in landscaping offers a rewarding life in the great outdoors.",
    image: { url: "/__l5e/assets-v1/a5290e22-f805-49d7-932e-6e9217376059/bali-jobs-people.jpg", alt: "BALI Jobs" },
    stats: [
      { value: "80+", label: "Career roles in the industry" },
      { value: "4", label: "Apprenticeship levels (Intermediate → Higher)" },
      { value: "£32bn", label: "UK landscape sector value" },
      { value: "1,000+", label: "BALI member employers nationwide" },
    ],
    sections: [
      {
        heading: "Why a career in landscaping?",
        body: "If the thought of being stuck in an office sends shivers down your spine, landscaping could be your breath of fresh air. It's a creative, physical, future-focused industry where you'll work outdoors, shape the places people live and visit, and contribute directly to climate resilience, biodiversity and wellbeing. With clear pathways from entry level through to senior management and business ownership, your options are wide and varied.",
      },
      {
        heading: "Discover the breadth of the industry",
        body: "Anywhere a building has been constructed, a landscaper will be involved in designing, creating and caring for the green space around it. From hard landscaping and horticulture to design, ecology, arboriculture, grounds management and project leadership, there's a role to suit almost every skillset and interest.",
        bullets: [
          "Landscape Operative / Hard & Soft Landscaper",
          "Landscape Supervisor and Site Manager",
          "Landscape Designer and Garden Designer",
          "Arborist, Ecologist and Horticulturist",
          "Grounds Maintenance and Sports Turf",
          "Estimator, Project Manager and Tutor/Lecturer",
        ],
      },
      {
        heading: "Pathways into the industry",
        body: "There is no single route in — you can earn while you learn, study full-time, or move across from another career. GoLandscape and BALI members support all of these pathways:",
        bullets: [
          "College courses — Level 1 Diploma in Skills for Working in Horticulture Industries, Level 2 Certificate in Practical Horticulture, Level 3 Certificate/Diploma in Horticulture, T Level in Agriculture, Land Management & Production.",
          "Apprenticeships — Horticulture & Landscape Operative (Intermediate), Landscape Supervisor (Advanced), Horticulture & Landscaping Technical Manager (Higher).",
          "Specialist training — e.g. Certificate of Competence in Chainsaw Maintenance & Cross-Cutting, arboriculture and ecology qualifications.",
          "Direct application — apply to local landscapers or BALI members to start work and learn on the job.",
          "Career change — it's never too late; many of the industry's leaders started in unrelated careers.",
        ],
      },
      {
        heading: "Apprenticeships and the Trailblazer Standards",
        body: "BALI has played an instrumental role in lobbying at parliamentary level and helping establish the Trailblazer Apprenticeship Standards as recognised qualifications across land-based colleges in the UK. Our careers advice is mapped to the UK government's curriculum for the land-based sector, giving learners and employers a clear, nationally recognised progression framework.",
      },
      {
        heading: "Real career stories",
        body: "GoLandscape brings together real-life stories from leading landscape professionals and individuals — practical proof that landscaping offers serious career paths with opportunities for everyone.",
        bullets: [
          "Stuart — Construction Director, ACRE Landscapes: \"My father worked in the industry and I started alongside him as a stop-gap job — 22 years later, I'm running projects across the country.\"",
          "Chris — Sales & Marketing Manager, Harrowden Turf: started as a barrow boy on Ipswich market and built a career across horticulture and turf production.",
          "Terry — Senior Contract Manager, Idverde: started in grounds maintenance at 18 and progressed through continual training into senior management.",
          "Suzie Topping — Co-owner, Hortus Paradisi: combined creativity with a love of the outdoors to build her own landscape construction business.",
        ],
      },
      {
        heading: "For employers and educators",
        body: "BALI members benefit from a national platform that promotes the industry to young people, parents and career changers, plus direct access to apprentices, work-placement students and graduates. Colleges and training providers can align their curriculum with the Trailblazer Standards and connect students with employers through GoLandscape.",
        bullets: [
          "Promote vacancies and apprenticeships through the GoLandscape jobs board.",
          "Become a GoLandscape Ambassador and share your story with the next generation.",
          "Partner with local schools, colleges and Career Hubs through BALI's Skills & Careers team.",
        ],
      },
      {
        heading: "Useful resources",
        body: "",
        bullets: [
          "GoLandscape — careers, courses and job vacancies: golandscape.co.uk",
          "Take the GoLandscape Career Finder Quiz to discover the role that suits you best.",
          "What landscaping employers actually look for in a candidate.",
          "How to write a CV for a landscaping job (with no experience).",
          "BALI Awards judges panel job description (9 Jan 2026, 83kb PDF).",
        ],
      },
    ],
    ctaPrimary: { label: "Visit GoLandscape", href: "https://www.golandscape.co.uk/" },
    ctaSecondary: { label: "Contact the Skills & Careers team", href: "mailto:golandscape@bali.org.uk" },
  },
  "/about/charities": {
    eyebrow: "About BALI",
    title: "BALI Charities of the Year",
    theme: "blue",
    intro: "We are proud to offer our support to these worthy causes, including our own charity, the BALI Chalk Fund .",
    image: { url: "/__l5e/assets-v1/796d324b-86f1-4094-a94a-9d98a264d7af/medium_bali-chalk-fund.png", alt: "BALI Chalk Fund" },
    sections: [
      {
        heading: "The British Association of Landscape Industries supports a number of different charities helping those working across our industry.",
        body: "Every year we choose one of our nominated charities to raise money for, alongside the Chalk Fund, at our National Landscape Awards , the biggest landscaping awards ceremony in Europe.",
      },
      {
        heading: "BALI Chalk Fund",
        body: "Established in the mid-1970s in memory of BALI founder member Geoffrey Chalk, the BALI Chalk Fund provides funding and bursaries for skills development across the landscape industry. Trustees comprise past and current members (including several past chairmen) whose role it is to identify industry causes that meet the Fund’s criteria for support. To date, the Chalk Fund has facilitated the development of industry training materials, awarded travel scholarships to enable young landscapers to learn from their counterparts overseas, provided training prizes for the winners of the national finals of the WorldSkills UK Landscape Gardening competition, and supported land-based colleges by providing trophies to students on landscape-related courses. visit the website",
      },
      {
        heading: "Greenfingers",
        body: "Greenfingers is a small national charity dedicated to supporting the children who use hospices around the UK, along with their families, by creating inspiring gardens for them to relax in and enjoy. The charity is dedicated to creating beautiful, well-designed outdoor spaces for children to enjoy with family, friends and siblings, whether through play and fun, or therapeutic rest and relaxation. To date, Greenfingers has created 44 inspiring gardens in hospices around the country. Greenfingers is driven by the belief that time spent outdoors, away from the bedside, can offer children and families under considerable stress a vital opportunity to embrace the benefits of being in the fresh air and engaging with the natural environment. visit the website",
      },
      {
        heading: "Perennial",
        body: "Perennial helps anyone who creates or maintains gardens, parks, sports facilities and other green spaces. If you work with plants, trees or grass, Perennial is your charity and can help you if you need support. Everyone working in or retired from horticulture can receive our free and confidential tailored one-to-one advice, support and financial assistance for as long as extra support is needed. Perennial’s friendly, experienced and professional team helps individuals and their families as they deal with life-changing events such as serious injury, long-term illness, family bereavement, redundancy or family breakdown. We want everyone who works in horticulture to know that help is here if they need it and that no problem is too large or small. visit the website",
      },
      {
        heading: "Thrive",
        body: "Gardening for health charity Thrive specialises in using therapeutic horticulture to improve people’s lives. Thrive has three centres in Birmingham, London and near Reading where around 400 client gardeners come to take part in Social and Therapeutic Horticulture programmes that offer many physical and mental health benefits. Thrive’s horticultural therapists work with a wide range of client gardeners including people with learning disabilities, autism, physical disabilities, long-term illness, and those with mental ill health. The charity also runs a national information service providing advice on how to make gardening easier and uses its 40 years of therapeutic horticulture experience to train others looking to run projects and programmes across the UK. visit the website",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/conference": {
    eyebrow: "About BALI",
    title: "BALI National Landscape Conference 2026",
    theme: "blue",
    intro: "The UK’s landscaping sector is at a turning point. Climate pressures are growing, skills are in short supply, and new rules like Biodiversity Net Gain are raising the stakes. BALI’s National Landscape Conference brings together the industry’s brightest minds to ask one vital question: how do we build landscapes and organisations that are truly future-proof?",
    image: { url: "/__l5e/assets-v1/ea4903cb-9e33-43c9-9370-90c0844b9740/medium_11.png", alt: "Helen Nyul, Director of Ecology at Verna" },
    highlights: [
      { title: "Sir Tim Smit", body: "Founder of the Eden Project — Regenerative Sustainability & The Eden Project." },
      { title: "Helen Nyul", body: "Director of Ecology, Verna — Biodiversity Net Gain & Climate Resilience." },
      { title: "Trevor Williams", body: "Global Trends & Economic Forces Impacting Landscaping." },
      { title: "Wayne Grills", body: "BALI Chief Executive — Closing remarks and industry outlook." },
    ],
    eventInfo: {
      venue: "Venue: TBC",
      date: "Date: TBC",
      tickets: { label: "Book tickets (TBC)", href: "/contact" },
    },
    sections: [
      {
        heading: "About the day",
        body: "Theme: Climate resilience and how to future‑proof your business. A day focused on sustainability, biodiversity, plant health, skills, and economic resilience. As the UK’s leading landscaping trade association, BALI is proud to convene this conversation — bringing together expertise, experience and ambition to help shape a more resilient, confident and future‑ready industry.",
      },
      {
        heading: "09:30 — Arrival and refreshments",
        body: "Registration opens. Coffee, networking and exhibitor stands.",
      },
      {
        heading: "10:00 — Welcome & Opening Remarks",
        body: "Hosted by Adrian Wickham. Setting the scene for a day focused on resilience, sustainability and opportunity across the landscaping sector.",
      },
      {
        heading: "10:05 — Keynote: Trevor Williams",
        body: "Global Trends & Economic Forces Impacting Landscaping. A strategic overview of the geopolitical and economic forces shaping global trade — and what they mean for UK landscaping businesses.",
        bullets: [
          "Global trade, exports and imports: pressures on supply chains and costs",
          "How shifting wealth dynamics are influencing demand for landscaping and luxury projects",
          "What economic uncertainty really means for the landscaping industry",
          "Practical, clear takeaways on managing risk, building climate resilience, and future‑proofing your business",
        ],
      },
      {
        heading: "10:40 — Keynote: Sir Tim Smit",
        body: "Regenerative Sustainability & The Eden Project. An inspiring exploration of how bold, regenerative thinking can transform landscapes, businesses and communities.",
        bullets: [
          "The transformation of the Eden Project from clay pit to global sustainability icon",
          "Moving beyond sustainability towards regenerative practices that actively restore ecosystems",
          "Practical lessons for embedding climate resilience into landscaping operations and long‑term strategy",
        ],
      },
      {
        heading: "11:15 — Refreshments and networking",
        body: "Break for coffee, networking and exhibitor stands.",
      },
      {
        heading: "11:50 — Keynote: Helen Nyul",
        body: "Biodiversity Net Gain & Climate Resilience. A practical look at how Biodiversity Net Gain (BNG) can drive climate resilience while strengthening business performance.",
        bullets: [
          "BNG as a tool for sustainable, resilient business practice",
          "How to operationalise BNG requirements using current guidance and standards",
          "Turning compliance into opportunity",
        ],
      },
      {
        heading: "12:30 — Lunch and networking",
        body: "Hot lunch served, with time to connect with peers, speakers and exhibitors.",
      },
      {
        heading: "13:30 — Breakout sessions (choose one)",
        body: "Three parallel sessions giving you a deep dive into the topics that matter most to your business.",
        bullets: [
          "Room 1 — A Workplace for the Future. Hosted by Sam Grayson (Hyphae Learning) with Paul Downer (Oak View Landscapes / BALI Board) and Gamiel Yafai (Diversity Marketplace). Leadership, high performance, well‑being, culture, inclusion and respect.",
          "Room 2 — Data‑Driven Biodiversity. With Liz Nicholson (Nicholson Nurseries). Integrating biodiversity measurement into everyday operations, with an introduction to Elemental.",
          "Room 3 — The Reality of Plant Health. Hosted by Dougal Driver (Grown in Britain) with Will Innes‑Taylor (Hillier Nurseries), Alistair Bayford (Frosts / BALI Board) and Malcolm Catlin (Plant Healthy). Threats, import pressures and collaboration between landscapers and nurseries.",
        ],
      },
      {
        heading: "14:30 — Refreshments and networking",
        body: "Afternoon break.",
      },
      {
        heading: "15:00 — Breakout sessions (choose one)",
        body: "A second round of parallel deep dives.",
        bullets: [
          "Room 1 — Training and Developing Future Talent. Hosted by Jake Catling (Hyphae Learning / BALI Board) with Ruth Orrell‑Harris (Activate Learning) and Jonathan Pettit (BALI). Moving beyond tick‑box training to a three‑prong In‑House / External / Formal approach for a digital‑first generation.",
          "Room 2 — Goods to the Ground: Inside the Supply Chain. Hosted by Rachel Forsyth (Hortweek) with Chris Swan (Green‑Tech), Richard McKenna (Provender Nurseries), Richard Brown (Germinal) and Michael McIvor‑New (Tobermore). Risks, delays, import/export pressures, the “Amazon‑effect” and rebuilding trust.",
          "Room 3 — Where’s the Money? Navigating the Economic Landscape. Hosted by Adrian Wickham (BALI Chair) with Mark Powell (J M Finn Investments) and Kim Sones (Sones Accountancy). Staying financially resilient amid pricing volatility and climate pressure.",
        ],
      },
      {
        heading: "16:00 — Panel Discussion & Closing Session",
        body: "A reflective panel with hosts from each breakout session, sharing key insights, practical actions and audience Q&A. Closing remarks from Wayne Grills, BALI Chief Executive.",
      },
      {
        heading: "17:00 — Networking drinks reception",
        body: "Continue the conversation and connect with peers, speakers and industry leaders. Please note: breakout content and panellists may be subject to change.",
      },
    ],
    ctaPrimary: { label: "Book your place", href: "/contact" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/ncf": {
    eyebrow: "About BALI",
    title: "BALI National Children's Forest",
    theme: "blue",
    intro: "The Association's National Contractor’s Forum (NCF) is a specialist group set up to lobby on important issues and address key challenges within the land-based sector. Its constituents are drawn from different sectors of the industry, creating a formalised group of influence. It provides the landscape management, maintenance and construction sectors with a structure through which they can communicate across and beyond the industry. The Forum is made up of seven of the UK’s largest landscape contractors and grounds maintenance providers. Their responsibility is to support the British Association of Landscape Industries through their lobbying efforts.",
    image: { url: "/__l5e/assets-v1/db968096-bc3a-4274-914c-04a48337626d/bali-ncf-primary-identity.png", alt: "BALI-NCF logo" },
    sections: [
      {
        heading: "Become a member",
        body: "The NCF welcomes new members, whether from larger landscape contractors or smaller contractors with national aspirations. Becoming an NCF member is free and available to any Accredited Contractor member. If you would like to join the NCF group please contact the Association's Membership team or call +44(0)24 7669 8658 .",
      },
      {
        heading: "The National Contractor’s Forum has been operating since 2012 and has achieved several significant triumphs, including:",
        body: "",
        bullets: [
          "Responding to government consultation on industry use of red diesel and subsequent lobbying for continued use post April 2022",
          "Working with stakeholders to investigate future of weed control with a specific focus on glyphosate",
          "Working with stakeholders to investigate future of machinery Investigation of Stage V rules",
          "Investigation of light commercial vehicle weights",
          "Investigation of battery-operated equipment",
          "Working with stakeholders to investigate theft of landscape equipment and BALI members to identify solutions Founded the BALI-NCF health and safety forum, with the aim of",
          "Sharing accident and near-miss data to learn more about accidents in the industry",
          "Hosted training events which focus on the causes of accidents amongst landscape operatives",
          "Worked with affiliate members to develop specific training events for brush cutters and hedge trimmers",
          "Developing training material to share with wider landscape industry",
        ],
      },
      {
        heading: "The NCF operates on two levels with the primary focus and main drive to be:",
        body: "Strategic : A voice that can represent the sector at places that matter and have an impact on the training, health & safety and good practice within the industry. and a secondary focus of... Operational: The delivery of events, seminars, workshops etc. relevant to the topics and issues of interest to its group members and interested parties.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/awards": {
    eyebrow: "About BALI",
    title: "National Landscape Awards",
    theme: "blue",
    intro: "2026 National Landscape Award entries are now open! We are thrilled to announce that this year's National Landscape Award entries are now open.",
    sections: [
      {
        heading: "Inspiring and celebrating landscaping excellence",
        body: "The National Landscape Awards provides the industry with a platform in which to showcase and improve their business and celebrate their achievements both within and outside of the industry. There are categories appropriate to all Accredited categories of membership.",
      },
      {
        heading: "Categories for every member",
        body: "If you are an Accredited Contractor or Group or Accredited Designer member, there are categories appropriate to all scheme sizes/values and the same criteria apply, whether it is a small domestic garden or a large public landscaped space. Interested in the Supplier Exceptional Service or Employer Excellence categories? These categories have been developed to allow you to showcase your company to the industry through the exceptional service and/or products you provide or your exemplary business practices.",
      },
      {
        heading: "Enter now",
        body: "Entries are open now — submit your entry via the BALI Awards platform. Learn more about the Awards at baliawards.co.uk.",
      },
    ],
    ctaPrimary: { label: "Enter the Awards", href: "https://www.baliawards.co.uk/" },
    ctaSecondary: { label: "Learn more", href: "http://www.baliawards.co.uk/" },
    embed: {
      url: "https://www.youtube.com/embed/s6_HivofMvg",
      title: "BALI National Landscape Awards 2025 highlights",
      height: 480,
    },
    gallery: {
      heading: "Highlights from the 2025 Awards",
      caption: "A night of celebration at the BALI National Landscape Awards.",
      images: [
        { url: "/__l5e/assets-v1/7c708798-9086-45d4-b4ca-59d1af9a31fe/0829_bali051225_pg2_1645.jpg", alt: "Wayne Grills on stage with Origin Enterprises headline sponsor backdrop" },
        { url: "/__l5e/assets-v1/3ec5a36c-6554-41f6-b5f4-5490c14ac67a/0944_bali051225_pga_7269.jpg", alt: "Wide view of the awards ballroom with stage screens" },
        { url: "/__l5e/assets-v1/1af5e1ca-6ca6-44e9-9c0e-888b85370d4d/0935_bali051225_pga_7260.jpg", alt: "Packed awards dinner in full atmospheric lighting" },
        { url: "/__l5e/assets-v1/361c3748-f195-4f9e-b3f8-ea7e8a4fbdbe/0448_bali051225_pga_6980.jpg", alt: "Table setting with candles and drinks ahead of the ceremony" },
        { url: "/__l5e/assets-v1/4598c643-2f63-4911-97f3-ca5654dd4ca5/1225_bali051225_pga_7354.jpg", alt: "Guests celebrating at their table" },
        { url: "/__l5e/assets-v1/73011cca-9ba8-4b34-8119-0e7669f9fd70/ba051225_tb2_0194_145.jpg", alt: "Members sharing a laugh during the evening" },
        { url: "/__l5e/assets-v1/27420fd8-4da6-477c-95d3-b6294e2b400d/ba051225_tb2_0689_277.jpg", alt: "Winners celebrating an award announcement" },
        { url: "/__l5e/assets-v1/1deb8fb1-a7e1-4cca-878a-0f3e910bb1ee/ba051225_tb2_0376_189.jpg", alt: "Guest raising a winning ticket during the ceremony" },
        { url: "/__l5e/assets-v1/bdab5064-a7a2-44e9-b3f7-b134fa2b26ad/ba051225_tb2_0666_271.jpg", alt: "Two attendees laughing together at the awards" },
      ],
    },
  },

  "/about/advertise": {
    eyebrow: "About BALI",
    title: "Advertise with BALI",
    theme: "blue",
    intro: "Put your brand in front of the UK's largest community of accredited landscape professionals. From our flagship National Landscape Awards to Landscape News magazine, the BALI website and weekly newsletter, we offer trusted, targeted routes to the decision-makers shaping a £11.6bn industry.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    stats: [
      { value: "1,000+", label: "Members across the UK & internationally" },
      { value: "15,000+", label: "Website visits every month" },
      { value: "1,800+", label: "Weekly newsletter subscribers" },
      { value: "1,200+", label: "Landscape News copies per quarter" },
    ],
    highlights: [
      { title: "National Landscape Awards", body: "Europe's largest landscape awards — 1,000+ industry professionals attend annually." },
      { title: "Landscape News magazine", body: "Quarterly print and digital edition reaching 2,000+ subscribers and key trade shows." },
      { title: "BALI website", body: "Over half a million page views a year from clients, members and specifiers." },
      { title: "Weekly e-newsletter", body: "Direct to 1,800+ inboxes with industry news, jobs and member updates." },
    ],
    sections: [
      {
        heading: "Why advertise with BALI?",
        body: "Aligning your brand with BALI builds trust with buyers, specifiers and contractors across the landscape sector. Whether you're launching a product, recruiting, or driving awareness, our channels put you in front of an engaged, qualified audience of accredited landscape contractors, designers, suppliers and affiliates.",
        bullets: [
          "Reach 1,000+ accredited member companies and individuals",
          "Trusted brand association with the UK's leading landscape Trade Association",
          "Targeted to active decision-makers in a £11.6bn industry supporting 196,300 jobs",
          "Choose from print, digital, event sponsorship and awards packages",
        ],
      },
      {
        heading: "Sponsor the National Landscape Awards",
        body: "The premier event in the UK landscape calendar, first held in 1981. Sponsorship places your brand alongside the best of the industry, with category, special award and collateral packages available. All prices exclude VAT.",
        bullets: [
          "Category Sponsor — 12 seat package: £7,584",
          "Category Sponsor — 10 seat package: £7,200",
          "Special Award Sponsor — 5 seat package: £6,200",
          "Guest Directory — 4 seat package: £4,400",
          "Programme or Media Wall — 2 seat package: £1,810 each",
          "Awards brochure: Full page £1,035 · Half page £630",
        ],
      },
      {
        heading: "Landscape News magazine — print & digital",
        body: "Our official quarterly journal reaches over 1,200 print readers and 2,000+ digital subscribers, plus distribution at major trade shows. A premium home for product launches, thought-leadership and brand campaigns. All prices exclude VAT.",
        bullets: [
          "Outside back cover: £1,310 member / £1,638 non-member",
          "Inside front or back cover: £1,310 member / £1,638 non-member",
          "Full page: £1,075 member / £1,201 non-member",
          "Half page: £578 member / £649 non-member",
          "Quarter page: £376 member / £431 non-member",
          "Digital hyperlink: £109 member / £112 non-member",
        ],
      },
      {
        heading: "Digital — website & weekly newsletter",
        body: "Cost-effective banner placements on bali.org.uk and in our weekly e-newsletter, ideal for short campaigns, event promotion and recruitment. All prices exclude VAT and are quoted per week.",
        bullets: [
          "Newsletter banner 1200 × 300: £90 member / £115 non-member",
          "Website banner 400 × 400: £100 member / £125 non-member",
          "Website banner 600 × 400: £115 member / £140 non-member",
        ],
      },
      {
        heading: "Print artwork specifications",
        body: "Landscape News is printed A4. Please supply press-ready PDFs saved with the [High Quality Print] preset, all printer's marks on, 3mm offset and document bleed enabled.",
        bullets: [
          "Full page — Trim 210 × 297mm · Bleed 216 × 303mm · Safe area 192.4 × 279.4mm",
          "Half page — Trim 210 × 146.6mm · Bleed 216 × 152.6mm · Safe area 192.4 × 129mm",
          "Quarter page — Trim 103.1 × 146.6mm · Bleed 109.1 × 152.6mm · Safe area 85.6 × 129mm",
        ],
      },
      {
        heading: "Talk to our Media Sales & Sponsorship team",
        body: "For bookings, bespoke packages or to request the full Media Pack, contact Joanna Pieprzak, Media Sales & Sponsorship Officer, at joanna.pieprzak@bali.org.uk or call +44 (0)24 7518 5614. For editorial enquiries about Landscape News, email our editor Luke Garner at luke.garner@bali.org.uk.",
      },
    ],
    ctaPrimary: { label: "Email Joanna for the Media Pack", href: "mailto:joanna.pieprzak@bali.org.uk?subject=BALI%20Media%20Pack%20request" },
    ctaSecondary: { label: "Call +44 (0)24 7518 5614", href: "tel:+442475185614" },
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Contact BALI",
    theme: "blue",
    intro: "Meet the team behind BALI. Our dedicated professionals are committed to supporting our members, championing the landscaping industry, and delivering excellence in everything we do.",
    sections: [
      {
        heading: "Wayne Grills, Chief Executive",
        body: "I’m committed to raising the Association’s profile at both government and industry levels. I support cross-industry working groups and committees, representing the Association and its members, including APPGHG, Scottish Ministerial Industry Roundtable Group and the OHRG.",
      },
      {
        heading: "Jonathan Pettit, Head of Careers, Skills & Certification",
        body: "Ensuring that the industry has the right people, skills, and learning opportunities is at the heart of my work at BALI and with the GoLandscape initiative. By working closely with industry leaders, members, educational establishments, and other industry partners the Skills and Careers team is committed to helping the industry to develop the tools and opportunities to succeed and thrive",
      },
      {
        heading: "Rosie Sayers, Head of Marketing & Communications",
        body: "Shaping the way the Association connects with its members and the wider industry is at the heart of my role. I focus on creating impactful campaigns and clear communication strategies that highlight the value of our work and celebrate the achievements of our members. Through strong relationships and impactful engagement, I amplify the voice of the landscaping sector.",
      },
      {
        heading: "Francesca Bienek, Membership Engagement Manager",
        body: "Building strong connections with our members is central to my role. I work closely with individuals and organisations across the landscaping industry to ensure they receive the support and resources they need to thrive. By listening to members’ needs and fostering engagement, I help strengthen our community and highlight the value of being part of the Association.",
      },
      {
        heading: "Kerrie Hutchings, Membership Officer",
        body: "Supporting our members and helping them make the most of their membership is my priority. I’m here to answer questions, provide guidance, and ensure that everyone feels connected to the wider landscaping community. Whether through events, communications, or one-on-one conversations, I’m committed to making every member’s experience rewarding and impactful.",
      },
      {
        heading: "Sue Jones, Membership Officer",
        body: "I’m dedicated to enhancing the membership experience by being a trusted point of contact for our members. My role involves understanding their needs, providing tailored support, and helping them unlock the full benefits of their membership. By fostering strong relationships, I contribute to building a vibrant and collaborative community within the landscaping industry.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
  },
  "/directory": {
    eyebrow: "Landscape Directory",
    title: "Find an Accredited landscape professional",
    theme: "blue",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    sections: [
      {
        heading: "Find your nearest Accredited garden designer, landscaper, supplier or training provider. You can refine your search to make it even easier.",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/contractor": {
    eyebrow: "Landscape Directory",
    title: "Find a landscape contractor",
    theme: "blue",
    intro: "For British Association of Landscape Industries Accredited Contractor membership, the contractor must have been trading for at least two years and meet the requirements set out below.",
    sections: [
      {
        heading: "Steps to becoming an Accredited Contractor:",
        body: "",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place. The Association will check all documents submitted and referees will be contacted",
          "External vetting takes place. Vetting Officer will visit, checking internal processes and perform site visits",
          "Upon approval of the vetting report, an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership giving member access to a suite of benefits",
        ],
      },
      {
        heading: "Key member benefits include:",
        body: "For Accredited Contractor member benefits and fees, please see attached documents on the right-hand side. To begin your application process of joining the British Association of Landscape Industries make an enquiry today by clicking the button below and our membership team will be in touch with you within 48 hours. make an enquiry",
        bullets: [
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the Association's National Landscape Awards",
          "Access to the Dispute Resolution Service",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/designer": {
    eyebrow: "Landscape Directory",
    title: "Find a landscape designer",
    theme: "blue",
    intro: "Depending on your registered status with other landscape organisations, the British Association of Landscape Industries offers two routes to becoming an Accredited Designer member.",
    sections: [
      {
        heading: "The British Association of Landscape Industries is committed to continually improving the landscape sector and sets high standards for its Accredited Designer members.",
        body: "Route one is for Registered members of the Society of Garden Designers or Chartered Landscape Institute:",
      },
      {
        heading: "Four application form requirements:",
        body: "Route two is for non-registered members of SGD or Chartered LI:",
      },
      {
        heading: "Steps to becoming a British Association of Landscape Industries Accredited Designer - route one:",
        body: "",
        bullets: [
          "Submit the application form and pay the application fee. The Association will check all documents submitted and referees will be contacted",
          "External vetting takes place. Invited to attend an assessment day consisting of one or more of the Design Panel who will review your projects",
          "Upon approval of vetting an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
        ],
      },
      {
        heading: "Steps to becoming a British Association of Landscape Industries Accredited Designer - route two:",
        body: "",
        bullets: [
          "Submit the application form and pay the application fee, plus assessment day fee Internal vetting takes place. The Association will check all documents submitted and referees will be contacted",
          "External vetting takes place. Invited to attend an assessment day consisting of one or more of the Design Panel who will review your projects",
          "Upon approval of vetting an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
        ],
      },
      {
        heading: "Key member benefits include:",
        body: "For full Accredited Designer member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the annual National Landscape Awards",
          "Access to Dispute Resolution Service",
          "Exclusive access to BALI Blueprint powered by Vectorworks",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/supplier": {
    eyebrow: "Landscape Directory",
    title: "Find a landscape supplier",
    theme: "blue",
    intro: "Accredited Suppliers are widely encouraged to promote the use of their products and services to British Association of Landscape Industries Contractor and Designer members through Association workshops, exhibitions, and publications. Supplier members are also encouraged to partake in the Supplier Forum for a chance to air their views during topical discussions.",
    sections: [
      {
        heading: "Steps to becoming an Accredited Supplier:",
        body: "",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place",
          "Upon acceptance of documents - invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
        ],
      },
      {
        heading: "Key member benefits include:",
        body: "For full Accredited Supplier member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the annual National Landscape Awards",
          "Discounted rates for exhibitions and conferences",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/training": {
    eyebrow: "Landscape Directory",
    title: "Find a training provider",
    theme: "blue",
    intro: "For full Training Provider member benefits and fees, please see the attached document on the right-hand side.",
    sections: [
      {
        heading: "Steps to becoming a Training Provider member:",
        body: "",
        bullets: [
          "Make an enquiry online or by phone and complete the application form",
          "Internal vetting takes place. The Association checks all submitted documents",
          "Upon vetting an invoice for the membership fee is issued",
          "Once paid the member has access to various member benefits",
        ],
      },
      {
        heading: "Key member benefits include:",
        body: "To make an enquiry about becoming an Association Training Provider member, please follow the link here.",
        bullets: [
          "Entry into Who’s Who Landscape Directory",
          "Attend regional events, technical workshops and online meetings",
          "Company profile on the website",
        ],
      },
      {
        heading: "British Association of Landscape Industries and ROLO Training Provider",
        body: "Individual trainers, commercial training organisations, FE and HE colleges and universities, delivering land-based academic and skills training, needing to keep abreast of industry news and developments. Training Provider Membership keeps them in touch with the industry and with the potential employers of the students they are training and ROLO (Register of Land-based Operations) membership accredits the organisation for the delivery of the ROLO course. Your business must have been trading for at least two years.",
      },
      {
        heading: "Steps to becoming a British Association of Landscape Industries and ROLO Training Provider:",
        body: "",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place. The Association will check all documents submitted and references will be contacted",
          "An invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
        ],
      },
      {
        heading: "Key member benefits include:",
        body: "For full Training Provider member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Free student member benefits",
          "ROLO accreditation and exclusive use of the ROLO logo",
          "Entry into Who’s Who Landscape Directory",
          "Company profile on the website",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/search": {
    eyebrow: "Landscape Directory",
    title: "Search all Accredited members",
    theme: "blue",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    sections: [
      {
        heading: "Find your nearest Accredited garden designer, landscaper, supplier or training provider. You can refine your search to make it even easier.",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/why": {
    eyebrow: "Landscape Directory",
    title: "Why choose a BALI member?",
    theme: "blue",
    intro: "Members of the British Association of Landscape Industries are the best of the best in their sectors. They produce beautiful gardens, landscapes and high quality products fit for the most stunning gardens.",
    sections: [
      {
        heading: "British Association of Landscape Industries members carry out their duties to the very highest industry standards. To be a member is to provide professional excellence at all times.",
        body: "To be granted Accredited membership status, Association members sign up to our Code of Conduct , pledging to carry out their business to the very highest industry standards. This means investing in staff training and skills development, adhering to health and safety regulations, considering the environmental and ethical implications of what they do and running their operations with honesty and integrity. By choosing an Association professional to design and build your garden, maintain your grounds or source ethically produced materials, you can be sure of professional excellence, value for money and outstanding customer service. START YOUR SEARCH",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events": {
    eyebrow: "Events",
    title: "BALI Events",
    theme: "warm",
    intro: "Join us for this informative and educational Midlands regional event, hosted by Sky Garden",
    sections: [
      {
        heading: "BALI Chalk Fund Landscape Open Mic Night",
        body: "The BALI Chalk team is hosting an Open Mic event at the Spice of Life Bar, Soho on 1 October",
      },
    ],
    ctaPrimary: { label: "Browse upcoming events", href: "/events" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events/sponsor": {
    eyebrow: "Events",
    title: "Sponsor National Conference 2026",
    theme: "warm",
    intro: "Sponsor National Conference 2026",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events/training": {
    eyebrow: "Events",
    title: "BALI Training Courses",
    theme: "warm",
    intro: "ROLO H&S Environmental Awareness Course for Operatives - 1 Day Online",
    image: { url: "/__l5e/assets-v1/9a43f90a-4a3a-4a31-80cb-fd5e1c43f0c0/jdrgroup-factlogo-iq-19-01-2026-v3-2-.jpg", alt: "BALI Training Courses" },
    sections: [
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - Online",
        body: "Mandatory course for most LISS/CSCS SmartCards. This course is hosted by Landscape Training Group.",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 day",
        body: "ROLO Operatives Certification with Assessment",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day online",
        body: "ROLO H&S Environmental Awareness Course for Operatives - 1 Day Online",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day online",
        body: "ROLO H&S Environmental Awareness Course for Operatives - 1 Day Online",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 day",
        body: "ROLO Operatives Certification with Assessment",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day online",
        body: "ROLO H&S Environmental Awareness Course for Operatives - 1 Day Online",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day Online",
        body: "ROLO Operative - 1 day online, hosted by Orchard Learning.",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness for Operatives - 1 Day Online",
        body: "Remote online training course for CITB HS&E test for most LISS/CSCS Smart Cards. Page 1 of 15",
      },
    ],
    ctaPrimary: { label: "See upcoming events", href: "/events" },
    ctaSecondary: { label: "Training courses", href: "/events/training" },
  },
  "/help": {
    eyebrow: "Help & Advice",
    title: "BALI Help & Advice",
    theme: "slate",
    intro: "contract for use on all domestic landscape and garden design and build projects",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "health and safety",
        body: "Online resource for members, including helpful tools, templates and documents",
      },
      {
        heading: "law and regulations",
        body: "Online resource focusing on legal frameworks and contractual documents",
      },
      {
        heading: "machinery and driving",
        body: "Essential information on equipment and operating rules",
      },
      {
        heading: "pests and diseases",
        body: "Applicable to all landscape disciplines, looking at the latest UK threats",
      },
      {
        heading: "plant health information",
        body: "Landscape has an important role to play in protecting our precious planet",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Fair Risk Allocation in Grounds Maintenance Contracts 22 Jan 2026 295kb DOCX",
        ],
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/contract": {
    eyebrow: "Help & Advice",
    title: "Contracts, Law and Regulations",
    theme: "slate",
    intro: "How CDM applies to the landscape industry",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "Construction Design Management CDM",
        body: "The Construction (Design & Management) Regulations 2015 are the main set of regulations for managing the health, safety and welfare of construction projects. The scope of works covered by the definition of 'Construction' in CDM includes many aspects of landscape works, including site clearance, excavation, drainage and earthworks. In addition, any landscape contractor undertaking work on a construction site where other contractors are present will have responsibilities under CDM. Please click on the buttons below to learn more about your responsibilities under CDM:",
      },
      {
        heading: "Evolution Of Employment",
        body: "Whilst new working arrangements have the potential to enable short-term or highly flexible demands for labour to be fulfilled, the existing legislative framework – which has evolved to cater for traditional ‘employees’ – often does not afford sufficient protection to the rights of a new position labelled ‘workers’. Workers are a half-way house between employees and self-employed individuals, often at risk from losing basic employment rights as a result of unscrupulous employers. In 2017 a report commissioned by the government evaluated the changing landscape of work and made recommendations to ensure future legislation reflects these changes. Many changes in law have already been adopted or will do in the near future. One of the areas of legislation to be changed as a result of this review is section 1 of the Employment Rights Act 1996. Currently, ‘employees’ in a role for more than one month must be given a document containing specific information including holiday pay, sick leave, and length of time the job is likely to last within 2 months of the date they start work. This document may often be refereed to as an employment contract or written statement, and may be in parts, provided this 2-month limit is met. Anyone defined as a ‘worker’ - which may include people employed under zero-hours contracts or employed through an agency - is not currently entitled to any of this information at any stage in their role. This leaves a significant number of contemporary ‘workers’ in a vulnerable position so, as of 6th April 2020, new requirements will be enforced:",
        bullets: [
          "Both employees and workers are entitled to a section 1 statement on the first day of work, regardless of the duration of their role.",
          "Details concerning working periods, leave entitlement, sick pay, renumeration, probationary period and training must be given.",
        ],
      },
      {
        heading: "GDPR",
        body: "The regulation has fundamentally reshaped the way in which data is handled across every sector, from healthcare to banking and beyond. The British Association of Landscape Industries has been working closely with members to ensure they are compliant with the new regulation by producing a helpful data protection fact sheet. The General Data Protection Regulation forms part of the data protection regime in the UK, together with the new Data Protection Act 2018 (DPA 2018). This replaces the Data Protection Act 1988. The main provisions of this applied from 25 May 2018, which means all business should already be applying the principles of the GDPR in their daily work activities. The GDPR applies to businesses who may be called a ‘controller’ or ‘processor’. A controller determines the purposes and means of processing personal data. A processor is responsible for processing personal data on behalf of a controller. As a landscape contractor or designer, it is most likely that you are a controller, since you will frequently be deciding what personal data to collect (for example, the names, email addresses, telephone numbers and addresses of clients) and how this information will be recorded e.g. on a phone, in a book or via email. Note that GDPR applies to historic, current and all future electronic and manual records held by your company. Personal data only includes information relating to natural persons who can be identified or who are identifiable, directly from the information in question (e.g. name, address, email, NI number); or who can be indirectly identified from that information in combination with other information (e.g. Computer’s IP address). As a landscape contractor or garden designer, it is likely you will record personal data from clients which includes their name, address and email address. Information about companies or public authorities is not personal data, however, information about individuals acting as sole traders, employees, partners and company directors where they are individually identifiable, and the information relates to them as an individual, may constitute personal data.",
        bullets: [
          "Data Protection Factsheet 12 Mar 2019 223kb PDF",
        ],
      },
      {
        heading: "IR35",
        body: "By setting up as a limited company, workers can continue to work for an existing employer, but as a ‘contractor’. Personal service companies are a variation of this and are popular where clients and recruitment agencies avoid hiring contractors operating as sole traders. Operating as a contractor or personal service company allows workers to avoid paying national insurance contributions on a significant part of their income, which traditional employees must do. When used legitimately, this reduced tax is intended to provide the contractor with money for holiday or sick pay, but also paying for equipment necessary to do their job. This arrangement also benefits the client, as they do not need to pay annual leave or sick pay to contractors or personal service companies. Whilst operating as a contractor can be entirely legitimate, Her Majesty’s Revenue and Customs (HMRC) regard the practice of masquerading as a ‘contractor’ as a form of tax avoidance, and introduced IR35 to ensure, where appropriate, contractors deemed to be employees pay the same amount of tax as traditional employees. If HMRC identify cases where individuals have been masquerading as self-employed contractors without justification, they will be required to pay the missing tax back to HMRC, with interest and penalties for a period of up to 6 years. Working ‘Inside IR35’ is where a worker is considered an employee (commonly referred to as a ‘deemed employee’) for the purposes of tax by HMRC. The following are likely to apply in this scenario:",
        bullets: [
          "The client decides how, when and where the workers services are provided",
          "Contractor is paid regardless of the quality of services provided",
          "Client would not be willing to accept a substitute to provide the services",
          "Contractor does not provide own equipment",
          "The contractor decides how, when and where the workers services are provided",
          "Contractor may be paid according to work or service delivered",
          "Client would accept a substitute to provide the services",
          "Contractor provides own equipment for services provided",
        ],
      },
      {
        heading: "JCLI Contracts",
        body: "These documents update the CPSE/JCLI Guidance for the Advanced Ordering or Contract Growing of Hardy Nursery Stock (HTA 1999). October 2014. The JCLI Contracts Forum agrees and badges commercial and domestic project standard forms of contract and associated guidance documents for the landscape industry. The contracts and guidance are produced and published by individual member organisations. The JCLI Contracts Forum is organised by the Landscape Institute. Its members are the Association of Professional Landscapers (APL), the British Association of Landscape Industries (BALI), the Horticultural Trades Association (HTA), the Institute of Chartered Foresters (ICF), the Landscape Institute (LI) and the Society of Garden Designers (SGD). The JCLI badging of contracts is considered important for two main reasons: firstly, because ‘JCLI’ has a strong reputation for contracts, based on the reputation of the Landscape Contract originally produced in 1978; and secondly, because the documents are agreed by the members of the Forum and are therefore non-partisan industry standard documents.",
      },
      {
        heading: "Water Abstraction",
        body: "The abstraction of water is managed by the government. Most businesses taking more than 20,000 litres of water a day directly from rivers or groundwater require an abstraction license. Following review and consultation, shortcomings were identified in the existing system of abstraction, which led to the government introducing a series of new measures in 2016. Over the next few years, rules concerning abstraction are likely to change and may affect Association members. Historically, taking water from the environment for certain uses and from certain sources could be done without a license. These uses and sources were called ‘exempt activities’ and included, amongst others: • All forms of irrigation including trickle • Abstractions from previously exempt areas",
        bullets: [
          "Change to abstraction licensing rules 31 Jul 2019 257kb PDF",
        ],
      },
      {
        heading: "VAT Reverse Charge",
        body: "From 1st March 2021 the domestic VAT reverse charge will apply to most supplies of building and construction services. This change will affect nearly all landscape contractors to some extent, and it is important our members understand the consequences of the changes. - What is the domestic VAT reverse charge? - Why is the domestic VAT reverse charge being introduced? - Who will the domestic VAT reverse charge apply to? - Which services will the reverse charge apply to? - Are there any circumstances when the VAT reverse charge does not apply? - Where do responsibilities lie regarding notification of VAT reverse charge? From 1st March 2021, all businesses performing sub-contractor duties by supplying construction services to a VAT-registered customer (a contractor) will no longer charge VAT. Instead, the customer (contractor) will pay the VAT owed by the sub-contractor directly to HMRC. This means if you are a VAT-registered sub-contractor, who is registered with the CIS scheme and currently receives VAT payments from a contractor client, as of 1st March 2021 you will no longer receive VAT from these clients.",
        bullets: [
          "When contractors use sub-contractors for zero-rated work",
          "If the contractor or sub-contractor is not VAT registered",
          "Where building or construction works are for end users",
          "The customer (the contractor) must advise the supplier (sub-contractor) if they are an end user – and therefore not subject to the reverse charge – in writing. HMRC suggest the following wording is used:",
          "The subcontractor may need to ask the customer if they are an end user and should record this request and any response in writing and retain as evidence. It is important the subcontractor also identifies and records evidence supplied to suggest the customer (contractor) is VAT registered and subject to CIS.",
          "The supplier (the sub-contractor) must advise on their invoice if the VAT reverse VAT charge applies. Whilst no VAT will be charged on the invoice, the invoice must refer to the reverse charge and how much VAT is due (20% or 5%). HMRC suggest the following wording is used:",
        ],
      },
      {
        heading: "The Good Work Plan",
        body: "In 2017 Matthew Taylor, the Chief Executive of the Royal Society for the Encouragement of Arts, Manufacturers and Commerce , published the Good Work report. This document outlined 53 proposals to the government, aimed at improving modern working practices. Specifically, the report considered how employment practices needed to change in order to keep pace with modern business models, and discussed the developing nature of self-employed and contracted workers, and how the existing labour laws must change to accommodate these individuals and the businesses that employ them. The government responded to the report by publishing The Good Work Plan in 2018, which identified the changes that would be implemented. These affect England, Wales and Scotland, and the following changes came into effect last week: Full details of the changes can be reviewed on the government’s website.",
        bullets: [
          "A written statement of main terms and conditions (frequently known as written statement of particulars) must now be provided to Employees and Workers by their employer on or before the first day of their employment",
          "The period to break continuous service has now extended from 1 week to 4 weeks, which means employees who work intermittently for their employees can access their employment rights",
          "The pay reference period for holiday calculations has increased from 12 to 52 weeks, or for employees with less than 52 weeks service, the total number of weeks they have worked. This means the holiday pay for employees with variable hours will reflect their working hours across the year, and not vary according to high or low season.",
          "Employees who do not have regular working hours are now able to request a more stable contract after 26 weeks continuous service, with a more fixed working pattern and guaranteed hours.",
          "Agency workers are now entitled to the same pay as the direct recruits of a business after they have performed the same role with the same hirer for 12 consecutive calendar weeks",
        ],
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/dispute": {
    eyebrow: "Help & Advice",
    title: "Dispute resolution service",
    theme: "flow",
    intro: "Dispute resolution service",
    sections: [
      {
        heading: "Client Information",
        body: "Historically, the last resort for disagreements between clients and tradespeople was the courts. Options for relatively low value civil claims such as small claims, fast track and multi-track simplified the process and proved popular amongst tradespeople and clients. However, a significant backlog arose during 2020 - 2021 and resulted in long waiting times for court hearings which continue to the present day. Delays of over 12 months are still common. To reduce the burden on the courts, a greater emphasis has been placed on dispute resolution services, which seek to resolve disputes before they reach the courts. In many cases a court will specify dispute resolution before initiating court proceedings. In light of this shift towards dispute resolution, the Association has appointed a third-party provider of dispute services: Dispute Resolution Ombudsman .",
        bullets: [
          "Project documentation",
          "High resolution photographs of the project and areas of concern",
          "Correspondence exchanged during the project",
          "Variations agreed during the project",
          "Client Resolution Form 4 Jul 2024 1072kb PDF",
          "Quick Start Guide 4 Jul 2024 90kb PDF",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        body: "What are the benefits of the dispute resolution service? What type of complaints can the dispute resolution service help with? What complaints can the Dispute Resolution Ombudsman not help with? How will DRO make a decision and what are the possible outcomes?",
        bullets: [
          "Dispute Resolution Ombudsman is independent and impartial",
          "The service is free for customers who have used the services of a member of the British Association of Landscape Industries",
          "The service will provide a clear resolution the member is legally bound to comply with.",
          "The resolution process is easy to access, meaning the Customer can avoid potentially lengthy and costly litigation.",
          "Work carried out by an Accredited designer or contractor who is a current member of the British Association of Landscape Industries",
          "A service performed by an Accredited designer or contractor who is a member of the British Association of Landscape Industries",
          "The Customer has a complaint against a business that is not currently a member of the British Association of Landscape Industries",
          "The Customer has a complaint against a member of the British Association of Landscape Industries who has entered administration, liquidation or has ceased trading",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/hardship": {
    eyebrow: "Help & Advice",
    title: "BALI Chalk Fund — Hardship support",
    theme: "flow",
    intro: "The Membership Hardship Fund is intended to help current members continue their association with BALI in the event of unforeseen financial difficulty.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety": {
    eyebrow: "Help & Advice",
    title: "Health & Safety",
    theme: "flow",
    intro: "The law requires employers to identify the hazards that could cause injury or illness to staff. Learn more here",
    sections: [
      {
        heading: "Risk Assessments",
        body: "The Management of Health and Safety at Work Regulations 1999 requires the following measures as a minimum: Whilst it is not necessary for employers to eliminate all risks associated with their business practices, it is essential that measures are taken to do everything reasonably practicable to protect people from harm. For most small and medium-sized landscape businesses, risk assessment is a straightforward process and does not require the person undertaking the risk assessment process to possess any additional training or qualifications. Association members have free access to a variety of risk assessment and method statement templates, ranging from a single table to a suite of risk assessment documents covering the most common landscape construction and maintenance tasks.",
        bullets: [
          "Identify the hazards that could cause injury or illness in your business",
          "Evaluate the likelihood that someone could be harmed and the severity of this risk",
          "Eliminate the hazard if possible, and if not, control the risk",
          "Introduction to risk assessment",
          "Risk assessment and method statement document",
          "Guidance document",
          "Inventory",
          "Blank template",
        ],
      },
      {
        heading: "Alcohol In The Workplace",
        body: "Whilst The Health and Safety at Work etc Act 1974 states employers have a duty to ensure the health, safety and welfare of employees in relation to alcohol at work, there is no legislation in the UK which requires a company to implement alcohol policies in the workplace. Furthermore, the management of any company can set its own alcohol limit, which may be enforceable according to site or job role. Many employers and site managers have adopted a zero-tolerance approach (i.e. zero alcohol in the system of an individual) to alcohol. This means that, in the event of a test for alcohol, being under the drink drive limit alone may not be acceptable. Alcohol limits may be detailed during a site or company induction, but operatives are advised to seek clarification if in doubt. Operatives on construction sites may be subject to random drugs and alcohol tests. The reason for a zero-tolerance approach to alcohol is that, even at blood alcohol concentrations lower than the legal driving limit, research has shown alcohol can reduce physical co-ordination and reaction speeds. On a construction site there is a risk of injury to operatives and third parties if these abilities are impaired.",
      },
      {
        heading: "Allergic Reactions To Insect Stings",
        body: "Regardless of age or geographic location, whether you work in an office or out on site, spend your free time worshipping the sun or hiding in the shade, wasps and bees are one of the few invertebrates we encounter in Europe which pose a risk of harm. For most people, a sting from a bee or wasp is a short-term inconvenience. A few hours of significant pain, which can be alleviated with nothing more than a rude word, some cold water and perhaps a mild painkiller. For other people, however, bees and wasps pose a significant danger. Allergic reactions or anaphylaxis can develop from a sting, which are potentially life-threatening. The article, written by Dr. Aarn Huissoon (MB, PhD, FRCP, FRCPath) for BALI, has been possible thanks to a financial grant from ALK-Abello, a global, research-driven pharmaceutical company which focusses on allergy diagnosis and treatment. It has been written specifically for landscape professionals and explores the types of reactions, the symptoms and treatment. For more information about how to treat insect stings visit the NHS website here.",
        bullets: [
          "Allergic Reactions to Insect Stings by Dr Aarn Huissoon 12 Mar 2019 220kb PDF",
        ],
      },
      {
        heading: "Bats And Rabies",
        body: "Whilst bats in the UK can carry the disease, rabies, it is not the classical rabies associated with dogs and horror movies. Some bats in the UK carry a type of rabies virus called European Bat Lyssaviruses (EBLV). The risk of catching the virus from a bat in the UK is very low; surveillance of bats in the UK has identified a very low number infected. EBLV is transmitted only through a bite of an infected bat or by its saliva entering a wound or mucous membrane such as the nostrils, mouth and lips, eyelids and ears. Direct contact between landscape operatives and bats is also rare. However, a risk remains. In 2002 a batworker from Scotland died from EBLV, and earlier this month the Animal and Plant Health Agency (APHA) confirmed a dead bat found in Poole, Dorset, carried the virus. Landscape operatives may work in the proximity of bats, particularly on works associated with old buildings. EBLV can be treated by GPs, but it is essential this is administered as soon as possible after exposure. It is also important to be aware of symptoms on humans infected:",
        bullets: [
          "Anxiety, headaches and fever in early stages",
          "Spasms of the swallowing muscles making it difficult or impossible to drink",
          "Breathing difficulties Operatives who are bitten or scratched by a bat must:",
          "Wash the wound or contact area with soap and water",
          "Disinfect the wound",
          "Contact a doctor immediately for advice",
          "bats and rabies 4 Sep 2019 244kb PDF",
        ],
      },
      {
        heading: "Hand Arm Vibration",
        body: "Landscape tools which fit into this category include chainsaws, brush cutters, hedge trimmers, blowers and disc cutters. Using this equipment on a regular basis for several hours each day can cause damage to nerves, blood vessels and joints of the hand, wrist and arm. The damage is irreversible, and can result in tingling and numbness in the fingers, loss of dexterity and even loss of strength. A property management and development company has been fined £600,000 and ordered to pay costs of £13,995.06 after pleading guilty to breaching Section 2(1) of the Health and Safety at work Act 1974. A court heard that between 2009 and 2014 five employees working for Places for People used power tools to carry out grounds maintenance at sites in Milton Keynes, Rotherham and Hull. An investigation by the HSE discovered the company failed to assess or manage the risks associated with vibrating tools, failed to provide training or health surveillance for its maintenance workers, and failed to maintain equipment appropriately. Members not committed to providing health surveillance, particularly in relation to hand arm vibration syndrome, are advised to pay attention to this substantial fine imposed for failure to identify and manage hand arm vibration. HAVS risk assessment and health surveillance is essential where the workforce uses handheld power tools.",
        bullets: [
          "Assess the vibration risk to your employees;",
          "Take action to reduce vibration exposure that produces those risks",
          "Decide if employees are likely to be exposed above the:",
          "Daily exposure action value (EAV) and if they are:",
          "introduce a programme of controls to eliminate risk, or reduce exposure to as low a level as is reasonably practicable;",
          "Daily exposure limit value (ELV) and if they are:",
          "take immediate action to reduce their exposure below the limit value;",
          "Make sure the legal limits on vibration exposure are not exceeded;",
        ],
      },
      {
        heading: "Interior Landscaping",
        body: "Interior landscaping; what does it mean to you? An unnecessary expense or a means of improving worker productivity? A feature to draw visitors or a potential headache for the cleaners? Interior landscaping has come a long way since the days of using a sickly Peace Lily to prop open a door. Peer-reviewed scientific articles support the theory that interior landscaping has the potential to make offices, restaurants, houses, schools, universities and public realm areas healthier, and anyone in these spaces more contented and productive. Sound too good to be true? Well-executed and maintained interior planting has been scientifically proven to bring benefits to workers and the office environment including: The range of health and wellbeing benefits seems unlikely until one considers the reality of office life. Most offices are in urban areas where outside air pollution is consistently high. A significant volume of exterior pollutants enter buildings and mix with office pollutants – commonly volatile organic compounds from items such as furniture, printers, air fresheners and paint - to create an unhealthy environment. Even small concentrations of these chemicals can have an effect and result in ailments familiar to most office workers: headaches, sore eyes, nose and throat, and nausea. These are commonly grouped as sick building syndrome.",
        bullets: [
          "Increased productivity",
          "Decreased stress (lower blood pressure)",
          "Increased attentiveness",
          "More job satisfaction",
          "Better perceived work-life balance",
        ],
      },
      {
        heading: "Latex Allergies",
        body: "With the increase of personal protective equipment (PPE) use, the Health and Safety Executive (HSE) has warned of the potential for workers to develop allergic reactions to items containing latex. The Association has produced a technical document containing more information and links to helpful resources, which can be downloaded to the right of this page.",
        bullets: [
          "HSE issue warning over latex allergies 8 Oct 2020 121kb PDF",
        ],
      },
      {
        heading: "Lone Working",
        body: "Managing the risks associated with lone working involves considering which employees are likely to work alone, and which areas of their work pose a hazard. Employers have a responsibility to ensure they train, supervise, and monitor lone workers, as well as keep in touch with them. As the Health and Safety Executive (HSE) defines a lone worker as ‘ anyone who works by themselves without close or direct supervision ’, most landscape professionals are likely to fit within the definition at some point in their working life. Social distancing guidance issued by the government during the coronavirus pandemic had the potential to create additional lone workers in many BALI member companies, who must be identified and managed appropriately. This management extends to employees now working from home instead of an office. Risks of relevance to lone workers on sites and at home include:",
        bullets: [
          "The place of work (e.g. isolated or rural location)",
          "A person’s medical suitability",
          "Stress and mental wellbeing",
          "Violence directed towards the lone worker from the public",
          "Arranging pre-arranged visitors from supervisors",
          "Knowing where lone workers are at all times, with regular contact using phones, radios and email. The frequency of this contact may vary from hourly to daily depending on the site",
          "Systems for raising alarm where worker needs help or support immediately, or where worker fails to check-in with supervisor at a predetermined time.",
        ],
      },
      {
        heading: "Mental Health",
        body: "► How common are mental health issues in the UK? ► How many people in the UK get treatment for mental health issues? ► Employees: Looking after your mental health at work ► Employers: Advice and resources for line managers ► Contacts * Suicidal thoughts are not mental health diagnoses, but they are related to mental health How to be mentally healthy at work by MIND ( link to document ) How to manage stress by MIND ( link to document ) People managers guide to mental health by Chartered Institute of Personnel and Development (CIPD) and MIND ( link to document ) How to support staff who are experiencing a mental health problem by MIND ( link to document ) How to take stock of mental health in your workplace by MIND ( link to document ) Line Managers' Resource by Mental Health First Aid (MHFA) ( link to document )",
        bullets: [
          "1 in 4 people will experience a mental health problem of some kind each year in England",
          "1 in 6 people report experiencing a common mental health problem (like anxiety and depression) in any given week in England",
          "Between 2011 and 2015, 13% of in-work suicides* were from within the skilled construction and building trades - despite construction accounting for 7% of the UK workforce",
          "Suicide kills more construction workers than falls each year",
          "Approximately 1 in 8 adults with a mental health problem are currently getting treatment",
          "Mental Health - Line managers resource 4 Feb 2021 615kb PDF",
        ],
      },
      {
        heading: "Outdoor Safety",
        body: "This page will be regularly updated with helpful guidance designed to mitigate the risks of working outdoors. A recent enquiry from an Association member prompted a specific technical report to be written, which concerns the use of sunscreen in the workplace. The member asked whether it is the responsibility of an employer to supply sunscreen when the employee spends most of his/her working day outside. You can find this document, and many more, available to download on this page.",
        bullets: [
          "Sunscreen and outdoor working: Employer and employee responsibilities 27 Jun 2019 247kb PDF",
          "BALI's guide to working in hot conditions outdoors 24 Jul 2019 262kb PDF",
        ],
      },
      {
        heading: "Safe Digging",
        body: "Earlier this month a groundworks contractor was fined £32,400 and ordered to pay costs of £2657,18 for breaching Construction (Design and Management) Regulations (CDM) which resulted in one of its employees sustaining serious burns to his face, chest, abdomen, groin, both arms and legs, amounting to roughly 50% of his total body. These burns were caused when an electric breaker used by an operative struck an 11kv electricity cable. Of significance to the landscape industry is the photo included in the Health and Safety Executive’s report, below: The image above shows a situation which many landscape operatives face on a regular basis: digging (relatively shallow) holes in unfamiliar areas of grass. In this instance the operative had used an electronic breaker to break through concrete haunching at the back of a kerb with the intention of installing a new fence. The hole was relatively shallow when the incident occurred. As indicated in the HSE report, following a safe system of work would have avoided this situation. A sae system in this instance consists of three elements:",
        bullets: [
          "Planning the work",
          "Detecting, identifying and marking underground services",
          "Safe excavation/safe digging practices",
        ],
      },
      {
        heading: "Silica Dust",
        body: "The risks associated with asbestos are widely publicised nowadays and, hopefully, the number of fatalities associated with this material will be reduced due to the increased awareness. However, another material – silica dust – is equally damaging to the human respiratory system and found in many of the materials landscape operatives are likely to encounter on a daily basis. Limestone, sandstone, ironstone, marble, granite, concrete, aggregates, mortar, bricks, tiles and slate all contain silica. The silica in these materials is harmless if undisturbed, but drilling, cutting, breaking or grinding can generate dust particles of silica which are harmful to health. Small particles of silica remain airborne for a significant period of time, during which they may be inhaled by unprotected operatives. The small size of silica particles allow them to be inhaled deep into the lungs, where they remain lodged. The body is unable to remove the particles, which means they cause inflammation and scarring. In the long-term, this can cause lung diseases. Appropriate management of exposure to silica dust is of critical importance to the health and well-being of employees. The points below are intended as a guide only, and an expert should be consulted to ensure all risks are correctly identified and appropriate control measures implemented.",
      },
      {
        heading: "Slopes",
        body: "The Association’s own accident statistics, as well as those of the Health and Safety Executive (HSE), report landscape operatives suffer a disproportionately high number of accidents whilst completing tasks on slopes. 1. operator loses control of ride-on machinery - machine loses traction or becomes unstable due to gradient - machine over-turns with operator on-board 2. operator slips or trips whilst using pedestrian or hand-held equipment, resulting in",
        bullets: [
          "Machine over-turning due to gradient of slope",
          "Loss of traction between machine tyres and slope, causing machine to slide",
          "Sharp steering input from machine operator causing machine to tip",
          "Operator slips",
          "Inadequate maintenance of machine/equipment",
          "Site-specific risk assessment",
          "Equipment suited to the task and site",
          "Equipment that is correctly maintained",
        ],
      },
      {
        heading: "Whole Body Vibration",
        body: "Whole body vibration (WBV) is a health issue caused by prolonged exposure to vibration, shocks or jolts, transmitted from mobile machinery to the operator through the seat or feet. Whilst research on landscape-specific equipment is limited, prolonged periods spent on ride-on machinery such as tractors, mowers and quads over uneven ground are believed to result in symptoms associated with WBV. Symptoms commonly include lower back pain, WBV may also cause musculoskeletal disorders. Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.",
        bullets: [
          "Whole body vibration 20 Aug 2019 348kb PDF",
        ],
      },
      {
        heading: "Winter Care",
        body: "The location of outdoor spaces means most are used throughout the year regardless of weather. Plant growth cycles mean that autumn and winter are a great opportunity to undertake maintenance of a wide range of plant specimens, particularly trees. Hard surfaces are equally like to be under pressure, and require maintenance to promote their continued use. Grass will continue to grow at a minimum temperature of 14 degrees Celsius, so mowing may continue into the months that are unseasonably mild, subject to the weather and areas being dry enough. Leaves and plant debris will need to be removed from grassed area to prevent lawns from dying and from walkways and hard surfaces to prevent pedestrians slipping and the surfaces becoming stained.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law": {
    eyebrow: "Help & Advice",
    title: "Contracts, Law and Regulations",
    theme: "slate",
    intro: "How CDM applies to the landscape industry",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "Construction Design Management CDM",
        body: "The Construction (Design & Management) Regulations 2015 are the main set of regulations for managing the health, safety and welfare of construction projects. The scope of works covered by the definition of 'Construction' in CDM includes many aspects of landscape works, including site clearance, excavation, drainage and earthworks. In addition, any landscape contractor undertaking work on a construction site where other contractors are present will have responsibilities under CDM. Please click on the buttons below to learn more about your responsibilities under CDM:",
      },
      {
        heading: "Evolution Of Employment",
        body: "Whilst new working arrangements have the potential to enable short-term or highly flexible demands for labour to be fulfilled, the existing legislative framework – which has evolved to cater for traditional ‘employees’ – often does not afford sufficient protection to the rights of a new position labelled ‘workers’. Workers are a half-way house between employees and self-employed individuals, often at risk from losing basic employment rights as a result of unscrupulous employers. In 2017 a report commissioned by the government evaluated the changing landscape of work and made recommendations to ensure future legislation reflects these changes. Many changes in law have already been adopted or will do in the near future. One of the areas of legislation to be changed as a result of this review is section 1 of the Employment Rights Act 1996. Currently, ‘employees’ in a role for more than one month must be given a document containing specific information including holiday pay, sick leave, and length of time the job is likely to last within 2 months of the date they start work. This document may often be refereed to as an employment contract or written statement, and may be in parts, provided this 2-month limit is met. Anyone defined as a ‘worker’ - which may include people employed under zero-hours contracts or employed through an agency - is not currently entitled to any of this information at any stage in their role. This leaves a significant number of contemporary ‘workers’ in a vulnerable position so, as of 6th April 2020, new requirements will be enforced:",
        bullets: [
          "Both employees and workers are entitled to a section 1 statement on the first day of work, regardless of the duration of their role.",
          "Details concerning working periods, leave entitlement, sick pay, renumeration, probationary period and training must be given.",
        ],
      },
      {
        heading: "GDPR",
        body: "The regulation has fundamentally reshaped the way in which data is handled across every sector, from healthcare to banking and beyond. The British Association of Landscape Industries has been working closely with members to ensure they are compliant with the new regulation by producing a helpful data protection fact sheet. The General Data Protection Regulation forms part of the data protection regime in the UK, together with the new Data Protection Act 2018 (DPA 2018). This replaces the Data Protection Act 1988. The main provisions of this applied from 25 May 2018, which means all business should already be applying the principles of the GDPR in their daily work activities. The GDPR applies to businesses who may be called a ‘controller’ or ‘processor’. A controller determines the purposes and means of processing personal data. A processor is responsible for processing personal data on behalf of a controller. As a landscape contractor or designer, it is most likely that you are a controller, since you will frequently be deciding what personal data to collect (for example, the names, email addresses, telephone numbers and addresses of clients) and how this information will be recorded e.g. on a phone, in a book or via email. Note that GDPR applies to historic, current and all future electronic and manual records held by your company. Personal data only includes information relating to natural persons who can be identified or who are identifiable, directly from the information in question (e.g. name, address, email, NI number); or who can be indirectly identified from that information in combination with other information (e.g. Computer’s IP address). As a landscape contractor or garden designer, it is likely you will record personal data from clients which includes their name, address and email address. Information about companies or public authorities is not personal data, however, information about individuals acting as sole traders, employees, partners and company directors where they are individually identifiable, and the information relates to them as an individual, may constitute personal data.",
        bullets: [
          "Data Protection Factsheet 12 Mar 2019 223kb PDF",
        ],
      },
      {
        heading: "IR35",
        body: "By setting up as a limited company, workers can continue to work for an existing employer, but as a ‘contractor’. Personal service companies are a variation of this and are popular where clients and recruitment agencies avoid hiring contractors operating as sole traders. Operating as a contractor or personal service company allows workers to avoid paying national insurance contributions on a significant part of their income, which traditional employees must do. When used legitimately, this reduced tax is intended to provide the contractor with money for holiday or sick pay, but also paying for equipment necessary to do their job. This arrangement also benefits the client, as they do not need to pay annual leave or sick pay to contractors or personal service companies. Whilst operating as a contractor can be entirely legitimate, Her Majesty’s Revenue and Customs (HMRC) regard the practice of masquerading as a ‘contractor’ as a form of tax avoidance, and introduced IR35 to ensure, where appropriate, contractors deemed to be employees pay the same amount of tax as traditional employees. If HMRC identify cases where individuals have been masquerading as self-employed contractors without justification, they will be required to pay the missing tax back to HMRC, with interest and penalties for a period of up to 6 years. Working ‘Inside IR35’ is where a worker is considered an employee (commonly referred to as a ‘deemed employee’) for the purposes of tax by HMRC. The following are likely to apply in this scenario:",
        bullets: [
          "The client decides how, when and where the workers services are provided",
          "Contractor is paid regardless of the quality of services provided",
          "Client would not be willing to accept a substitute to provide the services",
          "Contractor does not provide own equipment",
          "The contractor decides how, when and where the workers services are provided",
          "Contractor may be paid according to work or service delivered",
          "Client would accept a substitute to provide the services",
          "Contractor provides own equipment for services provided",
        ],
      },
      {
        heading: "JCLI Contracts",
        body: "These documents update the CPSE/JCLI Guidance for the Advanced Ordering or Contract Growing of Hardy Nursery Stock (HTA 1999). October 2014. The JCLI Contracts Forum agrees and badges commercial and domestic project standard forms of contract and associated guidance documents for the landscape industry. The contracts and guidance are produced and published by individual member organisations. The JCLI Contracts Forum is organised by the Landscape Institute. Its members are the Association of Professional Landscapers (APL), the British Association of Landscape Industries (BALI), the Horticultural Trades Association (HTA), the Institute of Chartered Foresters (ICF), the Landscape Institute (LI) and the Society of Garden Designers (SGD). The JCLI badging of contracts is considered important for two main reasons: firstly, because ‘JCLI’ has a strong reputation for contracts, based on the reputation of the Landscape Contract originally produced in 1978; and secondly, because the documents are agreed by the members of the Forum and are therefore non-partisan industry standard documents.",
      },
      {
        heading: "Water Abstraction",
        body: "The abstraction of water is managed by the government. Most businesses taking more than 20,000 litres of water a day directly from rivers or groundwater require an abstraction license. Following review and consultation, shortcomings were identified in the existing system of abstraction, which led to the government introducing a series of new measures in 2016. Over the next few years, rules concerning abstraction are likely to change and may affect Association members. Historically, taking water from the environment for certain uses and from certain sources could be done without a license. These uses and sources were called ‘exempt activities’ and included, amongst others: • All forms of irrigation including trickle • Abstractions from previously exempt areas",
        bullets: [
          "Change to abstraction licensing rules 31 Jul 2019 257kb PDF",
        ],
      },
      {
        heading: "VAT Reverse Charge",
        body: "From 1st March 2021 the domestic VAT reverse charge will apply to most supplies of building and construction services. This change will affect nearly all landscape contractors to some extent, and it is important our members understand the consequences of the changes. - What is the domestic VAT reverse charge? - Why is the domestic VAT reverse charge being introduced? - Who will the domestic VAT reverse charge apply to? - Which services will the reverse charge apply to? - Are there any circumstances when the VAT reverse charge does not apply? - Where do responsibilities lie regarding notification of VAT reverse charge? From 1st March 2021, all businesses performing sub-contractor duties by supplying construction services to a VAT-registered customer (a contractor) will no longer charge VAT. Instead, the customer (contractor) will pay the VAT owed by the sub-contractor directly to HMRC. This means if you are a VAT-registered sub-contractor, who is registered with the CIS scheme and currently receives VAT payments from a contractor client, as of 1st March 2021 you will no longer receive VAT from these clients.",
        bullets: [
          "When contractors use sub-contractors for zero-rated work",
          "If the contractor or sub-contractor is not VAT registered",
          "Where building or construction works are for end users",
          "The customer (the contractor) must advise the supplier (sub-contractor) if they are an end user – and therefore not subject to the reverse charge – in writing. HMRC suggest the following wording is used:",
          "The subcontractor may need to ask the customer if they are an end user and should record this request and any response in writing and retain as evidence. It is important the subcontractor also identifies and records evidence supplied to suggest the customer (contractor) is VAT registered and subject to CIS.",
          "The supplier (the sub-contractor) must advise on their invoice if the VAT reverse VAT charge applies. Whilst no VAT will be charged on the invoice, the invoice must refer to the reverse charge and how much VAT is due (20% or 5%). HMRC suggest the following wording is used:",
        ],
      },
      {
        heading: "The Good Work Plan",
        body: "In 2017 Matthew Taylor, the Chief Executive of the Royal Society for the Encouragement of Arts, Manufacturers and Commerce , published the Good Work report. This document outlined 53 proposals to the government, aimed at improving modern working practices. Specifically, the report considered how employment practices needed to change in order to keep pace with modern business models, and discussed the developing nature of self-employed and contracted workers, and how the existing labour laws must change to accommodate these individuals and the businesses that employ them. The government responded to the report by publishing The Good Work Plan in 2018, which identified the changes that would be implemented. These affect England, Wales and Scotland, and the following changes came into effect last week: Full details of the changes can be reviewed on the government’s website.",
        bullets: [
          "A written statement of main terms and conditions (frequently known as written statement of particulars) must now be provided to Employees and Workers by their employer on or before the first day of their employment",
          "The period to break continuous service has now extended from 1 week to 4 weeks, which means employees who work intermittently for their employees can access their employment rights",
          "The pay reference period for holiday calculations has increased from 12 to 52 weeks, or for employees with less than 52 weeks service, the total number of weeks they have worked. This means the holiday pay for employees with variable hours will reflect their working hours across the year, and not vary according to high or low season.",
          "Employees who do not have regular working hours are now able to request a more stable contract after 26 weeks continuous service, with a more fixed working pattern and guaranteed hours.",
          "Agency workers are now entitled to the same pay as the direct recruits of a business after they have performed the same role with the same hirer for 12 consecutive calendar weeks",
        ],
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/pests": {
    eyebrow: "Help & Advice",
    title: "Pests & Diseases",
    theme: "flow",
    intro: "A resource for all disciplines of landscape professional wishing to learn about the threat from high profile pests and diseases, together with the latest legal requirements and best practice for specific species. Some of the articles on this page are for members only. To access, become a member by making an enquiry.",
    sections: [
      {
        heading: "Ash Dieback",
        body: "Ash dieback was first identified in the UK in 2012. The disease is well established throughout mainland Europe, where it is responsible for losses of commercial and amenity tree planting. Spread by a fungus called Hymenoscyphus fraxineus, the disease is often simply referred to as ‘ash dieback’ due to the symptoms on infected trees: leaf loss, crown dieback and bark lesions. Once infected, trees are likely to die either as a direct result of the disease or will succumb to other diseases. Three tree and shrub species in the same family (Oleaceae) as ash, including mock privet, narrow-leaved mock privet and white fringe tree are also susceptible to the disease.",
        bullets: [
          "Ash dieback found on three new host species of tree in the UK 15 Jul 2019 423kb PDF",
          "True cost of Ash dieback revealed 8 May 2019 356kb PDF",
          "Ash Dieback Action Plan Toolkit 4 Apr 2019 950kb DOCX",
        ],
      },
      {
        heading: "Asian Hornet",
        body: "Introduction Identification Sightings Reporting The Asian hornet is a highly effective predator of insects, including honey bees, flies, caterpillars, aphids and bugs. Evidence suggests Asian hornets systematically attack bee colonies and have the potential to cause significant loses. The Asian hornet was first sighted in the UK during 2016. Whilst the UK is still free from the Asian hornet, the risk remains high, particularly in the south of the UK with its warmer, milder climate. Despite the risk to native insects, the Asian hornet does not pose a greater danger to people; it is not aggressive unless provoked, although can sting. Accidental introductions of Asian hornet via the landscape supply chain are a possibility, and BALI members are encouraged to remain vigilant and report any sightings. Click here to view a detailed identification guide From 2016 to the present date there have been a total of 21 confirmed sightings of Asian hornet in England. During 2021 there have been two confirmed sightings and nests destroyed in Berkshire and Hampshire. To review details of all Asian hornet sightings between 2016 and the present day, please click here . Sightings of Asian hornet can be reported either online or email",
      },
      {
        heading: "Asian Longhorn Beetle",
        body: "The Asian Longhorn Beetle, which was first discovered in Kent in 2012 and likely imported by accident through infested imported wood packaging material, has been eradicated in the UK as a result of six years of trapping and surveillance work by the Forestry Commission and the Animal and Plant Health Agency. Find out more about the Asian Longhorn Beetle and updated information regarding the pest using the downloadable document on this page.",
        bullets: [
          "Asian Longhorn Beetle 29 May 2019 324kb DOCX",
        ],
      },
      {
        heading: "Biosecurity Toolkit",
        body: "The Landscape Institute has published a new plant health and biosecurity toolkit to help built environment professionals combat Britain’s biggest pests and diseases. Launched in partnership with the Society of Garden Designers (SGD), the British Association of Landscape Industries (BALI) and the Association of Professional Landscapers (APL), the resource is a huge milestone in collaborative working, and the first comprehensive, dedicated biosecurity guide for landscape architects, garden designers, consultants and contractors. The purpose of the toolkit is to identify best practice across the sector and embed agreed systematic biosecurity protocols into every stage of a landscape project in a way that has never before been achieved.",
        bullets: [
          "Plant Health and Biosecurity: The Landscape Consultant's Toolkit 11 Apr 2019 586kb PDF",
        ],
      },
      {
        heading: "Brown Tail Moth",
        body: "The brown-tail moth is an insect native to the UK. During the caterpillar stage of its lifecycle, the insect develops hairs which can cause a painful, irritant rash or breathing difficulties in humans and animals upon contact. The caterpillar, easily identified by its red and white markings, is commonly found on hedgerow species such as hawthorn, blackthorn, plum, cherry, rose, blackberry and bramble. The hairs may become airborne. Although originally confined to the south of England, the insect has now spread throughout the UK. Landscape operatives are advised to familiarise themselves with the insect and its habitat.",
        bullets: [
          "Brown Tail Moth 5 Jun 2019 366kb PDF",
        ],
      },
      {
        heading: "Canker Stain Of Plane",
        body: "Ceratocystis platani, which may also be referred to as plane wilt disease, is a serious threat to several plane species, including London plane (Platanus x acerifolia) and its parents, Platanus orientalis and Platanus occidentalis. Whilst the fungus that causes canker stain of plane is not yet in the UK, it is now in Italy, France and Greece, and responsible for notable tree fatalities.The fungus can infect specimens through wounds in bark or stems as well as root-to-root contact. As the fungus spreads, it may disrupt the water transport system of the tree and cause cankers. Whilst these cankers may be recognisable only as longitudinal cracks on larger, thicker barked trees, removal of the bark will reveal staining - hence the name ‘Canker stain of plane’.",
        bullets: [
          "Canker stain of plane 22 Jul 2019 243kb PDF",
        ],
      },
      {
        heading: "Eight Toothed Spruce Bark Beetle",
        body: "Ips typographus, also known as European spruce bark beetle, eight-toothed spruce bark beetle, bark beetle, eight-dentate beetle, engraver beetle, eight-spined beetle and spruce bark beetle, is considered a serious pest of spruce ( Picea ) as well as some species in other conifer genera in Europe. The beetle is mainly a secondary pest, meaning it prefers dead, stressed or weakened trees. However, under some environmental conditions its number can increase and attack healthy trees. The pest has the potential to cause significant damage to the United Kingdom’s spruce-based forestry and timber industries. In England the pest was first found in Kent in 2018, and as a precaution a demarcated area established where movement of materials and methods of forest operations have been restricted. In 2024 the pest was found on a small number of cut and fallen Sitka spruce trees in close proximity to infested Norway spruce trees on a site in West Sussex. As of June 2024 the demarcated area has been extended to cover parts of Lincolnshire, Bedfordshire, Cambridgeshire, Norfolk and Suffolk in addition to parts of Hampshire, Berkshire, Buckinghamshire, Hertfordshire, Surrey, City and County of the City of London, Greater London, East Sussex, West Sussex, Kent and Essex. Click here to view a detailed map of the demarcated area. The following conditions apply in demarcated areas: (i) Restrictions on the felling of susceptible material without prior notification. Landowners must provide notice of their intention to fell relevant material at least 14 days in advance of any felling in the demarcated areas. Felling may only commence once written authorisation is provided the Forestry Commission. (ii) Restrictions on the killing of trees (either by ring-barking, chemical injection or application, mechanical means, biological control or arboricultural intervention) of the genus Picea A. Dietre over three meters in height, without prior notification. All operations must be agreed in writing by the Forestry Commission. (iii) Prohibition on susceptible material being left in situ, unless authorised in writing by a plant health inspector. (iv) Prohibition on the movement of spruce (Picea) material with bark (for example, wood with bark, isolated bark, live trees over 3 metres) that has originated within the demarcated area. Whilst it was believed the pest was accidentally introduced via imported wood or wood packaging, more recent research suggests the beetle can naturally disperse across the channel. Whilst only landowners and timber processors are likely to be affected by the current restrictions on movement of material, establishment of the pest in Great Britain is likely to affect a broad spectrum of stakeholders. Landscape professionals are urged to remain vigilant for signs of the pest and report suspected sightings anywhere in Great Britain using the Tree Alert Form . Further information Forest Research website: Larger eight-toothed European spruce bark beetle (Ips typographus) The Official Controls (Plant Health and Genetically Modified Organisms) (England) Regulations 2019 The Plant Health (Ips typographus) (Demarcated Area No. 6) Notice Defra press release: New warning as Ips typographus tree pest found on new species",
      },
      {
        heading: "Emerald Ash Borer Beetle",
        body: "Whilst there have been no discoveries in the United Kingdom to date, the ability of the beetle to fly means it has now spread across USA, Canada and Russia, and is now within 10km of the Russian borders with Ukraine and Belarus. Infestation of ash trees by emerald ash borer is normally fatal. As UK ash trees are already under threat from Chalara ash dieback (which is already established in the UK), it is feared the effect on ash trees from further attacks would be serious. As the name suggests, emerald ash borer beetles are a metallic emerald green colour, with adults between 7.5 and 13.5mm long. Unfortunately, infestation of the beetle is difficult to detect until symptoms become severe. Clues to infestation include: Members who identify any signs of emerald ash borer are encouraged to contact either the Animal and Plant Agency (APHA) or Forest Research .",
        bullets: [
          "Crown dieback and dying branches",
          "Yellowing and thinning foliage",
          "D-shaped holes in the bark, produced by adult beetles as they emerge from larval stage",
          "Serpentine galleries beneath bark of tree",
        ],
      },
      {
        heading: "Oak Lace Bug",
        body: "Oak lace bug (Corythucha arcuata) is not yet in the UK, but is widespread in Europe. It has been highlighted as a potential future risk to broad-leaved trees in the UK, and particularly oak. The adult lace bug feeds on the underside of leaves, and whilst is not a significant threat in isolation, large numbers of the pest can cause stress, premature leaf drop and result in hosts more susceptible to pests and diseases. As with many other pests and diseases, the primary source of transmission is within traded materials. Our latest report, available for BALI members to download, provides more information on the Asian Hornet. If you would like to find out how to become a BALI member and access technical documents like this, make an enquiry.",
        bullets: [
          "oak lace bug 14 Aug 2019 323kb PDF",
        ],
      },
      {
        heading: "Ticks And Encephalitis Virus",
        body: "An infectious disease, discovered in the UK for the first time and carried by ticks, has the potential to damage the brain and can also affect humans through the tick's bite. Public Health England (PHE) has confirmed the presence of the encephalitis virus , which originates from the tick, in Thetford Forest Norfolk and on the Hampshire-Dorset border. While the PHE says the risk is “very low”, it is investigating how common the infected ticks might be. The small parasitic arachnids are becoming more common in parts of the UK, mainly due to increasing deer numbers. Ticks can also live in the undergrowth and latch onto humans when walking through the undergrowth and long grass. Ticks can also carry other diseases, including Lyme disease . Most people who catch the encephalitis virus will have no or only mild flu-like symptoms, but it can affect the brain and central nervous system and can sometimes be fatal. A vaccine is available privately for tick-borne encephalitis. The tick-borne encephalitis virus is already present in mainland Europe and parts of Asia. It is thought infected ticks have been introduced to the UK via migratory birds. The NHS advises that tick bites can be prevented by covering skin while walking outdoors, using existing paths and nature trails, applying insect repellent and checking your clothes and hair after going for a walk. A video, introduced by PHE in 2013, features senior scientist Maaike Pietzsch who explains how to avoid being bitten by a tick, what to do if you have been bitten and how to remove them.",
        bullets: [
          "PHE Tick Awareness Tookit 31 Oct 2019 906kb PDF",
          "PHE Surveillance Survey 2019 31 Oct 2019 519kb PDF",
          "PHE Ticket Awareness Leaflet 31 Oct 2019 1789kb PDF",
        ],
      },
      {
        heading: "Xylella Fastidiosa",
        body: "Contents - Introduction - Geographic distribution of Xylella - How the trade and public can help - New measures in 2021 Xylella fastidiosa, more commonly referred to as Xylella, is a bacterium which causes disease in a wide range of plants including many shrubs and herbaceous plants, olive and several species of broadleaf trees. Common symptoms of Xylella include leaf scorch, wilt, die-back and plant death. There is no known cure for the disease. Outbreaks of Xylella have previously occurred in Italy, France, Spain, Germany and Portugal, and the disease continues to spread throughout Europe. Outbreaks were discovered in Belgium in 2018, and in Southern France, Italy and Spain during 2020. The challenge associated with managing the spread of Xylella concerns its long latency period, which means infected host plants may be transported into non-infected countries such as the UK without showing any symptoms. Research suggests there is a higher risk of Xylella with olive, almond, lavender, rosemary, coffee and polygala plants. The trade and public are asked to look out for symptoms and report cases which cannot be explained by factors such as frost damage, drought or other common pests and diseases, to the TreeAlert service . Advice to help prevent the accidental introduction of Xylella includes: To prevent the accidental introduction of Xylella to the UK, new measures are due to be introduced on higher risk host plants imported into GB from 4th March 2021. The new measures will affect imports of the following high-risk hosts of Xylella: • Coffea (coffee) • Lavandula sp. (lavender) • Nerium oleander • Olea europaea (olive) • Polygala myrtifolia • Prunus dulcis (almond) • Rosmarinus officinalis (rosemary) The new measures: Plants for planting, other than seeds, that belong to the genera and species listed in the list of Xylella host plants, other than, Coffea (coffee), Lavandula sp. (lavender), Nerium oleander, Olea europaea (olive), Polygala myrtifolia, Prunus dulcis (almond) and Rosmarinus officinalis (rosemary), from all third countries: The plants must: (a) have been grown for at least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa or (b) have been grown for at least three years before export, or in the case of plants which are younger than three years have been grown throughout their life, in an area that is free from Xylella fastidiosa or (c) in the case of plants which originate in an area where Xylella fastidiosa is not known to be absent, have been produced in a site that is: • authorised as a site that is free from Xylella fastidiosa and its vectors, • physically protected against the introduction of Xylella fastidiosa, • surrounded by a zone with a width of 100 m where plants found to be infected with Xylella fastidiosa removed, and appropriate treatments against the vectors have been applied, • treatments to maintain freedom from the vectors have been carried out • at least two official inspections during the flight season of the vectors have been carried out. • neither symptoms of Xylella fastidiosa or its vectors were found in the site or 100m zone surrounding it, if suspect symptoms were observed, testing was carried out to confirm the absence of Xylella fastidiosa. • inspection and testing prior to export. Plants intended for planting other than seeds, of Coffea sp. and Polygala myrtifolia, from any third country: (a) have been grown for at least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa. or (b) have been grown for at least three years before export, or in the case of plants which are younger than three years have been grown throughout their life, in an area that is free from Xylella fastidiosa. and in the case of Polygala myrtifolia (c) each lot of plants of Polygala myrtifolia has been subjected in addition to official visual inspection, sampling and testing. Plants intended for planting other than seeds, of Lavandula sp., Nerium oleander and Rosmarinus officinalis, from any third country: (a) have been grown for at least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa. or (b) in the case of plants which originate in an area where Xylella fastidiosa is not known to be absent, have been produced • a place of production registered and supervised by the national plant protection organisation for a period of at least one year before the export of the plants • the place of production and a 200m zone surrounding it is known to be free from Xylella fastidiosa. • the plants have been subjected to an annual official inspection sampling and testing to confirm the absence of Xylella fastidiosa • immediately before their export, the plants were subjected to an official visual inspection for the presence of Xylella fastidiosa where any symptoms are observed, testing should be carried out. • the plants have been grown under physical protection Plants intended for planting other than seeds and plants grown for their entire production cycle in vitro, of Olea europaea and Prunus dulcis from any third country: (a) have been grown for least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa. or (b) in the case of plants which originate in an area where Xylella fastidiosa is not known to be absent, plants have been produced in: • place of production registered and supervised by the national plant protection organisation for a period of at least one year before the export of the plants • the place of production and a 200m zone surrounding it is known to be free from Xylella fastidiosa. • the plants have been subjected to an annual official inspection sampling and testing to confirm the absence of Xylella fastidiosa • immediately before their export, the plants were subjected to an official visual inspection for the presence of Xylella fastidiosa where any symptoms are observed, testing should be carried out. • Plant have been grown under physical protection",
        bullets: [
          "Source new plants carefully, where possible purchase plants grown in the UK",
          "Propagate your own plants from seeds or cuttings",
          "Check plants for signs of disease before purchase and monitor the health of new plants",
          "Never bring plants back with you from abroad",
        ],
      },
      {
        heading: "Oak Processionary Moth",
        body: "Introduction Identification Guidance for landscape professionals Reporting OPM Resources Thaumetopoea processionea or oak processionary moth (OPM) is native to central and southern Europe but has now spread across northern Europe, aided by trade of oak trees. It was accidentally introduced to the UK and discovered in West London during 2006 and has since spread from this location. OPM has the potential to spread further and affect oak trees throughout England and Wales. The caterpillar stage of OPM feeds and lives almost exclusively on both of Britain's native oak species: English/pedunculate and sessile - but also several other species grown in the UK including Turkey oak, chestnut-leaved oak, white oak, Turner's oak, Holm oak, Algerian oak and Hungarian/Italian Oak. Large populations of caterpillars can strip foliage from host trees, leaving them vulnerable to other pests and diseases, as well as drought. OPM caterpillars grow hairs which pose a health hazard to humans and animals. Symptoms of contact with hairs include skin rashes, eye irritation, sore throats and breathing difficulties. These hairs may be shed when the pest is disturbed, be blown by the wind and accumulate in nests. They may also stick to clothing, equipment and animal fur. Note: All caterpillars with hairs have the potential to be allergenic and handling is avoided. Only OPM and brown-tail caterpillars produce enough allergens to be considered potentially harmful. During May 2023 Defra introduced regulations to prevent the spread of OPM within the UK. The regulations affect professional operators (landscapers) who grow, purchase, hold or plant 'large' oak trees. Large = girth at 1.2m above the root collar more than 8cm. Following the introduction of these regulations landscape professionals have three responsibilities in relation to OPM: 1. Record where you plant large oak trees using a spreadsheet supplied by Defra ( click this link to download the file ) with the following information: - supplier where the specimen(s) were purchased (Name, address, phone number) - description of tree(s) purchased (species, size, number, origin) - location where the tree(s) were planted (address, client type) - other reference information (delivery date, invoice number, order number, plant passport reference) Note: Update the Defra spreadsheet each time you plant large oak trees and be prepared to share the information with Defra. 2. Restrictions have been placed on movement of large oak trees in the UK in an attempt to slow down the spread of OPM, and professional operators (landscapers) must respect these restrictions. The UK has been split into three areas: - Established area (where OPM is present) - Buffer zone (between established area and area of UK free from pest) - Area free from pest (area of UK where there is no OPM). Click this link to view the location of each area (as well as the location of trees found to be infested between 2019 and 2023). The table below advises whether large oak trees can pass between each of the areas. Red = No movement permitted unless trees grown throughout entirety of life under complete physical protection and inspected. Yellow = Movement permitted without exemption providing the trees are in transit for less than 48 hours before moving to the final planting site. If trees are in transit for more than 48 hours, biosecurity requirements (a) and (b) apply - see table above for specific requirements. biosecurity requirements (a): 1.Landscapers must demonstrate that they meet the Plant Health Management Standard, evidenced through membership of the Plant Healthy Certification Scheme or provision of a Ready to Plant approval from Fera Science Ltd for each consignment to be moved, as well as evidence of ongoing on-site monitoring for OPM and inspection of trees for OPM prior to movement. 2. Landscapers must keep accurate records of the contact details of those receiving large oak trees, including the delivery address and contact details, and store this information for a minimum of 3 years to ensure traceability of movements. ( click this link to download a suitable file ) biosecurity requirements (b) 1. Professional operators must have a robust control regime in place with appropriate application of phytosanitary treatments in line with Defra’s technical guidance on the application of Plant Protection Products for phytosanitary treatment of OPM. Registration is required for professional users of plant protection products under the Official Control (plant protection products) Regulations. Records of all treatment applications must be kept for a minimum of 3 years. 2. Professional operators must make clients aware inspectors may visit sites to inspect planted trees. Green = Movement permitted 3. Meet biosecurity requirements if you store large oak trees for more than 48 hours before moving the specimen to its final planting site. Any findings of OPM in the buffer zone or area free from pest should be reported to Tree Alert ( link ) or Animal and Plant Health Agency ( link ) Defra guidance document: Managing oak processionary moth in England Forestry Commission: Oak Processionary Moth management policy changes guide",
        bullets: [
          "Usually present only on oak trees, but may travel along the ground between trees. In rare cases, caterpillars may feed on other broad-leaved species in the absence of oak leaves.",
          "Active during May, June and July.",
          "Form a procession (hence the name) when feeding or moving along the trunk, branches and leaves of a host tree.",
          "Have black heads and grey bodies. They are 2cm long when fully grown and develop long, white hairs when 1cm long.",
          "Native caterpillar species may easily be mistaken for OPM. Forest Research advise the lackey moth ( Malacosoma neustria ) and brown-tail moth ( Euproctis chrysorrhoea ) may be encountered during spring or early summer. Click here for more information on look-alike species.",
          "Post Planting Inspection Form 29 Oct 2024 50kb XLSX",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/podcast": {
    eyebrow: "Help & Advice",
    title: "BALI Podcast: Dig Deep",
    theme: "flow",
    intro: "Dig Deep is the official podcast of the British Association of Landscape Industries — bringing you conversations with leading voices from across the UK landscape industry. Listen to every episode below.",
    embed: {
      url: "https://www.podbean.com/player-v2/?i=6p4rn-142a785-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=7&size=480",
      title: "Dig Deep — BALI Podcast",
      height: 540,
    },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join": {
    eyebrow: "Join BALI",
    title: "Join Our Association",
    theme: "green",
    intro: "Become a member of the British Association of Landscape Industries and access exclusive benefits designed to help your business grow, thrive, and stand out.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "Why Join BALI?",
        body: "When you become a BALI member, you're joining a nationwide network of accredited landscaping professionals — committed to excellence, innovation, and leadership. Whether you're a contractor, designer, supplier, or student, our tailored support helps you raise your profile, win business, and develop your team. What BALI Offers You: Apply Now Learn about our mission and values",
        bullets: [
          "Accreditation that sets you apart",
          "Free HR and health & safety support",
          "Digital marketing and business advice",
          "Discounts on tools, insurance, and services",
          "Access to exclusive events and training",
          "Use of the BALI Accredited badge — trusted by clients",
        ],
      },
      {
        heading: "Key Membership Benefits in Action",
        body: "Free HR & Employment Law Support: All members get a complimentary One-to-One HR Review with Quest, our trusted partner. Health & Safety Advice: You don’t need to go it alone. BALI membership includes tailored health & safety support — from compliance to documentation. Members of the Association can save thousands of pounds by taking advantage of our vast membership benefit portfolio, including HR and health & safety support, digital marketing advice, insurance, recruitment and much more.",
        bullets: [
          "HR Health Check",
          "Employment Law updates",
          "Expert advice and templates",
          "Recruitment best practices",
          "H&S Health Check",
          "Risk assessments & policy templates",
          "Ongoing access to expert advisors",
        ],
      },
      {
        heading: "BALI’s Mission Supports You",
        body: "We represent, support and accredit the landscape industry — providing training, professional advice and opportunity to members, and quality assurance to their clients. Our membership is more than a list — it’s a network, a benchmark, and a support system built around you.",
      },
      {
        heading: "Get in Touch With Our Team",
        body: "Need help choosing the right membership category or completing your application? Email: membership@bali.org.uk Call +44(0)24 7669 0333.",
      },
      {
        heading: "Membership Categories",
        body: "BALI offers nine membership categories to suit every kind of business or individual. Click below to explore the right one for you, review the application process, fees, and benefits.",
      },
      {
        heading: "accredited contractor",
        body: "This membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance",
      },
      {
        heading: "accredited designer",
        body: "The British Association of Landscape Industries is committed to continually improving the landscape sector and sets high standards for its Accredited Designer members",
      },
      {
        heading: "accredited supplier",
        body: "This membership category can be a business, section or division of a business that supplies quality materials and equipment",
      },
      {
        heading: "accredited group",
        body: "Accredited Group membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance",
      },
      {
        heading: "accredited dso",
        body: "Accredited Direct Service Organisation (DSO) membership is for the grounds maintenance departments of public or local authorities",
      },
      {
        heading: "international",
        body: "International membership is ideal for contractors who carry out hard and soft landscaping and/or grounds maintenance work and operate outside of the UK and the Channel Islands",
      },
      {
        heading: "associate",
        body: "Associate membership is for those trading for less than two years and are looking to explore the benefits of being a British Association of Landscape Industries member",
      },
      {
        heading: "training provider",
        body: "Perfect for individual trainers, commercial training organisations, FE and HE colleges and universities delivering land-based academic and skills training",
      },
      {
        heading: "student",
        body: "This category of membership is for students attending commercial training organisations, FE and HE colleges and universities",
      },
    ],
    ctaPrimary: { label: "Apply for Membership", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/lay-of-the-land-2025": {
    eyebrow: "Industry Research",
    title: "Lay of the Land 2025",
    theme: "green",
    intro: "With a contribution of £38bn to UK GDP and the supporting of 722,000 jobs, the environmental and landscaping sector provides clear benefits to the UK, not only financially, but also in mental wellbeing and the enjoyment of our communities and outdoor spaces.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Lay of the Land 3 Oct 2025 8079kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/liss-cscs": {
    eyebrow: "LISS/CSCS",
    title: "What is LISS/CSCS?",
    theme: "blue",
    intro: "LISS/CSCS is both a standalone scheme and a mandatory requirement of the National Highways Sector Scheme 18 (Land-based) recognised by Build UK. It is designed to support the development of an industry framework for skills development and progression in the workplace alongside CSCS.",
    image: { url: "/__l5e/assets-v1/7d357e1d-8b62-4bc6-bfb8-a4f86c403651/screenshot-2020-10-16-at-10.08.26.png", alt: "LISS/CSCS SmartCards" },
    sections: [
      {
        heading: "Introducing LISS/CSCS",
        body: "This is achieved through a SmartCard scheme. To apply for any fully operational SmartCard you must successfully pass the ROLO Health, Safety and Environmental Awareness Course and CITB Touch Screen Test, appropriate to the SmartCard level. Only the CITB Touch Screen Test is required for the Modular Paving industry. For more information on LISS/CSCS, download our free advice leaflet which provides an additional explanation.",
      },
      {
        heading: "How to obtain a LISS/CSCS SmartCard",
        body: "LISS/CSCS SmartCards are only issued once certain requirements are met. Our SmartCards are categorised by industry type and you can view all categories here . The quickest way to apply for a SmartCard is online, however, if you have an urgent query you can contact the team who will reply within 48 hours. apply for a smartcard",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "LISS/CSCS Scheme Booklet 6 May 2025 514kb PDF",
          "Privacy Notice for ROLO Certification & LISS/CSCS 15 Jun 2021 276kb DOCX",
          "LISS/CSCS SmartCards have been redesigned 20 Aug 2020 291kb PDF",
          "Introduction to LISS/CSCS 28 Feb 2019 1901kb PDF",
          "Construction Support Line LISS/CSCS applicants notice 23 Apr 2019 62kb DOCX",
        ],
      },
    ],
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
  },
  "/liss-cscs/accreditation": {
    eyebrow: "LISS/CSCS",
    title: "Industry Accreditation",
    theme: "slate",
    intro: "To meet the requirements of the Construction Leadership Council (CLC) LISS/CSCS develop plans to move all Industry Accreditation (IA) cardholders to a recognised qualification.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply": {
    eyebrow: "LISS/CSCS",
    title: "Apply for a LISS/CSCS SmartCard",
    theme: "slate",
    intro: "Depending on the type of work you or your employee(s) carry out, choose from one of seven industry categories below. This includes New, Update, Renewal or Duplicate SmartCards.",
    sections: [
      {
        heading: "Apply for a LISS/CSCS SmartCard to gain access to commercial land-based sites. Upskill your workforce and develop your own personal career by demonstrating your qualifications, skills and knowledge.",
        body: "Important – before applying please ensure you have passed your ROLO Health, Safety and Environmental Awareness Course and relevant CITB Touch Screen Test (these must have been completed within the last 2 years on application). Please ensure you have checked your land-based qualification(s), if applicable, to help you map your certification to the appropriate LISS/CSCS SmartCard. It's your responsibility to ensure you meet all the criteria for the specific card you’re applying for. If you apply and are later found to be ineligible (e.g., wrong qualifications, missing documents), BALI is under no obligation to refund the application fee. If you're unsure whether you meet the criteria for a specific card, please contact the LISS team, who will be happy to help guide you through the process. Contact by telephone 024 7669 0333 or email. The photo taken at the CITB test centre will be used as a default for the card. If a different photo is preferred, please state this in a supporting document attached to your application. We may request further proof of ID to reflect the different photo to confirm it is a true image of the applicant. ** CARDS CAN TAKE UP TO 28 WORKING DAYS TO PROCESS FROM THE DATE OF SUBMISSION **",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check": {
    eyebrow: "LISS/CSCS",
    title: "Check qualification(s)",
    theme: "slate",
    intro: "It is advisable to map your qualification(s) to the relevant LISS/CSCS SmartCard before making your application. Find out which SmartCard is suited to you based on whether you hold a UK or overseas qualification. By using the Construction Industry App - Smart Check, a free-to-download application for handheld devices and PCs, your LISS/CSCS SmartCard can be read electronically.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/nhss18": {
    eyebrow: "LISS/CSCS",
    title: "NHSS 18 Highway Sector Scheme",
    theme: "blue",
    intro: "The National Highways Sector Scheme 18 (NHSS18) is the customised management system for landscaping and the environment (including ecology) and is a mandatory requirement for all contractors working for Highways England and other infrastructure providers.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "National Highways Sector Scheme 18 for the Natural Environment and Landscape, including Ecology for Infrastructure.",
        body: "NHSS18 reflects requirements embodied in EN IS09001:2015 Quality Management system with specific relevance to Landscape Construction and Maintenance, Arboriculture, Application and Management of Pesticides, Amenity, Ecology and Environmental Management and Countryside Management. The scheme aims to ensure that Organisations working on roads have a trained and competent workforce. Sector Schemes are designed to provide an industry benchmark, ensuring all processes are planned and demonstrate continually improving standards, promoting confidence in quality management systems by the provision of a robust and transparent system. How to obtain accreditation? Initially, you will need to familiarise yourself with the scheme document, which can be found on the NHSS18 Schedule of Suppliers website. An updated version of Appendix S can be downloaded from this page. Please note this document is advisory and is subject to change but is seen as best practice. Accreditation can be achieved through one of the following UKAS Registered Certification Bodies: This list is not exhaustive but you must only use a UKAS Registered Certification Body (CB). Advice on the current accreditation status of certification bodies should be sought directly from UKAS by calling +44(0)17 8442 9000. The Schedule of Suppliers list for NHSS18 will give you information on who is registered and for which parts of the document.",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Appendix S 4 Aug 2020 88kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
  },
  "/liss-cscs/rolo": {
    eyebrow: "LISS/CSCS",
    title: "ROLO Health, Safety & Environmental Awareness",
    theme: "blue",
    intro: "ROLO (Register of Land-based Operations) is recognised by Build UK as one of the leading Health, Safety and Environmental Awareness Courses in the UK, designed exclusively for the Land-based industries by landscaping professionals. ROLO was developed and is owned by the British Association of Landscape Industries to raise the standard of health and safety, environmental awareness, and reduce the risk of accidents in the workplace. It also encourages employers to keep a record of workers in the Land-based sector who have achieved a recognised level of competence.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "Why is ROLO important?",
        body: "The Department of Trade & Industry made it a ‘duty of care’ that all trade bodies ensure that their members are adequately trained in health and safety and that all employers should demonstrate their personnel are correctly trained. In July 2014 the United Kingdom Contractors Group (UKCG) officially recognised BALI’s ROLO Health, Safety and Environmental Awareness Course under its UKCG Health and Safety Training Standard, now known as Build UK. Their Standard Document can be found here.",
      },
      {
        heading: "How long are ROLO certificates valid for?",
        body: "ROLO is a prerequisite for anyone applying for a LISS/CSCS SmartCard. Certificates are valid for five years, but applicants must ensure the course has been completed within the last two years when applying for a LISS/CSCS SmartCard. Before the five years runs out, the relevant refresher course can be completed.",
      },
      {
        heading: "ROLO Operative courses",
        body: "The ROLO Operative courses are an introductory health and safety qualification and a precursor to obtaining a LISS/CSCS card. The training covers the basics of Health & Safety law, regulations, risk assessment, hazard awareness, protective equipment, electrical awareness, excavations, work at height, PUWER, LOLER and more. ROLO Operative courses can now be taken online through a limited number of BALI-approved Training Providers. Alternatively, you can view the complete directory of Training Providers offering face-to-face courses below.",
      },
      {
        heading: "ROLO Supervisor and Manager courses",
        body: "The ROLO Supervisor and Manager courses have been developed by the British Association of Landscape Industries and offer an alternative route in achieving the Land-based industry skills scheme (LISS) and/or the Construction skills certification scheme (CSCS). Both these courses have been approved fully by the CSCS and Build UK as being equivalent to the CITB SSSTS and SMSTS courses and will provide the only route for practicing Supervisors and Managers in the land-based industry to achieve their LISS/CSCS cards. Please note: The correct level ROLO course will be a requirement for all Supervisor and Manager level cards.",
      },
      {
        heading: "How are the ROLO courses delivered?",
        body: "Operative courses are delivered face-to-face or online, and the Supervisor and Manager courses have a blended learning approach that starts with an online e-learning course, before moving onto the tutor led course, delivered either face to face or online. The approved courses are as follows: Please Note: All assessments will be undertaken online.",
        bullets: [
          "Operative course – 1 day (face-to-face or online)",
          "Supervisor course – 2 days (plus e-learning element)",
          "Supervisor refresher course – 1 day (plus e-learning element)",
          "Manager course – 3 days (plus e-learning element)",
          "Manager refresher course – 2 days (plus e-learning element)",
          "Refresher courses can be booked by those looking to renew their CITB SSSTS or SMSTS courses for their land-based sector position. You must ensure the SSSTS or SMSTS has been completed within the last two years upon application.",
        ],
      },
      {
        heading: "Book a ROLO course",
        body: "Available ROLO Operative, Supervisor and Manager courses can be found below.",
      },
      {
        heading: "Need more help?",
        body: "Click here to access the ROLO online website. If you need further assistance, please do not hesitate to contact the team at liss@bali.org.uk .",
      },
    ],
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
  },
  "/membership": {
    eyebrow: "Membership",
    title: "Membership of BALI",
    theme: "green",
    intro: "Become a member of the British Association of Landscape Industries and access exclusive benefits designed to help your business grow, thrive, and stand out.",
    sections: [
      {
        heading: "Why Join BALI?",
        body: "When you become a BALI member, you're joining a nationwide network of accredited landscaping professionals — committed to excellence, innovation, and leadership. Whether you're a contractor, designer, supplier, or student, our tailored support helps you raise your profile, win business, and develop your team. What BALI Offers You: Apply Now Learn about our mission and values",
        bullets: [
          "Accreditation that sets you apart",
          "Free HR and health & safety support",
          "Digital marketing and business advice",
          "Discounts on tools, insurance, and services",
          "Access to exclusive events and training",
          "Use of the BALI Accredited badge — trusted by clients",
        ],
      },
      {
        heading: "Key Membership Benefits in Action",
        body: "Free HR & Employment Law Support: All members get a complimentary One-to-One HR Review with Quest, our trusted partner. Health & Safety Advice: You don’t need to go it alone. BALI membership includes tailored health & safety support — from compliance to documentation. Members of the Association can save thousands of pounds by taking advantage of our vast membership benefit portfolio, including HR and health & safety support, digital marketing advice, insurance, recruitment and much more.",
        bullets: [
          "HR Health Check",
          "Employment Law updates",
          "Expert advice and templates",
          "Recruitment best practices",
          "H&S Health Check",
          "Risk assessments & policy templates",
          "Ongoing access to expert advisors",
        ],
      },
      {
        heading: "BALI’s Mission Supports You",
        body: "We represent, support and accredit the landscape industry — providing training, professional advice and opportunity to members, and quality assurance to their clients. Our membership is more than a list — it’s a network, a benchmark, and a support system built around you.",
      },
      {
        heading: "Get in Touch With Our Team",
        body: "Need help choosing the right membership category or completing your application? Email: membership@bali.org.uk Call +44(0)24 7669 0333.",
      },
      {
        heading: "Membership Categories",
        body: "BALI offers nine membership categories to suit every kind of business or individual. Click below to explore the right one for you, review the application process, fees, and benefits.",
      },
      {
        heading: "accredited contractor",
        body: "This membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance",
      },
      {
        heading: "accredited designer",
        body: "The British Association of Landscape Industries is committed to continually improving the landscape sector and sets high standards for its Accredited Designer members",
      },
      {
        heading: "accredited supplier",
        body: "This membership category can be a business, section or division of a business that supplies quality materials and equipment",
      },
      {
        heading: "accredited group",
        body: "Accredited Group membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance",
      },
      {
        heading: "accredited dso",
        body: "Accredited Direct Service Organisation (DSO) membership is for the grounds maintenance departments of public or local authorities",
      },
      {
        heading: "international",
        body: "International membership is ideal for contractors who carry out hard and soft landscaping and/or grounds maintenance work and operate outside of the UK and the Channel Islands",
      },
      {
        heading: "associate",
        body: "Associate membership is for those trading for less than two years and are looking to explore the benefits of being a British Association of Landscape Industries member",
      },
      {
        heading: "training provider",
        body: "Perfect for individual trainers, commercial training organisations, FE and HE colleges and universities delivering land-based academic and skills training",
      },
      {
        heading: "student",
        body: "This category of membership is for students attending commercial training organisations, FE and HE colleges and universities",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/code": {
    eyebrow: "Membership",
    title: "Code of Conduct",
    theme: "green",
    intro: "Code of Conduct",
    sections: [
      {
        heading: "Continued membership of the Association is dependent upon agreement to abide by the Association’s Code of Conduct detailed below:",
        body: "",
        bullets: [
          "To uphold the standing of the British Association of Landscape Industries, its members, and the wider landscape industry by seeking to achieve and maintain the highest standards of business and professional expertise",
          "To provide services only within their areas of competence and be responsible for the actions of all their staff and sub-contractors",
          "To use appropriately trained staff and ensure on-going staff training and development",
          "To operate in an environmentally, ethically, and commercially sustainable manner",
          "To address client concerns promptly, maintaining professionalism and courtesy, and seek to negotiate an equitable solution in the case of a dispute",
          "To cooperate fully with the Dispute Resolution Service (applicable to Accredited Contractor and Accredited Designer members only)",
          "To identify and meet customer, legislative and regulatory requirements",
          "To use the current ‘BALI Accredited’ logo appropriately (applicable to Accredited Contractor, Accredited International, Accredited Group, Accredited DSO, Accredited Supplier and Accredited Designer members only)",
          "To maintain a satisfactory standard of workmanship and professional conduct, which may be subject to inspection at any time and will be subject to the association’s Quality Standards Review",
          "To ensure the regular payment of the annual membership fee",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality": {
    eyebrow: "Membership",
    title: "Association Quality Standard",
    theme: "green",
    intro: "For the purposes of this standard, “quality” is defined as being able to:",
    sections: [
      {
        heading: "What is Quality?",
        body: "“consistently and systematically deliver what the client can reasonably expect”",
      },
      {
        heading: "Purpose",
        body: "The purpose of this standard is to ensure that British Association of Landscape Industries' Accredited members can demonstrate that they have sufficient commitment, systems, skills, resources and controls in place to consistently meet relevant customer, legislative and regulatory requirements in a measured and professional manner.",
      },
      {
        heading: "Introduction",
        body: "Our Association is committed to continuous improvement of standards within the landscape industry. This standard has been established to enable organisations wishing to apply for Accredited membership to clearly see the requirements of the association. It is the benchmark for assessors completing the vetting of an applicant organisation and the re-vetting of existing members via the Quality Standard Review (QSR) process. We recognise that our members and prospective member companies come in many shapes and sizes, and the standard has been designed to allow a business to meet the requirement in a variety of differing ways, appropriate to its needs, it is the job of our skilled vetting officers to understand, not to dictate how you meet the standard. Whilst the Vetting and QSR processes are in place to monitor quality our members deliver, it is intended to be a very supportive and informative process with many members commenting on the value the vetting officer has provided their business as result of undergoing a vetting or QSR visit. The British Association of Landscape Industries' Quality Standard is broken into three key areas, follow the links below to reveal the requirements of the standard and explore some example documents that may assist your business in meeting the requirements during your Vetting or QSR visit.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/terms": {
    eyebrow: "Membership",
    title: "Terms of Membership",
    theme: "green",
    intro: "British Association of Landscape Industries (“BALI” and/or “we/our/us”)",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "Terms of Membership",
        body: "These are the standard terms and conditions of membership of BALI (which supplement the provisions contained in the Articles of Association). They may be varied by the Board of Directors. Notice of any variation will be given to members. The current version of the terms and conditions is available at https://www.bali.org.uk/members/terms-of-membership/ . These terms and conditions along with your application form and the provisions of the Articles of Association form the agreement (“Agreement”) between each member and BALI.",
      },
      {
        heading: "Applying for membership",
        body: "Each member (“you”) agrees to comply with the terms and conditions in force.",
      },
      {
        heading: "Membership renewal",
        body: "Each member (“you”) agrees to comply with the terms and conditions in force.",
      },
      {
        heading: "1. General Terms & Conditions",
        body: "1.1 The membership year runs every year from 1 April – 31 March of the following year. 1.2 You agree to pay to us, on demand, the BALI annual membership fee (as set by us from time to time) and any other fees due. 1.3 Your membership (and therefore the Agreement between us) will automatically renew each year for another membership year unless you give written notice of cancellation no later than two months prior to the end of a membership year. In other words, notice of cancellation must be given to us no later than 31 January to end the agreement at the end of the current membership year. Non-payment of your membership fees is not accepted as notice of cancellation of your membership (or termination of our Agreement). 1.4 If there is any default or delay of a direct debit payment or any other payments due which has not been waived or authorised in writing by us, we have the right to request immediate payment of the full balance of the year’s membership fees and any other sums due. 1.5 You agree to abide and comply with the associations Code of Conduct (as amended by us from time to time). The latest version of which is set out on our website here . 1.6 You agree to cooperate fully with the Associations Quality Standards Review Procedure which may include both office and site visits performed at intervals determined by the Board and subject to any Dispute Resolution findings.",
      },
      {
        heading: "2. Use of Information",
        body: "2.1 As part of your application(s) for membership (including renewal applications) and/or during your membership of BALI, you may provide personal data to us (“Personal Information”). This Personal Information will be used by us for (i) considering your application(s) and (ii) if you are accepted, contacting you and/or providing information to you in respect of us, your membership and/or events organised by and/or associated with us. 2.2 In addition, we have a number of associated organisations who provide products, goods and/or services to our members. A current list of such associated organisations can be found here: bali.org.uk . If you are accepted as a member, we will provide your contact information details to such associated organisations so that they can contact you directly to discuss their products, goods and/or services. If you do not want us to provide and/or to continue to provide your information to our associated organisations, please inform us in writing to Membership Department, BALI, Landscape House, Stoneleigh Park, Kenilworth, Warwickshire, CV8 2LG. 2.3 We will not otherwise sell, distribute, or lease your Personal Information to third parties unless we have your permission or are required by law to do so. 2.4 If you cease to be a member, we will, within 12 months, delete and not use your Personal Information (save that we may, where reasonably justified, keep, and use information for statistical purposes and/or records of any and all complaints that we have received in respect of you and/or your employees, contractors, directors and/or shareholders). 2.5 If you confirm you no longer wish to continue with your application for membership, we will only retain personal information on our database for a period of 12 months.",
      },
      {
        heading: "3. Committee Members",
        body: "3.1 You hereby agree that for the purpose of the “Use of Information” section above, BALI shall include any committee(s) of BALI (including, without limitation, any regional committee(s) (“Committees”). 3.2 If you at any time are appointed to be a member of a committee, you may in the course of your duties be provided with (or access to) Personal Information in respect of other members of BALI. You hereby undertake that you will only use such Personal Information on behalf of BALI in accordance with the provisions set out in the “Use of Information” section above and any other instructions provided to you and/or the committee by us and agree to indemnify and keep us indemnified against any losses, damages costs and/or expenses that we may incur as a result of you failing to comply with this provision.",
      },
      {
        heading: "4. Limitation of Liability",
        body: "4.1 By applying for membership you irrevocably accept that BALI shall have no liability to you, to the extent permitted by law, for any losses, damages, costs and/or expenses that you may incur as a result of: (i) BALI using your information in accordance with the provisions set out above; and (ii) You relying upon and/or using any information provided to you by us and/or any of our associated organisations; and (iii) You attending any events organised by us and/or any of our associated organisations; and (iv) You deciding to order and/or use and/or receive any goods, services and/or products from us and/or any of our associated organisations. 4.2 You agree that the limitations of liability set out above are reasonable and further agree that if one or more of the above limitations and/or exclusions are at any time found to be unenforceable, the remaining limitations and/or exclusions of liability shall remain enforceable. 4.3 Without prejudice to the above, our total liability to you, shall be limited in any event to the annual member subscriptions that you have paid in the year to which any claim may relate. 4.4 Nothing in these terms & conditions excludes and/or limits liability for fraud, death and/or personal injury.",
      },
      {
        heading: "5. Law & Jurisdiction",
        body: "5.1 These terms & conditions and any dispute or claim arising out of or in connection with them and/or your membership (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales. 5.2 You irrevocably agree with us that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these terms & conditions and/or your membership (including non-contractual disputes or claims). Please note: this clause applies regardless of where your business is based.",
      },
      {
        heading: "BALI CODE OF CONDUCT (Revised Nov 2014)",
        body: "Continued membership of the association is dependent upon agreement to abide by the association’s Code of Conduct detailed below: a) To uphold the standing of BALI, its members, and the wider landscape industry by seeking to achieve and maintain the highest standards of business and professional expertise. b) To provide services only within their areas of competence and be responsible for the actions of all their staff and sub-contractors. c) To use appropriately trained staff and ensure on-going staff training and development. d) To operate in an environmentally, ethically, and commercially sustainable manner. e) To address client concerns promptly, maintaining professionalism and courtesy, and seek to negotiate an equitable solution in the case of a dispute. f) To cooperate fully with the BALI dispute resolution service (applicable to Accredited Contractor and Accredited Designer members only). g) To identify and meet customer, legislative and regulatory requirements. h) To use the current ‘BALI Accredited’ logo appropriately (applicable to Accredited Contractor, Accredited International, Accredited Group, Accredited DSO, Accredited Supplier and Accredited Designer members only). i) To maintain a satisfactory standard of workmanship and professional conduct, which may be subject to inspection at any time and will be subject to the association’s Quality Standards Review. j) To ensure the regular and timely payment of the annual membership fee.",
      },
    ],
    ctaPrimary: { label: "Join the Association", href: "/join" },
    ctaSecondary: { label: "View Code of Conduct", href: "/membership/code" },
  },
  "/news": {
    eyebrow: "News",
    title: "Latest News",
    theme: "purple",
    intro: "Volunteers from Jack Moody Group have recently completed a new community landscaping project in Cheslyn Hay",
    image: { url: "/__l5e/assets-v1/731280f5-5ca5-49ee-9543-e7d1c1ebcc68/large_cheslyn-hay-min.jpeg", alt: "Latest News" },
    sections: [
      {
        heading: "Water ways: latest government white paper brings a flood of landscaping opportunity",
        body: "From climate-driven floods and droughts to sewage pollution in our rivers, water has become a hot topic in landscaping and beyond, so much so that the government launched a major review after coming to power in 2024.",
      },
      {
        heading: "Green-tech supports CLECO with large scale woodland creation scheme",
        body: "Green-tech has supplied planting protection products for a 34-hectare woodland creation scheme in Cheshire, which was delivered by CLECO on behalf of a Local Authority.",
      },
      {
        heading: "Her Royal Highness, The Duchess of Gloucester to visit Wyevale Nurseries",
        body: "Her Royal Highness, The Duchess of Gloucester will visit Wyevale Nurseries in Hereford on July 13, where she will tour the nursery and meet members of the team.",
      },
      {
        heading: "Are you risking a fine by the Information Commissioner’s Office?",
        body: "Most landscaping businesses are likely to be required by law to register with – and pay an annual fee to – the Information Commissioner’s Office (ICO) or risk a significant fine.",
      },
      {
        heading: "Wyevale Nurseries supports landmark tree planting project at Cotswolds Distillery",
        body: "Wyevale Nurseries has supported a major tree planting and landscape enhancement initiative at Cotswolds Distillery in collaboration with Gloucestershire County Council’s Greener Gloucestershire Trees Team and landscape architects Rachael White Designs",
      },
      {
        heading: "STIHL GB launches competition to find Britain’s biggest fan",
        body: "STIHL GB has launched the ‘STIHL 100 Fan Award’ competition as part of its global centenary celebrations. The exclusive Instagram competition, which closes on 26th June, turns the spotlight on the brand’s loyal fans and invites STIHL enthusiasts to compete for the title of ‘STIHL’s biggest fan’, with big prizes to be won.",
      },
      {
        heading: "Sam Finch has been crowned the 2026 Young Horticulturist of the Year!",
        body: "Rochdale Town Hall hosted the Grand Final on Saturday 16th May, where eight finalists competed across a series of challenging rounds for the national title.",
      },
      {
        heading: "FutureScape Global: Shaping the future together",
        body: "FutureScape Global is the premier B2B event dedicated to the future of landscaping, public realm development, and outdoor living across Saudi Arabia and the wider region.",
      },
      {
        heading: "Research links green space quality and proximity to mental health",
        body: "The benefits of green space for mental health are more closely tied to its quality and proximity than its quantity and accessibility, according to a new study. Page 1 of 305",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI AGM 2025 highlights industry growth, resilience, and future ambitions 18 Sep 2025 117kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Read Landscape News", href: "/news/magazine" },
    ctaSecondary: { label: "All news", href: "/news" },
  },
  "/news/magazine": {
    eyebrow: "News",
    title: "Landscape News Magazine",
    theme: "purple",
    intro: "Landscape News is BALI's official member magazine, filled with great stories about member projects, helpful business advice, and thought-provoking opinion, along with news and events updates from the UK's biggest trade association for the landscape industries.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "In this issue:",
        body: "If you've got a story you want to share with our readers, email your ideas to our editor at landscapenews@bali.org.uk",
        bullets: [
          "Court is in session - Three decades behind the scenes with the \"King of Chelsea\", Mark Gregory",
          "Is your brand working hard enough for you? - Expert advice on knowing when your brand needs a refresh and how to do it",
          "From natural to nourishing - A look at the domestic design trends set to shape 2026",
          "Smiley, happy people - Why a people first philosophy can solve the industry's ills",
        ],
      },
      {
        heading: "Winter 2025:",
        body: "In this issue:",
        bullets: [
          "Isn't that Grand? - An exclusive interview with the BALI Awards Grand Award winner 2025, The Outdoor Room",
          "It's only natural: the rise of natural pools in UK garden landscapes - Ellicar invites us into this eco-friendly world of harmony with the environment",
          "Shout about it - Our social media guru reveals the top tips and tricks for a successful social media strategy",
          "Under the surface - Tim O'Hare Associates examine the importance of soil choice in landscaping",
        ],
      },
      {
        heading: "Autumn 2025:",
        body: "In this issue:",
        bullets: [
          "Inside the mind of a BALI awards judge - Chair of the judging panel, John Melmoe, reveals the secrets to a successful awards entry",
          "Weathering the storm - In a cautious market, designer Adam Vetere shares how creativity and personalisation can help you to thrive",
          "Pitch perfect - North Hort's Gareth Jones lifts the lid on finding success with celebrity clients",
          "First impressions - How to make the most of probationary periods and set your employees up for success",
        ],
      },
      {
        heading: "Summer 2025:",
        body: "In this issue:",
        bullets: [
          "Unhappy clients: what can you do when a dispute arises? - Discover how BALI's impartial ombudsman can help resolve client disputes",
          "Going for gold - We relive five glorious days at Chelsea and how BALI members bagged a mammoth medal haul",
          "From eye to bee - Garden designer Jamie Langlands explores how and why you should embrace our natural landscape in your designs",
          "A call to arms - How ex-military personnel can offer a wealth of transferable skills to landscaping",
        ],
      },
    ],
    ctaPrimary: { label: "Read Landscape News", href: "/news/magazine" },
    ctaSecondary: { label: "All news", href: "/news" },
  },
  "/privacy": {
    eyebrow: "Legal",
    title: "Privacy Policy",
    theme: "slate",
    intro: "This policy (together with our Terms and Conditions and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    sections: [
      {
        heading: "British Association of Landscape Industries (The) (\"We\") are committed to protecting and respecting your privacy.",
        body: "By visiting bali.org.uk OR baliawards.co.uk OR golandscape.co.uk you are accepting and consenting to the practices described in this policy. In this policy “Data Protection Legislation” shall mean the Data Protection Act 1998 up to but excluding 25th May 2018 and thereafter the General Data Protection Regulation (EU 2016/679) (“GDPR”) any national implementing laws, regulations and secondary legislation as amended from time to time unless and until the GDPR is no longer directly applicable in the UK when it shall mean any successor legislation to the GDPR or Data Protection Act 1998. For the purpose of the Data Protection Legislation, the data controller is British Association of Landscape Industries (The).",
      },
      {
        heading: "Information we collect from you",
        body: "We will collect and process the following data about you:",
      },
      {
        heading: "Information you give us",
        body: "This is information about you that you provide to us by filling in forms on our site www.bali.org.uk OR www.baliawards.co.uk OR www.golandscape.co.uk or by corresponding with us by phone, email or otherwise. It includes information you provide when you contact us using our general enquiry form, enquire for membership, enquire about our LISS/CSCS or ROLO services, subscribe to one or more of our marketing communications including publications and e-communications, entering a competition, promotion or survey, enquiring about member services and reporting a problem with our site. The information you provide to us may include your full name, private and/or business address, email address and phone number, as well as financial and credit card information, personal description and photographs.",
      },
      {
        heading: "Information we collect about you",
        body: "In regard to each of your visits to our site we will automatically collect the following information: technical information, including your Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform; information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our site (including date and time), products or services you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any phone number used to call our general enquiry number.",
      },
      {
        heading: "Information we receive from other sources",
        body: "This is information we receive about you if you use any of the other websites we operate or the other services we provide. We are working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies). We will notify you when we receive information about you from them and the purposes for which we intend to use that information.",
      },
      {
        heading: "Cookies",
        body: "Our website uses cookies to distinguish you from other users of our website.",
      },
      {
        heading: "Uses made of the information",
        body: "We use information held about you in the following ways: Information you give to us. We will use this information: to carry out our obligations arising from any contracts entered into between you and us and to provide you with the information, products and services that you request from us for example making a booking for an event or registering an entry into a competition; to provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about; to notify you about changes to our service; to ensure that content from our site is presented in the most effective manner for you and for your computer. to communicate with you according to your preference settings including regular e-communications and printed mailouts. Information we collect about you. We will use this information: to administer our site and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes; to improve our site to ensure that content is presented in the most effective manner for you and for your computer; to allow you to participate in interactive features of our service, when you choose to do so; as part of our efforts to keep our site safe and secure; to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you; to make suggestions and recommendations to you and other users of our site about goods or services that may interest you or them.",
      },
      {
        heading: "Information we receive from other sources",
        body: "We will combine this information with information you give to us and the information we collect about you. We will use this information and the combined information for the purposes set out above (depending on the types of information we receive). British Association of Landscape Industries (The) (\"We\") are committed to protecting and respecting your privacy and will not, under any circumstances, share your personal data with any third party organisation, company or individual outside of the association and our membership other than those trusted companies contracted by BALI to deliver a required service to members (including but not limited to the design, mailing of Landscape News and BALI’s Who’s Who Landscape Directory).",
      },
      {
        heading: "Disclosure of your information",
        body: "You agree that we have the right to share your personal information with: Any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006. Selected third parties including: business partners, suppliers and sub-contractors for the performance of any contract we enter into with [them or] you; advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. We do not disclose information about identifiable individuals to our advertisers, but we will provide them with aggregate information about our users (for example, we may inform them that 500 men aged under 30 have clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target (for example, women in SW1). We may make use of the personal data we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience; analytics and search engine providers that assist us in the improvement and optimisation of our site; We will disclose your personal information to third parties: In the event that we sell or buy any business or assets, in which case we will disclose your personal data to the prospective seller or buyer of such business or assets. If British Association of Landscape Industries (The) or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets. If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of British Association of Landscape Industries (The), our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.",
      },
      {
        heading: "Where we store your personal data",
        body: "All information you provide to us is stored on our secure servers. Any payment transactions will be encrypted using SSL technology. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site (including the member’s area), you are responsible for keeping this password confidential. We ask you not to share your password with anyone. Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.",
      },
      {
        heading: "General Data Protection Regulation (GDPR)",
        body: "The General Data Protection Regulation (GDPR) (EU) 2016/679 is a regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area. It also addresses the export of personal data outside the EU and EEA. The GDPR aims primarily to give control to citizens and residents over their personal data and to simplify the regulatory environment for international business by unifying the regulation within the EU. Your data is controlled and processed in accordance with the General Data Protection Regulation (GDPR). Any personal data is processed manually and electronically for the purposes of fulfilling our contractual obligations to you, or providing quotations to you before entering into a contract to provide products and services, namely: BALI will not pass your personal data to any other parties, without your consent, other than where mentioned within this policy, or where required to by law. BALI will pass on limited details to the following for the purpose of providing services only; Any recommended introductions or partnerships we feel would be beneficial to you will only be agreed by you before any details are passed on, either by contacting you or referring to your preferences chosen within the terms of business. BALI use appropriate industry standard software applications to manage schedules and communicate electronically. Any personal information, including your consent status is held within an electronic database (or customer relationship management system) which is secured through password, SSL and encryption. Electronic communications are generally made through Microsoft Outlook. In accordance with The General Data Protection Regulation (GDPR) (EU) 2016/679 we will only store personal records for 12 months for ‘prospective’ members that have not entered into a contractual arrangement with us and agreed to our membership terms and conditions. These include organisations and/or individuals who have contacted us either through email, telephone, at events or through the website(s) www.bali.org.uk OR www.baliawards.co.ukOR www.golandscape.co.uk. For non-member individuals or organisations who have not entered into any contractual arrangement with us or accepted our membership terms and conditions MUST opt-in to receive any non-member related products or services provided by us in accordance with The General Data Protection Regulation (GDPR) (EU) 2016/679. All non-member organisations or individuals reserve the right to opt-out of any communication, including e-communication, at any time by updating their preferences or contacting BALI, Landscape House, Stoneleigh Park, Nr Kenilworth, CV8 2LG or contact@bali.org.uk . For paying members, as long as their membership status with us remains ‘Active’ we will continue to hold personal data that is relevant to the services we provide to them as an organisation or individual, until such a time that we are notified in writing (written letter or email) that a member organisation or individual no longer wishes to continue with the contract of membership, which is then referred to the membership terms and conditions. BALI would like to send relevant and appropriate information on complimentary services that may be suitable to you which form part of the services we offer to members and customers. Consent may be removed for all non-service related communication method(s) at any time by updating your preferences with us or by contacting any person of the membership team on contact@bali.org.uk .",
        bullets: [
          "The provision of membership services, advice and support",
          "Recommending process changes, products, affiliates and services based on your requirements",
          "Managing and administering your account",
          "Your HR Services benefit, provided by Quest",
          "Surveying our members",
          "For the purpose of progressing membership applications and vetting visits",
          "Producing both the printed and digital Who’s Who Landscape Directory, with the latter service provided by Issuu and published as an unlisted publication on issuu.com",
          "Producing and delivering Landscape News to customers",
          "E-communications processing where you have consented to receive e-communications",
          "Opportunities to provide PR to you through our network",
          "Signposting enquirers to your services",
          "Financial management including credit reference agencies",
        ],
      },
      {
        heading: "Your rights",
        body: "You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by unchecking certain boxes in our preference centre. You can also exercise the right at any time by contacting us at BALI, Landscape House, Stoneleigh Park, Nr Kenilworth, CV8 2LG or contact@bali.org.uk . Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.",
      },
      {
        heading: "Privacy Notice for ROLO Certification and LISS/CSCS SmartCards",
        body: "Your data is controlled and processed in accordance with the General Data Protection Regulation (GDPR). Any personal data is processed manually and electronically for the purposes of fulfilling our contractual obligations to provide the following products and services: The Association will not pass your personal data to any other parties, without your consent, other than where mentioned within this notice, or where required to by law. To fulfil our requirements to you we will pass on personal details to the following for the purpose of producing and providing your LISS/CSCS SmartCard: The technical production of LISS/CSCS SmartCards is carried out by Teleperformance Limited in association with the Construction Skills Certification Scheme. You may receive automated emails to notify you of the status of your application directly from CSCS. For LISS/CSCS SmartCard applicants this will be referred to as the Construction Skills Certification Scheme (CSCS) in some correspondence. Your personal information, including your consent status, is recorded on to our client management systems, Workbooks CRM. The latest date of consent is recorded against each individual person. This is a hosted platform provided by ISO27001 accredited organisation, Workbooks Online Limited, Reading, UK. Data is held in Tier 1 data centres in the UK with 24x7 manned security. We use industry-standard software applications to manage schedules and communicate electronically. Any personal information, including your consent status, is held within client folders on electronic systems and is secured by password, PIN, pattern on biometric security as a minimum. Electronic Communications for the reasons stated above are generally made through Microsoft Outlook, or Mail for iOS. If you believe any data we hold is incorrect, personal information has changed, or you wish to remove personal information please contact any member of the team on liss@bali.org.uk .",
        bullets: [
          "The administration of the Register of Land-based Operations (ROLO) Certification",
          "The application for a Land-based Industry Skills Scheme/Construction Skills Certification Scheme (LISS/CSCS) SmartCard",
          "The production of a physical card",
          "Managing and administering your account",
          "Construction Skills Certification Scheme",
          "Teleperformance Limited",
          "Icreon UK Limited",
        ],
      },
      {
        heading: "Access to information",
        body: "You can request access to deletion of or correction of your personal data or can request it is transferred to another person by contacting us at BALI, Landscape House, Stoneleigh Park, Nr Kenilworth, CV8 2LG or contact@bali.org.uk . We may make a small charge for any copies of your personal data.",
      },
      {
        heading: "Changes to our privacy policy",
        body: "Any changes we make to our privacy policy in the future will be posted on this page. Please check back frequently to see any updates or changes to our privacy policy. Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to BALI, Landscape House, Stoneleigh Park, Nr Kenilworth, CV8 2LG or contact@bali.org.uk . If you are not happy with the way in which we have handled your data please direct your complaint in writing to BALI Chief Executive, Landscape House, Stoneleigh Park, Nr Kenilworth, CV8 2LG. Alternatively, or in the event your complaint is not resolved, you have the right to complain to the Information Commissioners Office. The information on this page was last updated on Tuesday, 9 August 2022.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/cookies": {
    eyebrow: "Legal",
    title: "Cookie Policy",
    theme: "slate",
    intro: "There are a number of ways we collect your data. We process your data to provide a service to you, whether you make an enquiry, locate a member, log in to your member's area (applicable to members only) or by purchasing a product or service. When you complete a form, we collect information which we will use to respond to your enquiry. In order to satisfy your request, we ask for relevant contact details such as name, email address and telephone number. We may also ask for your geographic area and industry specialisms. This depends on which enquiry form you are completing.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "We collect some information",
        body: "Your IP (Internet Protocol) address Our website collects your IP address automatically. This is the unique address of the device you are using to access our site. The IP address, on its own, does not identify you as an individual but gives us information that helps us better understand site usage, and therefore enhances our services and website experience for you and others. We use cookies Cookies are small pieces of data that are downloaded to your computer or mobile device when you visit a website or application. Some areas of our website would not function without them, some cookies help provide a better experience for you, and some help us to understand how people use our website. They help us understand who new users are, who our existing ones are and how you have reached our site. They remember details in order that you don’t have to enter them multiple times. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of our website functionality. We use Google Analytics Google Analytics is a tool that helps us understand how you interact with the website. Examples of statistics gathered include when you visit it, how long you stay on pages, what device type you are using (e.g. desktop or mobile), what page you left from and so forth. Information is collected as per Google’s terms and conditions, and associated privacy notices which we suggest you read. Information is anonymised, and any single piece of data contained within Google Analytics does not solely identify an individual. How we share your information We never sell your information to other companies. We will only share your information if you have consented for us to do so, or in accordance with our privacy policy . If we need to share your personal information for a new reason, we will ask you for your consent.",
      },
      {
        heading: "How we use information about you",
        body: "Where you have submitted an enquiry, we will use your information as detailed within our privacy policy and process it lawfully in accordance with the General Data Protection Regulation (GDPR). We will only directly market to you if you have given us consent (e.g. signed up for our newsletter). If you have visited our website and consented to allow cookies we reserve the right to make contact with you or an individual of your company where there is a clear legitimate interest made.",
      },
      {
        heading: "Where we store your information",
        body: "All data processed through our website is secure. We use a secure and redundant network housed in a fully ISO accredited (ISO27001 and ISO9001) data centre based in London, manned 24/7. Where we provide further services to you, we may store your information on other secure systems in accordance with our privacy policy .",
      },
      {
        heading: "Links to external “Third Party” websites",
        body: "This website may contain links to other websites we feel may be useful to you. Third-party websites may have different terms for using and sharing your data. When you visit another website, please take time to read their terms of use and privacy notice(s). We do not endorse, represent or control the content or security provisions of any other website.",
      },
      {
        heading: "The right to access your information",
        body: "You have the right to: To further information:",
        bullets: [
          "Request a copy of your information from us",
          "Ask us to change something that is incorrect or remove you from our database",
          "Unsubscribe from any newsletters or mailings that you have previously consented to receive",
          "Email contact@bali.org.uk",
          "Call +44(0)24 7669 0333",
          "Write to British Association of Landscape Industries (BALI), Landscape House, Stoneleigh Park, Warwickshire, CV8 2LG.",
        ],
      },
      {
        heading: "Updates to this document",
        body: "This document was last updated on 1st August 2019. Any changes or iterations of this, or any related document will be uploaded and available publicly on this website. They will become immediately enforceable.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/terms": {
    eyebrow: "Legal",
    title: "Terms and Conditions",
    theme: "slate",
    intro: "This acceptable use policy sets out the content standards that apply when you upload content to our site, make contact with other users on our site, link to our site, or interact with our site in any other way.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "Who we are and how to contact us",
        body: "bali.org.uk or baliawards.co.uk or golandscape.co.uk is a site operated by the British Association of Landscape Industries (The) (\"We\"). We are registered in England and Wales under company number 01254410 and have our registered office at BALI, Landscape House, Stoneleigh Park, Nr Kenilworth, Warwickshire, CV8 2LG. We are a limited company. To contact us, please make an enquiry through our enquiry page.",
      },
      {
        heading: "By using our site you accept these terms",
        body: "By using our site, you confirm that you accept the terms of this policy and that you agree to comply with them. If you do not agree to these terms, you must not use our site. We recommend that you print a copy of these terms for future reference.",
      },
      {
        heading: "There are other terms that may apply to you",
        body: "Our Disclaimer also applies to your use of our site and our Booking and Entry Terms may also apply when using and/or accessing baliawards.co.uk or golandscape.co.uk .",
      },
      {
        heading: "We may make changes to the terms of this policy",
        body: "We amend these terms from time to time. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time.",
      },
      {
        heading: "Prohibited uses",
        body: "You may use our site only for lawful purposes. You may not use our site:",
        bullets: [
          "In any way that breaches any applicable local, national or international law or regulation.",
          "In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.",
          "For the purpose of harming or attempting to harm minors in any way.",
          "To send, knowingly receive, upload, download, use or re-use any material which does not comply with our Content Standards.",
          "To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).",
          "To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.",
        ],
      },
      {
        heading: "You also agree:",
        body: "",
        bullets: [
          "Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of our Terms of Website.",
          "Not to access without authority, interfere with, damage or disrupt: - any part of our site; - any equipment or network on which our site is stored; - any software used in the provision of our site; or - any equipment or network or software owned or used by any third party.",
        ],
      },
      {
        heading: "Interactive services",
        body: "Although not currently, we may from time to time provide interactive services on our site. Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated and what form of moderation is used (including whether it is human or technical). We will do our best to assess any possible risks for users (and in particular, for children) from third parties when they use any interactive service provided on our site, and we will decide in each case whether it is appropriate to use moderation of the relevant service (including what kind of moderation to use) in the light of those risks. However, we are under no obligation to oversee, monitor or moderate any interactive service we provide on our site, and we expressly exclude our liability for any loss or damage arising from the use of any interactive service by a user in contravention of our content standards, whether the service is moderated or not. The use of any of our interactive services by a minor is subject to the consent of their parent or guardian. We advise parents who permit their children to use an interactive service that it is important that they communicate with their children about their safety online, as moderation is not foolproof. Minors who are using any interactive service should be made aware of the potential risks to them. Where we do moderate an interactive service, we will normally provide you with a means of contacting the moderator, should a concern or difficulty arise.",
      },
      {
        heading: "Content standards",
        body: "These content standards apply to any and all material which you contribute to our site (Contribution), and to any interactive services associated with it. The Content Standards must be complied with in spirit as well as to the letter. The standards apply to each part of any Contribution as well as to its whole. We will determine, at our discretion, whether a Contribution breaches the Content Standards.",
      },
      {
        heading: "A Contribution must not:",
        body: "",
        bullets: [
          "Be accurate (where it states facts).",
          "Be genuinely held (where it states opinions).",
          "Comply with the law applicable in England and Wales and in any country from which it is posted.",
        ],
      },
      {
        heading: "A Contribution must not:",
        body: "",
        bullets: [
          "Be defamatory of any person.",
          "Be obscene, offensive, hateful or inflammatory.",
          "Promote sexually explicit material.",
          "Promote violence.",
          "Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.",
          "Infringe any copyright, database right or trade mark of any other person.",
          "Be likely to deceive any person.",
          "Breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence.",
          "Promote any illegal activity.",
          "Be in contempt of court.",
          "Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.",
          "Be likely to harass, upset, embarrass, alarm or annoy any other person.",
          "Impersonate any person, or misrepresent your identity or affiliation with any person.",
          "Give the impression that the Contribution emanates from British Assoication of Landscape Industries (The), if this is not the case.",
          "Advocate, promote, incite any party to commit, or assist any unlawful or criminal act such as (by way of example only) copyright infringement or computer misuse.",
          "Contain a statement which you know or believe, or have reasonable grounds for believing, that members of the public to whom the statement is, or is to be, published are likely to understand as a direct or indirect encouragement or other inducement to the commission, preparation or instigation of acts of terrorism.",
          "Contain any advertising or promote any services or web links to other sites.",
        ],
      },
      {
        heading: "Breach of this policy",
        body: "When we consider that a breach of this acceptable use policy has occurred, we may take such action as we deem appropriate. Failure to comply with this acceptable use policy constitutes a material breach of the Disclaimer upon which you are permitted to use our site, and may result in our taking all or any of the following actions:",
        bullets: [
          "Immediate, temporary or permanent withdrawal of your right to use our site.",
          "Immediate, temporary or permanent removal of any Contribution uploaded by you to our site.",
          "Issue of a warning to you.",
          "Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.",
          "Further legal action against you.",
          "Disclosure of such information to law enforcement authorities as we reasonably feel is necessary or as required by law.",
          "We exclude our liability for all action we may take in response to breaches of this acceptable use policy. The actions we may take are not limited to those described above, and we may take any other action we reasonably deem appropriate.",
        ],
      },
      {
        heading: "Which country's laws apply to any disputes?",
        body: "If you are a consumer, please note that the terms of this policy, its subject matter and its formation are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland. If you are a business, the terms of this policy, its subject matter and its formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/disclaimer": {
    eyebrow: "BALI",
    title: "Disclaimer",
    theme: "slate",
    intro: "1 Disclaimer",
    sections: [
      {
        heading: "Access to, and use of, this site is provided by the British Association of Landscape Industries subject to the following terms and conditions (\"Terms\"):",
        body: "1.1 bali.org.uk is the website (\"site\") of the British Association of Landscape Industries (\"BALI\"). BALI makes no warranties, representations or undertakings about any of the content of this site (including, without limitation, any as to the quality, accuracy, completeness or fitness for any particular purpose of such content), or any content of any other website referred to, referred by or accessed by hypertext link through this site (‘third party site’). 1.2 BALI does not endorse or approve the content of any third party site, nor will BALI have any liability in connection with any of them (including, but not limited to, liability arising out of any allegation that the content of any third party site infringes any law or the rights of any person or entity). 2 Copyright 2.1 All rights, including copyright and database right, in BALI site and its contents, are owned by or licensed to the British Association of Landscape Industries, or otherwise used by BALI as permitted by applicable law all rights reserved. 2.2 In accessing BALI site and its contents, you agree that you will access the contents solely for your own private use but not for any commercial or public use. 2.3 Except as permitted above, you undertake not to copy, store in any medium (including in any other website), distribute, transmit, re-transmit, broadcast, modify, or show in public any part of BALI site without the prior written permission of BALI or in accordance with the Copyright, Designs and Patents Act 1988. You also undertake not to incorporate any of this site’s content into or store it in any other website, electronic retrieval system, publication or other work in any other format (whether hard copy, electronic or other) without prior permission from the British Association of Landscape Industries. In order to avoid doubt, framing of this site, or any part of it, is not permitted without express permission. 3 Viruses, Hacking and Other Offences 3.1 You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of-service attack. 3.2 By breaching paragraph 3.1, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately. 3.3 We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any material posted on it, or on any website linked to it. 4 General Terms 4.1 Use of this site constitutes your acceptance of these Terms, which take effect immediately on your first use of the site. BALI reserves the right to change these Terms at any time by posting changes online. 4.2 You are responsible for reviewing regularly information posted online to obtain timely notice of such changes. Your continued use of this site after changes are posted constitutes your acceptance of the Terms as modified by the posted changes. 4.3 Material may not be copied, reproduced, republished, downloaded, posted, broadcast or transmitted in any way except for your own personal non-commercial use. Any other use requires the prior written permission of the British Association of Landscape Industries. You agree not to adapt, alter or create a derivative work from any of the material contained in this site or use it for any other purpose other than for your personal non-commercial use. You agree to use this site only for lawful purposes, and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party. Such restriction or inhibition includes, without limitation, conduct which is unlawful, or which may harass or cause distress or inconvenience to any person and the transmission of obscene or offensive content or disruption of normal flow of dialogue within this site. 4.4 You should always take appropriate advice where you intend to act on any information on this site as to whether such action is suitable in your individual circumstances. You should always take appropriate safeguards against virus protection before downloading information from this site or any third party. 4.5 This site and the information, names, images, pictures, logos and icons regarding or relating to the British Association of Landscape Industries, its products and services (or to third party products and services), is provided \"AS IS\" and on an \"AS AVAILABLE\" basis and to the maximum extent permitted by law without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy. 4.6 In no event will BALI be liable for any damages including, without limitation, indirect or consequential damages, or any damages whatsoever arising from use or loss of use, data, or profits, whether in action of contract, negligence or other tortious action, arising out of or in connection with the use of the site. BALI does not warrant that the functions contained in the material contained in this site will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes it available or any third party site are free of viruses or bugs or represents the full functionality, accuracy, and reliability of the materials. The names, images and logos identifying BALI or third parties and their products and services are proprietary marks of BALI and/or third parties. Nothing contained herein shall be construed as conferring by implication or otherwise any licence or right under any trademark or patent of the British Association of Landscape Industries, or any other third party. 4.7 If any of these Terms should be determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state or country in which these Terms are intended to be effective, then to the extent and within the jurisdiction which that Term or Condition is illegal, invalid or unenforceable, it shall be severed and deleted from the Terms and the remaining terms shall survive, remain in full force and effect and continue to be binding and enforceable. 4.8 Any reference in these Terms to any statute shall be construed as reference to that statute as amended, re-enacted or extended at the relevant time. 4.9 This site is designed to be used by persons resident in the United Kingdom. These Terms shall be governed by and construed in accordance with the laws of England and Wales. Disputes arising here from shall be exclusively subject to the jurisdiction of the courts of England and Wales. 4.10 If these Terms are not accepted in full, you do not have permission to access the contents of this site and therefore should cease using this site immediately.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/sitemap": {
    eyebrow: "Sitemap",
    title: "Site map",
    theme: "slate",
    intro: "All pages on the British Association of Landscape Industries website.",
    sections: [
      {
        heading: "Site Map",
        body: "All pages on the British Association of Landscape Industries website.",
        bullets: [
          "about",
          "what we do",
          "Our Board of Directors",
          "National Landscape Awards",
          "BALI-NCF",
          "landscaping careers",
          "advertise with us",
          "supported charities",
          "RHS Chelsea Flower Show 2025",
          "RHS Chelsea Flower Show Enquiry Form",
          "National Conference 2026",
          "membership",
          "join our association",
          "accredited contractor",
          "accredited designer",
          "accredited supplier",
          "accredited group",
          "accredited dso",
          "international",
          "associate",
          "training provider",
          "student",
          "member login",
          "membership enquiry",
          "Training Provider declaration",
          "Code of Conduct",
          "Association Quality Standard",
          "management responsibility",
          "1.01 - management commitment",
          "1.02 - customer focus",
          "1.03 - responsibility, authority and communication",
          "1.04 - planning",
          "resource management",
          "2.01 - Human Resources, Competence, Training and Awareness",
          "2.02 - Infrastructure",
          "product and service delivery",
          "3.01 - planning",
          "3.02 - customer related processes",
          "3.03 - design control",
          "3.04 - purchasing",
          "3.05 - control of product and service provision",
          "3.06 - customer property and preservation of works",
          "landscape direc...",
          "designer",
          "contractor",
          "supplier",
          "training provider",
          "why choose a member?",
          "search all",
          "Who's Who Directory 2025/2026",
          "latest news",
          "Landscape News",
          "upcoming events",
          "training courses",
          "terms and conditions of events",
          "Sponsor the National Conference 2026",
          "help & advice",
          "landscape contract",
          "health and safety",
          "risk assessment",
          "Suite of risk assessments",
          "Single risk assessment",
          "alcohol in the workplace",
          "allergic reactions to insect stings",
          "bats and rabies",
          "hand arm vibration",
          "interior landscaping",
          "latex allergies",
          "lone working",
          "mental health",
          "outdoor safety",
          "safe digging",
          "silica dust",
          "slopes",
          "whole body vibration",
          "winter care",
          "law and regulations",
          "CDM regulations",
          "CDM in domestic projects",
          "CDM in commercial projects",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/forgotten-password": {
    eyebrow: "Account",
    title: "Forgotten your password?",
    theme: "slate",
    intro: "Please complete your details in the form below to reset your password.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/rhs-chelsea": {
    eyebrow: "About BALI",
    title: "RHS Chelsea Flower Show 2025",
    theme: "green",
    intro: "Plants kindly provided by The Plant Man - https://www.theplantman.co",
    image: { url: "https://www.bali.org.uk/public/images/small_2crassula-400x400.png", alt: "Crassula" },
    sections: [
      {
        heading: "Seen something you love?",
        body: "Crassula Crassulas, commonly known as jade plants, are easy-to-grow succulents with thick, glossy leaves. They're ideal for beginners and can be grown indoors or outdoors in the UK climate. Sempervivum Sempervivums are hardy, rosette-forming succulents that come in various colours. They're perfect for rock gardens, containers, and green roofs, thriving in well-drained soil. Echeveria Echeverias are popular succulents known for their attractive rosettes and vibrant colours. They prefer bright light and minimal watering, making them suitable for indoor cultivation. Pittosporum tenufolium ‘wrinkled blue’ Pittosporum tenuifolium ‘Wrinkled Blue’ is a captivating dwarf evergreen shrub with stunning green, blue, and silver foliage. Pittosporum tobira ’variegatum’ Dense, variegated, shapely, evergreen free flowering shrub from Japan with masses of creamy-white, very fragrant flowers in early summer. Euphorbia characias subsp. wulfenii This handsome euphorbia has upright stems clothed with whorls of fleshy, glaucous leaves and topped with huge heads of chartreuse-green flowers with bronze 'eyes' from March to May. Agapanthus white Agapanthus are South African plants with strap-like leave...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/our-team": {
    eyebrow: "About BALI",
    title: "Meet our team",
    theme: "blue",
    intro: "Meet the team behind BALI. Our dedicated professionals are committed to supporting our members, championing the landscaping industry, and delivering excellence in everything we do.",
    
    sections: [
      {
        heading: "Wayne Grills, Chief Executive",
        body: "I'm committed to raising the Association's profile at both government and industry levels. I support cross-industry working groups and committees, representing the Association and its members, including APPGHG, Scottish Ministerial Industry Roundtable Group and the OHRG.",
        image: { url: "/__l5e/assets-v1/9f243d28-ceac-4194-bc6f-8acff9a0fdee/wayne-grills.png", alt: "Wayne Grills" },
        role: "Chief Executive",
        group: "Executive",
      },
      {
        heading: "Amy Cobbett, Head of Policy and Public Affairs",
        body: "Focusing on advocacy and developing relationships with government, stakeholders, and industry to best ensure the growth and development of the landscaping industry.",
        image: { url: "/__l5e/assets-v1/b645162a-3551-49a0-ab16-c1830d5f0c24/amy-cobbett.png", alt: "Amy Cobbett" },
        role: "Head of Policy & Public Affairs",
        group: "Leadership Team",
      },
      {
        heading: "Sarah Potrykus, Head of Membership",
        body: "Leading BALI's membership function — supporting members, growing the community, and ensuring the value of BALI membership is felt across the industry.",
        role: "Head of Membership",
        group: "Leadership Team",
      },
      {
        heading: "Jonathan Pettit, Head of Careers, Skills & Certification",
        body: "Ensuring that the industry has the right people, skills, and learning opportunities is at the heart of my work at BALI and with the GoLandscape initiative. By working closely with industry leaders, members, educational establishments, and other industry partners the Skills and Careers team is committed to helping the industry to develop the tools and opportunities to succeed and thrive.",
        image: { url: "/__l5e/assets-v1/3855cd6f-ee72-4801-8006-94e2a2c1ae12/jonathan-pettit.jpeg", alt: "Jonathan Pettit" },
        role: "Head of Careers, Skills & Certification",
        group: "Leadership Team",
      },
      {
        heading: "Rosie Sayers, Head of Marketing & Communications",
        body: "Shaping the way the Association connects with its members and the wider industry is at the heart of my role. I focus on creating impactful campaigns and clear communication strategies that highlight the value of our work and celebrate the achievements of our members. Through strong relationships and impactful engagement, I amplify the voice of the landscaping sector.",
        image: { url: "/__l5e/assets-v1/14da6245-98ae-4180-9800-5d5540b2c010/rosie-sayers.png", alt: "Rosie Sayers" },
        role: "Head of Marketing & Communications",
        group: "Leadership Team",
      },
      {
        heading: "Francesca Bienek, Membership Engagement Manager",
        body: "Building strong connections with our members is central to my role. I work closely with individuals and organisations across the landscaping industry to ensure they receive the support and resources they need to thrive. By listening to members' needs and fostering engagement, I help strengthen our community and highlight the value of being part of the Association.",
        image: { url: "/__l5e/assets-v1/87040595-88fb-4e8c-815c-b6b20187c79c/francesca-bienek.jpeg", alt: "Francesca Bienek" },
        role: "Membership Engagement Manager",
        group: "Team",
      },
      {
        heading: "Kerrie Hutchings, Membership Officer",
        body: "Supporting our members and helping them make the most of their membership is my priority. I'm here to answer questions, provide guidance, and ensure that everyone feels connected to the wider landscaping community. Whether through events, communications, or one-on-one conversations, I'm committed to making every member's experience rewarding and impactful.",
        image: { url: "/__l5e/assets-v1/6e9606e8-be7b-4bf5-8121-0fcb3da0e929/kerrie-hutchings.jpeg", alt: "Kerrie Hutchings" },
        role: "Membership Officer",
        group: "Team",
      },
      {
        heading: "Sue Jones, Membership Officer",
        body: "I'm dedicated to enhancing the membership experience by being a trusted point of contact for our members. My role involves understanding their needs, providing tailored support, and helping them unlock the full benefits of their membership. By fostering strong relationships, I contribute to building a vibrant and collaborative community within the landscaping industry.",
        image: { url: "/__l5e/assets-v1/07209129-27ae-4464-8b40-9b1ceb8e21e0/sue-jones.jpeg", alt: "Sue Jones" },
        role: "Membership Officer",
        group: "Team",
      },
      {
        heading: "Ian Ludgate, Technical Officer",
        body: "Providing technical support and guidance to members across the landscaping industry.",
        role: "Technical Officer",
        group: "Team",
      },
      {
        heading: "Luke Garner, Content Manager",
        body: "Leading content across BALI's channels — telling the stories of our members and the wider industry.",
        role: "Content Manager",
        group: "Team",
      },
      {
        heading: "Mia Foster, Marketing Executive",
        body: "Supporting BALI's marketing campaigns and member communications.",
        role: "Marketing Executive",
        group: "Team",
      },
      {
        heading: "Joanna Pieprzak, Media Sales & Sponsorship Officer",
        body: "Managing media sales and sponsorship partnerships across BALI's events, awards and publications.",
        role: "Media Sales & Sponsorship Officer",
        group: "Team",
      },
      {
        heading: "Izzy Plain, Events Officer",
        body: "Coordinating BALI's programme of regional events, training and industry gatherings.",
        role: "Events Officer",
        group: "Team",
      },
      {
        heading: "Nicky McMurdo, PA to Chief Executive",
        body: "Providing executive support to the Chief Executive and the senior leadership team.",
        role: "PA to Chief Executive",
        group: "Team",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/contact/team": {
    eyebrow: "Contact",
    title: "Make an enquiry",
    theme: "blue",
    intro: "Information on make an enquiry from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events/terms": {
    eyebrow: "Events",
    title: "Terms and conditions of events",
    theme: "slate",
    intro: "Making a booking request for an event constitutes your acceptance of these Terms and your agreement to comply with them. Please read these Terms carefully before you complete an event booking request. These terms tell you how event bookings can be changed and cancelled, and other important information. Where you are making a booking on our website, these Terms should be read in conjunction with our website Terms and Conditions, Disclaimer, Privacy Policy and Cookies. We reserve the right to amend these Terms from time to time.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/cdm": {
    eyebrow: "Help & Advice",
    title: "CDM Regulations",
    theme: "warm",
    intro: "The Construction (Design & Management) Regulations 2015 are the main set of regulations for managing the health, safety and welfare of construction projects.",
    sections: [
      {
        heading: "The Construction (Design & Management) Regulations 2015",
        body: "The scope of works covered by the definition of 'Construction' in CDM includes many aspects of landscape works, including site clearance, excavation, drainage and earthworks. In addition, any landscape contractor undertaking work on a construction site where other contractors are present will have responsibilities under CDM. Please click on the buttons below to learn more about your responsibilities under CDM:",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/cdm/learning": {
    eyebrow: "Help & Advice",
    title: "CDM learning materials",
    theme: "warm",
    intro: "To help members understand the measures required to meet CDM regulations and implement these in their own projects, the Association has developed a suite of learning materials.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "CDM webinar slide deck 27 Sep 2023 1713kb PDF",
          "Construction phase safety plan 27 Sep 2023 66kb DOCX",
          "Design Risk Assessment 27 Sep 2023 63kb DOCX",
          "Pre Construction Checklist 27 Sep 2023 26kb DOCX",
          "Pre Tender checklist 27 Sep 2023 29kb DOCX",
          "Pre Tender Risk Assessment 27 Sep 2023 25kb DOCX",
          "Design Assessment List 27 Sep 2023 21kb XLSX",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/cdm/commercial": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/cdm/domestic": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/cdm/what-is-construction": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/evolution-of-employment": {
    eyebrow: "Help & Advice",
    title: "Evolution of employment",
    theme: "warm",
    intro: "Whilst new working arrangements have the potential to enable short-term or highly flexible demands for labour to be fulfilled, the existing legislative framework – which has evolved to cater for traditional ‘employees’ – often does not afford sufficient protection to the rights of a new position labelled ‘workers’. Workers are a half-way house between employees and self-employed individuals, often at risk from losing basic employment rights as a result of unscrupulous employers.",
    image: { url: "https://www.bali.org.uk/public/images/medium_office-1209640-1920.jpeg", alt: "Office" },
    sections: [
      {
        heading: "Together with a growing trend for self-employment, mobile phone applications and an emerging gig economy are providing employers and labour markets with greater flexibility than ever before.",
        body: "In 2017 a report commissioned by the government evaluated the changing landscape of work and made recommendations to ensure future legislation reflects these changes. Many changes in law have already been adopted or will do in the near future. One of the areas of legislation to be changed as a result of this review is section 1 of the Employment Rights Act 1996. Currently, ‘employees’ in a role for more than one month must be given a document containing specific information including holiday pay, sick leave, and length of time the job is likely to last within 2 months of the date they start work. This document may often be refereed to as an employment contract or written statement, and may be in parts, provided this 2-month limit is met. Anyone defined as a ‘worker’ - which may include people employed under zero-hours contracts or employed through an agency - is not currently entitled to any of this information at any stage in their role. This leaves a significant number of contemporary ‘workers’ in a vulnerable position so, as of 6th April 2020, new requirements will be enforced: As of 6th April 2020, employers must ensure statements, which include the full suite of employment ...",
        bullets: [
          "Both employees and workers are entitled to a section 1 statement on the first day of work, regardless of the duration of their role.",
          "Details concerning working periods, leave entitlement, sick pay, renumeration, probationary period and training must be given.",
        ],
      },
      {
        heading: "Further information:",
        body: "ACAS website The Employment Rights (Miscellaneous Amendments) Regulations 2019",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/gdpr": {
    eyebrow: "Help & Advice",
    title: "GDPR",
    theme: "warm",
    intro: "The regulation has fundamentally reshaped the way in which data is handled across every sector, from healthcare to banking and beyond. The British Association of Landscape Industries has been working closely with members to ensure they are compliant with the new regulation by producing a helpful data protection fact sheet.",
    sections: [
      {
        heading: "What is GDPR?",
        body: "The General Data Protection Regulation forms part of the data protection regime in the UK, together with the new Data Protection Act 2018 (DPA 2018). This replaces the Data Protection Act 1988. The main provisions of this applied from 25 May 2018, which means all business should already be applying the principles of the GDPR in their daily work activities.",
      },
      {
        heading: "Who does it apply to?",
        body: "The GDPR applies to businesses who may be called a ‘controller’ or ‘processor’. A controller determines the purposes and means of processing personal data. A processor is responsible for processing personal data on behalf of a controller. As a landscape contractor or designer, it is most likely that you are a controller, since you will frequently be deciding what personal data to collect (for example, the names, email addresses, telephone numbers and addresses of clients) and how this information will be recorded e.g. on a phone, in a book or via email. Note that GDPR applies to historic, current and all future electronic and manual records held by your company. Personal data only includes information relating to natural persons who can be identified or who are identifiable, directly from the information in question (e.g. name, address, email, NI number); or who can be indirectly identified from that information in combination with other information (e.g. Computer’s IP address). As a landscape contractor or garden designer, it is likely you will record personal data from clients which includes their name, address and email address. Information about companies or public authoriti...",
      },
      {
        heading: "What are my responsibilities?",
        body: "Whilst the owners, directors or management team are directly accountable, all employees within a business have a responsibility to ensure their business conforms with the General Data Protection Regulation. Before collecting personal information, you must identify valid grounds under the GDPR (known as a ‘lawful basis’) for collecting and using personal data from your customers and prospective customers. There are six of these lawful bases, which are listed below: 1. Consent 2. Contract 3. Legal obligation 4. Vital interests 5. Public task 6. Legitimate interests For example, you may record information such as a name and address to provide a quote or a service, offer credit terms and get paid. These examples fall under the lawful basis of processing by way of “contract” as without this basic information you could not provide your services. You must ensure that you do not do anything with the data in breach of any other laws, such as give it to others without permission (see consent) or store it in an unsecure way. Note that storing data in an insecure way could include writing client names, addresses and phone numbers in a book which is not thoughtfully looked after, or on compu...",
      },
      {
        heading: "What are the rights of my customers and potential customers?",
        body: "The individuals whose information you collect and use have particular rights. There are eight of these, which are: 1. The right to be informed (i.e. what exactly will you do with their information?) 2. The right of access (i.e. you must be able to give individuals a copy of their personal data that you hold on them) 3. The right to rectification (i.e. individuals are entitled to have their personal information corrected) 4. The right to erasure (also known as the right to be forgotten, in some circumstances an individual can request a business deletes information held about them) 5. The right to restrict processing (in some circumstances an individual can limit the way in which a business uses their data) 6. The right to data portability (this right gives individuals the right to receive information they originally provided to a business in a format that is organised and commonly used) 7. The right to object (in some circumstances, an individual can object to businesses processing their data in a specific way) 8. Rights in relation to automated decision making and profiling. (in some circumstances, businesses can be prevented from using automated – computer controlled – decision...",
      },
      {
        heading: "What is consent?",
        body: "As discussed in the responsibilities section, as a business you should ensure you process (collect, record, organise, store or use) data on a lawful basis. As a landscape contractor or garden designer, in most cases you will be processing data under the lawful basis of ‘contract’. If, for example, you wish to contact a customer regarding additional services your business can offer, or sign a customer to direct marketing materials, a different lawful basis is required – ‘consent’ is one such example of a different lawful basis. The definition of consent in GDPR is similar to the definition of consent outside of GDPR! Under GDPR, consent is given by an individual to a business when s/he gives a specific and informed decision of his or her wishes either via a statement or clear affirmative action (e.g. ticking a box) called an opt-in. For example, consent may be gained from an individual to send them additional information on relevant products by using the following text as part of a contract for works: I consent to [your company name] sending me additional information on relevant and complementary products or services, from time to time, by the following methods: □ email □ letter ...",
      },
      {
        heading: "What is a breach and what do I do?",
        body: "A personal data breach means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. This includes breaches that are the result of both accidental and deliberate causes. For example, losing a book in which you keep client addresses is classed as a data breach, as is losing a mobile telephone which contains the names and address of clients. The GDPR introduces a duty on all organisations to report certain types of personal data breach to the relevant supervisory authority (currently this is the ICO). You must do this within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk of adversely affecting individuals’ rights and freedoms, you must also inform those individuals without undue delay. You should ensure you have robust breach detection, investigation and internal reporting procedures in place. This will facilitate decision-making about whether or not you need to notify the relevant supervisory authority and the affected individuals. This is based on material harm to individuals, scale of impact, likelihood of recurrence, risk to oth...",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Data Protection Factsheet 12 Mar 2019 223kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/ir35": {
    eyebrow: "Help & Advice",
    title: "IR35",
    theme: "warm",
    intro: "By setting up as a limited company, workers can continue to work for an existing employer, but as a ‘contractor’. Personal service companies are a variation of this and are popular where clients and recruitment agencies avoid hiring contractors operating as sole traders.",
    image: { url: "https://www.bali.org.uk/public/images/medium_calculator-385506-1920.jpeg", alt: "calculator" },
    sections: [
      {
        heading: "IR35 is a piece of UK tax legislation, designed to close a loophole in the tax system that allows a specific group of workers to pay less tax.",
        body: "Operating as a contractor or personal service company allows workers to avoid paying national insurance contributions on a significant part of their income, which traditional employees must do. When used legitimately, this reduced tax is intended to provide the contractor with money for holiday or sick pay, but also paying for equipment necessary to do their job. This arrangement also benefits the client, as they do not need to pay annual leave or sick pay to contractors or personal service companies. Whilst operating as a contractor can be entirely legitimate, Her Majesty’s Revenue and Customs (HMRC) regard the practice of masquerading as a ‘contractor’ as a form of tax avoidance, and introduced IR35 to ensure, where appropriate, contractors deemed to be employees pay the same amount of tax as traditional employees. If HMRC identify cases where individuals have been masquerading as self-employed contractors without justification, they will be required to pay the missing tax back to HMRC, with interest and penalties for a period of up to 6 years. Working ‘Inside IR35’ is where a worker is considered an employee (commonly referred to as a ‘deemed employee’) for the purposes of ta...",
        bullets: [
          "The client decides how, when and where the workers services are provided",
          "Contractor is paid regardless of the quality of services provided",
          "Client would not be willing to accept a substitute to provide the services",
          "Contractor does not provide own equipment",
          "The contractor decides how, when and where the workers services are provided",
          "Contractor may be paid according to work or service delivered",
          "Client would accept a substitute to provide the services",
          "Contractor provides own equipment for services provided",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/jcli-contracts": {
    eyebrow: "Help & Advice",
    title: "JCLI contracts",
    theme: "warm",
    intro: "These documents update the CPSE/JCLI Guidance for the Advanced Ordering or Contract Growing of Hardy Nursery Stock (HTA 1999). October 2014.",
    image: { url: "https://www.bali.org.uk/public/images/small_screenshot-2019-11-14-at-15.00.52.png", alt: "JCLI Logo" },
    sections: [
      {
        heading: "Guidance on the conditions of contract and other issues concerning the contract growing of plant material by nursery growers for their clients.",
        body: "The JCLI Contracts Forum agrees and badges commercial and domestic project standard forms of contract and associated guidance documents for the landscape industry. The contracts and guidance are produced and published by individual member organisations. The JCLI Contracts Forum is organised by the Landscape Institute. Its members are the Association of Professional Landscapers (APL), the British Association of Landscape Industries (BALI), the Horticultural Trades Association (HTA), the Institute of Chartered Foresters (ICF), the Landscape Institute (LI) and the Society of Garden Designers (SGD). The JCLI badging of contracts is considered important for two main reasons: firstly, because ‘JCLI’ has a strong reputation for contracts, based on the reputation of the Landscape Contract originally produced in 1978; and secondly, because the documents are agreed by the members of the Forum and are therefore non-partisan industry standard documents. JCLI was originally the Joint Council for Landscape Industries and was convened in 1973 to bring together all those organisations in any way concerned with landscape design, construction or management. In 2004 it became the Joint Committee f...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/good-work-plan": {
    eyebrow: "Help & Advice",
    title: "The good work plan",
    theme: "warm",
    intro: "In 2017 Matthew Taylor, the Chief Executive of the Royal Society for the Encouragement of Arts, Manufacturers and Commerce, published the Good Work report. This document outlined 53 proposals to the government, aimed at improving modern working practices. Specifically, the report considered how employment practices needed to change in order to keep pace with modern business models, and discussed the developing nature of self-employed and contracted workers, and how the existing labour laws must change to accommodate these individuals and the businesses that employ them.",
    sections: [
      {
        heading: "Important employment law changes in effect from Monday 6 April 2020.",
        body: "The government responded to the report by publishing The Good Work Plan in 2018, which identified the changes that would be implemented. These affect England, Wales and Scotland, and the following changes came into effect last week: Full details of the changes can be reviewed on the government’s website.",
        bullets: [
          "A written statement of main terms and conditions (frequently known as written statement of particulars) must now be provided to Employees and Workers by their employer on or before the first day of their employment",
          "The period to break continuous service has now extended from 1 week to 4 weeks, which means employees who work intermittently for their employees can access their employment rights",
          "The pay reference period for holiday calculations has increased from 12 to 52 weeks, or for employees with less than 52 weeks service, the total number of weeks they have worked. This means the holiday pay for employees with variable hours will reflect their working hours across the year, and not vary according to high or low season.",
          "Employees who do not have regular working hours are now able to request a more stable contract after 26 weeks continuous service, with a more fixed working pattern and guaranteed hours.",
          "Agency workers are now entitled to the same pay as the direct recruits of a business after they have performed the same role with the same hirer for 12 consecutive calendar weeks",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/vat-reverse-charge": {
    eyebrow: "Help & Advice",
    title: "VAT reverse charge",
    theme: "warm",
    intro: "From 1st March 2021 the domestic VAT reverse charge will apply to most supplies of building and construction services. This change will affect nearly all landscape contractors to some extent, and it is important our members understand the consequences of the changes.",
    sections: [
      {
        heading: "Contents",
        body: "- What is the domestic VAT reverse charge?- Why is the domestic VAT reverse charge being introduced?- Who will the domestic VAT reverse charge apply to?- Which services will the reverse charge apply to?- Are there any circumstances when the VAT reverse charge does not apply?- Where do responsibilities lie regarding notification of VAT reverse charge? From 1st March 2021, all businesses performing sub-contractor duties by supplying construction services to a VAT-registered customer (a contractor) will no longer charge VAT. Instead, the customer (contractor) will pay the VAT owed by the sub-contractor directly to HMRC. This means if you are a VAT-registered sub-contractor, who is registered with the CIS scheme and currently receives VAT payments from a contractor client, as of 1st March 2021 you will no longer receive VAT from these clients. HMRC believes there has been an increase in VAT fraud within labour supply chains in large construction projects, which they estimate costs the UK government over £100m per year. Specifically, companies at the end of long supply chains are not paying the VAT they receive to HMRC. The VAT reverse charge is being introduced to help reduce VAT fr...",
        bullets: [
          "When contractors use sub-contractors for zero-rated work",
          "If the contractor or sub-contractor is not VAT registered",
          "Where building or construction works are for end users",
          "The customer (the contractor) must advise the supplier (sub-contractor) if they are an end user – and therefore not subject to the reverse charge – in writing. HMRC suggest the following wording is used:",
          "The subcontractor may need to ask the customer if they are an end user and should record this request and any response in writing and retain as evidence. It is important the subcontractor also identifies and records evidence supplied to suggest the customer (contractor) is VAT registered and subject to CIS.",
          "The supplier (the sub-contractor) must advise on their invoice if the VAT reverse VAT charge applies. Whilst no VAT will be charged on the invoice, the invoice must refer to the reverse charge and how much VAT is due (20% or 5%). HMRC suggest the following wording is used:",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law/water-abstraction": {
    eyebrow: "Help & Advice",
    title: "Water abstraction",
    theme: "warm",
    intro: "The abstraction of water is managed by the government. Most businesses taking more than 20,000 litres of water a day directly from rivers or groundwater require an abstraction license. Following review and consultation, shortcomings were identified in the existing system of abstraction, which led to the government introducing a series of new measures in 2016. Over the next few years, rules concerning abstraction are likely to change and may affect Association members.",
    image: { url: "https://www.bali.org.uk/public/images/medium_screenshot-2019-11-15-at-13.21.51.png", alt: "Environment Agency - Water Abstraction" },
    sections: [
      {
        heading: "Water abstraction refers to the process of taking or extracting water from a natural source (rivers, lakes, groundwater aquifers, etc.) for various uses, from drinking to irrigation, treatment, and industrial applications.",
        body: "Historically, taking water from the environment for certain uses and from certain sources could be done without a license. These uses and sources were called ‘exempt activities’ and included, amongst others: • All forms of irrigation including trickle • Abstractions from previously exempt areas It is likely that our members may have been using water under these exemptions. From 1st January 2018, new Environment Agency regulations came into effect, which mean these previously exempt activities cannot continue without an abstraction license. Upon changing the exemption guidelines, the Environment Agency declared a 2-year transitional period which ends on 31st December 2019. Any members who abstract more than 20 cubic metres (m3 ) per day for any previously exempt activities and want to continue to do so, must apply to the Environment Agency for a water resources abstraction license. Any persons who fail to notify the Environment Agency before the end of 2019 will automatically lose their right to abstract and be liable for enforcement action. The Environment Agency will assess all licenses applied for during the transitional period by 31 December 2022, and organisations can contin...",
      },
      {
        heading: "Developing a stronger catchment focus",
        body: "A catchment is a geographical area within which rainwater and groundwater collect and contribute to the flow of a specific river. We believe that working collaboratively at a catchment scale will improve understanding of local challenges and help identify the right solutions for individual catchments. The Environment Agency will support this by engaging with abstractors and existing local groups, such as catchment partnerships, in catchments facing the greatest challenges. This will produce updated abstraction licensing strategies that detail the solutions to environmental issues and set out approaches to help abstractors access the water they need. The figure below summarises the approach the Environment Agency will take. A free hotline and bookable appointment service have been setup to help with drafting applications for previous exemptions or answering any questions about the changes to abstraction licences. The Environment Agency may be contacted via telephone 03708 506506 or emailed: enquiries@environment-agency.gov.uk. Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Change to abstraction licensing rules 31 Jul 2019 257kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment": {
    eyebrow: "Help & Advice",
    title: "Machinery and driving",
    theme: "warm",
    intro: "Information on machinery and driving from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/driving-for-better-business": {
    eyebrow: "Help & Advice",
    title: "Driving for better business",
    theme: "warm",
    intro: "The Driving for Better Business (DfBB) initiative was introduced by National Highways (formerly Highways England/Highways Agency) to help employers in the private and public sectors reduce work-related road risk, protecting staff who drive or ride for work, and others who they may share the road with. The initiative offers a range of information regarding all aspects of vehicle driving and operations.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/e10-fuel": {
    eyebrow: "Help & Advice",
    title: "E10 fuel",
    theme: "warm",
    intro: "The proportion of ethanol in standard unleaded petrol has now increased to 10% and is labelled ‘E10’ to reflect this change.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/red-diesel": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/tachographs": {
    eyebrow: "Help & Advice",
    title: "Tachographs",
    theme: "warm",
    intro: "Are your vehicles fitted with a tachograph? Do you know when to use a tachograph? Do you know when a tachograph is not needed?",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/tachographs/landscape-contractors": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/towing-a-trailer": {
    eyebrow: "Help & Advice",
    title: "Towing",
    theme: "warm",
    intro: "What weight can I tow with a car licence? *UPDATED 16/12/2021*How much weight can my vehicle tow?How much weight can my trailer carry?What size trailer can I tow?How can I avoid exceeding the towing capacity of my trailer or vehicle?",
    image: { url: "https://www.bali.org.uk/public/images/img-0368.jpg", alt: "VIN plate" },
    sections: [
      {
        heading: "Contents",
        body: "New rules introduced on 16th December 2021 allow anyone who passed their car driving test (Driving licence category B) from 1st January 1997 to tow trailers up to 3,500kg maximum authorised mass* (MAM). This change is significant; up until now, anyone who passed their car driving test after 1st January 1997 has been required by law to pass a car and trailer driving test to tow a trailer up to 3,500kg MAM (within the towing limits of the vehicle). Drivers will now get Category BE added to their driving licence when they next get a new photocard driving licence and do not need to contact DVLA for this to happen. Any person who passed their driving test before 1st January 1997 is permitted to drive a vehicle and trailer with a combined weight not exceeding 8,250kg Regardless of the law change, employers are reminded of the need to ensure employees are competent to drive a car or van with trailer. Training providers such as BALI member Train for Towing continue to offer packages which ensure drivers are taught how to load, attach and drive with a trailer. BALI strongly recommend new drivers and those who have not previously driven with a trailer receive professional training before ...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/tractors": {
    eyebrow: "Help & Advice",
    title: "Tractors and licencing",
    theme: "warm",
    intro: "Following requests from members, the Association has worked with a specialist transport solicitor to clarify what driving licence entitlement is required when driving a tractor as part of a landscape or horticultural activity.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/equipment/tractors/driving": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/dispute/client-information": {
    eyebrow: "Help & Advice",
    title: "Client information",
    theme: "warm",
    intro: "Historically, the last resort for disagreements between clients and tradespeople was the courts. Options for relatively low value civil claims such as small claims, fast track and multi-track simplified the process and proved popular amongst tradespeople and clients.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Client Resolution Form 4 Jul 2024 1072kb PDF",
          "Quick Start Guide 4 Jul 2024 90kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/dispute/faqs": {
    eyebrow: "Help & Advice",
    title: "Frequently asked questions",
    theme: "warm",
    intro: "What are the benefits of the dispute resolution service?",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/dispute/member-information": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/alcohol": {
    eyebrow: "Help & Advice",
    title: "Alcohol in the workplace",
    theme: "warm",
    intro: "Whilst The Health and Safety at Work etc Act 1974 states employers have a duty to ensure the health, safety and welfare of employees in relation to alcohol at work, there is no legislation in the UK which requires a company to implement alcohol policies in the workplace. Furthermore, the management of any company can set its own alcohol limit, which may be enforceable according to site or job role.",
    sections: [
      {
        heading: "There is no universal limit for alcohol levels in the landscape industry, which means being under the UK drink drive limit alone may not always be sufficient",
        body: "Many employers and site managers have adopted a zero-tolerance approach (i.e. zero alcohol in the system of an individual) to alcohol. This means that, in the event of a test for alcohol, being under the drink drive limit alone may not be acceptable. Alcohol limits may be detailed during a site or company induction, but operatives are advised to seek clarification if in doubt. Operatives on construction sites may be subject to random drugs and alcohol tests. The reason for a zero-tolerance approach to alcohol is that, even at blood alcohol concentrations lower than the legal driving limit, research has shown alcohol can reduce physical co-ordination and reaction speeds. On a construction site there is a risk of injury to operatives and third parties if these abilities are impaired. For more information on managing drug and alcohol misuse at work, visit the HSE website",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/insect-stings": {
    eyebrow: "Help & Advice",
    title: "Allergic reactions to insect stings",
    theme: "warm",
    intro: "Regardless of age or geographic location, whether you work in an office or out on site, spend your free time worshipping the sun or hiding in the shade, wasps and bees are one of the few invertebrates we encounter in Europe which pose a risk of harm.",
    sections: [
      {
        heading: "Getting stung by an insect is an inevitable consequence of interacting with the environment.",
        body: "For most people, a sting from a bee or wasp is a short-term inconvenience. A few hours of significant pain, which can be alleviated with nothing more than a rude word, some cold water and perhaps a mild painkiller. For other people, however, bees and wasps pose a significant danger. Allergic reactions or anaphylaxis can develop from a sting, which are potentially life-threatening. The article, written by Dr. Aarn Huissoon (MB, PhD, FRCP, FRCPath) for BALI, has been possible thanks to a financial grant from ALK-Abello, a global, research-driven pharmaceutical company which focusses on allergy diagnosis and treatment. It has been written specifically for landscape professionals and explores the types of reactions, the symptoms and treatment. For more information about how to treat insect stings visit the NHS website here.",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Allergic Reactions to Insect Stings by Dr Aarn Huissoon 12 Mar 2019 220kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/bats-rabies": {
    eyebrow: "Help & Advice",
    title: "Bats and rabies",
    theme: "warm",
    intro: "Whilst bats in the UK can carry the disease, rabies, it is not the classical rabies associated with dogs and horror movies. Some bats in the UK carry a type of rabies virus called European Bat Lyssaviruses (EBLV).",
    sections: [
      {
        heading: "Rabies on bats in the UK is extremely rare. However, contracting rabies can be fatal and remains a risk for landscape operatives working on sites where bats may be living.",
        body: "The risk of catching the virus from a bat in the UK is very low; surveillance of bats in the UK has identified a very low number infected. EBLV is transmitted only through a bite of an infected bat or by its saliva entering a wound or mucous membrane such as the nostrils, mouth and lips, eyelids and ears. Direct contact between landscape operatives and bats is also rare. However, a risk remains. In 2002 a batworker from Scotland died from EBLV, and earlier this month the Animal and Plant Health Agency (APHA) confirmed a dead bat found in Poole, Dorset, carried the virus. Landscape operatives may work in the proximity of bats, particularly on works associated with old buildings. EBLV can be treated by GPs, but it is essential this is administered as soon as possible after exposure. It is also important to be aware of symptoms on humans infected: For more advice on bats and rabies visit the Bat Conservation Trust. Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.",
        bullets: [
          "Anxiety, headaches and fever in early stages",
          "Spasms of the swallowing muscles making it difficult or impossible to drink",
          "Breathing difficulties Operatives who are bitten or scratched by a bat must:",
          "Wash the wound or contact area with soap and water",
          "Disinfect the wound",
          "Contact a doctor immediately for advice",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "bats and rabies 4 Sep 2019 244kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/hand-arm-vibration": {
    eyebrow: "Help & Advice",
    title: "Hand arm vibration",
    theme: "warm",
    intro: "Landscape tools which fit into this category include chainsaws, brush cutters, hedge trimmers, blowers and disc cutters. Using this equipment on a regular basis for several hours each day can cause damage to nerves, blood vessels and joints of the hand, wrist and arm. The damage is irreversible, and can result in tingling and numbness in the fingers, loss of dexterity and even loss of strength.",
    sections: [
      {
        heading: "Property Management company fined £600,000 after 5 workers diagnosed with HAVS",
        body: "A property management and development company has been fined £600,000 and ordered to pay costs of £13,995.06 after pleading guilty to breaching Section 2(1) of the Health and Safety at work Act 1974. A court heard that between 2009 and 2014 five employees working for Places for People used power tools to carry out grounds maintenance at sites in Milton Keynes, Rotherham and Hull. An investigation by the HSE discovered the company failed to assess or manage the risks associated with vibrating tools, failed to provide training or health surveillance for its maintenance workers, and failed to maintain equipment appropriately. Members not committed to providing health surveillance, particularly in relation to hand arm vibration syndrome, are advised to pay attention to this substantial fine imposed for failure to identify and manage hand arm vibration. HAVS risk assessment and health surveillance is essential where the workforce uses handheld power tools. The HSE provides a significant amount of free information and guidance for employers eager to stay within the law, including clear guidance on how to stay within the law. Specifically, employers are required to: For additional info...",
        bullets: [
          "Assess the vibration risk to your employees;",
          "Take action to reduce vibration exposure that produces those risks",
          "Decide if employees are likely to be exposed above the:",
          "Daily exposure action value (EAV) and if they are:",
          "introduce a programme of controls to eliminate risk, or reduce exposure to as low a level as is reasonably practicable;",
          "Daily exposure limit value (ELV) and if they are:",
          "take immediate action to reduce their exposure below the limit value;",
          "Make sure the legal limits on vibration exposure are not exceeded;",
          "Provide information and training to employees on health risks and the actions you are taking to control those risks;",
          "Carry out health surveillance (regular health checks) where there is a risk to health;",
          "Consult your trade union safety representative or employee representative on your proposals to control risk and to provide health surveillance",
          "Keep a record of your risk assessment and control actions;",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Health surveillance for hand-arm vibration syndrome 7 Aug 2019 280kb PDF",
          "HSE exposure calculator 25 Sep 2019 254kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/interior-landscaping": {
    eyebrow: "Help & Advice",
    title: "Interior landscaping",
    theme: "warm",
    intro: "Interior landscaping; what does it mean to you? An unnecessary expense or a means of improving worker productivity? A feature to draw visitors or a potential headache for the cleaners?",
    image: { url: "https://www.bali.org.uk/public/images/mobilane.jpg", alt: "Mobilane LivePanel Pack" },
    sections: [
      {
        heading: "Recognising the health benefits of interior landscaping in domestic and commercial settings makes people more contented and productive.",
        body: "Interior landscaping has come a long way since the days of using a sickly Peace Lily to prop open a door. Peer-reviewed scientific articles support the theory that interior landscaping has the potential to make offices, restaurants, houses, schools, universities and public realm areas healthier, and anyone in these spaces more contented and productive. Sound too good to be true? Well-executed and maintained interior planting has been scientifically proven to bring benefits to workers and the office environment including: The range of health and wellbeing benefits seems unlikely until one considers the reality of office life. Most offices are in urban areas where outside air pollution is consistently high. A significant volume of exterior pollutants enter buildings and mix with office pollutants – commonly volatile organic compounds from items such as furniture, printers, air fresheners and paint - to create an unhealthy environment. Even small concentrations of these chemicals can have an effect and result in ailments familiar to most office workers: headaches, sore eyes, nose and throat, and nausea. These are commonly grouped as sick building syndrome. The benefit of interior p...",
        bullets: [
          "Increased productivity",
          "Decreased stress (lower blood pressure)",
          "Increased attentiveness",
          "More job satisfaction",
          "Better perceived work-life balance",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/latex-allergies": {
    eyebrow: "Help & Advice",
    title: "Latex allergies",
    theme: "warm",
    intro: "With the increase of personal protective equipment (PPE) use, the Health and Safety Executive (HSE) has warned of the potential for workers to develop allergic reactions to items containing latex.",
    image: { url: "https://www.bali.org.uk/public/images/lates-allergies-mailshot.jpg", alt: "HSE issue warning over latex" },
    sections: [
      {
        heading: "HSE issue warning over latex allergies with the increase in PPE usage.",
        body: "The Association has produced a technical document containing more information and links to helpful resources, which can be downloaded to the right of this page.",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "HSE issue warning over latex allergies 8 Oct 2020 121kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/lone-working": {
    eyebrow: "Help & Advice",
    title: "Lone working",
    theme: "warm",
    intro: "Managing the risks associated with lone working involves considering which employees are likely to work alone, and which areas of their work pose a hazard. Employers have a responsibility to ensure they train, supervise, and monitor lone workers, as well as keep in touch with them.",
    image: { url: "https://www.bali.org.uk/public/images/medium_screenshot-2020-05-20-at-17.17.14.jpeg", alt: "Idverde image" },
    sections: [
      {
        heading: "As with any other work-related task, employers have a responsibility to manage the risk employees face when working alone.",
        body: "As the Health and Safety Executive (HSE) defines a lone worker as ‘anyone who works by themselves without close or direct supervision’, most landscape professionals are likely to fit within the definition at some point in their working life. Social distancing guidance issued by the government during the coronavirus pandemic had the potential to create additional lone workers in many BALI member companies, who must be identified and managed appropriately. This management extends to employees now working from home instead of an office. Risks of relevance to lone workers on sites and at home include:",
        bullets: [
          "The place of work (e.g. isolated or rural location)",
          "A person’s medical suitability",
          "Stress and mental wellbeing",
          "Violence directed towards the lone worker from the public",
        ],
      },
      {
        heading: "Training",
        body: "It is particularly important lone workers understand the risks associated with their work and how to control these. Training is essential where supervision may not be available in uncertain situations, or where workers need to cope with unexpected situations. It is also important for workers to understand the limitations of their role whilst lone working, and able to recognise when they should seek advice or support from other members of staff.",
      },
      {
        heading: "Supervision",
        body: "Regardless of the need to work alone, workers must also be supervised appropriately. Higher risk tasks and workers’ ability to identify health and safety issues dictate the need for additional supervision. Even if they have been trained, new workers must be supervised initially, particularly if they are undertaking a job with specific risks and are required to deal with situations that are new to them.",
      },
      {
        heading: "Monitoring",
        body: "Lone workers must be monitored, regardless of whether they are on-site or working from home. Share details of monitoring systems with lone workers, including procedures. Popular methods of monitoring include:",
        bullets: [
          "Arranging pre-arranged visitors from supervisors",
          "Knowing where lone workers are at all times, with regular contact using phones, radios and email. The frequency of this contact may vary from hourly to daily depending on the site",
          "Systems for raising alarm where worker needs help or support immediately, or where worker fails to check-in with supervisor at a predetermined time.",
        ],
      },
      {
        heading: "Additional information",
        body: "HSE Guide: Lone working The British Association of Landscape Industries has produced a generic lone worker risk assessment, available to members free of charge. Please contact our Technical Officer Owen Baker owen.baker@bali.org.uk to receive a copy of this. If you are not a member and would like access to similar documents, please consider a membership and make an enquiry today.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/mental-health": {
    eyebrow: "Help & Advice",
    title: "Mental health",
    theme: "warm",
    intro: "► How common are mental health issues in the UK?► How many people in the UK get treatment for mental health issues?► Employees: Looking after your mental health at work► Employers: Advice and resources for line managers ► Contacts",
    sections: [
      {
        heading: "How common are mental health issues?",
        body: "* Suicidal thoughts are not mental health diagnoses, but they are related to mental health",
        bullets: [
          "1 in 4 people will experience a mental health problem of some kind each year in England",
          "1 in 6 people report experiencing a common mental health problem (like anxiety and depression) in any given week in England",
          "Between 2011 and 2015, 13% of in-work suicides* were from within the skilled construction and building trades - despite construction accounting for 7% of the UK workforce",
          "Suicide kills more construction workers than falls each year",
        ],
      },
      {
        heading: "How many people get treatment for mental health issues?",
        body: "",
        bullets: [
          "Approximately 1 in 8 adults with a mental health problem are currently getting treatment",
        ],
      },
      {
        heading: "Employees: Looking after your mental health at work",
        body: "How to be mentally healthy at work by MIND (link to document)How to manage stress by MIND (link to document)",
      },
      {
        heading: "Resources for employers",
        body: "People managers guide to mental health by Chartered Institute of Personnel and Development (CIPD) and MIND (link to document)How to support staff who are experiencing a mental health problem by MIND (link to document)How to take stock of mental health in your workplace by MIND (link to document)Line Managers' Resource by Mental Health First Aid (MHFA) (link to document)",
      },
      {
        heading: "Contacts",
        body: "Perennial Provider of free and confidential advice, support and financial assistance to people of all ages working in, or retired from horticulture.https://perennial.org.uk/ SamaritansOffer a safe place for you to talk any time you like, in your own way – about whatever's getting to you https://www.samaritans.org/Telephone: 116 123SANElineSANEline is a national out-of-hours mental health helpline offering specialist emotional support, guidance and information to anyone affected by mental illness, including family, friends and carers. Telephone: 0300 304 7000PapyrusPAPYRUS is the UK Charity for the prevention of young suicide (under 35)Telephone: 0800 068 4141ShoutUK's first free, confidential, 24/7 text support service. It's a place to go if you're struggling to cope and need mental health support.Text number: 85258- Anxiety National charity helping people with AnxietyTelephone: 08444 775 774 Text number: 07537416905 - Depression Depression UKNational Self-Help Organisation helping people cope with their depressionwww.depressionuk.org - Self-Harm HarmlessAn organisation who works to address and overcome issues related to self-harm and suicidewww.harmless.org.uk - Substance Drugw...",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Mental Health - Line managers resource 4 Feb 2021 615kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/outdoor-safety": {
    eyebrow: "Help & Advice",
    title: "Outdoor sun safety",
    theme: "warm",
    intro: "This page will be regularly updated with helpful guidance designed to mitigate the risks of working outdoors. A recent enquiry from an Association member prompted a specific technical report to be written, which concerns the use of sunscreen in the workplace. The member asked whether it is the responsibility of an employer to supply sunscreen when the employee spends most of his/her working day outside. You can find this document, and many more, available to download on this page.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Sunscreen and outdoor working: Employer and employee responsibilities 27 Jun 2019 247kb PDF",
          "BALI's guide to working in hot conditions outdoors 24 Jul 2019 262kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/risk-assessments": {
    eyebrow: "Help & Advice",
    title: "Risk assessment",
    theme: "warm",
    intro: "The Management of Health and Safety at Work Regulations 1999 requires the following measures as a minimum:",
    sections: [
      {
        heading: "The law requires all employers to protect their employees, and others, from harm.",
        body: "Whilst it is not necessary for employers to eliminate all risks associated with their business practices, it is essential that measures are taken to do everything reasonably practicable to protect people from harm. For most small and medium-sized landscape businesses, risk assessment is a straightforward process and does not require the person undertaking the risk assessment process to possess any additional training or qualifications. Association members have free access to a variety of risk assessment and method statement templates, ranging from a single table to a suite of risk assessment documents covering the most common landscape construction and maintenance tasks. Suited to smaller businesses completing multiple domestic projects of a similar nature. Contents: click here Suited to businesses completing a wide variety of construction or grounds maintenance projects including work for commercial clients. Contents: click here If you would like to become a member and access the documents on this page please make an enquiry today.",
        bullets: [
          "Identify the hazards that could cause injury or illness in your business",
          "Evaluate the likelihood that someone could be harmed and the severity of this risk",
          "Eliminate the hazard if possible, and if not, control the risk",
          "Introduction to risk assessment",
          "Risk assessment and method statement document",
          "Guidance document",
          "Inventory",
          "Blank template",
          "51 risk assessment and method statement documents",
          "COVID-19 risk assessment",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/risk-assessments/single": {
    eyebrow: "Help & Advice",
    title: "Single risk assessment",
    theme: "warm",
    intro: "The single risk assessment document is suited to smaller businesses completing multiple domestic projects of a similar nature.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/risk-assessments/suite": {
    eyebrow: "Help & Advice",
    title: "Suite of risk assessments",
    theme: "warm",
    intro: "On this page, Association members have free access to a variety of risk assessment and method statement templates, covering the most common landscape construction and maintenance tasks.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/safe-digging": {
    eyebrow: "Help & Advice",
    title: "Safe digging",
    theme: "warm",
    intro: "Earlier this month a groundworks contractor was fined £32,400 and ordered to pay costs of £2657,18 for breaching Construction (Design and Management) Regulations (CDM) which resulted in one of its employees sustaining serious burns to his face, chest, abdomen, groin, both arms and legs, amounting to roughly 50% of his total body.",
    image: { url: "https://www.bali.org.uk/public/images/medium_image-1.jpeg", alt: "Health and Safety Executive report - safe digging" },
    sections: [
      {
        heading: "As indicated in the HSE report, following a safe system of work avoids any serious injuries and fines from safe digging.",
        body: "These burns were caused when an electric breaker used by an operative struck an 11kv electricity cable. Of significance to the landscape industry is the photo included in the Health and Safety Executive’s report, below: The image above shows a situation which many landscape operatives face on a regular basis: digging (relatively shallow) holes in unfamiliar areas of grass. In this instance the operative had used an electronic breaker to break through concrete haunching at the back of a kerb with the intention of installing a new fence. The hole was relatively shallow when the incident occurred. As indicated in the HSE report, following a safe system of work would have avoided this situation. A sae system in this instance consists of three elements: Each of these steps are critical to ensure the safety of operatives breaking ground in any situation. Most underground electrical cables are laid in trenches between 450mm and 1m deep. However, the location of cables should never be assumed – as is shown in the picture above. The HSE have produced a free, detailed guide on how to avoid the dangers associated with breaking ground: http://www.hse.gov.uk/pUbns/priced/hsg47.pdf",
        bullets: [
          "Planning the work",
          "Detecting, identifying and marking underground services",
          "Safe excavation/safe digging practices",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/silica-dust": {
    eyebrow: "Help & Advice",
    title: "Silica dust",
    theme: "warm",
    intro: "The risks associated with asbestos are widely publicised nowadays and, hopefully, the number of fatalities associated with this material will be reduced due to the increased awareness. However, another material – silica dust – is equally damaging to the human respiratory system and found in many of the materials landscape operatives are likely to encounter on a daily basis.",
    sections: [
      {
        heading: "Whilst awareness of asbestos is now universal, another material – silica dust – is equally damaging to the human respiratory system and found in most materials used by the landscape industry",
        body: "Limestone, sandstone, ironstone, marble, granite, concrete, aggregates, mortar, bricks, tiles and slate all contain silica. The silica in these materials is harmless if undisturbed, but drilling, cutting, breaking or grinding can generate dust particles of silica which are harmful to health. Small particles of silica remain airborne for a significant period of time, during which they may be inhaled by unprotected operatives. The small size of silica particles allow them to be inhaled deep into the lungs, where they remain lodged. The body is unable to remove the particles, which means they cause inflammation and scarring. In the long-term, this can cause lung diseases. Appropriate management of exposure to silica dust is of critical importance to the health and well-being of employees. The points below are intended as a guide only, and an expert should be consulted to ensure all risks are correctly identified and appropriate control measures implemented. 1. Stop silica dust getting into the air; where possible, materials could be cut off-site, in a facility where there are fewer receptors to the dust; 2. Identify the tasks which will require cutting, drilling, breaking or grindi...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/slopes": {
    eyebrow: "Help & Advice",
    title: "Slopes",
    theme: "warm",
    intro: "The Association’s own accident statistics, as well as those of the Health and Safety Executive (HSE), report landscape operatives suffer a disproportionately high number of accidents whilst completing tasks on slopes.",
    sections: [
      {
        heading: "A code of practice for the landscape industry",
        body: "1. operator loses control of ride-on machinery - machine loses traction or becomes unstable due to gradient - machine over-turns with operator on-board 2. operator slips or trips whilst using pedestrian or hand-held equipment, resulting in - operator falling - operator losing control or struck by equipment Safely completing work on a slope without incident is not a dark-art or subject to luck; it arises from several measures being implemented: Through liaison with members and their own research, the Association discovered there is a gap in knowledge associated with landscape work on slopes; guidance available online is difficult to find or too generic to be of use. Therefore the BALI National Contractors Forum undertook a project to identify best practice when working on a gradient, to collate this information and disseminate it as a code of practice document. The information within the document is the combined knowledge and experience of established landscape contractors who, over decades, have developed techniques which have allowed them to consistently complete potentially hazardous tasks on slopes without incident. The document covers operational issues associated with the u...",
        bullets: [
          "Machine over-turning due to gradient of slope",
          "Loss of traction between machine tyres and slope, causing machine to slide",
          "Sharp steering input from machine operator causing machine to tip",
          "Operator slips",
          "Inadequate maintenance of machine/equipment",
          "Site-specific risk assessment",
          "Equipment suited to the task and site",
          "Equipment that is correctly maintained",
          "Knowledgeable and experienced staff",
          "Detailed briefing document",
          "Regular review of processes",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Andrew Turner: Slopes Presentation 22 Sep 2023 434kb PDF",
          "Slopes code of practice document 29 Nov 2023 3965kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/whole-body-vibration": {
    eyebrow: "Help & Advice",
    title: "Whole body vibration",
    theme: "warm",
    intro: "Whole body vibration (WBV) is a health issue caused by prolonged exposure to vibration, shocks or jolts, transmitted from mobile machinery to the operator through the seat or feet. Whilst research on landscape-specific equipment is limited, prolonged periods spent on ride-on machinery such as tractors, mowers and quads over uneven ground are believed to result in symptoms associated with WBV. Symptoms commonly include lower back pain, WBV may also cause musculoskeletal disorders.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Whole body vibration 20 Aug 2019 348kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety/winter-care": {
    eyebrow: "Help & Advice",
    title: "Winter care",
    theme: "warm",
    intro: "The location of outdoor spaces means most are used throughout the year regardless of weather. Plant growth cycles mean that autumn and winter are a great opportunity to undertake maintenance of a wide range of plant specimens, particularly trees.",
    image: { url: "https://www.bali.org.uk/public/images/medium_snow-clearance-salisbury-mar-2018.jpeg", alt: "winter care" },
    sections: [
      {
        heading: "There really is no latent period in the landscape maintenance profession.",
        body: "Hard surfaces are equally like to be under pressure, and require maintenance to promote their continued use. Grass will continue to grow at a minimum temperature of 14 degrees Celsius, so mowing may continue into the months that are unseasonably mild, subject to the weather and areas being dry enough. Leaves and plant debris will need to be removed from grassed area to prevent lawns from dying and from walkways and hard surfaces to prevent pedestrians slipping and the surfaces becoming stained. Plant and shrub growth will need to be checked and cut back appropriately if it is overhanging walk ways, cars parks or obscuring lines of sight for vehicles and pedestrians on the property. Rejuvenative pruning can take place through the winter, this presents an opportunity to cut back hard those deciduous shrubs that have become overgrown and give them a chance to produce young new healthy growth, which in turn will produce a healthier shrub with improved flowering. Evaluate any areas of soil that have been used as a cut through and may have become compacted leading to soil erosion or uneven surfaces, alleviating compaction through cultivation should take place and replanting or grass s...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/ash-dieback": {
    eyebrow: "Help & Advice",
    title: "Ash dieback",
    theme: "green",
    intro: "Ash dieback was first identified in the UK in 2012. The disease is well established throughout mainland Europe, where it is responsible for losses of commercial and amenity tree planting.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Ash dieback found on three new host species of tree in the UK 15 Jul 2019 423kb PDF",
          "True cost of Ash dieback revealed 8 May 2019 356kb PDF",
          "Ash Dieback Action Plan Toolkit 4 Apr 2019 950kb DOCX",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/asian-hornet": {
    eyebrow: "Help & Advice",
    title: "Asian hornet",
    theme: "green",
    intro: "IntroductionIdentificationSightingsReportingThe Asian hornet is a highly effective predator of insects, including honey bees, flies, caterpillars, aphids and bugs. Evidence suggests Asian hornets systematically attack bee colonies and have the potential to cause significant loses.",
    image: { url: "https://www.bali.org.uk/public/images/1asian-hornet-apha.jpg", alt: "Asian-hornet" },
    sections: [
      {
        heading: "The Asian hornet is an invasive, non-native species from Asia that represents a threat to native bees and insects in the UK.",
        body: "The Asian hornet was first sighted in the UK during 2016. Whilst the UK is still free from the Asian hornet, the risk remains high, particularly in the south of the UK with its warmer, milder climate. Despite the risk to native insects, the Asian hornet does not pose a greater danger to people; it is not aggressive unless provoked, although can sting. Accidental introductions of Asian hornet via the landscape supply chain are a possibility, and BALI members are encouraged to remain vigilant and report any sightings. Click here to view a detailed identification guide From 2016 to the present date there have been a total of 21 confirmed sightings of Asian hornet in England. During 2021 there have been two confirmed sightings and nests destroyed in Berkshire and Hampshire. To review details of all Asian hornet sightings between 2016 and the present day, please click here. Sightings of Asian hornet can be reported either online or email",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/asian-longhorn-beetle": {
    eyebrow: "Help & Advice",
    title: "Asian longhorn beetle",
    theme: "green",
    intro: "The Asian Longhorn Beetle, which was first discovered in Kent in 2012 and likely imported by accident through infested imported wood packaging material, has been eradicated in the UK as a result of six years of trapping and surveillance work by the Forestry Commission and the Animal and Plant Health Agency.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Asian Longhorn Beetle 29 May 2019 324kb DOCX",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/biosecurity-toolkit": {
    eyebrow: "Help & Advice",
    title: "Biosecurity toolkit",
    theme: "green",
    intro: "The Landscape Institute has published a new plant health and biosecurity toolkit to help built environment professionals combat Britain’s biggest pests and diseases.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Plant Health and Biosecurity: The Landscape Consultant's Toolkit 11 Apr 2019 586kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/brown-tail-moth": {
    eyebrow: "Help & Advice",
    title: "Brown-tail moth",
    theme: "green",
    intro: "The brown-tail moth is an insect native to the UK. During the caterpillar stage of its lifecycle, the insect develops hairs which can cause a painful, irritant rash or breathing difficulties in humans and animals upon contact. The caterpillar, easily identified by its red and white markings, is commonly found on hedgerow species such as hawthorn, blackthorn, plum, cherry, rose, blackberry and bramble. The hairs may become airborne. Although originally confined to the south of England, the insect has now spread throughout the UK. Landscape operatives are advised to familiarise themselves wit...",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Brown Tail Moth 5 Jun 2019 366kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/canker-stain-of-plane": {
    eyebrow: "Help & Advice",
    title: "Canker stain of plane",
    theme: "green",
    intro: "Ceratocystis platani, which may also be referred to as plane wilt disease, is a serious threat to several plane species, including London plane (Platanus x acerifolia) and its parents, Platanus orientalis and Platanus occidentalis. Whilst the fungus that causes canker stain of plane is not yet in the UK, it is now in Italy, France and Greece, and responsible for notable tree fatalities.The fungus can infect specimens through wounds in bark or stems as well as root-to-root contact. As the fungus spreads, it may disrupt the water transport system of the tree and cause cankers. Whilst these ca...",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Canker stain of plane 22 Jul 2019 243kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/eight-toothed-spruce-bark-beetle": {
    eyebrow: "Help & Advice",
    title: "Eight-toothed spruce bark beetle",
    theme: "green",
    intro: "Ips typographus, also known as European spruce bark beetle, eight-toothed spruce bark beetle, bark beetle, eight-dentate beetle, engraver beetle, eight-spined beetle and spruce bark beetle, is considered a serious pest of spruce (Picea) as well as some species in other conifer genera in Europe.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/emerald-ash-borer": {
    eyebrow: "Help & Advice",
    title: "Emerald ash borer beetle",
    theme: "green",
    intro: "Whilst there have been no discoveries in the United Kingdom to date, the ability of the beetle to fly means it has now spread across USA, Canada and Russia, and is now within 10km of the Russian borders with Ukraine and Belarus.",
    image: { url: "https://www.bali.org.uk/public/images/medium_eab-infested-ash-toronto-3-cropped-deagan-inwa.width-800.jpeg", alt: "emerald ash borer beetle" },
    sections: [
      {
        heading: "The emerald ash borer beetle (Agrilus planipennis) is a potential threat to ash trees in the UK.",
        body: "Infestation of ash trees by emerald ash borer is normally fatal. As UK ash trees are already under threat from Chalara ash dieback (which is already established in the UK), it is feared the effect on ash trees from further attacks would be serious. As the name suggests, emerald ash borer beetles are a metallic emerald green colour, with adults between 7.5 and 13.5mm long. Unfortunately, infestation of the beetle is difficult to detect until symptoms become severe. Clues to infestation include: Members who identify any signs of emerald ash borer are encouraged to contact either the Animal and Plant Agency (APHA) or Forest Research.",
        bullets: [
          "Crown dieback and dying branches",
          "Yellowing and thinning foliage",
          "D-shaped holes in the bark, produced by adult beetles as they emerge from larval stage",
          "Serpentine galleries beneath bark of tree",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/oak-lace-bug": {
    eyebrow: "Help & Advice",
    title: "Oak lace bug",
    theme: "green",
    intro: "Oak lace bug (Corythucha arcuata) is not yet in the UK, but is widespread in Europe. It has been highlighted as a potential future risk to broad-leaved trees in the UK, and particularly oak. The adult lace bug feeds on the underside of leaves, and whilst is not a significant threat in isolation, large numbers of the pest can cause stress, premature leaf drop and result in hosts more susceptible to pests and diseases. As with many other pests and diseases, the primary source of transmission is within traded materials.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "oak lace bug 14 Aug 2019 323kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/oak-processionary-moth": {
    eyebrow: "Help & Advice",
    title: "Oak processionary moth",
    theme: "green",
    intro: "Introduction Identification Guidance for landscape professionalsReporting OPM Resources",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Post Planting Inspection Form 29 Oct 2024 50kb XLSX",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/ticks": {
    eyebrow: "Help & Advice",
    title: "Ticks and encephalitis virus",
    theme: "green",
    intro: "An infectious disease, discovered in the UK for the first time and carried by ticks, has the potential to damage the brain and can also affect humans through the tick's bite. Public Health England (PHE) has confirmed the presence of the encephalitis virus, which originates from the tick, in Thetford Forest Norfolk and on the Hampshire-Dorset border. While the PHE says the risk is “very low”, it is investigating how common the infected ticks might be.",
    image: { url: "https://www.bali.org.uk/public/images/ticks-in-grass.jpg", alt: "Ticks can be found in long grass" },
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "PHE Tick Awareness Tookit 31 Oct 2019 906kb PDF",
          "PHE Surveillance Survey 2019 31 Oct 2019 519kb PDF",
          "PHE Ticket Awareness Leaflet 31 Oct 2019 1789kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/pests/xylella": {
    eyebrow: "Help & Advice",
    title: "Xylella fastidiosa",
    theme: "green",
    intro: "Contents- Introduction - Geographic distribution of Xylella- How the trade and public can help- New measures in 2021",
    sections: [
      {
        heading: "Xylella fastidiosa has the potential to cause disease in over 350 plant species. It has not been detected in the UK but there have been major outbreaks across Europe.",
        body: "Xylella fastidiosa, more commonly referred to as Xylella, is a bacterium which causes disease in a wide range of plants including many shrubs and herbaceous plants, olive and several species of broadleaf trees. Common symptoms of Xylella include leaf scorch, wilt, die-back and plant death. There is no known cure for the disease. Outbreaks of Xylella have previously occurred in Italy, France, Spain, Germany and Portugal, and the disease continues to spread throughout Europe. Outbreaks were discovered in Belgium in 2018, and in Southern France, Italy and Spain during 2020. The challenge associated with managing the spread of Xylella concerns its long latency period, which means infected host plants may be transported into non-infected countries such as the UK without showing any symptoms. Research suggests there is a higher risk of Xylella with olive, almond, lavender, rosemary, coffee and polygala plants. The trade and public are asked to look out for symptoms and report cases which cannot be explained by factors such as frost damage, drought or other common pests and diseases, to the TreeAlert service. Advice to help prevent the accidental introduction of Xylella includes: To pr...",
        bullets: [
          "Source new plants carefully, where possible purchase plants grown in the UK",
          "Propagate your own plants from seeds or cuttings",
          "Check plants for signs of disease before purchase and monitor the health of new plants",
          "Never bring plants back with you from abroad",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health": {
    eyebrow: "Help & Advice",
    title: "Plant health information",
    theme: "green",
    intro: "Plant health is under threat. Climate change and human activities have altered ecosystems, reduced biodiversity and created new niches where pests and diseases can thrive. At the same time, international travel and trade has tripled in volume in the last decade and allowed pests and diseases to spread around the world causing great damage to native plants and the environment.",
    sections: [
      {
        heading: "The landscape industry has an important role to play",
        body: "Updated plant health regulations were introduced by the European Union during December 2019 to prevent the spread of pests and diseases, and place responsibilities on all landscape professionals. Most EU plant health regulations were adopted by the UK upon departure from the EU in December 2020. Use of UK plant passports is required for most movements of plants and plant material within the UK from January 2021. Plants and plant material imported into the UK from the EU will require a phytosanitary certificate upon entry. Click the buttons below to learn more about each area.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/exporting": {
    eyebrow: "Help & Advice",
    title: "Exporting plants and plant products",
    theme: "green",
    intro: "On 1st January 2021 new rules were placed on the movement of goods between the United Kingdom (UK) and European Union (EU) - but also between the UK and Northern Ireland. Businesses involved in the export of plants, plant material and machinery need to adapt their working practices accordingly.",
    image: { url: "https://www.bali.org.uk/public/images/ispm15-1.jpg", alt: "ISPM-Pallet-1" },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/exporting/northern-ireland": {
    eyebrow: "Help & Advice",
    title: "Northern Ireland",
    theme: "green",
    intro: "- Introduction - Northern Ireland Protocol- EU-UK Trade and Cooperation Agreement- Points of Entry (PoE)- Sanitary and Phytosanitary (SPS) checks- Notification of imports to a Point of Entry - TRACES NT- Growing media- Used Agricultural and Forestry Machinery- Authorised Traders- Movement Assistance Scheme - Trader Support Service - Training course information",
    sections: [
      {
        heading: "Exporting material from GB to Northern Ireland",
        body: "The departure of the United Kingdom from the European Union (EU) had the potential to create a border – referred to as a hard border – between Northern Ireland (who voted to leave the EU with the United Kingdom) and the Republic of Ireland (a member of the European Union). There was a fear that creation of a hard border between Northern Ireland and Republic of Ireland – as has existed in the past – had the potential to create division and reignite tension between Northern Ireland and the Republic of Ireland. The Northern Ireland Protocol was presented as a solution to this potential issue. The Northern Ireland Protocol permits people and goods to travel freely between Northern Ireland and the Republic of Ireland without any physical borders, but means Northern Ireland must comply with EU rules on Sanitary and Phytosanitary (SPS) eligible goods. As a result of the Northern Ireland Protocol, trade between Northern Ireland and the European Union remains largely unaffected. However, since England, Scotland and Wales are no longer members of the EU, it has been suggested that a virtual border now exists in the Irish Sea between Great Britain and Northern Ireland. The trade deal reach...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/faq": {
    eyebrow: "Help & Advice",
    title: "FAQ",
    theme: "green",
    intro: "What is the purpose of a plant passport?Why has the use of plant passports been increased?My business deals with a variety of plants, how do I know which ones require a plant passport?Do I need to issue a plant passport when moving plants or plant products from one of my premises to the other?Are there any exceptions to the plant passport rule?Where can I find Part A and Part B on a Plant Passport?",
    image: { url: "https://www.bali.org.uk/public/images/1plant-passport-copy.jpg", alt: "Plant passport" },
    sections: [
      {
        heading: "Frequently Asked Questions",
        body: "What is the purpose of a plant passport? Plant passports ensure that plants and plant products are traced throughout the supply chain and declares compliance with plant health requirements such as freedom from pests, which is essential for maintaining biosecurity. Why has the use of plant passports been increased? Plant passports allows the UK to take a more proactive approach to plant health, instead of a reactive approach. Therefore in the future we will be able tackle pest threats to industry and the environment as they emerge. My business deals with a variety of plants, how do I know which ones require a plant passport? The following require a plant passport for movement within the UK: • all plants for planting;• root and tubercle vegetables;• some common fruits other than fruit preserves by deep freezing;• some cut flowers;• some seeds ;• leafy vegetables other than vegetables preserved by deep freezing;• potatoes from some countries;• machinery or vehicles which have been operated for agricultural or forestry purposes. For a full list of plants, plant products and other objects for which a plant passport is required for movement within the Union territory from 14 December ...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/glossary": {
    eyebrow: "Help & Advice",
    title: "Glossary",
    theme: "green",
    intro: "Authorised operator Competent authority Phytosanitary certificate Place of destinationPlant passportProfessional operatorRegistered operator Trade Unit",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/plant-passports": {
    eyebrow: "Help & Advice",
    title: "Moving plants within the UK",
    theme: "green",
    intro: "Information on moving plants within the UK from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/plant-passports/commercial-contractor": {
    eyebrow: "Help & Advice",
    title: "Commercial landscape contractor",
    theme: "green",
    intro: "Any landscape business professionally involved in, and therefore legally responsible for one or more of the following activities concerning plants or plant products must register as a professional operator:",
    sections: [
      {
        heading: "What do commercial landscape contractors need to do?",
        body: "1. Register as a professional operator - Planting- Breeding- Production, including growing, multiplying and maintaining- Introduction into, and movement within and out of, the Union territory- Making available on the market- Storage, collection dispatching and processing Q: Who must I register as a professional operator with?A: You must register with the appropriate competent authority: England Animal and Plant Health Agency (APHA) Scotland Science and Advice for Scottish Agriculture (SASA) Northern Ireland Department of Agriculture Environment and Rural Affairs (DAERA) 2. Record plant passports you receive from authorised operators* together with details of the authorised operator (name and address) who sold you the plants. You need to record this information (physically or digitally) for 3 years. The minimum information which must be recorded from the plant passport(s) supplied is Part A (the botanical name(s) of the plant(s) species concerned) and Part B (the supplying operator's registration number). Click here to see where Part A and Part B may be found on a plant passport. The information contained with Part A and Part B is required for each trade unit (see glossary for de...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/plant-passports/designer": {
    eyebrow: "Help & Advice",
    title: "Designer",
    theme: "green",
    intro: "The role played by garden and landscape designers is likely to differ between members and projects, meaning some interpretation of the guidance may be required. Please contact BALI for help understanding your responsibilities.",
    sections: [
      {
        heading: "What do designers need to do?",
        body: "If your role involves any purchasing of plants on behalf of a domestic or commercial client, or planting on behalf of a domestic or commercial customer, you are required to register as a professional operator. If your role involves producing designs only, and a landscape contractor performs all duties relating to supplying and planting, you are not required to register as a professional operator. When to register as a professional operator: Any landscape business professionally involved in, and therefore legally responsible for one or more of the following activities concerning plants, plant products or other objects must register as a professional operator: - Planting - Breeding- Production, including growing, multiplying and maintaining - Introduction into, and movement within and out of, the Union territory - Making available on the market- Storage, collection dispatching and processing How to register as a professional operator: You must register as a professional operator with the appropriate competent authority: England: Animal and Plant Health Agency (APHA)Scotland: Science and Advice for Scottish Agriculture (SASA)Northern Ireland: Department of Agriculture Environment a...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/plant-passports/domestic-contractor": {
    eyebrow: "Help & Advice",
    title: "Domestic landscape contractor",
    theme: "green",
    intro: "Any landscape business professionally involved in, and therefore legally responsible for one or more of the following activities concerning plants, plant products or other objects must register as a professional operator:",
    sections: [
      {
        heading: "What do domestic landscape contractors need to do?",
        body: "1. Register as a professional operator - Planting - Breeding- Production, including growing, multiplying and maintaining - Introduction into, and movement within and out of, the Union territory - Making available on the market- Storage, collection dispatching and processing Q: Who must I register with?A: You must register with the appropriate competent authority: England Animal and Plant Health Agency (APHA)Scotland Science and Advice for Scottish Agriculture (SASA)Northern Ireland Department of Agriculture Environment and Rural Affairs (DAERA) 2. Record plant passports you receive from authorised operators* together with details of the authorised operator (name and address) who sold you the plants. You need to record this information (physically or digitally) for 3 years. The minimum information which must be recorded from the plant passport(s) supplied is Part A (the botanical name(s) of the plant(s) species concerned) and Part B (the supplying operator's registration number). This FAQ document highlights where Part A and Part B may be found on a plant passport. The information contained with Part A and Part B is required for each trade unit (see glossary for definition of tra...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/plant-health/post-brexit": {
    eyebrow: "Help & Advice",
    title: "Importing plants and plant products from the EU to GB",
    theme: "green",
    intro: "- Summary of changes 2021/2022- Pre-notification requirements from January 2022- Place of Destination Scheme- Prioritisation of high priority plant inspections- Inspection fees- Border Control Post - Border Control Post FAQ- Control Point - Control Point FAQ- Difference between Border Control Posts and Control Points- Border Control Post and Control Point: Additional information- Imports from Ireland to GB- Content and format of UK Plant Passports- 'Pest Free Area' to replace 'Protected Zones'- IT systems associated with importing plants and plant products - PEACH - IPAFFS- Defra drop-in se...",
    image: { url: "https://www.bali.org.uk/public/images/1plant-passport.jpg", alt: "Plant passport" },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/guides": {
    eyebrow: "Help & Advice",
    title: "Guides",
    theme: "warm",
    intro: "Unlock your marketing potential with our exclusive collection of best practice guides, created just for BALI members.",
    image: { url: "https://www.bali.org.uk/public/images/small_4smbpg-800x500.png", alt: "Social Media Best Practice Guide" },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/managing-client-expectations": {
    eyebrow: "Help & Advice",
    title: "Login",
    theme: "warm",
    intro: "Information on login from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/domestic-landscape-contract": {
    eyebrow: "Help & Advice",
    title: "Landscape contract",
    theme: "warm",
    intro: "The British Association of Landscape Industries has developed 3 template contracts for use by designer and contractor members with their domestic client.",
    sections: [
      {
        heading: "documents",
        body: "",
        bullets: [
          "Domestic Contracts: Design only 17 May 2023 86kb DOCX",
          "Domestic Contract: Build only 17 May 2023 97kb DOCX",
          "Domestic Contracts: Design and Build 17 May 2023 98kb DOCX",
          "Project variation template 18 May 2023 593kb DOCX",
          "Practical completion certificate 8 Nov 2024 25kb DOCX",
          "Contact details 8 Nov 2024 23kb DOCX",
          "Privacy notice 8 Nov 2024 23kb DOCX",
          "Biodiversity Net Gain - Member Views 24 Jul 2025 386kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/online-renewals-faqs": {
    eyebrow: "Help & Advice",
    title: "Online renewals FAQs",
    theme: "warm",
    intro: "All membership renewals must be completed in full* by 31 March 2026.* For your renewal to be completed in full, you must check and confirm your company information is correct and the Association must have received payment of your fees.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/amenity": {
    eyebrow: "LISS/CSCS",
    title: "Amenity",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/labourer-hi-res-rgb.jpg", alt: "amenity" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Amenity Labourer Green",
        body: "This SmartCard is for a labourer who is supervised by a competent skilled person.",
      },
      {
        heading: "Amenity Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant qualification, technical award/professional membership.",
      },
      {
        heading: "Amenity Experienced Worker (Temporary) Red",
        body: "This temporary card is available specifically for workers with on the job experience (at least one year in the last three) who are registered to complete a relevant NVQ/SVQ/Diploma at Level 2.",
      },
      {
        heading: "Amenity Skilled Worker Blue",
        body: "This SmartCard is for a skilled worker who has achieved a relevant NVQ/SVQ/Diploma at Level 2 appropriate to amenity or relevant training for an Artificial Grass Installer.",
      },
      {
        heading: "Amenity Experienced Technical, Supervisor or Manager Red",
        body: "This SmartCard is available specifically to Supervisors/Managers with on the job experience (at least one year in the last three) who are registered to complete a relevant NVQ/SVQ/Diploma.",
      },
      {
        heading: "Amenity Supervisor Gold",
        body: "This SmartCard is for a supervisor who has achieved a relevant NVQ/SVQ/Diploma at Level 3.",
      },
      {
        heading: "Amenity Manager Black",
        body: "This SmartCard is for a manager who has achieved a relevant NVQ/SVQ/Diploma at Level 4 or above.",
      },
      {
        heading: "Amenity Academically Qualified Person (AQP) White/Yellow",
        body: "This SmartCard is available for an applicant who has achieved a related Degree/HND/HNC.",
      },
      {
        heading: "Amenity Provisional Red",
        body: "This SmartCard is for an individual who is over 16 and is either on a probationary period or supervised work experience. This SmartCard is valid for six months and is not renewable.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/arboriculture": {
    eyebrow: "LISS/CSCS",
    title: "Arboriculture",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/small-labourer-hi-res-rgb.jpeg", alt: "arboriculture" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Arborist Labourer Green",
        body: "This SmartCard is for labourers who are supervised by a competent skilled person.",
      },
      {
        heading: "Arborist Skilled Worker Blue",
        body: "This SmartCard is for skilled worker who has achieved a relevant chainsaw qualification.",
      },
      {
        heading: "Arborist Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant qualification or professional membership.",
      },
      {
        heading: "Arborist Experienced Technical, Supervisor or Manager Red",
        body: "This SmartCard is available specifically to Supervisors/Managers with on the job experience (at least one year in the last three) who are registered to complete a relevant Diploma/NVQ/SVQ.",
      },
      {
        heading: "Arborist Supervisor Gold",
        body: "This SmartCard is for a supervisor who has achieved a relevant NVQ/SVQ/Diploma at Level 3.",
      },
      {
        heading: "Arborist Manager Black",
        body: "This SmartCard is for a manager who has achieved a relevant NVQ/SVQ/Diploma at Level 4 or above.",
      },
      {
        heading: "Arborist Academically Qualified Person (AQP) White/Yellow",
        body: "This SmartCard is available for an applicant who has achieved a related Degree/HND/HNC.",
      },
      {
        heading: "Arborist Professionally Qualified Person (PQP) White/Yellow",
        body: "This SmartCard is available for an applicant who is a current Full/Fellow Member of the Arboricultural Association (AA) or current Chartered/Fellow Member of the Institute of Chartered Foresters (ICF).",
      },
      {
        heading: "Arborist Provisional Red",
        body: "This SmartCard is for an individual who is over 16 and is either on a probationary period or supervised work experience. This SmartCard is valid for six months and is not renewable.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/countryside-management": {
    eyebrow: "LISS/CSCS",
    title: "Countryside management",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/2labourer-hi-res-rgb.jpg", alt: "countryside management" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Countryside Management Labourer Green",
        body: "This SmartCard is for labourers who are supervised by a competent skilled person.",
      },
      {
        heading: "Countryside Management Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant qualification, technical award/professional membership.",
      },
      {
        heading: "Countryside Management Apprentice Red",
        body: "This SmartCard is for an apprentice who has commenced on a recognised apprenticeship framework but has yet to achieve it.",
      },
      {
        heading: "Countryside Management Experienced Worker (Temporary) Red",
        body: "This temporary card is available specifically for workers with on the job experience (at least one year in the last three) who are registered to complete a relevant NVQ/SVQ/Diploma at Level 2.",
      },
      {
        heading: "Countryside Management Skilled Worker Blue",
        body: "This SmartCard is for a skilled worker who has achieved a relevant NVQ/SVQ/Diploma at Level 2.",
      },
      {
        heading: "Countryside Management Experienced Technical, Supervisor or Manager Red",
        body: "This SmartCard is available specifically to Supervisors/Managers with on the job experience (at least one year in the last three) who are registered to complete a relevant Diploma/NVQ/SVQ.",
      },
      {
        heading: "Countryside Management Supervisor Gold",
        body: "This SmartCard is for a supervisor who has achieved a relevant NVQ/SVQ/Diploma at Level 3.",
      },
      {
        heading: "Countryside Management Manager Black",
        body: "This SmartCard is for a manager who has achieved a relevant NVQ/SVQ/Diploma at Level 4 or above.",
      },
      {
        heading: "Countryside Management Academically Qualified Person (AQP) White/Yellow",
        body: "This SmartCard is available for an applicant who has achieved a related Degree/HND/HNC.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/ecology": {
    eyebrow: "LISS/CSCS",
    title: "Ecology and environmental management",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/4skilled-worker-hi-res-rgb.jpg", alt: "ecology and environmental management" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Ecology and Environmental Management Skilled Worker Blue",
        body: "This SmartCard is for a skilled worker who is approved and licensed with the appropriate licensing authorities in England, Scotland, Wales and Northern Ireland.",
      },
      {
        heading: "Ecology and Environmental Management Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant qualification/professional membership.",
      },
      {
        heading: "Ecology and Environmental Management Academically Qualified Person (AQP) White/Yellow",
        body: "This SmartCard is available for an applicant who has achieved a related Degree/HND/HNC.",
      },
      {
        heading: "Ecology and Environmental Management Professionally Qualified Person (PQP) White/Yellow",
        body: "This SmartCard is available for applicants who are Full Members of the Chartered Institute of Ecology and Environmental Management (CIEEM) or a Member Grade/Chartered/Fellow Membership of the Chartered Institution of Water and Environmental Management (CIWEM).",
      },
      {
        heading: "Ecology and Environmental Management Provisional Red",
        body: "This SmartCard is for an individual who is over 16 and is either on a probationary period or supervised work experience. This SmartCard is valid for six months and is not renewable.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/landscape-maintenance": {
    eyebrow: "LISS/CSCS",
    title: "Landscape and maintenance",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/3labourer-hi-res-rgb.jpg", alt: "landscape and maintenance" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Landscape and Maintenance Labourer Green",
        body: "This SmartCard is for labourers who are supervised by a competent skilled person.",
      },
      {
        heading: "Landscape and Maintenance Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant qualification, technical award/professional membership.",
      },
      {
        heading: "Landscape and Maintenance Apprentice Red",
        body: "This SmartCard is for an apprentice who has commenced on a recognised apprenticeship framework but has yet to achieve it.",
      },
      {
        heading: "Landscape and Maintenance Experienced Worker (Temporary) Red",
        body: "This temporary card is available specifically for workers with on the job experience (at least one year in the last three) who are registered to complete a relevant NVQ/SVQ/Diploma at Level 2.",
      },
      {
        heading: "Landscape and Maintenance Skilled Worker Blue",
        body: "This SmartCard is for a skilled worker who has achieved a relevant NVQ/SVQ/Diploma at Level 2 appropriate to landscaping or relevant training for an environmental maintenance operative/green roof installer.",
      },
      {
        heading: "Landscape and Maintenance Experienced Technical, Supervisor or Manager Red",
        body: "This SmartCard is available specifically to Supervisors/Managers with on the job experience (at least one year in the last three) who are registered to complete a relevant Diploma/NVQ/SVQ.",
      },
      {
        heading: "Landscape and Maintenance Supervisor Gold",
        body: "This SmartCard is for a supervisor who has achieved a relevant NVQ/SVQ/Diploma at Level 3.",
      },
      {
        heading: "Landscape and Maintenance Manager Black",
        body: "This SmartCard is for a manager who has achieved a relevant NVQ/SVQ/Diploma at Level 4 or above.",
      },
      {
        heading: "Landscape and Maintenance Academically Qualified Person (AQP) White/Yellow",
        body: "This SmartCard is available for an applicant who has achieved a related Degree/HND/HNC.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/modular-paving": {
    eyebrow: "LISS/CSCS",
    title: "Modular paving",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/52trainee-hi-res-rgb.jpg", alt: "modular paving" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Modular Paving Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant NVQ/SVQ/Diploma at Level 2.",
      },
      {
        heading: "Modular Paving Skilled Worker Blue",
        body: "This SmartCard is for a skilled worker who has achieved a relevant NVQ/SVQ/Diploma at Level 2.",
      },
      {
        heading: "Modular Paving Provisional Red",
        body: "This SmartCard is for an individual who is over 16 and is either on a probationary period or supervised work experience. This SmartCard is valid for six months and is not renewable.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply/pesticides": {
    eyebrow: "LISS/CSCS",
    title: "Pesticides and pest control",
    theme: "green",
    intro: "The application form can be completed using Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, IE11, IE10 and IE9. IE8 or earlier is not supported. The form can be completed on mobile browsers but we recommend using a desktop browser for the best experience.",
    image: { url: "https://www.bali.org.uk/public/smart-cards/3trainee-hi-res-rgb.jpeg", alt: "pesticides and pest control" },
    sections: [
      {
        heading: "Please select the appropriate SmartCard below.",
        body: "**PLEASE ENSURE YOU DO NOT USE ANY SPECIAL CHARACTERS IN THE APPLICATION FIELDS** Electronic card checks are the most secure way to check if a card is valid. Did you know there are a number of ways to check a card electronically? check a Smartcard",
      },
      {
        heading: "Pesticides Trainee Red",
        body: "This SmartCard is for a trainee who is registered to complete a relevant qualification.",
      },
      {
        heading: "Pest Control Apprentice Red",
        body: "This SmartCard is for an apprentice who has commenced on a recognised apprenticeship framework but has yet to achieve it.",
      },
      {
        heading: "Pesticide Experienced Technical, Supervisor or Manager Red",
        body: "This SmartCard is available specifically to Managers with on the job experience (at least one year in the last three) who are registered to complete a relevant Diploma/NVQ/SVQ.",
      },
      {
        heading: "Pesticide or Pest Control Blue Skilled Worker",
        body: "This SmartCard is for a skilled worker who has achieved a relevant pesticide or pest control qualification.",
      },
      {
        heading: "Pesticide Manager Black",
        body: "This SmartCard is for a manager who has achieved a relevant pesticides qualification.",
      },
      {
        heading: "Pesticide Academically Qualified Person (AQP) White/Yellow",
        body: "This SmartCard is available for applicants who has achieved a related Degree/HND/HNC.",
      },
      {
        heading: "Pesticides and Pest Control Provisional Red",
        body: "This SmartCard is for an individual who is over 16 and is either on a probationary period or supervised work experience. This SmartCard is valid for six months and is not renewable.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification": {
    eyebrow: "LISS/CSCS",
    title: "Check your qualification(s)",
    theme: "green",
    intro: "This should relate to the role that you carry out on site. If you hold more than one qualification and they map to different Land-based sectors but link to the same level of LISS/CSCS card then you may be eligible to obtain more than one title on the reverse of your LISS/CSCS card.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/amenity": {
    eyebrow: "LISS/CSCS",
    title: "Amenity qualifications",
    theme: "green",
    intro: "If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
    sections: [
      {
        heading: "Trainee (Red) Working toward Level 2 or Experienced Worker - Temporary (Red)",
        body: "",
        bullets: [
          "Level 2 Work Placed Diploma in Work-based Horticulture (City & Guilds) (0065)",
          "Level 2 BTEC First Diploma in Amenity Horticulture (Edexcel)",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue) - Amenity worker",
        body: "",
        bullets: [
          "Level 2 Work Placed Diploma in Work-based Horticulture (City & Guilds) (0065)",
          "Level 2 BTEC First Diploma in Amenity Horticulture (Edexcel)",
          "Level 2 NVQ Hard Landscape Amenity Horticulture (City & Guilds)",
          "Level 2 NVQ Amenity Horticulture - Decorative Horticulture",
          "Level 2 NVQ in Amenity Horticulture (NPTC)",
          "Level 3 Certificate in Amenity Horticulture (City & Guilds)",
          "Level 2 Horticulture or Landscape Construction Operative Level 2 (IfATE) (ST0225)",
          "Level 2 NVQ Amenity Horticulture (City & Guilds) (Landscaping)",
          "National Certificate in Horticulture/Amenity Horticulture (NEB)",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue) - Artificial Grass Installer",
        body: "",
        bullets: [
          "Installation of Artificial Grass Surfaces (Lantra link)",
        ],
      },
      {
        heading: "Trainee Supervisor (Red) Working toward Level 3 or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "Level 3 Work Placed Diploma in Work-based Horticulture (City & Guilds) (0065)",
          "Level 3 National Diploma in Horticulture (BTEC) Edexcel",
          "Level 3 Advanced National Diploma in Horticulture (City & Guilds)",
          "Level 3 Extended Diploma in Horticulture (BTEC) Edexcel",
          "Level 3 Extended Diploma in Horticulture (City & Guilds)",
          "Level 3 SVQ in Amenity Horticulture (SQA)",
          "Level 3 Advanced Certificate in Amenity and Decorative Horticulture",
          "National Certificate in Horticulture/Amenity Horticulture (NEB)",
          "Level 3 Advanced National Certificate in Horticulture Landscape and Garden Design",
          "Level 3 NVQ Diploma in Occupational Work Supervision (Landscape and Maintenance) (Lantra Awards) Click here",
        ],
      },
      {
        heading: "Level 3 - Supervisor (Gold)",
        body: "Qualifications must contain supervisory elements.",
        bullets: [
          "Level 3 Work Placed Diploma in Work-based Horticulture (City & Guilds) (0065)",
          "Level 3 National Diploma in Horticulture (BTEC) Edexcel",
          "Level 3 Advanced National Diploma in Horticulture (City & Guilds)",
          "Level 3 Extended Diploma in Horticulture (BTEC) Edexcel",
          "Level 3 Extended Diploma in Horticulture (City & Guilds)",
          "Level 3 SVQ in Amenity Horticulture (SQA)",
          "Level 3 Advanced Certificate in Amenity and Decorative Horticulture",
          "The Advanced National Certificate in Horticulture (NEB)",
          "Level 3 Advanced National Certificate in Horticulture Landscape and Garden Design",
          "Level 3 NVQ Diploma in Occupational Work Supervision (Landscape and Maintenance) (Lantra Awards) Click here",
        ],
      },
      {
        heading: "Trainee Manager (Red) Working toward Level 4 or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "City & Guilds Level 4 NVQ Amenity Horticulture Management",
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (Require relevant field unit breakdown)",
          "Level 5 Horticulture and Landscaping Technical Manager Apprenticeship(Skills England) Click here",
        ],
      },
      {
        heading: "Level 4 - Manager (Black)",
        body: "",
        bullets: [
          "Level 4 NVQ Amenity Horticulture Management (City & Guilds)",
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (Require relevant field unit breakdown)",
          "Level 5 Horticulture and Landscaping Technical Manager Apprenticeship ST0294 (Skills England) Click here",
        ],
      },
      {
        heading: "Red Trainee (AQP) Academically Qualified Person - Working towards a relevant Amenity degree:",
        body: "",
        bullets: [
          "Amenity related Degree (proof of enrolment)",
        ],
      },
      {
        heading: "(AQP) Academically Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "Foundation Degree in Landscape & Amenity Horticulture",
          "Level 5 Higher National Diploma in Horticulture (BTEC) Edexcel",
          "Level 4 Higher National Certificate in Horticulture (BTEC) Edexcel",
        ],
      },
      {
        heading: "Trainee PQP (Red)",
        body: "",
        bullets: [
          "We are currently working on recognising professional bodies for Amenity",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/arboriculture": {
    eyebrow: "LISS/CSCS",
    title: "Arboriculture qualifications",
    theme: "green",
    intro: "Refresher Training for Arborist Blue Skilled Worker LISS/CSCS Cards",
    sections: [
      {
        heading: "Level 2 - Skilled Worker (Blue)",
        body: "Any Chainsaw qualifications that are applicable to the blue skilled LISS/CSCS card category and are more than 5 years old will require either, evidence of refresher training, or evidence of upskilling to a higher level chainsaw qualification. Any refresher training must be supported by certification from Lantra or a City and Guild Digital Certificate at a grade 3 or above (full access to the digital certificate must be given so we can validate the grade). It is the employers’ responsibility to ensure the individual is adequately trained and competent in all related areas of their job role. This will also be applicable on renewal of all cards. LISS/CSCS Refresher Chainsaw Guidance Chainsaw Maintenance and Cross-Cutting ONLY or Tree Climbing & Aerial Rescue ONLY or Stump Grinder ONLY or Groundsman (Blue) or Ground-based Chainsaw User (Blue) or Advanced Ground-based Chainsaw User (Blue) or Arborist Chainsaw User (Off Ground) (Blue) or Advanced Arborist Chainsaw User (Off Ground) (Blue Card) or Utility Arborist Surveyor (Electrical Networks) Or Utility Arborist Surveyor (Railway Networks) Professional Tree Inspector Forest Machine Operator - (The applicant must be trained, qualified...",
        bullets: [
          "Level 2 Award in Chainsaw Maintenance",
          "Level 2 Award in Cross-cut Timber Using a Chainsaw",
          "Level 2 Award in Chainsaw Maintenance and Cross Cutting",
          "Level 2 Award in Accessing a Tree Using a Rope and Harness",
          "Level 3 Award in Aerial Tree Rescue Operations",
          "Level 2 Award in Tree Climbing and Rescue",
          "Level 2 Award in the Safe Use of a Stump Grinder (QCF)",
          "Stump Grinder ITA",
          "Level 2 Award in Chainsaw Maintenance",
          "Level 2 Award in Cross-cut Timber Using a Chainsaw",
          "Level 2 Award in Accessing a Tree Using a Rope and Harness",
          "Level 3 Award in Aerial Tree Rescue Operations",
        ],
      },
      {
        heading: "Trainee Supervisor (Red) Working towards Level 3 Qualifications or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "Level 3 Certificate in Forestry and Arboriculture (QAN 500/8719/8)",
          "Level 3 Subsidiary Diploma in Forestry and Arboriculture (QAN 500/8724/1)",
          "Level 3 Diploma in Forestry and Arboriculture (QAN 500/8564/5)",
          "Level 3 Extended Diploma in Forestry and Arboriculture (QAN 500/8720/4)",
          "Level 3 Diploma in Work-based Trees and Timber (QAN 501/0304/0) Pathways:",
          "0083-31 Level 3 Diploma in Work-based Trees and Timber (Forestry Harvesting)",
          "0083-32 Level 3 Diploma in Work-based Trees and Timber (Forestry Establishment and Maintenance)",
          "0083-33 Level 3 Diploma in Work-based Trees and Timber (Forestry Social)",
          "0083-34 Level 3 Diploma in Work-based Trees and Timber (Forestry Green Wood Trades)",
          "0083-35 Level 3 Diploma in Work-based Trees and Timber (Arboriculture)",
          "Level 3 Diploma in Arb (BTEC) Edexcel",
          "Level 3 National Diploma in Forestry and Arboriculture",
        ],
      },
      {
        heading: "Level 3 - Supervisor (Gold)",
        body: "Qualifications must contain supervisory elements.",
        bullets: [
          "Level 3 Certificate in Forestry and Arboriculture (QAN 500/8719/8)",
          "Level 3 Subsidiary Diploma in Forestry and Arboriculture (QAN 500/8724/1)",
          "Level 3 Diploma in Forestry and Arboriculture (QAN 500/8564/5)",
          "Level 3 Extended Diploma in Forestry and Arboriculture (QAN 500/8720/4)",
          "Level 3 Diploma in Work-based Trees and Timber (QAN 501/0304/0) Pathways:",
          "0083-31 Level 3 Diploma in Work-based Trees and Timber (Forestry Harvesting)",
          "0083-32 Level 3 Diploma in Work-based Trees and Timber (Forestry Establishment and Maintenance)",
          "0083-33 Level 3 Diploma in Work-based Trees and Timber (Forestry Social)",
          "0083-34 Level 3 Diploma in Work-based Trees and Timber (Forestry Green Wood Trades)",
          "0083-35 Level 3 Diploma in Work-based Trees and Timber (Arboriculture)",
          "Level 3 Diploma in Arboriculture (BTEC) Edexcel",
          "Level 3 National Diploma in Forestry and Arboriculture",
        ],
      },
      {
        heading: "Trainee Manager (Red) or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "ABC Level 4 Diploma in Arboriculture",
          "ABC Level 6 Professional Diploma in Arboriculture",
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (QCF) (Require relevant field unit breakdown)",
          "ABC Level 4 Certificate in Arboriculture",
        ],
      },
      {
        heading: "Level 4 - Manager (Black)",
        body: "",
        bullets: [
          "ABC Level 4 Diploma in Arboriculture",
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (QCF) (Require relevant field unit breakdown)",
          "ABC Level 4 Certificate in Arboriculture",
        ],
      },
      {
        heading: "Red Trainee (AQP) Academically Qualified Person - Working towards a relevant Arboriculture degree:",
        body: "",
        bullets: [
          "Arboriculture related Degree (proof of enrolment)",
        ],
      },
      {
        heading: "(AQP) Academically Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "Kew Diploma",
          "Professional Diploma in Arboriculture (L6)",
          "HND in Arboriculture (BTEC) Edexcel",
          "HNC in Arboriculture (BTEC) Edexcel",
          "Bachelor Degree in Forestry and Forest Products",
          "Bachelor Degree in Forest and Woodland Management",
          "Bachelor of Science in Arboriculture and Tree Management",
          "MSc in Arboriculture and Urban Forestry",
        ],
      },
      {
        heading: "Trainee (PQP) Professionally Qualified Person (Red)",
        body: "or",
        bullets: [
          "Provide proof of current membership as a Technician/Associate/Student/ member of the Arboricultural Association",
          "Institute of Chartered Foresters - Provide current evidence of your Technician/Associate/Student membership",
        ],
      },
      {
        heading: "(PQP) Professionally Qualified Person (White/Yellow):",
        body: "or If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
        bullets: [
          "Provide proof of current membership as a Full/Fellow Professional Member of Arboricultural Association",
          "Institute of Chartered Foresters - Provide current evidence of your Chartered/Fellow membership",
        ],
      },
      {
        heading: "NOTE: OVERSEAS QUALIFICATIONS",
        body: "If you have a land-based related qualification that was awarded outside the UK and is not currently recognised by LISS/CSCS you should contact Ecctis so that they can review your qualification and determine whether it is comparable to an NVQ, SVQ or other qualification appropriate to your occupation and the LISS/CSCS SmartCard you wish to apply for. To find out further information please click here.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/countryside": {
    eyebrow: "LISS/CSCS",
    title: "Countryside management qualifications",
    theme: "green",
    intro: "If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
    sections: [
      {
        heading: "Trainee (Red) Working toward Level 2 or Experienced Worker - Temporary (Red)",
        body: "",
        bullets: [
          "Pearson BTEC Level 2 Diploma in Countryside and Environment (QCF)",
          "City & Guilds Level 2 Diploma in Countryside and Environment (QCF)",
          "Pearson BTEC Level 2 Certificate in Countryside and Environment (QCF)",
          "Pearson BTEC Level 2 Extended Certificate in Countryside and Environment (QCF)",
          "City & Guilds Level 2 Certificate in Countryside and Environment (QCF)",
          "City & Guilds Level 2 Extended Certificate in Countryside and Environment (QCF)",
          "Level 2 Certificate in Dry Stone Walling (QCF)",
          "Level 3 Certificate in Dry Stone Walling (QCF)",
          "City & Guilds Level 2 Diploma in work-based Environmental Conservation",
          "The BTEC First Diploma in Countryside Management",
          "BTEC Level 2 Environmental Conservation (Landscape and Ecosystem)",
        ],
      },
      {
        heading: "Apprentice (Red) Working towards Level 2",
        body: "",
        bullets: [
          "Institute for Apprenticeships and Technical Education - Countryside Worker (Click link)",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue)",
        body: "",
        bullets: [
          "Pearson BTEC Level 2 Diploma in Countryside and Environment (QCF)",
          "City & Guilds Level 2 Diploma in Countryside and Environment (QCF)",
          "Pearson BTEC Level 2 Certificate in Countryside and Environment (QCF)",
          "Pearson BTEC Level 2 Extended Certificate in Countryside and Environment (QCF)",
          "City & Guilds Level 2 Certificate in Countryside and Environment (QCF)",
          "City & Guilds Level 2 Extended Certificate in Countryside and Environment (QCF)",
          "Level 2 Certificate in Dry Stone Walling (QCF)",
          "Level 3 Certificate in Dry Stone Walling (QCF)",
          "City & Guilds Level 2 Diploma in work-based Environmental Conservation",
          "The BTEC First Diploma in Countryside Management",
          "BTEC Level 2 Environmental Conservation (Landscape and Ecosystem)",
        ],
      },
      {
        heading: "Trainee Supervisor (Red) Working toward Level 3 or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "Pearson BTEC Level 3 Certificate in Countryside Management (QCF)",
          "City & Guilds Level 3 Extended Diploma in Countryside Management (QCF)",
          "Pearson BTEC Level 3 Subsidiary Diploma in Countryside Management (QCF)",
          "Pearson BTEC Level 3 Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 Certificate in Countryside Management (QCF)",
          "Pearson BTEC Level 3 Extended Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 Subsidiary Diploma in Countryside Management (QCF)",
          "Pearson BTEC Level 3 90-credit Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 90-Credit Diploma in Countryside Management (QCF)",
          "Level 3 National Diploma (BTEC) Edexcel",
          "National Certificate in Countryside related studies (breakdown of units required)",
        ],
      },
      {
        heading: "Level 3 - Supervisor (Gold)",
        body: "Qualifications must contain supervisory elements.",
        bullets: [
          "Pearson BTEC Level 3 Certificate in Countryside Management (QCF)",
          "City & Guilds Level 3 Extended Diploma in Countryside Management (QCF)",
          "Pearson BTEC Level 3 Subsidiary Diploma in Countryside Management (QCF)",
          "Pearson BTEC Level 3 Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 Certificate in Countryside Management (QCF)",
          "Pearson BTEC Level 3 Extended Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 Subsidiary Diploma in Countryside Management (QCF)",
          "Pearson BTEC Level 3 90-credit Diploma in Countryside Management (QCF)",
          "City & Guilds Level 3 90-Credit Diploma in Countryside Management (QCF)",
          "Level 3 National Diploma (BTEC) Edexcel",
          "National Diploma in Rural Studies (unit breakdown required)",
        ],
      },
      {
        heading: "Trainee Manager (Red) Working toward Level 4 or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (Require relevant field unit breakdown)",
        ],
      },
      {
        heading: "Level 4 - Manager (Black)",
        body: "",
        bullets: [
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (Require relevant field unit breakdown)",
        ],
      },
      {
        heading: "(AQP) Academically Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "Degree in Countryside Management BSc",
          "Foundation Degree in Countryside Management",
          "Countryside Management (FdSc), Foundation Degree",
          "Landscape and Countryside Management, FdSc Foundation Degree",
          "Master degree in Countryside Management",
          "Countryside and Protected Area Management (Postgraduate Diploma)",
          "Degree in Rural Estate Management",
          "Degree in Rural Sustainability",
          "Foundation Degree in Countryside Conservation and Recreational Management",
          "HND in Countryside Management",
          "Master degree in Land Management",
          "Certificate of Higher Education in Conservation and Countryside Management",
        ],
      },
      {
        heading: "Trainee (PQP) Professionally Qualified Person (Red Card)",
        body: "",
        bullets: [
          "British Society of Soil Science (BSSS) - Provide current evidence of your Associate/Technical Membership",
        ],
      },
      {
        heading: "(PQP) Professionally Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "British Society of Soil Science (BSSS) - Provide current evidence of your Full/Chartered/Fellow Membership",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/ecology": {
    eyebrow: "LISS/CSCS",
    title: "Ecology and environmental qualifications",
    theme: "green",
    intro: "If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
    sections: [
      {
        heading: "Level 2 Skilled Worker - Blue",
        body: "",
        bullets: [
          "Natural England/DEFRA (or equivalents with Scottish Natural Heritage, Natural Resources Wales and Northern Ireland Environment Agency) Class licence (s) for Wildlife Management - Provide current evidence of your licence.",
        ],
      },
      {
        heading: "Red Trainee (AQP) Academically Qualified Person - Working towards a relevant Ecology & Environmental degree:",
        body: "",
        bullets: [
          "Ecology & Environmental Management related Degree (proof of enrolment)",
        ],
      },
      {
        heading: "(AQP) Academically Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "BSc Animal Biology",
          "BSc Animal Conservation and Biodiversity",
          "BSc Animal Science",
          "BSc Applied Ecology",
          "BSc Biodiversity Survey",
          "BSc Biological Recording - Collection and Management",
          "BSc Biological Sciences",
          "BSc Conservation and Biodiversity",
          "BSc Conservation and Wildlife Management",
          "BSc Conservation Science",
          "BSc Degree in Rural Estate Management",
          "BSc Ecological Management and Conservation Biology",
        ],
      },
      {
        heading: "Trainee (PQP) Professionally Qualified Person (Red)",
        body: "",
        bullets: [
          "Chartered Institute of Ecology and Environmental Management (CIEEM) - Provide current evidence of your Student/Qualifying/Graduate or Associate Membership",
          "Chartered Institute of Water & Environmental Management (CIWEM) - Provide current evidence of your Student/Apprentice or Graduate/Technician Membership",
        ],
      },
      {
        heading: "(PQP) Professionally Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "Chartered Institute of Ecology and Environmental Management (CIEEM) - Provide current evidence of your Full/Fellow Membership",
          "Chartered Institute of Water & Environmental Management (CIWEM) - Provide current evidence of your Member Grade/Chartered/Fellow Membership",
        ],
      },
      {
        heading: "NOTE: OVERSEAS QUALIFICATIONS",
        body: "If you have a land-based related qualification that was awarded outside the UK and is not currently recognised by LISS/CSCS you should contact Ecctis so that they can review your qualification and determine whether it is comparable to an NVQ, SVQ or other qualification appropriate to your occupation and the LISS/CSCS SmartCard you wish to apply for. To find out further information please click here.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/landscape": {
    eyebrow: "LISS/CSCS",
    title: "Landscape & maintenance qualifications",
    theme: "green",
    intro: "If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
    sections: [
      {
        heading: "Trainee (Red) working toward Level 2 or Experienced Worker -Temporary (Red)",
        body: "",
        bullets: [
          "Level 2 NVQ Amenity Horticulture (Landscaping) (0329 -22 & -92) or Level 2 Diploma in Work-based Horticulture (Landscaping) (0065-23)",
          "Level 2 Diploma in Work-based Horticulture (C&G)",
          "Level 2 Diploma in Work-Based Horticulture (QCF) (HABC)",
          "Level 2 Certificate in the Principles of Horticulture (RHS) (Previously known as a general certificate)",
          "Work-based Horticulture (QCF)",
          "Level 2 Certificate in Gardening (C&G)",
          "Level 2 Diploma in Horticulture (C&G)",
          "Level 2 National Certificate in Horticulture(C&G)",
          "Level 2 Certificate in Horticulture (BTEC)",
          "Level 2 Diploma in Horticulture (BTEC)",
          "Level 2 Certificate in Practical Horticulture (RHS)",
          "Level 2 First Diploma in Horticulture (BTEC) Level 2 Diploma in the Principles and Practices of Horticulture (RHS)",
        ],
      },
      {
        heading: "Trainee (Red) Green Roof Installer",
        body: "",
        bullets: [
          "Technical Award in The Introduction to Installing and Maintaining Green Roofs - Lantra",
        ],
      },
      {
        heading: "Apprentice (Red) Working toward Level 2",
        body: "",
        bullets: [
          "Institute for Apprenticeships and Technical Education - Horticulture or Landscape Operative - Click here",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue) - Landscaper",
        body: "",
        bullets: [
          "Level 2 NVQ Amenity Horticulture (Landscaping) (0329 -22 & -92) or Level 2 Diploma in Work-based Horticulture (Landscaping) (0065-23)",
          "Level 2 Diploma in Work-based Horticulture (C&G)",
          "Level 2 Diploma in Work-based Horticulture (QCF) (HABC)",
          "Level 2 Certificate in the Principles of Horticulture (RHS)",
          "Work-based Horticulture (QCF)",
          "Level 2 Certificate in Gardening (C&G)",
          "Level 2 Diploma in Horticulture (C&G)",
          "Level 2 Diploma in Sports & Amenity Turf Maintenance (C&G)",
          "Level 2 National Certificate in Horticulture(C&G)",
          "Level 2 Certificate in Horticulture (BTEC)",
          "Level 2 Diploma in Horticulture (BTEC)",
          "Level 2 Certificate in Practical Horticulture (RHS)",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue) - Environmental Maintenance Operative",
        body: "",
        bullets: [
          "LISS/CSCS Litter Picking and Environmental Maintenance (Lantra e-learning link)",
          "Please refer to Appendix ‘Q’ of the NHSS18 ISO2001:2015 on this link and scroll down to find the 2015 version for NHSS18.",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue) Green Roof Installer",
        body: "",
        bullets: [
          "Green Roofs Installer - Lantra click here",
        ],
      },
      {
        heading: "Trainee Supervisor (Red) working toward Level 3 or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "National Diploma in Horticulture (BTEC) Edexcel",
          "National Diploma in Landscape & Horticulture (BTEC) Edexcel",
          "Level 3 Diploma in Horticulture (C&G)",
          "Level 3 Diploma in Work-based Horticulture (C&G)",
          "Level 3 Diploma in Horticulture (BTEC) Edexcel",
          "Level 3 in the Principles & Practices of Horticulture (RHS)",
          "Level 3 Certificate in Practical Horticulture (RHS)",
          "Level 3 Certificate in the Principles of Garden Planning, Construction and Planting (RHS)",
          "Level 3 Subsidiary Diploma in Horticulture (C&G)",
          "Level 3 BTEC National Diploma in Countryside Management",
          "Level 3 Extended Diploma in Horticulture (C&G)",
          "Level 3 90-Credit Diploma in Horticulture (C&G)",
        ],
      },
      {
        heading: "Apprentice (Red) Working toward Level 3",
        body: "",
        bullets: [
          "Institute for Apprenticeships and Technical Education - Landscape or Horticulture Supervisor - Click here",
        ],
      },
      {
        heading: "Level 3 - Supervisor (Gold)",
        body: "Qualifications must contain supervisory elements.",
        bullets: [
          "National Diploma in Horticulture (BTEC) Edexcel",
          "National Diploma in Landscape & Horticulture (BTEC) Edexcel",
          "Level 3 Diploma in Horticulture (C&G)",
          "Level 3 Diploma in Work-based Horticulture (C&G)",
          "Level 3 Diploma in Horticulture (BTEC) Edexcel",
          "Level 3 in the Principles & Practices of Horticulture (RHS)",
          "Level 3 Certificate in Practical Horticulture (RHS)",
          "Level 3 Certificate in the Principles of Garden Planning, Construction and Planting (RHS)",
          "Level 3 Subsidiary Diploma in Horticulture (C&G)",
          "Level 3 Extended Diploma in Horticulture (C&G)",
          "Level 3 90-Credit Diploma in Horticulture (C&G)",
          "Level 3 BTEC National Diploma in Countryside Management",
        ],
      },
      {
        heading: "Trainee Manager (Red) working toward Level 4 or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "Level 4 Amenity Horticulture Management",
          "Level 5 Horticulture and Landscaping Technical Manager (Ofqual Apprenticeship) Click here",
          "Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (Require relevant field unit breakdown) Click here",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/modular-paving": {
    eyebrow: "LISS/CSCS",
    title: "Modular paving qualifications",
    theme: "green",
    intro: "Highways Maintenance Modular Pavement – acceptable qualifications",
    sections: [
      {
        heading: "Level 2 - Skilled Worker (Blue)",
        body: "",
        bullets: [
          "CSkills Awards Level 2 NVQ QUA083) Mason Pavior",
          "CSkills Awards Level 2 NVQ (QUA317) Construction Operations",
          "CSkills Awards Level 2 NVQ (QUA501) Construction & Civil Engineering Services (Mandatory: PR01, PR02 & PR14 Plus Optional: CR05, CR10, CR11 & PR06 - Modular Pavement Construction (CMP) Additional Units: CR03, CR04, CR06, CR07, CR13, PR07",
          "Magenta Level 2 NVQ (QUA757) Construction Operations - Modular Pavement Construction",
          "Edexcel Level 2 NVQ Construction Operations (Modular Pavement Construction)",
          "CSkills Awards Level 2 NVQ Diploma (QUA857) Construction Operations – Modular Paving Construction",
          "SQA Level 2 Construction Operations – Modular Paving Construction",
          "NOCN Level 2 NVQ Certificate in Roadbuilding and Maintenance (Construction)",
          "CSkills Awards Level 2 NVQ (QUA501) Construction & Civil Engineering (Mandatory: PR01, PR02, PR14 CR03, CR10, CR11 & PR06 - Highways Maintenance - Modular Pavement Construction (HMP) Additional Units: CR05, CR14, CR18, CR19, CR20, PR07 & PR12)",
          "CSkills Awards Level 2 NVQ (QUA758) Highways Maintenance - Modular Pavement Construction",
          "CSkills Awards Level 2 NVQ Diploma (QUA858) Highways Maintenance (Construction) – Modular Pavement Construction",
          "CSkills Awards Level 2 NVQ (QUA501) Construction & Civil Engineering Services",
        ],
      },
      {
        heading: "Trainee Supervisor (Red) Working toward Level 3",
        body: "",
        bullets: [
          "Contact CSCS through the Core Scheme as this card is not available through LISS/CSCS",
        ],
      },
      {
        heading: "Level 3 - Supervisor (Gold)",
        body: "",
        bullets: [
          "Contact CSCS through the Core Scheme as this card is not available through LISS/CSCS",
        ],
      },
      {
        heading: "Trainee Manager (Red) Working toward Level 4",
        body: "",
        bullets: [
          "Contact CSCS through the Core Scheme as this card is not available through LISS/CSCS",
        ],
      },
      {
        heading: "Level 4 - Manager (Black)",
        body: "",
        bullets: [
          "Contact CSCS through the Core Scheme as this card is not available through LISS/CSCS",
        ],
      },
      {
        heading: "(AQP) Academically Qualified Person (White/Yellow)",
        body: "",
        bullets: [
          "Contact CSCS through the Core Scheme as this card is not available through LISS/CSCS",
        ],
      },
      {
        heading: "(PQP) Professionally Qualified Person (White/Yellow)",
        body: "If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
        bullets: [
          "Contact CSCS through the Core Scheme as this card is not available through LISS/CSCS",
        ],
      },
      {
        heading: "NOTE: OVERSEAS QUALIFICATIONS",
        body: "If you have a land-based related qualification that was awarded outside the UK and is not currently recognised by LISS/CSCS you should contact Ecctis so that they can review your qualification and determine whether it is comparable to an NVQ, SVQ or other qualification appropriate to your occupation and the LISS/CSCS SmartCard you wish to apply for. To find out further information please click here.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/qualification/pesticides": {
    eyebrow: "LISS/CSCS",
    title: "Pesticides and pest control qualifications",
    theme: "green",
    intro: "Institute for Apprenticeships and Technical Education - Pest Control Technician - Click here",
    sections: [
      {
        heading: "Level 2 Skilled Worker (Blue) - Pesticide",
        body: "Pesticide Operator Boom Sprayer Plus one of the following: or Plus the following: Pesticide Operator Handheld Application City & Guilds Plus one of the following: or Plus the following: Pesticide Operator Granule or Pellet Application Plus one of the following: or Plus the following: Pesticide Operator Ecoplug Installation Plus the following: or Plus the following: Pesticide Operator Stem Injection Plus the following: or Plus the following: Invasive Species Technician Invasive Species Surveyor",
        bullets: [
          "PA1 - Level 2 Principles of Safe Handling and Application of Pesticides Guidance",
          "PA2 - Level 2 Award in the Safe Application of Pesticides Using Self Propelled, Mounted, Trailed Horizontal Boom Sprayers",
          "PA2A - Boom type Hydraulic Nozzle and/or Boom type Rotary Atomiser",
          "PA2C - Boom type Twin Fluid Nozzle",
          "PA2D - Electro-statically charged",
          "PA2E - Boom type fitted with downward air assistance",
          "Level 2 Award in the Safe Use of Pesticides",
          "Level 2 Award in the Safe Application of Pesticides using Vehicle Mounted Boom Sprayer",
          "PA1 - Level 2 Principles of Safe Handling and Application of Pesticides Guidance",
          "PA6 - Level 2 Award in the Safe Application of Pesticides using Pedestrian Hand Held Equipment",
          "PA6A - Hand Held Applicators Hydraulic Nozzle and/or Rotary Atomiser Types",
          "PA6AW - Hand Held Applicators Application to water using Hydraulic Nozzle or Rotary atomiser type sprayers",
        ],
      },
      {
        heading: "Level 2 - Skilled Worker (Blue) - Pest Control",
        body: "",
        bullets: [
          "RSPH Level 2 Award in Pest Management",
          "RSPH Level 2 Certificate in Pest Management",
          "RSPH Level 2 Award in using Aluminium Phosphide Safely for the",
          "Management of Vertebrate Pests",
          "RSPH Level 2 Award in the Safe Use of Rodenticides",
          "Lantra Awards Level 2 Award in the Safe Use of Aluminum Phosphide",
          "Vertebrate Pest Control",
          "C&G Level 2 Award in the Safe Use of Pesticides for Vertebrate Pest Control for Grey Squirrels",
          "C&G Level 2 Award in the Safe Use of Pesticides for Vertebrate Pest Control for Rats and Mice",
          "C&G Level 2 Award in the Safe Use of Aluminium Phosphide for Vertebrate Pest Control",
          "C&G Level 2 Award in the Safe Use of Traps for Vertebrate Pest Control",
          "RSPH Level 3 Award in Safe Use of Fumigants for the Management of Invertebrate Pests",
        ],
      },
      {
        heading: "Trainee Manager (Red) or Experienced Technical, Supervisor or Manager (Red)",
        body: "",
        bullets: [
          "BASIS Foundation Award Amenity (This qualification is for those individuals who need to gain further experience and are working towards the BASIS Certificate in Crop Protection – Amenity Horticulture For Field, Sales and Technical Staff (FSTS)).",
        ],
      },
      {
        heading: "Level 4 - Pesticides Manager (Black)",
        body: "",
        bullets: [
          "BASIS Certificate in Crop Protection – Amenity Horticulture For Field, Sales and Technical Staff (FSTS). Provide current evidence of your BASIS Amenity Register membership.",
        ],
      },
      {
        heading: "Red Trainee (AQP) Academically Qualified Person - Working towards a relevant Pesticide degree:",
        body: "",
        bullets: [
          "Pesticide-related Degree (proof of enrolment)",
        ],
      },
      {
        heading: "(AQP) Academically Qualified Person (White/Yellow)",
        body: "If your qualification is relevant to this sector and it is not listed, please contact BALI for review of this qualification.",
        bullets: [
          "Pesticide-related Degree",
        ],
      },
      {
        heading: "NOTE: OVERSEAS QUALIFICATIONS",
        body: "If you have a land-based related qualification that was awarded outside the UK and is not currently recognised by LISS/CSCS you should contact Ecctis so that they can review your qualification and determine whether it is comparable to an NVQ, SVQ or other qualification appropriate to your occupation and the LISS/CSCS SmartCard you wish to apply for. To find out further information please click here.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/overseas": {
    eyebrow: "LISS/CSCS",
    title: "Overseas Qualifications",
    theme: "green",
    intro: "Ecctis is the parent company that previously looked after the UK NARIC brand and will now be the external facing name.",
    sections: [
      {
        heading: "",
        body: "Historically, LISS/CSCS requested that applicants with overseas qualifications apply to the UK’s international qualifications agency UK NARIC for a Statement of Comparability to compare their awards to UK levels. From 1 October 2019, applicants will be required to obtain an Industry Skills Statement. This Ecctis service maps the skills of overseas qualification holders to UK National Occupational Standards, and also use Primary Source Verification (PSV) to verify that the overseas qualification is genuine. This assists industry bodies in maintaining standards of work and health & safety on construction and land-based industry sites, and in preventing fraudulent applications for cards using fake or altered qualification and training certificates. -------------------------------------------------------------------------------------------------------------------------------------------- Industry Skills Statement for Academically Qualified Persons – relevant for overseas applicants applying for the Academically Qualified Person (AQP) LISS/CSCS SmartCard. As part of the wider strategy for combatting fraud, LISS/CSCS worked with Ecctis to introduce “Primary Source Verification” (PSV) ...",
      },
      {
        heading: "Applying for a LISS/CSCS SmartCard",
        body: "Applicants whose qualifications pass the PSV process are required to provide the following when applying for a LISS/CSCS SmartCard: -------------------------------------------------------------------------------------------------------------------------------------------- Industry Skills Statement with Skills Mapping – relevant for overseas applicants applying for a skilled LISS/CSCS SmartCard: Overseas land-based industry workers wishing to work in the UK must now have the technical content of their overseas vocational qualification mapped against the relevant UK National Occupational Standard for that occupation. This provides an in-depth record of each individual’s skills and capabilities, mapped against units in the National Occupational Standard for their trade. This will improve understanding of the relationship between the UK and overseas land-based industry qualifications at a unit-by-unit level. The mapping to National Occupational Standards will help to ensure that workers have the training they require for their job and will pinpoint areas for additional training if required. The mapping will be verified by Lantra (acting as the Standard Setting Body for the Land-base...",
        bullets: [
          "An Ecctis Industry Skills Statement, AQP option",
          "A Primary Source Verification Report (issued with the above)",
          "A copy of the original qualification (translated)",
          "Once this information is received LISS/CSCS will review and confirm if the qualification is suitable for a LISS/CSCS card",
        ],
      },
      {
        heading: "Applying for a LISS/CSCS SmartCard",
        body: "Applicants whose qualifications pass the enhanced verification process are required to provide the following when applying for a LISS/CSCS SmartCard: --------------------------------------------------------------------------------------------------------------------------------------------",
        bullets: [
          "An Ecctis Industry Skills Statement, trades option",
          "A Primary Source Verification Report (issued with the above)",
          "A copy of the original qualification (translated)",
          "Once this information is received LISS/CSCS will review and confirm if the qualification is suitable for a LISS/CSCS SmartCard",
        ],
      },
      {
        heading: "Benefits",
        body: "The introduction of the new verification process and the mapping of overseas qualifications against the appropriate UK NOS is a positive step that provides the industry with a robust level of scrutiny, similar to that already in place for UK based card applications. By certifying that overseas land-based industry workers have the correct training and qualifications Ecctis and LISS/CSCS are improving standards and safety in the UK land-based industry.",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Ecctis Industry Skills Statement - AQP Flowchart 10 May 2021 348kb PDF",
          "Ecctis Industry Skills Statement - Skills Statement Flowchart 10 May 2021 359kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check/smart-check-app": {
    eyebrow: "LISS/CSCS",
    title: "Smart Check App",
    theme: "green",
    intro: "Site managers can read this information using a smartphone, tablet or PC with the Smart Check app installed, allowing them to instantly record the cardholder’s information, and be secure in the knowledge that the cardholder is qualified for the job they do on-site.",
    sections: [
      {
        heading: "All CSCS cards are Smart (including LISS/CSCS) – they contain a chip that stores information on the cardholder's identity, qualifications and training.",
        body: "Find out how to use CSCS SmartCards (including LISS/CSCS) and the Smart Check app here. There are three ways to check a card using CSCS Smart Check: via Contactless (NFC), using QR codes or by performing a manual check. The explainer videos are below, including what a successful and failed verification attempt looks like on the app.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/accreditation/cardholders": {
    eyebrow: "LISS/CSCS",
    title: "Industry accreditation cardholders",
    theme: "green",
    intro: "The process of certifying training and qualifications ensures LISS/CSCS can play its part in improving standards and safety on UK construction sites. LISS/CSCS’s principle objective is focused on the achievement of industry recognised qualifications, achieved through strong support from many industry stakeholders.",
    sections: [
      {
        heading: "LISS/CSCS cards available to individuals working in the landbased sectors.",
        body: "LISS/CSCS commitment to a fully qualified workforce is underpinned by the Industrial Strategy for Construction. The Construction Leadership Council (CLC), responsible for delivering the Strategy, announced in 2015 that all card schemes should carry the CSCS logo and must operate with nationally recognised qualifications in place for all occupations relevant to their sector. Since the announcement LISS/CSCS developed a number of plans to meet the CLC’s requirements, including agreement on appropriate qualifications for each occupation, with the minimum standard for skilled occupations established by the CLC at Level 2 or equivalent. To meet the requirements of the CLC, previous Industry Accreditation (IA) cardholders can be moved to a recognised qualification. The withdrawal of Industry Accreditation is the final step towards achieving the CLC’s requirement of ensuring nationally recognised qualifications are in place for all occupations. What Happens Next? From 1 January 2020, all Land-based Industry Skills Scheme (LISS)/Construction Skills Certification Scheme (CSCS) cards renewed under Industry Accreditation expired on 31 December 2024 and CSCS stopped issuing the card from 30...",
      },
      {
        heading: "I would like to renew my LISS/CSCS Black Managers Card, what are my options?",
        body: "Lantra has supported BALI by developing the Level 5 Diploma in Principles of Leadership & Management in Landbased Settings (require relevant field unit breakdown) qualification. Please follow the link above to learn more about the course and identify a suitable training provider. This course is available online. Alternatively visit the check your qualifications page for further qualifications. You must ensure that your managers ROLO Health and Safety and managers CITB Touch Screen Test have been completed within the last 2 years when renewing your card.",
      },
      {
        heading: "I would like to renew my LISS/CSCS Gold Supervisors Card, what are my options?",
        body: "Lantra has supported BALI by developing the Lantra Awards Level 3 NVQ Diploma in Occupational Work Supervision (Landscape and Maintenance) qualification. Please follow the link above to learn more about the course and identify a suitable training provider. This course is available online. Alternatively visit the check your qualifications page for further qualifications. You must ensure that your supervisors ROLO Health and Safety and supervisors CITB Touch Screen Test have been completed within the last 2 years when renewing your card.",
      },
      {
        heading: "I would like to renew my LISS/CSCS Blue Skilled Workers Card, what are my options?",
        body: "Please visit the check your qualifications page for all qualifications which we would accept for the blue card. You must ensure that your operatives ROLO Health and Safety and operatives CITB Touch Screen Test have been completed within the last 2 years when renewing your card.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/accreditation/withdrawal-2024": {
    eyebrow: "LISS/CSCS",
    title: "Industry Accreditation SmartCards withdrawal in 2024",
    theme: "green",
    intro: "Do you work in the commercial land-based industry? Looking to upskill your own workforce? Trouble accessing certain live commercial sites? The Land-based Industry Skills Scheme (LISS) and Construction Skills Certification Scheme (CSCS) is a jointly managed scheme (LISS/CSCS) administered by the British Association of Landscape Industries (BALI) and enables you to work on live commercial landbased/construction sites.",
    sections: [
      {
        heading: "BALI’s LISS/CSCS SmartCard scheme announces the withdrawal of all Industry Accreditation cards by 2024",
        body: "The scheme recognises qualifications and training experience, in turn improving employment prospects and enabling the ability to tender for commercial work that requires a LISS/CSCS SmartCard. LISS/CSCS is administered by the British Association of Landscape Industries (BALI). It is a standalone scheme but is also a requirement of the National Highways Sector Scheme 18 (Land-based). For all full operational SmartCard levels, the minimum requirement is the ROLO Health, Safety and Environmental Awareness Course and the CITB Touch Screen Test appropriate to the SmartCard level. Please note for the Modular Paving industry only, the CITB Touch Screen Test appropriate to your SmartCard level is required. For several years the strategic direction of the Construction Skills Certification Scheme (CSCS) has focused on ensuring that all applicants can demonstrate the achievement of a nationally recognised construction related qualification. With the withdrawal of the Construction Related Occupation card and the planned removal of the Site Visitor card, the next step was the withdrawal of cards issued under Industry Accreditation. Industry Accreditation allowed workers to obtain LISS/CSCS c...",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/accreditation/latest-developments": {
    eyebrow: "LISS/CSCS",
    title: "Latest Developments",
    theme: "green",
    intro: "Following a recent communication from CSCS we felt it was time to update our members and LISS/CSCS customers on the current situation with the withdrawal of Industry Accreditation (IA), We will continue to monitor the situation and update our members should any further changes be made.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/rolo/find-provider": {
    eyebrow: "LISS/CSCS",
    title: "ROLO",
    theme: "green",
    intro: "Traditionally ROLO courses are based on-site at training provider venues around the UK, as seen in our directory below, and often see multiple people from different organisations in attendance. As an alternative many Training Providers are offering the ROLO course online.",
    image: { url: "https://www.bali.org.uk/themes/bali/gfx/directory/Online-false.svg", alt: "Course type - Online" },
    sections: [
      {
        heading: "One Ash Training Ltd",
        body: "BALI & ROLO Training Provider Cheshire, WA8 5PY info@oneashtraining.com 0151 420 4522 www.oneashtraining.com",
      },
      {
        heading: "Train To Safety Ltd",
        body: "BALI & ROLO Training Provider Derbyshire, S41 0TZ hello@traintosafety.co.uk 0843 289 0579 www.traintosafety.co.uk",
      },
      {
        heading: "Guthrie & Craig (Training Services)",
        body: "BALI & ROLO Training Provider County Durham, DH1 1TW training@guthrieandcraig.co.uk 0191 603 1066 www.guthrieandcraig.co.uk",
      },
      {
        heading: "Keith Cook Training Ltd",
        body: "BALI & ROLO Training Provider Leicestershire, LE12 9YA david.owen@kcts.me.uk 01509 600330 www.kcts.me.uk",
      },
      {
        heading: "CITP Ltd",
        body: "BALI & ROLO Training Provider Berkshire, RG19 8FZ steve@constructiontrainingproviders.co.uk 01189 700 200 www.constructiontrainingproviders.co.uk",
      },
      {
        heading: "Multevo Ltd",
        body: "BALI & ROLO Training Provider Lancashire, BB3 1BF nfo@multevo.co.uk 01254 703212 https://multevo.co.uk",
      },
      {
        heading: "Horticultural Landscape Solutions",
        body: "BALI & ROLO Training Provider Tyne And Wear, SR6 0NJ hortlandscape.solutions@gmail.com 07769 359545",
      },
      {
        heading: "TQ Exel Ltd",
        body: "BALI & ROLO Training Provider Somerset, BS26 2UG sam.abbott@tqexel.co.uk 01934 750066 www.tqexel.co.uk",
      },
      {
        heading: "Arboricultural & Forestry Support Services",
        body: "BALI & ROLO Training Provider Lancashire, PR1 0UX mpl.g1mail@gmail.com 07901 514259 www.arb-forestry.com",
      },
      {
        heading: "Penarth Management Ltd",
        body: "Accredited Supplier / ROLO Training Provider Glamorgan, CF24 2SA bali@penarth.co.uk 02920 703328 www.penarth.co.uk/landscaping Page 1 of 5",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/rolo/find-course": {
    eyebrow: "LISS/CSCS",
    title: "Training courses",
    theme: "green",
    intro: "ROLO H&S Environmental Awareness Course for Operatives - 1 Day Online",
    image: { url: "https://www.bali.org.uk/public/events/3bali-image-for-event-june.png", alt: "training courses" },
    sections: [
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 day",
        body: "ROLO Operatives Certification with Assessment",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day Online",
        body: "ROLO Operative - 1 day online, hosted by Orchard Learning.",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 day",
        body: "ROLO Operatives Certification with Assessment",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness for Operatives - 1 Day Online",
        body: "Remote online training course for CITB HS&E test for most LISS/CSCS Smart Cards.",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day Online",
        body: "ROLO Operative - 1 day online, hosted by Orchard Learning.",
      },
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 day",
        body: "ROLO Operatives Certification with Assessment Page 1 of 14",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/faqs": {
    eyebrow: "LISS/CSCS",
    title: "FAQ's",
    theme: "green",
    intro: "Below are some commonly asked questions. If you are unable to find the answer to your questions below, please email liss@bali.org.uk.",
    sections: [
      {
        heading: "ROLO",
        body: "I have not received my ROLO certificate.Certificates are issued by your training provider. If you have not received your certificate, please contact your training provider directly. If you are looking to apply for a LISS CSCS card and you have not yet received your ROLO certificate, please upload a letter from your training provider outlining the date you took your course and your pass mark. We will then be able to start processing your application. I’ve lost my ROLO certificate how do I get a replacement?Certificates are issued by your training provider. Please contact your training provider to obtain a replacement certificate. What is the minimum age for a ROLO course?16+ Where can I book a ROLO course?A complete list of courses is available to view on our website. There are 3 levels of courses – operative, supervisor and manager. Access Operative courses here Access Supervisor courses here Access Manager courses here All courses can be viewed here",
      },
      {
        heading: "LISS CSCS",
        body: "How long does the application process take? It can take up to 28 working days for card applications to be processed and sent. How much does a LISS CSCS card cost?£38 What qualifications do I need for a LISS CSCS card?Qualification requirements are dependent on the type of card you are applying for. Please see our dedicated web pages for more details. I have an overseas qualification, can I still get a LISS CSCS card?Applicants will be required to obtain an Industry Skills Statement from ECCTIS. Further information can be found on our overseas qualification web pages. What route should I choose on my application?If you are not sure please choose certificate of competence and the team will change accordingly. I applied for my card, but it hasn’t arrived yet?If you applied for your card more than 30 working days ago, please email the LISS CSCS team at liss@bali.org.uk, including your full name and the date of your application. We will then check the status of your application and confirm back to you. My LISS CSCS has expired, can I still renew it?LISS CSCS cards can only be renewed 6 months prior to, and up to 6 months after, the expiry date printed on the card. The expiry date of ...",
      },
      {
        heading: "Technical Issues",
        body: "I cannot get to the payment screen; how do I progress my application?Occasionally attachments can be too big. Please reduce the file size and re-upload. If you still find you are having issues, please continue your application without the attachments and send them separately to liss@bali.org.uk, including the full name of the person the card is for. You can also download the application form and send it to us by post, including all relevant documentation and payment to: LISS CSCS TeamLandscape HouseStoneleigh ParkKenilworthWarwickshireCV8 2LG",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/contractor": {
    eyebrow: "Membership",
    title: "Accredited contractor",
    theme: "blue",
    intro: "For British Association of Landscape Industries Accredited Contractor membership, the contractor must have been trading for at least two years and meet the requirements set out below.",
    sections: [
      {
        heading: "Accredited Contractor membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance.",
        body: "For Accredited Contractor member benefits and fees, please see attached documents on the right-hand side. To begin your application process of joining the British Association of Landscape Industries make an enquiry today by clicking the button below and our membership team will be in touch with you within 48 hours. make an enquiry",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place. The Association will check all documents submitted and referees will be contacted",
          "External vetting takes place. Vetting Officer will visit, checking internal processes and perform site visits",
          "Upon approval of the vetting report, an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership giving member access to a suite of benefits",
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the Association's National Landscape Awards",
          "Access to the Dispute Resolution Service",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/designer": {
    eyebrow: "Membership",
    title: "Accredited designer",
    theme: "blue",
    intro: "Depending on your registered status with other landscape organisations, the British Association of Landscape Industries offers two routes to becoming an Accredited Designer member.",
    sections: [
      {
        heading: "The British Association of Landscape Industries is committed to continually improving the landscape sector and sets high standards for its Accredited Designer members.",
        body: "Route one is for Registered members of the Society of Garden Designers or Chartered Landscape Institute: Route two is for non-registered members of SGD or Chartered LI: For full Accredited Designer member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Submit the application form and pay the application fee. The Association will check all documents submitted and referees will be contacted",
          "External vetting takes place. Invited to attend an assessment day consisting of one or more of the Design Panel who will review your projects",
          "Upon approval of vetting an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
          "Submit the application form and pay the application fee, plus assessment day fee Internal vetting takes place. The Association will check all documents submitted and referees will be contacted",
          "External vetting takes place. Invited to attend an assessment day consisting of one or more of the Design Panel who will review your projects",
          "Upon approval of vetting an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the annual National Landscape Awards",
          "Access to Dispute Resolution Service",
          "Exclusive access to BALI Blueprint powered by Vectorworks",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/dso": {
    eyebrow: "Membership",
    title: "Accredited dso",
    theme: "blue",
    intro: "DSO membership is ideal for companies operating separately but working solely for the parent organisation.",
    sections: [
      {
        heading: "Accredited Direct Service Organisation (DSO) membership is for the grounds maintenance departments of public or local authorities.",
        body: "Copy of public liability For full Accredited Direct Service Organisation member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Make an enquiry, submit the application form and pay the application fee",
          "Internal vetting takes place. The Association will check all documents submitted and references will be contacted",
          "External vetting takes place. The Vetting Officer will visit, checking internal processes and perform site visits",
          "Upon approval of the vetting report, an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving you access to a suite of benefits",
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the annual National Landscape Awards",
          "HR / H&S support",
          "Insurance support",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/group": {
    eyebrow: "Membership",
    title: "Accredited group",
    theme: "blue",
    intro: "This category is for companies with branches across the UK or companies run on a franchise basis who have been trading for at least two years.",
    sections: [
      {
        heading: "An Accredited Group membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance.",
        body: "For full Accredited Group member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place. The Association will check all documents submitted and references will be contacted",
          "External vetting takes place. The Vetting Officer will visit, check internal processes and perform site visits",
          "Upon approval of the vetting report, an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry in Who’s Who Landscape Directory",
          "Dispute Resolution Service",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/supplier": {
    eyebrow: "Membership",
    title: "Accredited supplier",
    theme: "blue",
    intro: "Accredited Suppliers are widely encouraged to promote the use of their products and services to British Association of Landscape Industries Contractor and Designer members through Association workshops, exhibitions, and publications. Supplier members are also encouraged to partake in the Supplier Forum for a chance to air their views during topical discussions.",
    sections: [
      {
        heading: "This membership category can be a business, section or division of a business that supplies quality materials and equipment.",
        body: "For full Accredited Supplier member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place",
          "Upon acceptance of documents - invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the annual National Landscape Awards",
          "Discounted rates for exhibitions and conferences",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/associate": {
    eyebrow: "Membership",
    title: "Associate",
    theme: "blue",
    intro: "Associate membership is offered to contractors, suppliers of the landscaping industry, landscape designers or landscape architects, or anyone who is involved in the landscaping industry.",
    sections: [
      {
        heading: "Associate membership is for those trading for less than two years and are looking to explore the benefits of being a British Association of Landscape Industries member.",
        body: "For full Associate member benefits and fees, please see the attached document on the right-hand side. make an enquiry",
        bullets: [
          "Make an enquiry and complete the application form",
          "Internal vetting takes place, documents submitted to be checked by the Association's Membership team",
          "Once internal vetting is complete, an invoice for membership fees will be issued",
          "Once paid, membership is activated and the member has access to benefits",
          "Special rates for British Association of Landscape Industries exhibitions and conferences",
          "Access to weekly British Association of Landscape Industries newsletter",
          "Access to the members-only area of the Association's website",
          "Attend forums, online meetings and events",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/international": {
    eyebrow: "Membership",
    title: "International",
    theme: "blue",
    intro: "Prospect International members must first complete the application and vetting process outlined below before accessing the International member benefits.",
    sections: [
      {
        heading: "International membership is ideal for contractors who carry out hard and soft landscaping and/or grounds maintenance work and operate outside of the UK and the Channel Islands.",
        body: "For international member benefits and fees, please see the attached documents on the right-hand side. make an enquiry",
        bullets: [
          "Make an enquiry",
          "Submit the application form and pay the relevant application fee",
          "Internal vetting takes place. The Association will check all documents submitted and referees will be contacted",
          "Upon approval of internal vetting, an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving the member access to a suite of benefits",
          "Use of the British Association of Landscape Industries Accredited logo",
          "Entry into the annual National Landscape Awards",
          "Entry in the annual Who's Who Landscape Directory",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/student": {
    eyebrow: "Membership",
    title: "Student",
    theme: "blue",
    intro: "Student membership ideal for students looking to gain footing into the landscaping industry with links to GoLandscape and up-to-date industry-relevant news.",
    sections: [
      {
        heading: "This category of membership is for students attending commercial training organisations, FE and HE colleges and universities.",
        body: "For full Student member benefits and fees, please see the attached documents on the right-hand side. make an enquiry",
        bullets: [
          "Submit application form",
          "Internal vetting takes place. The Association will check all documents submitted",
          "Upon approval of internal vetting",
          "The Association will activate membership, giving the member access to a suite of benefits",
          "Submit application form",
          "Internal vetting takes place. The Association will check all documents submitted",
          "Upon approval of internal vetting, an invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
          "Weekly digital newsletter",
          "British Association of Landscape Industries jobs",
          "Access to GoLandscape",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join/training-provider": {
    eyebrow: "Membership",
    title: "Training provider",
    theme: "blue",
    intro: "For full Training Provider member benefits and fees, please see the attached document on the right-hand side.",
    sections: [
      {
        heading: "This category of membership is for individual trainers, commercial training organisations, FE and HE colleges and universities, delivering land-based academic and skills training, needing to keep abreast of industry news and developments.",
        body: "To make an enquiry about becoming an Association Training Provider member, please follow the link here.",
        bullets: [
          "Make an enquiry online or by phone and complete the application form",
          "Internal vetting takes place. The Association checks all submitted documents",
          "Upon vetting an invoice for the membership fee is issued",
          "Once paid the member has access to various member benefits",
          "Entry into Who’s Who Landscape Directory",
          "Attend regional events, technical workshops and online meetings",
          "Company profile on the website",
        ],
      },
      {
        heading: "British Association of Landscape Industries and ROLO Training Provider",
        body: "Individual trainers, commercial training organisations, FE and HE colleges and universities, delivering land-based academic and skills training, needing to keep abreast of industry news and developments. Training Provider Membership keeps them in touch with the industry and with the potential employers of the students they are training and ROLO (Register of Land-based Operations) membership accredits the organisation for the delivery of the ROLO course. Your business must have been trading for at least two years. make an enquiry",
        bullets: [
          "Submit the application form and pay the application fee",
          "Internal vetting takes place. The Association will check all documents submitted and references will be contacted",
          "An invoice for membership fees will be issued",
          "Once paid, the Association will activate membership, giving member access to a suite of benefits",
          "Free student member benefits",
          "ROLO accreditation and exclusive use of the ROLO logo",
          "Entry into Who’s Who Landscape Directory",
          "Company profile on the website",
        ],
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "BALI Membership Benefits 2025-26 1 Apr 2025 191kb PDF",
          "BALI Membership Fees 2026-27 1 Apr 2025 143kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/enquiry": {
    eyebrow: "Membership",
    title: "Make an enquiry",
    theme: "blue",
    intro: "Information on make an enquiry from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/training-provider-declaration": {
    eyebrow: "Membership",
    title: "Training Provider declaration",
    theme: "blue",
    intro: "Information on Training Provider declaration from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/become-a-member": {
    eyebrow: "Membership",
    title: "Become a member",
    theme: "blue",
    intro: "Promotion of Your Business and Accreditation: Boost client confidence with the BALI accreditation logo, showcasing quality and professionalism. Gain visibility through high-traffic profiles, the ‘Find a Professional’ tool, and promotional platforms like Landscape News and the National Landscape Awards.",
    sections: [
      {
        heading: "\"4 P's\" of Membership",
        body: "Practical Advice and Industry Updates: Access expert guidance on contracts, plant health, and compliance via BALI Technical Managers. Stay ahead with webinars, regional networking events, and exclusive industry updates. Political Representation and Community: Influence policy and legislation through BALI’s advocacy efforts. Join a thriving community of 2,000+ professionals, attend events, and voice your concerns at AGMs. Professional Services and Discounts: Access discounts on recruitment and insurance, HR/Legal helplines, free templates, and digital marketing audits.",
      },
      {
        heading: "Join us",
        body: "The British Association of Landscape Industries offers a range of membership categories, tailored to suit your business. Becoming a member couldn’t be easier, requiring a range of business documents and references, plus a vetting visit to ensure the quality of work meets the standard expected of an accredited member. For further information on the process and a full list of benefits, please download the relevant leaflet in the documents section.",
      },
      {
        heading: "Start your application today!",
        body: "Please complete the form below and our membership team will be in touch.",
      },
      {
        heading: "documents",
        body: "",
        bullets: [
          "Join us - Suppliers 12 Jan 2025 2781kb PDF",
          "Join us - Designers 12 Jan 2025 3128kb PDF",
          "Join us - Contractors 12 Jan 2025 2813kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/management": {
    eyebrow: "Quality Standard",
    title: "Management responsibility",
    theme: "blue",
    intro: "Senior management shall demonstrate a clear commitment to quality performance by",
    sections: [
      {
        heading: "1.01 Management Commitment",
        body: "",
        bullets: [
          "Communicating to all elements of the organisation and clients the importance of identifying and meeting customer, legislative and regulatory requirements",
          "Monitoring performance against identified requirements",
          "Rectifying deviations from these requirements in a prompt and professional manner",
        ],
      },
      {
        heading: "1.02 Customer Focus",
        body: "Senior management shall ensure that customer requirements are determined and met with the aim of enhancing customer satisfaction. The organisation should determine and implement effective arrangements for communicating with customers in relation to:",
        bullets: [
          "customer feedback, including customer complaints",
          "Product/service information",
          "Enquiries, contracts or order handling, including amendments, valuations",
        ],
      },
      {
        heading: "1.03 Responsibility, Authority and Communication",
        body: "Senior management shall ensure that responsibilities and authorities are clearly defined and communicated throughout the organisation and to the Client.",
      },
      {
        heading: "1.04 Planning",
        body: "Senior management shall ensure that there is a clearly defined plan for the business and that this plan is communicated throughout the organisation and reviewed at appropriate intervals.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/management/commitment": {
    eyebrow: "Quality Standard",
    title: "1.01 - management commitment",
    theme: "blue",
    intro: "Senior management shall demonstrate a clear commitment to quality performance by",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "Communicating to all elements of the organisation and clients the importance of identifying and meeting customer, legislative and regulatory requirements",
          "Monitoring performance against identified requirements",
          "Rectifying deviations from these requirements in a prompt and professional manner",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "Here we are looking for evidence that supports the company’s commitment to delivering quality Have they clearly defined what quality means to them? How do they communicate the importance of quality to their team Do they formalise agreements with customers, suppliers and sub-contractors in order for them to support their aims and expectations Do they employ fair and reasonable Terms & Conditions The point is, how do top management make it clear to staff and maybe customers too that quality matters?",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "In small organisations it may be sufficient to demonstrate awareness of the British Association of Landscape Industries' “Code of Conduct” and the very fact that they have applied for “Registered Membership” and have therefore agreed to adopt the Code demonstrates adequate commitment. In larger companies it may be considered that to satisfy this element a written policy should be in place and available to all staff by way of a “Handbook”, a formalised induction process and/or specific training records.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "British Association of Landscape Industries' Code of Conduct",
          "British Association of Landscape Industries' Domestic Contract",
          "Induction Checklist",
          "Quality Policy",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "Quest Employee Handbook",
          "JCLI Contract",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/management/customer-focus": {
    eyebrow: "Quality Standard",
    title: "1.02 - customer focus",
    theme: "blue",
    intro: "Senior management shall ensure that customer requirements are determined and met with the aim of enhancing customer satisfaction. The organisation should determine and implement effective arrangements for communicating with customers in relation to:",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "Customer feedback, including customer complaints",
          "Product/service information.",
          "Enquiries, contracts or order handling, including amendments, valuations.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "In this section we are looking to see that the level of and detail in the communications with the client is sufficient and appropriate for the type and style of the work being carried out, before during and after the works. Can the client make an informed decision? Is there a process to agree variations? How are complaints handled? What is the approach to customer service? Do they seek, monitor and act upon customer feedback effectively?",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "In smaller organisations or for smaller jobs/contracts this may be as simple as diary notes transferred into a clearly worded quotation, detailing the requirements. As organisations and/or contracts become larger and more diverse more structured methods would be expected, these may include Client Briefings, plans, Specifications, Bills of Quantity, Priced Schedules, VO’s, Contract Documents and client surveys.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "British Association of Landscape Industries' Domestic Contract",
          "Annual schedule",
          "Annual schedule costed",
          "Enquiry Form",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/management/responsibility-authority": {
    eyebrow: "Quality Standard",
    title: "1.03 - responsibility, authority and communication",
    theme: "blue",
    intro: "Senior management shall ensure that responsibilities and authorities are clearly defined and communicated throughout the organisation and to the Client.",
    sections: [
      {
        heading: "Guidance Notes",
        body: "It’s important that people at all levels in the organisation have a clear picture of the company, where they fit in and what they are there to do. As with all the evidence requirements, it needs to be appropriate to the size of the organisation, as a smaller organisation is not likely to have an org. chart or a company handbook but an employee may be able to describe what the future holds or where they see the business this time next year, does this validate the response to similar questions asked of the employer?",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "In most cases these would be documented in some way, e.g. Job Descriptions, company or corporate structures, Quality Policies or procedures manuals.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Job Description – Supervisor",
          "Job Description – Operative",
          "Quality Policy",
          "Organisation Chart",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "Quest Staff Handbook",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/management/planning": {
    eyebrow: "Quality Standard",
    title: "1.04 - planning",
    theme: "blue",
    intro: "In the smallest organisations this may be verbally communicated and verified through staff interview, but as businesses get larger expectation will rise and a basic documented plan is likely to be required.",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "Senior management shall ensure that there is a clearly defined plan for the business and that this plan is communicated throughout the organisation and reviewed at appropriate intervals.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "",
        bullets: [
          "It’s important for staff to understand where the company is trying to get to, in order for them to contribute effectively rather than swim alone in the opposite direction.",
          "In larger organisations we are looking to see that plans are set and effectively communicated, the bigger the company the more robust the plans and the methods of communication are expected to be.",
          "Questioning may be used to validate the effectiveness of the communications.",
        ],
      },
      {
        heading: "Possible Sources of Evidence",
        body: "Evidence of the communication and review throughout a larger company may include training records, minutes of meetings, handbooks, posters etc.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Job Description – Supervisor",
          "Job Description – Operative",
          "Training record (Example) (Blank)",
          "Management Meeting Agenda",
          "Strategic Plan (Example) (Blank)",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "Quest Staff Handbook",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery": {
    eyebrow: "Quality Standard",
    title: "Product and service delivery",
    theme: "blue",
    intro: "The business shall identify the processes required to provide product or service delivery consistent with the customer, legislative and regulatory requirements. In planning product and/or service delivery, the organisation shall determine",
    sections: [
      {
        heading: "3.01 - Planning",
        body: "",
        bullets: [
          "The requirements of the project, product or service.",
          "The processes, documents and resources specific to the project, product or service.",
          "The success criteria and the appropriate records to allow validation, monitoring, inspection and testing specific to the project, product or service specification/requirements.",
        ],
      },
      {
        heading: "3.02 - Customer Related Processes",
        body: "The organisation shall determine",
        bullets: [
          "Requirements specified by the customer, including arrangements for delivery and post-delivery activities.",
          "Any other project requirements not stated by the customer but necessary for the specified or intended use/purpose, where known.",
          "Statutory and regulatory requirements applicable to the product",
          "Any additional requirements considered necessary by the organisation",
        ],
      },
      {
        heading: "3.03 - Design Control",
        body: "The organisation shall plan and implement suitable arrangements to ensure that the design process clearly identifies Minimum considerations throughout the design process should include Suitable controls should also be in place to ensure revisions and alterations to design are recorded and that any changes are evaluated against the above criteria",
        bullets: [
          "Design stages",
          "Responsibilities and authorities",
          "Approval process",
          "Review process",
          "Form and function",
          "Statutory and regulatory requirements",
        ],
      },
      {
        heading: "3.04 – Purchasing",
        body: "The organisation shall ensure that a purchased product or service conforms to the specified requirements. The type and extent of control applied to the supplier/sub-contractor and the resulting product/service shall be dependent upon the effect of the product/service on the final product/service itself. Purchasing information shall describe the product or service to be purchased, including, where appropriate",
        bullets: [
          "Requirements for approving products, procedures and equipment, and",
          "Requirement for qualifications and experience of personnel to be engaged on the works.",
        ],
      },
      {
        heading: "3.05 – Control of Product and Service Provision",
        body: "The organisation shall plan and carry out product and service provision under controlled conditions. This will be evidenced by",
        bullets: [
          "The availability of the information that describes the characteristics of the product or service",
          "The availability of work instructions, as necessary",
          "The use of suitable equipment",
          "The availability and use of monitoring and measuring equipment",
          "The implementation of monitoring and measuring",
        ],
      },
      {
        heading: "3.06 – Customer Property and Preservation of Works",
        body: "",
        bullets: [
          "The organisation shall exercise care with customer property while it is under the organisation’s control or being used by the organisation. The organisation shall identify, verify, protect and safeguard customer property provided for use or incorporation into the product.",
          "The organisation shall preserve the product during the course of works and delivery to the intended destination in order to ensure that it still conforms to the specified requirement. As applicable preservation shall include but not be restricted to identification, handling, packaging, storage and protection. Preservation shall also apply to constituent parts of a product.",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery/planning": {
    eyebrow: "Quality Standard",
    title: "3.01 - planning",
    theme: "blue",
    intro: "The business shall identify the processes required to provide product or service delivery consistent with the customer, legislative and regulatory requirements. In planning product and/or service delivery, the organisation shall determine",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "The requirements of the project, product or service.",
          "The processes, documents and resources specific to the project, product or service.",
          "The success criteria and the appropriate records to allow validation, monitoring, inspection and testing specific to the project, product or service specification/requirements.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "What we are looking for is how well the company considers the requirements of each enquiry/job.",
        bullets: [
          "Does the business have the skills, man power and money?",
          "Do they ask for deposits?",
          "Do they try and use existing material stock where appropriate to do so?",
          "Evidence of the planning should also be evident on site, is the job well resourced and running to schedule or are the team held up waiting on materials or sub-contractors?",
        ],
      },
      {
        heading: "Possible Sources of Evidence",
        body: "For small and simple projects this may be as simple as allocating time in a diary or work schedule and as operations become more complex it may require Gantt charts, procurement records, inspection reports, valuations and payment schedules, samples and detailed validation procedures.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Asset Register",
          "Maintenance Record",
          "COSHH Assessment",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "HSE PUWER Registration",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery/customer-processes": {
    eyebrow: "Quality Standard",
    title: "3.02 - customer related processes",
    theme: "blue",
    intro: "This is about ensuring the customer receives what they expect/asked for, whilst accepting that what has been asked for may not be fully specified.",
    sections: [
      {
        heading: "The Standard",
        body: "The organisation shall determine",
        bullets: [
          "Requirements specified by the customer, including arrangements for delivery and post-delivery activities.",
          "Any other project requirements not stated by the customer but necessary for the specified or intended use/purpose, where known.",
          "statutory and regulatory requirements applicable to the product, and",
          "Any additional requirements considered necessary by the organisation.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "For example, the client wants a path laid from A to B, but is unlikely to know what sub-base would be suitable or may not have given much thought as to the width it will need to be. The contractor will need to fill in the gaps and detail this in the specification or quotation. This happens a lot and does pose the question as to whether it constitutes a design and if so, is it covered via a PI policy. We also need to see how the company applies the relevant legislation to the job i.e. nesting birds check list/training, bat awareness, CDM, Risk Assessment, COSHH and so on.",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "Evidence may include a client brief, agreed design or specification, other client correspondence, research notes, supplier stipulations or recommendations, reference to British Standards or other relevant regulatory or statutory guidelines.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "COSHH Assessment",
          "Pre Tender Checklist",
          "Construction Phase Safety Plan",
          "Site Induction",
          "Risk Assessment",
          "Legal Register",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "HSE CDM Registration",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery/design-control": {
    eyebrow: "Quality Standard",
    title: "3.03 - design control",
    theme: "blue",
    intro: "The organisation shall plan and implement suitable arrangements to ensure that the design process clearly identifies",
    sections: [
      {
        heading: "The Standard",
        body: "Minimum considerations throughout the design process should include Suitable controls should also be in place to ensure revisions and alterations to design are recorded and that any changes are evaluated against the above criteria",
        bullets: [
          "Design stages",
          "Responsibilities and authorities",
          "Approval process",
          "Review process",
          "Form and function",
          "Statutory and regulatory requirements",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "In this section we’re concerned that whoever undertakes the design is competent, that there is an awareness of the various legal requirements such as DDA, CDM and the like. PI insurance is also likely to be required. In addition, what is the process for getting client approval and for making sure the approved design is the one that gets implemented? Its largely about document control. If the company does not carry out design this is not assessed. Many companies outsource the design process, in which case how is the process managed, are subcontractors “vetted” and their insurances, skills and knowledge recorded?",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "Much of the evidence required for this section will be covered in standard terms of business or contracts implemented by the organisation. In addition documents such as client questionnaires will demonstrate adherence to client brief (form and function) and clear knowledge of statutory requirements may be demonstrated by knowledge and use of regulation websites.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Pre Tender Checklist",
          "Design Risk Assessment",
          "Design Assessment List",
          "Legal Register",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "HSE CDM Registration",
          "Legislation",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery/purchasing": {
    eyebrow: "Quality Standard",
    title: "3.04 - purchasing",
    theme: "blue",
    intro: "The organisation shall ensure that a purchased product or service conforms to the specified requirements. The type and extent of control applied to the supplier/sub-contractor and the resulting product/service shall be dependent upon the effect of the product/service on the final product/service itself. Purchasing information shall describe the product or service to be purchased, including, where appropriate",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "Requirements for approving products, procedures and equipment, and",
          "Requirement for qualifications and experience of personnel to be engaged on the works.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "The critical question here is “Do the company get what they ordered”? If the person ordering the goods (maybe by phone or online from the office) is not the person that will receive them (probably a Supervisor on site), how does the Supervisor know what’s been ordered? Happily accepting and signing for the wrong goods could have huge consequences on the quality or the service ie. wrong grade of turf, wrong colour paving? Control of Sub-contractors is also key, how are they assessed for competence, are records kept of insurances and certification, do they receive clear instructions/orders?",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "Evidence for purchasing of goods may vary from informal emails, simple purchase orders to full design drawings, detailed specification and/or contracts. When engaging sub-contractors to provide a critical element of the product realisation process then clear instructions, specifications and /or contracts may be considered a requirement to evidence this element as well as evidence that the providers and their people are competent. Appropriate records of all instructions and processes should be retained as evidence.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Contract for Services",
          "Approved Sub-Contractor Questionnaire (5 or more employees)",
          "Approved Sub-Contractor Questionnaire (under 5 employees)",
          "Purchase Order Log",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery/control-of-provision": {
    eyebrow: "Quality Standard",
    title: "3.05 - control of product and service provision",
    theme: "blue",
    intro: "The organisation shall plan and carry out product and service provision under controlled conditions. This will be evidenced by",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "The availability of the information that describes the characteristics of the product or service.",
          "The availability of work instructions, as necessary.",
          "The use of suitable equipment.",
          "the availability and use of monitoring and measuring equipment, and",
          "The implementation of monitoring and measuring.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "This is mainly about the “live” site visit, how do the site team know what to do? Do they have a job file, work instructions, drawings, a copy of material orders to cross reference? Do they have the skills, knowledge, equipment and support to do the job and is it working? Are they doing a good job and how do they know, what it’s being measured or judged against, spec., drawings, quotation etc.? Possible Sources of Evidence Evidence may include correspondence with the client representative, quotations, drawings, contracts, job files, plant and equipment maintenance records, invoices, calibration certificates, training records, certificates of competence, site inspection forms etc.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Training Record - Example / Blank",
          "Site Induction",
          "Contract for services",
          "Compliance Inspection Report",
          "Risk Assessment",
          "COSHH Assessment",
          "Method Statement",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "PUWER Registration",
          "CDM Registration",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/delivery/customer-property": {
    eyebrow: "Quality Standard",
    title: "3.06 - customer property and preservation of works",
    theme: "blue",
    intro: "This section is about clearly defining how customer property will be protected, temporarily removed and replaced etc. for example, an existing sculpture that is to form the centre piece of the new design, who will move it, where to and who is responsible for damage?",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "The organisation shall exercise care with customer property while it is under the organisation’s control or being used by the organisation. The organisation shall identify, verify, protect and safeguard customer property provided for use or incorporation into the product.",
          "The organisation shall preserve the product during the course of works and delivery to the intended destination in order to ensure that it still conforms to the specified requirement. As applicable preservation shall include but not be restricted to identification, handling, packaging, storage and protection. Preservation shall also apply to constituent parts of a product.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "Other things to consider are protecting existing surfaces such as the drive way or access routes across soft ground etc. The solution can often be as simple as a line of text in the quotation but can also be included in contract documents etc.",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "Suitable correspondence which could take many forms would be appropriate to evidence this element. Evidence for this element may vary considerably depending on the volume and type of any items requiring preservation. Remember products or assets requiring protection could be fixed (e.g. trees or buildings) as well as items you may have in stock or have delivered to your premises and are stored and transported to site later.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "British Association of Landscape Industries' Domestic Contract",
          "Contract for Services",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/resources": {
    eyebrow: "Quality Standard",
    title: "Resource management",
    theme: "blue",
    intro: "The organisation shall ensure that its personnel are competent to deliver the organisations products and services on the basis of appropriate education, training, skills and experience.",
    sections: [
      {
        heading: "2.02 - Infrastructure",
        body: "The organisation shall determine, provide and maintain an infrastructure to enable conformity of product and service delivery; such infrastructure may include but not be restricted to:",
        bullets: [
          "Buildings, office, workspace and associated utilities.",
          "Process equipment (such as site, yard and office plant and equipment including any appropriate software).",
          "Supporting services (such as transport, communication and information systems)",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/resources/human": {
    eyebrow: "Quality Standard",
    title: "2.01 - human resources, competence, training and awareness",
    theme: "blue",
    intro: "The organisation shall ensure that its personnel are competent to deliver the organisations products and services on the basis of appropriate education, training, skills and experience.",
    sections: [
      {
        heading: "The Standard",
        body: "The organisation shall:",
        bullets: [
          "Determine the necessary competence for its personnel performing work that affects, product or service delivery.",
          "Where applicable, provide training and development for its personnel to achieve the necessary competence.",
          "Evaluate the effectiveness of the training and development undertaken.",
          "Maintain appropriate records of education, training skills and experience.",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "As the possible evidence suggests there are many ways to demonstrate, deliver and record competence, not to be confused with qualifications. The important thing here is the quality of work and skills being displayed on site, coupled with conversations about what they are doing and how they plan to achieve it etc. It may well be that training records are not held on site but names should cross reference with records once back in the office.",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "A whole range of documents may demonstrate compliance to this aspect of the standard for example, diary notes, staff appraisals, skills matrices, training records, Personal Development Plans, company training plans, receipts for training courses, certificates etc.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Training Register",
          "Training Record (Example) (Blank)",
          "Skills Matrix",
          "Job Description – Supervisor",
          "Job Description – Operative",
          "Personal Development Plan (PDP)",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "HSE PUWER Regulation",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality/resources/infrastructure": {
    eyebrow: "Quality Standard",
    title: "2.02 - infrastructure",
    theme: "blue",
    intro: "The organisation shall determine, provide and maintain an infrastructure to enable conformity of product and service delivery; such infrastructure may include but not be restricted to:",
    sections: [
      {
        heading: "The Standard",
        body: "",
        bullets: [
          "Buildings, office, workspace and associated utilities.",
          "Process equipment (such as site, yard and office plant and equipment including any appropriate software).",
          "Supporting services (such as transport, communication and information systems)",
        ],
      },
      {
        heading: "Guidance Notes",
        body: "Here we are looking for suitable resources to run the business being assessed, a small business can comfortably operate from the kitchen table or spare room, whilst a larger company may need larger facilities. Todays technology can limit the paper storage requirements as well as enabling staff to work remotely, so space at a single location can now be less important. This section includes aspects such as equipment and vehicles including the maintenance records, COSHH records and hazardous product storage, insurances, website and use of BALI logo etc.",
      },
      {
        heading: "Possible Sources of Evidence",
        body: "The resources available should be appropriate to the size and nature of the business and the work being undertaken. For example, a small company with just 2-3 people may have all they need in one van and a home office, larger businesses will be able to demonstrate storage and yard facilities, more vehicles and possibly dedicated offices. N.B. This will largely be determined by the effectiveness of the processes employed by the business rather than the totting up of resources that may be considered necessary.",
      },
      {
        heading: "Templates",
        body: "",
        bullets: [
          "Asset Register",
          "Maintenance Record",
          "COSHH Assessment",
        ],
      },
      {
        heading: "Links",
        body: "",
        bullets: [
          "HSE PUWER Regulations",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/whos-who": {
    eyebrow: "Directory",
    title: "Who's Who Directory 2025/2026",
    theme: "slate",
    intro: "Information on Who's Who Directory 2025/2026 from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/policy": {
    eyebrow: "Policy",
    title: "Your hub for landscape industry news & policy",
    theme: "blue",
    intro: "Discover the latest policy updates, government announcements, and industry news from the forefront landscaping professionals in the UK",
    image: { url: "https://bali-policy.org.uk/hubfs/nick-page-tWpv57Ip-3c-unsplash.jpg", alt: "Your hub for landscape industry news & policy" },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/site-search": {
    eyebrow: "Search",
    title: "Search",
    theme: "slate",
    intro: "Information on Search from the British Association of Landscape Industries.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/conference/discount-code": {
    eyebrow: "Conference",
    title: "BALI National Conference 2026 discount code",
    theme: "green",
    intro: "26 March 2026 · The Royal Society, London · 9:30am – 6:30pm",
    sections: [
      {
        heading: "BALI National Conference 2026",
        body: "You have been sent a private discount code. Enter it below to be taken directly to the booking page with your exclusive 10% member rate applied.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/news/landscape-news": {
    eyebrow: "News",
    title: "Landscape News",
    theme: "blue",
    intro: "Landscape News is BALI's official member magazine, filled with great stories about member projects, helpful business advice, and thought-provoking opinion, along with news and events updates from the UK's biggest trade association for the landscape industries.",
    sections: [
      {
        heading: "Spring 2026:",
        body: "If you've got a story you want to share with our readers, email your ideas to our editor at landscapenews@bali.org.uk",
        bullets: [
          "Court is in session - Three decades behind the scenes with the \"King of Chelsea\", Mark Gregory",
          "Is your brand working hard enough for you? - Expert advice on knowing when your brand needs a refresh and how to do it",
          "From natural to nourishing - A look at the domestic design trends set to shape 2026",
          "Smiley, happy people - Why a people first philosophy can solve the industry's ills",
        ],
      },
      {
        heading: "Winter 2025:",
        body: "In this issue:",
        bullets: [
          "Isn't that Grand? - An exclusive interview with the BALI Awards Grand Award winner 2025, The Outdoor Room",
          "It's only natural: the rise of natural pools in UK garden landscapes - Ellicar invites us into this eco-friendly world of harmony with the environment",
          "Shout about it - Our social media guru reveals the top tips and tricks for a successful social media strategy",
          "Under the surface - Tim O'Hare Associates examine the importance of soil choice in landscaping",
        ],
      },
      {
        heading: "Autumn 2025:",
        body: "In this issue:",
        bullets: [
          "Inside the mind of a BALI awards judge - Chair of the judging panel, John Melmoe, reveals the secrets to a successful awards entry",
          "Weathering the storm - In a cautious market, designer Adam Vetere shares how creativity and personalisation can help you to thrive",
          "Pitch perfect - North Hort's Gareth Jones lifts the lid on finding success with celebrity clients",
          "First impressions - How to make the most of probationary periods and set your employees up for success",
        ],
      },
      {
        heading: "Summer 2025:",
        body: "In this issue:",
        bullets: [
          "Unhappy clients: what can you do when a dispute arises? - Discover how BALI's impartial ombudsman can help resolve client disputes",
          "Going for gold - We relive five glorious days at Chelsea and how BALI members bagged a mammoth medal haul",
          "From eye to bee - Garden designer Jamie Langlands explores how and why you should embrace our natural landscape in your designs",
          "A call to arms - How ex-military personnel can offer a wealth of transferable skills to landscaping",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
};

export function getPageContent(path: string): PageContent | undefined {
  const key = path.replace(/\/+$/, "") || "/";
  return C[key];
}
