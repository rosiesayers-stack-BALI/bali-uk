// Policy & Campaigns posts — content sourced from bali-policy.org.uk/news
export type PolicyTheme =
  | "Budget & Tax"
  | "Consultations"
  | "Environment"
  | "Business & Trade";

export type PolicyPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // human-readable
  isoDate: string; // YYYY-MM-DD for sorting
  author: string;
  readMinutes: number;
  themes: PolicyTheme[];
  image?: { url: string; alt: string };
  sourceUrl?: string;
  body: string[];
  pullquote?: { text: string; attribution: string };
  externalLinks?: { label: string; url: string }[];
};

export const POLICY_THEMES: PolicyTheme[] = [
  "Budget & Tax",
  "Consultations",
  "Environment",
  "Business & Trade",
];

export const policyPosts: PolicyPost[] = [
  {
    slug: "bali-bng-brownfield-site-exemption-consultation-response",
    title: "BALI BNG Brownfield Site Exemption Consultation Response",
    description:
      "BALI has responded to a DEFRA consultation on potential biodiversity net gain (BNG) exemptions for brownfield sites.",
    date: "June 12, 2026",
    isoDate: "2026-06-12",
    author: "Amy Cobbett",
    readMinutes: 4,
    themes: ["Consultations", "Environment"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/legenderry-T3MxDvVBE54-unsplash.jpg",
      alt: "Brownfield development site with new landscaping",
    },
    sourceUrl:
      "https://bali-policy.org.uk/news/bali-bng-brownfield-site-exemption-consultation-response",
    body: [
      "BALI has responded to a DEFRA consultation on potential biodiversity net gain (BNG) exemptions for brownfield sites. BALI believes that nature and the built environment can work together to deliver biodiversity enhancement and that the landscaping sector is a key delivery mechanism of biodiversity net gain.",
      "Executive summary",
      "BALI does not agree with a targeted exemption for residential brownfield sites. Continued changes to Biodiversity Net Gain through exemptions and reworked definitions creates uncertainty for the future of the programme and the landscaping businesses who aim to support its objectives.",
      "The landscaping industry is well placed to deliver biodiversity support and bringing the industry into the process earlier will allow for better outcomes for the projects and the environment.",
      "Background",
      "Formed in 1972, the British Association of Landscape Industries (BALI) represents the interests of approximately 1,800 member businesses and over 950 accredited members. Members include landscape contractors, suppliers, garden designers, arboriculturists, training providers, students and other related professionals.",
      "BALI members deliver biodiversity net gain on sites of all sizes and across the country, and members have demonstrated a clear appetite to support the policy intent of BNG, but consistent regulatory chopping and changing is making it harder, not easier, for businesses to invest in the people, plants and habitats needed.",
    ],
    pullquote: {
      text: "Continued changes through exemptions and reworked definitions creates uncertainty for the future of the programme and the landscaping businesses who aim to support it.",
      attribution: "BALI Executive Summary",
    },
  },
  {
    slug: "bali-business-impacts",
    title: "BALI: Business impacts",
    description:
      "BALI is engaging with government on the impacts of global supply chain disruption on the landscaping industry — and is calling for member input.",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    author: "Amy Cobbett",
    readMinutes: 1,
    themes: ["Business & Trade"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/nick-page-tWpv57Ip-3c-unsplash.jpg",
      alt: "Landscaper at work showing tools and materials",
    },
    sourceUrl: "https://bali-policy.org.uk/news/bali-business-impacts",
    body: [
      "The current conflict in the Middle East is creating challenges for businesses around the world, including here in the UK. Wholesale energy prices are up, causing huge knock-on effects on domestic and commercial energy and fuel costs. There have also been significant increases to haulage and transport costs as well as fertiliser prices increasing.",
      "BALI is actively engaging with government on the impacts of global supply chain disruption on the landscaping industry and we want member input on their experiences. If your business is being affected — whether that's fuel, materials, fertiliser or shipping — get in touch with the policy team so your evidence can be fed into our submissions.",
    ],
  },
  {
    slug: "bali-and-the-landscape-institute-a-joint-manifesto",
    title: "BALI and the Landscape Institute: A joint manifesto",
    description:
      "BALI and the Landscape Institute have come together to deliver a joint manifesto ahead of the Scottish Parliament Elections in May.",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    author: "Amy Cobbett",
    readMinutes: 2,
    themes: ["Business & Trade", "Environment"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/piotr-musiol-PTwcNxVfNWI-unsplash.jpg",
      alt: "Scottish landscape with parliament building in background",
    },
    sourceUrl:
      "https://bali-policy.org.uk/news/bali-and-the-landscape-institute-a-joint-manifesto",
    body: [
      "BALI and the Landscape Institute have come together to deliver a manifesto ahead of the Scottish Parliament Elections in May. The landscaping industry has much to offer across priority areas including housing, climate and the environment, health and social well-being, and economic growth.",
      "Together, with a stronger industry voice, we are calling for the next Scottish Government to:",
      "Deliver landscape-led development and improve public procurement.",
      "Invest in landscape skills, capacity and education.",
      "Introduce integrated landscape-scale planning and governance.",
      "The full manifesto is available on the bali-policy.org.uk site and sets out detailed asks across procurement reform, apprenticeship funding, and a national strategy for green skills.",
    ],
  },
  {
    slug: "bali-land-use-framework",
    title: "BALI: Land Use Framework",
    description:
      "The government's Land Use Framework sets out a vision for the environment, energy, food production, and homes and communities. BALI welcomes the framework.",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    author: "Amy Cobbett",
    readMinutes: 2,
    themes: ["Environment"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/winston-tjia-IEAODDy0I18-unsplash.jpg",
      alt: "Aerial view of mixed land use — urban, green spaces and agriculture",
    },
    sourceUrl: "https://bali-policy.org.uk/news/bali-land-use-framework",
    body: [
      "Today, the land use framework was published, setting out the government's vision for the environment, energy, food production, and our homes and communities. BALI welcomes the framework, and is calling on government to recognise the role of landscaping in delivering the priorities set out in the framework.",
      "Well-landscaped areas can deliver on quality homes and infrastructure projects which support environmental outcomes including water management and biodiversity enhancement in both urban and rural communities.",
      "BALI will be working with government to ensure that the land use framework is just the beginning of the discussion around the role of landscaping in land use management, and will be further engaging on the upcoming horticulture sector growth plan on the importance of environmental horticulture.",
    ],
    externalLinks: [
      {
        label: "Government Land Use Consultation (PDF)",
        url: "https://assets.publishing.service.gov.uk/media/69ba6ba026909a14239612e7/Land_Use_Consultation_Accessible.pdf",
      },
    ],
  },
  {
    slug: "bali-welcomes-positive-forecast-and-support-for-education",
    title:
      "BALI welcomes positive forecast and support for education, but more is needed to deliver business certainty",
    description:
      "Spring Statement: BALI welcomes the reaffirmed commitment to apprenticeships and education, but calls for greater support for businesses facing rising employment costs.",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    author: "Amy Cobbett",
    readMinutes: 2,
    themes: ["Budget & Tax"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/chris-boland-KZJ4ZgwcoNg-unsplash.jpg",
      alt: "Apprentice landscaper working on a planting scheme",
    },
    sourceUrl:
      "https://bali-policy.org.uk/news/bali-welcomes-positive-forecast-and-support-for-education-but-more-is-needed-to-deliver-business-certainty-for-the-future",
    body: [
      "With today's Spring Statement, BALI welcomes the reaffirmed commitment to delivering education, and particularly the importance of apprenticeships. BALI is working with government on numerous opportunities for education in the sector, including the Youth Guarantee, which aims to deliver training and a fully subsidised paid job for six months for qualifying 18–21-year-olds.",
      "The Chancellor Rachel Reeves also announced that inflation has fallen and living standards and the economy continues to grow. While this is positive for households, businesses are still struggling with the impacts from increases to National Insurance and changes to income tax and business rates, which put pressure on businesses. Long-term stability is welcome, however, more must be done to support businesses that are struggling with increased costs and employment pressures in the short to medium term.",
      "While unemployment is set to rise to 5.3% this year, according to the OBR, it is still first-time job seekers who face some of the biggest barriers to entering the workplace. The landscaping sector has the potential to deliver 'green' jobs, from entry level to highly skilled workers — however, government support often does not extend to the landscaping sector.",
      "BALI continues to call on government to ensure that funding support includes the landscaping sector, as many of our members want to grow their businesses but struggle with cost of labour and accessing appropriately skilled staff. Where the landscaping industry is supporting the delivery of government housing, infrastructure and community targets, it should be able to access similar support around skills and employment offered to the construction sector.",
    ],
  },
  {
    slug: "sme-business-support-call-for-evidence",
    title: "SME Business Support Call for Evidence",
    description:
      "BALI's submission to the government call for evidence on SME business support — setting out what 1,800 landscaping businesses need to grow.",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    author: "Amy Cobbett",
    readMinutes: 5,
    themes: ["Consultations", "Business & Trade"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/sarah-agnew-tKSdSJjb9zo-unsplash.jpg",
      alt: "Small business owner working in a landscape design studio",
    },
    sourceUrl:
      "https://bali-policy.org.uk/news/sme-business-support-call-for-evidence",
    body: [
      "BALI submitted detailed evidence to the government's call for evidence on SME business support. Our submission draws on member surveys, the Lay of the Land report and direct engagement with hundreds of small landscaping firms across the UK.",
      "Executive summary",
      "Formed in 1972, the British Association of Landscape Industries (BALI) represents approximately 1,800 member businesses and over 950 accredited members — landscape contractors, suppliers, garden designers, arboriculturists, training providers and students.",
      "Our submission highlights five priorities for SMEs in the landscaping sector:",
      "1. Access to finance — many landscaping SMEs are asset-light and struggle to access growth capital under existing lending criteria. Government-backed schemes should explicitly recognise green skills and environmental delivery as eligible activities.",
      "2. Tackling late payments — late payment was rated 'very challenging' or 'challenging' by 31% of BALI members in the most recent Lay of the Land report. Statutory protections for SMEs working under main contractors are urgently needed.",
      "3. Procurement reform — public sector procurement remains skewed towards large contractors. Lotting requirements, social value weighting and direct award routes for SMEs would unlock significant capacity in the regional supply chain.",
      "4. Skills and apprenticeships — the apprenticeship system is too complex for small employers. We support simplification of the funding rules and an extension of the Youth Guarantee paid placement to landscaping employers.",
      "5. Energy, fuel and materials costs — supply chain disruption continues to impact margins. Targeted relief on red diesel for groundscare equipment and clearer transition support for electric plant would help SMEs invest with confidence.",
      "BALI continues to engage directly with the Department for Business and Trade and Treasury on these priorities.",
    ],
  },
  {
    slug: "a-new-vision-for-water-bali-response",
    title: "'A New Vision for Water': BALI response",
    description:
      "Defra has published a White Paper aiming to streamline water industry regulation and prioritise resilient, healthy water supply. BALI welcomes the paper.",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    author: "Amy Cobbett",
    readMinutes: 3,
    themes: ["Environment"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/ryan-grice-NjfhBzNLGF0-unsplash.jpg",
      alt: "Sustainable drainage feature in a landscaped urban setting",
    },
    sourceUrl: "https://bali-policy.org.uk/news/a-new-vision-for-water-bali-response",
    body: [
      "Defra has today published a White Paper, A New Vision for Water, which aims to streamline the regulation of the industry and prioritises a resilient and healthy water supply. BALI welcomes the paper and the priorities set throughout.",
      "The White Paper marks a decisive shift towards long-term water security, cleaner rivers, and a stronger emphasis on upstream, nature-based solutions to manage water more sustainably. BALI members are already integral to delivering this approach — designing, building and maintaining sustainable drainage systems (SuDS), while also creating thousands of high-quality landscapes each year, introducing features like rainwater harvesting, permeable paving, and well-structured soil to manage water.",
      "It is vital members are given the right tools and policy environment to continue contributing at scale. This White Paper represents a positive step in that direction, and BALI will continue to champion the industry's central role in sustainable water management.",
    ],
    pullquote: {
      text: "While the White Paper presents significant opportunities for the landscaping sector, much will depend on how the forthcoming detail is implemented through the Transition Plan, alongside the Water Bill. It will be vital that policy, regulation and procurement frameworks fully recognise the role of the landscaping industry in delivering nature-based and catchment-scale solutions at pace and scale.",
      attribution: "Amy Cobbett, Head of Policy and Public Affairs at BALI",
    },
    externalLinks: [
      {
        label: "Defra Water White Paper (PDF)",
        url: "https://assets.publishing.service.gov.uk/media/696f52c9011505255b2d41f1/Defra_Water_White_Paper_2026.pdf",
      },
    ],
  },
  {
    slug: "scotland-budget-2026-bali-response",
    title: "Scotland Budget 2026: BALI response",
    description:
      "BALI's response to the Scottish Government's 2026 Budget — covering procurement, skills funding and environmental delivery.",
    date: "January 14, 2026",
    isoDate: "2026-01-14",
    author: "Amy Cobbett",
    readMinutes: 2,
    themes: ["Budget & Tax"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/20260114_1547_Image%20Generation_simple_compose_01keyjzwakf11v4smxsawgdr83.png",
      alt: "Scottish Parliament building, Edinburgh",
    },
    sourceUrl: "https://bali-policy.org.uk/news/scotland-budget-2026-bali-response",
    body: [
      "BALI has issued a formal briefing in response to the Scottish Government's 2026 Budget. The full briefing is hosted on the bali-policy.org.uk site.",
      "Headline points",
      "BALI welcomes continued investment in apprenticeships and college funding routes that benefit the landscaping sector in Scotland.",
      "We continue to call for a clearer route into public sector landscape contracts for accredited SMEs, in line with our joint manifesto with the Landscape Institute.",
      "Greater alignment between local authority budgets and biodiversity duty obligations is needed if Scotland's nature ambitions are to be delivered at pace.",
      "BALI's Scottish members are encouraged to contact the policy team to feed in specific evidence ahead of the 2027 Budget cycle.",
    ],
  },
  {
    slug: "late-payments-consultation-bali-response",
    title: "Late payments consultation: BALI response",
    description:
      "Late payments are a huge concern for BALI members. BALI has responded to government consultation on tackling poor payment practices.",
    date: "January 12, 2026",
    isoDate: "2026-01-12",
    author: "Amy Cobbett",
    readMinutes: 3,
    themes: ["Consultations", "Business & Trade"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/20260112_1624_Image%20Generation_simple_compose_01kesgapzee3avkvj5k2kqfb54.png",
      alt: "Stack of invoices and a calculator representing late payment pressure",
    },
    sourceUrl:
      "https://bali-policy.org.uk/news/late-payments-consultation-bali-response",
    body: [
      "Late payments are a huge concern for BALI members as they can impact a business's ability to invest or expand or, at worst, pay their own bills. Concerns around cashflow negatively impact businesses and the wider economy — and so the government aiming to address late payments for small businesses is an extremely welcome ambition.",
      "According to BALI's Lay of the Land Report, 15% of respondents rate late payments as 'very challenging' to their business, with a further 16% rating it 'challenging' — highlighting that this is an urgent priority for over a quarter of BALI members. With only 14% of members reporting to feel 'very confident' about their business's ability to expand or maintain over the coming year, the need for intervention on late payments is vital.",
      "BALI has responded to a consultation on tackling poor payments practices. Our submission supports stronger statutory rules including 30-day payment terms for public sector contracts and tougher action on serial late-payers in the construction supply chain.",
      "BALI continues to engage with government and industry to improve the rate of payment and protect landscaping businesses.",
    ],
    pullquote: {
      text: "Over a quarter of BALI members rate late payments as challenging or very challenging — only 14% feel very confident about growing or maintaining their business over the coming year.",
      attribution: "BALI Lay of the Land Report",
    },
  },
  {
    slug: "autumn-budget-briefing",
    title: "Autumn Budget Briefing",
    description:
      "An analysis by the BALI policy team of the Autumn 2025 Budget — covering skills, planning, tax, environment and devolution.",
    date: "November 26, 2025",
    isoDate: "2025-11-26",
    author: "Amy Cobbett",
    readMinutes: 5,
    themes: ["Budget & Tax"],
    image: {
      url: "https://bali-policy.org.uk/hubfs/daniel-bell-GV2DLU8ewYs-unsplash.jpg",
      alt: "Houses of Parliament at dusk",
    },
    sourceUrl: "https://bali-policy.org.uk/news/autumn-budget-briefing",
    body: [
      "Introduction",
      "Having completed a major spending review earlier this year, the government has today set out a range of specific tax and spend measures for the coming financial year and beyond in its Budget 2025. BALI submitted its own set of asks to the Chancellor several weeks ago and we were keen to see whether these would be addressed. Here, we highlight some of the most relevant measures in the budget for our members and discuss the risks and opportunities they may pose.",
      "Skills and Training",
      "BALI welcomes Government's continued commitment to invest £1.5 billion in employment and skills and the Chancellor's support for small businesses and apprenticeships. The Chancellor's statement on fully funding apprenticeship training for under-25s working in SMEs could be a significant development for many small businesses in the landscaping sector. However, many still find the current system too complex and off-putting.",
      "We understand and support Government's commitment to addressing the insufficient levels of economic activity within our youth population, and would welcome the opportunity to discuss with government how BALI and its members can help develop meaningful 6-month paid work placements as part of the Youth Guarantee.",
      "Planning and Infrastructure",
      "Planning continues to present a challenge to our industry in the delivery of landscaping projects across housing, large infrastructure projects, and local authority projects. The government has reaffirmed the commitment to build 1.5 million homes by funding hundreds more planners across England. This could positively impact elements of landscaping delivery; however, it is doubtful that this alone will meaningfully shift the challenges faced by BALI members through insufficiently funded and staffed local planning authorities.",
      "Tax and Revenue",
      "We welcome the announcement that there will be no increases to National Insurance or personal income rates beyond what was announced last year. However, the freeze on rates being extended to 2031 will mean more people pay higher rates of income tax as wages increase — continuing to put pressure on BALI members' businesses.",
      "The freeze on fuel duty has been extended to September 2026 which will be a positive impact for some businesses; however, the looming loss of the relief next year will subsequently raise transport costs for many. The introduction of an Electric Vehicle Excise Duty (eVED) imposes a mileage-based charge — 3p per mile on fully electric vehicles and 1.5p per mile on plug-in hybrids — adding material costs to landscaping businesses transitioning to greener practices.",
      "BALI is pleased to see that through engagement with government, there has been a reversal of the single-rate Landfill Tax — something BALI put forward in our budget submission to Treasury. With some landscaping businesses potentially seeing costs rise by 3,000% from the tax, the reversal is imperative to ensure unnecessary financial burdens aren't levied on businesses.",
      "Nature and Water Management",
      "Surprisingly, the Chancellor made little mention of nature and the wider environment in her budget speech. However, the budget did include a few measures which could increase funding for delivery and create opportunities for BALI members — including additional resources for the Nature Restoration Fund's Environmental Delivery Plans, a new grant scheme for public bodies supporting environmental regeneration, and £29 million over two years for projects cleaning up rivers.",
      "Overall, the lack of support for the delivery of environmental improvements such as biodiversity enhancements and water management is disappointing, as BALI members have shown a keen interest in delivering for the environment.",
      "Devolution and Devolved Nations",
      "The Government has confirmed at least £13bn for the 7 Mayoral Combined Authorities, covering approximately 40% of England's population. Today's announcements also include an additional £1.7 billion for the devolved governments through the Barnett formula: £820m to Scotland, £505m to Wales and £370m to Northern Ireland.",
      "Conclusion",
      "While not entirely negative, today's budget has failed to deliver the economic levers necessary for the landscaping industry to confidently invest. The total lack of environmental support is a huge gap in the Chancellor's budget for growth, and a missed opportunity to invest in the environmental horticulture industry which contributes £38bn to UK GDP and supports 722,000 jobs and £8.5bn in tax. BALI remains committed to engaging with UK and devolved governments to advocate for the landscaping industry.",
    ],
    pullquote: {
      text: "The total lack of environmental support is a huge gap in the Chancellor's budget for growth, and a missed opportunity to invest in the £38bn environmental horticulture industry.",
      attribution: "BALI Policy Team",
    },
  },
];

// Sorted newest-first
policyPosts.sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));

export function getPolicyPost(slug: string): PolicyPost | undefined {
  return policyPosts.find((p) => p.slug === slug);
}

export function postsByTheme(theme: PolicyTheme | "All"): PolicyPost[] {
  if (theme === "All") return policyPosts;
  return policyPosts.filter((p) => p.themes.includes(theme));
}

export function themeCounts(): Record<PolicyTheme, number> {
  const counts = {} as Record<PolicyTheme, number>;
  POLICY_THEMES.forEach((t) => (counts[t] = 0));
  policyPosts.forEach((p) => p.themes.forEach((t) => counts[t]++));
  return counts;
}
