
-- 1. Add columns
ALTER TABLE public.training_courses
  ADD COLUMN IF NOT EXISTS profile_id uuid REFERENCES public.directory_profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS category text,
  ADD COLUMN IF NOT EXISTS duration text,
  ADD COLUMN IF NOT EXISTS format text,
  ADD COLUMN IF NOT EXISTS location text,
  ADD COLUMN IF NOT EXISTS cost text,
  ADD COLUMN IF NOT EXISTS booking_url text,
  ADD COLUMN IF NOT EXISTS contact_email text,
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'published',
  ADD COLUMN IF NOT EXISTS reviewer_notes text,
  ADD COLUMN IF NOT EXISTS submitted_by uuid;

-- Backfill: existing rows are already published (imported by staff).
UPDATE public.training_courses SET status = 'published' WHERE status IS NULL OR status = '';

-- Status validation via trigger (avoids immutable CHECK issues)
CREATE OR REPLACE FUNCTION public.validate_training_course_status()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.status NOT IN ('pending','published','rejected','changes_requested') THEN
    RAISE EXCEPTION 'Invalid training course status: %', NEW.status;
  END IF;
  -- Keep legacy published flag in sync
  NEW.published := (NEW.status = 'published');
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_training_validate_status ON public.training_courses;
CREATE TRIGGER trg_training_validate_status
  BEFORE INSERT OR UPDATE ON public.training_courses
  FOR EACH ROW EXECUTE FUNCTION public.validate_training_course_status();

-- Provider-submitted rows must start as 'pending'. Only admins can set other statuses.
CREATE OR REPLACE FUNCTION public.enforce_training_course_submission()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NOT private.is_admin(auth.uid()) THEN
      NEW.status := 'pending';
      NEW.submitted_by := auth.uid();
    END IF;
  ELSIF TG_OP = 'UPDATE' THEN
    -- Non-admins cannot change status/reviewer_notes
    IF NOT private.is_admin(auth.uid()) THEN
      NEW.status := OLD.status;
      NEW.reviewer_notes := OLD.reviewer_notes;
      NEW.submitted_by := OLD.submitted_by;
    END IF;
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_training_enforce_submission ON public.training_courses;
CREATE TRIGGER trg_training_enforce_submission
  BEFORE INSERT OR UPDATE ON public.training_courses
  FOR EACH ROW EXECUTE FUNCTION public.enforce_training_course_submission();

-- Update public SELECT policy to use status
DROP POLICY IF EXISTS "Anyone can read published courses" ON public.training_courses;
CREATE POLICY "Anyone can read published courses"
  ON public.training_courses FOR SELECT TO anon
  USING (status = 'published');

DROP POLICY IF EXISTS "Admins read all courses" ON public.training_courses;
CREATE POLICY "Admins read all courses"
  ON public.training_courses FOR SELECT
  USING (private.is_admin(auth.uid()) OR status = 'published');

-- Owner (Training Provider) policies via directory_profiles.wb_org_id ownership
CREATE POLICY "Providers read own courses"
  ON public.training_courses FOR SELECT TO authenticated
  USING (
    profile_id IS NOT NULL AND EXISTS (
      SELECT 1 FROM public.directory_profiles dp
      WHERE dp.id = training_courses.profile_id
        AND private.user_owns_org(dp.wb_org_id)
    )
  );

CREATE POLICY "Providers insert own courses"
  ON public.training_courses FOR INSERT TO authenticated
  WITH CHECK (
    profile_id IS NOT NULL AND EXISTS (
      SELECT 1 FROM public.directory_profiles dp
      WHERE dp.id = training_courses.profile_id
        AND private.user_owns_org(dp.wb_org_id)
    )
  );

CREATE POLICY "Providers update own courses"
  ON public.training_courses FOR UPDATE TO authenticated
  USING (
    profile_id IS NOT NULL AND EXISTS (
      SELECT 1 FROM public.directory_profiles dp
      WHERE dp.id = training_courses.profile_id
        AND private.user_owns_org(dp.wb_org_id)
    )
  )
  WITH CHECK (
    profile_id IS NOT NULL AND EXISTS (
      SELECT 1 FROM public.directory_profiles dp
      WHERE dp.id = training_courses.profile_id
        AND private.user_owns_org(dp.wb_org_id)
    )
  );

CREATE POLICY "Providers delete own courses"
  ON public.training_courses FOR DELETE TO authenticated
  USING (
    profile_id IS NOT NULL AND EXISTS (
      SELECT 1 FROM public.directory_profiles dp
      WHERE dp.id = training_courses.profile_id
        AND private.user_owns_org(dp.wb_org_id)
    )
  );

GRANT SELECT, INSERT, UPDATE, DELETE ON public.training_courses TO authenticated;
