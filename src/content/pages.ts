// AUTO-GENERATED from bali.org.uk — verbatim copy ported into the new site.
// Central content store for all BALI website pages rendered via the splat route.

export type PageSection = { heading: string; body: string; bullets?: string[]; image?: PageImage };
export type PageHighlight = { title: string; body: string };
export type PageCTA = { label: string; href: string };
export type PageImage = { url: string; alt: string };
export type PageEmbed = { url: string; title: string; height?: number };
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
        image: { url: "/__l5e/assets-v1/3d338334-e59a-4b97-b136-9555cbeafed4/small_adrian-wickham-1.png", alt: "Adrian Wickham" },
      },
      {
        heading: "Matt Nokes",
        body: "I am a chartered Landscape Architect with over 20 years of industry experience. I feel I offer a perspective on the Board that compliments the other Directors and focus on encouraging and promoting integrated collaboration to create high-quality landscapes.",
        image: { url: "/__l5e/assets-v1/b738a3ac-f15f-48f4-bcf0-7fd0ec9c3e5e/small_matt-nokes-1.png", alt: "Matt Nokes" },
      },
      {
        heading: "Matt O'Conner, Immediate Past Chair",
        body: "My vision is one of constant innovation and delivering benchmarked landscape services via a skilled and trained workforce. I will support the current Chair and Vice-Chair and am driven to ensure quality is the golden thread that runs throughout the association and its membership.",
        image: { url: "/__l5e/assets-v1/111db854-b1f3-4ac4-b530-bc198b666f04/1matt-o-conner-1.png", alt: "Matt O'Conner" },
      },
      {
        heading: "Richard Stone, Treasurer",
        body: "On the Board, I undertake the role of Honorary Treasurer, responsible for financial reports, financial analysis, and budgeting. I take an active part in all Board activities, with a particular passion to help develop the Association's digital offering, evolving business planning and improving processes.",
        image: { url: "/__l5e/assets-v1/00529d70-f8b3-49c8-ab5c-ada74f91bd72/richard-stone-1.png", alt: "Richard Stone" },
      },
      {
        heading: "Wayne Grills, Chief Executive",
        body: "I’m committed to raising the Association’s profile at both government and industry levels. I support cross-industry working groups and committees, representing the Association and its members, including APPGHG, Scottish Ministerial Industry Roundtable Group and the OHRG.",
        image: { url: "/__l5e/assets-v1/44628158-235d-4c6e-a21e-b7cac7d5b91d/1wayne-grills-1.png", alt: "Wayne Grills" },
      },
      {
        heading: "Jake Catling",
        body: "As South Thames Chair and now a Board Director, I am in a position to continue helping GoLandscape increase industry engagement both through better story-telling on a local and national level. My other focus is the development of the Academy pilot.",
        image: { url: "/__l5e/assets-v1/e98b6e40-9fc2-47ff-877c-cbe49141b4dc/jake-catling.png", alt: "Jake Catling" },
      },
      {
        heading: "Paul Downer",
        body: "I am a great believer in “giving back”, carrying out guest lectures to students and acting as a mentor to provide business advice and support less experienced companies. I am also a GoLandscape Ambassador and a Trustee of the BALI Chalk Fund.",
        image: { url: "/__l5e/assets-v1/f8178405-6d82-42bf-8a08-18d31f1415dd/paul-downer.png", alt: "Paul Downer" },
      },
      {
        heading: "Richard Gill",
        body: "I have been on the Yorkshire & North East committee for 10 years and am currently Vice-Chair, as well as a GoLandscape Ambassador. I’m very honoured to join the Board, and look forward to helping increase membership levels, and support the industry’s leading association.",
        image: { url: "/__l5e/assets-v1/c0af2ae4-e2c6-4adc-832e-a176037ba590/small_richard-gill-1.png", alt: "Richard Gill" },
      },
      {
        heading: "Ricky Whiteman",
        body: "As Student Director, I promote the industry to people who may be considering a career or studying towards a qualification in the industry, sharing my experience and enthusiasm for how fulfilling and diverse a career in our industry can be.",
        image: { url: "/__l5e/assets-v1/f1e15ba8-e87c-44d7-95d9-06f16034f546/ricky-whiteman-1.png", alt: "Ricky Whiteman" },
      },
      {
        heading: "Mark Gregory",
        body: "Returning to the BALI Board in 2024, I am a well-known technical expert in the landscape industry. I am also a RHS garden assessor and judge/Ambassador and lectures widely in the UK and overseas on landscaping",
        image: { url: "/__l5e/assets-v1/cb6850dc-fc70-4a03-b81a-47f4ae0f5f02/mark-gregory-website.gif", alt: "Mark Gregory" },
      },
      {
        heading: "Alistair Bayford",
        body: "I was elected to the BALI Board at this year's AGM. I am a Chartered Member of the Landscape Institute with many years in the industry, and have worked in private, public and non-profit sectors.",
        image: { url: "/__l5e/assets-v1/46012745-96eb-4c63-82fc-7364b520bab4/alistair-bayford-website.gif", alt: "Alistair Bayford" },
      },
      {
        heading: "Kersten Catella",
        body: "Newly elected to the BALI Board, I have worked in the industry for over 20 years, mentoring many colleagues. I wanted to join the BALI Board because of its commitment to excellence in landscaping and horticulture, an area I am passionate about.",
        image: { url: "/__l5e/assets-v1/529295d4-7ec2-4ddc-8141-be56a27e955d/kersten-catella-website.gif", alt: "Kersten Catella" },
      },
      {
        heading: "Paul Lynch",
        body: "Chair of the South West regional committee since 2020, I have recently been elected to the BALI Board. I am committed to helping members get the most out of their BALI membership and feel strongly about the contribution mentoring can make to members' success.",
        image: { url: "/__l5e/assets-v1/8804a077-b582-4976-8c9a-c6020c8daae0/paul-lynch-website.gif", alt: "Paul Lynch" },
      },
      {
        heading: "Dave Twist",
        body: "New to the BALI Board, I am a seasoned industry professional with over 40 years' experience. I support diversity on boards as a member of Women of Boards, and I am also a member of Perennial, the horticulture industry's support charity.",
        image: { url: "/__l5e/assets-v1/5383bced-dbf4-4fb1-9dc4-333c07bae006/dave-twist-website.gif", alt: "Dave Twist" },
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
        heading: "Our Association and its members recognise the importance of introducing new talent into the landscaping industry, directly tackling the skills deficit.",
        body: "GoLandscape provides a wealth of inspiring and educational career advice on landscaping jobs to young people. The advice is mapped to the UK government's curriculum for the land-based sector and linked to the Trailblazer Apprenticeship Standards . The British Association of Landscape Industries has played an instrumental part in lobbying at a parliamentary level and establishing the Trailblazer Apprenticeship Standards as recognised qualifications in land-based colleges throughout the country. GoLandscape brings together real-life stories and exemplary projects from leading landscape industry organisations and individuals. These provide practical examples of what it is really like to work in the industry that we are all so proud of, and why landscaping jobs offer serious career paths that provide opportunities for everyone. For more information visit our GoLandscape website .",
      },
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
    intro: "We are thrilled to announce that this years National Landscape Award entries are now open! Enter now here .",
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
    intro: "The British Association of Landscape Industries is the leading Trade Association in the UK for the landscaping industry, supporting and promoting its members and their businesses and inspiring the future workforce. With over 900 Accredited member companies and individuals, Association members pride themselves on providing clients with professional and specialist services using accredited techniques and practices.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "Advertise your business with our Association and access over 900 members including the UK's largest landscape contractor network.",
        body: "By advertising with our Association, you can now promote your company to an active landscaping network of over 1,700 total members operating within the landscape services industry worth £11.6bn to the UK economy supporting 196,300 jobs in 2017.* We offer a variety of online and offline advertising platforms including our quarterly membership journal Landscape News, our annually published Who’s Who Landscape Directory, a weekly e-newsletter and website. This is an opportunity to reach over 900 Accredited members and over 1,800 total members who actively visit the website and read our publications in a creative and compelling way. For more information on advertising please contact Joanna Pieprzak, Media Sales & Sponsorship Officer, via email at joanna.pieprzak@bali.org.uk or on +44(0)24 7669 0333 . *Oxford Economics' The Economic Impact of Ornamental Horticulture and Landscaping in the UK",
      },
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
};

export function getPageContent(path: string): PageContent | undefined {
  const key = path.replace(/\/+$/, "") || "/";
  return C[key];
}
