
-- News articles
CREATE TABLE public.news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  date_text text NOT NULL DEFAULT '',
  iso_date date,
  image_url text,
  image_alt text,
  body_paragraphs text[] NOT NULL DEFAULT '{}',
  published boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.news_articles TO authenticated;
GRANT SELECT ON public.news_articles TO anon;
GRANT ALL ON public.news_articles TO service_role;
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published news" ON public.news_articles FOR SELECT TO anon USING (published = true);
CREATE POLICY "Authenticated can read all news" ON public.news_articles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can insert news" ON public.news_articles FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update news" ON public.news_articles FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated can delete news" ON public.news_articles FOR DELETE TO authenticated USING (true);

-- Events
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  date_text text NOT NULL DEFAULT '',
  iso_date date,
  venue text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  body_paragraphs text[] NOT NULL DEFAULT '{}',
  image_url text,
  image_alt text,
  booking_url text,
  published boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT SELECT ON public.events TO anon;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published events" ON public.events FOR SELECT TO anon USING (published = true);
CREATE POLICY "Authenticated can read all events" ON public.events FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can insert events" ON public.events FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update events" ON public.events FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated can delete events" ON public.events FOR DELETE TO authenticated USING (true);

-- Policy posts
CREATE TABLE public.policy_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  date_text text NOT NULL DEFAULT '',
  iso_date date,
  author text NOT NULL DEFAULT '',
  read_minutes int NOT NULL DEFAULT 3,
  themes text[] NOT NULL DEFAULT '{}',
  image_url text,
  image_alt text,
  source_url text,
  body_paragraphs text[] NOT NULL DEFAULT '{}',
  pullquote_text text,
  pullquote_attribution text,
  external_links jsonb NOT NULL DEFAULT '[]'::jsonb,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.policy_posts TO authenticated;
GRANT SELECT ON public.policy_posts TO anon;
GRANT ALL ON public.policy_posts TO service_role;
ALTER TABLE public.policy_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published policy" ON public.policy_posts FOR SELECT TO anon USING (published = true);
CREATE POLICY "Authenticated can read all policy" ON public.policy_posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can insert policy" ON public.policy_posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update policy" ON public.policy_posts FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated can delete policy" ON public.policy_posts FOR DELETE TO authenticated USING (true);

-- Training courses
CREATE TABLE public.training_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  date_text text NOT NULL DEFAULT '',
  iso_date date,
  venue text NOT NULL DEFAULT '',
  image_url text,
  source_url text,
  published boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.training_courses TO authenticated;
GRANT SELECT ON public.training_courses TO anon;
GRANT ALL ON public.training_courses TO service_role;
ALTER TABLE public.training_courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published courses" ON public.training_courses FOR SELECT TO anon USING (published = true);
CREATE POLICY "Authenticated can read all courses" ON public.training_courses FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can insert courses" ON public.training_courses FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update courses" ON public.training_courses FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated can delete courses" ON public.training_courses FOR DELETE TO authenticated USING (true);

-- updated_at trigger function
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_news_touch BEFORE UPDATE ON public.news_articles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_events_touch BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_policy_touch BEFORE UPDATE ON public.policy_posts
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_training_touch BEFORE UPDATE ON public.training_courses
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE INDEX idx_news_published_date ON public.news_articles (published, iso_date DESC NULLS LAST, sort_order);
CREATE INDEX idx_events_published_date ON public.events (published, iso_date DESC NULLS LAST, sort_order);
CREATE INDEX idx_policy_published_date ON public.policy_posts (published, iso_date DESC NULLS LAST);
CREATE INDEX idx_training_published_date ON public.training_courses (published, iso_date ASC NULLS LAST, sort_order);
