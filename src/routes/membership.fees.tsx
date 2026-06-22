import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export const Route = createFileRoute("/membership/fees")({
  head: () => ({
    meta: [
      { title: "Membership Fees — BALI" },
      {
        name: "description",
        content:
          "BALI membership fees by category — Contractor, Designer, Supplier, Group, DSO, International, Associate, Training Provider and Student. Annual fees, no hidden charges.",
      },
      { property: "og:title", content: "Membership Fees — BALI" },
      {
        property: "og:description",
        content:
          "Transparent annual fees for every BALI membership category. Get a tailored quote in minutes.",
      },
    ],
  }),
  component: FeesPage,
});

const fees: Array<{ category: string; basis: string; from: string; note?: string }> = [
  { category: "Accredited Contractor", basis: "Annual, tiered by turnover", from: "From £495 + VAT" },
  { category: "Accredited Designer", basis: "Annual, by practice size", from: "From £395 + VAT" },
  { category: "Accredited Supplier", basis: "Annual, tiered by turnover", from: "From £495 + VAT" },
  { category: "Accredited Group", basis: "Annual, by number of sites", from: "Tailored quote" },
  { category: "Accredited DSO", basis: "Annual, by team size", from: "From £495 + VAT" },
  { category: "International", basis: "Annual flat fee", from: "From £495 + VAT" },
  { category: "Associate (Contractor / Designer / Supplier)", basis: "Annual, businesses < 2 years trading", from: "From £195 + VAT" },
  { category: "Associate Individual", basis: "Annual flat fee", from: "From £95 + VAT" },
  { category: "Training Provider", basis: "Annual flat fee", from: "From £295 + VAT" },
  { category: "Student", basis: "Annual flat fee", from: "Free / £25 + VAT" },
];

function FeesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative text-white overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1D4D59 0%, #21509A 60%, #0E8B61 100%)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/membership" className="hover:text-white">Membership</Link>
              <span className="opacity-60">/</span>
              <span className="text-white">Fees</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
              Membership
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl">
              Transparent membership fees
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
              Annual fees vary by category and — for trading members — business turnover. Every quote is
              tailored, with no hidden charges and no auto-renewal trap. Indicative fees are shown
              below; the team will confirm the exact figure when you enquire.
            </p>
          </div>
        </section>

        {/* Fee table */}
        <section className="py-14 sm:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Category</th>
                    <th className="px-5 py-4 font-semibold hidden sm:table-cell">Fee basis</th>
                    <th className="px-5 py-4 font-semibold text-right">Indicative fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {fees.map((f) => (
                    <tr key={f.category} className="hover:bg-slate-50/50">
                      <td className="px-5 py-4 font-semibold text-slate-900">{f.category}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm hidden sm:table-cell">{f.basis}</td>
                      <td className="px-5 py-4 text-right font-semibold text-bali-green whitespace-nowrap">
                        {f.from}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Indicative figures only. Final fees are confirmed in your application quote. All fees are
              annual and exclude VAT unless stated.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl font-bold text-bali-blue mb-4">What every fee includes</h2>
                <p className="text-slate-600">
                  Every BALI membership unlocks the same core support package. Higher-tier categories add
                  vetting, accreditation badges and listing in the public Find a Professional directory.
                </p>
              </div>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Use of the BALI Accredited badge (where applicable)",
                  "Listing in the public Find a Professional directory",
                  "Free HR & Health and Safety helpline via Quest",
                  "Access to the members' Contract & Template library",
                  "Member rates on events, conference and the Awards",
                  "Discounted insurance, recruitment and logistics partners",
                  "Industry advocacy and political representation",
                  "Regional networking groups and technical webinars",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-bali-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-bali-blue mb-4">Get your tailored quote</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Send a short enquiry — we'll confirm the right category, exact fee for your turnover, and
              what documents you'll need.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/membership/enquiry" className="bg-bali-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Send an enquiry
              </Link>
              <Link to="/join" className="border border-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50">
                Browse categories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
