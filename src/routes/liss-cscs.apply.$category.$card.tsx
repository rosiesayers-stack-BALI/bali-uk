import { createFileRoute, notFound } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import cards from "../content/liss-cscs-cards.json";
import bodies from "../content/liss-cscs-card-bodies.json";

type Card = {
  name: string;
  desc: string;
  img: string | null;
  color: "green" | "red" | "blue" | "gold" | "black" | "whiteyellow" | "gray";
  slug: string;
};
type Category = { label: string; cards: Card[] };
const data = cards as unknown as Record<string, Category>;
const bodyData = bodies as unknown as Record<string, Record<string, string>>;

export const Route = createFileRoute("/liss-cscs/apply/$category/$card")({
  loader: ({ params }) => {
    const cat = data[params.category];
    if (!cat) throw notFound();
    const card = cat.cards.find((c) => c.slug === params.card);
    if (!card) throw notFound();
    const body = bodyData[params.category]?.[params.card] ?? "";
    return { category: cat, categorySlug: params.category, card, body };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.card?.name ?? "SmartCard";
    return {
      meta: [
        { title: `${name} — Apply | BALI LISS/CSCS` },
        {
          name: "description",
          content: loaderData?.card?.desc?.slice(0, 155) ?? `Apply for the ${name} LISS/CSCS SmartCard.`,
        },
        { property: "og:title", content: `${name} — Apply | BALI LISS/CSCS` },
        ...(loaderData?.card?.img
          ? [
              { property: "og:image", content: loaderData.card.img },
              { name: "twitter:image", content: loaderData.card.img },
            ]
          : []),
      ],
    };
  },
  component: CardDetail,
  notFoundComponent: NotFound,
});

const heroBg = "linear-gradient(135deg, #1D4D59 0%, #21509A 100%)";

const colorStyles: Record<Card["color"], { badge: string; label: string }> = {
  green:       { badge: "bg-green-600 text-white",       label: "Green" },
  red:         { badge: "bg-red-600 text-white",         label: "Red" },
  blue:        { badge: "bg-blue-600 text-white",        label: "Blue" },
  gold:        { badge: "bg-yellow-500 text-yellow-950", label: "Gold" },
  black:       { badge: "bg-gray-900 text-white",        label: "Black" },
  whiteyellow: { badge: "bg-yellow-200 text-yellow-900", label: "White/Yellow" },
  gray:        { badge: "bg-gray-600 text-white",        label: "Card" },
};

function CardDetail() {
  const { category, categorySlug, card, body } = Route.useLoaderData();
  const color = colorStyles[card.color];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="relative overflow-hidden py-14 text-white" style={{ background: heroBg }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs" className="hover:text-white">LISS/CSCS</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs/apply" className="hover:text-white">Apply</Link>
            <span className="opacity-60">/</span>
            <Link to="/liss-cscs/apply/$category" params={{ category: categorySlug }} className="hover:text-white">{category.label}</Link>
            <span className="opacity-60">/</span>
            <span className="text-white truncate">{card.name}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-4 ${color.badge}`}>
                {color.label}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{card.name}</h1>
              <p className="text-blue-100 text-lg">{card.desc}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  to="/liss-cscs/apply/$category/$card/form"
                  params={{ category: categorySlug, card: card.slug }}
                  className="bg-white text-bali-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-bold shadow-lg transition-all hover:scale-105"
                >
                  Apply for this card →
                </Link>
                <a href="mailto:liss@bali.org.uk" className="bg-white/10 hover:bg-white/20 border border-white/40 text-white backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all">
                  Email the LISS team
                </a>
              </div>
            </div>
            {card.img && (
              <div className="lg:col-span-2">
                <img src={card.img} alt={card.name} className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl ring-1 ring-white/20" loading="eager" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Eligibility &amp; what you need</h2>
          {body ? (
            <div
              className="liss-prose text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ) : (
            <p className="text-gray-600">
              Eligibility details for this card are not yet available online. Please email{" "}
              <a href="mailto:liss@bali.org.uk" className="text-bali-blue underline">liss@bali.org.uk</a>{" "}
              or call <a href="tel:+442476690333" className="text-bali-blue underline">024 7669 0333</a>{" "}
              for guidance.
            </p>
          )}

          <div className="mt-10 p-6 rounded-xl bg-bali-blue/5 border border-bali-blue/20">
            <h3 className="font-bold text-bali-blue text-lg mb-2">Ready to apply?</h3>
            <p className="text-gray-700 mb-4">
              You'll need scanned copies of your ROLO certificate, CITB Touch Screen Test result, a
              passport-style photo, and any qualification certificates required for this card.
              Applications can take up to 28 working days to process.
            </p>
            <Link
              to="/liss-cscs/apply/$category/$card/form"
              params={{ category: categorySlug, card: card.slug }}
              className="inline-block bg-bali-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Start your application
            </Link>
          </div>

          <div className="mt-8">
            <Link to="/liss-cscs/apply/$category" params={{ category: categorySlug }} className="text-bali-blue font-semibold hover:underline">
              ← Back to {category.label} cards
            </Link>
          </div>
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
          <h1 className="text-3xl font-bold mb-3">SmartCard not found</h1>
          <Link to="/liss-cscs/apply" className="inline-block bg-bali-blue text-white px-6 py-3 rounded-lg font-semibold mt-4">
            View all categories
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
