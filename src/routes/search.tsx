import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { runSearch } from "../lib/search";
import { PROJECT_TYPES, CATEGORY_LABEL } from "../lib/directory/members";

type SearchParams = { q: string; postcode: string; projectType: string; category: string };
const asStr = (v: unknown) => (typeof v === "string" ? v : "");

const TITLE = "Search — BALI";
const DESC = "Search accredited BALI members, news, projects and events across the UK.";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    q: asStr(search.q),
    postcode: asStr(search.postcode),
    projectType: asStr(search.projectType),
    category: asStr(search.category),
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q, postcode, projectType, category } = Route.useSearch();
  const navigate = Route.useNavigate();

  const results = useMemo(
    () =>
      runSearch({
        q,
        postcode,
        projectType: (projectType as never) || "",
        category: (category as never) || "",
      }),
    [q, postcode, projectType, category],
  );

  const update = (key: keyof SearchParams, value: string) =>
    navigate({ search: (prev: SearchParams) => ({ ...prev, [key]: value }) });

  const clearAll = () =>
    navigate({ search: () => ({ q: "", postcode: "", projectType: "", category: "" }) });

  const hasAnyFilter = !!(q || postcode || projectType || category);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header + search form */}
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <h1 className="font-bold text-3xl md:text-4xl mb-2">Search BALI</h1>
            <p className="text-emerald-50/90 mb-8">Find accredited members, news, projects and events.</p>

            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-lg grid md:grid-cols-12 gap-3 text-slate-900">
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Keyword</label>
                <input
                  type="search"
                  defaultValue={q}
                  onChange={(e) => update("q", e.target.value)}
                  placeholder="Name, project, topic…"
                  className="w-full h-11 px-3 rounded-lg border border-slate-200 focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none"
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Postcode</label>
                <input
                  type="text"
                  defaultValue={postcode}
                  onChange={(e) => update("postcode", e.target.value)}
                  placeholder="e.g. B91 or SW1"
                  className="w-full h-11 px-3 rounded-lg border border-slate-200 focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none"
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Project type</label>
                <select
                  value={projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className="w-full h-11 px-3 rounded-lg border border-slate-200 bg-white focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none"
                >
                  <option value="">All project types</option>
                  {PROJECT_TYPES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Category</label>
                <select
                  value={category}
                  onChange={(e) => update("category", e.target.value)}
                  className="w-full h-11 px-3 rounded-lg border border-slate-200 bg-white focus:border-bali-green focus:ring-2 focus:ring-emerald-100 outline-none"
                >
                  <option value="">All</option>
                  <option value="contractor">Contractor</option>
                  <option value="designer">Designer</option>
                  <option value="supplier">Supplier</option>
                  <option value="training">Training</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{results.total}</span> {results.total === 1 ? "result" : "results"}
              {hasAnyFilter && (
                <>
                  {" "}·{" "}
                  <button onClick={clearAll} className="text-bali-green font-semibold hover:underline">Clear all filters</button>
                </>
              )}
            </p>
          </div>

          {results.total === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">No results found</p>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Try broadening your search — clear the postcode, remove the project type, or try a shorter keyword.
              </p>
              <button onClick={clearAll} className="bg-bali-green text-white px-5 py-2.5 rounded-full font-semibold hover:bg-bali-slate transition-colors">
                Reset search
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {results.groups.map((group) => (
                <Group key={group.type} label={group.label} count={group.items.length}>
                  {group.type === "Member" ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {group.items.map((r) => {
                        const m = r.member!;
                        return (
                          <article key={r.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-bali-green hover:shadow-lg transition-all flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-bali-green text-[10px] font-bold uppercase tracking-wider">Accredited</span>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{CATEGORY_LABEL[m.category]}</span>
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-1">{m.name}</h3>
                            <p className="text-xs text-slate-500 mb-3">{m.region} · {m.postcode}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{m.description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {m.projectTypes.slice(0, 3).map((p) => (
                                <span key={p} className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{p}</span>
                              ))}
                            </div>
                            <Link to="/contact" className="text-bali-green text-sm font-bold hover:underline">Enquire →</Link>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {group.items.map((r) => (
                        <ResultCard key={r.id} result={r} groupLabel={group.label} />
                      ))}
                    </div>
                  )}
                </Group>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

type ResultCardResult = {
  id: string;
  title: string;
  description: string;
  to: string;
  params?: Record<string, string>;
  image?: string;
  meta?: string;
};

function ResultCard({ result, groupLabel }: { result: ResultCardResult; groupLabel: string }) {
  const linkProps = result.params
    ? { to: result.to, params: result.params as never }
    : { to: result.to };
  return (
    <Link
      {...(linkProps as { to: string })}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-bali-green hover:shadow-lg transition-all flex flex-col"
    >
      {result.image && (
        <div className="h-40 bg-slate-100 overflow-hidden">
          <img src={result.image} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-bali-green mb-2">{groupLabel}</span>
        <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{result.title}</h3>
        {result.meta && <p className="text-xs text-slate-500 mb-2">{result.meta}</p>}
        {result.description && <p className="text-sm text-slate-600 line-clamp-3 flex-1">{result.description}</p>}
      </div>
    </Link>
  );
}

function Group({ label, count, children }: { label: string; count: number; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-slate-200">
        <h2 className="font-bold text-xl text-bali-blue">{label}</h2>
        <span className="text-sm text-slate-500">{count} {count === 1 ? "result" : "results"}</span>
      </div>
      {children}
    </div>
  );
}
