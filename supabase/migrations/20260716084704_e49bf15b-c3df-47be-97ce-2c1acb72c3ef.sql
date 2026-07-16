
-- Extend events with booking + pricing metadata
ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS start_time text,
  ADD COLUMN IF NOT EXISTS end_time text,
  ADD COLUMN IF NOT EXISTS member_price numeric(10,2),
  ADD COLUMN IF NOT EXISTS non_member_price numeric(10,2),
  ADD COLUMN IF NOT EXISTS booking_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS capacity integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS payment_options jsonb NOT NULL DEFAULT '{"card":true,"invoice":true}'::jsonb;

-- Extend workbooks_bookings for public booking flow + attendance tracking
ALTER TABLE public.workbooks_bookings
  ADD COLUMN IF NOT EXISTS places integer NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS attended boolean NOT NULL DEFAULT false;

-- Allow public event booking submissions (mock payment flow). Anyone can create
-- a booking row for a valid event; SELECT stays gated by existing policies
-- (admins see all, members see their own via member_links).
DROP POLICY IF EXISTS "Public can create bookings" ON public.workbooks_bookings;
CREATE POLICY "Public can create bookings"
  ON public.workbooks_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (event_id IS NOT NULL AND attendee_email IS NOT NULL);

-- Make sure Data API can hit these tables for the booking flow
GRANT INSERT ON public.workbooks_bookings TO anon, authenticated;
GRANT SELECT, UPDATE ON public.workbooks_bookings TO authenticated;
GRANT ALL ON public.workbooks_bookings TO service_role;

-- Seed sample pricing on a couple of events so the flow is demoable
UPDATE public.events SET member_price = 45, non_member_price = 75, start_time = '09:30', end_time = '15:30', capacity = 60
  WHERE slug = 'supplier-forum-event-the-way-of-the-modern-world-how-to-build-a-7016';
UPDATE public.events SET member_price = 30, non_member_price = 45, start_time = '19:00', end_time = '22:00', capacity = 80
  WHERE slug = 'bali-chalk-open-mic-night-7157';
UPDATE public.events SET member_price = 0, non_member_price = 0, booking_enabled = true, start_time = '11:00', end_time = '12:00'
  WHERE slug LIKE 'get-more-from-your-bali-membership-%';
