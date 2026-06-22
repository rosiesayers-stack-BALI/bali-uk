import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CategoryConfig } from "@/lib/membership/types";

type Props = { config: CategoryConfig };

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Required").max(200),
  businessType: z.string().trim().min(1, "Please choose one"),
  revenueBand: z.string().trim().min(1, "Please choose one"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

// Business-type options tailored per category
const BUSINESS_TYPES: Record<string, string[]> = {
  "accredited-contractor": [
    "Hard landscaping contractor",
    "Soft landscaping contractor",
    "Domestic garden contractor",
    "Commercial landscape contractor",
    "Grounds maintenance",
    "Design & build",
    "Other",
  ],
  "accredited-designer": [
    "Garden designer",
    "Landscape architect",
    "Landscape design practice",
    "Other",
  ],
  "accredited-supplier": [
    "Plants & horticulture",
    "Hard materials (stone, paving, timber)",
    "Machinery & equipment",
    "Tools & consumables",
    "Professional services",
    "Other",
  ],
  "accredited-group": [
    "Multi-site contractor group",
    "Franchise network",
    "National contractor",
    "Other",
  ],
  "accredited-dso": [
    "Local authority DSO",
    "Public sector grounds team",
    "Housing association DSO",
    "Other",
  ],
  "accredited-international": [
    "International contractor",
    "International supplier",
    "Other",
  ],
  "associate-contractor": [
    "Hard landscaping contractor",
    "Soft landscaping contractor",
    "Grounds maintenance",
    "Domestic garden contractor",
    "Other",
  ],
  "associate-designer": [
    "Garden designer",
    "Landscape architect",
    "Design studio / practice",
    "Other",
  ],
  "associate-supplier": [
    "Plants & horticulture",
    "Hard materials",
    "Machinery & equipment",
    "Tools & consumables",
    "Other",
  ],
  "associate-individual": [
    "Retired industry professional",
    "Career changer / exploring landscaping",
    "Industry consultant",
    "Other",
  ],
  "training-provider": [
    "FE college",
    "HE college / university",
    "Commercial training provider",
    "Apprenticeship provider",
    "Other",
  ],
  "student": [
    "FE college",
    "HE college / university",
    "Apprenticeship",
    "Commercial training course",
    "Other",
  ],
};

const REVENUE_BANDS = [
  "Under £100k",
  "£100k – £250k",
  "£250k – £500k",
  "£500k – £1m",
  "£1m – £2.5m",
  "£2.5m – £5m",
  "£5m – £10m",
  "Over £10m",
  "Pre-revenue / not applicable",
  "Prefer not to say",
];

const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";
const inputCls =
  "w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-green/30 focus:border-bali-green transition bg-white";
const errCls = "text-xs text-red-600 mt-1";

export default function ShortApplyForm({ config }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const types = BUSINESS_TYPES[config.slug] ?? ["Other"];

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      businessType: "",
      revenueBand: "",
      notes: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setSubmitting(true);
    setServerError(null);
    try {
      const message = [
        `Category of interest: ${config.title}`,
        `Business type: ${values.businessType}`,
        `Annual revenue band: ${values.revenueBand}`,
        values.phone ? `Phone: ${values.phone}` : null,
        values.notes ? `\nNotes from applicant:\n${values.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/public/membership-enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          company: values.company,
          categoryInterest: config.title,
          message,
          source: `apply-${config.slug}`,
        }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
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

  if (submitted) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-bali-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Thanks — we've got your details</h1>
        <p className="text-slate-600 mb-2">
          Your interest in <strong>{config.title}</strong> membership has been sent to the BALI membership team.
        </p>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">
          We aim to respond within 48 working hours with the right application pack for your business and
          a tailored fee quote. If it's urgent, call us on{" "}
          <a className="text-bali-green font-semibold underline" href="tel:+442476690333">+44 (0)24 7669 0333</a>.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-bali-blue mb-2">Start your {config.title} application</h2>
        <p className="text-sm text-slate-600 mb-6">
          Give us a few details and the membership team will send you the right application pack within
          48 working hours.
        </p>

        {serverError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {serverError}
          </div>
        )}

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Your name *</label>
              <input className={inputCls} autoComplete="name" {...form.register("name")} />
              {form.formState.errors.name && <p className={errCls}>{form.formState.errors.name.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Email *</label>
              <input
                type="email"
                className={inputCls}
                autoComplete="email"
                {...form.register("email")}
              />
              {form.formState.errors.email && <p className={errCls}>{form.formState.errors.email.message}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Company name *</label>
              <input
                className={inputCls}
                autoComplete="organization"
                {...form.register("company")}
              />
              {form.formState.errors.company && <p className={errCls}>{form.formState.errors.company.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Phone (optional)</label>
              <input
                type="tel"
                className={inputCls}
                autoComplete="tel"
                {...form.register("phone")}
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Type of business *</label>
            <select className={inputCls} {...form.register("businessType")}>
              <option value="">Please choose…</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {form.formState.errors.businessType && (
              <p className={errCls}>{form.formState.errors.businessType.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>Annual revenue *</label>
            <select className={inputCls} {...form.register("revenueBand")}>
              <option value="">Please choose…</option>
              {REVENUE_BANDS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1.5">
              This helps us quote the right membership fee. You can choose "Prefer not to say".
            </p>
            {form.formState.errors.revenueBand && (
              <p className={errCls}>{form.formState.errors.revenueBand.message}</p>
            )}
          </div>

          <div>
            <label className={labelCls}>Anything we should know? (optional)</label>
            <textarea
              rows={4}
              className={inputCls}
              placeholder="Brief context — services, locations, timing, questions for the team…"
              {...form.register("notes")}
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center bg-bali-green text-white px-7 py-3.5 rounded-lg font-bold hover:bg-emerald-700 transition disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send to membership team"}
            </button>
            <p className="text-xs text-slate-500">
              By submitting you agree we'll contact you about BALI membership. We never share your details.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
