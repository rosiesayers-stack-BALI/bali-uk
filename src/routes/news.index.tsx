import { useEffect, useMemo } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import AdBanner from "../components/ads/AdBanner";
import SponsoredCard from "../components/ads/SponsoredCard";
import { fetchNewsList, subscribeTable, type NewsRow } from "../lib/content/db";
import { useHeadline, computeTrending } from "../lib/admin/news-stats";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Latest News — BALI" },
      {
        name: "description",
        content:
          "News, comment and updates from across the UK landscape industry — from BALI members, partners and the Association.",
      },
      { property: "og:title", content: "Latest News — BALI" },
      {
        property: "og:description",
        content: "News and updates from the British Association of Landscape Industries.",
      },
    ],
  }),
  loader: async () => ({ articles: await fetchNewsList() }),
  component: NewsIndex,
});

function NewsIndex() {
  const { articles } = Route.useLoaderData();
  const router = useRouter();
  const headline = useHeadline();

  // Live-refresh when the shared mock store changes (admin edits).
  useEffect(() => subscribeTable("news_articles", () => router.invalidate()), [router]);

  // Headline (paid pinned) first, then trending, then newest-first.
  const ordered = useMemo(() => {
    const trendingId = computeTrending(articles.map((a: NewsRow) => ({ id: a.id, title: a.title })));
    const headlineRow = articles.find((a: NewsRow) => a.id === headline.headlineId);
    const trendingRow = articles.find(
      (a: NewsRow) => a.id === trendingId && a.id !== headline.headlineId,
    );
    const rest = articles.filter(
      (a: NewsRow) => a.id !== headline.headlineId && a.id !== trendingId,
    );
    return {
      featured: headlineRow ?? trendingRow ?? articles[0],
      pinnedTrending: headlineRow && trendingRow ? trendingRow : null,
      rest: [
        ...(headlineRow ? [] : []),
        ...(headlineRow && trendingRow ? [] : trendingRow && !headlineRow ? [] : []),
        ...rest,
      ],
    };
  }, [articles, headline.headlineId]);

  const featured = ordered.featured;
  const rest = ordered.rest;
  const pinnedTrending = ordered.pinnedTrending;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section
        className="py-16 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6D4276 0%, #21509A 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
            BALI News
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            News, comment and case studies from BALI members, partners and the Association — updated regularly with the latest from the UK landscape industry.
          </p>
        </div>
      </section>

      {featured && (
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              to="/news/$slug"
              params={{ slug: featured.slug }}
              className="group grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {featured.image_url && (
                <img
                  src={featured.image_url}
                  alt={featured.image_alt ?? featured.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              )}
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-bali-purple font-semibold">
                  Featured · {featured.date_text || "Latest"}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-3 group-hover:text-bali-blue transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-4">{featured.description}</p>
                <span className="inline-block mt-5 text-bali-blue font-semibold group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <AdBanner placement="news-inline" className="mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a: NewsRow, i: number) => {
              const card = (
                <Link
                  key={a.slug}
                  to="/news/$slug"
                  params={{ slug: a.slug }}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-bali-blue hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {a.image_url && (
                    <img
                      src={a.image_url}
                      alt={a.image_alt ?? a.title}
                      loading="lazy"
                      className="w-full h-44 object-cover"
                    />
                  )}
                  <div className="p-5">
                    {a.date_text && (
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{a.date_text}</p>
                    )}
                    <h3 className="font-bold text-gray-900 leading-snug group-hover:text-bali-blue transition-colors line-clamp-3">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{a.description}</p>
                  </div>
                </Link>
              );
              // Insert a sponsored member spotlight after every 5th article.
              if ((i + 1) % 5 === 0) {
                return [
                  card,
                  <SponsoredCard key={`sp-${i}`} placement="news-feed" seed={Math.floor(i / 5)} />,
                ];
              }
              return card;
            })}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
