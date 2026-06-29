import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import cards from "../content/liss-cscs-cards.json";

export const Route = createFileRoute("/liss-cscs/apply/")({
  head: () => ({
    meta: [
      { title: "Apply for a LISS SmartCard — BALI" },
      {
        name: "description",
        content:
          "Apply for a LISS SmartCard. Choose from seven industry categories — amenity, arboriculture, countryside management, ecology, landscape & maintenance, modular paving, and pesticides.",
      },
      { property: "og:title", content: "Apply for a LISS SmartCard — BALI" },
      {
        property: "og:description",
        content:
          "Choose your industry category and apply for a LISS SmartCard administered by BALI.",
      },
    ],
  }),
  component: ApplyLanding,
});

const heroBg = "linear-gradient(135deg, #1D4D59 0%, #21509A 100%)";

function ApplyLanding() {
  const categories = Object.entries(cards as Record<string, { label: string; cards: unknown[] }>);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white" style={{ background: heroBg }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs" className="hover:text-white">LISS</Link>
            <span className="opacity-60">/</span>
            <span className="text-white">Apply for a SmartCard</span>
          </nav>
          <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">LISS</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-4xl">
            Apply for a LISS SmartCard
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
            Apply for a LISS SmartCard to gain access to commercial land-based sites. Upskill
            your workforce and develop your own personal career by demonstrating your qualifications,
            skills and knowledge.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mt-4">
            Depending on the type of work you or your employee(s) carry out, choose from one of seven
            industry categories below. This includes New, Update, Renewal or Duplicate SmartCards.
          </p>
        </div>
      </section>

      {/* Warnings / important info */}
      <section className="bg-amber-50 border-y border-amber-200 py-8">
        <div className="max-w-4xl mx-auto px-6 space-y-4 text-gray-800">
          <h2 className="font-bold text-amber-900 text-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a1 1 0 011 1v3a1 1 0 11-2 0V7a1 1 0 011-1zm0 7a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            Before you apply — please read
          </h2>
          <p>
            <strong>Important</strong> — before applying please ensure you have passed your ROLO
            Health, Safety and Environmental Awareness Course and relevant CITB Touch Screen Test{" "}
            <strong>(these must have been completed within the last 2 years on application)</strong>.
            Please ensure you have checked your land-based qualification(s), if applicable, to help
            you map your certification to the appropriate LISS SmartCard.
          </p>
          <p>
            It's your responsibility to ensure you meet all the criteria for the specific card
            you're applying for. If you apply and are later found to be ineligible (e.g. wrong
            qualifications, missing documents),{" "}
            <em><strong>BALI is under no obligation to refund the application fee.</strong></em>
          </p>
          <p>
            If you're unsure whether you meet the criteria for a specific card, please contact the
            LISS team, who will be happy to help guide you through the process. Contact by telephone{" "}
            <a href="tel:+442476690333" className="text-bali-blue font-semibold underline">024 7669 0333</a>{" "}
            or <a href="mailto:liss@bali.org.uk" className="text-bali-blue font-semibold underline">email</a>.
          </p>
          <p>
            The photo taken at the CITB test centre will be used as a default for the card. If a
            different photo is preferred, please state this in a supporting document attached to your
            application. We may request further proof of ID to reflect the different photo to confirm
            it is a true image of the applicant.
          </p>
          <p className="bg-amber-100 border-l-4 border-amber-500 px-4 py-3 font-bold text-amber-900">
            ** CARDS CAN TAKE UP TO 28 WORKING DAYS TO PROCESS FROM THE DATE OF SUBMISSION **
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Choose your industry category</h2>
          <p className="text-gray-600 mb-10">Seven categories — pick the one that matches the work you do.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(([slug, cat]) => (
              <Link
                key={slug}
                to="/liss-cscs/apply/$category"
                params={{ category: slug }}
                className="group block border border-gray-200 rounded-xl p-6 hover:border-bali-blue hover:shadow-lg transition-all bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-bali-blue">{cat.label}</h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-bali-blue group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  {cat.cards.length} SmartCard{cat.cards.length === 1 ? "" : "s"} available
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
