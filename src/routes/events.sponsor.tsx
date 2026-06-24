import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";

export const Route = createFileRoute("/events/sponsor")({
  head: () => ({
    meta: [
      { title: "Sponsorship opportunities — BALI" },
      { name: "description", content: "Sponsorship opportunities with BALI — details coming soon." },
      { property: "og:title", content: "Sponsorship opportunities — BALI" },
      { property: "og:description", content: "Sponsorship opportunities with BALI — details coming soon." },
    ],
  }),
  component: SponsorPage,
});

function SponsorPage() {
  const gradient = "linear-gradient(135deg, #CF5E2C 0%, #6D4276 100%)";
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 text-white" style={{ background: gradient }}>
          <div className="max-w-6xl mx-auto px-6 relative">
            <nav className="text-sm text-white/80 mb-4 flex gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/events" className="hover:text-white">Events</Link>
              <span className="opacity-60">/</span>
              <span className="text-white">Sponsor</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-white/90">
              Events · Sponsorship
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl">
              Sponsorship opportunities
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
              Details of BALI's sponsorship opportunities will be published here soon. In the meantime, please get in touch with the team to discuss how your business can partner with us.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Talk to the team
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To register your interest in sponsoring a BALI event, please email{" "}
              <a href="mailto:joanna.pieprzak@bali.org.uk" className="text-bali-warm font-semibold hover:underline">
                joanna.pieprzak@bali.org.uk
              </a>{" "}
              and a member of the team will be in touch.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-bali-warm hover:bg-orange-700 transition-all hover:scale-105 shadow"
              >
                Contact us
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
