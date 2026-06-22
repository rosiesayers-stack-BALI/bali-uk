
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC;
GRANT USAGE ON SCHEMA private TO postgres, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION private.is_admin(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role IN ('admin','editor'))
$$;

CREATE OR REPLACE FUNCTION private.user_owns_org(_org_id text)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.member_links WHERE user_id = auth.uid() AND wb_org_id = _org_id)
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.is_admin(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.user_owns_org(text) FROM PUBLIC;

-- news_articles
DROP POLICY IF EXISTS "Admins read all news" ON public.news_articles;
DROP POLICY IF EXISTS "Admins insert news" ON public.news_articles;
DROP POLICY IF EXISTS "Admins update news" ON public.news_articles;
DROP POLICY IF EXISTS "Admins delete news" ON public.news_articles;
CREATE POLICY "Admins read all news" ON public.news_articles FOR SELECT USING (private.is_admin(auth.uid()) OR (published = true));
CREATE POLICY "Admins insert news" ON public.news_articles FOR INSERT WITH CHECK (private.is_admin(auth.uid()));
CREATE POLICY "Admins update news" ON public.news_articles FOR UPDATE USING (private.is_admin(auth.uid()));
CREATE POLICY "Admins delete news" ON public.news_articles FOR DELETE USING (private.is_admin(auth.uid()));

-- events
DROP POLICY IF EXISTS "Admins read all events" ON public.events;
DROP POLICY IF EXISTS "Admins insert events" ON public.events;
DROP POLICY IF EXISTS "Admins update events" ON public.events;
DROP POLICY IF EXISTS "Admins delete events" ON public.events;
CREATE POLICY "Admins read all events" ON public.events FOR SELECT USING (private.is_admin(auth.uid()) OR (published = true));
CREATE POLICY "Admins insert events" ON public.events FOR INSERT WITH CHECK (private.is_admin(auth.uid()));
CREATE POLICY "Admins update events" ON public.events FOR UPDATE USING (private.is_admin(auth.uid()));
CREATE POLICY "Admins delete events" ON public.events FOR DELETE USING (private.is_admin(auth.uid()));

-- policy_posts
DROP POLICY IF EXISTS "Admins read all policy" ON public.policy_posts;
DROP POLICY IF EXISTS "Admins insert policy" ON public.policy_posts;
DROP POLICY IF EXISTS "Admins update policy" ON public.policy_posts;
DROP POLICY IF EXISTS "Admins delete policy" ON public.policy_posts;
CREATE POLICY "Admins read all policy" ON public.policy_posts FOR SELECT USING (private.is_admin(auth.uid()) OR (published = true));
CREATE POLICY "Admins insert policy" ON public.policy_posts FOR INSERT WITH CHECK (private.is_admin(auth.uid()));
CREATE POLICY "Admins update policy" ON public.policy_posts FOR UPDATE USING (private.is_admin(auth.uid()));
CREATE POLICY "Admins delete policy" ON public.policy_posts FOR DELETE USING (private.is_admin(auth.uid()));

-- training_courses
DROP POLICY IF EXISTS "Admins read all courses" ON public.training_courses;
DROP POLICY IF EXISTS "Admins insert courses" ON public.training_courses;
DROP POLICY IF EXISTS "Admins update courses" ON public.training_courses;
DROP POLICY IF EXISTS "Admins delete courses" ON public.training_courses;
CREATE POLICY "Admins read all courses" ON public.training_courses FOR SELECT USING (private.is_admin(auth.uid()) OR (published = true));
CREATE POLICY "Admins insert courses" ON public.training_courses FOR INSERT WITH CHECK (private.is_admin(auth.uid()));
CREATE POLICY "Admins update courses" ON public.training_courses FOR UPDATE USING (private.is_admin(auth.uid()));
CREATE POLICY "Admins delete courses" ON public.training_courses FOR DELETE USING (private.is_admin(auth.uid()));

-- member_links
DROP POLICY IF EXISTS "Admins manage member links" ON public.member_links;
CREATE POLICY "Admins manage member links" ON public.member_links FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- workbooks_orgs
DROP POLICY IF EXISTS "Owners see their org" ON public.workbooks_orgs;
DROP POLICY IF EXISTS "Admins manage orgs" ON public.workbooks_orgs;
CREATE POLICY "Owners see their org" ON public.workbooks_orgs FOR SELECT USING (private.user_owns_org(wb_id));
CREATE POLICY "Admins manage orgs" ON public.workbooks_orgs FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- workbooks_people
DROP POLICY IF EXISTS "Members see people in their org" ON public.workbooks_people;
DROP POLICY IF EXISTS "Admins manage people" ON public.workbooks_people;
CREATE POLICY "Members see people in their org" ON public.workbooks_people FOR SELECT USING (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage people" ON public.workbooks_people FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- workbooks_invoices
DROP POLICY IF EXISTS "Members see their org invoices" ON public.workbooks_invoices;
DROP POLICY IF EXISTS "Admins manage invoices" ON public.workbooks_invoices;
CREATE POLICY "Members see their org invoices" ON public.workbooks_invoices FOR SELECT USING (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage invoices" ON public.workbooks_invoices FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- workbooks_bookings
DROP POLICY IF EXISTS "Members see their bookings" ON public.workbooks_bookings;
DROP POLICY IF EXISTS "Members create bookings for their org" ON public.workbooks_bookings;
DROP POLICY IF EXISTS "Admins manage bookings" ON public.workbooks_bookings;
CREATE POLICY "Members see their bookings" ON public.workbooks_bookings FOR SELECT USING (private.user_owns_org(wb_org_id));
CREATE POLICY "Members create bookings for their org" ON public.workbooks_bookings FOR INSERT WITH CHECK (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage bookings" ON public.workbooks_bookings FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- workbooks_opportunities
DROP POLICY IF EXISTS "Members see their opportunities" ON public.workbooks_opportunities;
DROP POLICY IF EXISTS "Admins manage opportunities" ON public.workbooks_opportunities;
CREATE POLICY "Members see their opportunities" ON public.workbooks_opportunities FOR SELECT USING (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage opportunities" ON public.workbooks_opportunities FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- workbooks_sync_runs
DROP POLICY IF EXISTS "Admins view sync runs" ON public.workbooks_sync_runs;
CREATE POLICY "Admins view sync runs" ON public.workbooks_sync_runs FOR SELECT USING (private.is_admin(auth.uid()));

-- directory_profiles
DROP POLICY IF EXISTS "Owners edit their profile" ON public.directory_profiles;
DROP POLICY IF EXISTS "Admins manage profiles" ON public.directory_profiles;
CREATE POLICY "Owners edit their profile" ON public.directory_profiles FOR ALL USING (private.user_owns_org(wb_org_id)) WITH CHECK (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage profiles" ON public.directory_profiles FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- directory_projects
DROP POLICY IF EXISTS "Owners edit projects" ON public.directory_projects;
DROP POLICY IF EXISTS "Admins manage projects" ON public.directory_projects;
CREATE POLICY "Owners edit projects" ON public.directory_projects FOR ALL USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_projects.profile_id AND private.user_owns_org(p.wb_org_id))) WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_projects.profile_id AND private.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage projects" ON public.directory_projects FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- directory_team
DROP POLICY IF EXISTS "Owners edit team" ON public.directory_team;
DROP POLICY IF EXISTS "Admins manage team" ON public.directory_team;
CREATE POLICY "Owners edit team" ON public.directory_team FOR ALL USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_team.profile_id AND private.user_owns_org(p.wb_org_id))) WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_team.profile_id AND private.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage team" ON public.directory_team FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- directory_accreditations
DROP POLICY IF EXISTS "Owners edit accreditations" ON public.directory_accreditations;
DROP POLICY IF EXISTS "Admins manage accreditations" ON public.directory_accreditations;
CREATE POLICY "Owners edit accreditations" ON public.directory_accreditations FOR ALL USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_accreditations.profile_id AND private.user_owns_org(p.wb_org_id))) WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_accreditations.profile_id AND private.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage accreditations" ON public.directory_accreditations FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- directory_testimonials
DROP POLICY IF EXISTS "Owners edit testimonials" ON public.directory_testimonials;
DROP POLICY IF EXISTS "Admins manage testimonials" ON public.directory_testimonials;
CREATE POLICY "Owners edit testimonials" ON public.directory_testimonials FOR ALL USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_testimonials.profile_id AND private.user_owns_org(p.wb_org_id))) WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = directory_testimonials.profile_id AND private.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage testimonials" ON public.directory_testimonials FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- membership_applications
DROP POLICY IF EXISTS "Admins view applications" ON public.membership_applications;
DROP POLICY IF EXISTS "Admins update applications" ON public.membership_applications;
CREATE POLICY "Admins view applications" ON public.membership_applications FOR SELECT USING (private.is_admin(auth.uid()));
CREATE POLICY "Admins update applications" ON public.membership_applications FOR UPDATE USING (private.is_admin(auth.uid()));

-- documents
DROP POLICY IF EXISTS "Admins manage documents" ON public.documents;
CREATE POLICY "Admins manage documents" ON public.documents FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- benefits
DROP POLICY IF EXISTS "Admins manage benefits" ON public.benefits;
CREATE POLICY "Admins manage benefits" ON public.benefits FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- member_submissions
DROP POLICY IF EXISTS "Members submit content for their org" ON public.member_submissions;
DROP POLICY IF EXISTS "Members see their own submissions" ON public.member_submissions;
DROP POLICY IF EXISTS "Admins manage submissions" ON public.member_submissions;
CREATE POLICY "Members submit content for their org" ON public.member_submissions FOR INSERT WITH CHECK (private.user_owns_org(wb_org_id));
CREATE POLICY "Members see their own submissions" ON public.member_submissions FOR SELECT USING (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage submissions" ON public.member_submissions FOR ALL USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- profile_stats_events
DROP POLICY IF EXISTS "Owners see their stats" ON public.profile_stats_events;
DROP POLICY IF EXISTS "Admins see all stats" ON public.profile_stats_events;
CREATE POLICY "Owners see their stats" ON public.profile_stats_events FOR SELECT USING (private.user_owns_org(wb_org_id));
CREATE POLICY "Admins see all stats" ON public.profile_stats_events FOR SELECT USING (private.is_admin(auth.uid()));

-- storage.objects (content-images bucket)
DROP POLICY IF EXISTS "Admins upload content images" ON storage.objects;
DROP POLICY IF EXISTS "Admins update content images" ON storage.objects;
DROP POLICY IF EXISTS "Admins delete content images" ON storage.objects;
CREATE POLICY "Admins upload content images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'content-images' AND private.is_admin(auth.uid()));
CREATE POLICY "Admins update content images" ON storage.objects FOR UPDATE USING (bucket_id = 'content-images' AND private.is_admin(auth.uid())) WITH CHECK (bucket_id = 'content-images' AND private.is_admin(auth.uid()));
CREATE POLICY "Admins delete content images" ON storage.objects FOR DELETE USING (bucket_id = 'content-images' AND private.is_admin(auth.uid()));

-- Drop public-schema helpers
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
DROP FUNCTION IF EXISTS public.is_admin(uuid);
DROP FUNCTION IF EXISTS public.user_owns_org(text);

REVOKE ALL ON FUNCTION public.claim_first_admin() FROM PUBLIC;
