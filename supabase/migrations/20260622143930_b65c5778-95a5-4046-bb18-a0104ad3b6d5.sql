
-- =================================================================
-- BALI Week 1: Workbooks mirror + directory CMS + applications + gated content
-- =================================================================

-- --- helper: link an auth user to a Workbooks org ------------------
CREATE TABLE public.member_links (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  wb_person_id text,
  wb_org_id text,
  member_category text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.member_links TO authenticated;
GRANT ALL ON public.member_links TO service_role;
ALTER TABLE public.member_links ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users see their own member link" ON public.member_links
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins manage member links" ON public.member_links
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_member_links_updated BEFORE UPDATE ON public.member_links
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- --- helper: is current user linked to this org? -------------------
CREATE OR REPLACE FUNCTION public.user_owns_org(_org_id text)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.member_links
    WHERE user_id = auth.uid() AND wb_org_id = _org_id
  )
$$;

-- =================================================================
-- WORKBOOKS MIRROR TABLES (pulled hourly)
-- Keep a raw jsonb blob plus extracted commonly-used columns so
-- the sync can evolve without schema churn.
-- =================================================================

CREATE TABLE public.workbooks_orgs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_id text UNIQUE NOT NULL,
  name text NOT NULL,
  category text,
  status text,
  vat_number text,
  reg_number text,
  address_line1 text,
  address_line2 text,
  town text,
  county text,
  postcode text,
  country text,
  region text,
  disciplines jsonb DEFAULT '[]'::jsonb,
  phone text,
  public_email text,
  website text,
  exclude_from_promotion boolean DEFAULT false,
  raw jsonb,
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.workbooks_orgs TO anon, authenticated;
GRANT ALL ON public.workbooks_orgs TO service_role;
ALTER TABLE public.workbooks_orgs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active orgs are public" ON public.workbooks_orgs
  FOR SELECT USING (status = 'Active Member' AND COALESCE(exclude_from_promotion, false) = false);
CREATE POLICY "Owners see their org" ON public.workbooks_orgs
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_id));
CREATE POLICY "Admins manage orgs" ON public.workbooks_orgs
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE INDEX idx_wb_orgs_category ON public.workbooks_orgs(category);
CREATE INDEX idx_wb_orgs_status ON public.workbooks_orgs(status);
CREATE INDEX idx_wb_orgs_region ON public.workbooks_orgs(region);
CREATE TRIGGER trg_wb_orgs_updated BEFORE UPDATE ON public.workbooks_orgs
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TABLE public.workbooks_people (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_id text UNIQUE NOT NULL,
  wb_org_id text,
  name text,
  email text,
  phone text,
  is_main_contact boolean DEFAULT false,
  login_email text,
  raw jsonb,
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.workbooks_people TO authenticated;
GRANT ALL ON public.workbooks_people TO service_role;
ALTER TABLE public.workbooks_people ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members see people in their org" ON public.workbooks_people
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage people" ON public.workbooks_people
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE INDEX idx_wb_people_org ON public.workbooks_people(wb_org_id);
CREATE INDEX idx_wb_people_email ON public.workbooks_people(lower(email));
CREATE TRIGGER trg_wb_people_updated BEFORE UPDATE ON public.workbooks_people
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TABLE public.workbooks_invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_id text UNIQUE NOT NULL,
  wb_org_id text,
  reference text,
  amount numeric(12,2),
  status text,
  smartcard_ref text,
  issued_at timestamptz,
  raw jsonb,
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.workbooks_invoices TO authenticated;
GRANT ALL ON public.workbooks_invoices TO service_role;
ALTER TABLE public.workbooks_invoices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members see their org invoices" ON public.workbooks_invoices
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage invoices" ON public.workbooks_invoices
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE INDEX idx_wb_invoices_org ON public.workbooks_invoices(wb_org_id);

CREATE TABLE public.workbooks_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_id text UNIQUE,
  wb_person_id text,
  wb_org_id text,
  event_id uuid REFERENCES public.events(id) ON DELETE SET NULL,
  event_slug text,
  attendee_name text,
  attendee_email text,
  status text NOT NULL DEFAULT 'pending', -- pending|paid|confirmed|cancelled|failed
  amount numeric(12,2),
  paid_at timestamptz,
  payment_ref text,
  payment_provider text DEFAULT 'global_payments',
  notes text,
  raw jsonb,
  synced_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.workbooks_bookings TO authenticated;
GRANT ALL ON public.workbooks_bookings TO service_role;
ALTER TABLE public.workbooks_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members see their bookings" ON public.workbooks_bookings
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_org_id));
CREATE POLICY "Members create bookings for their org" ON public.workbooks_bookings
  FOR INSERT TO authenticated WITH CHECK (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage bookings" ON public.workbooks_bookings
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE INDEX idx_wb_bookings_org ON public.workbooks_bookings(wb_org_id);
CREATE INDEX idx_wb_bookings_event ON public.workbooks_bookings(event_id);
CREATE TRIGGER trg_wb_bookings_updated BEFORE UPDATE ON public.workbooks_bookings
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TABLE public.workbooks_opportunities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_id text UNIQUE NOT NULL,
  wb_org_id text,
  title text,
  stage text,
  amount numeric(12,2),
  raw jsonb,
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.workbooks_opportunities TO authenticated;
GRANT ALL ON public.workbooks_opportunities TO service_role;
ALTER TABLE public.workbooks_opportunities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members see their opportunities" ON public.workbooks_opportunities
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage opportunities" ON public.workbooks_opportunities
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- =================================================================
-- SYNC HEALTH LOG
-- =================================================================
CREATE TABLE public.workbooks_sync_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  started_at timestamptz NOT NULL DEFAULT now(),
  finished_at timestamptz,
  status text NOT NULL DEFAULT 'running', -- running|ok|error
  pulled jsonb DEFAULT '{}'::jsonb,
  pushed jsonb DEFAULT '{}'::jsonb,
  error_message text
);
GRANT SELECT ON public.workbooks_sync_runs TO authenticated;
GRANT ALL ON public.workbooks_sync_runs TO service_role;
ALTER TABLE public.workbooks_sync_runs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view sync runs" ON public.workbooks_sync_runs
  FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));

-- =================================================================
-- DIRECTORY CMS (member-editable profile content)
-- =================================================================
CREATE TABLE public.directory_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_org_id text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  about text,
  whos_who text, -- 70-word blurb
  logo_url text,
  banner_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.directory_profiles TO anon, authenticated;
GRANT INSERT, UPDATE ON public.directory_profiles TO authenticated;
GRANT ALL ON public.directory_profiles TO service_role;
ALTER TABLE public.directory_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are public" ON public.directory_profiles FOR SELECT USING (true);
CREATE POLICY "Owners edit their profile" ON public.directory_profiles
  FOR ALL TO authenticated USING (public.user_owns_org(wb_org_id)) WITH CHECK (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage profiles" ON public.directory_profiles
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_dir_profiles_updated BEFORE UPDATE ON public.directory_profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TABLE public.directory_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.directory_profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  images jsonb DEFAULT '[]'::jsonb,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.directory_projects TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.directory_projects TO authenticated;
GRANT ALL ON public.directory_projects TO service_role;
ALTER TABLE public.directory_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Projects are public" ON public.directory_projects FOR SELECT USING (true);
CREATE POLICY "Owners edit projects" ON public.directory_projects
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)))
  WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage projects" ON public.directory_projects
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_dir_projects_updated BEFORE UPDATE ON public.directory_projects
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TABLE public.directory_team (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.directory_profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  role text,
  photo_url text,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.directory_team TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.directory_team TO authenticated;
GRANT ALL ON public.directory_team TO service_role;
ALTER TABLE public.directory_team ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Team is public" ON public.directory_team FOR SELECT USING (true);
CREATE POLICY "Owners edit team" ON public.directory_team
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)))
  WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage team" ON public.directory_team
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

CREATE TABLE public.directory_accreditations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.directory_profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  logo_url text,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.directory_accreditations TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.directory_accreditations TO authenticated;
GRANT ALL ON public.directory_accreditations TO service_role;
ALTER TABLE public.directory_accreditations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Accreditations are public" ON public.directory_accreditations FOR SELECT USING (true);
CREATE POLICY "Owners edit accreditations" ON public.directory_accreditations
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)))
  WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage accreditations" ON public.directory_accreditations
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

CREATE TABLE public.directory_testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.directory_profiles(id) ON DELETE CASCADE,
  quote text NOT NULL,
  author text,
  images jsonb DEFAULT '[]'::jsonb,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.directory_testimonials TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.directory_testimonials TO authenticated;
GRANT ALL ON public.directory_testimonials TO service_role;
ALTER TABLE public.directory_testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Testimonials are public" ON public.directory_testimonials FOR SELECT USING (true);
CREATE POLICY "Owners edit testimonials" ON public.directory_testimonials
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)))
  WITH CHECK (EXISTS (SELECT 1 FROM public.directory_profiles p WHERE p.id = profile_id AND public.user_owns_org(p.wb_org_id)));
CREATE POLICY "Admins manage testimonials" ON public.directory_testimonials
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- =================================================================
-- MEMBERSHIP APPLICATIONS (13 categories, all via JSON payload)
-- =================================================================
CREATE TABLE public.membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  applicant_name text,
  applicant_email text NOT NULL,
  company_name text,
  payload jsonb NOT NULL,
  file_uploads jsonb DEFAULT '[]'::jsonb,
  status text NOT NULL DEFAULT 'submitted', -- submitted|in_review|accepted|rejected|pushed
  workbooks_lead_id text,
  pushed_at timestamptz,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.membership_applications TO anon, authenticated;
GRANT SELECT, UPDATE ON public.membership_applications TO authenticated;
GRANT ALL ON public.membership_applications TO service_role;
ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an application" ON public.membership_applications
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins view applications" ON public.membership_applications
  FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins update applications" ON public.membership_applications
  FOR UPDATE TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_apps_updated BEFORE UPDATE ON public.membership_applications
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- =================================================================
-- GATED DOCUMENTS & BENEFITS (visibility by member category)
-- =================================================================
CREATE TABLE public.documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  file_path text NOT NULL, -- storage object path
  category text, -- e.g. 'health-safety', 'legal'
  allowed_member_types text[] DEFAULT '{}'::text[], -- empty = members only (any active)
  public boolean DEFAULT false,
  published boolean DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.documents TO authenticated;
GRANT SELECT ON public.documents TO anon;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
-- Metadata visible to all; file fetch is gated server-side via signed URLs.
CREATE POLICY "Document metadata viewable" ON public.documents FOR SELECT USING (published = true);
CREATE POLICY "Admins manage documents" ON public.documents
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_documents_updated BEFORE UPDATE ON public.documents
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TABLE public.benefits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  body text,
  category text,
  allowed_member_types text[] DEFAULT '{}'::text[],
  published boolean DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.benefits TO authenticated;
GRANT ALL ON public.benefits TO service_role;
ALTER TABLE public.benefits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Benefits visible to authenticated" ON public.benefits FOR SELECT TO authenticated USING (published = true);
CREATE POLICY "Admins manage benefits" ON public.benefits
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_benefits_updated BEFORE UPDATE ON public.benefits
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- =================================================================
-- MEMBER-AUTHORED NEWS & EVENTS (moderation queue)
-- =================================================================
CREATE TABLE public.member_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('news', 'event')),
  wb_org_id text NOT NULL,
  submitted_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  title text NOT NULL,
  payload jsonb NOT NULL,
  status text NOT NULL DEFAULT 'pending', -- pending|approved|rejected
  reviewer_notes text,
  published_id uuid, -- id in news_articles or events once published
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT, SELECT ON public.member_submissions TO authenticated;
GRANT ALL ON public.member_submissions TO service_role;
ALTER TABLE public.member_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members submit content for their org" ON public.member_submissions
  FOR INSERT TO authenticated WITH CHECK (public.user_owns_org(wb_org_id));
CREATE POLICY "Members see their own submissions" ON public.member_submissions
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins manage submissions" ON public.member_submissions
  FOR ALL TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE TRIGGER trg_member_sub_updated BEFORE UPDATE ON public.member_submissions
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- =================================================================
-- PROFILE STATS (analytics per member org)
-- =================================================================
CREATE TABLE public.profile_stats_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wb_org_id text NOT NULL,
  event_type text NOT NULL, -- profile_view | search_appearance | login | website_click
  occurred_at timestamptz NOT NULL DEFAULT now(),
  meta jsonb DEFAULT '{}'::jsonb
);
GRANT INSERT ON public.profile_stats_events TO anon, authenticated;
GRANT SELECT ON public.profile_stats_events TO authenticated;
GRANT ALL ON public.profile_stats_events TO service_role;
ALTER TABLE public.profile_stats_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can log a stat event" ON public.profile_stats_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Owners see their stats" ON public.profile_stats_events
  FOR SELECT TO authenticated USING (public.user_owns_org(wb_org_id));
CREATE POLICY "Admins see all stats" ON public.profile_stats_events
  FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
CREATE INDEX idx_stats_org_time ON public.profile_stats_events(wb_org_id, occurred_at DESC);
