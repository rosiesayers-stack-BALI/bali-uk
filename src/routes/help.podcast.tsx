import { createFileRoute } from "@tanstack/react-router";
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

const EPISODES = [
  { n: 15, title: "The Spirit of Chelsea: Stories from the BALI Hive Garden", date: "8 June 2026", length: "45:59", desc: "Recorded live from the BALI Hive Garden at RHS Chelsea Flower Show 2026. Rosie Sayers speaks to designers, suppliers, innovators and one of the Chelsea Pensioners about collaboration, biodiversity, wellbeing and the spirit of Chelsea." },
  { n: 14, title: "Inside Chelsea Build Week with Mark Gregory", date: "20 May 2026", length: "22:57" },
  { n: 13, title: "The Final 5% — What Makes an Award-Winning Landscape?", date: "7 May 2026", length: "19:47" },
  { n: 12, title: "Building a Landscaping Business on People, Standards and Apprenticeships", date: "14 April 2026", length: "21:35" },
  { n: 11, title: "Making Biodiversity Net Gain Simple — BNG, Design and the Future of Landscaping", date: "14 April 2026", length: "13:19" },
  { n: 10, title: "What Excellence Looks Like in Landscaping — BALI Awards, Collaboration and the Future of the Industry", date: "16 March 2026", length: "21:50" },
  { n: 9, title: "Roots, Robots & Revolution — How GroundsFest Is Reshaping the Landscaping Industry", date: "3 March 2026", length: "19:39" },
  { n: 8, title: "Two Journeys, One Industry — Young Landscapers on Finding Their Way", date: "18 December 2025", length: "22:16" },
  { n: 7, title: "Closing the Skills Gap — Apprenticeships, Bootcamps and the Future of Landscaping", date: "18 December 2025", length: "12:29" },
  { n: 6, title: "Building Skills and Careers in Landscaping with Jonathan Petit from GoLandscape", date: "11 November 2025", length: "16:37" },
];

const PLATFORMS = [
  { name: "Spotify", href: "https://open.spotify.com/show/4bglmLrEdwDi0aMWl5OAxV" },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/dig-deep/id1831214211" },
  { name: "Podbean", href: "https://rosiesayers.podbean.com/" },
  { name: "Amazon Music", href: "https://music.amazon.com/podcasts/e242d0d5-9654-4763-9778-e281ae466389" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Listen"
      title="BALI Podcast: Dig Deep"
      intro="Dig Deep is BALI's official podcast — honest conversations with leading voices from across the UK landscape industry. New episodes released monthly, hosted by Rosie Sayers and engineered and produced by Blunt & Brave."
      body={
        <>
          <h3>Listen on your platform of choice</h3>
          <p className="flex flex-wrap gap-3 not-prose">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bali-green text-bali-green font-semibold hover:bg-bali-green hover:text-white transition-colors text-sm"
              >
                {p.name} →
              </a>
            ))}
          </p>

          <h3>Latest episode</h3>
          <div className="not-prose p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-2">Ep. {EPISODES[0].n} · {EPISODES[0].date} · {EPISODES[0].length}</div>
            <h4 className="font-bold text-xl text-slate-900 mb-3">{EPISODES[0].title}</h4>
            <p className="text-slate-600 leading-relaxed">{EPISODES[0].desc}</p>
          </div>

          <h3>Recent episodes</h3>
          <ul className="not-prose space-y-2">
            {EPISODES.slice(1).map((e) => (
              <li key={e.n} className="p-4 bg-white border border-slate-200 rounded-xl flex items-start justify-between gap-4 hover:border-bali-green transition-colors">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-1">Ep. {e.n} · {e.date}</div>
                  <div className="font-semibold text-slate-900">{e.title}</div>
                </div>
                <span className="text-xs text-slate-500 flex-shrink-0">{e.length}</span>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
