import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const TITLE = "Help & Advice — BALI";
const DESC = "Member resources from BALI organised into five hubs: running your business, on site, plants & biosecurity, learning & resources, and member support.";

export const Route = createFileRoute("/help/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: HelpHub,
});

type Tile = { href: string; title: string; desc: string; members?: boolean };
type Group = { eyebrow: string; title: string; lede: string; tiles: Tile[] };

const GROUPS: Group[] = [
  {
    eyebrow: "01",
    title: "Running your business",
    lede: "Contracts, legal frameworks and dispute resolution — the paperwork that protects your business and your clients.",
    tiles: [
      { href: "/help/contracts", title: "Contracts & templates", desc: "Free domestic landscape contracts — design only, build only, design & build — plus supporting schedules.", members: true },
      { href: "/help/law", title: "Law & compliance", desc: "CDM, GDPR, IR35, JCLI contracts, VAT reverse charge, the Good Work Plan, water abstraction and more." },
      { href: "/help/dispute", title: "Dispute resolution", desc: "Independent dispute service for members and their clients — client info, member info and FAQs." },
    ],
  },
  {
    eyebrow: "02",
    title: "On site",
    lede: "Keeping crews safe and machinery compliant — the day-to-day risk management every operator needs.",
    tiles: [
      { href: "/help/health-safety", title: "Health & safety", desc: "Risk assessment, HAV, lone working, mental health, silica dust, outdoor safety, winter care and more." },
      { href: "/help/equipment", title: "Machinery & driving", desc: "Towing, tachographs, rebated fuel, E10, tractor licences, Driving for Better Business." },
    ],
  },
  {
    eyebrow: "03",
    title: "Plants & biosecurity",
    lede: "Protecting UK plant health — passports, post-Brexit movement, and the pest and disease alerts every professional must track.",
    tiles: [
      { href: "/help/plant-health", title: "Plant health & passports", desc: "Plant passports, post-Brexit arrangements, importing, exporting, the glossary and FAQ." },
      { href: "/help/pests", title: "Pests & diseases", desc: "Ash dieback, Asian hornet, oak processionary moth, Xylella fastidiosa and other high-profile UK threats." },
    ],
  },
  {
    eyebrow: "04",
    title: "Learning & resources",
    lede: "Industry research, marketing toolkits and honest conversations from across the UK landscape sector.",
    tiles: [
      { href: "/help/guides", title: "Guides & reports", desc: "BALI Lay of the Land report, marketing best-practice guides, member case studies." },
      { href: "/help/podcast", title: "Dig Deep podcast", desc: "Honest conversations from across the UK landscape industry — Spotify, Apple Podcasts and Podbean." },
    ],
  },
  {
    eyebrow: "05",
    title: "Member support",
    lede: "Confidential help when things get hard — because membership is more than a logo.",
    tiles: [
      { href: "/membership/hardship-fund", title: "Hardship Fund", desc: "Confidential, case-by-case support for current members facing unforeseen financial difficulty.", members: true },
    ],
  },
];

function HelpHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
            <div className="flex items-center gap-3 text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-6">
              <span className="h-px w-8 bg-emerald-300" />
              Member resources
            </div>
            <h1 className="font-bold text-4xl md:text-6xl leading-[1.05] mb-6">Help &amp; advice</h1>
            <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-3xl">
              Five hubs covering everything BALI members rely on — the legal scaffolding of your business,
              day-to-day site safety, plant biosecurity, learning resources, and confidential member support.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-14 lg:py-20 space-y-16">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-bali-green font-bold tracking-widest text-sm">{g.eyebrow}</span>
                <h2 className="font-bold text-2xl md:text-3xl text-bali-blue">{g.title}</h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-6 leading-relaxed">{g.lede}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.tiles.map((t) => (
                  <Link
                    key={t.href}
                    to={t.href}
                    className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-bali-green hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-bali-green transition-colors">{t.title}</h3>
                      {t.members && <span className="text-[10px] uppercase tracking-wider font-bold text-bali-green border border-bali-green/40 bg-bali-green/5 rounded-full px-2 py-1 whitespace-nowrap">Members</span>}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">{t.desc}</p>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-bali-green font-bold text-sm">Open section</span>
                      <svg className="w-5 h-5 text-bali-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-bold text-2xl md:text-3xl text-bali-blue mb-4">Can't find what you're looking for?</h2>
            <p className="text-slate-600 mb-6">Our membership and advice teams respond to every enquiry within 48 hours.</p>
            <Link to="/contact" className="inline-block bg-bali-green text-white px-8 py-4 rounded-full font-bold hover:bg-bali-slate transition-colors shadow-lg">Contact the team</Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
