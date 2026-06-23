import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import cards from "../content/liss-cscs-cards.json";
import { supabase } from "@/integrations/supabase/client";
import { submitLissApplication } from "@/lib/liss-applications.functions";

type Card = {
  name: string; desc: string; img: string | null;
  color: string; slug: string;
};
type Category = { label: string; cards: Card[] };
const data = cards as unknown as Record<string, Category>;

export const Route = createFileRoute("/liss-cscs/apply/$category/$card/form")({
  loader: ({ params }) => {
    const cat = data[params.category];
    if (!cat) throw notFound();
    const card = cat.cards.find((c) => c.slug === params.card);
    if (!card) throw notFound();
    return { category: cat, categorySlug: params.category, card };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Apply — ${loaderData?.card?.name ?? "SmartCard"} | BALI LISS/CSCS` },
      { name: "description", content: `Submit your LISS/CSCS SmartCard application for ${loaderData?.card?.name ?? ""}.` },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: FormPage,
  notFoundComponent: NotFound,
});

const heroBg = "linear-gradient(135deg, #1D4D59 0%, #21509A 100%)";

type UploadKind = "rolo" | "citb" | "qualification" | "photo_id" | "photo" | "other";
type UploadedFile = { path: string; name: string; size: number; kind: UploadKind };

const MAX_FILE_MB = 10;
const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function FormPage() {
  const { category, categorySlug, card } = Route.useLoaderData();
  const navigate = useNavigate();

  // Generate application id once per session
  const [appId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  );

  const [form, setForm] = useState({
    application_type: "new" as "new" | "update" | "renewal" | "duplicate",
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    home_address: "",
    employer_name: "",
    employer_address: "",
    job_title: "",
    rolo_completed_on: "",
    citb_completed_on: "",
    qualification_summary: "",
    notes: "",
    consent_marketing: false,
    consent_terms: false,
  });

  const [uploads, setUploads] = useState<UploadedFile[]>([]);
  const [uploadingKind, setUploadingKind] = useState<UploadKind | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function setField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleUpload(kind: UploadKind, file: File) {
    setServerError(null);
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setServerError(`${file.name} is larger than ${MAX_FILE_MB} MB.`);
      return;
    }
    if (!ALLOWED_TYPES.includes(file.type) && file.type !== "") {
      setServerError(`${file.name} (${file.type}) is not an accepted file type.`);
      return;
    }
    setUploadingKind(kind);
    try {
      const safeName = file.name.replace(/[^\w.\- ]/g, "_").slice(0, 120);
      const path = `${appId}/${kind}-${Date.now()}-${safeName}`;
      const { error } = await supabase.storage
        .from("liss-applications")
        .upload(path, file, { upsert: false, contentType: file.type || undefined });
      if (error) throw error;
      setUploads((u) => [...u, { path, name: file.name, size: file.size, kind }]);
    } catch (e) {
      console.error("[liss] upload failed", e);
      setServerError("That file couldn't be uploaded. Please try again.");
    } finally {
      setUploadingKind(null);
    }
  }

  function removeUpload(path: string) {
    setUploads((u) => u.filter((f) => f.path !== path));
    // best-effort delete; ignore errors (admin can clean up)
    supabase.storage.from("liss-applications").remove([path]).catch(() => undefined);
  }

  function validate(): string | null {
    const errs: Record<string, string> = {};
    if (form.full_name.trim().length < 2) errs.full_name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Please enter a valid email.";
    if (form.home_address.trim().length < 5) errs.home_address = "Please enter your home address.";
    if (!form.consent_terms) errs.consent_terms = "Please confirm you have read the information.";
    if (form.application_type === "new" || form.application_type === "renewal") {
      if (!form.rolo_completed_on) errs.rolo_completed_on = "ROLO date is required for new and renewal cards.";
      if (!form.citb_completed_on) errs.citb_completed_on = "CITB Touch Screen Test date is required.";
    }
    setFieldErrors(errs);
    return Object.keys(errs).length ? "Please fix the highlighted fields." : null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    const v = validate();
    if (v) { setServerError(v); return; }
    setSubmitting(true);
    try {
      await submitLissApplication({
        data: {
          id: appId,
          category_slug: categorySlug,
          card_slug: card.slug,
          card_name: card.name,
          application_type: form.application_type,
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          date_of_birth: form.date_of_birth,
          home_address: form.home_address.trim(),
          employer_name: form.employer_name.trim(),
          employer_address: form.employer_address.trim(),
          job_title: form.job_title.trim(),
          rolo_completed_on: form.rolo_completed_on,
          citb_completed_on: form.citb_completed_on,
          qualification_summary: form.qualification_summary.trim(),
          uploaded_files: uploads,
          notes: form.notes.trim(),
          consent_marketing: form.consent_marketing,
          consent_terms: true as const,
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error("[liss] submit failed", err);
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <SuccessScreen card={card} category={category} categorySlug={categorySlug} />;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="relative overflow-hidden py-12 text-white" style={{ background: heroBg }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%)" }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <nav className="text-sm text-blue-100/80 mb-3 flex flex-wrap items-center gap-2">
            <Link to="/liss-cscs/apply" className="hover:text-white">Apply</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs/apply/$category" params={{ category: categorySlug }} className="hover:text-white">{category.label}</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs/apply/$category/$card" params={{ category: categorySlug, card: card.slug }} className="hover:text-white">{card.name}</Link>
            <span className="opacity-60">/</span>
            <span className="text-white">Application</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Apply: {card.name}</h1>
          <p className="text-blue-100 mt-2">All fields are required unless marked optional. Processing takes up to 28 working days.</p>
        </div>
      </section>

      <form onSubmit={onSubmit} className="flex-1 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">

          {/* Application type */}
          <FormSection title="1 · Application type" desc="What kind of application is this?">
            <div className="grid sm:grid-cols-2 gap-3">
              {(["new", "update", "renewal", "duplicate"] as const).map((t) => (
                <label
                  key={t}
                  className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer transition-colors ${form.application_type === t ? "border-bali-blue bg-bali-blue/5" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <input
                    type="radio"
                    name="application_type"
                    value={t}
                    checked={form.application_type === t}
                    onChange={() => setField("application_type", t)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-semibold capitalize text-gray-900">{t}</div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      {t === "new" && "First time applying for this card."}
                      {t === "update" && "Updating details on an existing card."}
                      {t === "renewal" && "Renewing within 6 months of expiry."}
                      {t === "duplicate" && "Replacement for a lost or stolen card."}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </FormSection>

          {/* Applicant */}
          <FormSection title="2 · Your details">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" required error={fieldErrors.full_name}>
                <input className={inputCls} value={form.full_name} onChange={(e) => setField("full_name", e.target.value)} required />
              </Field>
              <Field label="Date of birth" hint="Optional">
                <input type="date" className={inputCls} value={form.date_of_birth} onChange={(e) => setField("date_of_birth", e.target.value)} />
              </Field>
              <Field label="Email" required error={fieldErrors.email}>
                <input type="email" className={inputCls} value={form.email} onChange={(e) => setField("email", e.target.value)} required />
              </Field>
              <Field label="Phone" hint="Optional">
                <input type="tel" className={inputCls} value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
              </Field>
              <Field label="Home address" required error={fieldErrors.home_address} className="sm:col-span-2">
                <textarea className={textareaCls} rows={3} value={form.home_address} onChange={(e) => setField("home_address", e.target.value)} required />
              </Field>
            </div>
          </FormSection>

          {/* Employer */}
          <FormSection title="3 · Employer details" desc="Optional — leave blank if self-employed or not yet employed.">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Employer name">
                <input className={inputCls} value={form.employer_name} onChange={(e) => setField("employer_name", e.target.value)} />
              </Field>
              <Field label="Job title">
                <input className={inputCls} value={form.job_title} onChange={(e) => setField("job_title", e.target.value)} />
              </Field>
              <Field label="Employer address" className="sm:col-span-2">
                <textarea className={textareaCls} rows={2} value={form.employer_address} onChange={(e) => setField("employer_address", e.target.value)} />
              </Field>
            </div>
          </FormSection>

          {/* Evidence dates */}
          <FormSection title="4 · ROLO & CITB evidence" desc="Both must have been completed within the last 2 years for new and renewal applications.">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="ROLO course completed on" required={form.application_type === "new" || form.application_type === "renewal"} error={fieldErrors.rolo_completed_on}>
                <input type="date" className={inputCls} value={form.rolo_completed_on} onChange={(e) => setField("rolo_completed_on", e.target.value)} />
              </Field>
              <Field label="CITB Touch Screen Test completed on" required={form.application_type === "new" || form.application_type === "renewal"} error={fieldErrors.citb_completed_on}>
                <input type="date" className={inputCls} value={form.citb_completed_on} onChange={(e) => setField("citb_completed_on", e.target.value)} />
              </Field>
            </div>
          </FormSection>

          {/* Qualification */}
          <FormSection title="5 · Qualification summary" desc="Briefly list the qualifications, NVQ/SVQ/Diploma, or memberships that support this application.">
            <Field label="Qualification summary" hint="Optional">
              <textarea className={textareaCls} rows={3} value={form.qualification_summary} onChange={(e) => setField("qualification_summary", e.target.value)} placeholder="e.g. NVQ Level 2 in Landscape Operations, City & Guilds NPTC, completed 2023" />
            </Field>
          </FormSection>

          {/* Uploads */}
          <FormSection title="6 · Supporting documents" desc={`PDF, JPG, PNG or DOCX — max ${MAX_FILE_MB} MB each.`}>
            <UploadSlot kind="rolo" label="ROLO certificate" uploads={uploads} onUpload={handleUpload} onRemove={removeUpload} uploading={uploadingKind} />
            <UploadSlot kind="citb" label="CITB Touch Screen Test result" uploads={uploads} onUpload={handleUpload} onRemove={removeUpload} uploading={uploadingKind} />
            <UploadSlot kind="qualification" label="Qualification certificate(s)" uploads={uploads} onUpload={handleUpload} onRemove={removeUpload} uploading={uploadingKind} />
            <UploadSlot kind="photo_id" label="Photo ID (passport or driving licence)" uploads={uploads} onUpload={handleUpload} onRemove={removeUpload} uploading={uploadingKind} />
            <UploadSlot kind="photo" label="Passport-style photo (only if different from CITB centre)" uploads={uploads} onUpload={handleUpload} onRemove={removeUpload} uploading={uploadingKind} />
            <UploadSlot kind="other" label="Other supporting documents" uploads={uploads} onUpload={handleUpload} onRemove={removeUpload} uploading={uploadingKind} />
          </FormSection>

          {/* Notes & consent */}
          <FormSection title="7 · Notes & consent">
            <Field label="Anything else we should know?" hint="Optional">
              <textarea className={textareaCls} rows={3} value={form.notes} onChange={(e) => setField("notes", e.target.value)} />
            </Field>
            <label className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                checked={form.consent_terms}
                onChange={(e) => setField("consent_terms", e.target.checked)}
                className="mt-1"
                required
              />
              <span className="text-sm text-gray-700">
                I confirm I meet the eligibility criteria for this SmartCard, my ROLO and CITB tests
                were completed within the last 2 years, and I understand that BALI is under no
                obligation to refund the application fee if I am later found to be ineligible.{" "}
                <span className="text-red-600">*</span>
              </span>
            </label>
            {fieldErrors.consent_terms && <p className="text-sm text-red-600 ml-7 mt-1">{fieldErrors.consent_terms}</p>}
            <label className="flex items-start gap-3 mt-3">
              <input
                type="checkbox"
                checked={form.consent_marketing}
                onChange={(e) => setField("consent_marketing", e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                BALI may contact me about LISS/CSCS updates, training, and renewal reminders.
              </span>
            </label>
          </FormSection>

          {serverError && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm">{serverError}</div>
          )}

          <div className="flex flex-wrap gap-3 items-center pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="bg-bali-blue hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-lg shadow-md transition-all"
            >
              {submitting ? "Submitting…" : "Submit application"}
            </button>
            <Link
              to="/liss-cscs/apply/$category/$card"
              params={{ category: categorySlug, card: card.slug }}
              className="text-gray-600 hover:text-gray-900 font-semibold"
            >
              Cancel
            </Link>
            <span className="text-xs text-gray-500 ml-auto">Application ref: <code className="font-mono">{appId.slice(0, 8)}</code></span>
          </div>
        </div>
      </form>

      <Footer />
      <CookieBanner />
    </div>
  );
}

const inputCls = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-bali-blue focus:border-bali-blue bg-white";
const textareaCls = inputCls + " resize-y";

function FormSection({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      {desc && <p className="text-sm text-gray-600 mt-1 mb-4">{desc}</p>}
      <div className={desc ? "" : "mt-4"}>{children}</div>
    </section>
  );
}

function Field({
  label, hint, required, error, children, className,
}: {
  label: string; hint?: string; required?: boolean; error?: string;
  children: React.ReactNode; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
        {hint && !required && <span className="text-gray-500 font-normal text-xs ml-2">({hint})</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function UploadSlot({
  kind, label, uploads, onUpload, onRemove, uploading,
}: {
  kind: UploadKind; label: string;
  uploads: UploadedFile[];
  onUpload: (kind: UploadKind, file: File) => void;
  onRemove: (path: string) => void;
  uploading: UploadKind | null;
}) {
  const slotFiles = uploads.filter((u) => u.kind === kind);
  const isUploading = uploading === kind;
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3 last:mb-0">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="font-semibold text-gray-800 text-sm">{label}</div>
        <label className="inline-flex items-center gap-2 bg-bali-blue/10 hover:bg-bali-blue/20 text-bali-blue font-semibold px-3 py-2 rounded-lg cursor-pointer text-sm">
          {isUploading ? "Uploading…" : "Choose file"}
          <input
            type="file"
            className="hidden"
            disabled={isUploading}
            accept={ALLOWED_TYPES.join(",")}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onUpload(kind, f);
              e.target.value = "";
            }}
          />
        </label>
      </div>
      {slotFiles.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {slotFiles.map((f) => (
            <li key={f.path} className="flex items-center justify-between text-xs bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <span className="truncate flex-1">{f.name} <span className="text-gray-500">· {(f.size / 1024).toFixed(0)} KB</span></span>
              <button type="button" onClick={() => onRemove(f.path)} className="text-red-600 hover:underline ml-3">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SuccessScreen({ card, category, categorySlug }: { card: Card; category: Category; categorySlug: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="flex-1 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Application submitted</h1>
            <p className="text-gray-700 mb-6">
              Thanks — we've received your application for the <strong>{card.name}</strong>. The LISS
              team will be in touch by email within 28 working days. If we need anything else from
              you, we'll let you know.
            </p>
            <div className="text-sm text-gray-600 mb-8">
              Questions? Email <a href="mailto:liss@bali.org.uk" className="text-bali-blue underline">liss@bali.org.uk</a> or call <a href="tel:+442476690333" className="text-bali-blue underline">024 7669 0333</a>.
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/liss-cscs/apply/$category" params={{ category: categorySlug }} className="bg-bali-blue text-white px-5 py-2.5 rounded-lg font-semibold">
                Back to {category.label} cards
              </Link>
              <Link to="/liss-cscs" className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100">
                Back to LISS/CSCS
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="flex-1 py-20 text-center">
        <h1 className="text-3xl font-bold mb-3">Application form not found</h1>
        <Link to="/liss-cscs/apply" className="inline-block bg-bali-blue text-white px-6 py-3 rounded-lg font-semibold mt-4">View all categories</Link>
      </section>
      <Footer />
    </div>
  );
}
