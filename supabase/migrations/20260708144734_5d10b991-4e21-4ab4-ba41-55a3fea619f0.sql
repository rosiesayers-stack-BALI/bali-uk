
CREATE OR REPLACE FUNCTION public.enforce_training_course_submission()
RETURNS trigger LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NOT private.is_admin(auth.uid()) THEN
      NEW.status := 'pending';
      NEW.submitted_by := auth.uid();
    END IF;
  ELSIF TG_OP = 'UPDATE' THEN
    IF NOT private.is_admin(auth.uid()) THEN
      NEW.status := OLD.status;
      NEW.reviewer_notes := OLD.reviewer_notes;
      NEW.submitted_by := OLD.submitted_by;
    END IF;
  END IF;
  RETURN NEW;
END $$;

REVOKE ALL ON FUNCTION public.enforce_training_course_submission() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.validate_training_course_status() FROM PUBLIC, anon, authenticated;
