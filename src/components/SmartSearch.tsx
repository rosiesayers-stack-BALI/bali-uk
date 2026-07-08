import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { runSearch } from "../lib/search";

type Suggestion = {
  key: string;
  label: string;
  sub: string;
  type: "Member" | "News" | "Event" | "Directory";
  to: string;
  search?: Record<string, string>;
  params?: Record<string, string>;
};

export default function SmartSearch({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const suggestions = useMemo<Suggestion[]>(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    const res = runSearch({ q });
    const members: Suggestion[] = res.members.slice(0, 4).map(({ item }) => ({
      key: `m-${item.id}`,
      label: item.name,
      sub: `${item.region} · ${item.specialism}`,
      type: "Member",
      to: "/directory",
    }));
    const news: Suggestion[] = res.news.slice(0, 3).map((n) => ({
      key: `n-${n.slug}`,
      label: n.title,
      sub: n.description.slice(0, 80),
      type: "News",
      to: "/news/$slug",
      params: { slug: n.slug },
    }));
    const events: Suggestion[] = res.events.slice(0, 3).map((e) => ({
      key: `e-${e.slug}`,
      label: e.title,
      sub: `${e.date} · ${e.venue}`,
      type: "Event",
      to: "/events/$slug",
      params: { slug: e.slug },
    }));
    const all: Suggestion[] = [...members, ...news, ...events];
    all.push({
      key: "all",
      label: `See all results for "${q}"`,
      sub: "Full search",
      type: "Directory",
      to: "/search",
      search: { q },
    });
    return all;
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const go = (s: Suggestion) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    navigate({ to: s.to, params: s.params as never, search: s.search as never });
  };

  const submit = () => {
    const q = query.trim();
    if (!q) return;
    if (suggestions[active] && suggestions[active].key !== "all") {
      go(suggestions[active]);
    } else {
      setOpen(false);
      setQuery("");
      onNavigate?.();
      navigate({ to: "/search", search: { q } as never });
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, suggestions.length - 1)); setOpen(true); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); submit(); }
    else if (e.key === "Escape") { setOpen(false); }
  };

  return (
    <div ref={wrapRef} className="border-t border-gray-100 bg-gray-50 px-4 py-3">
      <div className="max-w-2xl mx-auto relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search members, news, events…"
              autoFocus
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
              onFocus={() => setOpen(true)}
              onKeyDown={onKey}
              role="combobox"
              aria-expanded={open && suggestions.length > 0}
              aria-controls="smart-search-listbox"
              aria-autocomplete="list"
              className="w-full rounded-lg border border-gray-300 pl-9 pr-4 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
            />
          </div>
          <button onClick={submit} className="bg-bali-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition-colors">
            Search
          </button>
        </div>

        {open && query.trim().length >= 2 && (
          <div id="smart-search-listbox" role="listbox" className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
            {suggestions.length === 0 ? (
              <div className="px-4 py-6 text-sm text-gray-500 text-center">
                No matches. Try a shorter or different keyword.
              </div>
            ) : (
              suggestions.map((s, i) => (
                <button
                  key={s.key}
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => (s.key === "all" ? submit() : go(s))}
                  className={`w-full text-left px-4 py-3 flex items-start gap-3 border-b border-gray-50 last:border-b-0 transition-colors ${
                    i === active ? "bg-emerald-50" : "hover:bg-gray-50"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0 mt-0.5 ${
                    s.type === "Member" ? "bg-emerald-100 text-bali-green" :
                    s.type === "News" ? "bg-blue-100 text-bali-blue" :
                    s.type === "Event" ? "bg-amber-100 text-amber-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>{s.type}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-sm text-slate-900 truncate">{s.label}</span>
                    {s.sub && <span className="block text-xs text-slate-500 truncate">{s.sub}</span>}
                  </span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
