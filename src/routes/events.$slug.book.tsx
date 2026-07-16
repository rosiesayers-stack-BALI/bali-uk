import { useMemo, useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, Calendar as CalendarIcon, MapPin, CreditCard, FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { fetchEventBySlug, type EventRow } from "../lib/content/db";
import { useMyBaliAuth } from "../services/auth-context";
import { useCurrentPerson } from "../lib/mybali/contact-role";
import { supabase } from "@/integrations/supabase/client";

// TODO: replace mock payment step with real Stripe / GoCardless integration.
// This flow captures booking data + a mock payment reference so staff can
// see who booked and what they "paid" while the gateway is wired up.

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

const gbp = (v: number | null | undefined) => {
  if (v == null) return "—";
  if (v === 0) return "Free";
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 }).format(v);
};

function mockRef(prefix: string) {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

type BookingResult = {
  reference: string;
  status: string;
  amount: number;
  provider: string;
  places: number;
};

function BookingPage() {
  const { event } = Route.useLoaderData();
  const { user } = useMyBaliAuth();
  const person = useCurrentPerson();
  const isMember = !!person;

  const [step, setStep] = useState<"details" | "payment" | "done">("details");
  const [attendeeName, setAttendeeName] = useState(person?.name ?? user?.name ?? "");
  const [attendeeEmail, setAttendeeEmail] = useState(person?.email ?? user?.email ?? "");
  const [places, setPlaces] = useState(1);
  const [method, setMethod] = useState<"card" | "invoice">("card");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<BookingResult | null>(null);

  const memberPrice = event.member_price ?? 0;
  const nonMemberPrice = (event.non_member_price ?? event.nonmember_price) ?? 0;
  const unit = isMember ? Number(memberPrice) : Number(nonMemberPrice);
  const total = Number((unit * places).toFixed(2));
  const paymentOpts = event.payment_options ?? { card: true, invoice: true };
  const cardEnabled = paymentOpts.card !== false;
  const invoiceEnabled = paymentOpts.invoice !== false;

  const capacity = event.capacity ?? 0;
  const maxPlaces = capacity > 0 ? capacity : 20;

  const detailsErrors = useMemo(() => {
    const e: string[] = [];
    if (!attendeeName.trim()) e.push("name");
    if (!attendeeEmail.trim() || !/^\S+@\S+\.\S+$/.test(attendeeEmail)) e.push("email");
    if (places < 1) e.push("places");
    if (capacity > 0 && places > capacity) e.push("capacity");
    return e;
  }, [attendeeName, attendeeEmail, places, capacity]);

  const submitBooking = async () => {
    setSubmitting(true);
    setError(null);
    const usingCard = method === "card";
    const provider = usingCard ? "Mock card" : "Invoice";
    const ref = mockRef(usingCard ? "CARD" : "INV");
    const status = usingCard ? "Confirmed" : "Awaiting payment";
    const paidAt = usingCard ? new Date().toISOString() : null;

    const { error: insErr } = await supabase.from("workbooks_bookings").insert({
      event_id: event.id,
      event_slug: event.slug,
      attendee_name: attendeeName.trim(),
      attendee_email: attendeeEmail.trim().toLowerCase(),
      places,
      amount: total,
      status,
      payment_provider: provider,
      payment_ref: ref,
      paid_at: paidAt,
      wb_person_id: person?.id ?? null,
      wb_org_id: person?.organisationId ?? null,
      notes: `Mock ${usingCard ? "card" : "invoice"} booking (${places} place${places === 1 ? "" : "s"}).`,
    });

    setSubmitting(false);
    if (insErr) { setError(insErr.message); return; }
    setResult({ reference: ref, status, amount: total, provider, places });
    setStep("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === "done" && result) {
    return <ConfirmationScreen event={event} result={result} attendeeEmail={attendeeEmail} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <header className="relative overflow-hidden py-12 text-white" style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}>
          <div className="max-w-3xl mx-auto px-6">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/events" className="hover:text-white">Events</Link>
              <span className="opacity-60">/</span>
              <Link to="/events/$slug" params={{ slug: event.slug }} className="hover:text-white truncate">{event.title}</Link>
              <span className="opacity-60">/</span>
              <span className="text-white">Book</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">Booking</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-blue-100 text-sm">
              <span className="inline-flex items-center gap-2"><CalendarIcon className="w-4 h-4" aria-hidden />{event.date_text}{event.start_time ? ` · ${event.start_time}${event.end_time ? `–${event.end_time}` : ""}` : ""}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden />{event.venue}</span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-10 pb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <PriceTier label="Member price" value={memberPrice} highlight={isMember} />
              <PriceTier label="Non-member price" value={nonMemberPrice} highlight={!isMember} />
            </div>
            {!user && (
              <p className="mt-3 text-sm text-bali-blue">
                Already a BALI member?{" "}
                <Link to="/login" className="font-semibold underline hover:text-bali-purple">Sign in to access the member price</Link>.
              </p>
            )}
            {isMember && (
              <p className="mt-3 text-sm text-bali-grass font-medium">
                Signed in as {person?.name || user?.email} — member price applied.
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {step === "details" && (
              <>
                <h2 className="text-lg font-bold text-bali-slate mb-4">Your details</h2>
                <div className="space-y-4">
                  <Field label="Full name" required error={detailsErrors.includes("name")}
                    value={attendeeName} onChange={setAttendeeName} />
                  <Field label="Email" type="email" required error={detailsErrors.includes("email")}
                    value={attendeeEmail} onChange={setAttendeeEmail} />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of places <span className="text-red-600">*</span>
                      {capacity > 0 && <span className="ml-2 text-xs font-normal text-gray-500">Max {capacity}</span>}
                    </label>
                    <input type="number" min={1} max={maxPlaces}
                      value={places}
                      onChange={(e) => setPlaces(Math.max(1, Math.min(maxPlaces, Number(e.target.value) || 1)))}
                      className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/40" />
                    {detailsErrors.includes("capacity") && (
                      <p className="mt-1 text-xs text-red-600">This exceeds the remaining capacity ({capacity}).</p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-bali-slate">Total:</span> {gbp(total)}{" "}
                    <span className="text-xs text-gray-500">({places} × {gbp(unit)})</span>
                  </div>
                  <button
                    type="button"
                    disabled={detailsErrors.length > 0}
                    onClick={() => setStep("payment")}
                    className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-purple disabled:opacity-50 text-white font-semibold px-5 py-2.5 rounded-lg transition"
                  >
                    Continue to payment →
                  </button>
                </div>
              </>
            )}

            {step === "payment" && (
              <>
                <h2 className="text-lg font-bold text-bali-slate mb-4">Payment</h2>
                <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 mb-5 text-sm">
                  <div className="flex justify-between"><span>{attendeeName}</span><span className="text-gray-500">{attendeeEmail}</span></div>
                  <div className="mt-1 flex justify-between">
                    <span>{places} × {gbp(unit)}</span>
                    <span className="font-bold text-bali-slate">{gbp(total)}</span>
                  </div>
                </div>

                <fieldset className="space-y-3">
                  <legend className="text-sm font-medium text-gray-700 mb-2">Choose how to pay</legend>
                  {cardEnabled && (
                    <label className={`flex items-start gap-3 border rounded-xl p-4 cursor-pointer transition ${method === "card" ? "border-bali-blue bg-bali-blue/5" : "border-gray-200 hover:border-gray-300"}`}>
                      <input type="radio" name="method" checked={method === "card"} onChange={() => setMethod("card")} className="mt-1" />
                      <div>
                        <div className="font-semibold text-bali-slate flex items-center gap-2"><CreditCard className="w-4 h-4" /> Pay by card (simulated)</div>
                        <p className="text-xs text-gray-500 mt-0.5">Confirms your place instantly. No real payment will be taken — this is a mock for demo purposes.</p>
                      </div>
                    </label>
                  )}
                  {invoiceEnabled && (
                    <label className={`flex items-start gap-3 border rounded-xl p-4 cursor-pointer transition ${method === "invoice" ? "border-bali-blue bg-bali-blue/5" : "border-gray-200 hover:border-gray-300"}`}>
                      <input type="radio" name="method" checked={method === "invoice"} onChange={() => setMethod("invoice")} className="mt-1" />
                      <div>
                        <div className="font-semibold text-bali-slate flex items-center gap-2"><FileText className="w-4 h-4" /> Pay by invoice</div>
                        <p className="text-xs text-gray-500 mt-0.5">We'll email an invoice; your place will be marked "Awaiting payment" until it's settled.</p>
                      </div>
                    </label>
                  )}
                </fieldset>

                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button type="button" onClick={() => setStep("details")} className="text-sm text-gray-600 hover:text-bali-blue">
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={submitBooking}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-purple disabled:opacity-50 text-white font-semibold px-5 py-2.5 rounded-lg transition"
                  >
                    {submitting ? "Processing…" : method === "card" ? `Confirm & pay ${gbp(total)}` : "Confirm booking"}
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  {/* TODO: swap this mock for a real Stripe / GoCardless payment. */}
                  No real payment is processed. A booking record is written to the database with a mock reference.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function Field({ label, value, onChange, required, error, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void; required?: boolean; error?: boolean; type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-600"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/40 transition ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"}`}
      />
    </label>
  );
}

function PriceTier({ label, value, highlight }: { label: string; value: number | null | undefined; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-bali-blue bg-bali-blue/5" : "border-gray-200 bg-white"}`}>
      <div className="text-xs uppercase tracking-widest font-semibold text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-extrabold text-bali-slate">{gbp(value)}</div>
      <div className="text-xs text-gray-500 mt-0.5">inc. VAT</div>
      {highlight && <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-bali-blue">Applied to your booking</div>}
    </div>
  );
}

function ConfirmationScreen({ event, result, attendeeEmail }: { event: EventRow; result: BookingResult; attendeeEmail: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-bali-grass/10 grid place-items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-bali-grass" aria-hidden />
            </div>
            <h1 className="text-2xl font-bold text-bali-slate mb-2">
              {result.status === "Confirmed" ? "Booking confirmed" : "Booking received"}
            </h1>
            <p className="text-gray-600 mb-6">
              {result.status === "Confirmed"
                ? `A confirmation has been noted for ${attendeeEmail}. See you there!`
                : `We've noted your booking for ${attendeeEmail}. An invoice will follow — your place is held as "Awaiting payment".`}
            </p>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 text-left space-y-2 text-sm">
              <div className="text-xs uppercase tracking-widest font-semibold text-gray-500">Summary</div>
              <div><span className="font-semibold text-bali-slate">Event:</span> {event.title}</div>
              <div><span className="font-semibold text-bali-slate">Date:</span> {event.date_text}</div>
              <div><span className="font-semibold text-bali-slate">Places:</span> {result.places}</div>
              <div><span className="font-semibold text-bali-slate">Total:</span> {gbp(result.amount)}</div>
              <div><span className="font-semibold text-bali-slate">Payment:</span> {result.provider} · {result.status}</div>
              <div><span className="font-semibold text-bali-slate">Reference:</span> <span className="font-mono">{result.reference}</span></div>
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
