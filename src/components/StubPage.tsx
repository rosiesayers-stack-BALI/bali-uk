import { Link } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import rebrandBanner from "../assets/bali/rebrand-banner-5.jpg.asset.json";

export type StubPageProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  bullets?: string[];
  ctaPrimary?: { label: string; href: string; external?: boolean };
  ctaSecondary?: { label: string; href: string; external?: boolean };
};

export default function StubPage({
  eyebrow,
  title,
  intro,
  bullets,
  ctaPrimary = { label: "Contact the team", href: "/contact" },
  ctaSecondary,
}: StubPageProps) {
  const renderCta = (cta: NonNullable<StubPageProps["ctaPrimary"]>, primary: boolean) => {
    const cls = primary
      ? "bg-bali-green text-white hover:bg-bali-slate px-8 py-4 rounded-full font-bold transition-colors shadow-lg"
      : "border border-bali-green text-bali-green hover:bg-bali-green hover:text-white px-8 py-4 rounded-full font-bold transition-colors";
    if (cta.external || cta.href.startsWith("http") || cta.href.startsWith("mailto:") || cta.href.startsWith("tel:")) {
      return (
        <a key={cta.label} href={cta.href} className={cls} target={cta.external ? "_blank" : undefined} rel={cta.external ? "noopener noreferrer" : undefined}>
          {cta.label}
        </a>
      );
    }
    return (
      <Link key={cta.label} to={cta.href} className={cls}>
        {cta.label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section
          className="text-white relative"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(29,77,89,0.85) 0%, rgba(14,139,97,0.78) 100%), url('${rebrandBanner.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
            {eyebrow && (
              <div className="flex items-center gap-3 text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-6">
                <span className="h-px w-8 bg-emerald-300" />
                {eyebrow}
              </div>
            )}
            <h1 className="font-bold text-4xl md:text-6xl leading-[1.05] mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-3xl">{intro}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          {bullets && bullets.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {bullets.map((b) => (
                <div key={b} className="flex gap-3 p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-bali-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          )}

          <div className="p-8 md:p-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
            <h2 className="font-bold text-2xl text-bali-blue mb-3">More detail coming soon</h2>
            <p className="text-slate-600 mb-6 max-w-2xl">
              We're rebuilding this section of the BALI website. In the meantime our team can answer
              any questions directly — usually within 48 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              {renderCta(ctaPrimary, true)}
              {ctaSecondary && renderCta(ctaSecondary, false)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
