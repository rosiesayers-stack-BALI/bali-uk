import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { getPageContent } from "../content/pages";

const PATH = "/events/sponsor";
const content = getPageContent(PATH)!;

export const Route = createFileRoute("/events/sponsor")({
  head: () => ({
    meta: [
      { title: `${content.title} — BALI` },
      { name: "description", content: content.intro.slice(0, 155) },
      { property: "og:title", content: `${content.title} — BALI` },
      { property: "og:description", content: content.intro.slice(0, 155) },
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
        {/* Hero */}
        <section className="relative overflow-hidden py-20 text-white" style={{ background: gradient }}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)",
            }}
          />
          <div className="max-w-6xl mx-auto px-6 relative">
            <nav className="text-sm text-white/80 mb-4 flex gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/events" className="hover:text-white">Events</Link>
              <span className="opacity-60">/</span>
              <span className="text-white">Sponsor</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-white/90">
              {content.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl">
              {content.title}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl">{content.intro}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {content.ctaPrimary && (
                <Link
                  to={content.ctaPrimary.href}
                  className="bg-white text-bali-warm hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  {content.ctaPrimary.label}
                </Link>
              )}
              {content.ctaSecondary && (
                <Link
                  to={content.ctaSecondary.href}
                  className="bg-white/10 hover:bg-white/20 border border-white/40 text-white backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  {content.ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Event info band */}
        {content.eventInfo && (
          <section className="bg-white border-b border-gray-200 py-6 sm:py-8 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-6 items-center">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Venue</div>
                <div className="text-gray-900 font-semibold">{content.eventInfo.venue}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Date</div>
                <div className="text-gray-900 font-semibold">{content.eventInfo.date}</div>
              </div>
              <div className="sm:text-right">
                <Link
                  to={content.eventInfo.tickets.href}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white bg-bali-warm hover:bg-orange-700 transition-all hover:scale-105 shadow"
                >
                  {content.eventInfo.tickets.label}
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Stats */}
        {content.stats && content.stats.length > 0 && (
          <section className="bg-gray-50 border-b border-gray-200 py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {content.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-bali-warm">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sections */}
        {content.sections && (
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6">
              <article className="divide-y divide-gray-200">
                {content.sections.map((s) => (
                  <section key={s.heading} className="py-10 first:pt-0 last:pb-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                      {s.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">{s.body}</p>
                    {s.bullets && s.bullets.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-gray-700 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-bali-warm flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </article>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
