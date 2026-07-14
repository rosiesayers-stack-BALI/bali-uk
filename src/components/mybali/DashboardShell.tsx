import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  UserCircle,
  BarChart3,
  Gift,
  FolderOpen,
  FileText,
  Newspaper,
  Search,
  LogOut,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CookieBanner from "../CookieBanner";
import { useMyBaliAuth } from "../../services/auth-context";

const NAV = [
  { to: "/my-bali", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/my-bali/profile", label: "My profile", icon: UserCircle },
  { to: "/my-bali/statistics", label: "Profile statistics", icon: BarChart3 },
  { to: "/my-bali/benefits", label: "My benefits", icon: Gift },
  { to: "/my-bali/resources", label: "My resources", icon: FolderOpen },
  { to: "/my-bali/technical-documents", label: "Technical documents", icon: FileText },
  { to: "/my-bali/content", label: "My content", icon: Newspaper },
] as const;

export default function DashboardShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { user, logout } = useMyBaliAuth();
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const [q, setQ] = useState("");

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  const doLogout = async () => {
    await logout();
    navigate({ to: "/login" });
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate({ to: "/search", search: { q: q.trim() } as never });
  };

  const active = NAV.find((n) => isActive(n.to, "exact" in n ? n.exact : false));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-bali-slate via-bali-blue to-bali-green text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <p className="text-bali-grass text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              My BALI · Member area
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Welcome{user?.name ? `, ${user.name}` : ""}
            </h1>
            <p className="mt-2 text-white/80 text-sm max-w-2xl">
              {active?.label ?? "Dashboard"} — manage your BALI membership, profile and content.
            </p>
          </div>
          <form onSubmit={onSearch} role="search" className="w-full md:w-80">
            <label htmlFor="mybali-search" className="sr-only">Search My BALI</label>
            <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-white/40">
              <Search className="w-4 h-4 text-white/70 ml-3 self-center shrink-0" aria-hidden />
              <input
                id="mybali-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search My BALI"
                className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button type="submit" className="bg-bali-grass hover:bg-bali-green text-white text-sm font-semibold px-4 transition-colors">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Body: sidebar + content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-10 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside aria-label="My BALI navigation" className="lg:sticky lg:top-24 self-start">
            <nav className="bg-white rounded-xl border border-gray-100 shadow-sm p-2">
              <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
                {NAV.map((item) => {
                  const Icon = item.icon;
                  const on = isActive(item.to, "exact" in item ? item.exact : false);
                  return (
                    <li key={item.to} className="shrink-0 lg:shrink">
                      <Link
                        to={item.to}
                        className={`group flex items-center gap-3 whitespace-nowrap lg:whitespace-normal text-sm px-3 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-bali-blue/30 ${
                          on
                            ? "bg-bali-blue text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-50 hover:text-bali-blue"
                        }`}
                        aria-current={on ? "page" : undefined}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${on ? "text-white" : "text-gray-400 group-hover:text-bali-blue"}`} aria-hidden />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden lg:block mt-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-sm">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-2">Signed in as</p>
              <p className="font-semibold text-gray-900 truncate">{user?.name}</p>
              <p className="text-gray-500 text-xs truncate">{user?.email}</p>
              <button
                onClick={doLogout}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-bali-blue hover:text-bali-blue rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4" aria-hidden />
                Log out
              </button>
            </div>
          </aside>

          <div className="min-w-0">{children}</div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-bali-slate tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 mt-1 text-sm">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 ${className}`}>
      {children}
    </section>
  );
}
