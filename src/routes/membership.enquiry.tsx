import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export const Route = createFileRoute("/membership/enquiry")({
  head: () => ({
    meta: [
      { title: "Membership Enquiry — BALI" },
      {
        name: "description",
        content:
          "Not sure which BALI membership is right for you? Send a quick enquiry and our membership team will be in touch within 48 hours.",
      },
      { property: "og:title", content: "Membership Enquiry — BALI" },
      {
        property: "og:description",
        content:
          "Talk to the BALI membership team. Help choosing a category, fees and next steps.",
      },
    ],
  }),
  component: EnquiryPage,
});

const categories = [
  "Not sure — please advise",
  "Accredited Contractor",
  "Accredited Designer",
  "Accredited Supplier",
  "Accredited Group",
  "Accredited DSO",
  "International",
  "Associate Contractor",
  "Associate Designer",
  "Associate Supplier",
  "Associate Individual",
  "Training Provider",
  "Student",
];

const faqs = [
  {
    q: "Which category fits my business?",
    a: "Most landscape contractors join as Accredited Contractor. Designers and design practices fit Accredited Designer. Suppliers of materials, tools or services choose Accredited Supplier. Businesses trading under two years start as Associate. Not sure? Tick \"Not sure — please advise\" and we'll guide you.",
  },
  {
    q: "How much does membership cost?",
    a: "Fees vary by category and business turnover. We'll send a tailored quote with no hidden charges — see /membership/fees for the public summary and current fee leaflet.",
  },
  {
    q: "How long does the application take?",
    a: "We reply to every enquiry within 48 working hours. Accredited categories then take a few weeks because we vet each applicant. Associate, Student and Training Provider applications are faster.",
  },
  {
    q: "What happens after I send this enquiry?",
    a: "A named member of the BALI membership team will email or call you, confirm the right category, send the documents you'll need, and walk you through fees and the vetting steps.",
  },
];

function EnquiryPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      categoryInterest: String(fd.get("categoryInterest") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      source: "membership-enquiry",
    };
    try {
      const res = await fetch("/api/public/membership-enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Could not send your enquiry. Please try again or email membership@bali.org.uk.");
        setStatus("error");
        return;
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Network problem. Please try again or email membership@bali.org.uk.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative text-white overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1D4D59 0%, #21509A 60%, #0E8B61 100%)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/membership" className="hover:text-white">Membership</Link>
              <span className="opacity-60">/</span>
              <span className="text-white">Enquiry</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
              Membership
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl">
              Not sure which membership is right for you?
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
              Send a short enquiry and a named member of our membership team will be in touch within
              48 working hours. We'll help you pick the right category, share fees, and walk you through
              the application.
            </p>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
                {status === "ok" ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-bali-green mx-auto flex items-center justify-center mb-5">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Thanks — your enquiry is in.</h2>
                    <p className="text-slate-600 max-w-md mx-auto">
                      A member of the BALI membership team will be in touch within 48 working hours.
                      If it's urgent, call <a className="text-bali-green font-semibold" href="tel:+442476690333">+44 (0)24 7669 0333</a>.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <Link to="/membership/categories" className="bg-bali-green text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700">
                        Browse categories
                      </Link>
                      <Link to="/membership" className="border border-slate-300 px-5 py-3 rounded-lg font-semibold hover:bg-slate-50">
                        Why join BALI
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold">Tell us about you</h2>
                      <p className="text-slate-600 text-sm mt-1">
                        All fields marked * are required. We never share your details.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Your name *" name="name" type="text" required autoComplete="name" maxLength={120} />
                      <Field label="Email *" name="email" type="email" required autoComplete="email" maxLength={255} />
                      <Field label="Phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
                      <Field label="Company / practice" name="company" type="text" autoComplete="organization" maxLength={200} />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="categoryInterest">
                        Membership category of interest
                      </label>
                      <select
                        id="categoryInterest"
                        name="categoryInterest"
                        defaultValue="Not sure — please advise"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-bali-green focus:ring-2 focus:ring-bali-green/20 outline-none bg-white"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="message">
                        Tell us a little about your business *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        maxLength={2000}
                        placeholder="What you do, where you're based, years trading, and anything you'd like the team to know."
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-bali-green focus:ring-2 focus:ring-bali-green/20 outline-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="rounded-lg border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="bg-bali-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-60 transition-all"
                      >
                        {status === "sending" ? "Sending…" : "Send enquiry"}
                      </button>
                      <span className="text-sm text-slate-500">
                        Or already know which category fits?{" "}
                        <Link to="/membership/categories" className="text-bali-green font-semibold hover:underline">
                          Apply directly
                        </Link>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Prefer to talk?</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Phone</div>
                    <a href="tel:+442476690333" className="text-bali-blue font-semibold text-base hover:underline">
                      +44 (0)24 7669 0333
                    </a>
                  </li>
                  <li>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email</div>
                    <a href="mailto:membership@bali.org.uk" className="text-bali-blue font-semibold text-base hover:underline">
                      membership@bali.org.uk
                    </a>
                  </li>
                  <li>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Response time</div>
                    <span className="text-slate-700">Within 48 working hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Ready to apply?</h3>
                <p className="text-sm text-slate-700 mb-4">
                  If you already know your category, start the online application — it takes around 10 minutes.
                </p>
                <Link
                  to="/membership/categories"
                  className="inline-flex items-center gap-2 bg-bali-green text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700"
                >
                  Browse categories
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-bali-blue text-center mb-3">
              Common questions
            </h2>
            <p className="text-slate-600 text-center mb-10">
              Quick answers before you send your enquiry.
            </p>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white border border-slate-200 rounded-xl px-5 py-4 group"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between">
                    <span>{f.q}</span>
                    <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function Field(props: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        required={props.required}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-bali-green focus:ring-2 focus:ring-bali-green/20 outline-none"
      />
    </div>
  );
}
