
-- =========================================================================
-- Phase 1: extend existing schema for real member/org/application data.
-- Additive only. Does not touch seeded news_articles/events rows.
-- =========================================================================

-- ---------- workbooks_orgs: membership/QSR + presentation fields ----------
ALTER TABLE public.workbooks_orgs
  ADD COLUMN IF NOT EXISTS description         text,
  ADD COLUMN IF NOT EXISTS membership_expires_at date,
  ADD COLUMN IF NOT EXISTS next_qsr_due        date,
  ADD COLUMN IF NOT EXISTS logo_url            text,
  ADD COLUMN IF NOT EXISTS banner_url          text,
  ADD COLUMN IF NOT EXISTS socials             jsonb NOT NULL DEFAULT '{}'::jsonb;

-- ---------- workbooks_people: extended member profile fields --------------
ALTER TABLE public.workbooks_people
  ADD COLUMN IF NOT EXISTS title          text,
  ADD COLUMN IF NOT EXISTS first_name     text,
  ADD COLUMN IF NOT EXISTS last_name      text,
  ADD COLUMN IF NOT EXISTS job_title      text,
  ADD COLUMN IF NOT EXISTS mobile         text,
  ADD COLUMN IF NOT EXISTS address_line1  text,
  ADD COLUMN IF NOT EXISTS address_line2  text,
  ADD COLUMN IF NOT EXISTS town           text,
  ADD COLUMN IF NOT EXISTS county         text,
  ADD COLUMN IF NOT EXISTS postcode       text,
  ADD COLUMN IF NOT EXISTS country        text,
  ADD COLUMN IF NOT EXISTS newsletter_opts jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS contact_role   text NOT NULL DEFAULT 'nominated';

-- Backfill contact_role from existing is_main_contact flag.
UPDATE public.workbooks_people
   SET contact_role = CASE WHEN COALESCE(is_main_contact, false) THEN 'main' ELSE 'nominated' END
 WHERE contact_role IS NULL OR contact_role NOT IN ('main','nominated');

ALTER TABLE public.workbooks_people
  DROP CONSTRAINT IF EXISTS workbooks_people_contact_role_check;
ALTER TABLE public.workbooks_people
  ADD CONSTRAINT workbooks_people_contact_role_check
  CHECK (contact_role IN ('main','nominated'));

-- ---------- membership_applications: real pipeline fields -----------------
ALTER TABLE public.membership_applications
  ADD COLUMN IF NOT EXISTS wb_org_id         text,
  ADD COLUMN IF NOT EXISTS applicant_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS source            text NOT NULL DEFAULT 'BALI Website',
  ADD COLUMN IF NOT EXISTS payment_method    text NOT NULL DEFAULT 'Not set',
  ADD COLUMN IF NOT EXISTS fee_status        text NOT NULL DEFAULT 'N/A',
  ADD COLUMN IF NOT EXISTS onboarding_status text NOT NULL DEFAULT 'Not started',
  ADD COLUMN IF NOT EXISTS application_link  text,
  ADD COLUMN IF NOT EXISTS onboarding_link   text,
  ADD COLUMN IF NOT EXISTS notes_log         jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS refs              jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS docs              jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS history           jsonb NOT NULL DEFAULT '[]'::jsonb;

-- Members should be able to see their own submitted applications.
DROP POLICY IF EXISTS "Members see their own applications" ON public.membership_applications;
CREATE POLICY "Members see their own applications" ON public.membership_applications
  FOR SELECT TO authenticated
  USING (applicant_user_id = auth.uid());

-- ---------- membership_categories: the canonical 13 -----------------------
CREATE TABLE IF NOT EXISTS public.membership_categories (
  id           text PRIMARY KEY,
  label        text NOT NULL,
  tier         text NOT NULL,
  description  text,
  fees         jsonb NOT NULL DEFAULT '{}'::jsonb,
  sort_order   integer NOT NULL DEFAULT 0,
  created_at   timestamp with time zone NOT NULL DEFAULT now(),
  updated_at   timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.membership_categories TO anon, authenticated;
GRANT ALL    ON public.membership_categories TO service_role;

ALTER TABLE public.membership_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Categories are public"      ON public.membership_categories;
CREATE POLICY "Categories are public"
  ON public.membership_categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admins manage categories"   ON public.membership_categories;
CREATE POLICY "Admins manage categories"
  ON public.membership_categories
  USING (private.is_admin(auth.uid()))
  WITH CHECK (private.is_admin(auth.uid()));

DROP TRIGGER IF EXISTS trg_mem_cats_touch ON public.membership_categories;
CREATE TRIGGER trg_mem_cats_touch
  BEFORE UPDATE ON public.membership_categories
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Seed the 13 real categories with their 2026-27 fee schedule (JSONB).
INSERT INTO public.membership_categories (id, label, tier, description, fees, sort_order)
VALUES
  ('accredited_contractor',        'Accredited Contractor',         'Accredited',
   'For landscape contractors, banded by annual turnover.',
   '{"bands":[
       {"code":"C2","label":"£0-£100k","applicationFee":126.00,"annualFee":641.00},
       {"code":"C3","label":"£100k-£250k","applicationFee":189.00,"annualFee":966.00},
       {"code":"C4","label":"£250k-£1m","applicationFee":315.00,"annualFee":1257.00},
       {"code":"C5","label":"£1m-£2.5m","applicationFee":367.00,"annualFee":1515.00},
       {"code":"C6","label":"£2.5m-£5m","applicationFee":420.00,"annualFee":1777.00},
       {"code":"C7","label":"£5m-£10m","applicationFee":472.50,"annualFee":2018.00},
       {"code":"C8","label":"£10m-£20m","applicationFee":577.50,"annualFee":2525.00},
       {"code":"C9","label":"£20m-£40m","applicationFee":682.50,"annualFee":3287.00},
       {"code":"C10","label":"Over £40m","applicationFee":787.50,"annualFee":4274.00}
     ],"notes":"Fees are set by annual turnover band."}'::jsonb, 10),
  ('accredited_designer',          'Accredited Designer',           'Accredited',
   'For qualified landscape designers.',
   '{"applicationFee":157.50,"annualFee":388.00,
     "variants":[{"id":"not_sgd_li","label":"Accredited Designer (not a Registered SGD or LI member)","applicationFee":367.50,"annualFee":388.00}]}'::jsonb, 20),
  ('accredited_supplier',          'Accredited Supplier',           'Accredited',
   'For suppliers to the landscape industry, banded by turnover.',
   '{"bands":[
       {"code":"S1","label":"Under £1m","applicationFee":157.50,"annualFee":763.00},
       {"code":"S2","label":"Over £1m","applicationFee":157.50,"annualFee":1083.00}
     ],"notes":"Application fee £157.50 for each band."}'::jsonb, 30),
  ('accredited_dso',               'Accredited Direct Service Org', 'Accredited',
   'Local authority direct-service landscape organisations.',
   '{"applicationFee":367.50,"annualFee":789.00}'::jsonb, 40),
  ('accredited_group',             'Accredited Group',              'Accredited',
   'Group / consortium accredited membership.',
   '{"applicationFee":367.50,"annualFee":388.00}'::jsonb, 50),
  ('accredited_international',     'Accredited International',      'Accredited',
   'International accredited members.',
   '{"applicationFee":367.50,"annualFee":388.00,"notes":"No VAT shown on published schedule."}'::jsonb, 60),
  ('associate_contractor',         'Associate Contractor',          'Associate',
   'Contractor associate membership (no accreditation required).',
   '{"annualFee":388.00,"notes":"No application fee."}'::jsonb, 110),
  ('associate_designer',           'Associate Designer',            'Associate',
   'Designer associate membership.',
   '{"annualFee":157.00,"notes":"No application fee."}'::jsonb, 120),
  ('associate_supplier',           'Associate Supplier',            'Associate',
   'Supplier associate membership.',
   '{"annualFee":388.00,"notes":"No application fee."}'::jsonb, 130),
  ('associate_individual',         'Associate Individual',          'Associate',
   'Individual associate membership.',
   '{"annualFee":153.00,"notes":"No application fee."}'::jsonb, 140),
  ('student',                      'Student',                       'Individual',
   'Student members currently studying.',
   '{"variants":[
       {"id":"bali_tp","label":"Student of BALI Training Provider","annualFee":0.00,"notes":"Complimentary."},
       {"id":"non_bali_tp","label":"Student of Non-BALI Training Provider","annualFee":24.00}
     ]}'::jsonb, 200),
  ('bali_training_provider',       'BALI Training Provider',        'Training Provider',
   'Approved BALI training providers.',
   '{"annualFee":273.00}'::jsonb, 300),
  ('bali_rolo_training_provider',  'BALI ROLO Training Provider',   'Training Provider',
   'Approved BALI ROLO training providers.',
   '{"applicationFee":115.50,"annualFee":647.00,"notes":"Includes Operative course delivery."}'::jsonb, 310)
ON CONFLICT (id) DO UPDATE SET
  label = EXCLUDED.label,
  tier  = EXCLUDED.tier,
  description = EXCLUDED.description,
  fees  = EXCLUDED.fees,
  sort_order = EXCLUDED.sort_order;

-- ---------- mailing_lists: reactive segments store ------------------------
CREATE TABLE IF NOT EXISTS public.mailing_lists (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name           text NOT NULL,
  description    text,
  filter         jsonb NOT NULL DEFAULT '{}'::jsonb,
  member_count   integer NOT NULL DEFAULT 0,
  created_by     uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at     timestamp with time zone NOT NULL DEFAULT now(),
  updated_at     timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.mailing_lists TO authenticated;
GRANT ALL                             ON public.mailing_lists TO service_role;

ALTER TABLE public.mailing_lists ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins manage mailing lists" ON public.mailing_lists;
CREATE POLICY "Admins manage mailing lists"
  ON public.mailing_lists
  USING (private.is_admin(auth.uid()))
  WITH CHECK (private.is_admin(auth.uid()));

DROP TRIGGER IF EXISTS trg_mailing_lists_touch ON public.mailing_lists;
CREATE TRIGGER trg_mailing_lists_touch
  BEFORE UPDATE ON public.mailing_lists
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Seed the sample mailing lists used by the admin mock.
INSERT INTO public.mailing_lists (name, description, filter, member_count) VALUES
  ('All active members',                'Every active BALI member across all categories.',                  '{"status":["Active Member"]}'::jsonb,                                     2354),
  ('Accredited Contractors',            'Accredited contractor category only.',                             '{"categories":["accredited_contractor"]}'::jsonb,                          412),
  ('Accredited Designers',              'Accredited designer category only.',                               '{"categories":["accredited_designer"]}'::jsonb,                            188),
  ('Accredited Suppliers',              'Accredited supplier category only.',                               '{"categories":["accredited_supplier"]}'::jsonb,                            167),
  ('South East members',                'Members in the South East region.',                                '{"regions":["South East"]}'::jsonb,                                        398),
  ('Main contacts only',                'Every main contact across all organisations.',                     '{"contact_role":["main"]}'::jsonb,                                        1620),
  ('BALI Weekly subscribers',           'Members opted in to BALI Weekly.',                                 '{"newsletter_opts":["bali_weekly"]}'::jsonb,                              1904),
  ('Go Landscape subscribers',          'Members opted in to Go Landscape.',                                '{"newsletter_opts":["go_landscape"]}'::jsonb,                             1218),
  ('Renewals due next 60 days',         'Members whose renewal falls in the next 60 days.',                 '{"renewal_within_days":60}'::jsonb,                                        142),
  ('Lapsed members (30-180 days)',      'Recently lapsed members for win-back.',                            '{"status":["Lapsed"],"lapsed_days":{"min":30,"max":180}}'::jsonb,           73)
ON CONFLICT DO NOTHING;

-- ---------- indexes -------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_apps_stage         ON public.membership_applications (status);
CREATE INDEX IF NOT EXISTS idx_apps_wb_org        ON public.membership_applications (wb_org_id);
CREATE INDEX IF NOT EXISTS idx_wb_orgs_expires_at ON public.workbooks_orgs (membership_expires_at);
CREATE INDEX IF NOT EXISTS idx_wb_people_role     ON public.workbooks_people (contact_role);
