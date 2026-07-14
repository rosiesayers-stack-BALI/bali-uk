import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageHeader } from "../components/mybali/DashboardShell";
import { NEWS_ARTICLES } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/news")({
  head: () => ({ meta: [{ title: "News — My BALI" }] }),
  component: NewsPage,
});

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function NewsPage() {
  const featured = NEWS_ARTICLES.find((a) => a.featured) ?? NEWS_ARTICLES[0];
  const rest = NEWS_ARTICLES.filter((a) => a.id !== featured.id);

  return (
    <>
      <PageHeader title="Member news" subtitle="Industry insight, policy updates and BALI announcements for members." />

      {/* Featured */}
      <article className="mb-8 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden grid md:grid-cols-2">
        <div className="relative min-h-[220px] md:min-h-[320px]">
          <img src={featured.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="p-6 sm:p-8 flex flex-col">
          <span className="inline-flex self-start text-[11px] uppercase tracking-wide font-semibold px-2.5 py-1 rounded-full bg-bali-blue/10 text-bali-blue mb-3">
            Featured · {featured.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-bali-slate tracking-tight">{featured.title}</h2>
          <p className="flex items-center gap-2 text-xs text-gray-500 mt-2">
            <CalendarDays className="w-3.5 h-3.5" aria-hidden />
            {fmtDate(featured.date)}
          </p>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">{featured.excerpt}</p>
          <a
            href="#"
            className="mt-auto inline-flex items-center gap-1.5 text-bali-blue font-semibold text-sm hover:underline pt-4"
          >
            Read the full article <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
        </div>
      </article>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((a) => (
          <article
            key={a.id}
            className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-bali-blue/30 transition"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={a.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-[10px] uppercase tracking-wide font-semibold text-bali-blue mb-1.5">
                {a.category}
              </span>
              <h3 className="font-bold text-bali-slate leading-snug group-hover:text-bali-blue transition-colors">
                {a.title}
              </h3>
              <p className="flex items-center gap-2 text-xs text-gray-500 mt-1.5">
                <CalendarDays className="w-3 h-3" aria-hidden />
                {fmtDate(a.date)}
              </p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{a.excerpt}</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-bali-blue hover:underline">
                Read more <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
