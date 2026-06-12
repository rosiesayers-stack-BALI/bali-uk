CREATE TABLE public.conference_interest (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  member BOOLEAN NOT NULL DEFAULT false,
  sponsor_interest BOOLEAN NOT NULL DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.conference_interest TO authenticated;
GRANT ALL ON public.conference_interest TO service_role;
ALTER TABLE public.conference_interest ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role manages conference interest" ON public.conference_interest FOR ALL TO service_role USING (true) WITH CHECK (true);