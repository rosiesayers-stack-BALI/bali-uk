import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { COMMS_PREFS, type CategoryConfig } from "@/lib/membership/types";

type Props = { config: CategoryConfig };

const schema = z.object({
  applicantContact: z.object({
    name: z.string().trim().min(1, "Required").max(120),
    email: z.string().trim().email("Invalid email").max(255),
    phone: z.string().trim().min(1, "Required").max(40),
    jobTitle: z.string().trim().max(120).optional().or(z.literal("")),
    commsPrefs: z.array(z.string()).default([]),
  }),
  // bundled into one object to match the server route's basic shape
  company: z.object({
    name: z.string().trim().min(1).max(180),
    streetAddress: z.string().trim().min(1).max(200),
    town: z.string().trim().min(1).max(120),
    county: z.string().trim().max(120).optional().or(z.literal("")),
    postcode: z.string().trim().min(1).max(20),
    country: z.string().trim().min(1).max(120),
  }),
  agreeTerms: z.literal(true, { message: "You must agree to the terms" } as never),
  agreeCode: z.literal(true, { message: "You must agree to the code of conduct" } as never),
  signature: z.object({
    name: z.string().trim().min(1).max(120),
    date: z.string().trim().min(1).max(20),
  }),
});

type FormValues = z.infer<typeof schema>;

const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";
const inputCls =
  "w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-green/30 focus:border-bali-green transition";
const errCls = "text-xs text-red-600 mt-1";
const sectionCls = "bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm";
const sectionTitleCls = "text-xl font-bold text-bali-blue mb-1";
const sectionDescCls = "text-sm text-slate-500 mb-6";

export default function IndividualApplicationForm({ config }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema) as never,
    defaultValues: {
      applicantContact: { name: "", email: "", phone: "", jobTitle: "", commsPrefs: [] },
      company: {
        name: "",
        streetAddress: "",
        town: "",
        county: "",
        postcode: "",
        country: "United Kingdom",
      },
      agreeTerms: false as never,
      agreeCode: false as never,
      signature: { name: "", date: new Date().toISOString().slice(0, 10) },
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setSubmitting(true);
    setServerError(null);
    try {
      // Mirror the personal contact into company.name so the server-side
      // baseline schema (which requires a company name) passes.
      const payload = {
        ...values,
        company: { ...values.company, name: values.applicantContact.name },
        isIndividual: true,
      };
      const fd = new FormData();
      fd.append("category", config.slug);
      fd.append("payload", JSON.stringify(payload));
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

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-bali-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Application received</h1>
        <p className="text-slate-600 mb-2">Thank you — we've received your {config.title} application.</p>
        <p className="text-slate-500 text-sm">A member of the membership team will be in touch within 48 hours.</p>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <div className={sectionCls}>
        <h2 className={sectionTitleCls}>1. Your contact details</h2>
        <p className={sectionDescCls}>Tell us a bit about yourself.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" error={errors.applicantContact?.name?.message}>
            <input className={inputCls} {...form.register("applicantContact.name")} />
          </Field>
          <Field label="Email" error={errors.applicantContact?.email?.message}>
            <input type="email" className={inputCls} {...form.register("applicantContact.email")} />
          </Field>
          <Field label="Telephone" error={errors.applicantContact?.phone?.message}>
            <input className={inputCls} {...form.register("applicantContact.phone")} />
          </Field>
          <Field label="Background / job title (optional)" error={errors.applicantContact?.jobTitle?.message}>
            <input className={inputCls} {...form.register("applicantContact.jobTitle")} />
          </Field>
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
        </div>
        <div className="mt-6">
          <span className={labelCls}>Communication preferences</span>
          <div className="grid sm:grid-cols-2 gap-2">
            {COMMS_PREFS.map((p) => (
              <label key={p} className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  value={p}
                  {...form.register("applicantContact.commsPrefs")}
                  className="h-4 w-4 rounded text-bali-green focus:ring-bali-green"
                />
                {p}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={sectionCls}>
        <h2 className={sectionTitleCls}>2. Terms & code of conduct</h2>
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
            I agree to the Association's terms and conditions, including the annual renewal terms.
          </span>
        </label>
        {errors.agreeTerms && <p className={errCls}>{errors.agreeTerms.message as string}</p>}
        <label className="flex items-start gap-3 mb-6">
          <input type="checkbox" {...form.register("agreeCode")} className="mt-1 h-5 w-5 rounded text-bali-green focus:ring-bali-green" />
          <span className="text-sm text-slate-700">I agree to the Association's code of conduct.</span>
        </label>
        {errors.agreeCode && <p className={errCls}>{errors.agreeCode.message as string}</p>}
        <div className="grid sm:grid-cols-2 gap-5 mt-4">
          <Field label="Full name (signature)" error={errors.signature?.name?.message}>
            <input className={inputCls} {...form.register("signature.name")} />
          </Field>
          <Field label="Date" error={errors.signature?.date?.message}>
            <input type="date" className={inputCls} {...form.register("signature.date")} />
          </Field>
        </div>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">{serverError}</div>
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
