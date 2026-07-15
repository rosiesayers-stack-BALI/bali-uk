import { type ReactNode } from "react";
import { useAdminAuth } from "@/lib/admin/auth";
import { AdminLogin } from "./AdminLogin";
import { AdminShell } from "./AdminShell";

export function AdminGate({ children }: { children: ReactNode }) {
  const auth = useAdminAuth();

  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans text-gray-500">
        Loading…
      </div>
    );
  }

  if (!auth.user || !auth.isAdmin) return <AdminLogin />;

  return <AdminShell email={auth.user.email}>{children}</AdminShell>;
}
