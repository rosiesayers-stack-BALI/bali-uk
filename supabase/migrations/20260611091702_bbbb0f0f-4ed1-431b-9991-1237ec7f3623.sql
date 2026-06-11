-- Allow service role full access to membership-applications bucket; deny everyone else
CREATE POLICY "service role can read membership applications"
  ON storage.objects FOR SELECT
  TO service_role
  USING (bucket_id = 'membership-applications');

CREATE POLICY "service role can insert membership applications"
  ON storage.objects FOR INSERT
  TO service_role
  WITH CHECK (bucket_id = 'membership-applications');

-- Allow anonymous uploads only via signed paths (we'll upload via service role from the server, so this isn't strictly needed; anon cannot read or write directly)
