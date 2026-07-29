import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const BookingInput = z.object({
  eventSlug: z.string().min(1),
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(1).max(200),
  membershipTier: z.string().trim().min(1).max(120),
  membershipTierLabel: z.string().trim().min(1).max(200),
  attendees: z.number().int().min(1).max(100),
  dietary: z.string().trim().max(1000).optional().default(""),
  termsAccepted: z.literal(true),
  // Mock payment only — card details are NEVER stored or transmitted onward.
  // TODO: replace with a Stripe PaymentIntent / GoCardless mandate before go-live.
  payingByCard: z.boolean().default(false),
  cardName: z.string().trim().max(120).optional().default(""),
  cardLast4: z.string().trim().max(4).optional().default(""),
});

export type BookingResult = {
  ok: true;
  reference: string;
  amount: number;
  spacesRemaining: number | null;
};

const BOOKINGS_EMAIL = "Francesca.Bienek@bali.org.uk";

export const submitEventBooking = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => BookingInput.parse(d))
  .handler(async ({ data }): Promise<BookingResult> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: event, error: evErr } = await supabaseAdmin
      .from("events")
      .select("id, slug, title, date_text, start_time, end_time, venue, capacity, spaces_remaining, member_price, non_member_price, booking_enabled")
      .eq("slug", data.eventSlug)
      .maybeSingle();

    if (evErr) throw new Error(evErr.message);
    if (!event) throw new Error("That event could not be found.");
    if (event.booking_enabled === false) throw new Error("Booking is not open for this event.");

    const capacity = Number(event.capacity ?? 0);
    const remaining = event.spaces_remaining == null ? null : Number(event.spaces_remaining);
    if (capacity > 0 && remaining != null && remaining < data.attendees) {
      throw new Error(
        remaining <= 0
          ? "This event is now sold out."
          : `Only ${remaining} space${remaining === 1 ? "" : "s"} left for this event.`,
      );
    }

    // Price is resolved server-side from the event record — never trusted from the client.
    const memberTier = data.membershipTier !== "non_member";
    const unit = memberTier && event.member_price != null
      ? Number(event.member_price)
      : Number(event.non_member_price ?? 0);
    const amount = Number((unit * data.attendees).toFixed(2));

    const reference = `BALI-${Date.now().toString(36).toUpperCase()}`;
    const paid = amount > 0 && data.payingByCard;

    const { error: insErr } = await supabaseAdmin.from("workbooks_bookings").insert({
      event_id: event.id,
      event_slug: event.slug,
      attendee_name: data.fullName,
      attendee_email: data.email,
      company: data.company,
      membership_tier: data.membershipTierLabel,
      dietary_requirements: data.dietary || null,
      terms_accepted: true,
      places: data.attendees,
      amount,
      status: amount === 0 ? "Confirmed" : paid ? "Confirmed" : "Awaiting payment",
      // TODO: swap "mock_card" for the real gateway (Stripe / GoCardless) once wired.
      payment_provider: amount === 0 ? "free" : paid ? "mock_card" : "invoice",
      payment_ref: reference,
      paid_at: paid ? new Date().toISOString() : null,
      notes: data.cardName ? `Mock card payment — name on card: ${data.cardName}` : null,
    });
    if (insErr) throw new Error(insErr.message);

    const { data: after } = await supabaseAdmin
      .from("events")
      .select("spaces_remaining")
      .eq("id", event.id)
      .maybeSingle();
    const spacesRemaining = capacity > 0 ? Number(after?.spaces_remaining ?? 0) : null;

    // ---- notification email ------------------------------------------------
    // Sent through the Resend connector gateway. If the connector isn't linked
    // yet, the booking still succeeds and we log the failure.
    // TODO: link the Resend connection and verify a sending domain for BALI.
    try {
      const lovableKey = process.env.LOVABLE_API_KEY;
      const resendKey = process.env.RESEND_API_KEY;
      if (lovableKey && resendKey) {
        const rows: Array<[string, string]> = [
          ["Event", event.title],
          ["Event date", `${event.date_text}${event.start_time ? ` · ${event.start_time}${event.end_time ? `–${event.end_time}` : ""}` : ""}`],
          ["Venue", event.venue],
          ["Full name", data.fullName],
          ["Email", data.email],
          ["Company / organisation", data.company],
          ["Membership tier", data.membershipTierLabel],
          ["Number of attendees", String(data.attendees)],
          ["Dietary requirements", data.dietary || "None given"],
          ["Amount", amount === 0 ? "Free" : `£${amount.toFixed(2)}`],
          ["Payment", amount === 0 ? "N/A" : paid ? `Card (mock) — ref ${reference}` : `Invoice requested — ref ${reference}`],
          ["Booking reference", reference],
          ["Spaces remaining after this booking", spacesRemaining == null ? "Unlimited" : String(spacesRemaining)],
        ];
        const html = `<h2 style="font-family:Arial,sans-serif">New event booking</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#555"><strong>${k}</strong></td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`).join("\n")}
</table>`;

        const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": resendKey,
          },
          body: JSON.stringify({
            from: "BALI Events <onboarding@resend.dev>",
            to: [BOOKINGS_EMAIL],
            reply_to: data.email,
            subject: `New Booking: ${event.title} — ${data.fullName}`,
            html,
          }),
        });
        if (!res.ok) {
          console.error(`Booking email failed [${res.status}]: ${await res.text()}`);
        }
      } else {
        console.warn("Booking email skipped — Resend connector not linked.");
      }
    } catch (err) {
      console.error("Booking email error", err);
    }

    return { ok: true, reference, amount, spacesRemaining };
  });

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}
