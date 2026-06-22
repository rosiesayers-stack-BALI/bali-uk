
DROP POLICY IF EXISTS "Anyone can submit an application" ON public.membership_applications;
CREATE POLICY "Anyone can submit an application" ON public.membership_applications
  FOR INSERT WITH CHECK (
    applicant_email IS NOT NULL
    AND length(applicant_email) > 3
    AND category IN (
      'accredited_contractor','accredited_designer','accredited_supplier',
      'accredited_dso','accredited_group','accredited_international_contractor',
      'accredited_international_supplier','associate_contractor','associate_designer',
      'associate_individual','registered_designer','student','rolo_training_provider'
    )
  );

DROP POLICY IF EXISTS "Anyone can log a stat event" ON public.profile_stats_events;
CREATE POLICY "Anyone can log a stat event" ON public.profile_stats_events
  FOR INSERT WITH CHECK (
    wb_org_id IS NOT NULL
    AND length(wb_org_id) > 0
    AND event_type IN ('profile_view','search_appearance','login','website_click')
  );
