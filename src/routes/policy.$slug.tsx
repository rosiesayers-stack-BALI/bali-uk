import { createFileRoute, notFound } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { fetchPolicyBySlug, fetchPolicyList, type PolicyRow } from "../lib/content/db";

type PolicyTheme = "Budget & Tax" | "Consultations" | "Environment" | "Business & Trade";

const THEME_STYLES: Record<string, string> = {
  "Budget & Tax": "bg-amber-100 text-amber-900",
  Consultations: "bg-blue-100 text-blue-900",
  Environment: "bg-emerald-100 text-emerald-900",
  "Business & Trade": "bg-purple-100 text-purple-900",
};

const HEADING_RE = /^[A-Z][A-Za-z &/]+$/;

export const Route = createFileRoute("/policy/$slug")({
  loader: async ({ params }) => {
    const [post, all] = await Promise.all([fetchPolicyBySlug(params.slug), fetchPolicyList()]);
    if (!post) throw notFound();
    const idx = all.findIndex((p) => p.slug === params.slug);
    const related = all
      .filter((p) => p.slug !== params.slug && p.themes.some((t) => post.themes.includes(t)))
      .slice(0, 3);
    return {
      post,
      prev: idx > 0 ? all[idx - 1] : undefined,
      next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined,
      related,
    };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    const title = p?.title ?? "Policy update";
    const desc = p?.description?.slice(0, 155) ?? "BALI Policy & Campaigns";
    return {
      meta: [
        { title: `${title} — BALI Policy` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BALI Policy` },
        { property: "og:description", content: desc },
        ...(p?.image_url ? [
          { property: "og:image", content: p.image_url },
          { name: "twitter:image", content: p.image_url },
        ] : []),
      ],
    };
  },
  component: PolicyPostPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-bali-blue mb-4">Post not found</h1>
          <p className="text-gray-600 mb-6">This policy briefing isn't available.</p>
          <Link to="/policy" className="text-bali-blue underline">Back to all policy updates</Link>
        </div>
      </main>
      <Footer />
    </div>
  ),
});

function PolicyPostPage() {
  const { post, prev, next, related } = useLoaderData({ from: '/policy/$slug' });
  const externalLinks = Array.isArray(post.external_links)
    ? (post.external_links as Array<{ label: string; url: string }>)
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <article className="flex-1">
        <header className="relative overflow-hidden py-16 text-white" style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 relative">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/policy" className="hover:text-white">Policy & Campaigns</Link>
              <span className="opacity-60">/</span>
              <span className="text-white truncate max-w-xs">{post.title}</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.themes.map((t: string) => (
                <span key={t} className={`inline-block text-xs px-2.5 py-1 rounded-full font-semibold ${THEME_STYLES[t] ?? "bg-gray-100 text-gray-800"}`}>{t}</span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
            <p className="text-blue-100 text-sm">By {post.author} · {post.date_text} · {post.read_minutes} min read</p>
          </div>
        </header>

        {post.image_url && (
          <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
            <img src={post.image_url} alt={post.image_alt ?? post.title} loading="eager" className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-black/5" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{post.description}</p>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            {post.body_paragraphs.map((p: string, i: number) => {
              const isHeading = p.length < 60 && HEADING_RE.test(p);
              if (isHeading) return <h2 key={i} className="text-2xl font-bold text-bali-blue mt-10 mb-2">{p}</h2>;
              return <p key={i}>{p}</p>;
            })}
          </div>
          {post.pullquote_text && (
            <blockquote className="my-10 border-l-4 border-bali-grass bg-gray-50 px-6 py-5 rounded-r-xl">
              <p className="text-xl italic text-gray-800 leading-relaxed">"{post.pullquote_text}"</p>
              {post.pullquote_attribution && (
                <footer className="mt-3 text-sm uppercase tracking-widest text-gray-500 font-semibold">— {post.pullquote_attribution}</footer>
              )}
            </blockquote>
          )}
          {externalLinks.length > 0 && (
            <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-bali-blue mb-3">Source documents</h3>
              <ul className="space-y-2">
                {externalLinks.map((l) => (
                  <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-bali-blue font-medium hover:underline">{l.label} ↗</a></li>
                ))}
              </ul>
            </div>
          )}
          {post.source_url && (
            <p className="mt-10 text-sm text-gray-500">
              Originally published at <a href={post.source_url} target="_blank" rel="noopener noreferrer" className="text-bali-blue hover:underline">bali-policy.org.uk</a>.
            </p>
          )}

          <div className="mt-16 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link to="/policy/$slug" params={{ slug: prev.slug }} className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">← Newer</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to="/policy/$slug" params={{ slug: next.slug }} className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all text-right">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Older →</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{next.title}</div>
              </Link>
            ) : <div />}
          </div>
          <div className="mt-10 text-center">
            <Link to="/policy" className="text-bali-blue font-semibold hover:underline">← All policy updates</Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="bg-gray-50 py-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-bali-blue mb-8">Related updates</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r: PolicyRow) => (
                  <Link key={r.slug} to="/policy/$slug" params={{ slug: r.slug }} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-bali-blue hover:shadow-lg transition-all">
                    {r.image_url && <img src={r.image_url} alt={r.image_alt ?? r.title} loading="lazy" className="w-full h-40 object-cover" />}
                    <div className="p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{r.date_text}</p>
                      <h3 className="font-bold text-gray-900 leading-snug group-hover:text-bali-blue transition-colors line-clamp-3">{r.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <Footer />
      <CookieBanner />
    </div>
  );
}
