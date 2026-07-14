// Membership application types (categories).
// TODO: BALI to confirm the real 12 categories — this list is placeholder
// and is the single source of truth used across admin & member displays.

export type ApplicationTypeId =
  | "accredited_contractor"
  | "registered_contractor"
  | "accredited_designer"
  | "registered_designer"
  | "affiliate"
  | "registered_affiliate"
  | "service_supplier"
  | "training_provider"
  | "individual_professional"
  | "student"
  | "overseas"
  | "local_authority";

export type ApplicationType = {
  id: ApplicationTypeId;
  label: string;
  short: string;
  // Tailwind classes for a tinted badge — kept subtle to sit on white cards.
  badge: string;
};

export const APPLICATION_TYPES: ApplicationType[] = [
  { id: "accredited_contractor",    label: "Accredited Contractor",    short: "Acc. Contractor",   badge: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { id: "registered_contractor",    label: "Registered Contractor",    short: "Reg. Contractor",   badge: "bg-teal-100 text-teal-800 border-teal-200" },
  { id: "accredited_designer",      label: "Accredited Designer",      short: "Acc. Designer",     badge: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { id: "registered_designer",      label: "Registered Designer",      short: "Reg. Designer",     badge: "bg-blue-100 text-blue-800 border-blue-200" },
  { id: "affiliate",                label: "Affiliate",                short: "Affiliate",         badge: "bg-slate-100 text-slate-800 border-slate-200" },
  { id: "registered_affiliate",     label: "Registered Affiliate",     short: "Reg. Affiliate",    badge: "bg-cyan-100 text-cyan-800 border-cyan-200" },
  { id: "service_supplier",         label: "Service / Supplier",       short: "Supplier",          badge: "bg-amber-100 text-amber-800 border-amber-200" },
  { id: "training_provider",        label: "Training Provider",        short: "Training",          badge: "bg-orange-100 text-orange-800 border-orange-200" },
  { id: "individual_professional",  label: "Individual / Professional",short: "Individual",        badge: "bg-purple-100 text-purple-800 border-purple-200" },
  { id: "student",                  label: "Student",                  short: "Student",           badge: "bg-pink-100 text-pink-800 border-pink-200" },
  { id: "overseas",                 label: "Overseas",                 short: "Overseas",          badge: "bg-rose-100 text-rose-800 border-rose-200" },
  { id: "local_authority",          label: "Local Authority",          short: "Local Authority",   badge: "bg-gray-200 text-gray-800 border-gray-300" },
];

const BY_ID = new Map(APPLICATION_TYPES.map((t) => [t.id, t]));
const BY_LABEL = new Map(APPLICATION_TYPES.map((t) => [t.label.toLowerCase(), t]));

export function getApplicationType(idOrLabel?: string | null): ApplicationType | undefined {
  if (!idOrLabel) return undefined;
  return BY_ID.get(idOrLabel as ApplicationTypeId) ?? BY_LABEL.get(idOrLabel.toLowerCase());
}

// Map an arbitrary raw category string from an application row to one of the
// 12 placeholder types. Best-effort — real backend will normalise this.
export function normaliseApplicationType(raw: string | null | undefined): ApplicationTypeId {
  if (!raw) return "affiliate";
  const s = raw.toLowerCase();
  if (s.includes("accredited") && s.includes("contract")) return "accredited_contractor";
  if (s.includes("contract")) return "registered_contractor";
  if (s.includes("accredited") && s.includes("design")) return "accredited_designer";
  if (s.includes("design")) return "registered_designer";
  if (s.includes("registered") && s.includes("affil")) return "registered_affiliate";
  if (s.includes("affil")) return "affiliate";
  if (s.includes("supplier") || s.includes("service")) return "service_supplier";
  if (s.includes("training") || s.includes("rolo")) return "training_provider";
  if (s.includes("student")) return "student";
  if (s.includes("overseas") || s.includes("international")) return "overseas";
  if (s.includes("local") && s.includes("authority")) return "local_authority";
  if (s.includes("individual") || s.includes("professional")) return "individual_professional";
  return "affiliate";
}
