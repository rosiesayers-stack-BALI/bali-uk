
-- Trigger: on new enquiry, create matching application at "Enquiry received"
CREATE OR REPLACE FUNCTION public.create_application_from_enquiry()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_category text;
  v_history jsonb;
  v_payload jsonb;
  v_exists boolean;
BEGIN
  v_category := COALESCE(NULLIF(TRIM(NEW.category_interest), ''), 'unspecified');

  -- Skip if an application already exists for same email + category
  SELECT EXISTS(
    SELECT 1 FROM public.membership_applications
    WHERE lower(applicant_email) = lower(NEW.email)
      AND category = v_category
  ) INTO v_exists;
  IF v_exists THEN
    RETURN NEW;
  END IF;

  v_history := jsonb_build_array(jsonb_build_object(
    'id', 'h-' || extract(epoch from now())::bigint::text,
    'at', now(),
    'from', NULL,
    'to', 'Enquiry received',
    'by', 'System',
    'note', 'Auto-created from membership enquiry'
  ));

  v_payload := jsonb_build_object(
    'enquiry_id', NEW.id,
    'phone', COALESCE(NEW.phone, ''),
    'message', COALESCE(NEW.message, ''),
    'original_source', COALESCE(NEW.source, ''),
    'business_type', '',
    'revenue_band', ''
  );

  INSERT INTO public.membership_applications
    (category, applicant_name, applicant_email, company_name, payload, status, source, history)
  VALUES
    (v_category, NEW.name, NEW.email, NULLIF(NEW.company, ''), v_payload, 'Enquiry received', 'BALI Website', v_history);

  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_create_application_from_enquiry ON public.membership_enquiries;
CREATE TRIGGER trg_create_application_from_enquiry
AFTER INSERT ON public.membership_enquiries
FOR EACH ROW EXECUTE FUNCTION public.create_application_from_enquiry();

-- Backfill existing enquiries that lack a matching application
INSERT INTO public.membership_applications
  (category, applicant_name, applicant_email, company_name, payload, status, source, history, created_at)
SELECT
  COALESCE(NULLIF(TRIM(e.category_interest), ''), 'unspecified') AS category,
  e.name,
  e.email,
  NULLIF(e.company, ''),
  jsonb_build_object(
    'enquiry_id', e.id,
    'phone', COALESCE(e.phone, ''),
    'message', COALESCE(e.message, ''),
    'original_source', COALESCE(e.source, ''),
    'business_type', '',
    'revenue_band', ''
  ),
  'Enquiry received',
  'BALI Website',
  jsonb_build_array(jsonb_build_object(
    'id', 'h-backfill-' || e.id::text,
    'at', e.created_at,
    'from', NULL,
    'to', 'Enquiry received',
    'by', 'System',
    'note', 'Backfilled from membership enquiry'
  )),
  e.created_at
FROM public.membership_enquiries e
WHERE NOT EXISTS (
  SELECT 1 FROM public.membership_applications a
  WHERE lower(a.applicant_email) = lower(e.email)
    AND a.category = COALESCE(NULLIF(TRIM(e.category_interest), ''), 'unspecified')
);
