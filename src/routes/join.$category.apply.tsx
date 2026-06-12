import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import ApplicationForm from "../components/membership/ApplicationForm";
import IndividualApplicationForm from "../components/membership/IndividualApplicationForm";
import { CATEGORIES } from "../lib/membership/types";

export const Route = createFileRoute("/join/$category/apply")({
  beforeLoad: ({ params }) => {
    if (!CATEGORIES[params.category]) throw notFound();
  },
  head: ({ params }) => {
    const c = CATEGORIES[params.category];
    if (!c) return {};
    return {
      meta: [
        { title: `Apply for ${c.title} membership — BALI` },
        { name: "description", content: `Apply online to become a BALI ${c.title}. ${c.summary}` },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Membership category not found</h1>
        <Link to="/join" className="text-bali-green font-bold underline">Back to all categories</Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-bali-blue mb-4">Something went wrong</h1>
        <p className="text-slate-600">{error instanceof Error ? error.message : "Unknown error"}</p>
      </main>
      <Footer />
    </div>
  ),
  component: ApplyPage,
});

function ApplyPage() {
  const { category } = Route.useParams();
  const config = CATEGORIES[category]!;
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #0E8B61 0%, #1D4D59 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <Link to="/join" className="inline-flex items-center gap-2 text-emerald-200 text-sm font-semibold mb-4 hover:text-white">
              ← Back to membership categories
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">{config.title}</h1>
            <p className="text-emerald-50/90 text-lg max-w-2xl">{config.summary}</p>
            <p className="text-emerald-100/70 text-sm mt-6">
              Need help? Email{" "}
              <a href="mailto:membership@bali.org.uk" className="underline">membership@bali.org.uk</a>
              {" "}or call{" "}
              <a href="tel:+442476690333" className="underline">+44 (0)24 7669 0333</a>.
            </p>
          </div>
        </section>
        <ApplicationForm config={config} />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
