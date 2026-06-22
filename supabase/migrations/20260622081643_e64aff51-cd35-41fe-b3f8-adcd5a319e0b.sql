
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role IN ('admin','editor')
  )
$$;

-- Replace permissive write policies with admin-gated ones
DROP POLICY "Authenticated can read all news" ON public.news_articles;
DROP POLICY "Authenticated can insert news" ON public.news_articles;
DROP POLICY "Authenticated can update news" ON public.news_articles;
DROP POLICY "Authenticated can delete news" ON public.news_articles;
CREATE POLICY "Admins read all news" ON public.news_articles FOR SELECT TO authenticated USING (public.is_admin(auth.uid()) OR published = true);
CREATE POLICY "Admins insert news" ON public.news_articles FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins update news" ON public.news_articles FOR UPDATE TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins delete news" ON public.news_articles FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));

DROP POLICY "Authenticated can read all events" ON public.events;
DROP POLICY "Authenticated can insert events" ON public.events;
DROP POLICY "Authenticated can update events" ON public.events;
DROP POLICY "Authenticated can delete events" ON public.events;
CREATE POLICY "Admins read all events" ON public.events FOR SELECT TO authenticated USING (public.is_admin(auth.uid()) OR published = true);
CREATE POLICY "Admins insert events" ON public.events FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins update events" ON public.events FOR UPDATE TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins delete events" ON public.events FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));

DROP POLICY "Authenticated can read all policy" ON public.policy_posts;
DROP POLICY "Authenticated can insert policy" ON public.policy_posts;
DROP POLICY "Authenticated can update policy" ON public.policy_posts;
DROP POLICY "Authenticated can delete policy" ON public.policy_posts;
CREATE POLICY "Admins read all policy" ON public.policy_posts FOR SELECT TO authenticated USING (public.is_admin(auth.uid()) OR published = true);
CREATE POLICY "Admins insert policy" ON public.policy_posts FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins update policy" ON public.policy_posts FOR UPDATE TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins delete policy" ON public.policy_posts FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));

DROP POLICY "Authenticated can read all courses" ON public.training_courses;
DROP POLICY "Authenticated can insert courses" ON public.training_courses;
DROP POLICY "Authenticated can update courses" ON public.training_courses;
DROP POLICY "Authenticated can delete courses" ON public.training_courses;
CREATE POLICY "Admins read all courses" ON public.training_courses FOR SELECT TO authenticated USING (public.is_admin(auth.uid()) OR published = true);
CREATE POLICY "Admins insert courses" ON public.training_courses FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins update courses" ON public.training_courses FOR UPDATE TO authenticated USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));
CREATE POLICY "Admins delete courses" ON public.training_courses FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
