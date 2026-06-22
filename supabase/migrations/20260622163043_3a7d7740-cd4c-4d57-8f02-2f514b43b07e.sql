GRANT USAGE ON SCHEMA private TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.is_admin(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.user_owns_org(text) TO anon, authenticated;