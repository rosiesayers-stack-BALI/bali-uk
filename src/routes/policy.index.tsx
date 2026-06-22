import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { fetchPolicyList, type PolicyRow } from "../lib/content/db";

const TITLE = "Policy & Campaigns — BALI";
const DESC =
  "Policy updates, government consultation responses and campaigns from the British Association of Landscape Industries.";

const POLICY_THEMES = ["Budget & Tax", "Consultations", "Environment", "Business & Trade"] as const;
type PolicyTheme = (typeof POLICY_THEMES)[number];
type Filter = "All" | PolicyTheme;

export const Route = createFileRoute("/policy/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  loader: async () => ({ posts: await fetchPolicyList() }),
  component: PolicyIndex,
});

function PolicyIndex() {
  const { posts } = Route.useLoaderData();
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const c = {} as Record<PolicyTheme, number>;
    POLICY_THEMES.forEach((t) => (c[t] = posts.filter((p: PolicyRow) => p.themes.includes(t)).length));
    return c;
  }, [posts]);

  const visible = useMemo(
    () => (filter === "All" ? posts : posts.filter((p: PolicyRow) => p.themes.includes(filter))),
    [filter, posts],
  );

  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="py-20 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">Policy & Campaigns</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-3xl leading-tight">Your hub for landscape industry policy & campaigns</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            The latest policy updates, government consultation responses and campaigns from BALI's policy team — representing 1,800 businesses and over 950 accredited members across the UK.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="mailto:policy@bali.org.uk" className="bg-white text-bali-blue px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Contact the policy team</a>
            <a href="https://bali-policy.org.uk" target="_blank" rel="noopener noreferrer" className="border border-white/40 px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">Visit bali-policy.org.uk ↗</a>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-gray-200 bg-gray-50 sticky top-[68px] z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold mr-2">Filter by theme:</span>
            <FilterButton label="All" count={posts.length} active={filter === "All"} onClick={() => setFilter("All")} />
            {POLICY_THEMES.map((t) => (
              <FilterButton key={t} label={t} count={counts[t]} active={filter === t} onClick={() => setFilter(t)} />
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Link to="/policy/$slug" params={{ slug: featured.slug }} className="group grid md:grid-cols-2 gap-8 items-stretch bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all">
              {featured.image_url && (
                <img src={featured.image_url} alt={featured.image_alt ?? featured.title} className="w-full h-64 md:h-full object-cover" />
              )}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3">
                  {featured.themes.map((t: string) => <ThemePill key={t} theme={t as PolicyTheme} />)}
                </div>
                <span className="text-xs uppercase tracking-widest text-bali-purple font-semibold">
                  Featured · {featured.date_text} · {featured.read_minutes} min read
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3 group-hover:text-bali-blue transition-colors">{featured.title}</h2>
                <p className="text-gray-600 leading-relaxed line-clamp-4">{featured.description}</p>
                <span className="inline-block mt-5 text-bali-blue font-semibold group-hover:underline">Read full briefing →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {rest.length === 0 && !featured && <p className="text-center text-gray-500 py-12">No posts found for this theme.</p>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p: PolicyRow) => (
              <Link key={p.slug} to="/policy/$slug" params={{ slug: p.slug }} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-bali-blue hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
                {p.image_url && <img src={p.image_url} alt={p.image_alt ?? p.title} loading="lazy" className="w-full h-44 object-cover" />}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.themes.map((t) => <ThemePill key={t} theme={t as PolicyTheme} small />)}
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{p.date_text} · {p.read_minutes} min read</p>
                  <h3 className="font-bold text-gray-900 leading-snug group-hover:text-bali-blue transition-colors line-clamp-3">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}

function FilterButton({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${active ? "bg-bali-blue text-white border-bali-blue" : "bg-white text-gray-700 border-gray-300 hover:border-bali-blue hover:text-bali-blue"}`}
    >
      {label} <span className="opacity-70 ml-1">({count})</span>
    </button>
  );
}

const THEME_STYLES: Record<PolicyTheme, string> = {
  "Budget & Tax": "bg-amber-100 text-amber-900",
  Consultations: "bg-blue-100 text-blue-900",
  Environment: "bg-emerald-100 text-emerald-900",
  "Business & Trade": "bg-purple-100 text-purple-900",
};

function ThemePill({ theme, small = false }: { theme: PolicyTheme; small?: boolean }) {
  const style = THEME_STYLES[theme] || "bg-gray-100 text-gray-800";
  return (
    <span className={`inline-block rounded-full font-semibold ${style} ${small ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1"}`}>
      {theme}
    </span>
  );
}
