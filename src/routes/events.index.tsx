import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { events } from "../content/events";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — BALI" },
      {
        name: "description",
        content:
          "Browse upcoming BALI national, regional and supplier events — networking, training, CPD and industry meet-ups across the UK landscape industry.",
      },
      { property: "og:title", content: "Upcoming Events — BALI" },
      {
        property: "og:description",
        content: "Upcoming events from the British Association of Landscape Industries.",
      },
    ],
  }),
  component: EventsIndex,
});

function EventsIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section
        className="py-16 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
            BALI Events
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            National conferences, regional connects, supplier forums and training days — built for and by the UK landscape industry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <Link
                key={e.slug}
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-bali-blue hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
              >
                <img
                  src={e.image.url}
                  alt={e.image.alt}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-bali-purple uppercase tracking-widest font-semibold mb-2">
                    {e.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-bali-blue transition-colors">
                    {e.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">
                    {e.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
                    <div className="font-semibold text-bali-blue">{e.date}</div>
                    <div className="text-gray-500">{e.venue}</div>
                  </div>
                </div>
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
