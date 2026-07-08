import { useEffect, useState } from 'react'
import {
  BENEFITS,
  MEMBER_TYPES,
  type MemberType,
  getPersonalisedBenefits,
  type Benefit,
} from '@/lib/membership/benefits-matrix'

const STORAGE_KEY = 'bali_portal_member_type'

export function useMemberType(): [MemberType | null, (t: MemberType | null) => void] {
  const [memberType, setMemberTypeState] = useState<MemberType | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && (MEMBER_TYPES as string[]).includes(stored)) {
        setMemberTypeState(stored as MemberType)
      } else {
        // Default seed for the review account — Accredited Contractor.
        setMemberTypeState('Accredited Contractor')
      }
    } catch {
      setMemberTypeState('Accredited Contractor')
    }
  }, [])

  const setMemberType = (t: MemberType | null) => {
    setMemberTypeState(t)
    try {
      if (t) localStorage.setItem(STORAGE_KEY, t)
      else localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }

  return [memberType, setMemberType]
}

export function MemberTypeSwitcher({
  value,
  onChange,
}: {
  value: MemberType | null
  onChange: (t: MemberType | null) => void
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 flex flex-wrap items-center gap-3">
      <div className="flex-1 min-w-[200px]">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Previewing portal as
        </p>
        <p className="text-sm text-gray-700 mt-0.5">
          Switch to see how each member type sees their personalised benefits.
        </p>
      </div>
      <select
        value={value ?? ''}
        onChange={(e) =>
          onChange(e.target.value ? (e.target.value as MemberType) : null)
        }
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
      >
        <option value="">Unclassified (fallback)</option>
        {MEMBER_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  )
}

function BenefitCard({ benefit, tone }: { benefit: Benefit; tone: 'priority' | 'available' | 'universal' }) {
  const toneCls =
    tone === 'priority'
      ? 'border-bali-green/30 bg-bali-green/5'
      : tone === 'available'
        ? 'border-gray-200 bg-white'
        : 'border-gray-200 bg-gray-50'
  const badgeCls =
    tone === 'priority'
      ? 'bg-bali-green text-white'
      : tone === 'available'
        ? 'bg-bali-blue/10 text-bali-blue'
        : 'bg-gray-200 text-gray-600'
  const badgeLabel =
    tone === 'priority' ? 'Priority for you' : tone === 'available' ? 'Included' : 'All members'

  const Wrapper: any = benefit.href ? 'a' : 'div'
  const wrapperProps = benefit.href ? { href: benefit.href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`block rounded-xl border p-4 ${toneCls} ${benefit.href ? 'hover:shadow-md transition-all' : ''}`}
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <p className="font-semibold text-gray-900 text-sm leading-snug">{benefit.title}</p>
        <span className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${badgeCls}`}>
          {badgeLabel}
        </span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
      <p className="text-[11px] text-gray-400 mt-2">{benefit.category}</p>
    </Wrapper>
  )
}

export function MemberBenefits({ memberType }: { memberType: MemberType | null }) {
  const { priority, available, universal, hiddenCount, unclassified } =
    getPersonalisedBenefits(memberType)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
      <div className="flex items-start justify-between mb-4 gap-3 flex-wrap">
        <div>
          <h3 className="font-bold text-gray-900">Your Membership Benefits</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {unclassified
              ? 'Your account type is not yet classified — showing benefits available to all members. This account will be flagged for review.'
              : `Personalised for ${memberType}. ${hiddenCount} benefit${hiddenCount === 1 ? '' : 's'} not applicable to your type are hidden.`}
          </p>
        </div>
      </div>

      {unclassified && (
        <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Unclassified account — please contact BALI to have your member type set.
        </div>
      )}

      {priority.length > 0 && (
        <section className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-bali-green mb-2">
            Prioritised for {memberType}
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {priority.map((b) => (
              <BenefitCard key={b.id} benefit={b} tone="priority" />
            ))}
          </div>
        </section>
      )}

      {available.length > 0 && (
        <section className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            Also included in your membership
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {available.map((b) => (
              <BenefitCard key={b.id} benefit={b} tone="available" />
            ))}
          </div>
        </section>
      )}

      {universal.length > 0 && (
        <section>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            Available to every member
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {universal.map((b) => (
              <BenefitCard key={b.id} benefit={b} tone="universal" />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

/** Filter quick-action IDs by whether the linked benefit is available. */
export function filterQuickActions<T extends { benefitId?: string }>(
  actions: T[],
  memberType: MemberType | null,
): T[] {
  if (!memberType) return actions.filter((a) => !a.benefitId)
  return actions.filter((a) => {
    if (!a.benefitId) return true
    const b = BENEFITS.find((x) => x.id === a.benefitId)
    if (!b) return true
    return b.availableTo.includes(memberType)
  })
}
