import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Calendar as CalendarIcon, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import type { EventRow } from "../../lib/content/db";
import { BOOKING_TIERS, priceForTier, formatGBP, tierLabel } from "../../lib/events/booking-tiers";
import { submitEventBooking } from "../../lib/events/bookings.functions";

export function spacesLeft(event: EventRow): number | null {
  const cap = Number(event.capacity ?? 0);
  if (!cap) return null; // 0 / unset = unlimited
  const remaining = (event as { spaces_remaining?: number | null }).spaces_remaining;
  return remaining == null ? cap : Number(remaining);
}

export function isSoldOut(event: EventRow): boolean {
  const left = spacesLeft(event);
  return left !== null && left <= 0;
}

type Errors = Partial<Record<string, string>>;

export default function EventBookingModal({
  event,
  open,
  onClose,
  onBooked,
}: {
  event: EventRow;
  open: boolean;
  onClose: () => void;
  onBooked?: () => void;
}) {
  const submit = useServerFn(submitEventBooking);
  const dialogRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [tier, setTier] = useState("non_member");
  const [attendees, setAttendees] = useState(1);
  const [dietary, setDietary] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"form" | "sending" | "done" | "error">("form");
  const [failMsg, setFailMsg] = useState("");
  const [reference, setReference] = useState("");

  const left = spacesLeft(event);
  const unitPrice = useMemo(
    () => priceForTier(tier, event.member_price, event.non_member_price ?? event.nonmember_price),
    [tier, event.member_price, event.non_member_price, event.nonmember_price],
  );
  const total = unitPrice * Math.max(1, attendees);
  const needsPayment = total > 0;
  const isMemberRate = BOOKING_TIERS.find((t) => t.id === tier)?.memberRate && event.member_price != null;

  // Escape to close + body scroll lock + initial focus
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  // Auto-close a few seconds after success
  useEffect(() => {
    if (state !== "done") return;
    const t = setTimeout(onClose, 8000);
    return () => clearTimeout(t);
  }, [state, onClose]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!open || !mounted) return null;

  function validate(): Errors {
    const e: Errors = {};
    if (!fullName.trim()) e.fullName = "Please enter your full name.";
    if (!email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Please enter a valid email address.";
    if (!company.trim()) e.company = "Please enter your company or organisation.";
    if (!tier) e.tier = "Please select your membership tier.";
    if (!attendees || attendees < 1) e.attendees = "At least one attendee is required.";
    else if (left !== null && attendees > left) {
      e.attendees = `Only ${left} space${left === 1 ? "" : "s"} left for this event.`;
    }
    if (needsPayment) {
      if (!cardName.trim()) e.cardName = "Name on card is required.";
      const digits = cardNumber.replace(/\s/g, "");
      if (!/^\d{12,19}$/.test(digits)) e.cardNumber = "Enter a valid card number.";
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry.trim())) e.expiry = "Use MM/YY.";
      if (!/^\d{3,4}$/.test(cvc.trim())) e.cvc = "3 or 4 digits.";
    }
    if (!terms) e.terms = "You must accept the terms and cancellation policy.";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      dialogRef.current?.querySelector<HTMLElement>("[data-error='true']")?.focus();
      return;
    }
    setState("sending");
    setFailMsg("");
    try {
      const res = await submit({
        data: {
          eventSlug: event.slug,
          fullName: fullName.trim(),
          email: email.trim(),
          company: company.trim(),
          membershipTier: tier,
          membershipTierLabel: tierLabel(tier),
          attendees,
          dietary: dietary.trim(),
          termsAccepted: true as const,
          payingByCard: needsPayment,
          cardName: cardName.trim(),
          cardLast4: cardNumber.replace(/\s/g, "").slice(-4),
        },
      });
      setReference(res.reference);
      setState("done");
      onBooked?.();
    } catch (err) {
      setFailMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  const heading = `Book your place — ${event.title}`;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} aria-hidden />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={heading}
        tabIndex={-1}
        className="relative bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl my-0 sm:my-8 outline-none"
      >
        {/* header */}
        <div className="sticky top-0 z-10 bg-white sm:rounded-t-2xl border-b border-gray-200 px-5 sm:px-7 py-4 flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-widest font-semibold text-bali-blue mb-1">{event.category}</p>
            <h2 className="text-lg sm:text-xl font-bold text-bali-slate leading-snug">{event.title}</h2>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5"><CalendarIcon className="w-3.5 h-3.5" aria-hidden />{event.date_text}</span>
              {event.start_time && (
                <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" aria-hidden />{event.start_time}{event.end_time ? `–${event.end_time}` : ""}</span>
              )}
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" aria-hidden />{event.venue}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="shrink-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-bali-slate focus:outline-none focus:ring-2 focus:ring-bali-blue"
          >
            <X className="w-5 h-5" aria-hidden />
          </button>
        </div>

        <div className="px-5 sm:px-7 py-6">
          {/* ---- event detail (always shown, above the form) ---- */}
          <section aria-label="Event details" className="space-y-4">
            {event.image_url && (
              <img
                src={event.image_url}
                alt={event.image_alt ?? event.title}
                className="w-full h-44 sm:h-56 object-cover rounded-xl ring-1 ring-black/5"
              />
            )}
            {event.description && (
              <p className="text-base text-gray-700 leading-relaxed font-medium">{event.description}</p>
            )}
            {event.body_paragraphs?.length > 0 && (
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {event.body_paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            )}
            <dl className="grid sm:grid-cols-3 gap-3 pt-2">
              <DetailBox label="Date" value={event.date_text} />
              <DetailBox label="Time" value={event.start_time ? `${event.start_time}${event.end_time ? `–${event.end_time}` : ""}` : "TBC"} />
              <DetailBox label="Venue" value={event.venue} />
            </dl>
            {left !== null && (
              <p className="text-sm font-semibold text-bali-grass">
                {left} space{left === 1 ? "" : "s"} remaining
              </p>
            )}
          </section>

          <hr className="my-7 border-gray-200" />

          {state === "done" ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-bali-grass mx-auto mb-4" aria-hidden />
              <h3 className="text-xl font-bold text-bali-slate mb-2">Booking confirmed</h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Thanks {fullName.split(" ")[0] || fullName}, your place at <strong>{event.title}</strong> is booked.
                A confirmation has been sent to <strong>{email}</strong>.
              </p>
              <p className="text-sm text-gray-500 mt-3">Booking reference <span className="font-mono font-semibold">{reference}</span></p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 bg-bali-blue hover:bg-bali-purple text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="text-xl font-bold text-bali-slate mb-1">Book your place</h3>
              <p className="text-sm text-gray-600 mb-5">All fields marked * are required.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="bk-name" label="Full name *" error={errors.fullName}>
                  <input id="bk-name" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" data-error={!!errors.fullName} className={inputCls(!!errors.fullName)} />
                </Field>
                <Field id="bk-email" label="Email address *" error={errors.email}>
                  <input id="bk-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" data-error={!!errors.email} className={inputCls(!!errors.email)} />
                </Field>
                <Field id="bk-company" label="Company / organisation *" error={errors.company}>
                  <input id="bk-company" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" data-error={!!errors.company} className={inputCls(!!errors.company)} />
                </Field>
                <Field id="bk-tier" label="Membership tier *" error={errors.tier}>
                  <select id="bk-tier" value={tier} onChange={(e) => setTier(e.target.value)} data-error={!!errors.tier} className={inputCls(!!errors.tier)}>
                    {BOOKING_TIERS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                  </select>
                </Field>
                <Field id="bk-attendees" label="Number of attendees *" error={errors.attendees}>
                  <input
                    id="bk-attendees"
                    type="number"
                    min={1}
                    max={left ?? undefined}
                    value={attendees}
                    onChange={(e) => setAttendees(Math.max(1, Number(e.target.value) || 1))}
                    data-error={!!errors.attendees}
                    className={inputCls(!!errors.attendees)}
                  />
                </Field>
                <div className="rounded-xl bg-bali-blue/5 border border-bali-blue/15 p-4 flex flex-col justify-center" aria-live="polite">
                  <div className="text-xs uppercase tracking-widest font-semibold text-gray-600">Price</div>
                  <div className="text-2xl font-extrabold text-bali-slate leading-tight">
                    {formatGBP(unitPrice)}
                    <span className="text-sm font-semibold text-gray-600 ml-1.5">{isMemberRate ? "(Member rate)" : "(Non-member rate)"}</span>
                  </div>
                  {attendees > 1 && (
                    <div className="text-sm text-gray-600 mt-0.5">Total for {attendees} attendees: <strong className="text-bali-slate">{formatGBP(total)}</strong></div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <Field id="bk-diet" label="Dietary requirements (optional)">
                  <textarea
                    id="bk-diet"
                    rows={2}
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder="e.g. vegetarian, gluten-free, allergies"
                    className={inputCls(false)}
                  />
                </Field>
              </div>

              {needsPayment && (
                <fieldset className="mt-6 rounded-xl border border-gray-200 p-5">
                  <legend className="px-2 text-sm font-bold text-bali-slate">Payment details</legend>
                  <p className="text-xs text-gray-500 mb-4">
                    Secure card payment for {formatGBP(total)}. {/* TODO: wire Stripe / GoCardless — no card data is stored or charged today. */}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field id="bk-cardname" label="Name on card *" error={errors.cardName}>
                      <input id="bk-cardname" value={cardName} onChange={(e) => setCardName(e.target.value)} autoComplete="cc-name" data-error={!!errors.cardName} className={inputCls(!!errors.cardName)} />
                    </Field>
                    <Field id="bk-cardnum" label="Card number *" error={errors.cardNumber}>
                      <input id="bk-cardnum" inputMode="numeric" placeholder="4242 4242 4242 4242" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} autoComplete="cc-number" data-error={!!errors.cardNumber} className={inputCls(!!errors.cardNumber)} />
                    </Field>
                    <Field id="bk-exp" label="Expiry (MM/YY) *" error={errors.expiry}>
                      <input id="bk-exp" placeholder="09/28" value={expiry} onChange={(e) => setExpiry(e.target.value)} autoComplete="cc-exp" data-error={!!errors.expiry} className={inputCls(!!errors.expiry)} />
                    </Field>
                    <Field id="bk-cvc" label="CVC *" error={errors.cvc}>
                      <input id="bk-cvc" inputMode="numeric" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} autoComplete="cc-csc" data-error={!!errors.cvc} className={inputCls(!!errors.cvc)} />
                    </Field>
                  </div>
                </fieldset>
              )}

              <div className="mt-6">
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    data-error={!!errors.terms}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-bali-blue focus:ring-bali-blue"
                  />
                  <span>I agree to BALI's terms and cancellation policy *</span>
                </label>
                {errors.terms && <p className="text-sm text-red-600 mt-1.5">{errors.terms}</p>}
              </div>

              {state === "error" && (
                <div role="alert" className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="font-semibold">We couldn't complete your booking</p>
                    <p>{failMsg}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button type="button" onClick={onClose} className="px-5 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center justify-center gap-2 bg-bali-blue hover:bg-bali-purple disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  {state === "sending" && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
                  {state === "sending" ? "Submitting…" : state === "error" ? "Try again" : needsPayment ? `Pay ${formatGBP(total)} & book` : "Confirm booking"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function inputCls(hasError: boolean) {
  return `w-full rounded-lg border px-3 py-2.5 text-sm bg-white focus:ring-2 focus:outline-none ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-bali-blue focus:ring-bali-blue/20"
  }`;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-sm text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}

function DetailBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
      <dt className="text-[11px] uppercase tracking-widest font-semibold text-gray-500">{label}</dt>
      <dd className="text-sm font-semibold text-bali-slate mt-0.5">{value}</dd>
    </div>
  );
}
