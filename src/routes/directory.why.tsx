import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const TITLE = "Why choose a BALI Accredited member?";
const DESC = "Every BALI Accredited business is independently vetted against the Association Quality Standard — professional, insured, and backed by an industry dispute service.";

export const Route = createFileRoute("/directory/why")({
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

const reasons = [
  { t: "Independently vetted", b: "Every accredited member passes a documented assessment against the Association Quality Standard — covering insurance, H&S, references and completed work." },
  { t: "Professional standards", b: "Members commit to the BALI Code of Conduct: honest dealing, safe working, fair employment, and full compliance with the law." },
  { t: "Dispute resolution", b: "If something goes wrong, our independent dispute service offers a fast, low-cost route to resolution — without going to court." },
  { t: "Proper contracts", b: "Members use the BALI Landscape Contract or Domestic Landscape Contract — fair, plain-English, consumer-law compliant." },
  { t: "Insured and compliant", b: "Public liability, employers' liability and works-in-progress cover confirmed at application and renewal." },
  { t: "Continuously improving", b: "Members attend training, events and CPD — keeping skills, safety and sustainability up to date." },
];

function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24">
            <div className="text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-6">Quality you can trust</div>
            <h1 className="font-bold text-4xl md:text-6xl mb-6">{TITLE}</h1>
            <p className="text-lg md:text-xl text-emerald-50/90 max-w-3xl">{DESC}</p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.t} className="p-7 bg-white border border-slate-200 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bali-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{r.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/directory" className="inline-block bg-bali-green text-white px-8 py-4 rounded-full font-bold hover:bg-bali-slate transition-colors shadow-lg">
              Browse the directory
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
