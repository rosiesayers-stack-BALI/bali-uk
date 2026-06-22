
-- 1. DOCUMENTS: scope by allowed_member_types vs member_links.member_category
DROP POLICY IF EXISTS "Authenticated members view permitted documents" ON public.documents;

CREATE POLICY "Authenticated members view permitted documents"
ON public.documents
FOR SELECT
TO authenticated
USING (
  published = true
  AND public = false
  AND (
    allowed_member_types IS NULL
    OR array_length(allowed_member_types, 1) IS NULL
    OR EXISTS (
      SELECT 1 FROM public.member_links ml
      WHERE ml.user_id = auth.uid()
        AND ml.member_category = ANY (documents.allowed_member_types)
    )
  )
);

-- 2. WORKBOOKS_BOOKINGS: scope to the user's own person_id, not the whole org
DROP POLICY IF EXISTS "Members see their bookings" ON public.workbooks_bookings;

CREATE POLICY "Members see their own bookings"
ON public.workbooks_bookings
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.member_links ml
    WHERE ml.user_id = auth.uid()
      AND ml.wb_person_id IS NOT NULL
      AND ml.wb_person_id = workbooks_bookings.wb_person_id
  )
);

-- 3. WORKBOOKS_INVOICES: drop access to `raw` column for members (admins keep full access)
REVOKE SELECT ON public.workbooks_invoices FROM authenticated;
GRANT SELECT (id, wb_id, wb_org_id, reference, amount, status, smartcard_ref, issued_at, synced_at, created_at)
  ON public.workbooks_invoices TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.workbooks_invoices TO authenticated;

-- 4. WORKBOOKS_ORGS: drop the wide-open public policy, replace with a safe-column public policy.
--    Public anon/authenticated only see curated columns; private fields (vat, reg, address, raw)
--    are restricted via column-level grants. Admins and org owners retain full access via their
--    own policies (which run as service_role / table-level grants).
DROP POLICY IF EXISTS "Active orgs are public" ON public.workbooks_orgs;

CREATE POLICY "Active orgs public directory"
ON public.workbooks_orgs
FOR SELECT
TO anon, authenticated
USING (
  status = 'Active Member'
  AND COALESCE(exclude_from_promotion, false) = false
);

-- Column-level grants for the public directory
REVOKE SELECT ON public.workbooks_orgs FROM anon, authenticated;
GRANT SELECT (
  id, wb_id, name, category, status, region, town, county, country,
  postcode, disciplines, website, public_email, synced_at, created_at, updated_at
) ON public.workbooks_orgs TO anon, authenticated;
-- preserve writes for authenticated (admins enforce via policy)
GRANT INSERT, UPDATE, DELETE ON public.workbooks_orgs TO authenticated;

-- 5. WORKBOOKS_PEOPLE: hide `raw` and any sensitive contact columns from members
REVOKE SELECT ON public.workbooks_people FROM authenticated;
GRANT SELECT (id, wb_id, wb_org_id, name, email, phone, synced_at, created_at)
  ON public.workbooks_people TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.workbooks_people TO authenticated;

-- service_role keeps full access to everything (already granted ALL on table creation,
-- column REVOKEs above target anon/authenticated only).
