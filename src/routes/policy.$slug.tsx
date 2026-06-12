import { createFileRoute, notFound } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { getPolicyPost, policyPosts, type PolicyTheme } from "../content/policy";

export const Route = createFileRoute("/policy/$slug")({
  head: ({ params }) => {
    const slug = (params as { slug: string }).slug;
    const p = getPolicyPost(slug);
    const title = p?.title ?? "Policy update";
    const desc = p?.description?.slice(0, 155) ?? "BALI Policy & Campaigns";
    return {
      meta: [
        { title: `${title} — BALI Policy` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BALI Policy` },
        { property: "og:description", content: desc },
        ...(p?.image
          ? [
              { property: "og:image", content: p.image.url },
              { name: "twitter:image", content: p.image.url },
            ]
          : []),
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
          <Link to="/policy" className="text-bali-blue underline">
            Back to all policy updates
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  ),
});

const THEME_STYLES: Record<PolicyTheme, string> = {
  "Budget & Tax": "bg-amber-100 text-amber-900",
  Consultations: "bg-blue-100 text-blue-900",
  Environment: "bg-emerald-100 text-emerald-900",
  "Business & Trade": "bg-purple-100 text-purple-900",
};

const HEADING_RE = /^[A-Z][A-Za-z &/]+$/; // simple heading detector for short Title lines

function PolicyPostPage() {
  const { slug } = Route.useParams();
  const post = getPolicyPost(slug);
  if (!post) throw notFound();

  const idx = policyPosts.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? policyPosts[idx - 1] : undefined;
  const next = idx >= 0 && idx < policyPosts.length - 1 ? policyPosts[idx + 1] : undefined;

  const related = policyPosts
    .filter(
      (p) => p.slug !== slug && p.themes.some((t) => post.themes.includes(t)),
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <article className="flex-1">
        {/* Hero */}
        <header
          className="relative overflow-hidden py-16 text-white"
          style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-6 relative">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/policy" className="hover:text-white">Policy & Campaigns</Link>
              <span className="opacity-60">/</span>
              <span className="text-white truncate max-w-xs">{post.title}</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.themes.map((t) => (
                <span
                  key={t}
                  className={`inline-block text-xs px-2.5 py-1 rounded-full font-semibold ${THEME_STYLES[t]}`}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-blue-100 text-sm">
              By {post.author} · {post.date} · {post.readMinutes} min read
            </p>
          </div>
        </header>

        {/* Image */}
        {post.image && (
          <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
            <img
              src={post.image.url}
              alt={post.image.alt}
              loading="eager"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-black/5"
            />
          </div>
        )}

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {post.description}
          </p>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            {post.body.map((p, i) => {
              const isHeading = p.length < 60 && HEADING_RE.test(p);
              if (isHeading) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-bali-blue mt-10 mb-2"
                  >
                    {p}
                  </h2>
                );
              }
              return <p key={i}>{p}</p>;
            })}
          </div>

          {post.pullquote && (
            <blockquote className="my-10 border-l-4 border-bali-grass bg-gray-50 px-6 py-5 rounded-r-xl">
              <p className="text-xl italic text-gray-800 leading-relaxed">
                "{post.pullquote.text}"
              </p>
              <footer className="mt-3 text-sm uppercase tracking-widest text-gray-500 font-semibold">
                — {post.pullquote.attribution}
              </footer>
            </blockquote>
          )}

          {post.externalLinks && post.externalLinks.length > 0 && (
            <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-bali-blue mb-3">
                Source documents
              </h3>
              <ul className="space-y-2">
                {post.externalLinks.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bali-blue font-medium hover:underline"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.sourceUrl && (
            <p className="mt-10 text-sm text-gray-500">
              Originally published at{" "}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bali-blue hover:underline"
              >
                bali-policy.org.uk
              </a>
              .
            </p>
          )}

          {/* Prev / Next */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to="/policy/$slug"
                params={{ slug: prev.slug }}
                className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all"
              >
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">← Newer</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to="/policy/$slug"
                params={{ slug: next.slug }}
                className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all text-right"
              >
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Older →</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{next.title}</div>
              </Link>
            ) : <div />}
          </div>

          <div className="mt-10 text-center">
            <Link to="/policy" className="text-bali-blue font-semibold hover:underline">
              ← All policy updates
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-gray-50 py-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-bali-blue mb-8">Related updates</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/policy/$slug"
                    params={{ slug: r.slug }}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-bali-blue hover:shadow-lg transition-all"
                  >
                    {r.image && (
                      <img
                        src={r.image.url}
                        alt={r.image.alt}
                        loading="lazy"
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                        {r.date}
                      </p>
                      <h3 className="font-bold text-gray-900 leading-snug group-hover:text-bali-blue transition-colors line-clamp-3">
                        {r.title}
                      </h3>
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
