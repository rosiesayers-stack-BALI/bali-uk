import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join BALI — Membership for Landscape Professionals" },
      {
        name: "description",
        content:
          "Join the British Association of Landscape Industries. Nine membership categories, professional accreditation, HR & H&S support, and a UK-wide network.",
      },
      { property: "og:title", content: "Join BALI — Membership for Landscape Professionals" },
      {
        property: "og:description",
        content:
          "Join the UK's leading trade body for landscape professionals. Accreditation, expert advice and savings.",
      },
    ],
  }),
  component: JoinPage,
});

const HERO_IMG =
  "/__l5e/assets-v1/f84f9fdd-4c58-4342-9115-d5228b3c6d78/large_mountbatten-house-min.jpeg";

const categories: Array<{
  slug: string;
  badge: string;
  title: string;
  description: string;
  featured?: boolean;
}> = [
  {
    slug: "accredited-contractor",
    badge: "Most popular",
    title: "Accredited Contractor",
    description:
      "For contractors whose main business involves hard/soft landscaping or grounds maintenance.",
    featured: true,
  },
  {
    slug: "accredited-designer",
    badge: "Professional",
    title: "Accredited Designer",
    description:
      "For designers and practices committed to high standards in landscape design.",
  },
  {
    slug: "accredited-supplier",
    badge: "Industry partner",
    title: "Accredited Supplier",
    description:
      "For businesses supplying quality materials, equipment and services to the trade.",
  },
  {
    slug: "accredited-group",
    badge: "Multi-site",
    title: "Accredited Group",
    description:
      "For multi-site contractor groups operating across hard/soft landscaping or grounds maintenance.",
  },
  {
    slug: "accredited-dso",
    badge: "Public sector",
    title: "Accredited DSO",
    description:
      "For Direct Service Organisations within public or local authority grounds departments.",
  },
  {
    slug: "international",
    badge: "Outside UK",
    title: "International",
    description:
      "For contractors and suppliers based outside the UK. Pick contractor or supplier on the form.",
  },
  {
    slug: "associate-contractor",
    badge: "Early career",
    title: "Associate Contractor",
    description:
      "For contractors trading less than two years — a supported pathway to full accreditation.",
  },
  {
    slug: "associate-designer",
    badge: "Early career",
    title: "Associate Designer",
    description:
      "For designers or landscape architects trading less than two years.",
  },
  {
    slug: "associate-supplier",
    badge: "Early career",
    title: "Associate Supplier",
    description:
      "For suppliers trading less than two years who offer products or services to the trade.",
  },
  {
    slug: "associate-individual",
    badge: "Individual",
    title: "Associate Individual",
    description:
      "For individuals retired from the industry or exploring a move into landscaping.",
  },
  {
    slug: "training-provider",
    badge: "Education",
    title: "Training Provider",
    description:
      "For commercial training organisations, FE and HE colleges delivering land-based training.",
  },
  {
    slug: "student",
    badge: "Education",
    title: "Student",
    description:
      "For students attending commercial training organisations, FE and HE colleges and universities.",
  },
];

const benefits = [
  {
    title: "HR & H&S support",
    body: "Complimentary one-to-one reviews and ongoing advice through Quest, our trusted legal partner.",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Marketing power",
    body: "Use of the BALI Accredited badge — a mark of trust recognised by clients across the UK.",
    icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Industry network",
    body: "Exclusive access to events, regional groups, awards and nationwide training opportunities.",
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: "Business savings",
    body: "Discounts on tools, specialist insurance, recruitment support and logistics.",
    icon: (
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const steps = [
  { n: "01", title: "Choose a category", body: "Pick the membership that matches your business or role." },
  { n: "02", title: "Talk to the team", body: "Email or call us — we'll confirm fit, fees and next steps." },
  { n: "03", title: "Apply & be assessed", body: "Submit your application. Accredited categories include vetting." },
  { n: "04", title: "Join & promote", body: "Receive your welcome pack and start using the BALI Accredited badge." },
];

const faqs = [
  {
    q: "Who can apply for BALI membership?",
    a: "Any UK landscape business, designer, supplier, training provider or student. International contractors join via our International category. New businesses trading under two years should start with Associate.",
  },
  {
    q: "How long does the application take?",
    a: "Initial enquiry to acceptance typically takes a few weeks for accredited categories, as we vet each applicant. Associate, Student and Training Provider categories are faster.",
  },
  {
    q: "What does membership cost?",
    a: "Fees vary by category and business turnover. Contact the membership team for a tailored quote — there are no hidden charges.",
  },
  {
    q: "What does accreditation involve?",
    a: "Accredited categories include a desk-based review and, where relevant, a site or design portfolio assessment to confirm quality standards.",
  },
  {
    q: "When does membership renew?",
    a: "Membership is annual. We send a reminder ahead of renewal each year — there's no auto-renewal trap.",
  },
];

function JoinPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0E8B61 0%, #1D4D59 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 items-center gap-16">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-6">
                <span className="h-px w-8 bg-emerald-300" />
                Join Our Association
              </div>
              <h1 className="font-bold text-4xl md:text-6xl leading-[1.05] mb-6">
                Grow your <span className="text-emerald-300">impact</span> with BALI
              </h1>
              <p className="text-lg text-emerald-50/90 leading-relaxed mb-10 max-w-xl">
                Become a member of the UK's leading trade body for landscape professionals.
                Access exclusive business support, professional accreditation and a nationwide network.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#categories"
                  className="bg-white text-bali-green hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-black/10"
                >
                  View categories
                </a>
                <Link
                  to="/contact"
                  className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all"
                >
                  Talk to membership
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-emerald-50/80">
                <a href="tel:+442476690333" className="hover:text-white">
                  📞 +44 (0)24 7669 0333
                </a>
                <a href="mailto:membership@bali.org.uk" className="hover:text-white">
                  ✉ membership@bali.org.uk
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5 rotate-1 hover:rotate-0 transition-transform duration-700">
                <img
                  src={HERO_IMG}
                  alt="Accredited BALI landscape project"
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 p-6 rounded-2xl z-20 hidden md:block shadow-xl">
                <div className="text-3xl font-bold">Since 1972</div>
                <div className="text-sm font-medium opacity-90">Trusted UK trade body</div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-b border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "50+", l: "Years representing the industry" },
              { v: "9", l: "Membership categories" },
              { v: "100s", l: "Accredited members UK-wide" },
              { v: "48hr", l: "Enquiry response time" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-bali-green">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-12">
              <h2 className="font-bold text-3xl md:text-4xl text-bali-blue mb-6 leading-tight">
                Why join the Association?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                BALI isn't just a list — it's a benchmark of quality. We represent, support and accredit
                the landscape industry, providing the tools you need to excel.
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-bali-green rounded-r-xl">
                <p className="italic text-slate-700">
                  "Membership of the Association is more than a list — it's a network, a benchmark, and a support system built around you."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-8 bg-white border border-slate-100 shadow-sm rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-bali-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {b.icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="bg-slate-50 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-12">
              <div className="max-w-2xl">
                <h2 className="font-bold text-3xl md:text-4xl text-bali-blue mb-4">
                  Find your membership
                </h2>
                <p className="text-slate-600">
                  Specialised paths to suit every role — accredited, international, associate and education.
                  Pick the one that fits and our team
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((c) => {
                // Map old slugs to the new apply route slugs
                const applySlugMap: Record<string, string> = {
                  "accredited-contractor": "accredited-contractor",
                  "accredited-designer": "accredited-designer",
                  "accredited-supplier": "accredited-supplier",
                  "accredited-group": "accredited-group",
                  "accredited-dso": "accredited-dso",
                  "international": "accredited-international",
                  "associate-contractor": "associate-contractor",
                  "associate-designer": "associate-designer",
                  "associate-supplier": "associate-supplier",
                  "associate-individual": "associate-individual",
                  "training-provider": "training-provider",
                  "student": "student",
                };
                const applySlug = applySlugMap[c.slug];
                const hasForm = Boolean(applySlug);
                const cardClass = `group bg-white p-8 rounded-2xl border transition-all hover:shadow-xl hover:shadow-emerald-900/5 ${
                  c.featured ? "border-bali-green shadow-md" : "border-slate-200 hover:border-bali-green"
                }`;
                const badge = (
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5 ${
                    c.featured ? "bg-bali-green text-white" : "bg-slate-100 text-slate-600"
                  }`}>{c.badge}</div>
                );
                const body = (
                  <>
                    {badge}
                    <h3 className="font-bold text-xl mb-3 text-slate-900">{c.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{c.description}</p>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <span className="text-bali-green font-bold text-sm">
                        {hasForm ? "Apply online" : "Enquire by email"}
                      </span>
                      <svg className="w-5 h-5 text-bali-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </>
                );
                if (hasForm) {
                  return (
                    <Link
                      key={c.slug}
                      to="/join/$category/apply"
                      params={{ category: applySlug }}
                      preload="intent"
                      className={cardClass}
                    >
                      {body}
                    </Link>
                  );
                }
                return (
                  <a
                    key={c.slug}
                    href={`mailto:membership@bali.org.uk?subject=Membership enquiry: ${encodeURIComponent(c.title)}`}
                    className={cardClass}
                  >
                    {body}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-bali-blue mb-4">How it works</h2>
            <p className="text-slate-600">From first enquiry to active membership — four simple steps.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-8 bg-slate-50 rounded-2xl">
                <div className="text-bali-green font-bold text-sm tracking-widest mb-4">{s.n}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="font-bold text-3xl md:text-4xl text-bali-blue mb-4">
                Frequently asked questions
              </h2>
              <p className="text-slate-600">Quick answers to the questions we hear most.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="cursor-pointer list-none p-6 flex items-center justify-between font-semibold text-slate-900 hover:bg-slate-50">
                    <span>{f.q}</span>
                    <svg
                      className="w-5 h-5 text-bali-green transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="relative overflow-hidden py-20 lg:py-24"
          style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="font-bold text-3xl md:text-5xl mb-6">Ready to join?</h2>
            <p className="text-emerald-50/90 text-lg mb-10 max-w-2xl mx-auto">
              Not sure which category fits? Our membership team responds to every enquiry within 48 hours
              and will help you start your application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-bali-green px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-xl"
              >
                Contact the team
              </Link>
              <a
                href="mailto:membership@bali.org.uk"
                className="text-white font-semibold flex items-center gap-2 hover:text-emerald-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                membership@bali.org.uk
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
