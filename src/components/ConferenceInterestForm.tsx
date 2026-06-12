import { useState, type FormEvent } from "react";
import Link from "./SmartLink";

export default function ConferenceInterestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      role: String(fd.get("role") ?? "").trim(),
      member: fd.get("member") === "on",
      sponsorInterest: fd.get("sponsorInterest") === "on",
      notes: String(fd.get("notes") ?? "").trim(),
    };
    if (!payload.name || !payload.email) {
      setErrorMsg("Please provide your name and email.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/public/conference-interest", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="register-interest" className="py-16 sm:py-20 bg-gradient-to-br from-bali-blue/5 via-white to-bali-green/5 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3">
          <p className="uppercase tracking-widest text-xs font-semibold text-bali-blue mb-3">Register your interest</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Be first to hear when Conference 2026 tickets go on sale
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Leave your details and we'll let you know as soon as venue, date and ticket release are confirmed. Members will be eligible for discounted rates.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl border border-bali-green/30 bg-bali-green/10 p-6 text-gray-800">
              <p className="font-semibold text-bali-green mb-1">Thanks — you're on the list.</p>
              <p className="text-sm">We'll email you as soon as Conference 2026 tickets go on sale.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required autoComplete="name" />
                <Field label="Email address" name="email" type="email" required autoComplete="email" />
                <Field label="Company / organisation" name="company" autoComplete="organization" />
                <Field label="Role / job title" name="role" autoComplete="organization-title" />
              </div>

              <fieldset className="space-y-2">
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input type="checkbox" name="member" className="mt-0.5 h-4 w-4 rounded border-gray-300 text-bali-blue focus:ring-bali-blue" />
                  <span>I'm a current BALI member</span>
                </label>
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input type="checkbox" name="sponsorInterest" className="mt-0.5 h-4 w-4 rounded border-gray-300 text-bali-blue focus:ring-bali-blue" />
                  <span>I'd also like information about sponsoring or exhibiting at Conference 2026</span>
                </label>
              </fieldset>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">Anything we should know? <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  maxLength={1000}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-bali-blue focus:outline-none focus:ring-2 focus:ring-bali-blue/30"
                />
              </div>

              {status === "error" && errorMsg && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-bali-blue hover:bg-blue-800 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] shadow"
                >
                  {status === "submitting" ? "Submitting…" : "Notify me about tickets"}
                </button>
                <p className="text-xs text-gray-500">We'll only use your details to contact you about Conference 2026.</p>
              </div>
            </form>
          )}
        </div>

        {/* Sponsorship promo */}
        <aside className="lg:col-span-2">
          <div className="relative rounded-2xl bg-gradient-to-br from-bali-blue to-bali-green text-white p-8 shadow-xl overflow-hidden h-full">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)",
            }} />
            <div className="relative">
              <p className="uppercase tracking-widest text-xs font-semibold text-bali-grass mb-3">Sponsor the day</p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                Put your brand in the room with the UK's landscape leaders
              </h3>
              <p className="text-blue-50/90 mb-6 leading-relaxed">
                Conference 2026 sponsorship and exhibition packages give your business prominent visibility with hundreds of accredited contractors, designers, suppliers and decision-makers — on stage, in the programme, and at the networking reception.
              </p>
              <ul className="space-y-2.5 mb-6 text-sm text-blue-50/95">
                <li className="flex gap-2"><span aria-hidden>✓</span> Headline and session sponsorship slots</li>
                <li className="flex gap-2"><span aria-hidden>✓</span> Exhibitor stands and breakout sponsorship</li>
                <li className="flex gap-2"><span aria-hidden>✓</span> Branding across delegate communications</li>
                <li className="flex gap-2"><span aria-hidden>✓</span> Bespoke packages built around your goals</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about/advertise"
                  className="bg-white text-bali-blue hover:bg-gray-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow"
                >
                  Sponsorship & advertising options
                </Link>
                <a
                  href="mailto:joanna.pieprzak@bali.org.uk?subject=BALI%20Conference%202026%20sponsorship"
                  className="bg-white/10 hover:bg-white/20 border border-white/40 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
                >
                  Email Joanna
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={255}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-bali-blue focus:outline-none focus:ring-2 focus:ring-bali-blue/30"
      />
    </div>
  );
}
