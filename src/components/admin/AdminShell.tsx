import { type ReactNode, useEffect, useRef, useState } from "react";
import { Link, useRouter, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LogOut, Newspaper, Calendar, FileText, GraduationCap, LayoutDashboard,
  Inbox, Users, Building2, ClipboardList, Search,
} from "lucide-react";
import { signOut } from "@/lib/admin/auth";
import { globalSearch } from "@/lib/admin/mock-crm";

const NAV: { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/people", label: "People", icon: Users },
  { to: "/admin/organisations", label: "Organisations", icon: Building2 },
  { to: "/admin/applications", label: "Applications", icon: ClipboardList },
  { to: "/admin/submissions", label: "Submissions", icon: Inbox },
  { to: "/admin/news", label: "News", icon: Newspaper },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/policy", label: "Policy", icon: FileText },
  { to: "/admin/training", label: "Training", icon: GraduationCap },
];

function GlobalSearch() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const results = q.length >= 2 ? globalSearch(q) : null;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const total = results ? results.people.length + results.organisations.length + results.applications.length : 0;

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      <label className="sr-only" htmlFor="admin-global-search">Search People and Organisations</label>
      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden />
      <input
        id="admin-global-search"
        type="search"
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        placeholder="Search people, organisations, applications…"
        className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
      />
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
              {results.applications.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50">Applications</div>
                  {results.applications.map((a) => (
                    <button key={a.id} role="option" onClick={() => { setOpen(false); setQ(""); navigate({ to: "/admin/applications/$id", params: { id: a.id } }); }}
                      className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 border-b border-gray-50 last:border-b-0">
                      <div className="text-sm font-semibold text-gray-900">{a.applicantName}</div>
                      <div className="text-xs text-gray-500">{a.organisation} · {a.stage}</div>
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
  const current = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">BALI</p>
          <p className="text-lg font-bold text-gray-900">Admin</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
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
            onClick={async () => { await signOut(); router.invalidate(); }}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-bali-blue"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
          <Link to="/" className="block text-xs text-gray-500 hover:text-bali-blue">
            ← Back to website
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden flex flex-col min-w-0">
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <GlobalSearch />
          <div className="ml-auto text-xs text-gray-500 hidden md:block">Staff back-office</div>
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
