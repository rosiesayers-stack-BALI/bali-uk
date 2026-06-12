import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import HelpPage from "../components/HelpPage";

const TITLE = "BALI Podcast: Dig Deep";
const DESC = "Dig Deep is BALI's official podcast — honest conversations with leading voices from across the UK landscape industry. Listen on Spotify, Apple Podcasts, Amazon Music and Podbean.";

export const Route = createFileRoute("/help/podcast")({
  head: () => ({
    meta: [
      { title: TITLE + " — BALI" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Page,
});

type Theme = "Chelsea" | "Awards" | "Skills & Careers" | "Sustainability" | "Business" | "Events";

type Episode = {
  n: number;
  title: string;
  date: string;
  length: string;
  desc: string;
  themes: Theme[];
  embedId?: string; // Podbean i= parameter for player-v2 embed
};

const EPISODES: Episode[] = [
  {
    n: 15,
    title: "The Spirit of Chelsea: Stories from the BALI Hive Garden",
    date: "8 June 2026",
    length: "45:59",
    desc: "Recorded live from the BALI Hive Garden at RHS Chelsea Flower Show 2026. Rosie Sayers speaks to designers, suppliers, innovators and one of the Chelsea Pensioners about collaboration, biodiversity, wellbeing and the spirit of Chelsea.",
    themes: ["Chelsea", "Sustainability"],
    embedId: "5venq-1ae30bb-pb",
  },
  { n: 14, title: "Inside Chelsea Build Week with Mark Gregory", date: "20 May 2026", length: "22:57", desc: "Landform Consultants' Mark Gregory on the realities of building a show garden at Chelsea — logistics, weather, plant care and the team craft behind the medals.", themes: ["Chelsea", "Business"] },
  { n: 13, title: "The Final 5% — What Makes an Award-Winning Landscape?", date: "7 May 2026", length: "19:47", desc: "Judges and past winners on the details that separate a strong scheme from a National Landscape Award — finish, planting, client care and storytelling.", themes: ["Awards"] },
  { n: 12, title: "Building a Landscaping Business on People, Standards and Apprenticeships", date: "14 April 2026", length: "21:35", desc: "How a fast-growing contractor put people, training pathways and BALI standards at the centre of the business — and what it took to scale.", themes: ["Business", "Skills & Careers"] },
  { n: 11, title: "Making Biodiversity Net Gain Simple — BNG, Design and the Future of Landscaping", date: "14 April 2026", length: "13:19", desc: "A plain-English guide to BNG for designers and contractors: what it means on site, how to price it, and where the opportunity sits.", themes: ["Sustainability"] },
  { n: 10, title: "What Excellence Looks Like in Landscaping — BALI Awards, Collaboration and the Future", date: "16 March 2026", length: "21:50", desc: "A roundtable on what 'excellence' means today — and how collaboration between designers, contractors and clients drives award-winning work.", themes: ["Awards", "Business"] },
  { n: 9, title: "Roots, Robots & Revolution — How GroundsFest Is Reshaping the Industry", date: "3 March 2026", length: "19:39", desc: "Inside GroundsFest: the machinery, the innovation and what the trade show tells us about where commercial landscaping is heading.", themes: ["Events", "Business"] },
  { n: 8, title: "Two Journeys, One Industry — Young Landscapers on Finding Their Way", date: "18 December 2025", length: "22:16", desc: "Two young landscapers share very different routes into the trade — and what employers can do to keep the next generation engaged.", themes: ["Skills & Careers"] },
  { n: 7, title: "Closing the Skills Gap — Apprenticeships, Bootcamps and the Future of Landscaping", date: "18 December 2025", length: "12:29", desc: "Where the skills gap actually is, what's working (apprenticeships, bootcamps, GoLandscape) and what isn't.", themes: ["Skills & Careers"] },
  { n: 6, title: "Building Skills and Careers in Landscaping with Jonathan Petit from GoLandscape", date: "11 November 2025", length: "16:37", desc: "GoLandscape's Jonathan Petit on careers outreach, school visits and helping young people see landscaping as a serious career choice.", themes: ["Skills & Careers"] },
];

const ALL_THEMES: Theme[] = ["Chelsea", "Awards", "Skills & Careers", "Sustainability", "Business", "Events"];

const PLATFORMS: { name: string; href: string; bg: string; logo: React.ReactNode }[] = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/4bglmLrEdwDi0aMWl5OAxV",
    bg: "#1DB954",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.32a.75.75 0 01-1.03.25c-2.82-1.72-6.37-2.11-10.54-1.16a.75.75 0 11-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34a.75.75 0 01.24 1.03zm1.47-3.27a.94.94 0 01-1.29.31c-3.23-1.99-8.16-2.56-11.98-1.4a.94.94 0 11-.55-1.8c4.38-1.33 9.81-.69 13.51 1.59.44.27.58.85.31 1.3zm.13-3.4C15.3 8.43 8.62 8.21 4.96 9.33a1.13 1.13 0 11-.66-2.16c4.21-1.28 11.59-1.03 16.16 1.69a1.13 1.13 0 01-1.16 1.93z"/></svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/dig-deep/id1831214211",
    bg: "#9933CC",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.5a3 3 0 110 6 3 3 0 010-6zm0 7.5c2.21 0 4 1.5 4 3.5v.5c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V15.5c0-2 1.79-3.5 4-3.5zm0 6c1.66 0 3 .67 3 1.5S13.66 21 12 21s-3-.67-3-1.5.99-1.5 3-1.5z"/></svg>
    ),
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.com/podcasts/e242d0d5-9654-4763-9778-e281ae466389",
    bg: "#25D1DA",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3 3h2v18H3V3zm4 4h2v14H7V7zm4-3h2v17h-2V4zm4 6h2v11h-2V10zm4-2h2v13h-2V8z"/></svg>
    ),
  },
  {
    name: "Podbean",
    href: "https://rosiesayers.podbean.com/",
    bg: "#74B72E",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 6l8 4-8 4V8z"/></svg>
    ),
  },
];

function Page() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<Theme | "All">("All");

  const filtered = useMemo(() => {
    return EPISODES.filter((e) => {
      const matchesTheme = theme === "All" || e.themes.includes(theme);
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || e.title.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q);
      return matchesTheme && matchesQuery;
    });
  }, [query, theme]);

  const latest = EPISODES[0];

  return (
    <HelpPage
      eyebrow="Listen"
      title="BALI Podcast: Dig Deep"
      intro="Honest conversations with leading voices from across the UK landscape industry. New episodes monthly, hosted by Rosie Sayers and produced by Blunt & Brave."
      body={
        <>
          {/* LATEST EPISODE — hero player */}
          <div className="not-prose mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-3">Latest episode · Ep. {latest.n} · {latest.date} · {latest.length}</div>
            <h2 className="font-bold text-2xl md:text-3xl text-slate-900 mb-3 leading-tight">{latest.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-5">{latest.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {latest.themes.map((t) => (
                <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-bali-green border border-emerald-100">{t}</span>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <iframe
                title={`Dig Deep — Episode ${latest.n}`}
                src={`https://www.podbean.com/player-v2/?i=${latest.embedId}&from=embed&square=1&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=7&size=315`}
                width="100%"
                height="315"
                frameBorder={0}
                loading="lazy"
                allow="autoplay"
                className="block w-full"
              />
            </div>
          </div>

          {/* SUBSCRIBE */}
          <h3>Follow Dig Deep</h3>
          <p className="text-slate-600 -mt-1 mb-4">Subscribe in your podcast app and new episodes appear automatically.</p>
          <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ background: p.bg }}
                aria-label={`Listen on ${p.name}`}
              >
                <span className="flex-shrink-0">{p.logo}</span>
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80 font-bold">Listen on</span>
                  <span className="block">{p.name}</span>
                </span>
              </a>
            ))}
          </div>

          {/* HOST */}
          <div className="not-prose mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-bali-green text-white flex items-center justify-center text-3xl font-bold">RS</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-1">Your host</div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Rosie Sayers</h3>
                <p className="text-slate-600 leading-relaxed">Rosie hosts Dig Deep on behalf of BALI, drawing on years of conversations with growers, contractors, designers and industry leaders. The show is engineered and produced by independent audio studio <strong className="text-slate-900">Blunt & Brave</strong>.</p>
              </div>
            </div>
          </div>

          {/* EPISODE ARCHIVE */}
          <div className="not-prose mb-6 flex items-end justify-between gap-4 flex-wrap">
            <h3 className="text-bali-blue font-bold text-xl">All episodes</h3>
            <span className="text-sm text-slate-500">{filtered.length} of {EPISODES.length}</span>
          </div>

          {/* Filter + search */}
          <div className="not-prose mb-6 space-y-3">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search episodes…"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-bali-green/30 focus:border-bali-green text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(["All", ...ALL_THEMES] as const).map((t) => {
                const active = theme === t;
                return (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${active ? "bg-bali-green text-white border-bali-green" : "bg-white text-slate-600 border-slate-200 hover:border-bali-green hover:text-bali-green"}`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Episode cards */}
          <ul className="not-prose space-y-3 mb-12">
            {filtered.map((e) => (
              <li key={e.n} className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-bali-green hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 text-bali-green flex items-center justify-center group-hover:bg-bali-green group-hover:text-white transition-colors" aria-hidden>
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-1">Ep. {e.n} · {e.date} · {e.length}</div>
                    <div className="font-bold text-slate-900 mb-1.5 leading-snug">{e.title}</div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2.5">{e.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.themes.map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="p-8 text-center text-slate-500 border border-dashed border-slate-200 rounded-xl">
                No episodes match your search. <button onClick={() => { setQuery(""); setTheme("All"); }} className="text-bali-green font-semibold underline">Clear filters</button>
              </li>
            )}
          </ul>

          {/* FULL ARCHIVE EMBED */}
          <h3>Browse the full archive</h3>
          <p className="text-slate-600 -mt-1 mb-4">Every episode of Dig Deep, in one player.</p>
          <div className="not-prose mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <iframe
              title="Dig Deep — full archive"
              src="https://www.podbean.com/player-v2/?pbad=1&i=rosiesayers-podcast&from=embed&square=1&share=0&download=0&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=podcast_page&btn-skin=7&size=400"
              width="100%"
              height="400"
              frameBorder={0}
              loading="lazy"
              className="block w-full"
            />
          </div>

          {/* NEWSLETTER */}
          <div className="not-prose mb-6 p-6 md:p-8 rounded-2xl text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-2">Get new episodes by email</h3>
                <p className="text-emerald-50/90 leading-relaxed text-sm">Not a podcast-app person? Drop your email and we'll send a short note when each new episode lands — plus the occasional behind-the-scenes story.</p>
              </div>
              <form
                onSubmit={(ev) => { ev.preventDefault(); alert("Thanks — you're on the list."); }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="flex-1 px-4 py-3 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm"
                />
                <button type="submit" className="px-6 py-3 rounded-full bg-white text-bali-green font-bold text-sm hover:bg-emerald-50 transition-colors">Notify me</button>
              </form>
            </div>
          </div>

          {/* PITCH */}
          <h3>Got a story for Dig Deep?</h3>
          <p>We're always looking for fresh voices — apprentices, designers, growers, suppliers, policy thinkers. If you've got a story the industry should hear, <a href="mailto:contact@bali.org.uk?subject=Dig%20Deep%20podcast%20idea">email the team</a>.</p>
        </>
      }
    />
  );
}
