
CREATE POLICY "Public read content images"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'content-images');

CREATE POLICY "Admins upload content images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'content-images' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins update content images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'content-images' AND public.is_admin(auth.uid()))
WITH CHECK (bucket_id = 'content-images' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins delete content images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'content-images' AND public.is_admin(auth.uid()));
