import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MEMBERS, REGIONS, CATEGORY_LABEL, type Member, type MemberCategory } from "../lib/directory/members";
import { FEATURED_MEMBERS } from "../lib/ads/slots";
import SponsoredCard from "./ads/SponsoredCard";

type Props = {
  initialCategory?: MemberCategory | "all";
  lockCategory?: boolean;
  heading?: string;
};

const FEATURED_BY_ID = new Map(FEATURED_MEMBERS.map((f) => [f.memberId, f]));

export default function DirectoryListing({ initialCategory = "all", lockCategory = false, heading }: Props) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string>("all");
  const [category, setCategory] = useState<MemberCategory | "all">(initialCategory);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = MEMBERS.filter((m: Member) => {
      if (category !== "all" && m.category !== category) return false;
      if (region !== "all" && m.region !== region) return false;
      if (q && !(`${m.name} ${m.specialism} ${m.description}`.toLowerCase().includes(q))) return false;
      return true;
    });
    // Directory boost: featured/paid-boost members surface first.
    return [...filtered].sort((a, b) => {
      const af = FEATURED_BY_ID.has(a.id) ? 1 : 0;
      const bf = FEATURED_BY_ID.has(b.id) ? 1 : 0;
      return bf - af;
    });
  }, [query, region, category]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {heading && <h2 className="font-bold text-2xl text-bali-blue mb-6">{heading}</h2>}

      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm mb-8">
        <div className="grid md:grid-cols-12 gap-3">
          <div className="md:col-span-5">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Search</label>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, specialism, keyword…"
              className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none"
            />
          </div>
          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full h-11 px-3 rounded-lg border border-slate-200 focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none bg-white"
            >
              <option value="all">All UK regions</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as MemberCategory | "all")}
              disabled={lockCategory}
              className="w-full h-11 px-3 rounded-lg border border-slate-200 focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none bg-white disabled:bg-slate-50 disabled:text-slate-500"
            >
              <option value="all">All categories</option>
              <option value="contractor">Contractor</option>
              <option value="designer">Designer</option>
              <option value="supplier">Supplier</option>
              <option value="training">Training Provider</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{results.length}</span> accredited{" "}
          {results.length === 1 ? "member" : "members"} found
        </p>
        {(query || region !== "all" || (!lockCategory && category !== "all")) && (
          <button
            onClick={() => { setQuery(""); setRegion("all"); if (!lockCategory) setCategory("all"); }}
            className="text-sm text-bali-green font-semibold hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-600 mb-2 font-semibold">No members match your filters</p>
          <p className="text-sm text-slate-500">Try removing a filter, or contact us — we may know who to recommend.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((m) => (
            <article key={m.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-bali-green hover:shadow-lg transition-all flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-bali-green text-[10px] font-bold uppercase tracking-wider">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  Accredited
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{CATEGORY_LABEL[m.category]}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{m.name}</h3>
              <p className="text-xs text-slate-500 mb-3">{m.region} · Est. {m.established}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{m.description}</p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">{m.specialism}</span>
                <Link
                  to="/contact"
                  className="text-bali-green text-sm font-bold hover:underline"
                >
                  Enquire →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
