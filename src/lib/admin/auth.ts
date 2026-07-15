// Admin auth hook — thin wrapper around the real Supabase-backed staff auth.
import { useEffect, useState } from "react";
import {
  adminLogout,
  getCurrentStaff,
  isAdminAuthInitialized,
  subscribeStaff,
  waitForAdminAuthInit,
  type StaffUser,
} from "@/services/admin-auth";

export type AdminAuthState = {
  loading: boolean;
  user: StaffUser | null;
  isAdmin: boolean;
};

export function useAdminAuth(): AdminAuthState {
  const [user, setUser] = useState<StaffUser | null>(() => getCurrentStaff());
  const [loading, setLoading] = useState<boolean>(() => !isAdminAuthInitialized());

  useEffect(() => {
    let cancelled = false;
    waitForAdminAuthInit().then(() => {
      if (cancelled) return;
      setUser(getCurrentStaff());
      setLoading(false);
    });
    const unsub = subscribeStaff((u) => setUser(u));
    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  return {
    loading,
    user,
    isAdmin: !!user && (user.role === "admin" || user.role === "editor"),
  };
}

export async function signOut() {
  await adminLogout();
}
