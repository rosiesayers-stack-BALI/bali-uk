import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { getPageContent, type PageContent } from "../content/pages";

export const Route = createFileRoute("/$")({
  head: ({ params }) => {
    const splat = (params as { _splat?: string })._splat ?? "";
    const path = "/" + splat;
    const content = getPageContent(path);
    const title = content?.title ?? titleFromPath(splat);
    const desc =
      content?.intro?.slice(0, 155) ??
      `${title} | British Association of Landscape Industries.`;
    return {
      meta: [
        { title: `${title} — BALI` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BALI` },
        { property: "og:description", content: desc },
        ...(content?.image
          ? [
              { property: "og:image", content: content.image.url },
              { name: "twitter:image", content: content.image.url },
            ]
          : []),
      ],
    };
  },
  component: SplatPage,
});

function titleFromPath(splat: string): string {
  if (!splat) return "Page";
  const last = splat.split("/").filter(Boolean).pop() ?? "Page";
  return last.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Theme → gradient + accent classes
type Theme = PageContent["theme"];
const themes: Record<
  Theme,
  { gradient: string; accent: string; accentBg: string; iconColor: string; btn: string }
> = {
  blue: {
    gradient: "linear-gradient(135deg, #1D4D59 0%, #21509A 60%, #0E8B61 100%)",
    accent: "text-bali-blue",
    accentBg: "bg-bali-blue/10",
    iconColor: "text-bali-blue",
    btn: "bg-bali-blue hover:bg-blue-800",
  },
  green: {
    gradient: "linear-gradient(135deg, #0E8B61 0%, #1D4D59 100%)",
    accent: "text-bali-green",
    accentBg: "bg-bali-green/10",
    iconColor: "text-bali-green",
    btn: "bg-bali-green hover:bg-green-700",
  },
  slate: {
    gradient: "linear-gradient(135deg, #1D4D59 0%, #21509A 100%)",
    accent: "text-bali-slate",
    accentBg: "bg-bali-slate/10",
    iconColor: "text-bali-slate",
    btn: "bg-bali-slate hover:bg-slate-800",
  },
  flow: {
    gradient: "linear-gradient(135deg, #30A1C0 0%, #21509A 100%)",
    accent: "text-bali-flow",
    accentBg: "bg-bali-flow/10",
    iconColor: "text-bali-flow",
    btn: "bg-bali-flow hover:bg-cyan-700",
  },
  warm: {
    gradient: "linear-gradient(135deg, #CF5E2C 0%, #6D4276 100%)",
    accent: "text-bali-warm",
    accentBg: "bg-bali-warm/10",
    iconColor: "text-bali-warm",
    btn: "bg-bali-warm hover:bg-orange-700",
  },
  purple: {
    gradient: "linear-gradient(135deg, #6D4276 0%, #21509A 100%)",
    accent: "text-bali-purple",
    accentBg: "bg-bali-purple/10",
    iconColor: "text-bali-purple",
    btn: "bg-bali-purple hover:bg-purple-800",
  },
};

function SplatPage() {
  const { _splat } = Route.useParams();
  const path = "/" + (_splat ?? "");
  const content = getPageContent(path);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {content ? <RichPage path={path} content={content} /> : <ComingSoon path={path} />}
      <Footer />
      <CookieBanner />
    </div>
  );
}

function Breadcrumbs({ path }: { path: string }) {
  const crumbs = path.split("/").filter(Boolean);
  return (
    <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2 animate-fade-in">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      {crumbs.map((c: string, i: number) => {
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
  );
}

function RichPage({ path, content }: { path: string; content: PageContent }) {
  // Type narrowing — some entries use "grass" theme key (typo-safe fallback)
  const themeKey = (themes[content.theme] ? content.theme : "green") as Theme;
  const t = themes[themeKey];

  const overlayHero = isBoardLayout(content) && !!content.image;

  return (
    <>
      {/* Hero */}
      {overlayHero && content.image ? (
        <>
          <section className="relative overflow-hidden py-14 sm:py-16 text-white" style={{ background: t.gradient }}>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)",
              }}
            />
            <div className="max-w-6xl mx-auto px-6 relative">
              <Breadcrumbs path={path} />
              <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
                {content.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl animate-fade-up">
                {content.title}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">{content.intro}</p>
              {content.ctaPrimary || content.ctaSecondary ? (
                <div className="flex flex-wrap gap-3 mt-8">
                  {content.ctaPrimary && (
                    <Link
                      to={content.ctaPrimary.href}
                      className="bg-white text-bali-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
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
              ) : null}
            </div>
          </section>
          <figure className="bg-gray-900">
            <img
              src={content.image.url}
              alt={content.image.alt}
              loading="eager"
              className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover object-[center_25%]"
            />
            <figcaption className="max-w-6xl mx-auto px-6 py-3 text-sm text-gray-500 bg-white border-b border-gray-200">
              {content.image.alt}
            </figcaption>
          </figure>
        </>
      ) : (
        <section className="relative overflow-hidden py-20 text-white" style={{ background: t.gradient }}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)",
            }}
          />
          <div className="max-w-6xl mx-auto px-6 relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <Breadcrumbs path={path} />
              <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">
                {content.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl animate-fade-up">
                {content.title}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">{content.intro}</p>

              {content.ctaPrimary || content.ctaSecondary ? (
                <div className="flex flex-wrap gap-3 mt-8">
                  {content.ctaPrimary && (
                    <Link
                      to={content.ctaPrimary.href}
                      className="bg-white text-bali-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
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
              ) : null}
            </div>
            {content.image && (
              <div className="lg:col-span-2">
                <img
                  src={content.image.url}
                  alt={content.image.alt}
                  loading="eager"
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl ring-1 ring-white/20"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Event info band */}
      {content.eventInfo && (
        <section className="bg-white border-b border-gray-200 py-6 sm:py-8 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-6 items-center">
            <div className="flex items-start gap-3">
              <svg className={`w-6 h-6 ${t.iconColor} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Venue</div>
                <div className="text-gray-900 font-semibold">{content.eventInfo.venue.replace(/^Venue:\s*/i, "")}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className={`w-6 h-6 ${t.iconColor} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Date</div>
                <div className="text-gray-900 font-semibold">{content.eventInfo.date.replace(/^Date:\s*/i, "")}</div>
              </div>
            </div>
            <div className="sm:text-right">
              <Link
                to={content.eventInfo.tickets.href}
                className={`inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 shadow ${t.btn}`}
              >
                {content.eventInfo.tickets.label}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Stats strip */}

      {content.stats && content.stats.length > 0 && (
        <section className="bg-gray-50 border-b border-gray-200 py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {content.stats.map((s) => (
                <div key={s.label}>
                  <div className={`text-3xl font-bold ${t.accent}`}>{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.embed && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                src={content.embed.url}
                title={content.embed.title}
                height={content.embed.height ?? 480}
                width="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Sections — board card grid OR editorial article layout */}
      {content.sections && content.sections.length > 0 && (
        isBoardLayout(content) ? (
          <BoardGrid sections={content.sections} accent={t.accent} accentBg={t.accentBg} />
        ) : (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <article className="divide-y divide-gray-200">
              {content.sections.map((s) => (
                <section key={s.heading} className="py-10 first:pt-0 last:pb-0">
                  {s.image && (
                    <img
                      src={s.image.url}
                      alt={s.image.alt}
                      loading="lazy"
                      className="float-right ml-6 mb-4 w-32 sm:w-40 h-auto rounded-lg shadow-md ring-1 ring-gray-200 object-cover"
                    />
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                    {s.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {s.body}
                  </p>
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                          <svg
                            className={`w-5 h-5 ${t.iconColor} flex-shrink-0 mt-1`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
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
        )
      )}

      {/* Highlights grid */}
      {content.highlights && content.highlights.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {content.highlights.map((h) => (
                <div
                  key={h.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div
                    className={`w-11 h-11 ${t.accentBg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <svg
                      className={`w-5 h-5 ${t.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className={`${t.accent} font-semibold uppercase tracking-widest text-sm mb-3`}>In our members' words</p>
              <h2 className="text-3xl font-bold text-gray-900">Why BALI matters</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {content.testimonials.map((q) => (
                <figure key={q.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 h-full flex flex-col">
                  <svg className={`w-8 h-8 ${t.iconColor} opacity-40 mb-4`} fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-gray-700 leading-relaxed flex-1">"{q.quote}"</blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-gray-200">
                    <p className="font-semibold text-gray-900">{q.name}</p>
                    <p className="text-sm text-gray-500">{q.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 text-white" style={{ background: t.gradient }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take the next step?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a landscape professional or a client, BALI is here to help. Get in touch with our team — we respond to every enquiry within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-bali-blue hover:bg-gray-100 px-7 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
            >
              Contact BALI
            </Link>
            <Link
              to="/join"
              className="bg-bali-green hover:bg-green-700 text-white px-7 py-3 rounded-lg font-bold transition-all hover:scale-105"
            >
              Join Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ComingSoon({ path }: { path: string }) {
  const title = titleFromPath(path.replace(/^\//, ""));
  return (
    <>
      <section
        className="relative overflow-hidden py-20 text-white"
        style={{ background: themes.blue.gradient }}
      >
        <div className="max-w-6xl mx-auto px-6 relative">
          <Breadcrumbs path={path} />
          <p className="text-bali-grass uppercase tracking-widest text-sm font-semibold mb-3">BALI</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 animate-fade-up">{title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            This page is part of the BALI website and is being prepared.
          </p>
        </div>
      </section>
      <section className="flex-1 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">
            The content for{" "}
            <code className="bg-gray-100 text-bali-blue text-sm px-1.5 py-0.5 rounded">{path}</code>{" "}
            isn't published yet. In the meantime, explore the rest of the site or get in touch.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all"
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
      </section>
    </>
  );
}

function isBoardLayout(content: PageContent): boolean {
  if (!content.sections?.length) return false;
  const allHaveRole = content.sections.every((s) => !!s.role);
  const anyImage = content.sections.some((s) => !!s.image);
  return allHaveRole && anyImage;
}

function initialsFor(name: string): string {
  return name
    .split(",")[0]
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function BoardGrid({
  sections,
  accent,
  accentBg,
}: {
  sections: NonNullable<PageContent["sections"]>;
  accent: string;
  accentBg: string;
}) {
  const groups = sections.reduce<Record<string, typeof sections>>((acc, s) => {
    const key = s.group ?? "Directors";
    (acc[key] ||= [] as unknown as typeof sections).push(s);
    return acc;
  }, {});
  const order = ["Executive", "Leadership Team", "Directors", "Team"];
  const keys = [
    ...order.filter((k) => groups[k]),
    ...Object.keys(groups).filter((k) => !order.includes(k)),
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {keys.map((k) => (
          <div key={k}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{k}</h2>
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-500">{groups[k].length} {groups[k].length === 1 ? "member" : "members"}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups[k].map((s) => (
                <article
                  key={s.heading}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                    {s.image ? (
                      <img
                        src={s.image.url}
                        alt={s.image.alt}
                        loading="lazy"
                        itemProp="image"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${accentBg}`}>
                        <span className={`text-5xl font-bold ${accent}`}>
                          {initialsFor(s.heading)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    {s.role && (
                      <span
                        className={`inline-block self-start text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${accentBg} ${accent}`}
                        itemProp="jobTitle"
                      >
                        {s.role}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3" itemProp="name">
                      {s.heading}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm" itemProp="description">
                      {s.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
