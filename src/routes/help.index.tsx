import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const TITLE = "Help & Advice — BALI";
const DESC = "Member resources from BALI: contracts, health & safety, law, equipment, plant health, dispute resolution, guides, hardship support and the Dig Deep podcast.";

export const Route = createFileRoute("/help")({
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

const TOPICS = [
  { href: "/help/contract", title: "Landscape Contract", desc: "Free template contracts for designer and contractor members to use with domestic clients — design only, build only, design & build." },
  { href: "/help/domestic-landscape-contract", title: "Domestic Landscape Contract", desc: "BALI's contract suite for use on all domestic landscape and garden design and build projects." },
  { href: "/help/health-safety", title: "Health & Safety", desc: "Online resource for members — risk assessment, HAV, lone working, mental health, outdoor safety, silica dust and more." },
  { href: "/help/law", title: "Law & Regulations", desc: "Legal frameworks and contractual documents: CDM, GDPR, IR35, JCLI Contracts, VAT reverse charge, the Good Work Plan." },
  { href: "/help/dispute", title: "Dispute Service", desc: "Independent dispute resolution offered by BALI to members and their clients." },
  { href: "/help/equipment", title: "Machinery & Driving", desc: "Essential information on equipment and operating rules — towing, tachographs, rebated fuel, E10, tractor licences." },
  { href: "/help/pests", title: "Pests & Diseases", desc: "Latest UK threats — ash dieback, Asian hornet, oak processionary moth, Xylella fastidiosa and more." },
  { href: "/help/plant-health", title: "Plant Health Information", desc: "Plant passports, post-Brexit arrangements, importing, exporting, biosecurity — what every landscape pro needs to know." },
  { href: "/help/guides", title: "Guides & Downloads", desc: "Marketing best-practice guides, BALI case studies and the Lay of the Land Report — created for members." },
  { href: "/help/hardship", title: "Hardship Fund", desc: "Confidential support for current members facing unforeseen financial difficulty." },
  { href: "/help/podcast", title: "BALI Podcast: Dig Deep", desc: "Honest conversations from across the UK landscape industry — listen on Spotify, Apple Podcasts and Podbean." },
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
              Practical resources for BALI members — covering contracts, health &amp; safety, law,
              equipment, plant health, dispute resolution, wellbeing and continuing learning.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOPICS.map((t) => (
              <Link
                key={t.href}
                to={t.href}
                className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-bali-green hover:shadow-lg transition-all flex flex-col"
              >
                <h2 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-bali-green transition-colors">{t.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{t.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-bali-green font-bold text-sm">Open section</span>
                  <svg className="w-5 h-5 text-bali-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
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
