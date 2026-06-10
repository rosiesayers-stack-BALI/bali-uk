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
    title: "BALI National Landscape Awards",
    theme: "blue",
    intro: "We are thrilled to announce that this years National Landscape Award entries are now open! Enter now here.",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
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
    eyebrow: "Get in touch",
    title: "Contact the BALI Team",
    theme: "slate",
    intro: "More information about contact the bali team is available below or by contacting the BALI team.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/directory": {
    eyebrow: "Find a Member",
    title: "Search Our Membership Directory",
    theme: "flow",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "1-2Call Worksafe Ltd",
        body: "BALI & ROLO Training Provider Norfolk, PE30 2HD info@1-2callworksafe.co.uk 01553 340 754 www.1-2callworksafe.co.uk",
      },
      {
        heading: "4th Corner Ltd",
        body: "Accredited Contractor Oxfordshire, OX16 9PA info@4thcorner.co.uk 01295 817628 www.4thcorner.co.uk",
      },
      {
        heading: "85dB by UKHSS",
        body: "BALI & ROLO Training Provider Exeter, EX5 2LZ info@ukhss.co.uk 08000149139 www.ukhss.co.uk",
      },
      {
        heading: "Abax UK Ltd",
        body: "Accredited Supplier Cambridgeshire, PE2 8AN info@abax.co.uk 01733 698888 www.abax.com/uk",
      },
      {
        heading: "Acacia Gardens Ltd",
        body: "Accredited Contractor Greater London, N13 4BS info@acacia-gardens.co.uk 0208 800 3866 www.acacia-gardens.co.uk",
      },
      {
        heading: "Acer Landscapes Design & Construction Ltd",
        body: "Accredited Contractor Nottinghamshire, NG22 0UW info@acer-landscapes.com 01777 702007 www.acer-landscapes.com",
      },
      {
        heading: "Acorn Environmental Management Group",
        body: "Accredited Contractor / ROLO Training Provider Worcestershire, B98 9HF gavin.martin@acorn-grp.co.uk 0800 093 3898 www.acorn-grp.co.uk",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/directory/contractor": {
    eyebrow: "Find a Member",
    title: "Find a Landscape Contractor",
    theme: "flow",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "4th Corner Ltd",
        body: "Accredited Contractor Oxfordshire, OX16 9PA info@4thcorner.co.uk 01295 817628 www.4thcorner.co.uk",
      },
      {
        heading: "Acacia Gardens Ltd",
        body: "Accredited Contractor Greater London, N13 4BS info@acacia-gardens.co.uk 0208 800 3866 www.acacia-gardens.co.uk",
      },
      {
        heading: "Acer Landscapes Design & Construction Ltd",
        body: "Accredited Contractor Nottinghamshire, NG22 0UW info@acer-landscapes.com 01777 702007 www.acer-landscapes.com",
      },
      {
        heading: "Acorn Environmental Management Group",
        body: "Accredited Contractor / ROLO Training Provider Worcestershire, B98 9HF gavin.martin@acorn-grp.co.uk 0800 093 3898 www.acorn-grp.co.uk",
      },
      {
        heading: "Acorn Landscape Services (Cheshire) Ltd",
        body: "Accredited Contractor Cheshire, WA16 7PS mike@acornlandscapeservices.co.uk 07751 755000 www.acornlandscapeservices.co.uk",
      },
      {
        heading: "Acorn To Oak Landscaping Ltd",
        body: "Accredited Contractor Norfolk, NR8 6QW hello@acorntooakltd.co.uk 07500441179 www.acorntooakltd.co.uk",
      },
      {
        heading: "Acre Landscapes Ltd",
        body: "Accredited Contractor West Sussex, BN41 1PL yve.hall@acrelandscapes.com 01273 722696 www.acrelandscapes.com",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/directory/designer": {
    eyebrow: "Find a Member",
    title: "Find a Landscape Designer",
    theme: "flow",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "Anca Panait - Bowles & Wyer",
        body: "Accredited Designer Buckinghamshire, LU7 9GJ hello@bowleswyer.co.uk 01296 662439 https://www.bowleswyer.co.uk/",
      },
      {
        heading: "Andrews, Rory (MBALI)",
        body: "Accredited Designer Oxfordshire, OX10 9LH rory@rald.co.uk 07776 385021 www.rald.co.uk",
      },
      {
        heading: "Bestall, Lee (MBALI, MSGD)",
        body: "Accredited Designer South Yorkshire, S1 4QZ hello@bestall.co.uk 0114 698 4060 www.bestall.co.uk",
      },
      {
        heading: "Brandon, Michelle",
        body: "Accredited Designer Surrey, KT24 4HH info@michellebrandon.co.uk 07922188572 www.gardendesigncollective.com",
      },
      {
        heading: "Carroll, Debbie (MBALI)",
        body: "Accredited Designer Hampshire, SO19 9HQ info@dcgardendesigns.co.uk 02380 685193 www.dcgardendesigns.co.uk",
      },
      {
        heading: "Coldstream, Rosemary (MBALI)",
        body: "Accredited Designer Hertfordshire, AL4 9PD info@rosemarycoldstream.com 01727 860092 www.rosemarycoldstream.com",
      },
      {
        heading: "Cowell, Paul (MBALI, MSGD, CMLI)",
        body: "Accredited Designer Surrey, GU10 5RP paul@pclandscapes.co.uk 01252 279940 www.pclandscapes.co.uk",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/directory/supplier": {
    eyebrow: "Find a Member",
    title: "Find a Landscape Supplier",
    theme: "flow",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "Abax UK Ltd",
        body: "Accredited Supplier Cambridgeshire, PE2 8AN info@abax.co.uk 01733 698888 www.abax.com/uk",
      },
      {
        heading: "ACO Technologies PLC",
        body: "Accredited Supplier Bedfordshire, SG17 5TE technical@aco.co.uk 01462 816666 www.aco.co.uk",
      },
      {
        heading: "Addagrip Terraco Ltd",
        body: "Accredited Supplier East Sussex, TN22 1QL sales@addagrip.co.uk 01825 761333 www.addagrip.co.uk",
      },
      {
        heading: "Adtrak Media Ltd",
        body: "Accredited Supplier Nottinghamshire, NG1 6GN ben.shaw@adtrak.co.uk 0115 959 8900 www.adtrak.co.uk",
      },
      {
        heading: "Agriframes",
        body: "Accredited Supplier BS3 5RJ info@agriframes.co.uk 0117 934 1790 www.agriframes.co.uk",
      },
      {
        heading: "Agrovista UK Ltd",
        body: "Accredited Supplier Nottinghamshire, NG7 2PZ enquiries@agrovista.co.uk 01952 897910 www.amenity.agrovista.co.uk",
      },
      {
        heading: "AHS Ltd",
        body: "Accredited Supplier East Sussex, TN31 6QN sarah.parker@ahs-ltd.co.uk 0333 207 0440 www.ahs-ltd.co.uk",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/directory/training": {
    eyebrow: "Find a Member",
    title: "Find a Training Provider",
    theme: "flow",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "1-2Call Worksafe Ltd",
        body: "BALI & ROLO Training Provider Norfolk, PE30 2HD info@1-2callworksafe.co.uk 01553 340 754 www.1-2callworksafe.co.uk",
      },
      {
        heading: "85dB by UKHSS",
        body: "BALI & ROLO Training Provider Exeter, EX5 2LZ info@ukhss.co.uk 08000149139 www.ukhss.co.uk",
      },
      {
        heading: "Acorn Environmental Management Group",
        body: "Accredited Contractor / ROLO Training Provider Worcestershire, B98 9HF gavin.martin@acorn-grp.co.uk 0800 093 3898 www.acorn-grp.co.uk",
      },
      {
        heading: "Ainsty Timber Marketing Ltd T/A ATM",
        body: "Accredited Contractor / ROLO Training Provider North Yorkshire, YO519HY enquiries@atm-ltd.co.uk 01423 324418 www.atm-ltd.co.uk",
      },
      {
        heading: "Arboricultural & Forestry Support Services",
        body: "BALI & ROLO Training Provider Lancashire, PR1 0UX mpl.g1mail@gmail.com 07901 514259 www.arb-forestry.com",
      },
      {
        heading: "ARU Writtle University College",
        body: "BALI Training Provider Essex, CM1 3RR admissions@aru.ac.uk +44 (0)1245 493131 Horticulture degree - BSc (Hons) - ARU",
      },
      {
        heading: "Ashlea Ltd",
        body: "Accredited Contractor / ROLO Training Provider Lancashire, LA5 9RE mail@ashlea-landscaping.co.uk 01524 730133 www.ashlea-landscaping.co.uk",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/directory/search": {
    eyebrow: "Find a Member",
    title: "Search All Members",
    theme: "flow",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "1-2Call Worksafe Ltd",
        body: "BALI & ROLO Training Provider Norfolk, PE30 2HD info@1-2callworksafe.co.uk 01553 340 754 www.1-2callworksafe.co.uk",
      },
      {
        heading: "4th Corner Ltd",
        body: "Accredited Contractor Oxfordshire, OX16 9PA info@4thcorner.co.uk 01295 817628 www.4thcorner.co.uk",
      },
      {
        heading: "85dB by UKHSS",
        body: "BALI & ROLO Training Provider Exeter, EX5 2LZ info@ukhss.co.uk 08000149139 www.ukhss.co.uk",
      },
      {
        heading: "Abax UK Ltd",
        body: "Accredited Supplier Cambridgeshire, PE2 8AN info@abax.co.uk 01733 698888 www.abax.com/uk",
      },
      {
        heading: "Acacia Gardens Ltd",
        body: "Accredited Contractor Greater London, N13 4BS info@acacia-gardens.co.uk 0208 800 3866 www.acacia-gardens.co.uk",
      },
      {
        heading: "Acer Landscapes Design & Construction Ltd",
        body: "Accredited Contractor Nottinghamshire, NG22 0UW info@acer-landscapes.com 01777 702007 www.acer-landscapes.com",
      },
      {
        heading: "Acorn Environmental Management Group",
        body: "Accredited Contractor / ROLO Training Provider Worcestershire, B98 9HF gavin.martin@acorn-grp.co.uk 0800 093 3898 www.acorn-grp.co.uk",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/directory/why": {
    eyebrow: "Find a Member",
    title: "Why Choose a BALI Member",
    theme: "flow",
    intro: "Members of the British Association of Landscape Industries are the best of the best in their sectors. They produce beautiful gardens, landscapes and high quality products fit for the most stunning gardens.",
    image: { url: "/__l5e/assets-v1/9e53aec8-2d0a-4c70-bd1d-9c93b8d52db1/210311-registered-designer-webpage.jpg", alt: "Image of a wrought iron lamp in a green garden with white roses in the foreground." },
    sections: [
      {
        heading: "Overview",
        body: "To be granted Accredited membership status, Association members sign up to our Code of Conduct, pledging to carry out their business to the very highest industry standards. This means investing in staff training and skills development, adhering to health and safety regulations, considering the environmental and ethical implications of what they do and running their operations with honesty and integrity. By choosing an Association professional to design and build your garden, maintain your grounds or source ethically produced materials, you can be sure of professional excellence, value for money and outstanding customer service. START YOUR SEARCH",
      },
    ],
    ctaPrimary: { label: "Search the Directory", href: "/directory/search" },
    ctaSecondary: { label: "Why choose a BALI member", href: "/directory/why" },
  },
  "/events": {
    eyebrow: "Events",
    title: "Upcoming BALI Events",
    theme: "warm",
    intro: "Join us for this informative and educational Midlands regional event, hosted by Sky Garden",
    image: { url: "/__l5e/assets-v1/298debb1-ddb8-40e1-8748-a332d4a7f489/worplesdon-pub-800x500.png", alt: "Upcoming BALI Events" },
    sections: [
      {
        heading: "BALI Chalk Fund Landscape Open Mic Night",
        body: "The BALI Chalk team is hosting an Open Mic event at the Spice of Life Bar, Soho on 1 October",
      },
    ],
    ctaPrimary: { label: "See upcoming events", href: "/events" },
    ctaSecondary: { label: "Training courses", href: "/events/training" },
  },
  "/events/sponsor": {
    eyebrow: "Events",
    title: "Sponsor the National Conference 2026",
    theme: "warm",
    intro: "More information about sponsor the national conference 2026 is available below or by contacting the BALI team.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    ctaPrimary: { label: "See upcoming events", href: "/events" },
    ctaSecondary: { label: "Training courses", href: "/events/training" },
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
    title: "Dispute Resolution Service",
    theme: "slate",
    intro: "More information about dispute resolution service is available below or by contacting the BALI team.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/hardship": {
    eyebrow: "Help & Advice",
    title: "BALI Hardship Fund",
    theme: "slate",
    intro: "The Membership Hardship Fund is intended to help current members continue their association with BALI in the event of unforeseen financial difficulty.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "Overview",
        body: "Members may apply to the Association for support in funding part or all of the cost of a year's membership at their existing rate. Applications are assessed on a case-by-case basis. Below is some outline guidance on eligibility for the fund, but if you would like to discuss a specific situation, or would like more information, please do contact us. For more information or to discuss an application, please contact the Membership team at membership@bali.org.uk or you can phone us for an informal chat on +44 (0)2476 698 658 or +44 (0)2476 698 651. All discussions and applications will be treated in the strictest confidence.",
        bullets: [
          "Support is available to members from the fifth consecutive year of membership – i.e. following at least four full years of membership",
          "Support is not available retrospectively – i.e. will not be paid as a refund of membership fees",
          "The number of hardship grants available in any year will depend on the number of applications we receive, and the funds available",
          "Support will only be available for one year i.e. one application per member and cannot be repeated",
          "Support is available on the basis that members will retain their membership beyond the year of support",
        ],
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/health-safety": {
    eyebrow: "Help & Advice",
    title: "Health & Safety Guidance",
    theme: "slate",
    intro: "The law requires employers to identify the hazards that could cause injury or illness to staff. Learn more here",
    image: { url: "/__l5e/assets-v1/a179063f-7964-4e3c-8179-b686c51d9934/large_homepage-banner-3.jpeg", alt: "British landscape industry" },
    sections: [
      {
        heading: "Lone Working",
        body: "As with any other work-related task, employers have a responsibility to manage the risk employees face when working alone.",
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
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
    title: "Pests and Diseases",
    theme: "slate",
    intro: "A resource for all disciplines of landscape professional wishing to learn about the threat from high profile pests and diseases, together with the latest legal requirements and best practice for specific species. Some of the articles on this page are for members only. To access, become a member by making an enquiry.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
  },
  "/help/podcast": {
    eyebrow: "Help & Advice",
    title: "Guides, Podcasts & Resources",
    theme: "slate",
    intro: "Unlock your marketing potential with our exclusive collection of best practice guides, created just for BALI members.",
    image: { url: "/__l5e/assets-v1/bc91e89c-7621-4445-86f6-d1496974c933/small_4smbpg-800x500.png", alt: "Social Media Best Practice Guide" },
    sections: [
      {
        heading: "Overview",
        body: "Start with our Social Media Best Practice Guide, packed with practical tips to boost your online impact. The PR and Media Guide is now available, packed with practical insights to help landscaping businesses craft press releases that get noticed. Check out the Email Marketing Guide that is now available, get advice on nurturing relationships with your clients, showcase your expertise, and stand out in crowded inboxes. Discover more with our BALI case studies! Start with our Hillier Nurseries case study, how just one week inspired a student into landscaping and why he believes the future starts with BALI. The Garden Room Studio case study is now available! How landscaping unleashed a dormant design dream. The highly anticipated Lay of the Land Report is available to read now!",
      },
    ],
    ctaPrimary: { label: "Browse all guides", href: "/help" },
    ctaSecondary: { label: "Contact our team", href: "/contact" },
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
    title: "LISS/CSCS Industry Accreditation",
    theme: "blue",
    intro: "To meet the requirements of the Construction Leadership Council (CLC) LISS/CSCS develop plans to move all Industry Accreditation (IA) cardholders to a recognised qualification.",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
  },
  "/liss-cscs/apply": {
    eyebrow: "LISS/CSCS",
    title: "Apply for a LISS/CSCS Smartcard",
    theme: "blue",
    intro: "Depending on the type of work you or your employee(s) carry out, choose from one of seven industry categories below. This includes New, Update, Renewal or Duplicate SmartCards.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    sections: [
      {
        heading: "Overview",
        body: "Important – before applying please ensure you have passed your ROLO Health, Safety and Environmental Awareness Course and relevant CITB Touch Screen Test (these must have been completed within the last 2 years on application). Please ensure you have checked your land-based qualification(s), if applicable, to help you map your certification to the appropriate LISS/CSCS SmartCard. It's your responsibility to ensure you meet all the criteria for the specific card you’re applying for. If you apply and are later found to be ineligible (e.g., wrong qualifications, missing documents), BALI is under no obligation to refund the application fee. If you're unsure whether you meet the criteria for a specific card, please contact the LISS team, who will be happy to help guide you through the process. Contact by telephone 024 7669 0333 or email. The photo taken at the CITB test centre will be used as a default for the card. If a different photo is preferred, please state this in a supporting document attached to your application. We may request further proof of ID to reflect the different photo to confirm it is a true image of the applicant. ** CARDS CAN TAKE UP TO 28 WORKING DAYS TO PROCESS FROM THE DATE OF SUBMISSION **",
      },
    ],
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
  },
  "/liss-cscs/check": {
    eyebrow: "LISS/CSCS",
    title: "Check Qualifications",
    theme: "blue",
    intro: "It is advisable to map your qualification(s) to the relevant LISS/CSCS SmartCard before making your application. Find out which SmartCard is suited to you based on whether you hold a UK or overseas qualification. By using the Construction Industry App - Smart Check, a free-to-download application for handheld devices and PCs, your LISS/CSCS SmartCard can be read electronically.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    ctaPrimary: { label: "Apply for a card", href: "/liss-cscs/apply" },
    ctaSecondary: { label: "Check qualifications", href: "/liss-cscs/check" },
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
    title: "BALI Membership",
    theme: "green",
    intro: "Our Accredited members offer the finest quality specialist products and services to suit all situations. From topographical surveys, scaled drawings and planting plans to landscape build and grounds maintenance. Our members also have the largest selection of landscaping supplies, from turf, plants, wildflower seeds and soils to paving, walling, water features and living walls.",
    image: { url: "/__l5e/assets-v1/1bd255d7-3cfd-4955-95ca-1f6ebfc5b292/small_join-bali-small.png", alt: "join bali small" },
    sections: [
      {
        heading: "Overview",
        body: "If you are considering joining BALI, click the button below to find out more.",
      },
      {
        heading: "1-2Call Worksafe Ltd",
        body: "BALI & ROLO Training Provider Norfolk, PE30 2HD info@1-2callworksafe.co.uk 01553 340 754 www.1-2callworksafe.co.uk",
      },
      {
        heading: "4th Corner Ltd",
        body: "Accredited Contractor Oxfordshire, OX16 9PA info@4thcorner.co.uk 01295 817628 www.4thcorner.co.uk",
      },
      {
        heading: "85dB by UKHSS",
        body: "BALI & ROLO Training Provider Exeter, EX5 2LZ info@ukhss.co.uk 08000149139 www.ukhss.co.uk",
      },
      {
        heading: "Abax UK Ltd",
        body: "Accredited Supplier Cambridgeshire, PE2 8AN info@abax.co.uk 01733 698888 www.abax.com/uk",
      },
      {
        heading: "Acacia Gardens Ltd",
        body: "Accredited Contractor Greater London, N13 4BS info@acacia-gardens.co.uk 0208 800 3866 www.acacia-gardens.co.uk",
      },
      {
        heading: "Acer Landscapes Design & Construction Ltd",
        body: "Accredited Contractor Nottinghamshire, NG22 0UW info@acer-landscapes.com 01777 702007 www.acer-landscapes.com",
      },
      {
        heading: "Acorn Environmental Management Group",
        body: "Accredited Contractor / ROLO Training Provider Worcestershire, B98 9HF gavin.martin@acorn-grp.co.uk 0800 093 3898 www.acorn-grp.co.uk",
      },
    ],
    ctaPrimary: { label: "Join the Association", href: "/join" },
    ctaSecondary: { label: "View Code of Conduct", href: "/membership/code" },
  },
  "/membership/code": {
    eyebrow: "Membership",
    title: "BALI Code of Conduct",
    theme: "green",
    intro: "More information about bali code of conduct is available below or by contacting the BALI team.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    sections: [
      {
        heading: "Continued membership of the Association is dependent upon agreement to abide by the Association’s Code of Conduct detailed below",
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
        ],
      },
    ],
    ctaPrimary: { label: "Join the Association", href: "/join" },
    ctaSecondary: { label: "View Code of Conduct", href: "/membership/code" },
  },
  "/membership/quality": {
    eyebrow: "Membership",
    title: "BALI Quality Standard",
    theme: "green",
    intro: "The purpose of this standard is to ensure that British Association of Landscape Industries' Accredited members can demonstrate that they have sufficient commitment, systems, skills, resources and controls in place to consistently meet relevant customer, legislative and regulatory requirements in a measured and professional manner.",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    sections: [
      {
        heading: "Introduction",
        body: "Our Association is committed to continuous improvement of standards within the landscape industry. This standard has been established to enable organisations wishing to apply for Accredited membership to clearly see the requirements of the association. It is the benchmark for assessors completing the vetting of an applicant organisation and the re-vetting of existing members via the Quality Standard Review (QSR) process. We recognise that our members and prospective member companies come in many shapes and sizes, and the standard has been designed to allow a business to meet the requirement in a variety of differing ways, appropriate to its needs, it is the job of our skilled vetting officers to understand, not to dictate how you meet the standard. Whilst the Vetting and QSR processes are in place to monitor quality our members deliver, it is intended to be a very supportive and informative process with many members commenting on the value the vetting officer has provided their business as result of undergoing a vetting or QSR visit. The British Association of Landscape Industries' Quality Standard is broken into three key areas, follow the links below to reveal the requirements of the standard and explore some example documents that may assist your business in meeting the requirements during your Vetting or QSR visit.",
      },
    ],
    ctaPrimary: { label: "Join the Association", href: "/join" },
    ctaSecondary: { label: "View Code of Conduct", href: "/membership/code" },
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
    eyebrow: "Legal",
    title: "Website Disclaimer",
    theme: "slate",
    intro: "1.1 bali.org.uk is the website (\"site\") of the British Association of Landscape Industries (\"BALI\"). BALI makes no warranties, representations or undertakings about any of the content of this site (including, without limitation, any as to the quality, accuracy, completeness or fitness for any particular purpose of such content), or any content of any other website referred to, referred by or accessed by hypertext link through this site (‘third party site’).",
    image: { url: "/__l5e/assets-v1/859a80ad-ac37-4a28-aaea-c10f84d95e66/large_homepage-banner-1.jpeg", alt: "Landscape professionals at work" },
    sections: [
      {
        heading: "Overview",
        body: "1.2 BALI does not endorse or approve the content of any third party site, nor will BALI have any liability in connection with any of them (including, but not limited to, liability arising out of any allegation that the content of any third party site infringes any law or the rights of any person or entity). 2 Copyright 2.1 All rights, including copyright and database right, in BALI site and its contents, are owned by or licensed to the British Association of Landscape Industries, or otherwise used by BALI as permitted by applicable law all rights reserved. 2.2 In accessing BALI site and its contents, you agree that you will access the contents solely for your own private use but not for any commercial or public use. 2.3 Except as permitted above, you undertake not to copy, store in any medium (including in any other website), distribute, transmit, re-transmit, broadcast, modify, or show in public any part of BALI site without the prior written permission of BALI or in accordance with the Copyright, Designs and Patents Act 1988. You also undertake not to incorporate any of this site’s content into or store it in any other website, electronic retrieval system, publication or other work in any other format (whether hard copy, electronic or other) without prior permission from the British Association of Landscape Industries. In order to avoid doubt, framing of this site, or any part of it, is not permitted without express permission. 3 Viruses, Hacking and Other Offences 3.1 You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of-service attack. 3.2 By breaching paragraph 3.1, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately. 3.3 We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any material posted on it, or on any website linked to it. 4 General Terms 4.1 Use of this site constitutes your acceptance of these Terms, which take effect immediately on your first use of the site. BALI reserves the right to change these Terms at any time by posting changes online. 4.2 You are responsible for reviewing regularly information posted online to obtain timely notice of such changes. Your continued use of this site after changes are posted constitutes your acceptance of the Terms as modified by the posted changes. 4.3 Material may not be copied, reproduced, republished, downloaded, posted, broadcast or transmitted in any way except for your own personal non-commercial use. Any other use requires the prior written permission of the British Association of Landscape Industries. You agree not to adapt, alter or create a derivative work from any of the material contained in this site or use it for any other purpose other than for your personal non-commercial use. You agree to use this site only for lawful purposes, and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party. Such restriction or inhibition includes, without limitation, conduct which is unlawful, or which may harass or cause distress or inconvenience to any person and the transmission of obscene or offensive content or disruption of normal flow of dialogue within this site. 4.4 You should always take appropriate advice where you intend to act on any information on this site as to whether such action is suitable in your individual circumstances. You should always take appropriate safeguards against virus protection before downloading information from this site or any third party. 4.5 This site and the information, names, images, pictures, logos and icons regarding or relating to the British Association of Landscape Industries, its products and services (or to third party products and services), is provided \"AS IS\" and on an \"AS AVAILABLE\" basis and to the maximum extent permitted by law without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy. 4.6 In no event will BALI be liable for any damages including, without limitation, indirect or consequential damages, or any damages whatsoever arising from use or loss of use, data, or profits, whether in action of contract, negligence or other tortious action, arising out of or in connection with the use of the site. BALI does not warrant that the functions contained in the material contained in this site will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes it available or any third party site are free of viruses or bugs or represents the full functionality, accuracy, and reliability of the materials. The names, images and logos identifying BALI or third parties and their products and services are proprietary marks of BALI and/or third parties. Nothing contained herein shall be construed as conferring by implication or otherwise any licence or right under any trademark or patent of the British Association of Landscape Industries, or any other third party. 4.7 If any of these Terms should be determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state or country in which these Terms are intended to be effective, then to the extent and within the jurisdiction which that Term or Condition is illegal, invalid or unenforceable, it shall be severed and deleted from the Terms and the remaining terms shall survive, remain in full force and effect and continue to be binding and enforceable. 4.8 Any reference in these Terms to any statute shall be construed as reference to that statute as amended, re-enacted or extended at the relevant time. 4.9 This site is designed to be used by persons resident in the United Kingdom. These Terms shall be governed by and construed in accordance with the laws of England and Wales. Disputes arising here from shall be exclusively subject to the jurisdiction of the courts of England and Wales. 4.10 If these Terms are not accepted in full, you do not have permission to access the contents of this site and therefore should cease using this site immediately.",
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/sitemap": {
    eyebrow: "Site map",
    title: "Site Map",
    theme: "slate",
    intro: "More information about site map is available below or by contacting the BALI team.",
    image: { url: "/__l5e/assets-v1/119be43e-6389-4927-b7eb-fc9a56fde67c/large_web-banner.png", alt: "BALI landscape banner" },
    sections: [
      {
        heading: "Key points",
        body: "",
        bullets: [
          "about",
          "what we do",
          "Our Board of Directors",
          "National Landscape Awards",
          "BALI-NCF",
          "landscaping careers",
          "advertise with us",
          "supported charities",
        ],
      },
    ],
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
  "/forgotten-password": {
    eyebrow: "Account",
    title: "Forgotten Password",
    theme: "slate",
    intro: "*Once your password is renewed, please close the browser and re-open it, then enter your credentials to avoid any issues.*",
    image: { url: "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg", alt: "Mountbatten House landscape" },
    ctaPrimary: { label: "Join Our Association", href: "/join" },
    ctaSecondary: { label: "Contact us", href: "/contact" },
  },
};

export function getPageContent(path: string): PageContent | undefined {
  const key = path.replace(/\/+$/, "") || "/";
  return C[key];
}

export const allPagePaths = Object.keys(C);