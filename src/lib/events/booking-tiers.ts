// The 9 membership tiers offered on the event booking form.
// The first eight attract the event's member rate; "Not a BALI member"
// (and any tier without a configured rate) falls back to the non-member rate.
//
// TODO: when per-tier event pricing lands in the CMS, replace `memberRate`
// with a lookup against an event_tier_prices table.

export type BookingTier = {
  id: string;
  label: string;
  /** true => uses the event's member price when one is configured */
  memberRate: boolean;
};

export const BOOKING_TIERS: BookingTier[] = [
  { id: "accredited_contractor", label: "Accredited Contractor", memberRate: true },
  { id: "accredited_designer", label: "Accredited Designer", memberRate: true },
  { id: "accredited_supplier", label: "Accredited Supplier", memberRate: true },
  { id: "accredited_international", label: "Accredited International", memberRate: true },
  { id: "accredited_group", label: "Accredited Group", memberRate: true },
  { id: "accredited_dso", label: "Accredited Direct Service Organisation (DSO)", memberRate: true },
  { id: "associate_member", label: "Associate Member", memberRate: true },
  { id: "student", label: "Student", memberRate: true },
  { id: "non_member", label: "Not a BALI member", memberRate: false },
];

export function tierLabel(id: string): string {
  return BOOKING_TIERS.find((t) => t.id === id)?.label ?? "Not a BALI member";
}

/**
 * Resolve the per-place price for a tier. Falls back to the non-member price
 * whenever the tier is not a member tier, or no member rate is configured.
 */
export function priceForTier(
  tierId: string,
  memberPrice: number | null | undefined,
  nonMemberPrice: number | null | undefined,
): number {
  const nonMember = Number(nonMemberPrice ?? 0) || 0;
  const tier = BOOKING_TIERS.find((t) => t.id === tierId);
  if (!tier?.memberRate) return nonMember;
  if (memberPrice == null) return nonMember;
  return Number(memberPrice) || 0;
}

export function formatGBP(value: number): string {
  if (!value) return "Free";
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
}
