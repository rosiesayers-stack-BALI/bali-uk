import { createFileRoute, notFound } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { getNewsArticle, newsArticles } from "../content/news";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const slug = (params as { slug: string }).slug;
    const a = getNewsArticle(slug);
    const title = a?.title ?? "News article";
    const desc = a?.description?.slice(0, 155) ?? "BALI news";
    return {
      meta: [
        { title: `${title} — BALI News` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BALI News` },
        { property: "og:description", content: desc },
        ...(a?.image
          ? [
              { property: "og:image", content: a.image.url },
              { name: "twitter:image", content: a.image.url },
            ]
          : []),
      ],
    };
  },
  component: NewsArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-bali-blue mb-4">Article not found</h1>
          <p className="text-gray-600 mb-6">This news article isn't available.</p>
          <Link to="/news" className="text-bali-blue underline">Back to all news</Link>
        </div>
      </main>
      <Footer />
    </div>
  ),
});

function NewsArticlePage() {
  const { slug } = Route.useParams();
  const article = getNewsArticle(slug);
  if (!article) throw notFound();

  const idx = newsArticles.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? newsArticles[idx - 1] : undefined;
  const next = idx >= 0 && idx < newsArticles.length - 1 ? newsArticles[idx + 1] : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <article className="flex-1">
        {/* Hero */}
        <header
          className="relative overflow-hidden py-16 text-white"
          style={{ background: "linear-gradient(135deg, #6D4276 0%, #21509A 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-6 relative">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/news" className="hover:text-white">News</Link>
              <span className="opacity-60">/</span>
              <span className="text-white truncate max-w-xs">{article.title}</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
              BALI News
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            {article.date && (
              <p className="text-blue-100 text-sm">{article.date}</p>
            )}
          </div>
        </header>

        {/* Image */}
        {article.image && (
          <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
            <img
              src={article.image.url}
              alt={article.image.alt}
              loading="eager"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-black/5"
            />
          </div>
        )}

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {article.description && (
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              {article.description}
            </p>
          )}
          <div className="prose prose-lg max-w-none space-y-5 text-gray-700 leading-relaxed">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to="/news/$slug"
                params={{ slug: prev.slug }}
                className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all"
              >
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">← Newer</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to="/news/$slug"
                params={{ slug: next.slug }}
                className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all text-right"
              >
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Older →</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{next.title}</div>
              </Link>
            ) : <div />}
          </div>

          <div className="mt-10 text-center">
            <Link to="/news" className="text-bali-blue font-semibold hover:underline">
              ← All news
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <CookieBanner />
    </div>
  );
}
