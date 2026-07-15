// Admin auth hook — thin wrapper around the mock staff auth service.
// TODO: replace with real backend session check once available.
import { useEffect, useState } from "react";
import {
  adminLogout,
  getCurrentStaff,
  subscribeStaff,
  type StaffUser,
} from "@/services/admin-auth";

export type AdminAuthState = {
  loading: boolean;
  user: StaffUser | null;
  isAdmin: boolean;
};

export function useAdminAuth(): AdminAuthState {
  const [user, setUser] = useState<StaffUser | null>(() => getCurrentStaff());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sync with any hydrated value from localStorage on mount.
    setUser(getCurrentStaff());
    setLoading(false);
    return subscribeStaff(setUser);
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
