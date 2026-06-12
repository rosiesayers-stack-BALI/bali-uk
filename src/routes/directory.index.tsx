import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import DirectoryListing from "../components/DirectoryListing";
import { MEMBER_COUNT_BY_CATEGORY, MEMBERS } from "../lib/directory/members";

const TITLE = "Landscape Directory — Find a BALI Accredited Member";
const DESC = "Search hundreds of accredited landscape contractors, designers, suppliers and training providers across the UK. Every member vetted to the BALI Quality Standard.";

export const Route = createFileRoute("/directory/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: DirectoryHub,
});

const CATEGORIES = [
  { slug: "contractor", label: "Contractor", href: "/directory/contractor", desc: "Hard & soft landscaping, grounds maintenance" },
  { slug: "designer", label: "Designer", href: "/directory/designer", desc: "Garden designers & landscape architects" },
  { slug: "supplier", label: "Supplier", href: "/directory/supplier", desc: "Materials, plants, equipment, services" },
  { slug: "training", label: "Training Provider", href: "/directory/training", desc: "FE colleges, apprenticeship & short course providers" },
] as const;

function DirectoryHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
            <div className="flex items-center gap-3 text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-6">
              <span className="h-px w-8 bg-emerald-300" />
              Landscape Directory
            </div>
            <h1 className="font-bold text-4xl md:text-6xl leading-[1.05] mb-6">
              Find an <span className="text-emerald-300">accredited</span> landscape professional
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-3xl mb-8">
              Every business below has been independently vetted against the BALI Quality Standard. Search by name, region or specialism — or browse by category.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-emerald-50/80">
              <span>✓ {MEMBERS.length}+ accredited members listed</span>
              <span>✓ UK-wide coverage</span>
              <span>✓ Quality-standard vetted</span>
            </div>
          </div>
        </section>

        {/* Category tiles */}
        <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={c.href}
                className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-bali-green hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-bold text-bali-green mb-1">
                  {MEMBER_COUNT_BY_CATEGORY[c.slug as keyof typeof MEMBER_COUNT_BY_CATEGORY]}
                </div>
                <div className="font-bold text-slate-900 mb-1">{c.label}s</div>
                <div className="text-xs text-slate-500 leading-relaxed mb-4">{c.desc}</div>
                <span className="text-bali-green text-sm font-semibold group-hover:underline">Browse {c.label.toLowerCase()}s →</span>
              </Link>
            ))}
          </div>
        </section>

        <DirectoryListing heading="Search the full directory" />

        {/* Why choose a member */}
        <section className="bg-slate-50 py-16 lg:py-20 mt-8">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="font-bold text-2xl md:text-3xl text-bali-blue mb-4">Why choose a BALI Accredited member?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Accredited members commit to professional standards, fair contracts and quality workmanship — backed by an independent dispute resolution service.
            </p>
            <Link to="/directory/why" className="inline-block bg-bali-green text-white px-8 py-4 rounded-full font-bold hover:bg-bali-slate transition-colors shadow-lg">
              How we vet our members
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
