// BALI Membership fees — 2026-27 (1 April 2026 - 31 March 2027).
//
// All figures are in GBP and are + VAT unless explicitly noted.
// This is the single source of truth for admin displays.
//
// TODO: source this from the backend (an editable admin table) so BALI staff
// can update fees each year without a deploy. For now, update the constants
// below annually.

import type { ApplicationTypeId } from "@/lib/membership-types";

export const FEE_SCHEDULE_YEAR = "2026-27";
export const FEE_SCHEDULE_PERIOD = "1 April 2026 - 31 March 2027";
export const FEE_SCHEDULE_NOTES =
  "All figures + VAT unless noted. Application fee is a one-off charge; annual fee recurs each year.";

export type FeeBand = {
  code: string;              // e.g. "C2", "S1"
  label: string;             // e.g. "£0-£100k"
  applicationFee: number;    // GBP, ex VAT
  annualFee: number;         // GBP, ex VAT
};

export type FeeVariant = {
  id: string;                // stable id within a category
  label: string;             // e.g. "Accredited Designer (not a Registered SGD or LI member)"
  applicationFee?: number;
  annualFee?: number;
  notes?: string;
};

export type FeeExtra = {
  label: string;
  amount: number;
  notes?: string;
};

export type CategoryFees = {
  categoryId: ApplicationTypeId;
  // Simple flat fees (used when there are no turnover bands).
  applicationFee?: number;
  annualFee?: number;
  // Turnover / size bands (Accredited Contractor & Accredited Supplier).
  bands?: FeeBand[];
  // Alternate pricing variants within the same category (e.g. Designer).
  variants?: FeeVariant[];
  // Extra optional fees (per-trainer, per-course, licence, etc.).
  extras?: FeeExtra[];
  // Free-form notes shown alongside the figures.
  notes?: string;
};

export const MEMBERSHIP_FEES: Record<ApplicationTypeId, CategoryFees> = {
  accredited_contractor: {
    categoryId: "accredited_contractor",
    notes: "Fees are set by annual turnover band.",
    bands: [
      { code: "C2",  label: "£0-£100k",        applicationFee: 126.00, annualFee: 641.00 },
      { code: "C3",  label: "£100k-£250k",     applicationFee: 189.00, annualFee: 966.00 },
      { code: "C4",  label: "£250k-£1m",       applicationFee: 315.00, annualFee: 1257.00 },
      { code: "C5",  label: "£1m-£2.5m",       applicationFee: 367.00, annualFee: 1515.00 },
      { code: "C6",  label: "£2.5m-£5m",       applicationFee: 420.00, annualFee: 1777.00 },
      { code: "C7",  label: "£5m-£10m",        applicationFee: 472.50, annualFee: 2018.00 },
      { code: "C8",  label: "£10m-£20m",       applicationFee: 577.50, annualFee: 2525.00 },
      { code: "C9",  label: "£20m-£40m",       applicationFee: 682.50, annualFee: 3287.00 },
      { code: "C10", label: "Over £40m",       applicationFee: 787.50, annualFee: 4274.00 },
    ],
  },

  accredited_supplier: {
    categoryId: "accredited_supplier",
    notes: "Application fee £157.50 for each band.",
    bands: [
      { code: "S1", label: "Under £1m", applicationFee: 157.50, annualFee: 763.00 },
      { code: "S2", label: "Over £1m",  applicationFee: 157.50, annualFee: 1083.00 },
    ],
  },

  accredited_designer: {
    categoryId: "accredited_designer",
    applicationFee: 157.50,
    annualFee: 388.00,
    variants: [
      {
        id: "not_sgd_li",
        label: "Accredited Designer (not a Registered SGD or LI member)",
        applicationFee: 367.50,
        annualFee: 388.00,
      },
    ],
  },

  accredited_international: {
    categoryId: "accredited_international",
    applicationFee: 367.50,
    annualFee: 388.00,
    notes: "No VAT shown on published schedule.",
  },

  accredited_group: {
    categoryId: "accredited_group",
    applicationFee: 367.50,
    annualFee: 388.00,
  },

  accredited_dso: {
    categoryId: "accredited_dso",
    applicationFee: 367.50,
    annualFee: 789.00,
  },

  associate_contractor: {
    categoryId: "associate_contractor",
    annualFee: 388.00,
    notes: "No application fee.",
  },

  associate_designer: {
    categoryId: "associate_designer",
    annualFee: 157.00,
    notes: "No application fee.",
  },

  associate_individual: {
    categoryId: "associate_individual",
    annualFee: 153.00,
    notes: "No application fee.",
  },

  associate_supplier: {
    categoryId: "associate_supplier",
    annualFee: 388.00,
    notes: "No application fee.",
  },

  student: {
    categoryId: "student",
    notes:
      "Complimentary for students of a BALI Training Provider; £24.00 for students of a non-BALI training provider.",
    variants: [
      { id: "bali_tp",     label: "Student of BALI Training Provider",     annualFee: 0.00,  notes: "Complimentary." },
      { id: "non_bali_tp", label: "Student of Non-BALI Training Provider", annualFee: 24.00 },
    ],
  },

  bali_training_provider: {
    categoryId: "bali_training_provider",
    annualFee: 273.00,
  },

  bali_rolo_training_provider: {
    categoryId: "bali_rolo_training_provider",
    applicationFee: 115.50,
    annualFee: 647.00,
    notes: "Includes Operative course delivery.",
    extras: [
      { label: "Additional ROLO Operative-only Trainer Fee",                          amount: 52.50 },
      { label: "ROLO Training Provider Licence Fee (Supervisor and/or Manager only)", amount: 485.00 },
      { label: "Trainer Application Fee (Supervisor and/or Manager only, per trainer)", amount: 210.00 },
      { label: "ROLO Train the Trainer (per trainer)",                                amount: 236.25 },
      { label: "ROLO Moodle Administrator",                                           amount: 78.75 },
      { label: "ROLO Candidate Registration - Supervisor",                            amount: 21.00 },
      { label: "ROLO Candidate Registration - Manager",                               amount: 26.25 },
      { label: "ROLO Operative/Supervisor/Manager Certification (per candidate)",     amount: 21.00 },
    ],
  },
};

export function getCategoryFees(id: ApplicationTypeId | null | undefined): CategoryFees | undefined {
  if (!id) return undefined;
  return MEMBERSHIP_FEES[id];
}

// Format a GBP figure — e.g. 641 → "£641.00".
export function formatFee(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(amount);
}

// Convenience: return the "headline" annual/application fee for admin lists.
// - For a category with bands (Contractor, Supplier), returns the lowest band.
// - For a category with variants, returns the base flat fee if present, else
//   the first variant.
// - Otherwise returns the flat fees on the category.
export function getHeadlineFee(id: ApplicationTypeId | null | undefined): {
  applicationFee?: number;
  annualFee?: number;
  bandLabel?: string;
  variantLabel?: string;
} | undefined {
  const cat = getCategoryFees(id);
  if (!cat) return undefined;
  if (cat.bands && cat.bands.length > 0) {
    const b = cat.bands[0];
    return { applicationFee: b.applicationFee, annualFee: b.annualFee, bandLabel: `${b.code} · ${b.label}` };
  }
  if (cat.annualFee != null || cat.applicationFee != null) {
    return { applicationFee: cat.applicationFee, annualFee: cat.annualFee };
  }
  if (cat.variants && cat.variants.length > 0) {
    const v = cat.variants[0];
    return { applicationFee: v.applicationFee, annualFee: v.annualFee, variantLabel: v.label };
  }
  return undefined;
}
