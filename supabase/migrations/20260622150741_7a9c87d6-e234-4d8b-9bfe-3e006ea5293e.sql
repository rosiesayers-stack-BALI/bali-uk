DROP POLICY IF EXISTS "Document metadata viewable" ON public.documents;

CREATE POLICY "Public document metadata viewable"
ON public.documents
FOR SELECT
TO anon, authenticated
USING (published = true AND public = true);

CREATE POLICY "Authenticated members view permitted documents"
ON public.documents
FOR SELECT
TO authenticated
USING (published = true AND public = false);