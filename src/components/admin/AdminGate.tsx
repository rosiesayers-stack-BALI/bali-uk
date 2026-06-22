import { type ReactNode } from "react";
import { useAdminAuth } from "@/lib/admin/auth";
import { AdminLogin } from "./AdminLogin";
import { AdminShell } from "./AdminShell";
import { supabase } from "@/integrations/supabase/client";

export function AdminGate({ children }: { children: ReactNode }) {
  const auth = useAdminAuth();

  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans text-gray-500">
        Loading…
      </div>
    );
  }

  if (!auth.user) return <AdminLogin />;

  if (!auth.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
          <h1 className="text-xl font-bold text-gray-900">Not an admin</h1>
          <p className="text-sm text-gray-600 mt-2">
            You're signed in as <strong>{auth.user.email}</strong>, but this account does not yet have admin access.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Ask an existing admin to grant access to this account.
          </p>
          <button
            onClick={() => supabase.auth.signOut()}
            className="mt-4 text-sm text-gray-600 hover:text-bali-blue"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return <AdminShell email={auth.user.email}>{children}</AdminShell>;
}
