export type Region =
  | "East Anglia"
  | "International"
  | "Midlands"
  | "National"
  | "North Thames"
  | "North West"
  | "Scotland"
  | "South Thames"
  | "South West"
  | "Wales"
  | "Yorkshire & North East";

export const REGIONS: Region[] = [
  "East Anglia",
  "International",
  "Midlands",
  "National",
  "North Thames",
  "North West",
  "Scotland",
  "South Thames",
  "South West",
  "Wales",
  "Yorkshire & North East",
];

export const COMMS_PREFS = [
  "Weekly e-newsletter",
  "Forum newsletter",
  "Landscape News (print)",
  "Landscape News (digital)",
  "Who's Who Landscape Directory",
  "National Landscape Awards",
  "Regional event invitations",
  "National event invitations",
] as const;

export type IntlVariant = {
  key: string;
  label: string;
  disciplines: string[];
  clientRefs: number;
  clientRefsHelp?: string;
  documents: string[];
};

export type CategoryConfig = {
  slug: string;
  title: string;
  summary: string;
  // company info
  showVat: boolean;
  showCompanyEmail: boolean;
  showTurnoverBand: boolean;
  showIncorporationDate: boolean; // associate categories
  showParentCompany: boolean; // group only
  turnoverLabel: string;
  // disciplines (omit -> no disciplines section)
  disciplines?: string[];
  // references
  tradeRefs: number; // 0 = no trade refs
  clientRefs: number;
  clientRefsHelp?: string;
  // supporting docs
  documents: string[];
  // associate-individual: very different form (no company / refs / disciplines / docs)
  isIndividual?: boolean;
  // student: dedicated form with college / course details
  isStudent?: boolean;
  // accredited-international: applicant picks contractor or supplier at the top of the form
  intlVariants?: { contractor: IntlVariant; supplier: IntlVariant };
};

export const CATEGORIES: Record<string, CategoryConfig> = {
  "accredited-contractor": {
    slug: "accredited-contractor",
    title: "Accredited Contractor",
    summary:
      "For contractors carrying out hard/soft landscaping or grounds maintenance as their main business, trading 2+ years.",
    showVat: true,
    showCompanyEmail: false,
    showTurnoverBand: true,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    disciplines: contractorDisciplines(),
    tradeRefs: 2,
    clientRefs: 10,
    documents: [
      "Company letterhead",
      "Proof of turnover (latest set of accounts)",
      "Public liability insurance certificate",
      "Employer's liability insurance certificate",
      "Health and safety policy (for companies with 5+ employees)",
    ],
  },
  "accredited-designer": {
    slug: "accredited-designer",
    title: "Accredited Designer",
    summary:
      "For landscape designers and architects trading 2+ years.",
    showVat: true,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    disciplines: contractorDisciplines(),
    tradeRefs: 0,
    clientRefs: 3,
    clientRefsHelp: "References should be provided for three clients you have carried out work for.",
    documents: [
      "Company letterhead",
      "Professional indemnity insurance certificate",
      "Public liability insurance certificate",
      "SGD or LI certificate (if you are a member)",
      "Two or three project plans (two if a registered SGD/LI member, three if not)",
    ],
  },
  "accredited-supplier": {
    slug: "accredited-supplier",
    title: "Accredited Supplier",
    summary:
      "For businesses supplying materials, equipment or services to the landscape industry, trading 2+ years.",
    showVat: true,
    showCompanyEmail: false,
    showTurnoverBand: true,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    disciplines: supplierDisciplines(),
    tradeRefs: 2,
    clientRefs: 5,
    clientRefsHelp: "References should be provided for five clients who purchase your products or services.",
    documents: [
      "Company letterhead",
      "Proof of turnover (latest set of accounts)",
      "Public liability insurance certificate",
      "Employer's liability insurance certificate",
      "Product liability insurance certificate",
    ],
  },
  "accredited-group": {
    slug: "accredited-group",
    title: "Accredited Group",
    summary:
      "For sites/branches of an existing Accredited Contractor parent (e.g. multi-site groups or franchises).",
    showVat: true,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: true,
    turnoverLabel: "Company turnover",
    disciplines: contractorDisciplines(),
    tradeRefs: 2,
    clientRefs: 10,
    clientRefsHelp: "References should be provided for ten clients you have carried out work for.",
    documents: [
      "Company letterhead",
      "Proof of turnover (latest set of accounts)",
      "Public liability insurance certificate",
      "Employer's liability insurance certificate (unless sole trader)",
      "Health and safety policy (for companies with 5+ employees)",
    ],
  },
  "accredited-dso": {
    slug: "accredited-dso",
    title: "Accredited DSO",
    summary:
      "For Direct Service Organisations operating within a public/local-authority parent.",
    showVat: false,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    disciplines: contractorDisciplines(),
    tradeRefs: 2,
    clientRefs: 5,
    clientRefsHelp: "Site references should be provided for five separate sites where you have carried out work.",
    documents: [
      "Company letterhead",
      "Proof of turnover (latest set of accounts)",
      "Public liability insurance certificate",
      "Employer's liability insurance certificate (unless sole trader)",
      "Health and safety policy (for companies with 5+ employees)",
    ],
  },
  "accredited-international": {
    slug: "accredited-international",
    title: "Accredited International",
    summary:
      "For contractors and suppliers based outside the UK. Choose contractor or supplier at the top of the form.",
    showVat: false,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover (in GBP)",
    // placeholders — the form uses intlVariants when present
    tradeRefs: 2,
    clientRefs: 0,
    documents: [],
    intlVariants: {
      contractor: {
        key: "contractor",
        label: "International Contractor",
        disciplines: contractorDisciplines(),
        clientRefs: 10,
        clientRefsHelp: "References should be provided for ten clients you have carried out work for.",
        documents: [
          "Company letterhead",
          "Proof of turnover (latest set of accounts)",
          "Public liability insurance certificate",
          "Employer's liability insurance certificate (unless sole trader)",
          "Health and safety policy (for companies with 5+ employees)",
        ],
      },
      supplier: {
        key: "supplier",
        label: "International Supplier",
        disciplines: supplierDisciplines(),
        clientRefs: 3,
        clientRefsHelp: "References should be provided for three clients who purchase your products or services.",
        documents: [
          "Company letterhead",
          "Proof of turnover (latest set of accounts)",
          "Public liability insurance certificate",
          "Employer's liability insurance certificate (unless sole trader)",
          "Product liability insurance certificate",
        ],
      },
    },
  },
  "associate-contractor": {
    slug: "associate-contractor",
    title: "Associate Contractor",
    summary:
      "For contractors trading less than two years — a supported route towards full accreditation.",
    showVat: true,
    showCompanyEmail: true,
    showTurnoverBand: false,
    showIncorporationDate: true,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    tradeRefs: 0,
    clientRefs: 0,
    documents: [
      "Company letterhead",
      "Public liability insurance certificate",
      "Employer's liability insurance certificate (unless sole trader)",
      "Health and safety policy (for companies with 5+ employees)",
    ],
  },
  "associate-designer": {
    slug: "associate-designer",
    title: "Associate Designer",
    summary:
      "For designers or landscape architects trading less than two years.",
    showVat: true,
    showCompanyEmail: true,
    showTurnoverBand: false,
    showIncorporationDate: true,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    tradeRefs: 0,
    clientRefs: 0,
    documents: [
      "Company letterhead",
      "Public liability insurance certificate",
      "Professional indemnity insurance certificate",
    ],
  },
  "associate-supplier": {
    slug: "associate-supplier",
    title: "Associate Supplier",
    summary:
      "For suppliers trading less than two years who offer products or services to the landscape industry.",
    showVat: true,
    showCompanyEmail: true,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    tradeRefs: 0,
    clientRefs: 0,
    documents: [
      "Company letterhead",
      "Public liability insurance certificate",
      "Employer's liability insurance certificate (unless sole trader)",
      "Product liability insurance certificate",
    ],
  },
  "associate-individual": {
    slug: "associate-individual",
    title: "Associate Individual",
    summary:
      "For someone retired from the industry or interested in moving into it without an existing business.",
    showVat: false,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "",
    tradeRefs: 0,
    clientRefs: 0,
    documents: [],
    isIndividual: true,
  },
  "training-provider": {
    slug: "training-provider",
    title: "Training Provider",
    summary:
      "For individual trainers, commercial training organisations, FE/HE colleges and universities delivering land-based training, trading 2+ years.",
    showVat: true,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "Company turnover",
    tradeRefs: 0,
    clientRefs: 0,
    documents: [
      "Company letterhead",
      "Public liability insurance certificate",
    ],
  },
  "student": {
    slug: "student",
    title: "Student",
    summary:
      "For students at FE/HE colleges, universities and commercial training organisations — connect to GoLandscape and the wider industry.",
    showVat: false,
    showCompanyEmail: false,
    showTurnoverBand: false,
    showIncorporationDate: false,
    showParentCompany: false,
    turnoverLabel: "",
    tradeRefs: 0,
    clientRefs: 0,
    documents: ["Proof of enrolment"],
    isStudent: true,
  },
};

function contractorDisciplines(): string[] {
  return [
    "Domestic",
    "Commercial",
    "Arboriculture",
    "Decking",
    "Design facility",
    "Disabled/Historic gardens",
    "Fencing",
    "Forestry/Mature tree",
    "Golf course construction",
    "Ground reinforcement systems",
    "Grounds maintenance",
    "Hard landscaping",
    "Hydroseeding",
    "Interiorscapes",
    "Irrigation",
    "Invasive weed control",
    "Land draining/Sand slitting",
    "Pesticide/Weed application",
    "Playground",
    "Ponds & Water Features",
    "Reclamation & Erosion",
    "Road/Roadside construction",
    "Roof gardens/Green roofs",
    "Soft landscaping",
    "Sports/Leisure facilities",
    "Swimming pools",
    "Synthetic surface",
  ];
}

function supplierDisciplines(): string[] {
  return [
    "Domestic",
    "Commercial",
    "Chemicals, pesticides and fertilisers",
    "Compost, mulches and soil conditioners",
    "Computer software",
    "Fencing materials",
    "Roof gardens/Green roofs",
    "Ground reinforcement systems",
    "Hard landscaping materials",
    "Interior landscaping supplies",
    "Interior plants",
    "Lighting",
    "Machinery (landscape and horticultural)",
    "Manufactured stone",
    "Nursery stock",
    "Natural stone",
    "Seeds",
    "Soft landscaping materials",
    "Street, garden furniture and sculpture",
    "Surfacing materials",
    "Technical, advisory and recruitment",
    "Topsoil and aggregates",
    "Tree anchors",
    "Turf Grass and artificial",
  ];
}
