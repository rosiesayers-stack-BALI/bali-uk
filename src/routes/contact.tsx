import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BALI — British Association of Landscape Industries" },
      {
        name: "description",
        content:
          "Get in touch with BALI. Find the right team for membership, events, press, advertising, awards or policy enquiries — plus our head office address, phone and email.",
      },
      { property: "og:title", content: "Contact BALI" },
      {
        property: "og:description",
        content:
          "Membership, events, press, advertising, awards, policy — find the right team and get in touch with the British Association of Landscape Industries.",
      },
    ],
  }),
  component: ContactPage,
});

const routes = [
  {
    title: "Become a member",
    body: "Join the UK's leading landscaping trade association.",
    cta: { label: "Join BALI", href: "/join" },
    icon: "👥",
  },
  {
    title: "Existing member support",
    body: "Account, billing and membership queries.",
    email: "membership@bali.org.uk",
    phone: "+44 (0)24 7669 0333",
    icon: "🛟",
  },
  {
    title: "Find a landscaper",
    body: "Search Accredited designers, contractors and suppliers.",
    cta: { label: "Open directory", href: "/directory" },
    icon: "🔍",
  },
  {
    title: "Press & media",
    body: "Interviews, comment and press releases.",
    email: "marketingteam@bali.org.uk",
    icon: "📰",
  },
  {
    title: "Events & National Conference",
    body: "Tickets, bookings and event programme.",
    email: "events@bali.org.uk",
    icon: "🎟️",
  },
  {
    title: "Advertising & sponsorship",
    body: "Magazine, e-newsletter, website and event sponsorship.",
    email: "joanna.pieprzak@bali.org.uk",
    icon: "📢",
  },
  {
    title: "Awards entries",
    body: "National Landscape Awards enquiries and submissions.",
    email: "awards@bali.org.uk",
    icon: "🏆",
  },
  {
    title: "Policy & government affairs",
    body: "Policy positions, consultations and political engagement.",
    cta: { label: "View Policy & Campaigns", href: "/policy", external: false },
    icon: "🏛️",
  },
];

const subjects = [
  "General enquiry",
  "Membership",
  "Events",
  "Press & media",
  "Advertising",
  "Awards",
  "Policy",
  "Other",
];

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organisation: z.string().trim().max(150).optional(),
  subject: z.string().trim().min(1, "Please pick a subject").max(50),
  message: z.string().trim().min(10, "Please write a little more").max(2000),
  // honeypot — must be empty
  website: z.string().max(0).optional(),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = enquirySchema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setStatus("sending");
    // No backend wired yet — simulate success. Replace with server fn later.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("ok");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1D4D59 0%, #21509A 60%, #0E8B61 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
          <nav className="text-sm text-white/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <p className="uppercase tracking-[0.2em] text-xs text-white/70 mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight max-w-3xl">
            How can we help?
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            BALI supports landscape professionals, members of the public looking for trusted
            landscapers, press, partners and policy stakeholders. Pick the route below that
            best matches what you need — or send us a general enquiry.
          </p>
        </div>
      </section>

      {/* Quick-route cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-bali-blue mb-2">
            Get to the right team faster
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Choose the area that matches your enquiry — you'll reach the right person sooner.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col hover:border-bali-blue/40 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3" aria-hidden>{r.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{r.body}</p>
                {r.email && (
                  <a
                    href={`mailto:${r.email}`}
                    className="text-sm text-bali-blue hover:underline break-all"
                  >
                    {r.email}
                  </a>
                )}
                {r.phone && (
                  <a
                    href={`tel:${r.phone.replace(/[^+\d]/g, "")}`}
                    className="text-sm text-gray-700 mt-1"
                  >
                    {r.phone}
                  </a>
                )}
                {r.cta &&
                  (r.cta.external ? (
                    <a
                      href={r.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-bali-blue hover:underline mt-1"
                    >
                      {r.cta.label} ↗
                    </a>
                  ) : (
                    <Link
                      to={r.cta.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-bali-blue hover:underline mt-1"
                    >
                      {r.cta.label} →
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head office + form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Office details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-bali-blue mb-4">Head office</h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                British Association of Landscape Industries<br />
                Landscape House<br />
                Stoneleigh Park<br />
                Warwickshire<br />
                CV8 2LG<br />
                United Kingdom
              </address>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="text-gray-500 w-20">Phone</dt>
                  <dd>
                    <a href="tel:+442476690333" className="text-bali-blue hover:underline">
                      +44 (0)24 7669 0333
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-gray-500 w-20">Email</dt>
                  <dd>
                    <a href="mailto:info@bali.org.uk" className="text-bali-blue hover:underline">
                      info@bali.org.uk
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-gray-500 w-20">Hours</dt>
                  <dd className="text-gray-700">Mon–Fri, 9:00–17:00 (UK)</dd>
                </div>
              </dl>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="BALI head office location"
                src="https://www.google.com/maps?q=Landscape+House,+Stoneleigh+Park,+Warwickshire+CV8+2LG&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
              <div className="px-4 py-3 bg-gray-50 text-sm">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Landscape+House,+Stoneleigh+Park,+Warwickshire+CV8+2LG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bali-blue hover:underline font-medium"
                >
                  Get directions ↗
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Follow BALI
              </h3>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/british-association-of-landscape-industries/" },
                  { label: "X / Twitter", href: "https://twitter.com/BALI_landscapes" },
                  { label: "YouTube", href: "https://www.youtube.com/user/BALIlandscapes" },
                  { label: "Instagram", href: "https://www.instagram.com/bali_landscapes/" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:border-bali-blue hover:text-bali-blue transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-bali-blue mb-1">
                Send us a general enquiry
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Not sure where to start? Fill this in and we'll route it to the right team.
              </p>

              {status === "ok" ? (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-900">
                  Thanks — your message has been received. The team will be in touch within
                  two working days.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden>
                    <label>
                      Website
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name *" name="name" type="text" required maxLength={100} />
                    <Field label="Email *" name="email" type="email" required maxLength={255} />
                  </div>
                  <Field label="Organisation" name="organisation" type="text" maxLength={150} />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
                    >
                      <option value="" disabled>Choose a subject…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      maxLength={2000}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
                    />
                  </div>

                  {error && (
                    <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-800">
                      {error}
                    </div>
                  )}

                  <p className="text-xs text-gray-500">
                    By submitting this form you agree we may contact you about your enquiry.
                    See our <Link to="/privacy" className="underline">privacy notice</Link>.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-bali-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-bali-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Not a member yet?</h2>
            <p className="text-white/80">
              Join over 900 Accredited members and grow your landscaping business with BALI.
            </p>
          </div>
          <div className="flex gap-3 sm:justify-end">
            <Link
              to="/join"
              className="bg-bali-green text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Join BALI
            </Link>
            <Link
              to="/directory"
              className="bg-white/10 border border-white/30 text-white px-5 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              Find a landscaper
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
      />
    </div>
  );
}
