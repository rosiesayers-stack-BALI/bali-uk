import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import mediaJson from "../content/media.json";

type Video = {
  slug: string;
  videoId: string;
  title: string;
  published: string;
  theme: string;
  description: string;
};

const VIDEOS = mediaJson as Video[];

// Editorial extensions per video — transcripts and accompanying articles.
// Add entries here as transcripts/articles are produced.
type Extra = { transcript?: string; article?: string };
const EXTRAS: Record<string, Extra> = {};

const THEME_LABELS: Record<string, string> = {
  "national-conference-2025": "BALI National Conference",
  "rhs-chelsea-flower-show": "RHS Chelsea Flower Show",
  "national-landscape-awards": "National Landscape Awards",
  "learning-development": "Learning & development",
};

export const Route = createFileRoute("/help/media/$slug")({
  loader: ({ params }) => {
    const video = VIDEOS.find((v) => v.slug === params.slug);
    if (!video) throw notFound();
    return { video };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.video;
    if (!v) return { meta: [{ title: "Video — BALI" }] };
    const desc = v.description.split("\n\n")[0].slice(0, 160);
    return {
      meta: [
        { title: `${v.title} — BALI` },
        { name: "description", content: desc },
        { property: "og:title", content: v.title },
        { property: "og:description", content: desc },
        { property: "og:image", content: `https://i.ytimg.com/vi/${v.videoId}/maxresdefault.jpg` },
        { property: "og:type", content: "video.other" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Video not found</h1>
        <Link to="/help/media" className="text-bali-green font-semibold">← Back to Media</Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Something went wrong</h1>
        <p className="text-slate-600 mb-6">{error.message}</p>
        <button onClick={reset} className="text-bali-green font-semibold">Try again</button>
      </main>
      <Footer />
    </div>
  ),
  component: VideoPage,
});

function VideoPage() {
  const { video } = Route.useLoaderData();
  const extra = EXTRAS[video.slug] ?? {};
  const themeLabel = THEME_LABELS[video.theme] ?? "Media";
  const related = VIDEOS.filter((v) => v.theme === video.theme && v.slug !== video.slug).slice(0, 3);
  const paragraphs = video.description.split(/\n\n+/).filter(Boolean);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 pt-10 pb-4 text-sm text-slate-300">
            <Link to="/help/media" className="hover:text-white">← Media</Link>
            <span className="mx-2 text-slate-500">/</span>
            <Link to="/help/media" hash={video.theme} className="hover:text-white">{themeLabel}</Link>
          </div>
          <div className="max-w-5xl mx-auto px-6 pb-10">
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs uppercase tracking-wider text-bali-green font-bold mb-3">{themeLabel}</p>
          <h1 className="font-bold text-3xl md:text-4xl text-bali-blue leading-tight mb-3">{video.title}</h1>
          <p className="text-slate-500 text-sm mb-8">Published {new Date(video.published).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-slate max-w-none mb-10">
            {paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>

          {extra.article && (
            <div className="border-t border-slate-200 pt-10 mb-10">
              <h2 className="font-bold text-2xl text-bali-blue mb-4">Article</h2>
              <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: extra.article }} />
            </div>
          )}

          {extra.transcript ? (
            <details className="border-t border-slate-200 pt-10">
              <summary className="cursor-pointer font-bold text-2xl text-bali-blue mb-4 list-none flex items-center gap-2">
                <span>Transcript</span>
                <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="prose prose-slate max-w-none mt-4 whitespace-pre-wrap">{extra.transcript}</div>
            </details>
          ) : (
            <div className="border-t border-slate-200 pt-10 text-sm text-slate-500">
              <p><strong className="text-slate-700">Transcript:</strong> Coming soon. <Link to="/contact" className="text-bali-green font-semibold">Request a transcript</Link>.</p>
            </div>
          )}
        </section>

        {related.length > 0 && (
          <section className="bg-slate-50 py-14">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="font-bold text-2xl text-bali-blue mb-6">More from {themeLabel}</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((v) => (
                  <Link key={v.slug} to="/help/media/$slug" params={{ slug: v.slug }} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-bali-green hover:shadow-lg transition-all">
                    <div className="aspect-video bg-slate-100">
                      <img src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`} alt="" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm leading-snug group-hover:text-bali-green transition-colors">{v.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
