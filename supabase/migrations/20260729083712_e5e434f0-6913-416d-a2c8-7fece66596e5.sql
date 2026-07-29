
ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS spaces_remaining integer;

UPDATE public.events SET spaces_remaining = capacity WHERE spaces_remaining IS NULL;

ALTER TABLE public.workbooks_bookings
  ADD COLUMN IF NOT EXISTS company text,
  ADD COLUMN IF NOT EXISTS membership_tier text,
  ADD COLUMN IF NOT EXISTS dietary_requirements text,
  ADD COLUMN IF NOT EXISTS terms_accepted boolean NOT NULL DEFAULT false;

CREATE OR REPLACE FUNCTION public.decrement_event_spaces()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  cap integer;
  remaining integer;
BEGIN
  IF NEW.event_id IS NULL THEN
    RETURN NEW;
  END IF;

  SELECT capacity, COALESCE(spaces_remaining, capacity)
    INTO cap, remaining
  FROM public.events WHERE id = NEW.event_id
  FOR UPDATE;

  -- capacity 0 means unlimited
  IF cap IS NULL OR cap = 0 THEN
    RETURN NEW;
  END IF;

  IF remaining < NEW.places THEN
    RAISE EXCEPTION 'Only % space(s) left for this event', remaining;
  END IF;

  UPDATE public.events
     SET spaces_remaining = remaining - NEW.places
   WHERE id = NEW.event_id;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_bookings_decrement_spaces ON public.workbooks_bookings;
CREATE TRIGGER trg_bookings_decrement_spaces
AFTER INSERT ON public.workbooks_bookings
FOR EACH ROW EXECUTE FUNCTION public.decrement_event_spaces();
