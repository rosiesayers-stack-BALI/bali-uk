import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";

export const Route = createFileRoute("/$")({
  head: ({ params }) => {
    const title = titleFromPath((params as { _splat?: string })._splat ?? "");
    return {
      meta: [
        { title: `${title} — BALI` },
        { name: "description", content: `${title} | British Association of Landscape Industries.` },
        { property: "og:title", content: `${title} — BALI` },
        { property: "og:description", content: `${title} | British Association of Landscape Industries.` },
      ],
    };
  },
  component: PlaceholderPage,
});

function titleFromPath(splat: string): string {
  if (!splat) return "Page";
  const last = splat.split("/").filter(Boolean).pop() ?? "Page";
  return last
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function PlaceholderPage() {
  const { _splat } = Route.useParams();
  const path = "/" + (_splat ?? "");
  const title = titleFromPath(_splat ?? "");
  const crumbs = (_splat ?? "").split("/").filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 text-white"
        style={{ background: "linear-gradient(135deg, #1D4D59 0%, #21509A 60%, #0E8B61 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumbs */}
          <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2 animate-fade-in">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {crumbs.map((c, i) => {
              const href = "/" + crumbs.slice(0, i + 1).join("/");
              const last = i === crumbs.length - 1;
              return (
                <span key={href} className="flex items-center gap-2">
                  <span className="opacity-60">/</span>
                  {last ? (
                    <span className="text-white">{titleFromPath(c)}</span>
                  ) : (
                    <Link to={href} className="hover:text-white transition-colors">
                      {titleFromPath(c)}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>

          <p className="text-bali-grass uppercase tracking-widest text-sm font-semibold mb-3">
            BALI
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 animate-fade-up">
            {title}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            This page is part of the BALI website and is being prepared.
            In the meantime, explore the rest of the site or get in touch with our team.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="flex-1 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-bali-blue/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-bali-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {title} — coming soon
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The content for{" "}
                  <code className="bg-gray-100 text-bali-blue text-sm px-1.5 py-0.5 rounded">
                    {path}
                  </code>{" "}
                  hasn't been published yet. Our team is working on it. If you were looking
                  for something specific, please reach out and we'll point you in the right
                  direction.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all hover:scale-105"
                  >
                    Contact BALI
                  </Link>
                  <Link
                    to="/"
                    className="border-2 border-bali-blue text-bali-blue hover:bg-bali-blue hover:text-white px-5 py-2.5 rounded-lg font-semibold transition-all"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Find an Expert", href: "/directory", color: "text-bali-blue", bg: "bg-bali-blue/10" },
              { label: "Join BALI", href: "/join", color: "text-bali-green", bg: "bg-bali-green/10" },
              { label: "Latest News", href: "/news", color: "text-bali-flow", bg: "bg-bali-flow/10" },
              { label: "Events & Training", href: "/events", color: "text-bali-warm", bg: "bg-bali-warm/10" },
            ].map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-3"
              >
                <div className={`w-9 h-9 ${l.bg} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-4 h-4 ${l.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-800">{l.label}</span>
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
