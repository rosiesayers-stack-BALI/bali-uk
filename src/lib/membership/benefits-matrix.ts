// Benefits matrix — drives login-state personalisation inside the members portal.
// Each benefit lists the member types that have access to it, plus an optional
// `priorityFor` list for the categories where it should be surfaced first.
// If a type is missing from `availableTo`, the benefit is hidden entirely for
// that member type (no greyed-out / locked state).

export type MemberType =
  | 'Accredited Contractor'
  | 'Accredited Designer'
  | 'Accredited DSO'
  | 'Accredited Group'
  | 'Accredited International'
  | 'Accredited Supplier'
  | 'Associate'
  | 'Student'
  | 'Training Provider'

export const MEMBER_TYPES: MemberType[] = [
  'Accredited Contractor',
  'Accredited Designer',
  'Accredited DSO',
  'Accredited Group',
  'Accredited International',
  'Accredited Supplier',
  'Associate',
  'Student',
  'Training Provider',
]

export type Benefit = {
  id: string
  title: string
  description: string
  href?: string
  category: 'Recognition' | 'Business' | 'Community' | 'Learning' | 'Communications'
  availableTo: MemberType[]
  priorityFor?: MemberType[]
  universal?: boolean
}

const ALL_ACCREDITED: MemberType[] = [
  'Accredited Contractor',
  'Accredited Designer',
  'Accredited DSO',
  'Accredited Group',
  'Accredited International',
  'Accredited Supplier',
]

const ALL_MEMBERS: MemberType[] = [...MEMBER_TYPES]

export const BENEFITS: Benefit[] = [
  // ── Accredited / business ─────────────────────────────────────
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution Service',
    description:
      "Free access to BALI's independent dispute resolution service for member and client disputes.",
    href: '/help/dispute',
    category: 'Business',
    availableTo: [
      'Accredited Contractor',
      'Accredited Designer',
      'Accredited DSO',
      'Accredited Group',
      'Accredited International',
    ],
    priorityFor: ['Accredited Contractor', 'Accredited Designer'],
  },
  {
    id: 'agm-presentation',
    title: 'Present at the BALI National AGM',
    description:
      'Opportunity to present projects or case studies to the industry at the National AGM.',
    category: 'Recognition',
    availableTo: ALL_ACCREDITED,
    priorityFor: ['Accredited Contractor', 'Accredited Designer'],
  },
  {
    id: 'regional-committee',
    title: 'Regional Committee involvement',
    description:
      'Join your Regional Committee to shape local activity, events and member representation.',
    category: 'Community',
    availableTo: ALL_ACCREDITED,
    priorityFor: ['Accredited Contractor', 'Accredited Designer'],
  },
  {
    id: 'regional-chair',
    title: 'Regional Committee — Vice Chair or Chair',
    description:
      'Designers may stand for Vice Chair or Chair of a Regional Committee.',
    category: 'Community',
    availableTo: ['Accredited Designer'],
    priorityFor: ['Accredited Designer'],
  },
  {
    id: 'dig-deep-podcast',
    title: 'Dig Deep Podcast',
    description:
      'Featured guest and contributor opportunities on the Dig Deep Podcast.',
    href: '/help/podcast',
    category: 'Communications',
    availableTo: [
      'Accredited Contractor',
      'Accredited Designer',
      'Accredited Supplier',
    ],
    priorityFor: ['Accredited Designer'],
  },
  {
    id: 'supplier-forum',
    title: 'Supplier Forum',
    description:
      'Quarterly Supplier Forum to network, share insight and steer supplier-specific activity.',
    category: 'Community',
    availableTo: ['Accredited Supplier'],
    priorityFor: ['Accredited Supplier'],
  },
  {
    id: 'discounted-advertising',
    title: 'Discounted advertising rates',
    description:
      'Preferential rates across BALI advertising channels — web, newsletter and Landscape News.',
    category: 'Business',
    availableTo: [
      'Accredited Supplier',
      'Accredited Contractor',
      'Accredited Designer',
      'Accredited International',
      'Accredited Group',
    ],
    priorityFor: ['Accredited Supplier'],
  },
  {
    id: 'banner-advertising',
    title: 'Banner advertising opportunities',
    description:
      'High-visibility banner placements across bali.org.uk and member communications.',
    category: 'Business',
    availableTo: ['Accredited Supplier'],
    priorityFor: ['Accredited Supplier'],
  },
  {
    id: 'accredited-logo',
    title: 'BALI Accredited logo & brand assets',
    description:
      'Use the BALI Accredited mark on your website, vehicles and tender documents.',
    category: 'Recognition',
    availableTo: ALL_ACCREDITED,
    priorityFor: [
      'Accredited Contractor',
      'Accredited Designer',
      'Accredited Supplier',
      'Accredited International',
      'Accredited Group',
      'Accredited DSO',
    ],
  },
  {
    id: 'national-awards',
    title: 'National Landscape Awards entry',
    description:
      'Enter the National Landscape Awards — the industry benchmark for design and delivery.',
    category: 'Recognition',
    availableTo: ALL_ACCREDITED,
  },
  {
    id: 'conference-sponsorship',
    title: 'National Conference sponsorship',
    description:
      'Sponsor the BALI National Conference with visibility to senior industry decision-makers.',
    category: 'Business',
    availableTo: [
      'Accredited Supplier',
      'Accredited Contractor',
      'Accredited International',
      'Accredited Group',
    ],
  },
  {
    id: 'directory-listing',
    title: 'BALI Directory listing',
    description:
      'Enhanced profile in the public BALI Directory — the industry-trusted route to work.',
    category: 'Business',
    availableTo: [
      'Accredited Contractor',
      'Accredited Designer',
      'Accredited DSO',
      'Accredited Group',
      'Accredited International',
      'Accredited Supplier',
      'Training Provider',
    ],
  },

  // ── Training Provider ────────────────────────────────────────
  {
    id: 'technical-support',
    title: 'Technical support access',
    description:
      "Direct access to BALI's technical team for course-content and industry queries.",
    category: 'Learning',
    availableTo: ['Training Provider', ...ALL_ACCREDITED],
    priorityFor: ['Training Provider'],
  },
  {
    id: 'landscape-news-content',
    title: 'Landscape News editorial opportunities',
    description:
      'Contribute editorial to Landscape News — the industry magazine of record.',
    category: 'Communications',
    availableTo: ['Training Provider', ...ALL_ACCREDITED],
    priorityFor: ['Training Provider'],
  },

  // ── Universal ────────────────────────────────────────────────
  {
    id: 'video-library',
    title: 'Members video library',
    description: 'On-demand access to CPD, technical and business-skills videos.',
    category: 'Learning',
    availableTo: ALL_MEMBERS,
    universal: true,
  },
  {
    id: 'weekly-newsletter',
    title: 'Weekly BALI Newsletter',
    description: 'Industry news, policy updates and member opportunities every week.',
    category: 'Communications',
    availableTo: ALL_MEMBERS,
    universal: true,
  },
  {
    id: 'members-area',
    title: 'Members-only area access',
    description:
      'Documents, guides, templates and member communications in one place.',
    href: '/portal',
    category: 'Communications',
    availableTo: ALL_MEMBERS,
    universal: true,
  },
  {
    id: 'landscape-news-read',
    title: 'Landscape News (digital & print)',
    description: 'The quarterly industry magazine, delivered digitally and in print.',
    category: 'Communications',
    availableTo: ALL_MEMBERS,
    universal: true,
  },
]

export type PersonalisedBenefits = {
  priority: Benefit[]
  available: Benefit[]
  universal: Benefit[]
  hiddenCount: number
  unclassified: boolean
}

export function getPersonalisedBenefits(
  memberType: MemberType | null | undefined,
): PersonalisedBenefits {
  if (!memberType) {
    // Fallback: only surface universal benefits, flag as unclassified.
    const universal = BENEFITS.filter((b) => b.universal)
    return {
      priority: [],
      available: [],
      universal,
      hiddenCount: BENEFITS.length - universal.length,
      unclassified: true,
    }
  }

  const priority: Benefit[] = []
  const available: Benefit[] = []
  const universal: Benefit[] = []
  let hiddenCount = 0

  for (const b of BENEFITS) {
    if (!b.availableTo.includes(memberType)) {
      hiddenCount++
      continue
    }
    if (b.universal) {
      universal.push(b)
    } else if (b.priorityFor?.includes(memberType)) {
      priority.push(b)
    } else {
      available.push(b)
    }
  }

  return { priority, available, universal, hiddenCount, unclassified: false }
}
