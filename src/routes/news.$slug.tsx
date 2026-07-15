import { useEffect } from "react";
import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import AdBanner from "../components/ads/AdBanner";
import { fetchNewsBySlug, fetchNewsList, subscribeTable } from "../lib/content/db";

export const Route = createFileRoute("/news/$slug")({
  loader: async ({ params }) => {
    const [article, all] = await Promise.all([
      fetchNewsBySlug(params.slug),
      fetchNewsList(),
    ]);
    if (!article) throw notFound();
    const idx = all.findIndex((a) => a.slug === params.slug);
    return {
      article,
      prev: idx > 0 ? all[idx - 1] : undefined,
      next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined,
    };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a?.title ?? "News article";
    const desc = a?.description?.slice(0, 155) ?? "BALI news";
    return {
      meta: [
        { title: `${title} — BALI News` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BALI News` },
        { property: "og:description", content: desc },
        ...(a?.image_url
          ? [
              { property: "og:image", content: a.image_url },
              { name: "twitter:image", content: a.image_url },
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
  const { article, prev, next } = Route.useLoaderData();
  const router = useRouter();
  useEffect(() => {
    router.invalidate();
    return subscribeTable("news_articles", () => router.invalidate());
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <article className="flex-1">
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
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">BALI News</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
            {article.date_text && <p className="text-blue-100 text-sm">{article.date_text}</p>}
          </div>
        </header>

        {article.image_url && (
          <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
            <img
              src={article.image_url}
              alt={article.image_alt ?? article.title}
              loading="eager"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-black/5"
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 py-12">
          {article.description && (
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{article.description}</p>
          )}
          <div className="prose prose-lg max-w-none space-y-5 text-gray-700 leading-relaxed">
            {article.body_paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>

          <div className="mt-12">
            <AdBanner placement="article-footer" seed={article.slug.length} variant="compact" />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link to="/news/$slug" params={{ slug: prev.slug }} className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">← Newer</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to="/news/$slug" params={{ slug: next.slug }} className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all text-right">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Older →</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{next.title}</div>
              </Link>
            ) : <div />}
          </div>

          <div className="mt-10 text-center">
            <Link to="/news" className="text-bali-blue font-semibold hover:underline">← All news</Link>
          </div>
        </div>
      </article>
      <Footer />
      <CookieBanner />
    </div>
  );
}
