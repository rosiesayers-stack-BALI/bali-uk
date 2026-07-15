import { useMemo, useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { Plus, Trash2, CheckCircle2, Calendar as CalendarIcon, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { fetchEventBySlug, type EventRow } from "../lib/content/db";
import { useMyBaliAuth } from "../services/auth-context";

export const Route = createFileRoute("/events/$slug/book")({
  loader: async ({ params }) => {
    const event = await fetchEventBySlug(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Book — ${loaderData?.event?.title ?? "Event"}` },
      { name: "description", content: `Book your place at ${loaderData?.event?.title ?? "this BALI event"}.` },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BookingPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-bali-blue mb-4">Event not found</h1>
          <Link to="/events" className="text-bali-blue underline">Back to all events</Link>
        </div>
      </main>
      <Footer />
    </div>
  ),
});

// TODO: replace with ISO country list from backend if needed.
const COUNTRIES = [
  "United Kingdom", "Ireland", "France", "Germany", "Netherlands", "Belgium",
  "Luxembourg", "Spain", "Portugal", "Italy", "Switzerland", "Austria",
  "Denmark", "Sweden", "Norway", "Finland", "Iceland", "Poland",
  "Czech Republic", "Slovakia", "Hungary", "Romania", "Bulgaria", "Greece",
  "Turkey", "United States", "Canada", "Australia", "New Zealand", "United Arab Emirates",
  "Saudi Arabia", "Qatar", "India", "China", "Japan", "Singapore", "Hong Kong",
  "South Africa", "Nigeria", "Kenya", "Brazil", "Argentina", "Mexico",
];

type Delegate = { name: string; jobTitle: string; email: string };

function fmtGBP(v: number | null | undefined) {
  if (v == null) return "—";
  if (v === 0) return "Free";
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 }).format(v);
}

function BookingPage() {
  const { event } = Route.useLoaderData();
  const { user } = useMyBaliAuth();
  // TODO: derive real member status from user profile when available.
  const isMember = !!user;

  const [submitted, setSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const [billing, setBilling] = useState({
    title: "", firstName: "", lastName: "", jobTitle: "", company: "",
    vatNumber: "", email: user?.email ?? "", phone: "",
  });
  const [address, setAddress] = useState({
    line1: "", line2: "", line3: "", town: "", county: "", postcode: "", country: "United Kingdom",
  });
  const [delegates, setDelegates] = useState<Delegate[]>([
    { name: user?.name ?? "", jobTitle: "", email: user?.email ?? "" },
  ]);

  const addDelegate = () => setDelegates((d) => [...d, { name: "", jobTitle: "", email: "" }]);
  const removeDelegate = (i: number) => setDelegates((d) => d.filter((_, idx) => idx !== i));
  const updateDelegate = (i: number, patch: Partial<Delegate>) =>
    setDelegates((d) => d.map((del, idx) => (idx === i ? { ...del, ...patch } : del)));

  const requiredBilling: (keyof typeof billing)[] = ["firstName", "lastName", "company", "email", "phone"];
  const requiredAddress: (keyof typeof address)[] = ["line1", "town", "postcode", "country"];

  const errors = useMemo(() => {
    const e: string[] = [];
    requiredBilling.forEach((k) => { if (!billing[k].trim()) e.push(`billing.${k}`); });
    requiredAddress.forEach((k) => { if (!address[k].trim()) e.push(`address.${k}`); });
    delegates.forEach((d, i) => {
      if (!d.name.trim()) e.push(`delegate.${i}.name`);
      if (!d.email.trim()) e.push(`delegate.${i}.email`);
    });
    if (delegates.length < 1) e.push("delegates.min");
    return e;
  }, [billing, address, delegates]);

  const hasError = (key: string) => showErrors && errors.includes(key);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (delegates.length < 1 || errors.length > 0) {
      setShowErrors(true);
      // Scroll to first error
      requestAnimationFrame(() => {
        const el = document.querySelector("[data-error='true']");
        if (el && "scrollIntoView" in el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }
    // TODO: hand off to payment / confirmation flow via backend API.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return <ConfirmationScreen event={event} delegateCount={delegates.length} />;
  }

  const price = isMember ? event.member_price : event.nonmember_price;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {/* Summary header */}
        <header className="relative overflow-hidden py-12 text-white" style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/events" className="hover:text-white">Events</Link>
              <span className="opacity-60">/</span>
              <Link to="/events/$slug" params={{ slug: event.slug }} className="hover:text-white truncate">{event.title}</Link>
              <span className="opacity-60">/</span>
              <span className="text-white">Book</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">Booking</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-blue-100">
              <span className="inline-flex items-center gap-2"><CalendarIcon className="w-4 h-4" aria-hidden />{event.date_text}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden />{event.venue}</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 -mt-6 relative z-10">
          {/* Price panel */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <PriceTier
                label="Member price"
                value={event.member_price}
                highlight={isMember}
              />
              <PriceTier
                label="Non-member price"
                value={event.nonmember_price}
                highlight={!isMember}
              />
            </div>
            <p className="mt-4 text-xs text-gray-500">All prices are inclusive of VAT.</p>
            {!user && (
              <p className="mt-3 text-sm text-bali-blue">
                Already a BALI member?{" "}
                <Link to="/login" className="font-semibold underline hover:text-bali-purple">
                  Sign in to access the member price
                </Link>
                .
              </p>
            )}
            {user && (
              <p className="mt-3 text-sm text-bali-grass font-medium">
                Signed in as {user.email} — member price applied.
              </p>
            )}
            <p className="mt-4 text-sm font-semibold text-gray-700">
              Your price: <span className="text-bali-blue">{fmtGBP(price)}</span> per delegate
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-8 pb-16">
            <p className="text-sm text-gray-600">
              Fields marked <span className="text-red-600">*</span> are required.
            </p>

            {/* Billing details */}
            <Section title="Billing details">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Title" value={billing.title} onChange={(v) => setBilling({ ...billing, title: v })} />
                <div />
                <Field label="First name" required error={hasError("billing.firstName")} value={billing.firstName} onChange={(v) => setBilling({ ...billing, firstName: v })} />
                <Field label="Last name" required error={hasError("billing.lastName")} value={billing.lastName} onChange={(v) => setBilling({ ...billing, lastName: v })} />
                <Field label="Job title" value={billing.jobTitle} onChange={(v) => setBilling({ ...billing, jobTitle: v })} />
                <Field label="Company" required error={hasError("billing.company")} value={billing.company} onChange={(v) => setBilling({ ...billing, company: v })} />
                <Field label="VAT number" value={billing.vatNumber} onChange={(v) => setBilling({ ...billing, vatNumber: v })} />
                <Field type="email" label="Email" required error={hasError("billing.email")} value={billing.email} onChange={(v) => setBilling({ ...billing, email: v })} />
                <Field type="tel" label="Telephone" required error={hasError("billing.phone")} value={billing.phone} onChange={(v) => setBilling({ ...billing, phone: v })} />
              </div>
            </Section>

            {/* Billing address */}
            <Section title="Billing address">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field className="sm:col-span-2" label="Address line 1" required error={hasError("address.line1")} value={address.line1} onChange={(v) => setAddress({ ...address, line1: v })} />
                <Field className="sm:col-span-2" label="Address line 2" value={address.line2} onChange={(v) => setAddress({ ...address, line2: v })} />
                <Field className="sm:col-span-2" label="Address line 3" value={address.line3} onChange={(v) => setAddress({ ...address, line3: v })} />
                <Field label="Town / city" required error={hasError("address.town")} value={address.town} onChange={(v) => setAddress({ ...address, town: v })} />
                <Field label="County" value={address.county} onChange={(v) => setAddress({ ...address, county: v })} />
                <Field label="Postcode" required error={hasError("address.postcode")} value={address.postcode} onChange={(v) => setAddress({ ...address, postcode: v })} />
                <CountryField
                  value={address.country}
                  onChange={(v) => setAddress({ ...address, country: v })}
                  error={hasError("address.country")}
                />
              </div>
            </Section>

            {/* Delegates */}
            <Section
              title="Delegates"
              description="Add one entry per person attending. At least one delegate is required."
              action={
                <button
                  type="button"
                  onClick={addDelegate}
                  className="inline-flex items-center gap-1.5 bg-bali-blue hover:bg-bali-purple text-white text-sm font-semibold px-3 py-2 rounded-lg transition"
                >
                  <Plus className="w-4 h-4" /> Add delegate
                </button>
              }
            >
              {showErrors && delegates.length < 1 && (
                <p data-error="true" className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  Please add at least one delegate before submitting your booking.
                </p>
              )}
              <div className="space-y-4">
                {delegates.map((d, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-bali-slate">Delegate {i + 1}</h4>
                      {delegates.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDelegate(i)}
                          className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium"
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </button>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <Field label="Full name" required error={hasError(`delegate.${i}.name`)} value={d.name} onChange={(v) => updateDelegate(i, { name: v })} />
                      <Field label="Job title" value={d.jobTitle} onChange={(v) => updateDelegate(i, { jobTitle: v })} />
                      <Field type="email" label="Email" required error={hasError(`delegate.${i}.email`)} value={d.email} onChange={(v) => updateDelegate(i, { email: v })} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {showErrors && errors.length > 0 && (
              <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                Please complete all required fields highlighted above.
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <Link to="/events/$slug" params={{ slug: event.slug }} className="text-bali-blue font-semibold hover:underline">
                ← Back to event details
              </Link>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-purple text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Continue to payment →
              </button>
            </div>
            <p className="text-xs text-gray-500">
              {/* TODO: connect payment processing (e.g. Stripe/Paddle) as the next step. */}
              Payment will be collected on the next step. This is a placeholder — no charge is made yet.
            </p>
          </form>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function Section({
  title, description, action, children,
}: { title: string; description?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-bali-slate">{title}</h2>
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function Field({
  label, value, onChange, required, error, type = "text", className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: boolean;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`} data-error={error ? "true" : undefined}>
      <span className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-600"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/40 transition ${
          error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-600">This field is required.</span>}
    </label>
  );
}

function CountryField({
  value, onChange, error,
}: { value: string; onChange: (v: string) => void; error?: boolean }) {
  return (
    <label className="block" data-error={error ? "true" : undefined}>
      <span className="block text-sm font-medium text-gray-700 mb-1">
        Country<span className="text-red-600"> *</span>
      </span>
      <input
        list="booking-country-list"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing to search…"
        aria-invalid={error ? true : undefined}
        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/40 transition ${
          error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
        }`}
      />
      <datalist id="booking-country-list">
        {COUNTRIES.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </label>
  );
}

function PriceTier({ label, value, highlight }: { label: string; value: number | null | undefined; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-bali-blue bg-bali-blue/5" : "border-gray-200 bg-white"}`}>
      <div className="text-xs uppercase tracking-widest font-semibold text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-extrabold text-bali-slate">{fmtGBP(value)}</div>
      <div className="text-xs text-gray-500 mt-0.5">inc. VAT</div>
      {highlight && <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-bali-blue">Applied to your booking</div>}
    </div>
  );
}

function ConfirmationScreen({ event, delegateCount }: { event: EventRow; delegateCount: number }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-bali-grass/10 grid place-items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-bali-grass" aria-hidden />
            </div>
            <h1 className="text-2xl font-bold text-bali-slate mb-2">Booking received</h1>
            <p className="text-gray-600 mb-6">
              Thanks — your booking details have been captured. A member of the BALI team will follow up with payment
              instructions and joining information by email.
            </p>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 text-left space-y-2">
              <div className="text-xs uppercase tracking-widest font-semibold text-gray-500">Summary</div>
              <div><span className="font-semibold text-bali-slate">Event:</span> {event.title}</div>
              <div><span className="font-semibold text-bali-slate">Date:</span> {event.date_text}</div>
              <div><span className="font-semibold text-bali-slate">Delegates:</span> {delegateCount}</div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/events" className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-purple text-white font-semibold px-5 py-2.5 rounded-lg transition">
                Browse more events
              </Link>
              <Link to="/events/$slug" params={{ slug: event.slug }} className="inline-flex items-center gap-2 border border-gray-300 hover:border-bali-blue hover:text-bali-blue text-gray-700 font-semibold px-5 py-2.5 rounded-lg transition">
                Back to event
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
