import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import mediaJson from "../content/media.json";

const TITLE = "Media — BALI";
const DESC = "Watch films from the BALI National Conference, RHS Chelsea Flower Show, the National Landscape Awards and our learning programme — with full video, transcripts and accompanying articles.";

export const Route = createFileRoute("/help/media/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: MediaIndex,
});

type Video = {
  slug: string;
  videoId: string;
  title: string;
  published: string;
  theme: string;
  description: string;
};

const VIDEOS = mediaJson as Video[];

const THEMES: { id: string; title: string; lede: string }[] = [
  {
    id: "national-conference-2025",
    title: "BALI National Conference",
    lede: "Keynotes and conversations from our flagship annual gathering — climate resilience, biodiversity net gain and the future of the landscape industry.",
  },
  {
    id: "rhs-chelsea-flower-show",
    title: "RHS Chelsea Flower Show",
    lede: "Behind-the-build films, garden tours and member stories from BALI's presence at the world's most famous flower show.",
  },
  {
    id: "national-landscape-awards",
    title: "National Landscape Awards",
    lede: "Highlights from the National Landscape Awards and practical workshops for members preparing an entry.",
  },
  {
    id: "learning-development",
    title: "Learning & development",
    lede: "Webinars, college tours and training films supporting careers and continuing professional development across the sector.",
  },
];

function thumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function MediaIndex() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
            <div className="flex items-center gap-3 text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-6">
              <span className="h-px w-8 bg-emerald-300" />
              Knowledge &amp; Insight
            </div>
            <h1 className="font-bold text-4xl md:text-6xl leading-[1.05] mb-6">Media</h1>
            <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-3xl">
              Films, keynotes and conversations from across the BALI year — organised by theme, with transcripts and accompanying articles for each video.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-14 lg:py-20 space-y-16">
          {THEMES.map((t) => {
            const items = VIDEOS.filter((v) => v.theme === t.id);
            if (!items.length) return null;
            return (
              <div key={t.id} id={t.id}>
                <h2 className="font-bold text-2xl md:text-3xl text-bali-blue mb-2">{t.title}</h2>
                <p className="text-slate-600 max-w-3xl mb-6 leading-relaxed">{t.lede}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((v) => (
                    <Link
                      key={v.slug}
                      to="/help/media/$slug"
                      params={{ slug: v.slug }}
                      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-bali-green hover:shadow-lg transition-all flex flex-col"
                    >
                      <div className="relative aspect-video bg-slate-100">
                        <img src={thumb(v.videoId)} alt="" loading="lazy" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-bali-green group-hover:text-white transition-colors flex items-center justify-center shadow-lg">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">{new Date(v.published).toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>
                        <h3 className="font-bold text-slate-900 leading-snug group-hover:text-bali-green transition-colors">{v.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
