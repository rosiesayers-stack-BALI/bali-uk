import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import SmartLink from "../SmartLink";
import { useMyBaliAuth } from "../../services/auth-context";

const NAV = [
  { to: "/my-bali", label: "Dashboard", exact: true },
  { to: "/my-bali/profile", label: "My profile" },
  { to: "/my-bali/statistics", label: "Profile statistics" },
  { to: "/my-bali/benefits", label: "My benefits" },
  { to: "/my-bali/resources", label: "My resources" },
  { to: "/my-bali/technical-documents", label: "Technical documents" },
  { to: "/my-bali/content", label: "My content" },
] as const;

export default function DashboardShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { user, logout } = useMyBaliAuth();
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const [q, setQ] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <SmartLink to="/" aria-label="BALI home">
            <img src="https://www.bali.org.uk/themes/bali/gfx/logo.png" alt="BALI" className="h-10 sm:h-12 w-auto" />
          </SmartLink>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden md:inline">
              Signed in as <strong className="text-gray-800">{user?.email}</strong>
            </span>
            <button
              onClick={doLogout}
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-bali-blue/25"
            >
              Log out
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <form onSubmit={onSearch} className="flex-1 max-w-lg" role="search">
              <label htmlFor="mybali-search" className="sr-only">Search My BALI</label>
              <div className="flex">
                <input
                  id="mybali-search"
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search My BALI"
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
                />
                <button
                  type="submit"
                  className="bg-bali-blue hover:bg-blue-800 text-white text-sm font-semibold px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-bali-blue/40"
                >
                  Search
                </button>
              </div>
            </form>
            <button
              className="md:hidden text-sm px-3 py-2 border border-gray-300 rounded-lg self-start"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mybali-subnav"
            >
              {menuOpen ? "Hide menu" : "Show menu"}
            </button>
          </div>
          <nav
            id="mybali-subnav"
            aria-label="My BALI sections"
            className={`${menuOpen ? "block" : "hidden"} md:block border-t border-gray-100`}
          >
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
              <ul className="flex md:flex-row flex-col gap-1 md:gap-2 py-2">
                {NAV.map((item) => {
                  const active = isActive(item.to, "exact" in item ? item.exact : false);
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className={`block whitespace-nowrap text-sm px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-bali-blue/25 ${
                          active
                            ? "bg-bali-blue text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-10">{children}</main>

      <footer className="bg-bali-slate text-gray-400 text-xs py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto">© 2026 British Association of Landscape Industries</div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1 text-sm">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 ${className}`}>
      {children}
    </section>
  );
}
