CREATE TABLE public.liss_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_slug text NOT NULL,
  card_slug text NOT NULL,
  card_name text NOT NULL,
  application_type text NOT NULL CHECK (application_type IN ('new','update','renewal','duplicate')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  date_of_birth date,
  home_address text NOT NULL,
  employer_name text,
  employer_address text,
  job_title text,
  rolo_completed_on date,
  citb_completed_on date,
  qualification_summary text,
  uploaded_files jsonb NOT NULL DEFAULT '[]'::jsonb,
  notes text,
  consent_marketing boolean NOT NULL DEFAULT false,
  consent_terms boolean NOT NULL,
  status text NOT NULL DEFAULT 'submitted' CHECK (status IN ('submitted','in_review','approved','rejected','info_required')),
  ip_address text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.liss_applications TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.liss_applications TO authenticated;
GRANT ALL ON public.liss_applications TO service_role;

ALTER TABLE public.liss_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON public.liss_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view applications"
  ON public.liss_applications FOR SELECT
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update applications"
  ON public.liss_applications FOR UPDATE
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'))
  WITH CHECK (private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete applications"
  ON public.liss_applications FOR DELETE
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_liss_applications_updated
  BEFORE UPDATE ON public.liss_applications
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE POLICY "Anyone can upload LISS application files"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'liss-applications');

CREATE POLICY "Admins can read LISS application files"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'liss-applications' AND private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete LISS application files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'liss-applications' AND private.has_role(auth.uid(), 'admin'));