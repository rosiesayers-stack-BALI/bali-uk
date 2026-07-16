import { useEffect } from "react";
import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { fetchEventBySlug, fetchEventsList, subscribeTable } from "../lib/content/db";

export const Route = createFileRoute("/events/$slug")({
  loader: async ({ params }) => {
    const [event, all] = await Promise.all([fetchEventBySlug(params.slug), fetchEventsList()]);
    if (!event) throw notFound();
    const idx = all.findIndex((e) => e.slug === params.slug);
    return {
      event,
      prev: idx > 0 ? all[idx - 1] : undefined,
      next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined,
    };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.event;
    const title = e?.title ?? "Event";
    const desc = e?.description?.slice(0, 155) ?? "BALI event";
    return {
      meta: [
        { title: `${title} — BALI Events` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BALI Events` },
        { property: "og:description", content: desc },
        ...(e?.image_url ? [
          { property: "og:image", content: e.image_url },
          { name: "twitter:image", content: e.image_url },
        ] : []),
      ],
    };
  },
  component: EventPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-bali-blue mb-4">Event not found</h1>
          <p className="text-gray-600 mb-6">This event isn't available.</p>
          <Link to="/events" className="text-bali-blue underline">Back to all events</Link>
        </div>
      </main>
      <Footer />
    </div>
  ),
});

function EventPage() {
  const { event, prev, next } = Route.useLoaderData();
  const router = useRouter();
  useEffect(() => {
    router.invalidate();
    return subscribeTable("events", () => router.invalidate());
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <article className="flex-1">
        <header className="relative overflow-hidden py-16 text-white" style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 relative">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">/</span>
              <Link to="/events" className="hover:text-white">Events</Link>
              <span className="opacity-60">/</span>
              <span className="text-white truncate max-w-xs">{event.title}</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">{event.category}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-blue-100">
              <span><strong className="text-white">Date:</strong> {event.date_text}</span>
              {event.start_time && (
                <span><strong className="text-white">Time:</strong> {event.start_time}{event.end_time ? `–${event.end_time}` : ""}</span>
              )}
              <span><strong className="text-white">Venue:</strong> {event.venue}</span>
            </div>
          </div>
        </header>
        {event.image_url && (
          <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
            <img src={event.image_url} alt={event.image_alt ?? event.title} loading="eager" className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-black/5" />
          </div>
        )}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {event.description && (<p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{event.description}</p>)}
          <div className="prose prose-lg max-w-none space-y-5 text-gray-700 leading-relaxed">
            {event.body_paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-bali-blue/5 to-bali-purple/5 border border-bali-blue/10">
            <h3 className="font-bold text-bali-blue mb-2">Book your place</h3>
            <p className="text-gray-700 text-sm mb-4">
              Reserve your place using the secure booking form. You'll be able to add colleagues as delegates on the same booking.
            </p>
            <Link to="/events/$slug/book" params={{ slug: event.slug }} className="inline-block bg-bali-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-bali-purple transition-colors">Book now →</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link to="/events/$slug" params={{ slug: prev.slug }} className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">← Previous</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to="/events/$slug" params={{ slug: next.slug }} className="group p-5 border border-gray-200 rounded-xl hover:border-bali-blue hover:shadow-md transition-all text-right">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Next →</div>
                <div className="font-semibold text-bali-blue group-hover:underline">{next.title}</div>
              </Link>
            ) : <div />}
          </div>
          <div className="mt-10 text-center">
            <Link to="/events" className="text-bali-blue font-semibold hover:underline">← All events</Link>
          </div>
        </div>
      </article>
      <Footer />
      <CookieBanner />
    </div>
  );
}
