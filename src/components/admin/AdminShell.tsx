import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouter, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LogOut, Newspaper, Calendar, FileText, GraduationCap, LayoutDashboard,
  Inbox, Users, Building2, ClipboardList, Search, ShieldCheck, Mail, Zap,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CookieBanner from "../CookieBanner";
import { signOut } from "@/lib/admin/auth";
import { searchPeopleOrgs } from "@/lib/admin/mock-crm";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/people", label: "People", icon: Users },
  { to: "/admin/organisations", label: "Organisations", icon: Building2 },
  { to: "/admin/applications", label: "Applications", icon: ClipboardList },
  { to: "/admin/submissions", label: "Submissions", icon: Inbox },
  { to: "/admin/mailing", label: "Mailing lists", icon: Mail },
  { to: "/admin/automations", label: "Automations", icon: Zap },
  { to: "/admin/news", label: "News", icon: Newspaper },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/policy", label: "Policy", icon: FileText },
  { to: "/admin/training", label: "Training", icon: GraduationCap },
] as const;

function GlobalSearch({ dark = false }: { dark?: boolean }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const results = q.length >= 2 ? searchPeopleOrgs(q) : null;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const total = results ? results.people.length + results.organisations.length : 0;

  return (
    <div ref={ref} className="relative w-full">
      <label className="sr-only" htmlFor="admin-global-search">Search People and Organisations</label>
      <div className={`flex rounded-lg overflow-hidden focus-within:ring-2 ${
        dark
          ? "bg-white/10 backdrop-blur-sm border border-white/20 focus-within:ring-white/40"
          : "bg-white border border-gray-300 focus-within:ring-bali-blue/25 focus-within:border-bali-blue"
      }`}>
        <Search className={`w-4 h-4 ml-3 self-center shrink-0 ${dark ? "text-white/70" : "text-gray-400"}`} aria-hidden />
        <input
          id="admin-global-search"
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search people, organisations…"
          className={`flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm focus:outline-none ${
            dark ? "text-white placeholder:text-white/60" : "text-gray-900 placeholder:text-gray-400"
          }`}
        />
      </div>
      {open && results && (
        <div role="listbox" className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
          {total === 0 ? (
            <div className="px-4 py-6 text-sm text-gray-500 text-center">No matches for “{q}”.</div>
          ) : (
            <>
              {results.people.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50">People</div>
                  {results.people.map((p) => (
                    <button key={p.id} role="option" onClick={() => { setOpen(false); setQ(""); navigate({ to: "/admin/people/$id", params: { id: p.id } }); }}
                      className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 border-b border-gray-50 last:border-b-0">
                      <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                      <div className="text-xs text-gray-500">{p.role} · {p.town}</div>
                    </button>
                  ))}
                </div>
              )}
              {results.organisations.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50">Organisations</div>
                  {results.organisations.map((o) => (
                    <button key={o.id} role="option" onClick={() => { setOpen(false); setQ(""); navigate({ to: "/admin/organisations/$id", params: { id: o.id } }); }}
                      className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 border-b border-gray-50 last:border-b-0">
                      <div className="text-sm font-semibold text-gray-900">{o.name}</div>
                      <div className="text-xs text-gray-500">{o.discipline} · {o.town}, {o.region}</div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function AdminShell({ children, email }: { children: ReactNode; email?: string | null }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");
  const active = NAV.find((n) => isActive(n.to, "exact" in n ? n.exact : false));
  const isDashboardHome = pathname === "/admin";

  const doSignOut = async () => { await signOut(); router.invalidate(); };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero — mirrors /my-bali chrome */}
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1D4D59 0%, #21509A 55%, #0E8B61 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-8 lg:py-10 grid gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
          <div className="hidden sm:flex items-center justify-center bg-white/95 rounded-xl shadow-lg p-3 h-20 w-40 shrink-0">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-bali-slate font-bold">BALI</p>
              <p className="text-sm font-bold text-bali-blue">Admin</p>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              Staff back-office
            </p>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
              {isDashboardHome ? "Admin dashboard" : active?.label ?? "Admin"}
            </h1>
            <p className="mt-1 text-white/80 text-sm max-w-2xl">
              {isDashboardHome
                ? "Manage members, applications and content across the BALI website."
                : "Staff-only workspace for member data and content."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden /> Admin
              </span>
              {email && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white truncate max-w-[240px]">
                  {email}
                </span>
              )}
            </div>
          </div>

          <div className="w-full md:w-80">
            <GlobalSearch dark />
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-10 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside aria-label="Admin navigation" className="lg:sticky lg:top-24 self-start">
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
                          on ? "bg-bali-blue text-white shadow-sm" : "text-gray-700 hover:bg-gray-50 hover:text-bali-blue"
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
              <p className="font-semibold text-gray-900 truncate">{email ?? "Admin"}</p>
              <button
                onClick={doSignOut}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-bali-blue hover:text-bali-blue rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4" aria-hidden />
                Sign out
              </button>
              <Link to="/" className="block mt-2 text-xs text-gray-500 hover:text-bali-blue text-center">
                ← Back to website
              </Link>
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
