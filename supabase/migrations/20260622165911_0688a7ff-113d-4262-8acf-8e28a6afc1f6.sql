
CREATE TABLE public.membership_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  category_interest TEXT,
  message TEXT NOT NULL,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE ON public.membership_enquiries TO authenticated;
GRANT ALL ON public.membership_enquiries TO service_role;
ALTER TABLE public.membership_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view enquiries" ON public.membership_enquiries
  FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update enquiries" ON public.membership_enquiries
  FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'::public.app_role));
