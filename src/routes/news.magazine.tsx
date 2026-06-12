import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import HelpPage from "../components/HelpPage";

const TITLE = "Landscape News Magazine — BALI";
const DESC = "Landscape News is BALI's official member magazine — member project stories, business advice, opinion, news and events from the UK's biggest trade association for the landscape industries.";

export const Route = createFileRoute("/news/magazine")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Page,
});

type Topic = "Awards" | "Chelsea" | "Business" | "Design" | "People" | "Sustainability";

type Highlight = { title: string; body: string; topics: Topic[] };

type Issue = {
  season: string;
  published: string;        // e.g. "March 2026"
  pages: number;
  issuuId: string;
  bg: string;               // hex without #
  highlights: Highlight[];
};

const ISSUES: Issue[] = [
  {
    season: "Spring 2026",
    published: "March 2026",
    pages: 56,
    issuuId: "bali_landscape_news_spring_2026",
    bg: "0e8b61",
    highlights: [
      { title: "Court is in session", body: "Three decades behind the scenes with the \"King of Chelsea\", Mark Gregory.", topics: ["Chelsea", "People"] },
      { title: "Is your brand working hard enough for you?", body: "Expert advice on knowing when your brand needs a refresh and how to do it.", topics: ["Business"] },
      { title: "From natural to nourishing", body: "A look at the domestic design trends set to shape 2026.", topics: ["Design"] },
      { title: "Smiley, happy people", body: "Why a people-first philosophy can solve the industry's ills.", topics: ["People", "Business"] },
    ],
  },
  {
    season: "Winter 2025",
    published: "December 2025",
    pages: 56,
    issuuId: "bali_landscape_news_winter_25",
    bg: "3b62ae",
    highlights: [
      { title: "Isn't that Grand?", body: "An exclusive interview with the BALI Awards Grand Award winner 2025, The Outdoor Room.", topics: ["Awards"] },
      { title: "It's only natural: the rise of natural pools in UK garden landscapes", body: "Ellicar invites us into this eco-friendly world of harmony with the environment.", topics: ["Sustainability", "Design"] },
      { title: "Shout about it", body: "Our social media guru reveals the top tips and tricks for a successful social media strategy.", topics: ["Business"] },
      { title: "Under the surface", body: "Tim O'Hare Associates examine the importance of soil choice in landscaping.", topics: ["Design"] },
    ],
  },
  {
    season: "Autumn 2025",
    published: "September 2025",
    pages: 56,
    issuuId: "bali_landscape_news_autumn_2025",
    bg: "CF5e2c",
    highlights: [
      { title: "Inside the mind of a BALI awards judge", body: "Chair of the judging panel, John Melmoe, reveals the secrets to a successful awards entry.", topics: ["Awards", "People"] },
      { title: "Weathering the storm", body: "In a cautious market, designer Adam Vetere shares how creativity and personalisation can help you to thrive.", topics: ["Business", "Design"] },
      { title: "Pitch perfect", body: "North Hort's Gareth Jones lifts the lid on finding success with celebrity clients.", topics: ["Business"] },
      { title: "First impressions", body: "How to make the most of probationary periods and set your employees up for success.", topics: ["People", "Business"] },
    ],
  },
  {
    season: "Summer 2025",
    published: "June 2025",
    pages: 56,
    issuuId: "landscape_news_summer_2025",
    bg: "28a49e",
    highlights: [
      { title: "Unhappy clients: what can you do when a dispute arises?", body: "Discover how BALI's impartial ombudsman can help resolve client disputes.", topics: ["Business"] },
      { title: "Going for gold", body: "We relive five glorious days at Chelsea and how BALI members bagged a mammoth medal haul.", topics: ["Chelsea", "Awards"] },
      { title: "From eye to bee", body: "Garden designer Jamie Langlands explores how and why you should embrace our natural landscape in your designs.", topics: ["Design", "Sustainability"] },
      { title: "A call to arms", body: "How ex-military personnel can offer a wealth of transferable skills to landscaping.", topics: ["People"] },
    ],
  },
];

const ALL_TOPICS: Topic[] = ["Awards", "Chelsea", "Business", "Design", "People", "Sustainability"];

const coverUrl = (id: string) => `https://image.isu.pub/${id}/jpg/page_1.jpg`;
const issuuPage = (id: string) => `https://issuu.com/balilandscapeuk/docs/${id}`;
const embedSrc = (i: Issue) => `https://e.issuu.com/embed.html?backgroundColor=%23${i.bg}&backgroundColorFullscreen=%23${i.bg}&d=${i.issuuId}&hideIssuuLogo=true&u=balilandscapeuk`;

/** Designed cover tile — Issuu's real cover JPGs require a private hash, so we render a styled card. */
function CoverTile({ issue, className = "" }: { issue: Issue; className?: string }) {
  const [season, year] = issue.season.split(" ");
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-5 text-white overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, #${issue.bg} 0%, #${issue.bg}cc 60%, #00000040 100%)` }}
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] opacity-90">
        <span>Landscape News</span>
        <span>BALI</span>
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1">Issue · {year}</div>
        <div className="font-bold text-3xl md:text-4xl leading-[0.95] mb-1">{season}</div>
        <div className="text-sm opacity-80">{issue.published}</div>
      </div>
      <div className="flex items-end justify-between text-[10px] font-semibold uppercase tracking-wider opacity-80">
        <span>{issue.pages} pages</span>
        <span>{issue.highlights[0]?.topics[0]}</span>
      </div>
      {/* subtle decorative arc */}
      <div className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 rounded-full border-[14px] border-white/10" />
    </div>
  );
}


function Page() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<Topic | "All">("All");
  const [modalIssue, setModalIssue] = useState<Issue | null>(null);

  // Lock body scroll while modal open + close on Esc
  useEffect(() => {
    if (!modalIssue) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalIssue(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [modalIssue]);

  const latest = ISSUES[0];
  const archive = ISSUES.slice(1);

  // Search filters across all issues + highlights
  const filteredArchive = useMemo(() => {
    const q = query.trim().toLowerCase();
    return archive
      .map((iss) => {
        const matchingHighlights = iss.highlights.filter((h) => {
          const topicOk = topic === "All" || h.topics.includes(topic);
          const qOk = !q || h.title.toLowerCase().includes(q) || h.body.toLowerCase().includes(q) || iss.season.toLowerCase().includes(q);
          return topicOk && qOk;
        });
        return { iss, matchingHighlights };
      })
      .filter((x) => x.matchingHighlights.length > 0);
  }, [query, topic, archive]);

  return (
    <>
      <HelpPage
        eyebrow="News"
        title="Landscape News"
        intro="Landscape News is BALI's official member magazine — filled with great stories about member projects, helpful business advice, and thought-provoking opinion."
        body={
          <>
            {/* FACT STRIP */}
            <div className="not-prose -mt-2 mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { v: "Quarterly", l: "4 issues a year" },
                { v: "1972", l: "Publishing since" },
                { v: "1,200+", l: "Print readers" },
                { v: "2,000+", l: "Digital subscribers" },
              ].map((s) => (
                <div key={s.l} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="font-bold text-bali-blue text-xl md:text-2xl leading-tight">{s.v}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">{s.l}</div>
                </div>
              ))}
            </div>

            {/* HERO LATEST ISSUE */}
            <div className="not-prose mb-14">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 mb-4">
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-1.5">Latest issue</div>
                  <h3 className="font-bold text-2xl md:text-3xl text-bali-blue leading-tight">{latest.season}</h3>
                  <div className="text-sm text-slate-500 mt-1">{latest.published} · {latest.pages} pages</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                  <a href={issuuPage(latest.issuuId)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-2 rounded-full border border-slate-200 hover:border-bali-green hover:text-bali-green transition-colors text-slate-600">Open on Issuu ↗</a>
                  <button onClick={() => setModalIssue(latest)} className="text-xs font-bold px-3 py-2 rounded-full bg-bali-green text-white hover:bg-bali-slate transition-colors">Fullscreen ⤢</button>
                </div>
              </div>

              {/* Desktop: embed. Mobile: tap cover. */}
              <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100" style={{ height: 720 }}>
                <iframe
                  title={`Landscape News — ${latest.season}`}
                  src={embedSrc(latest)}
                  width="100%"
                  height="100%"
                  frameBorder={0}
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="block w-full h-full"
                />
              </div>
              <button
                onClick={() => setModalIssue(latest)}
                className="md:hidden group relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg block"
                style={{ aspectRatio: "3 / 4", background: `#${latest.bg}` }}
              >
                <img src={coverUrl(latest.issuuId)} alt={`${latest.season} cover`} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white font-bold text-lg">▶ Read issue</span>
              </button>

              {/* Highlights for latest */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {latest.highlights.map((h, i) => (
                  <div key={h.title} className="p-4 bg-white border border-slate-200 rounded-xl">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-bali-green mb-1.5">In this issue · {String(i + 1).padStart(2, "0")}</div>
                    <div className="font-bold text-slate-900 mb-1 leading-snug">{h.title}</div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2.5">{h.body}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {h.topics.map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ARCHIVE */}
            <h3>Browse the archive</h3>
            <p className="text-slate-600 -mt-1 mb-5">Search by keyword or filter by topic. Tap any cover to read the full issue.</p>

            <div className="not-prose mb-6 space-y-3">
              <div className="relative">
                <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, issues…"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-bali-green/30 focus:border-bali-green text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {(["All", ...ALL_TOPICS] as const).map((t) => {
                  const active = topic === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${active ? "bg-bali-green text-white border-bali-green" : "bg-white text-slate-600 border-slate-200 hover:border-bali-green hover:text-bali-green"}`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {filteredArchive.map(({ iss, matchingHighlights }) => (
                <article key={iss.issuuId} className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-all">
                  <button
                    onClick={() => setModalIssue(iss)}
                    className="relative block w-full overflow-hidden"
                    style={{ aspectRatio: "3 / 4", background: `#${iss.bg}` }}
                    aria-label={`Read ${iss.season}`}
                  >
                    <img src={coverUrl(iss.issuuId)} alt={`${iss.season} cover`} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                    <span className="absolute bottom-3 left-3 right-3 text-center text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">▶ Read issue</span>
                  </button>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-bold text-slate-900 leading-snug">{iss.season}</div>
                    <div className="text-xs text-slate-500 mb-3">{iss.published} · {iss.pages} pages</div>
                    <ul className="space-y-1.5 text-sm text-slate-600 mb-3 flex-1">
                      {matchingHighlights.slice(0, 3).map((h) => (
                        <li key={h.title} className="leading-snug">
                          <span className="text-bali-green mr-1.5">›</span>{h.title}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
                      <button onClick={() => setModalIssue(iss)} className="font-bold text-bali-green hover:underline">Read →</button>
                      <a href={issuuPage(iss.issuuId)} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-500 hover:text-bali-green">Issuu ↗</a>
                    </div>
                  </div>
                </article>
              ))}
              {filteredArchive.length === 0 && (
                <div className="col-span-full p-8 text-center text-slate-500 border border-dashed border-slate-200 rounded-2xl">
                  No issues match your search. <button onClick={() => { setQuery(""); setTopic("All"); }} className="text-bali-green font-semibold underline">Clear filters</button>
                </div>
              )}
            </div>

            {/* CTA CARDS */}
            <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
              <a href="mailto:landscapenews@bali.org.uk" className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-bali-green hover:shadow-md transition-all">
                <div className="text-2xl mb-2">✍️</div>
                <h4 className="font-bold text-slate-900 mb-1">Pitch a story</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">Got a project, opinion or piece of expertise the industry should hear? Email the editor.</p>
                <span className="text-sm font-bold text-bali-green">landscapenews@bali.org.uk →</span>
              </a>
              <a href="/about/advertise" className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-bali-green hover:shadow-md transition-all">
                <div className="text-2xl mb-2">📣</div>
                <h4 className="font-bold text-slate-900 mb-1">Advertise in Landscape News</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">Quarterly print + digital. Full media-pack rates, specs and deadlines.</p>
                <span className="text-sm font-bold text-bali-green">See ad rates →</span>
              </a>
              <a href="/join" className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-bali-green hover:shadow-md transition-all">
                <div className="text-2xl mb-2">📬</div>
                <h4 className="font-bold text-slate-900 mb-1">Get it in print</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">Print copies are posted free to BALI members every quarter. Join the Association.</p>
                <span className="text-sm font-bold text-bali-green">Become a member →</span>
              </a>
            </div>
          </>
        }
      />

      {/* FULLSCREEN MODAL */}
      {modalIssue && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col" role="dialog" aria-modal="true" aria-label={`${modalIssue.season} reader`}>
          <div className="flex items-center justify-between gap-3 p-3 md:p-4 text-white">
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">Landscape News</div>
              <div className="font-bold truncate">{modalIssue.season} · {modalIssue.pages} pages</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a href={issuuPage(modalIssue.issuuId)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Open on Issuu ↗</a>
              <button onClick={() => setModalIssue(null)} className="text-xs font-bold px-3 py-2 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors" aria-label="Close reader">Close ✕</button>
            </div>
          </div>
          <div className="flex-1 px-3 pb-3 md:px-4 md:pb-4 min-h-0">
            <iframe
              title={`Landscape News — ${modalIssue.season}`}
              src={embedSrc(modalIssue)}
              width="100%"
              height="100%"
              frameBorder={0}
              allow="fullscreen"
              allowFullScreen
              className="block w-full h-full rounded-xl bg-slate-100"
            />
          </div>
        </div>
      )}
    </>
  );
}

