import { createFileRoute, notFound } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import cards from "../content/liss-cscs-cards.json";

type Card = {
  name: string;
  desc: string;
  img: string | null;
  color: "green" | "red" | "blue" | "gold" | "black" | "whiteyellow" | "gray";
  slug: string;
};
type Category = { label: string; cards: Card[] };
const data = cards as unknown as Record<string, Category>;

export const Route = createFileRoute("/liss-cscs/apply/$category")({
  loader: ({ params }) => {
    const cat = data[params.category];
    if (!cat) throw notFound();
    return { category: cat, slug: params.category };
  },
  head: ({ loaderData }) => {
    const label = loaderData?.category?.label ?? "Apply for a SmartCard";
    return {
      meta: [
        { title: `${label} SmartCards — Apply | BALI LISS/CSCS` },
        {
          name: "description",
          content: `Apply for a ${label} LISS/CSCS SmartCard. Choose from the available card levels and start your application.`,
        },
        { property: "og:title", content: `${label} SmartCards — Apply | BALI LISS/CSCS` },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: NotFound,
});

const heroBg = "linear-gradient(135deg, #1D4D59 0%, #21509A 100%)";

const colorStyles: Record<Card["color"], { ring: string; badge: string; label: string }> = {
  green:       { ring: "ring-green-500",   badge: "bg-green-600 text-white",       label: "Green" },
  red:         { ring: "ring-red-500",     badge: "bg-red-600 text-white",         label: "Red" },
  blue:        { ring: "ring-blue-500",    badge: "bg-blue-600 text-white",        label: "Blue" },
  gold:        { ring: "ring-yellow-500",  badge: "bg-yellow-500 text-yellow-950", label: "Gold" },
  black:       { ring: "ring-gray-900",    badge: "bg-gray-900 text-white",        label: "Black" },
  whiteyellow: { ring: "ring-yellow-300",  badge: "bg-yellow-200 text-yellow-900", label: "White/Yellow" },
  gray:        { ring: "ring-gray-400",    badge: "bg-gray-600 text-white",        label: "Card" },
};

function CategoryPage() {
  const { category, slug } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="relative overflow-hidden py-16 text-white" style={{ background: heroBg }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs" className="hover:text-white">LISS/CSCS</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs/apply" className="hover:text-white">Apply for a SmartCard</Link>
            <span className="opacity-60">/</span>
            <span className="text-white">{category.label}</span>
          </nav>
          <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">LISS/CSCS — Apply</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">{category.label}</h1>
          <p className="text-blue-100 text-lg">Please select the appropriate SmartCard below.</p>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-200 py-6 text-sm">
        <div className="max-w-6xl mx-auto px-6 space-y-2 text-gray-700">
          <p>
            <strong>Important:</strong> The application form can be completed using Google Chrome,
            Safari, Mozilla Firefox or Microsoft Edge. The form can be completed on mobile browsers
            but we recommend a desktop browser for the best experience.
          </p>
          <p className="text-red-700 font-semibold">
            ** Please ensure you do not use any special characters in the application fields **
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.cards.map((card: Card) => {
              const c = colorStyles[card.color];
              return (
                <Link
                  key={card.slug}
                  to="/liss-cscs/apply/$category/$card"
                  params={{ category: slug, card: card.slug }}
                  className={`group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all ring-1 ring-transparent hover:${c.ring}`}
                >
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                    {card.img ? (
                      <img
                        src={card.img}
                        alt={card.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className={`inline-block self-start text-xs font-semibold px-2 py-1 rounded mb-3 ${c.badge}`}>
                      {c.label}
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-bali-blue">{card.name}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{card.desc}</p>
                    <div className="mt-5 inline-flex items-center text-bali-blue font-semibold text-sm">
                      View card & apply
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-3">
              Unsure which card is right for you? The LISS team can help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+442476690333" className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm">
                Call 024 7669 0333
              </a>
              <a href="mailto:liss@bali.org.uk" className="bg-white border border-bali-blue text-bali-blue hover:bg-bali-blue hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Email liss@bali.org.uk
              </a>
              <Link to="/liss-cscs/check" className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-2.5 rounded-lg text-sm">
                Check qualifications
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/liss-cscs/apply" className="text-bali-blue font-semibold hover:underline inline-flex items-center gap-1">
              ← Back to all categories
            </Link>
          </div>
          <span className="hidden" data-slug={slug} />
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="flex-1 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-3">Category not found</h1>
          <p className="text-gray-600 mb-6">That LISS/CSCS category doesn't exist.</p>
          <Link to="/liss-cscs/apply" className="inline-block bg-bali-blue text-white px-6 py-3 rounded-lg font-semibold">
            View all categories
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
