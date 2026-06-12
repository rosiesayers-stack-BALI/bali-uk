import { useState } from "react";
import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CATEGORIES, REGIONS, COMMS_PREFS, type CategoryConfig } from "@/lib/membership/types";

type Props = { config: CategoryConfig };

const contactSchema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Required").max(40),
  jobTitle: z.string().trim().min(1, "Required").max(120),
  commsPrefs: z.array(z.string()).default([]),
});

const referenceSchema = z.object({
  contactName: z.string().trim().max(120).optional().or(z.literal("")),
  companyName: z.string().trim().max(180).optional().or(z.literal("")),
  email: z.string().trim().max(255).optional().or(z.literal("")),
  mobile: z.string().trim().max(40).optional().or(z.literal("")),
});

function buildSchema(config: CategoryConfig) {
  return z.object({
    company: z.object({
      name: z.string().trim().min(1).max(180),
      parentCompanyName: z.string().trim().max(180).optional(),
      parentCompanyMembershipNo: z.string().trim().max(60).optional(),
      streetAddress: z.string().trim().min(1).max(200),
      town: z.string().trim().min(1).max(120),
      county: z.string().trim().max(120).optional().or(z.literal("")),
      postcode: z.string().trim().min(1).max(20),
      country: z.string().trim().min(1).max(120),
      regions: z.array(z.string()).min(1, "Pick at least one region"),
      registrationNumber: z.string().trim().max(60).optional().or(z.literal("")),
      vatNumber: z.string().trim().max(60).optional().or(z.literal("")),
      incorporationDate: z.string().trim().max(40).optional().or(z.literal("")),
      employees: z.string().trim().min(1).max(20),
      turnover: z.string().trim().min(1).max(60),
      turnoverBand: z.string().trim().max(60).optional().or(z.literal("")),
      telephone: z.string().trim().min(1).max(40),
      publicEmail: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
      companyEmail: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
      website: z.string().trim().max(255).optional().or(z.literal("")),
      description: z.string().trim().min(1, "Required").max(2000),
    }),
    disciplines: z.array(z.string()).default([]),
    applicantContact: contactSchema,
    mainContact: contactSchema,
    invoiceContact: contactSchema,
    tradeRefs: z.array(referenceSchema).default([]),
    clientRefs: z.array(referenceSchema).default([]),
    documents: z.record(z.string(), z.boolean()).default({}),
    agreeTerms: z.literal(true, { message: "You must agree to the terms" } as never),
    agreeCode: z.literal(true, { message: "You must agree to the code of conduct" } as never),
    signature: z.object({
      name: z.string().trim().min(1).max(120),
      jobTitle: z.string().trim().min(1).max(120),
      date: z.string().trim().min(1).max(20),
    }),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";
const inputCls =
  "w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-green/30 focus:border-bali-green transition";
const errCls = "text-xs text-red-600 mt-1";
const sectionCls = "bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm";
const sectionTitleCls = "text-xl font-bold text-bali-blue mb-1";
const sectionDescCls = "text-sm text-slate-500 mb-6";

export default function ApplicationForm({ config: rawConfig }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [intlVariant, setIntlVariant] = useState<"contractor" | "supplier">("contractor");

  // For international, merge the chosen variant's fields into the active config.
  const config: CategoryConfig = rawConfig.intlVariants
    ? {
        ...rawConfig,
        title: `${rawConfig.intlVariants[intlVariant].label}`,
        disciplines: rawConfig.intlVariants[intlVariant].disciplines,
        clientRefs: rawConfig.intlVariants[intlVariant].clientRefs,
        clientRefsHelp: rawConfig.intlVariants[intlVariant].clientRefsHelp,
        documents: rawConfig.intlVariants[intlVariant].documents,
      }
    : rawConfig;

  const schema = buildSchema(config);

  const emptyContact = { name: "", email: "", phone: "", jobTitle: "", commsPrefs: [] as string[] };
  const emptyRef = { contactName: "", companyName: "", email: "", mobile: "" };

  const form = useForm<FormValues>({
    resolver: zodResolver(schema) as never,
    defaultValues: {
      company: {
        name: "",
        parentCompanyName: "",
        parentCompanyMembershipNo: "",
        streetAddress: "",
        town: "",
        county: "",
        postcode: "",
        country: config.slug.includes("international") ? "" : "United Kingdom",
        regions: [],
        registrationNumber: "",
        vatNumber: "",
        incorporationDate: "",
        employees: "",
        turnover: "",
        turnoverBand: "",
        telephone: "",
        publicEmail: "",
        companyEmail: "",
        website: "",
        description: "",
      },
      disciplines: [],
      applicantContact: { ...emptyContact },
      mainContact: { ...emptyContact },
      invoiceContact: { ...emptyContact },
      tradeRefs: Array.from({ length: config.tradeRefs }, () => ({ ...emptyRef })),
      clientRefs: Array.from({ length: config.clientRefs }, () => ({ ...emptyRef })),
      documents: Object.fromEntries(config.documents.map((d) => [d, false])),
      agreeTerms: false as never,
      agreeCode: false as never,
      signature: { name: "", jobTitle: "", date: new Date().toISOString().slice(0, 10) },
    },
  });

  const tradeRefsField = useFieldArray({ control: form.control, name: "tradeRefs" });
  const clientRefsField = useFieldArray({ control: form.control, name: "clientRefs" });

  const description = form.watch("company.description") ?? "";
  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0;

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setSubmitting(true);
    setServerError(null);
    setShowErrorSummary(false);
    try {
      const fd = new FormData();
      fd.append("category", config.slug);
      fd.append("payload", JSON.stringify(values));
      Object.entries(files).forEach(([key, file]) => {
        if (file) fd.append(`file:${key}`, file, file.name);
      });
      const res = await fetch("/api/public/membership-application", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `Submission failed (${res.status})`);
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const onInvalid = () => {
    setShowErrorSummary(true);
    // Scroll to the first error field
    requestAnimationFrame(() => {
      const el = document.querySelector('[aria-invalid="true"], .text-red-600');
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-bali-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Application received</h1>
        <p className="text-slate-600 mb-2">
          Thank you — we've received your {config.title} application.
        </p>
        <p className="text-slate-500 text-sm">
          A member of the membership team will be in touch within 48 hours at the email you provided.
        </p>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      {rawConfig.intlVariants && (
        <div className={sectionCls}>
          <h2 className={sectionTitleCls}>Which best describes you?</h2>
          <p className={sectionDescCls}>
            Pick the category that matches your business — the rest of the form will adjust to match.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {(["contractor", "supplier"] as const).map((v) => {
              const variant = rawConfig.intlVariants![v];
              const active = intlVariant === v;
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => setIntlVariant(v)}
                  className={`text-left p-5 rounded-xl border-2 transition ${
                    active
                      ? "border-bali-green bg-emerald-50/40"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`w-4 h-4 rounded-full border-2 ${
                        active ? "border-bali-green bg-bali-green" : "border-slate-300"
                      }`}
                    />
                    <span className="font-bold text-slate-900">{variant.label}</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7">
                    {v === "contractor"
                      ? "Hard and soft landscaping and/or grounds maintenance."
                      : "Materials, equipment or services to the landscape industry."}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Section 1 - Company info */}
      <div className={sectionCls}>
        <h2 className={sectionTitleCls}>1. Company information</h2>
        <p className={sectionDescCls}>Tell us about your business.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Company name" error={errors.company?.name?.message}>
            <input className={inputCls} {...form.register("company.name")} />
          </Field>
          {config.showParentCompany && (
            <>
              <Field label="Accredited Contractor (parent) name" error={errors.company?.parentCompanyName?.message}>
                <input className={inputCls} {...form.register("company.parentCompanyName")} />
              </Field>
              <Field label="Parent membership number" error={errors.company?.parentCompanyMembershipNo?.message}>
                <input className={inputCls} {...form.register("company.parentCompanyMembershipNo")} />
              </Field>
            </>
          )}
          <Field label="Street address" error={errors.company?.streetAddress?.message} className="sm:col-span-2">
            <input className={inputCls} {...form.register("company.streetAddress")} />
          </Field>
          <Field label="Town" error={errors.company?.town?.message}>
            <input className={inputCls} {...form.register("company.town")} />
          </Field>
          <Field label="County" error={errors.company?.county?.message}>
            <input className={inputCls} {...form.register("company.county")} />
          </Field>
          <Field label="Postcode" error={errors.company?.postcode?.message}>
            <input className={inputCls} {...form.register("company.postcode")} />
          </Field>
          <Field label="Country" error={errors.company?.country?.message}>
            <input className={inputCls} {...form.register("company.country")} />
          </Field>
          <Field label="Company registration number" error={errors.company?.registrationNumber?.message}>
            <input className={inputCls} {...form.register("company.registrationNumber")} />
          </Field>
          {config.showVat && (
            <Field label="VAT number" error={errors.company?.vatNumber?.message}>
              <input className={inputCls} {...form.register("company.vatNumber")} />
            </Field>
          )}
          {config.showIncorporationDate && (
            <Field label="Date of company formation/incorporation" error={errors.company?.incorporationDate?.message}>
              <input type="date" className={inputCls} {...form.register("company.incorporationDate")} />
            </Field>
          )}
          <Field label="Number of employees" error={errors.company?.employees?.message}>
            <input className={inputCls} {...form.register("company.employees")} />
          </Field>
          <Field label={config.turnoverLabel} error={errors.company?.turnover?.message}>
            <input className={inputCls} {...form.register("company.turnover")} />
          </Field>
          {config.showTurnoverBand && (
            <Field label="Company turnover band" error={errors.company?.turnoverBand?.message}>
              <select className={inputCls} {...form.register("company.turnoverBand")}>
                <option value="">Select…</option>
                <option>Under £250k</option>
                <option>£250k – £500k</option>
                <option>£500k – £1m</option>
                <option>£1m – £2.5m</option>
                <option>£2.5m – £5m</option>
                <option>£5m – £10m</option>
                <option>Over £10m</option>
              </select>
            </Field>
          )}
          <Field label="Telephone" error={errors.company?.telephone?.message}>
            <input className={inputCls} {...form.register("company.telephone")} />
          </Field>
          {config.showCompanyEmail ? (
            <Field label="Company email" error={errors.company?.companyEmail?.message}>
              <input type="email" className={inputCls} {...form.register("company.companyEmail")} />
            </Field>
          ) : (
            <Field label="Public email" error={errors.company?.publicEmail?.message}>
              <input type="email" className={inputCls} {...form.register("company.publicEmail")} />
            </Field>
          )}
          <Field label="Website" error={errors.company?.website?.message} className="sm:col-span-2">
            <input className={inputCls} placeholder="https://" {...form.register("company.website")} />
          </Field>
          <div className="sm:col-span-2">
            <span className={labelCls}>Regions of operation</span>
            <div className="grid sm:grid-cols-3 gap-2">
              {REGIONS.map((r) => (
                <label key={r} className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" value={r} {...form.register("company.regions")} className="h-4 w-4 rounded text-bali-green focus:ring-bali-green" />
                  {r}
                </label>
              ))}
            </div>
            {errors.company?.regions && <p className={errCls}>{String(errors.company.regions.message)}</p>}
          </div>
          <div className="sm:col-span-2">
            <span className={labelCls}>Company description <span className="font-normal text-slate-500">(max 200 words)</span></span>
            <textarea rows={5} className={inputCls} {...form.register("company.description")} />
            <p className={`text-xs mt-1 ${wordCount > 200 ? "text-red-600" : "text-slate-500"}`}>
              {wordCount} / 200 words
            </p>
            {errors.company?.description && <p className={errCls}>{errors.company.description.message}</p>}
          </div>
        </div>
      </div>

      {/* Disciplines */}
      {config.disciplines && (
        <div className={sectionCls}>
          <h2 className={sectionTitleCls}>2. Company disciplines</h2>
          <p className={sectionDescCls}>Select all the disciplines you offer.</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {config.disciplines.map((d) => (
              <label key={d} className="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" value={d} {...form.register("disciplines")} className="h-4 w-4 rounded text-bali-green focus:ring-bali-green" />
                {d}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Contacts */}
      {([
        { key: "applicantContact", title: "Applicant contact", desc: "Person managing this application." },
        { key: "mainContact", title: "Main contact", desc: "Person managing the membership once active." },
        { key: "invoiceContact", title: "Invoice contact", desc: "Person receiving invoice reminders." },
      ] as const).map((c, idx) => (
        <div key={c.key} className={sectionCls}>
          <div className="flex items-start justify-between mb-1 gap-4">
            <h2 className={sectionTitleCls}>{(config.disciplines ? 3 : 2) + idx}. {c.title}</h2>
            {idx > 0 && (
              <button
                type="button"
                onClick={() => {
                  const src = form.getValues(idx === 1 ? "applicantContact" : "mainContact");
                  form.setValue(c.key, { ...src });
                }}
                className="text-xs font-semibold text-bali-green hover:underline"
              >
                Same as {idx === 1 ? "applicant" : "main"}
              </button>
            )}
          </div>
          <p className={sectionDescCls}>{c.desc}</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Contact name" error={errors[c.key]?.name?.message}>
              <input className={inputCls} {...form.register(`${c.key}.name` as const)} />
            </Field>
            <Field label="Job title" error={errors[c.key]?.jobTitle?.message}>
              <input className={inputCls} {...form.register(`${c.key}.jobTitle` as const)} />
            </Field>
            <Field label="Email" error={errors[c.key]?.email?.message}>
              <input type="email" className={inputCls} {...form.register(`${c.key}.email` as const)} />
            </Field>
            <Field label="Telephone" error={errors[c.key]?.phone?.message}>
              <input className={inputCls} {...form.register(`${c.key}.phone` as const)} />
            </Field>
          </div>
          <div className="mt-5">
            <span className={labelCls}>Communication preferences</span>
            <div className="grid sm:grid-cols-2 gap-2">
              {COMMS_PREFS.map((p) => (
                <label key={p} className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" value={p} {...form.register(`${c.key}.commsPrefs` as const)} className="h-4 w-4 rounded text-bali-green focus:ring-bali-green" />
                  {p}
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* References */}
      {(config.tradeRefs > 0 || config.clientRefs > 0) && (
        <div className={sectionCls}>
          <h2 className={sectionTitleCls}>References</h2>
          <p className={sectionDescCls}>
            Please ensure all referees are aware they will receive a short questionnaire and have given consent.
          </p>
          {config.tradeRefs > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Trade references ({config.tradeRefs})</h3>
              <div className="space-y-4">
                {tradeRefsField.fields.map((f, i) => (
                  <RefBlock key={f.id} idx={i} basePath={`tradeRefs.${i}`} form={form} />
                ))}
              </div>
            </div>
          )}
          {config.clientRefs > 0 && (
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Client references ({config.clientRefs})</h3>
              {config.clientRefsHelp && <p className="text-xs text-slate-500 mb-3">{config.clientRefsHelp}</p>}
              <div className="space-y-4">
                {clientRefsField.fields.map((f, i) => (
                  <RefBlock key={f.id} idx={i} basePath={`clientRefs.${i}`} form={form} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Documents */}
      <div className={sectionCls}>
        <h2 className={sectionTitleCls}>Supporting documentation</h2>
        <p className={sectionDescCls}>
          Upload each required document (PDF, JPG or PNG, max 10MB each). Tick the box if you'll send it separately.
        </p>
        <div className="space-y-4">
          {config.documents.map((doc) => (
            <div key={doc} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="font-semibold text-slate-800 text-sm">{doc}</span>
                <label className="flex items-center gap-2 text-xs text-slate-500">
                  <input
                    type="checkbox"
                    {...form.register(`documents.${doc}` as never)}
                    className="h-4 w-4 rounded text-bali-green focus:ring-bali-green"
                  />
                  I'll send this separately
                </label>
              </div>
              <input
                type="file"
                accept="application/pdf,image/png,image/jpeg"
                onChange={(e) => {
                  const f = e.target.files?.[0] ?? null;
                  if (f && f.size > 10 * 1024 * 1024) {
                    alert("File too large (10MB max)");
                    e.target.value = "";
                    return;
                  }
                  setFiles((prev) => ({ ...prev, [doc]: f }));
                }}
                className="text-sm text-slate-600 file:mr-3 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-bali-green hover:file:bg-emerald-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className={sectionCls}>
        <h2 className={sectionTitleCls}>Terms & code of conduct</h2>
        <p className={sectionDescCls}>
          Read our full{" "}
          <a href="https://bali.org.uk" target="_blank" rel="noopener noreferrer" className="text-bali-green underline">
            terms & conditions
          </a>{" "}
          and code of conduct at bali.org.uk.
        </p>
        <label className="flex items-start gap-3 mb-4">
          <input type="checkbox" {...form.register("agreeTerms")} className="mt-1 h-5 w-5 rounded text-bali-green focus:ring-bali-green" />
          <span className="text-sm text-slate-700">
            I am authorised on behalf of the organisation/individual applying for membership to agree to the Association's terms and conditions, including the annual renewal terms.
          </span>
        </label>
        {errors.agreeTerms && <p className={errCls}>{errors.agreeTerms.message as string}</p>}
        <label className="flex items-start gap-3 mb-6">
          <input type="checkbox" {...form.register("agreeCode")} className="mt-1 h-5 w-5 rounded text-bali-green focus:ring-bali-green" />
          <span className="text-sm text-slate-700">
            I am authorised on behalf of the organisation/individual applying for membership to agree to the Association's code of conduct.
          </span>
        </label>
        {errors.agreeCode && <p className={errCls}>{errors.agreeCode.message as string}</p>}
        <div className="grid sm:grid-cols-3 gap-5 mt-4">
          <Field label="Full name (signature)" error={errors.signature?.name?.message}>
            <input className={inputCls} {...form.register("signature.name")} />
          </Field>
          <Field label="Job title" error={errors.signature?.jobTitle?.message}>
            <input className={inputCls} {...form.register("signature.jobTitle")} />
          </Field>
          <Field label="Date" error={errors.signature?.date?.message}>
            <input type="date" className={inputCls} {...form.register("signature.date")} />
          </Field>
        </div>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">{serverError}</div>
      )}

      {showErrorSummary && Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          <p className="font-bold mb-1">Please fix the highlighted fields before submitting.</p>
          <p className="text-red-600/80">Some required information is missing or invalid — scroll up to see the fields marked in red.</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <p className="text-xs text-slate-500">
          By submitting, you confirm the information provided is accurate to the best of your knowledge.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="bg-bali-green text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={labelCls}>{label}</label>
      {children}
      {error && <p className={errCls}>{error}</p>}
    </div>
  );
}

function RefBlock({ idx, basePath, form }: { idx: number; basePath: string; form: ReturnType<typeof useForm<FormValues>> }) {
  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Reference {idx + 1}</div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input placeholder="Contact name" className={inputCls} {...form.register(`${basePath}.contactName` as never)} />
        <input placeholder="Company name" className={inputCls} {...form.register(`${basePath}.companyName` as never)} />
        <input placeholder="Email" className={inputCls} {...form.register(`${basePath}.email` as never)} />
        <input placeholder="Mobile" className={inputCls} {...form.register(`${basePath}.mobile` as never)} />
      </div>
    </div>
  );
}

export { CATEGORIES };
