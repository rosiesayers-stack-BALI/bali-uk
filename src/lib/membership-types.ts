// BALI membership categories — the 13 official types used across admin,
// application forms and member displays. Single source of truth.
//
// Related: fee schedule lives in `src/lib/membership-fees.ts` and is looked up
// by the `id` values below. Keep the two files in sync.

export type ApplicationTypeId =
  | "accredited_contractor"
  | "accredited_supplier"
  | "accredited_designer"
  | "student"
  | "associate_supplier"
  | "associate_contractor"
  | "associate_designer"
  | "associate_individual"
  | "bali_rolo_training_provider"
  | "accredited_international"
  | "accredited_group"
  | "accredited_dso"
  | "bali_training_provider";

export type ApplicationType = {
  id: ApplicationTypeId;
  label: string;
  short: string;
  // Tailwind classes for a tinted badge — kept subtle to sit on white cards.
  badge: string;
};

export const APPLICATION_TYPES: ApplicationType[] = [
  { id: "accredited_contractor",       label: "Accredited Contractor",                             short: "Acc. Contractor",   badge: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { id: "accredited_supplier",         label: "Accredited Supplier",                               short: "Acc. Supplier",     badge: "bg-amber-100 text-amber-800 border-amber-200" },
  { id: "accredited_designer",         label: "Accredited Designer",                               short: "Acc. Designer",     badge: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { id: "student",                     label: "Student",                                           short: "Student",           badge: "bg-pink-100 text-pink-800 border-pink-200" },
  { id: "associate_supplier",          label: "Associate Supplier",                                short: "Assoc. Supplier",   badge: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { id: "associate_contractor",        label: "Associate Contractor",                              short: "Assoc. Contractor", badge: "bg-teal-100 text-teal-800 border-teal-200" },
  { id: "associate_designer",          label: "Associate Designer",                                short: "Assoc. Designer",   badge: "bg-blue-100 text-blue-800 border-blue-200" },
  { id: "associate_individual",        label: "Associate Individual",                              short: "Assoc. Individual", badge: "bg-purple-100 text-purple-800 border-purple-200" },
  { id: "bali_rolo_training_provider", label: "BALI & ROLO Training Provider",                     short: "BALI & ROLO TP",    badge: "bg-orange-100 text-orange-800 border-orange-200" },
  { id: "accredited_international",    label: "Accredited International",                          short: "Acc. International",badge: "bg-rose-100 text-rose-800 border-rose-200" },
  { id: "accredited_group",            label: "Accredited Group",                                  short: "Acc. Group",        badge: "bg-cyan-100 text-cyan-800 border-cyan-200" },
  { id: "accredited_dso",              label: "Accredited Direct Service Organisation (DSO)",      short: "Acc. DSO",          badge: "bg-slate-100 text-slate-800 border-slate-200" },
  { id: "bali_training_provider",      label: "BALI Training Provider",                            short: "BALI TP",           badge: "bg-lime-100 text-lime-800 border-lime-200" },
];

const BY_ID = new Map(APPLICATION_TYPES.map((t) => [t.id, t]));
const BY_LABEL = new Map(APPLICATION_TYPES.map((t) => [t.label.toLowerCase(), t]));

export function getApplicationType(idOrLabel?: string | null): ApplicationType | undefined {
  if (!idOrLabel) return undefined;
  return BY_ID.get(idOrLabel as ApplicationTypeId) ?? BY_LABEL.get(idOrLabel.toLowerCase());
}

// Map an arbitrary raw category string from an application row to one of the
// 13 official types. Best-effort — real backend should send the id directly.
export function normaliseApplicationType(raw: string | null | undefined): ApplicationTypeId {
  if (!raw) return "associate_individual";
  const s = raw.toLowerCase();
  if (s.includes("dso") || (s.includes("direct") && s.includes("service"))) return "accredited_dso";
  if (s.includes("international") || s.includes("overseas")) return "accredited_international";
  if (s.includes("group")) return "accredited_group";
  if (s.includes("rolo")) return "bali_rolo_training_provider";
  if (s.includes("training") && s.includes("provider")) return "bali_training_provider";
  if (s.includes("student")) return "student";
  const accredited = s.includes("accredited");
  const associate = s.includes("associate") || s.includes("registered") || s.includes("affiliate");
  if (s.includes("contract")) return accredited ? "accredited_contractor" : "associate_contractor";
  if (s.includes("design"))   return accredited ? "accredited_designer"   : "associate_designer";
  if (s.includes("supplier") || s.includes("service")) return accredited ? "accredited_supplier" : "associate_supplier";
  if (s.includes("individual") || s.includes("professional") || associate) return "associate_individual";
  return "associate_individual";
}
