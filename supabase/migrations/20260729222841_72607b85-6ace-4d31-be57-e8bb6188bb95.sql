GRANT SELECT ON public.directory_profiles TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.directory_profiles TO authenticated;
GRANT ALL ON public.directory_profiles TO service_role;

GRANT SELECT ON public.directory_projects TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.directory_projects TO authenticated;
GRANT ALL ON public.directory_projects TO service_role;

GRANT SELECT ON public.workbooks_orgs TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.workbooks_orgs TO authenticated;
GRANT ALL ON public.workbooks_orgs TO service_role;

GRANT INSERT ON public.profile_stats_events TO anon, authenticated;
GRANT SELECT ON public.profile_stats_events TO authenticated;
GRANT ALL ON public.profile_stats_events TO service_role;