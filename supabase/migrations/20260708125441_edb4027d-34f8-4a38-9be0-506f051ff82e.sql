
-- 1. Extend directory_profiles with website + socials
ALTER TABLE public.directory_profiles
  ADD COLUMN IF NOT EXISTS website_url text,
  ADD COLUMN IF NOT EXISTS socials jsonb NOT NULL DEFAULT '{}'::jsonb;

-- 2. Expand submission status lifecycle
ALTER TABLE public.member_submissions
  DROP CONSTRAINT IF EXISTS member_submissions_status_check;
ALTER TABLE public.member_submissions
  ADD CONSTRAINT member_submissions_status_check
  CHECK (status IN ('pending','approved','rejected','changes_requested','published'));

-- Allow members to update their own pending / changes_requested submissions
DROP POLICY IF EXISTS "Members update their own pending submissions" ON public.member_submissions;
CREATE POLICY "Members update their own pending submissions"
  ON public.member_submissions FOR UPDATE
  USING (private.user_owns_org(wb_org_id) AND status IN ('pending','changes_requested'))
  WITH CHECK (private.user_owns_org(wb_org_id) AND status IN ('pending','changes_requested'));

-- 3. Notifications table (in-app)
CREATE TABLE IF NOT EXISTS public.notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind text NOT NULL,
  title text NOT NULL,
  body text,
  link text,
  read_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user_created
  ON public.notifications (user_id, created_at DESC);

GRANT SELECT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read their own notifications"
  ON public.notifications FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users mark their own notifications read"
  ON public.notifications FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users delete their own notifications"
  ON public.notifications FOR DELETE
  USING (user_id = auth.uid());

CREATE POLICY "Admins manage all notifications"
  ON public.notifications FOR ALL
  USING (private.is_admin(auth.uid()))
  WITH CHECK (private.is_admin(auth.uid()));
