import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

export type AdminAuthState = {
  loading: boolean;
  session: Session | null;
  user: User | null;
  isAdmin: boolean;
};

export function useAdminAuth(): AdminAuthState {
  const [state, setState] = useState<AdminAuthState>({
    loading: true,
    session: null,
    user: null,
    isAdmin: false,
  });

  useEffect(() => {
    let cancelled = false;

    const check = async (session: Session | null) => {
      if (!session?.user) {
        if (!cancelled) setState({ loading: false, session: null, user: null, isAdmin: false });
        return;
      }
      // Check roles via direct table read (RLS lets the user see their own)
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id);
      const isAdmin = !!data?.some((r) => r.role === "admin" || r.role === "editor");
      if (!cancelled) {
        setState({ loading: false, session, user: session.user, isAdmin });
      }
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      void check(session);
    });

    void supabase.auth.getSession().then(({ data }) => check(data.session));

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}

export async function signOut() {
  await supabase.auth.signOut();
}
