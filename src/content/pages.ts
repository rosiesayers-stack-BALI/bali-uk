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
    intro: "A Trade Association for all landscape professionals",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "Join the British Association of Landscape Industries",
        body: "Our Association's professional team, based at Landscape House in Warwickshire, deliver exceptional business, technical and promotional support to our members. We have a range of member benefits that can save your business thousands of pounds every year. Find out more about becoming a member.",
      },
      {
        heading: "Find a landscape...",
        body: "Looking for a high-quality and reliable landscape professional? We have Accredited members in every county, including England, Wales, Scotland and Northern Ireland. Browse our member directory and search by town or postcode to find you nearest . When you choose one of our Accredited members, you can be confident you are choosing a reputable and quality professional. To ensure our high standards are kept, membership is only granted to companies and individuals who meet our Association's stringent Terms & Conditions of Membership , and their continuation of membership depends upon the maintenance of satisfactory standards.",
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
      {
        heading: "Kersten Catella",
        body: "Newly elected to the BALI Board, I have worked in the industry for over 20 years, mentoring many colleagues. I wanted to join the BALI Board because of its commitment to excellence in landscaping and horticulture, an area I am passionate about.",
      },
      {
        heading: "Paul Lynch",
        body: "Chair of the South West regional committee since 2020, I have recently been elected to the BALI Board. I am committed to helping members get the most out of their BALI membership and feel strongly about the contribution mentoring can make to members' success.",
      },
      {
        heading: "Dave Twist",
        body: "New to the BALI Board, I am a seasoned industry professional with over 40 years' experience. I support diversity on boards as a member of Women of Boards, and I am also a member of Perennial, the horticulture industry's support charity.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/careers": {
    eyebrow: "About BALI",
    title: "GoLandscape — Careers in Landscaping",
    theme: "blue",
    intro: "Our Association and its members recognise the importance of introducing new talent into the landscaping industry, directly tackling the skills deficit.",
    image: { url: "/__l5e/assets-v1/a5290e22-f805-49d7-932e-6e9217376059/bali-jobs-people.jpg", alt: "BALI Jobs" },
    sections: [
      {
        heading: "documents",
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
    intro: "The British Association of Landscape Industries supports a number of different charities helping those working across our industry.",
    image: { url: "/__l5e/assets-v1/796d324b-86f1-4094-a94a-9d98a264d7af/medium_bali-chalk-fund.png", alt: "BALI Chalk Fund" },
    sections: [
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
    intro: "The UK’s landscaping sector is at a turning point. Climate pressures are growing, skills are in short supply, and new rules like Biodiversity Net Gain are raising the stakes. BALI’s National Landscape Conference brings together the industry’s brightest minds to ask one vital question: how do we build landscapes and organisations that are truly future-proof? Hear from visionaries including Helen Nyul, Director of Ecology at Verna, and Sir Tim Smit, Founder of the Eden Project. Book now details The UK landscaping sector stands at a defining moment.",
    image: { url: "/__l5e/assets-v1/ea4903cb-9e33-43c9-9370-90c0844b9740/medium_11.png", alt: "Helen Nyul" },
    sections: [
      {
        heading: "Agenda at a glance",
        body: "Theme: Climate resilience and how to future proof your business. A day focused on sustainability, biodiversity, plant health, skills, and economic resilience. 09:30 to 10:00 Arrival and refreshments 10:00 to 10:05 Welcome & Opening Remarks Hosted by Adrian Wickham Setting the scene for a day focused on resilience, sustainability and opportunity across the landscaping sector. 10:05 to 10:40 Keynote: Trevor Williams - Global Trends & Economic Forces Impacting Landscaping A strategic overview of the geopolitical and economic forces shaping global trade — and what they mean for UK landscaping businesses. Key themes include: - Global trade, exports and imports: pressures on supply chains and costs - How shifting wealth dynamics are influencing demand for landscaping and luxury projects - What economic uncertainty really means for the landscaping industry - Practical, clear takeaways on managing risk, building climate resilience, and future-proofing your business 10:40 to 11:15 Keynote: Sir Tim Smit - Regenerative Sustainability & The Eden Project An inspiring exploration of how bold, regenerative thinking can transform landscapes, businesses and communities. Key themes include: - The transformation of the Eden Project from clay pit to global sustainability icon - Moving beyond sustainability towards regenerative practices that actively restore ecosystems - Practical lessons for embedding climate resilience into landscaping operations and long-term strategy 11:15 to 11:50 Refreshments and networking 11:50 to 12:25 Keynote: Helen Nyul - Biodiversity Net Gain & Climate Resilience A practical look at how Biodiversity Net Gain (BNG) can drive climate resilience while strengthening business performance. Key themes include: - BNG as a tool for sustainable, resilient business practice - How to operationalise BNG requirements using current guidance and standards - Turning compliance into opportunity 12:30 to 13:30 Lunch and networking 13:30 to 14:30 Breakout sessions (choose one) Room 1: A Workplace for the Future Hosted by Sam Grayson – Hyphae Learning Panel with Paul Downer – Oak View Landscapes/ BALI Board Director, Gamiel Yafai – Diversity Marketplace, More panellists to be announced This panel will share perspectives on what the future workplace will look and feel like, covering topics from leadership, high performance, and well-being to culture, acceptance, inclusion, and respect Room 2: Data-Driven Biodiversity With Liz Nicholson – Nicholson Nurseries Practical advice on integrating biodiversity measurement into everyday operations How biodiversity metrics support sustainable landscape practice and business strategy Introduction to Elemental Room 3: The Reality of Plant Health Hosted by Dougal Driver – Grown in Britain Panel with Will Innes-Taylor - Hillier Nurseries, Alistair Bayford – Frosts/ BALI Board Director, Malcolm Catlin – Plant Healthy This panel will explore: - Major threats to plant health in nurseries and landscaping projects - Managing increased plant health risks and import pressures - The nursery sector’s role in biodiversity and sustainability - How landscapers and nurseries can collaborate for stronger long-term outcomes 14:30 to 15:00 Refreshments and networking 15:00 to 16:00 Breakout sessions (choose one) Room 1: Training and Developing Future Talent Hosted by Jake Catling – Hyphae Learning/ BALI Board Director Panel with Ruth Orrell-Harris – Activate Learning, Jonathan Pettit – BALI, more panellists to be announced. To build a resilient workforce, leaders must move beyond traditional \"tick-box\" training. This session explores a strategic three-prong approach to talent development, analysing how we currently utilise In-House, External, and Formal training and—more importantly—how we must evolve them to resonate with a digital-first generation. Room 2: Goods to the Ground – Inside the Supply Chain Hosted by Rachel Forsyth - Hortweek Panel With Chris Swan – Green-Tech, Richard McKenna – Provender Nurseries, Richard Brown – Germinal , Michael Mclvor-New - Tobermore This panel will explore: - The journey from supplier to site: risks, delays and cost pressures - Export and import challenges affecting availability and pricing - Managing customer expectations in an “Amazon-effect” world - Being transparent about price increases without losing trust or margin - Strengthening collaboration between suppliers, contractors and clients - One practical improvement the industry can adopt to build supply-chain resilience Room 3: Where’s the Money? Navigating the Economic Landscape Hosted by Adrian Wickham – BALI, Chair Panel with Mark Powell – J M Finn Investments, Kim Sones – Sones Accountancy Services and more to be announced In an era of economic uncertainty, pricing volatility and climate pressures, how can landscaping businesses stay financially resilient and strategically positioned for growth? This session brings together leading financial voices to explore the economic landscape from global trends to business-level impact. 16:00 to 17:00 Panel Discussion & Closing Session A reflective panel with hosts from each breakout session, sharing: - Key insights and learnings from the day - Practical actions for the industry moving forward - Audience Q&A Closing remarks: Wayne Grills, BALI Chief Executive 17:00 to 18:30 Networking drinks reception Continue the conversation and connect with peers, speakers and industry leaders Note: breakout content and panellists may be subject to change. As the UK’s leading landscaping trade association, BALI is proud to convene this conversation. The challenges facing our sector are complex and urgent, but they are also an opportunity. By bringing together expertise, experience and ambition, we can help shape a more resilient, confident and future-ready industry.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/ncf": {
    eyebrow: "About BALI",
    title: "BALI National Children's Forest",
    theme: "blue",
    intro: "Introducing the British Association of Landscape Industries’ National Contractor’s Forum",
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
    intro: "2026 National Landscape Award entries are now open!",
    sections: [
      {
        heading: "Inspiring and celebrating landscaping excellence",
        body: "The National Landscape Awards provides the industry with a platform in which to showcase and improve their business and celebrate their achievements both within and outside of the industry. There are categories appropriate to all Accredited categories of membership. If you are an Accredited Contractor or Group or Accredited Designer member, there are categories appropriate to all scheme sizes/values and the same criteria apply, whether it is a small domestic garden or a large public landscaped space. Interested in the Supplier Exceptional Service or Employer Excellence categories? These categories have been developed to allow you to showcase your company to the industry through the exceptional service and/or products you provide or your exemplary business practices. Entries are open now! Click here . Learn more about the Awards here .",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/about/advertise": {
    eyebrow: "About BALI",
    title: "Advertise with BALI",
    theme: "blue",
    intro: "Advertise your business with our Association and access over 900 members including the UK's largest landscape contractor network.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "documents",
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
    intro: "Find your nearest Accredited garden designer, landscaper, supplier or training provider. You can refine your search to make it even easier.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/contractor": {
    eyebrow: "Landscape Directory",
    title: "Find a landscape contractor",
    theme: "blue",
    intro: "Accredited Contractor membership is for contractors whose main business involves hard/soft landscaping or grounds maintenance.",
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
    intro: "The British Association of Landscape Industries is committed to continually improving the landscape sector and sets high standards for its Accredited Designer members.",
    sections: [
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
    intro: "This membership category can be a business, section or division of a business that supplies quality materials and equipment.",
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
    intro: "This category of membership is for individual trainers, commercial training organisations, FE and HE colleges and universities, delivering land-based academic and skills training, needing to keep abreast of industry news and developments.",
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
        body: "For full Training Provider member benefits and fees, please see the attached document on the right-hand side. To make an enquiry about becoming an Association Training Provider member, please follow the link here.",
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
    intro: "Find your nearest Accredited garden designer, landscaper, supplier or training provider. You can refine your search to make it even easier.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/directory/why": {
    eyebrow: "Landscape Directory",
    title: "Why choose a BALI member?",
    theme: "blue",
    intro: "British Association of Landscape Industries members carry out their duties to the very highest industry standards. To be a member is to provide professional excellence at all times.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/events": {
    eyebrow: "Events",
    title: "BALI Events",
    theme: "warm",
    intro: "BALI Events",
    sections: [
      {
        heading: "Midlands Regional Event – Sky Garden",
        body: "Join us for this informative and educational Midlands regional event, hosted by Sky Garden",
      },
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
    intro: "BALI Training Courses",
    image: { url: "/__l5e/assets-v1/9a43f90a-4a3a-4a31-80cb-fd5e1c43f0c0/jdrgroup-factlogo-iq-19-01-2026-v3-2-.jpg", alt: "BALI Training Courses" },
    sections: [
      {
        heading: "ROLO Health, Safety and Environmental Awareness Course for Operatives - 1 Day online",
        body: "ROLO H&S Environmental Awareness Course for Operatives - 1 Day Online",
      },
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
    intro: "BALI Help & Advice",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "landscape contract",
        body: "contract for use on all domestic landscape and garden design and build projects",
      },
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
    intro: "Contracts, Law and Regulations",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "CDM regulations",
        body: "How CDM applies to the landscape industry",
      },
      {
        heading: "water abstraction",
        body: "Water abstraction refers to the process of taking or extracting water from a natural source (rivers, lakes, groundwater aquifers, etc.) for various uses, from drinking to irrigation, treatment, and industrial applications.",
      },
      {
        heading: "VAT reverse charge",
        body: "The domestic VAT reverse charge for building and construction services will affect nearly all landscape contractors. Learn about the changes due from 1st March 2021",
      },
      {
        heading: "the good work plan",
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
    intro: "Learn more about the dispute resolution service offered by The British Association of Landscape Industries to members and their client.",
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
    intro: "Health & Safety",
    sections: [
      {
        heading: "risk assessment",
        body: "The law requires employers to identify the hazards that could cause injury or illness to staff. Learn more here",
      },
      {
        heading: "lone working",
        body: "As with any other work-related task, employers have a responsibility to manage the risk employees face when working alone.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/law": {
    eyebrow: "Help & Advice",
    title: "Contracts, Law and Regulations",
    theme: "slate",
    intro: "Contracts, Law and Regulations",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "CDM regulations",
        body: "How CDM applies to the landscape industry",
      },
      {
        heading: "water abstraction",
        body: "Water abstraction refers to the process of taking or extracting water from a natural source (rivers, lakes, groundwater aquifers, etc.) for various uses, from drinking to irrigation, treatment, and industrial applications.",
      },
      {
        heading: "VAT reverse charge",
        body: "The domestic VAT reverse charge for building and construction services will affect nearly all landscape contractors. Learn about the changes due from 1st March 2021",
      },
      {
        heading: "the good work plan",
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
    intro: "A resource for all disciplines of landscape professional wishing to learn about the threat from high profile pests and diseases, together with the latest legal requirements and best practice for specific species. Some of the articles on this page are for members only. To access, become a member by making an enquiry.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/help/podcast": {
    eyebrow: "Help & Advice",
    title: "Dig Deep — the BALI podcast",
    theme: "flow",
    intro: "Unlock your marketing potential with our exclusive collection of best practice guides, created just for BALI members.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/join": {
    eyebrow: "Join BALI",
    title: "Join Our Association",
    theme: "green",
    intro: "Join the UK’s Leading Landscaping Network",
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
    intro: "What is LISS/CSCS?",
    image: { url: "/__l5e/assets-v1/7d357e1d-8b62-4bc6-bfb8-a4f86c403651/screenshot-2020-10-16-at-10.08.26.png", alt: "LISS/CSCS SmartCards" },
    sections: [
      {
        heading: "Introducing LISS/CSCS",
        body: "LISS/CSCS is both a standalone scheme and a mandatory requirement of the National Highways Sector Scheme 18 (Land-based) recognised by Build UK. It is designed to support the development of an industry framework for skills development and progression in the workplace alongside CSCS. This is achieved through a SmartCard scheme. To apply for any fully operational SmartCard you must successfully pass the ROLO Health, Safety and Environmental Awareness Course and CITB Touch Screen Test, appropriate to the SmartCard level. Only the CITB Touch Screen Test is required for the Modular Paving industry. For more information on LISS/CSCS, download our free advice leaflet which provides an additional explanation.",
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
    intro: "From 1st January 2020, all LISS/CSCS cards renewed under Industry Accreditation expired on 31 December 2024.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/apply": {
    eyebrow: "LISS/CSCS",
    title: "Apply for a LISS/CSCS SmartCard",
    theme: "slate",
    intro: "Apply for a LISS/CSCS SmartCard to gain access to commercial land-based sites. Upskill your workforce and develop your own personal career by demonstrating your qualifications, skills and knowledge.",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/check": {
    eyebrow: "LISS/CSCS",
    title: "Check qualification(s)",
    theme: "slate",
    intro: "Prior to applying for a LISS/CSCS SmartCard check our qualifications matrix to find out which Land-based qualifications are currently being accepted to support your application",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/liss-cscs/nhss18": {
    eyebrow: "LISS/CSCS",
    title: "NHSS 18 Highway Sector Scheme",
    theme: "blue",
    intro: "National Highways Sector Scheme 18 for the Natural Environment and Landscape, including Ecology for Infrastructure.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
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
    intro: "ROLO Health, Safety & Environmental Awareness",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "What is ROLO?",
        body: "ROLO (Register of Land-based Operations) is recognised by Build UK as one of the leading Health, Safety and Environmental Awareness Courses in the UK, designed exclusively for the Land-based industries by landscaping professionals. ROLO was developed and is owned by the British Association of Landscape Industries to raise the standard of health and safety, environmental awareness, and reduce the risk of accidents in the workplace. It also encourages employers to keep a record of workers in the Land-based sector who have achieved a recognised level of competence.",
      },
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
    intro: "Join the UK’s Leading Landscaping Network",
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
    intro: "Continued membership of the Association is dependent upon agreement to abide by the Association’s Code of Conduct detailed below:",
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact the team", href: "/contact" },
  },
  "/membership/quality": {
    eyebrow: "Membership",
    title: "Association Quality Standard",
    theme: "green",
    intro: "Association Quality Standard",
    sections: [
      {
        heading: "What is Quality?",
        body: "For the purposes of this standard, “quality” is defined as being able to: “consistently and systematically deliver what the client can reasonably expect”",
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
    intro: "Please find the Terms of Membership for all members, and anyone looking to become a member will have to adhere to the same terms below.",
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
    intro: "Latest News",
    image: { url: "/__l5e/assets-v1/731280f5-5ca5-49ee-9543-e7d1c1ebcc68/large_cheslyn-hay-min.jpeg", alt: "Latest News" },
    sections: [
      {
        heading: "Delivering social value through community landscaping in Cheslyn Hay",
        body: "Volunteers from Jack Moody Group have recently completed a new community landscaping project in Cheslyn Hay",
      },
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
    intro: "British Association of Landscape Industries (The) (\"We\") are committed to protecting and respecting your privacy.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    sections: [
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
    intro: "Cookie Policy",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "You provide some information",
        body: "There are a number of ways we collect your data. We process your data to provide a service to you, whether you make an enquiry, locate a member, log in to your member's area (applicable to members only) or by purchasing a product or service. When you complete a form, we collect information which we will use to respond to your enquiry. In order to satisfy your request, we ask for relevant contact details such as name, email address and telephone number. We may also ask for your geographic area and industry specialisms. This depends on which enquiry form you are completing.",
      },
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
    intro: "Please read the terms and conditions before using the website.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "What's in these terms?",
        body: "This acceptable use policy sets out the content standards that apply when you upload content to our site, make contact with other users on our site, link to our site, or interact with our site in any other way.",
      },
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
    intro: "Access to, and use of, this site is provided by the British Association of Landscape Industries subject to the following terms and conditions (\"Terms\"):",
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
};

export function getPageContent(path: string): PageContent | undefined {
  const key = path.replace(/\/+$/, "") || "/";
  return C[key];
}
