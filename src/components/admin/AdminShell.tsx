import { type ReactNode } from "react";
import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { LogOut, Newspaper, Calendar, FileText, GraduationCap, LayoutDashboard, Inbox } from "lucide-react";
import { signOut } from "@/lib/admin/auth";

const NAV: { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/submissions", label: "Submissions", icon: Inbox },
  { to: "/admin/news", label: "News", icon: Newspaper },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/policy", label: "Policy", icon: FileText },
  { to: "/admin/training", label: "Training", icon: GraduationCap },
];

export function AdminShell({ children, email }: { children: ReactNode; email?: string | null }) {
  const router = useRouter();
  const current = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">BALI</p>
          <p className="text-lg font-bold text-gray-900">Admin</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((item) => {
            const active = item.exact ? current === item.to : current.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to as string}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-bali-blue text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-4 py-4 border-t border-gray-200 space-y-2">
          {email && <p className="text-xs text-gray-500 truncate">{email}</p>}
          <button
            onClick={async () => {
              await signOut();
              router.invalidate();
            }}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-bali-blue"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
          <Link to="/" className="block text-xs text-gray-500 hover:text-bali-blue">
            ← Back to website
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
