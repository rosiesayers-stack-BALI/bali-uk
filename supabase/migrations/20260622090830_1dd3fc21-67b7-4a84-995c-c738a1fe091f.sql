REVOKE EXECUTE ON FUNCTION public.claim_first_admin() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.claim_first_admin() FROM public;
REVOKE EXECUTE ON FUNCTION public.claim_first_admin() FROM anon;