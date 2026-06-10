// AUTO-GENERATED from bali.org.uk — verbatim copy ported into the new site.
// Central content store for all BALI website pages rendered via the splat route.

export type PageSection = { heading: string; body: string; bullets?: string[] };
export type PageHighlight = { title: string; body: string };
export type PageCTA = { label: string; href: string };
export type PageImage = { url: string; alt: string };
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
};

const C: Record<string, PageContent> = {
  "/about": {
    eyebrow: "About BALI",
    title: "What is BALI",
    theme: "blue",
    intro: "The British Association of Landscape Industries is the leading Trade Association representing all landscape professionals - from design, build and maintenance through to supply, training and education. Over 900 Accredited members represent some of the best landscaping businesses across the country, from large corporations, to local traders, to individual designers.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "Join the British Association of Landscape Industries",
        body: "Our Association's professional team, based at Landscape House in Warwickshire, deliver exceptional business, technical and promotional support to our members. We have a range of member benefits that can save your business thousands of pounds every year. Find out more about becoming a member.",
      },
      {
        heading: "Find a landscape...",
        body: "Looking for a high-quality and reliable landscape professional? We have Accredited members in every county, including England, Wales, Scotland and Northern Ireland. Browse our member directory and search by town or postcode to find you nearest. When you choose one of our Accredited members, you can be confident you are choosing a reputable and quality professional. To ensure our high standards are kept, membership is only granted to companies and individuals who meet our Association's stringent Terms & Conditions of Membership, and their continuation of membership depends upon the maintenance of satisfactory standards.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/board": {
    eyebrow: "About BALI",
    title: "Our Board of Directors",
    theme: "blue",
    intro: "The Board of Directors is the governing body of the Association, responsible for providing strategic leadership and the ultimate direction of the organisation. Although the Board work together for the best interests of the Association and its members, each Director has their own focus and passion within the wider industry.",
    image: { url: "/__l5e/assets-v1/30fc6cac-fc2c-4385-b5bf-c3bbd43fa961/small_adrian-wickham-1.png", alt: "Adrian Wickham 2022" },
    sections: [
      {
        heading: "Adrian Wickham, Chair",
        body: "I believe, as a passionate member of the Board, we can protect and ensure that the future of the industry is good for all the people within it; as well as promote the industry, its disciplines, and the skills of the people within it. Equally, I wish to attract all those who may never have considered a career within the green skills sector.",
      },
      {
        heading: "Matt Nokes",
        body: "I am a chartered Landscape Architect with over 20 years of industry experience. I feel I offer a perspective on the Board that compliments the other Directors and focus on encouraging and promoting integrated collaboration to create high-quality landscapes.",
      },
      {
        heading: "Matt O'Conner, Immediate Past Chair",
        body: "My vision is one of constant innovation and delivering benchmarked landscape services via a skilled and trained workforce. I will support the current Chair and Vice-Chair and am driven to ensure quality is the golden thread that runs throughout the association and its membership.",
      },
      {
        heading: "Wayne Grills, Chief Executive",
        body: "I’m committed to raising the Association’s profile at both government and industry levels. I support cross-industry working groups and committees, representing the Association and its members, including APPGHG, Scottish Ministerial Industry Roundtable Group and the OHRG.",
      },
      {
        heading: "Richard Gill",
        body: "I have been on the Yorkshire & North East committee for 10 years and am currently Vice-Chair, as well as a GoLandscape Ambassador. I’m very honoured to join the Board, and look forward to helping increase membership levels, and support the industry’s leading association.",
      },
      {
        heading: "Ricky Whiteman",
        body: "As Student Director, I promote the industry to people who may be considering a career or studying towards a qualification in the industry, sharing my experience and enthusiasm for how fulfilling and diverse a career in our industry can be.",
      },
      {
        heading: "Mark Gregory",
        body: "Returning to the BALI Board in 2024, I am a well-known technical expert in the landscape industry. I am also a RHS garden assessor and judge/Ambassador and lectures widely in the UK and overseas on landscaping",
      },
      {
        heading: "Alistair Bayford",
        body: "I was elected to the BALI Board at this year's AGM. I am a Chartered Member of the Landscape Institute with many years in the industry, and have worked in private, public and non-profit sectors.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/careers": {
    eyebrow: "About BALI",
    title: "GoLandscape — Careers in Landscaping",
    theme: "blue",
    intro: "We have proudly established GoLandscape - an education, skills and careers initiative that is designed to inform and inspire new recruits and combat industry issues, including a severe skills shortage, which also sustains, builds on and develops this remarkable and rewarding sector.",
    image: { url: "/__l5e/assets-v1/a5290e22-f805-49d7-932e-6e9217376059/bali-jobs-people.jpg", alt: "BALI Jobs" },
    sections: [
      {
        heading: "Overview",
        body: "GoLandscape provides a wealth of inspiring and educational career advice on landscaping jobs to young people. The advice is mapped to the UK government's curriculum for the land-based sector and linked to the Trailblazer Apprenticeship Standards. The British Association of Landscape Industries has played an instrumental part in lobbying at a parliamentary level and establishing the Trailblazer Apprenticeship Standards as recognised qualifications in land-based colleges throughout the country. GoLandscape brings together real-life stories and exemplary projects from leading landscape industry organisations and individuals. These provide practical examples of what it is really like to work in the industry that we are all so proud of, and why landscaping jobs offer serious career paths that provide opportunities for everyone. For more information visit our GoLandscape website.",
      },
      {
        heading: "Documents",
        body: "",
        bullets: [
          "BALI Awards judges panel job description 9 Jan 2026 83kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/charities": {
    eyebrow: "About BALI",
    title: "BALI Charities of the Year",
    theme: "blue",
    intro: "We are proud to offer our support to these worthy causes, including our own charity, the BALI Chalk Fund.",
    image: { url: "/__l5e/assets-v1/796d324b-86f1-4094-a94a-9d98a264d7af/medium_bali-chalk-fund.png", alt: "BALI Chalk Fund" },
    sections: [
      {
        heading: "Overview",
        body: "Every year we choose one of our nominated charities to raise money for, alongside the Chalk Fund, at our National Landscape Awards, the biggest landscaping awards ceremony in Europe.",
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
    intro: "The UK’s landscaping sector is at a turning point. Climate pressures are growing, skills are in short supply, and new rules like Biodiversity Net Gain are raising the stakes. BALI’s National Landscape Conference brings together the industry’s brightest minds to ask one vital question: how do we build landscapes and organisations that are truly future-proof? Hear from visionaries including Helen Nyul, Director of Ecology at Verna, and Sir Tim Smit, Founder of the Eden Project.Book nowdetailsThe UK landscaping sector stands at a defining moment.",
    image: { url: "/__l5e/assets-v1/ea4903cb-9e33-43c9-9370-90c0844b9740/medium_11.png", alt: "Helen Nyul" },
    sections: [
      {
        heading: "Overview",
        body: "As climate extremes become more frequent, from heatwaves and flooding to shifting growing conditions, and as the skills gap continues to bring challenges, landscape professionals face increasing pressure on people, projects and plants alike. Add to this evolving regulation such as Biodiversity Net Gain, rising client expectations and heightened scrutiny around environmental performance, and one thing is clear: climate resilience is no longer optional. It is operational. The BALI National Landscape Conference 2026 brings together senior leaders, practitioners and experts to focus on how the sector can respond with confidence and clarity. This is a strategic, thought-leadership event designed to tackle the questions shaping the future of landscaping: Mark Gregory - Conference HostAs a board member of the British Association of Landscape Industries (BALI) and Managing Director of Landform Consultants, Mark Gregory brings over three decades of industry leadership to his role hosting the BALI National Landscape Conference. Widely regarded as one of the most respected figures in British landscaping, Mark has built Landform Consultants into one of the UK’s most reputable landscape and construction companies. Known as \"The King of Chelsea\", his extensive experience delivering award-winning gardens at the showpiece RHS flower show has cemented his standing at the very top of the profession. Alongside his construction and design expertise, Mark is a passionate advocate for sustainability, conservation and biodiversity, championing responsible landscape practices that enhance natural habitats while delivering exceptional design and build quality. We are delighted to welcome three outstanding keynote speakers. Helen Nyul, Director of Ecology at Verna, brings extensive experience in embedding biodiversity strategy, ecosystem thinking and biodiversity net gain into large-scale delivery. Sir Tim Smit KBE, Co-Founder of the Eden Project, is internationally recognised for his leadership in environmental innovation and his ability to challenge organisations to think differently about long-term resilience, purpose and impact. Trevor Williams, Chief Economist and Economic Strategist, brings over 30 years of global macroeconomic expertise, advising institutions on market trends, monetary policy, and geoeconomic risk through data-driven analysis and strategic foresight.",
        bullets: [
          "How do we design, build and maintain landscapes that perform in a changing climate?",
          "How do we protect our teams, our businesses and the environments we work in?",
          "How do we move beyond compliance to deliver long-term value, resilience and leadership across the sector?",
        ],
      },
      {
        heading: "Agenda at a glance",
        body: "Theme: Climate resilience and how to future proof your business. A day focused on sustainability, biodiversity, plant health, skills, and economic resilience. 09:30 to 10:00 Arrival and refreshments10:00 to 10:05 Welcome & Opening Remarks Hosted by Adrian Wickham Setting the scene for a day focused on resilience, sustainability and opportunity across the landscaping sector. 10:05 to 10:40 Keynote: Trevor Williams - Global Trends & Economic Forces Impacting Landscaping A strategic overview of the geopolitical and economic forces shaping global trade — and what they mean for UK landscaping businesses. Key themes include: - Global trade, exports and imports: pressures on supply chains and costs - How shifting wealth dynamics are influencing demand for landscaping and luxury projects - What economic uncertainty really means for the landscaping industry - Practical, clear takeaways on managing risk, building climate resilience, and future-proofing your business 10:40 to 11:15 Keynote: Sir Tim Smit - Regenerative Sustainability & The Eden Project An inspiring exploration of how bold, regenerative thinking can transform landscapes, businesses and communities. Key themes include: - The transformation of the Eden Project from clay pit to global sustainability icon - Moving beyond sustainability towards regenerative practices that actively restore ecosystems - Practical lessons for embedding climate resilience into landscaping operations and long-term strategy 11:15 to 11:50 Refreshments and networking11:50 to 12:25 Keynote: Helen Nyul - Biodiversity Net Gain & Climate Resilience A practical look at how Biodiversity Net Gain (BNG) can drive climate resilience while strengthening business performance. Key themes include: - BNG as a tool for sustainable, resilient business practice - How to operationalise BNG requirements using current guidance and standards - Turning compliance into opportunity12:30 to 13:30 Lunch and networking13:30 to 14:30 Breakout sessions (choose one) Room 1: A Workplace for the Future Hosted by Sam Grayson – Hyphae Learning Panel with Paul Downer – Oak View Landscapes/ BALI Board Director, Gamiel Yafai – Diversity Marketplace, More panellists to be announced This panel will share perspectives on what the future workplace will look and feel like, covering topics from leadership, high performance, and well-being to culture, acceptance, inclusion, and respect Room 2: Data-Driven Biodiversity With Liz Nicholson – Nicholson Nurseries Practical advice on integrating biodiversity measurement into everyday operations How biodiversity metrics support sustainable landscape practice and business strategy Introduction to Elemental Room 3: The Reality of Plant Health Hosted by Dougal Driver – Grown in Britain Panel with Will Innes-Taylor - Hillier Nurseries, Alistair Bayford – Frosts/ BALI Board Director, Malcolm Catlin – Plant Healthy This panel will explore: - Major threats to plant health in nurseries and landscaping projects - Managing increased plant health risks and import pressures - The nursery sector’s role in biodiversity and sustainability - How landscapers and nurseries can collaborate for stronger long-term outcomes14:30 to 15:00 Refreshments and networking15:00 to 16:00 Breakout sessions (choose one) Room 1: Training and Developing Future Talent Hosted by Jake Catling – Hyphae Learning/ BALI Board Director Panel with Ruth Orrell-Harris – Activate Learning, Jonathan Pettit – BALI, more panellists to be announced. To build a resilient workforce, leaders must move beyond traditional \"tick-box\" training. This session explores a strategic three-prong approach to talent development, analysing how we currently utilise In-House, External, and Formal training and—more importantly—how we must evolve them to resonate with a digital-first generation. Room 2: Goods to the Ground – Inside the Supply Chain Hosted by Rachel Forsyth - Hortweek Panel With Chris Swan – Green-Tech, Richard McKenna – Provender Nurseries, Richard Brown – Germinal , Michael Mclvor-New - Tobermore This panel will explore: - The journey from supplier to site: risks, delays and cost pressures - Export and import challenges affecting availability and pricing - Managing customer expectations in an “Amazon-effect” world - Being transparent about price increases without losing trust or margin - Strengthening collaboration between suppliers, contractors and clients - One practical improvement the industry can adopt to build supply-chain resilience Room 3: Where’s the Money? Navigating the Economic Landscape Hosted by Adrian Wickham – BALI, Chair Panel with Mark Powell – J M Finn Investments, Kim Sones – Sones Accountancy Services and more to be announced In an era of economic uncertainty, pricing volatility and climate pressures, how can landscaping businesses stay financially resilient and strategically positioned for growth? This session brings together leading financial voices to explore the economic landscape from global trends to business-level impact. 16:00 to 17:00 Panel Discussion & Closing Session A reflective panel with hosts from each breakout session, sharing: - Key insights and learnings from the day - Practical actions for the industry moving forward - Audience Q&A Closing remarks: Wayne Grills, BALI Chief Executive17:00 to 18:30 Networking drinks reception Continue the conversation and connect with peers, speakers and industry leadersNote: breakout content and panellists may be subject to change.As the UK’s leading landscaping trade association, BALI is proud to convene this conversation. The challenges facing our sector are complex and urgent, but they are also an opportunity. By bringing together expertise, experience and ambition, we can help shape a more resilient, confident and future-ready industry.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/ncf": {
    eyebrow: "About BALI",
    title: "BALI National Children's Forest",
    theme: "blue",
    intro: "The Association's National Contractor’s Forum (NCF) is a specialist group set up to lobby on important issues and address key challenges within the land-based sector.Its constituents are drawn from different sectors of the industry, creating a formalised group of influence. It provides the landscape management, maintenance and construction sectors with a structure through which they can communicate across and beyond the industry.The Forum is made up of seven of the UK’s largest landscape contractors and grounds maintenance providers. Their responsibility is to support the British Association of Landscape Industries through their lobbying efforts.",
    image: { url: "/__l5e/assets-v1/db968096-bc3a-4274-914c-04a48337626d/bali-ncf-primary-identity.png", alt: "BALI-NCF logo" },
    sections: [
      {
        heading: "Become a member",
        body: "The NCF welcomes new members, whether from larger landscape contractors or smaller contractors with national aspirations. Becoming an NCF member is free and available to any Accredited Contractor member. If you would like to join the NCF group please contact the Association's Membership team or call +44(0)24 7669 8658.",
      },
      {
        heading: "The National Contractor’s Forum has been operating since 2012 and has achieved several significant triumphs, including",
        body: "",
        bullets: [
          "Responding to government consultation on industry use of red diesel and subsequent lobbying for continued use post April 2022",
          "Working with stakeholders to investigate future of weed control with a specific focus on glyphosate",
          "Working with stakeholders to investigate future of machinery",
          "Investigation of Stage V rules",
          "Investigation of light commercial vehicle weights",
          "Investigation of battery-operated equipment",
          "Working with stakeholders to investigate theft of landscape equipment and BALI members to identify solutions",
          "Founded the BALI-NCF health and safety forum, with the aim of",
        ],
      },
      {
        heading: "The NCF operates on two levels with the primary focus and main drive to be",
        body: "Strategic: A voice that can represent the sector at places that matter and have an impact on the training, health & safety and good practice within the industry. and a secondary focus of... Operational: The delivery of events, seminars, workshops etc. relevant to the topics and issues of interest to its group members and interested parties.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/awards": {
    eyebrow: "About BALI",
    title: "National Landscape Awards",
    theme: "blue",
    intro: "We are thrilled to announce that this years National Landscape Award entries are now open! Enter now here.",
    sections: [
      {
        heading: "Inspiring and celebrating landscaping excellence",
        body: "The National Landscape Awards provides the industry with a platform in which to showcase and improve their business and celebrate their achievements both within and outside of the industry. There are categories appropriate to all Accredited categories of membership. If you are an Accredited Contractor or Group or Accredited Designer member, there are categories appropriate to all scheme sizes/values and the same criteria apply, whether it is a small domestic garden or a large public landscaped space. Interested in the Supplier Exceptional Service or Employer Excellence categories? These categories have been developed to allow you to showcase your company to the industry through the exceptional service and/or products you provide or your exemplary business practices. Entries are open now! Click here. Learn more about the Awards here.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/advertise": {
    eyebrow: "About BALI",
    title: "Advertise with BALI",
    theme: "blue",
    intro: "The British Association of Landscape Industries is the leading Trade Association in the UK for the landscaping industry, supporting and promoting its members and their businesses and inspiring the future workforce. With over 900 Accredited member companies and individuals, Association members pride themselves on providing clients with professional and specialist services using accredited techniques and practices.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "Overview",
        body: "By advertising with our Association, you can now promote your company to an active landscaping network of over 1,700 total members operating within the landscape services industry worth £11.6bn to the UK economy supporting 196,300 jobs in 2017.* We offer a variety of online and offline advertising platforms including our quarterly membership journal Landscape News, our annually published Who’s Who Landscape Directory, a weekly e-newsletter and website. This is an opportunity to reach over 900 Accredited members and over 1,800 total members who actively visit the website and read our publications in a creative and compelling way. For more information on advertising please contact Joanna Pieprzak, Media Sales & Sponsorship Officer, via email at joanna.pieprzak@bali.org.uk or on +44(0)24 7669 0333. *Oxford Economics' The Economic Impact of Ornamental Horticulture and Landscaping in the UK",
      },
      {
        heading: "Documents",
        body: "",
        bullets: [
          "BALI Advertising Terms and Conditions 26 Nov 2025 76kb PDF",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Contact BALI",
    theme: "blue",
    intro: "Whether you're a member, a prospective member, or a client looking for landscape advice, the BALI team are here to help. Get in touch with the relevant department below — or call our head office at Landscape House in Warwickshire.",
    sections: [
      {
        heading: "Head office",
        body: "BALI, Landscape House, Stoneleigh Park, Warwickshire, CV8 2LG. Telephone: 02476 690 333. General enquiries: contact@bali.org.uk",
      },
      {
        heading: "Membership enquiries",
        body: "For new membership applications and questions about existing membership, contact our Membership team.",
      },
      {
        heading: "Press and media",
        body: "For media enquiries, sponsorship of the National Landscape Awards or other BALI events, please contact our communications team.",
      },
      {
        heading: "Meet the team",
        body: "From our Chief Executive to our regional support staff, the BALI team is made up of dedicated professionals committed to championing the landscape industry.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
  },
  "/directory": {
    eyebrow: "Landscape Directory",
    title: "Find an Accredited landscape professional",
    theme: "blue",
    intro: "Our Accredited members deliver the finest quality specialist products and services to suit all situations — from topographical surveys, design and consultancy through to landscape construction, maintenance and supply. Browse the directory by discipline or search by postcode to find a trusted BALI member near you.",
    sections: [
      {
        heading: "Designers",
        body: "Browse Accredited landscape and garden designers across the UK. From private gardens to public realm projects, our registered designers work to BALI's quality and conduct standards.",
        bullets: [
          "Registered Designers",
          "Registered Affiliate Designers",
          "Garden, landscape and public realm specialists",
        ],
      },
      {
        heading: "Contractors",
        body: "Find an Accredited landscape contractor for hard and soft landscape construction, ongoing maintenance and grounds care. Every contractor is independently assessed against our Association Quality Standard.",
      },
      {
        heading: "Suppliers",
        body: "Our Accredited supplier members provide plants, materials, machinery, tools, software and services trusted by professionals across the industry.",
      },
      {
        heading: "Training providers",
        body: "Approved training partners deliver industry-recognised qualifications including LISS/CSCS, ROLO, NHSS18 and CPD-accredited short courses.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/contractor": {
    eyebrow: "Landscape Directory",
    title: "Find a landscape contractor",
    theme: "blue",
    intro: "BALI Accredited Contractors are quality-assessed landscape construction and maintenance businesses operating across England, Scotland, Wales and Northern Ireland. Whether you need a domestic garden built, a commercial scheme delivered or a public space maintained, our members work to the highest professional standards.",
    sections: [
      {
        heading: "What Accreditation means",
        body: "Every contractor goes through a robust independent assessment against the BALI Association Quality Standard before being granted Accredited status — and is re-assessed periodically to retain it.",
      },
      {
        heading: "Domestic and commercial work",
        body: "Members cover everything from small private gardens to multi-million pound commercial, public realm and landscape construction contracts.",
        bullets: [
          "Hard and soft landscape construction",
          "Grounds maintenance and aftercare",
          "Domestic and commercial projects",
          "Covered by BALI's dispute resolution service",
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
    intro: "BALI Registered Designers are independently assessed professionals delivering creative, technically sound landscape and garden design across the UK. From private residential gardens to large public realm schemes, you can be confident in their experience, expertise and conduct.",
    sections: [
      {
        heading: "Registered Designers",
        body: "Independently assessed at registration and on renewal, BALI Registered Designers must demonstrate design competence, professional conduct and continuing professional development.",
      },
      {
        heading: "Why choose a BALI designer",
        body: "All Registered Designers commit to our Code of Conduct, hold appropriate professional indemnity insurance and are subject to BALI's quality and dispute resolution procedures.",
        bullets: [
          "Independently assessed credentials",
          "Professional indemnity cover",
          "Bound by the BALI Code of Conduct",
          "Access to BALI's dispute resolution service",
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
    intro: "BALI Accredited Suppliers and Affiliates provide plants, materials, machinery, tools, vehicles, software and professional services trusted by landscape professionals across the UK. Membership signals a long-term commitment to quality and to the industry.",
    sections: [
      {
        heading: "Plants and materials",
        body: "Nurseries, hard landscape product manufacturers, aggregates, soils, drainage and irrigation specialists supplying the trade nationwide.",
      },
      {
        heading: "Machinery and equipment",
        body: "Manufacturers and dealers supplying powered, hand and battery-powered equipment, vehicles, hire fleets, PPE and workshop services.",
      },
      {
        heading: "Professional services",
        body: "Software, finance, insurance, training, recruitment and marketing partners with proven sector expertise.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/training": {
    eyebrow: "Landscape Directory",
    title: "Find a training provider",
    theme: "blue",
    intro: "Approved BALI & ROLO training providers deliver industry-recognised qualifications and CPD courses for landscape professionals — including health and safety, plant operations, sustainability, technical skills and management.",
    sections: [
      {
        heading: "Industry-recognised training",
        body: "All listed providers meet BALI's standards for course content, instructor competence and quality assurance — many also deliver ROLO and LISS/CSCS qualifications.",
        bullets: [
          "ROLO Health, Safety & Environment",
          "NPTC and City & Guilds qualifications",
          "CPD-accredited short courses",
          "Apprenticeship support and assessment",
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
    intro: "Search the full BALI directory of over 900 Accredited member businesses across the UK by name, discipline, region or service. Every member is independently assessed and bound by our Code of Conduct.",
    sections: [
      {
        heading: "How to search",
        body: "Use the live directory on bali.org.uk to filter by membership type, county, postcode or keyword. You can also contact the BALI team and we will recommend members suited to your project.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/why": {
    eyebrow: "Landscape Directory",
    title: "Why choose a BALI member?",
    theme: "blue",
    intro: "Choosing a BALI Accredited member gives you the confidence that your landscape professional has been independently assessed, is committed to high standards of conduct, and is backed by the UK's leading trade association for the landscape industry.",
    sections: [
      {
        heading: "Independently assessed",
        body: "Every Accredited member is assessed against the BALI Association Quality Standard before joining and is regularly re-assessed to retain Accreditation.",
      },
      {
        heading: "Bound by our Code of Conduct",
        body: "All members commit to BALI's Code of Conduct, covering business practice, customer care, environmental responsibility and professional behaviour.",
      },
      {
        heading: "Dispute resolution",
        body: "If something does go wrong, our independent dispute resolution service helps clients and members reach a fair and reasonable outcome.",
      },
      {
        heading: "Quality you can trust",
        body: "From private gardens to flagship public schemes, BALI members are recognised industry-wide for their craftsmanship, expertise and reliability.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events": {
    eyebrow: "Events",
    title: "BALI Events",
    theme: "warm",
    intro: "From the flagship National Conference and Landscape Awards to regional Connect meet-ups, training days and supplier forums, BALI events bring the UK landscape industry together. Browse upcoming events, book your place and meet members, partners and industry leaders.",
    sections: [
      {
        heading: "National events",
        body: "Our flagship national events — including the National Conference, the National Landscape Awards and the Lay of the Land Forum — are unmissable dates in the industry calendar, attracting senior leaders from across the sector.",
      },
      {
        heading: "Regional Connects",
        body: "Our regional committees host informal Connect evenings, site visits and networking events across the UK throughout the year — an ideal way to meet other members and committee leads in your area.",
      },
      {
        heading: "Supplier Forums and training",
        body: "Supplier Forum events bring product manufacturers and the wider membership together, while our training partners deliver CPD-accredited short courses and qualifications nationwide.",
      },
    ],
    ctaPrimary: { label: "Browse upcoming events", href: "/events" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events/sponsor": {
    eyebrow: "Events",
    title: "Sponsor National Conference 2026",
    theme: "warm",
    intro: "BALI's National Conference is the flagship gathering of the UK landscape industry, bringing together leaders, suppliers, contractors and designers from across the country. Sponsorship offers your business unrivalled exposure to a senior, highly engaged audience.",
    sections: [
      {
        heading: "Why sponsor",
        body: "From headline branding to bespoke session sponsorship, packages can be tailored to your audience and goals — putting your brand at the heart of the industry's most influential event of the year.",
        bullets: [
          "Direct access to senior decision-makers across the landscape sector",
          "Year-round brand presence in BALI's communications",
          "Speaking and exhibition opportunities",
          "Bespoke hospitality and networking packages",
        ],
      },
      {
        heading: "Get in touch",
        body: "Sponsorship packages are limited and tailored to each partner. Contact the BALI team to discuss the options and secure the right opportunity for your business.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events/training": {
    eyebrow: "Events",
    title: "BALI Training Courses",
    theme: "warm",
    intro: "Mandatory course for most LISS/CSCS SmartCards. This course is hosted by Landscape Training Group.",
    image: { url: "/__l5e/assets-v1/9a43f90a-4a3a-4a31-80cb-fd5e1c43f0c0/jdrgroup-factlogo-iq-19-01-2026-v3-2-.jpg", alt: "BALI Training Courses" },
    sections: [
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
        heading: "Health And Safety",
        body: "Online resource for members, including helpful tools, templates and documents",
      },
      {
        heading: "Law And Regulations",
        body: "Online resource focusing on legal frameworks and contractual documents",
      },
      {
        heading: "Machinery And Driving",
        body: "Essential information on equipment and operating rules",
      },
      {
        heading: "Pests And Diseases",
        body: "Applicable to all landscape disciplines, looking at the latest UK threats",
      },
      {
        heading: "Plant Health Information",
        body: "Landscape has an important role to play in protecting our precious planet",
      },
      {
        heading: "Documents",
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
    intro: "Water abstraction refers to the process of taking or extracting water from a natural source (rivers, lakes, groundwater aquifers, etc.) for various uses, from drinking to irrigation, treatment, and industrial applications.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "VAT reverse charge",
        body: "The domestic VAT reverse charge for building and construction services will affect nearly all landscape contractors. Learn about the changes due from 1st March 2021",
      },
      {
        heading: "The Good Work Plan",
        body: "Whilst COVID-19 is likely to be at the forefront of members’ minds, several important employment law changes came into effect on Monday 6 April 2020 which are worthy of note.",
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/dispute": {
    eyebrow: "Help & Advice",
    title: "Dispute resolution service",
    theme: "flow",
    intro: "BALI operates an independent dispute resolution service to help clients and members reach a fair and constructive outcome when problems arise on a landscape project. The service is free to access and is one of the major benefits of choosing a BALI Accredited member.",
    sections: [
      {
        heading: "How the service works",
        body: "If you have an unresolved dispute with a BALI member, you can ask BALI to step in. Our team will review the complaint, contact both parties and seek a reasonable resolution — escalating to formal mediation or arbitration only when necessary.",
      },
      {
        heading: "Who can use it",
        body: "The service is open to any client of a BALI Accredited member. Both domestic and commercial clients can apply, provided the contract is with a current member and reasonable attempts have already been made to resolve the issue directly.",
      },
      {
        heading: "Member obligations",
        body: "All BALI members are bound by our Code of Conduct and agree to engage constructively with the dispute resolution process. This commitment is a key part of what BALI Accreditation means.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/hardship": {
    eyebrow: "Help & Advice",
    title: "BALI Chalk Fund — Hardship support",
    theme: "flow",
    intro: "The BALI Chalk Fund is the Association's charitable arm, providing financial and practical support to landscape industry colleagues who find themselves in genuine hardship — whether through illness, injury, bereavement or unforeseen personal circumstances.",
    sections: [
      {
        heading: "Who we help",
        body: "Support is available to anyone who is currently working, or has previously worked, in the UK landscape industry. Applications are treated with complete confidentiality and reviewed by an independent panel of trustees.",
      },
      {
        heading: "How to apply",
        body: "Applications can be submitted directly by the person in need, or on their behalf by a friend, family member or employer. The Chalk Fund team will work sensitively with applicants to assess need and provide the right support.",
      },
      {
        heading: "How you can help",
        body: "The Chalk Fund relies on donations, fundraising events and the generosity of the wider landscape community. From sponsored challenges to the annual Open Mic Night, there are many ways to get involved.",
        bullets: [
          "Make a one-off or regular donation",
          "Sponsor or take part in a fundraising event",
          "Encourage your company to support the fund",
          "Volunteer time or expertise",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/health-safety": {
    eyebrow: "Help & Advice",
    title: "Health & Safety",
    theme: "flow",
    intro: "BALI provides members with practical health and safety guidance, tools and templates to help keep their teams and clients safe. From risk assessments and method statements to lone-working policies and PPE guidance, our resources are tailored to the realities of landscape work.",
    sections: [
      {
        heading: "Risk assessment",
        body: "The law requires employers to identify hazards that could cause injury or illness to staff. BALI's risk assessment templates and guidance help members meet their legal duties and embed safe systems of work on every site.",
      },
      {
        heading: "Lone working",
        body: "Many landscape activities involve staff working alone. Employers have a responsibility to manage the risk lone workers face — BALI's guidance covers communication, check-in procedures and emergency response.",
      },
      {
        heading: "Member-only resources",
        body: "Logged-in members can access a growing library of downloadable templates, toolbox talks and policy documents covering all major aspects of landscape health and safety.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law": {
    eyebrow: "Help & Advice",
    title: "Contracts, Law and Regulations",
    theme: "slate",
    intro: "Water abstraction refers to the process of taking or extracting water from a natural source (rivers, lakes, groundwater aquifers, etc.) for various uses, from drinking to irrigation, treatment, and industrial applications.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "VAT reverse charge",
        body: "The domestic VAT reverse charge for building and construction services will affect nearly all landscape contractors. Learn about the changes due from 1st March 2021",
      },
      {
        heading: "The Good Work Plan",
        body: "Whilst COVID-19 is likely to be at the forefront of members’ minds, several important employment law changes came into effect on Monday 6 April 2020 which are worthy of note.",
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/pests": {
    eyebrow: "Help & Advice",
    title: "Pests & Diseases",
    theme: "flow",
    intro: "Applicable to all landscape disciplines, this section looks at the latest pest and disease threats affecting UK landscapes — from invasive insects and plant pathogens to biosecurity best practice for nurseries, contractors and designers.",
    sections: [
      {
        heading: "Current threats",
        body: "BALI keeps members updated on high-profile threats including Xylella fastidiosa, oak processionary moth, Ips typographus, ash dieback and Asian hornet. Early identification and reporting are critical to protecting UK landscapes.",
      },
      {
        heading: "Plant health and biosecurity",
        body: "Our guidance and member resources help businesses meet their plant health responsibilities — including the Plant Health Management Standard, sourcing checks, traceability and on-site biosecurity measures.",
      },
      {
        heading: "Reporting suspected outbreaks",
        body: "If you suspect a notifiable pest or disease, report it to the Animal and Plant Health Agency (APHA) using TreeAlert or PlantAlert. BALI works closely with Defra, Forest Research and APHA to support member awareness and response.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/podcast": {
    eyebrow: "Help & Advice",
    title: "Dig Deep — the BALI podcast",
    theme: "flow",
    intro: "Dig Deep is BALI's official podcast, exploring the people, projects and ideas shaping the UK landscape industry. Each episode features in-depth conversations with members, industry leaders and influential voices from design, construction, maintenance and supply.",
    sections: [
      {
        heading: "What you'll hear",
        body: "Expect honest, practical conversations on the issues that matter to landscape professionals — from sustainability and biosecurity to recruitment, mental health and the business of landscaping.",
      },
      {
        heading: "Where to listen",
        body: "Dig Deep is available on all major podcast platforms including Apple Podcasts, Spotify and Amazon Music. Subscribe to be notified of new episodes as soon as they're released.",
      },
      {
        heading: "Suggest a guest",
        body: "Got a story to tell or a topic you'd like us to cover? Get in touch with the BALI communications team — we welcome suggestions from members, partners and the wider industry.",
      },
    ],
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
        body: "Free HR & Employment Law Support:All members get a complimentary One-to-One HR Review with Quest, our trusted partner. Health & Safety Advice:You don’t need to go it alone. BALI membership includes tailored health & safety support — from compliance to documentation. Members of the Association can save thousands of pounds by taking advantage of our vast membership benefit portfolio, including HR and health & safety support, digital marketing advice, insurance, recruitment and much more.",
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
        body: "BALI offers nine membership categories to suit every kind of business or individual.Click below to explore the right one for you, review the application process, fees, and benefits.",
      },
      {
        heading: "Accredited Contractor",
        body: "This membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance",
      },
      {
        heading: "Accredited Designer",
        body: "The British Association of Landscape Industries is committed to continually improving the landscape sector and sets high standards for its Accredited Designer members",
      },
      {
        heading: "Accredited Supplier",
        body: "This membership category can be a business, section or division of a business that supplies quality materials and equipment",
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
        heading: "Overview",
        body: "It is vital therefore that the sector is well-understood and given the tools it needs – both by industry drivers and government policymakers – to continue to deliver the aforementioned benefits to the country. So, as the biggest Trade Association in the landscaping sector, we’ve undertaken our biggest member survey to date to ascertain the true sentiment and direction of travel of the industry. Our flagship “Lay of the Land” report provides an insight into the hopes of, challenges faced by, and future plans of respondents, leading to valuable recommendations for strengthening and supporting BALI members and the wider ecosystem. Some of the key highlights include:",
        bullets: [
          "45% of respondents were “confident or very confident” about their ability to maintain or expand their business over the next 12 months",
          "47% were planning to explore opportunities in Biodiversity and Net Zero in the next 12 months",
          "Businesses are focused inwardly, with 53% saying they plan to concentrate on new domestic markets, compared to fewer than 10% stating they were looking into new trade import and export pathways.",
        ],
      },
      {
        heading: "Documents",
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
        heading: "Overview",
        body: "This is achieved through a SmartCard scheme. To apply for any fully operational SmartCard you must successfully pass the ROLO Health, Safety and Environmental Awareness Course and CITB Touch Screen Test, appropriate to the SmartCard level. Only the CITB Touch Screen Test is required for the Modular Paving industry. For more information on LISS/CSCS, download our free advice leaflet which provides an additional explanation.",
      },
      {
        heading: "How to obtain a LISS/CSCS SmartCard",
        body: "LISS/CSCS SmartCards are only issued once certain requirements are met. Our SmartCards are categorised by industry type and you can view all categories here. The quickest way to apply for a SmartCard is online, however, if you have an urgent query you can contact the team who will reply within 48 hours. apply for a smartcard",
      },
      {
        heading: "Documents",
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
    sections: [
      {
        heading: "From 1st January 2020, all LISS/CSCS cards renewed under Industry Accreditation expired on 31 December 2024.",
        body: "To meet the requirements of the Construction Leadership Council (CLC) LISS/CSCS develop plans to move all Industry Accreditation (IA) cardholders to a recognised qualification.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply": {
    eyebrow: "LISS/CSCS",
    title: "Apply for a LISS/CSCS SmartCard",
    theme: "slate",
    intro: "The LISS/CSCS SmartCard is the recognised competence card for the landscape industry, accepted on construction sites across the UK. Holding the right card demonstrates your training and qualifications and, increasingly, is a requirement for access to many sites.",
    sections: [
      {
        heading: "Choosing the right card",
        body: "Card types include Trainee, Labourer, Skilled Worker, Supervisor, Manager and Professionally Qualified Person. The right card for you depends on your role, qualifications and experience.",
      },
      {
        heading: "How to apply",
        body: "Applications are made online via the LISS/CSCS website. You'll need proof of identity, evidence of your qualifications and the appropriate health, safety and environment test pass.",
        bullets: [
          "Pass the CITB Health, Safety & Environment test",
          "Provide evidence of relevant qualifications",
          "Submit your application and payment online",
          "Receive your SmartCard by post",
        ],
      },
      {
        heading: "Need help?",
        body: "If you're unsure which card to apply for, or need help with the application process, the LISS/CSCS team and BALI's training providers can guide you through it.",
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
    sections: [
      {
        heading: "Prior to applying for a LISS/CSCS SmartCard check our qualifications matrix to find out which Land-based qualifications are currently being accepted to support your application",
        body: "It is advisable to map your qualification(s) to the relevant LISS/CSCS SmartCard before making your application. Find out which SmartCard is suited to you based on whether you hold a UK or overseas qualification. By using the Construction Industry App - Smart Check, a free-to-download application for handheld devices and PCs, your LISS/CSCS SmartCard can be read electronically.",
      },
    ],
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
        heading: "Overview",
        body: "NHSS18 reflects requirements embodied in EN IS09001:2015 Quality Management system with specific relevance to Landscape Construction and Maintenance, Arboriculture, Application and Management of Pesticides, Amenity, Ecology and Environmental Management and Countryside Management. The scheme aims to ensure that Organisations working on roads have a trained and competent workforce. Sector Schemes are designed to provide an industry benchmark, ensuring all processes are planned and demonstrate continually improving standards, promoting confidence in quality management systems by the provision of a robust and transparent system. How to obtain accreditation? Initially, you will need to familiarise yourself with the scheme document, which can be found on the NHSS18 Schedule of Suppliers website. An updated version of Appendix S can be downloaded from this page. Please note this document is advisory and is subject to change but is seen as best practice. Accreditation can be achieved through one of the following UKAS Registered Certification Bodies: This list is not exhaustive but you must only use a UKAS Registered Certification Body (CB). Advice on the current accreditation status of certification bodies should be sought directly from UKAS by calling +44(0)17 8442 9000. The Schedule of Suppliers list for NHSS18 will give you information on who is registered and for which parts of the document.",
      },
      {
        heading: "Documents",
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
    intro: "ROLO (Register of Land-based Operations) is recognised by Build UK as one of the leading Health, Safety and Environmental Awareness Courses in the UK, designed exclusively for the Land-based industries by landscaping professionals.ROLO was developed and is owned by the British Association of Landscape Industries to raise the standard of health and safety, environmental awareness, and reduce the risk of accidents in the workplace. It also encourages employers to keep a record of workers in the Land-based sector who have achieved a recognised level of competence.",
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
        body: "Click here to access the ROLO online website. If you need further assistance, please do not hesitate to contact the team at liss@bali.org.uk.",
      },
    ],
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
  },
  "/membership": {
    eyebrow: "Membership",
    title: "Membership of BALI",
    theme: "green",
    intro: "BALI membership is open to landscape designers, contractors, maintenance specialists, suppliers, manufacturers, training providers and consultants operating in the UK. Members enjoy a strong national voice, professional development, technical support and business benefits worth thousands of pounds a year.",
    sections: [
      {
        heading: "Who can join",
        body: "There are dedicated membership categories for designers, contractors, suppliers, training providers, affiliate businesses and students — each with tailored benefits.",
      },
      {
        heading: "Benefits of membership",
        body: "From discounted insurance and fuel cards to free legal helplines, BALI offers practical, financial and reputational benefits across your whole business.",
        bullets: [
          "Independently assessed Accreditation",
          "Use of the BALI Accredited logo",
          "Free legal, HR and tax helplines",
          "Discounted business services and insurance",
          "Networking and CPD events nationwide",
          "Member-only news and technical advice",
        ],
      },
      {
        heading: "How to apply",
        body: "Joining BALI is straightforward — choose the right category, complete the application form, and our team will guide you through assessment and induction.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/code": {
    eyebrow: "Membership",
    title: "Code of Conduct",
    theme: "green",
    intro: "",
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
    intro: "For the purposes of this standard, “quality” is defined as being able to: “consistently and systematically deliver what the client can reasonably expect”",
    sections: [
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
    intro: "These are the standard terms and conditions of membership of BALI (which supplement the provisions contained in the Articles of Association). They may be varied by the Board of Directors. Notice of any variation will be given to members. The current version of the terms and conditions is available at https://www.bali.org.uk/members/terms-of-membership/. These terms and conditions along with your application form and the provisions of the Articles of Association form the agreement (“Agreement”) between each member and BALI.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
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
        body: "1.1 The membership year runs every year from 1 April – 31 March of the following year. 1.2 You agree to pay to us, on demand, the BALI annual membership fee (as set by us from time to time) and any other fees due. 1.3 Your membership (and therefore the Agreement between us) will automatically renew each year for another membership year unless you give written notice of cancellation no later than two months prior to the end of a membership year. In other words, notice of cancellation must be given to us no later than 31 January to end the agreement at the end of the current membership year. Non-payment of your membership fees is not accepted as notice of cancellation of your membership (or termination of our Agreement). 1.4 If there is any default or delay of a direct debit payment or any other payments due which has not been waived or authorised in writing by us, we have the right to request immediate payment of the full balance of the year’s membership fees and any other sums due. 1.5 You agree to abide and comply with the associations Code of Conduct (as amended by us from time to time). The latest version of which is set out on our website here. 1.6 You agree to cooperate fully with the Associations Quality Standards Review Procedure which may include both office and site visits performed at intervals determined by the Board and subject to any Dispute Resolution findings.",
      },
      {
        heading: "2. Use of Information",
        body: "2.1 As part of your application(s) for membership (including renewal applications) and/or during your membership of BALI, you may provide personal data to us (“Personal Information”). This Personal Information will be used by us for (i) considering your application(s) and (ii) if you are accepted, contacting you and/or providing information to you in respect of us, your membership and/or events organised by and/or associated with us. 2.2 In addition, we have a number of associated organisations who provide products, goods and/or services to our members. A current list of such associated organisations can be found here: bali.org.uk. If you are accepted as a member, we will provide your contact information details to such associated organisations so that they can contact you directly to discuss their products, goods and/or services. If you do not want us to provide and/or to continue to provide your information to our associated organisations, please inform us in writing to Membership Department, BALI, Landscape House, Stoneleigh Park, Kenilworth, Warwickshire, CV8 2LG. 2.3 We will not otherwise sell, distribute, or lease your Personal Information to third parties unless we have your permission or are required by law to do so. 2.4 If you cease to be a member, we will, within 12 months, delete and not use your Personal Information (save that we may, where reasonably justified, keep, and use information for statistical purposes and/or records of any and all complaints that we have received in respect of you and/or your employees, contractors, directors and/or shareholders). 2.5 If you confirm you no longer wish to continue with your application for membership, we will only retain personal information on our database for a period of 12 months.",
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
        heading: "Overview",
        body: "Check out our past issues here:",
      },
      {
        heading: "In this issue",
        body: "If you've got a story you want to share with our readers, email your ideas to our editor at landscapenews@bali.org.uk",
        bullets: [
          "Court is in session - Three decades behind the scenes with the \"King of Chelsea\", Mark Gregory",
          "Is your brand working hard enough for you? - Expert advice on knowing when your brand needs a refresh and how to do it",
          "From natural to nourishing - A look at the domestic design trends set to shape 2026",
          "Smiley, happy people - Why a people first philosophy can solve the industry's ills",
        ],
      },
      {
        heading: "Winter 2025",
        body: "In this issue:",
        bullets: [
          "Isn't that Grand? - An exclusive interview with the BALI Awards Grand Award winner 2025, The Outdoor Room",
          "It's only natural: the rise of natural pools in UK garden landscapes - Ellicar invites us into this eco-friendly world of harmony with the environment",
          "Shout about it - Our social media guru reveals the top tips and tricks for a successful social media strategy",
          "Under the surface - Tim O'Hare Associates examine the importance of soil choice in landscaping",
        ],
      },
      {
        heading: "Autumn 2025",
        body: "In this issue:",
        bullets: [
          "Inside the mind of a BALI awards judge - Chair of the judging panel, John Melmoe, reveals the secrets to a successful awards entry",
          "Weathering the storm - In a cautious market, designer Adam Vetere shares how creativity and personalisation can help you to thrive",
          "Pitch perfect - North Hort's Gareth Jones lifts the lid on finding success with celebrity clients",
          "First impressions - How to make the most of probationary periods and set your employees up for success",
        ],
      },
      {
        heading: "Summer 2025",
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
        heading: "Overview",
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
        body: "This is information we receive about you if you use any of the other websites we operate or the other services we provide. We are working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies). We will notify you when we receive information about you from them and the purposes for which we intend to use that information. Our website uses cookies to distinguish you from other users of our website.",
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
        body: "Your IP (Internet Protocol) address Our website collects your IP address automatically. This is the unique address of the device you are using to access our site. The IP address, on its own, does not identify you as an individual but gives us information that helps us better understand site usage, and therefore enhances our services and website experience for you and others. We use cookies Cookies are small pieces of data that are downloaded to your computer or mobile device when you visit a website or application. Some areas of our website would not function without them, some cookies help provide a better experience for you, and some help us to understand how people use our website. They help us understand who new users are, who our existing ones are and how you have reached our site. They remember details in order that you don’t have to enter them multiple times. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of our website functionality. We use Google Analytics Google Analytics is a tool that helps us understand how you interact with the website. Examples of statistics gathered include when you visit it, how long you stay on pages, what device type you are using (e.g. desktop or mobile), what page you left from and so forth. Information is collected as per Google’s terms and conditions, and associated privacy notices which we suggest you read. Information is anonymised, and any single piece of data contained within Google Analytics does not solely identify an individual. How we share your information We never sell your information to other companies. We will only share your information if you have consented for us to do so, or in accordance with our privacy policy. If we need to share your personal information for a new reason, we will ask you for your consent.",
      },
      {
        heading: "How we use information about you",
        body: "Where you have submitted an enquiry, we will use your information as detailed within our privacy policy and process it lawfully in accordance with the General Data Protection Regulation (GDPR). We will only directly market to you if you have given us consent (e.g. signed up for our newsletter). If you have visited our website and consented to allow cookies we reserve the right to make contact with you or an individual of your company where there is a clear legitimate interest made.",
      },
      {
        heading: "Where we store your information",
        body: "All data processed through our website is secure. We use a secure and redundant network housed in a fully ISO accredited (ISO27001 and ISO9001) data centre based in London, manned 24/7. Where we provide further services to you, we may store your information on other secure systems in accordance with our privacy policy.",
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
        body: "Our Disclaimer also applies to your use of our site and our Booking and Entry Terms may also apply when using and/or accessing baliawards.co.uk or golandscape.co.uk.",
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
        heading: "You also agree",
        body: "",
        bullets: [
          "Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of our Terms of Website.",
          "Not to access without authority, interfere with, damage or disrupt:- any part of our site;- any equipment or network on which our site is stored;- any software used in the provision of our site; or- any equipment or network or software owned or used by any third party.",
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
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/disclaimer": {
    eyebrow: "BALI",
    title: "Disclaimer",
    theme: "slate",
    intro: "Access to, and use of, the BALI website is provided by the British Association of Landscape Industries subject to the terms below. By using bali.org.uk you agree to be bound by these terms.",
    sections: [
      {
        heading: "Site content",
        body: "bali.org.uk is the website of the British Association of Landscape Industries. BALI makes no warranties or representations about the quality, accuracy, completeness or fitness for purpose of any content on the site, or any third-party site reached via a hypertext link.",
      },
      {
        heading: "Third-party sites",
        body: "BALI does not endorse or approve the content of any third-party site, nor does it accept any liability in connection with them — including liability arising from alleged infringement of law or rights.",
      },
      {
        heading: "Use of the site",
        body: "You may view, download and print pages of the site for your own personal use, subject to the restrictions in our Terms of Use. You may not modify or republish content without permission.",
      },
      {
        heading: "Limitation of liability",
        body: "BALI will not be liable for any direct, indirect, incidental or consequential loss or damage arising from your use of, or inability to use, this site or any of its content.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/sitemap": {
    eyebrow: "Sitemap",
    title: "Site map",
    theme: "slate",
    intro: "Find every section of the BALI website at a glance. Use the sitemap to navigate to information about the Association, membership, the Landscape Directory, news, events, help and advice and LISS/CSCS.",
    sections: [
      {
        heading: "About BALI",
        body: "What we do, our Board of Directors, the National Landscape Awards, BALI-NCF, landscaping careers, advertising and supported charities.",
      },
      {
        heading: "Membership",
        body: "How to join, member login, terms of membership, our Code of Conduct and Association Quality Standard.",
      },
      {
        heading: "Landscape Directory",
        body: "Find Accredited designers, contractors, suppliers and training providers, plus information on why to choose a BALI member.",
      },
      {
        heading: "News & Events",
        body: "Latest industry news, the Landscape News magazine and upcoming national, regional and supplier events.",
      },
      {
        heading: "Help & Advice",
        body: "Landscape contracts, health and safety, law and regulations, dispute resolution, pests and diseases, the Hardship Fund and the Dig Deep podcast.",
      },
      {
        heading: "LISS/CSCS",
        body: "What LISS/CSCS is, how to apply for a SmartCard, check qualifications, ROLO, NHSS18 and industry accreditation.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/forgotten-password": {
    eyebrow: "Account",
    title: "Forgotten your password?",
    theme: "slate",
    intro: "If you can't remember your password, you can reset it from the member login page. Enter the email address associated with your BALI account and we'll send you a secure reset link.",
    sections: [
      {
        heading: "Reset your password",
        body: "Go to the login page and click 'Forgotten password'. Enter your registered email address and we'll email you a link to set a new password. If you don't receive the email within a few minutes, check your spam folder.",
      },
      {
        heading: "Still having trouble?",
        body: "If you've forgotten the email associated with your account or the reset email doesn't arrive, please contact BALI head office and we'll help you regain access.",
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

export const allPagePaths = Object.keys(C);