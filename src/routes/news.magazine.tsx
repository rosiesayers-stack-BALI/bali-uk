import { createFileRoute } from "@tanstack/react-router";
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

type Issue = {
  season: string;
  issuuId: string;
  bg: string; // hex without #
  highlights: { title: string; body: string }[];
};

const ISSUES: Issue[] = [
  {
    season: "Spring 2026",
    issuuId: "bali_landscape_news_spring_2026",
    bg: "0e8b61",
    highlights: [
      { title: "Court is in session", body: "Three decades behind the scenes with the \"King of Chelsea\", Mark Gregory." },
      { title: "Is your brand working hard enough for you?", body: "Expert advice on knowing when your brand needs a refresh and how to do it." },
      { title: "From natural to nourishing", body: "A look at the domestic design trends set to shape 2026." },
      { title: "Smiley, happy people", body: "Why a people-first philosophy can solve the industry's ills." },
    ],
  },
  {
    season: "Winter 2025",
    issuuId: "bali_landscape_news_winter_25",
    bg: "3b62ae",
    highlights: [
      { title: "Isn't that Grand?", body: "An exclusive interview with the BALI Awards Grand Award winner 2025, The Outdoor Room." },
      { title: "It's only natural: the rise of natural pools in UK garden landscapes", body: "Ellicar invites us into this eco-friendly world of harmony with the environment." },
      { title: "Shout about it", body: "Our social media guru reveals the top tips and tricks for a successful social media strategy." },
      { title: "Under the surface", body: "Tim O'Hare Associates examine the importance of soil choice in landscaping." },
    ],
  },
  {
    season: "Autumn 2025",
    issuuId: "bali_landscape_news_autumn_2025",
    bg: "CF5e2c",
    highlights: [
      { title: "Inside the mind of a BALI awards judge", body: "Chair of the judging panel, John Melmoe, reveals the secrets to a successful awards entry." },
      { title: "Weathering the storm", body: "In a cautious market, designer Adam Vetere shares how creativity and personalisation can help you to thrive." },
      { title: "Pitch perfect", body: "North Hort's Gareth Jones lifts the lid on finding success with celebrity clients." },
      { title: "First impressions", body: "How to make the most of probationary periods and set your employees up for success." },
    ],
  },
  {
    season: "Summer 2025",
    issuuId: "landscape_news_summer_2025",
    bg: "28a49e",
    highlights: [
      { title: "Unhappy clients: what can you do when a dispute arises?", body: "Discover how BALI's impartial ombudsman can help resolve client disputes." },
      { title: "Going for gold", body: "We relive five glorious days at Chelsea and how BALI members bagged a mammoth medal haul." },
      { title: "From eye to bee", body: "Garden designer Jamie Langlands explores how and why you should embrace our natural landscape in your designs." },
      { title: "A call to arms", body: "How ex-military personnel can offer a wealth of transferable skills to landscaping." },
    ],
  },
];

function IssueBlock({ issue, latest }: { issue: Issue; latest?: boolean }) {
  const src = `https://e.issuu.com/embed.html?backgroundColor=%23${issue.bg}&backgroundColorFullscreen=%23${issue.bg}&d=${issue.issuuId}&hideIssuuLogo=true&u=balilandscapeuk`;
  return (
    <div className="not-prose mb-12">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
        <h3 className="font-bold text-2xl text-bali-blue">{issue.season}{latest && <span className="ml-3 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-bali-green border border-emerald-100 align-middle">Latest issue</span>}</h3>
        <a
          href={`https://issuu.com/balilandscapeuk/docs/${issue.issuuId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-bali-green hover:underline"
        >
          Open on Issuu →
        </a>
      </div>
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white mb-5" style={{ aspectRatio: "3 / 2" }}>
        <iframe
          title={`Landscape News — ${issue.season}`}
          src={src}
          width="100%"
          height="100%"
          frameBorder={0}
          allow="fullscreen"
          allowFullScreen
          loading="lazy"
          className="block w-full h-full"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {issue.highlights.map((h) => (
          <div key={h.title} className="p-4 bg-white border border-slate-200 rounded-xl">
            <div className="font-bold text-slate-900 mb-1 leading-snug">{h.title}</div>
            <p className="text-sm text-slate-600 leading-relaxed">{h.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <HelpPage
      eyebrow="News"
      title="Landscape News"
      intro="Landscape News is BALI's official member magazine — filled with great stories about member projects, helpful business advice, and thought-provoking opinion, along with news and events updates from the UK's biggest trade association for the landscape industries."
      body={
        <>
          <p className="text-slate-600 mb-8">Read the latest issue below, or browse the archive. Got a story to share? Email our editor at <a href="mailto:landscapenews@bali.org.uk">landscapenews@bali.org.uk</a>.</p>
          {ISSUES.map((iss, i) => (
            <IssueBlock key={iss.issuuId} issue={iss} latest={i === 0} />
          ))}
        </>
      }
    />
  );
}
