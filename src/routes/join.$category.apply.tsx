import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import ShortApplyForm from "../components/membership/ShortApplyForm";
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

const PDF_MAP: Record<string, Array<{ href: string; label: string }>> = {
  "accredited-contractor": [{ href: "/forms/accredited-contractor.pdf", label: "Download PDF form" }],
  "accredited-designer": [{ href: "/forms/accredited-designer.pdf", label: "Download PDF form" }],
  "accredited-supplier": [{ href: "/forms/accredited-supplier.pdf", label: "Download PDF form" }],
  "accredited-group": [{ href: "/forms/accredited-group.pdf", label: "Download PDF form" }],
  "accredited-dso": [{ href: "/forms/accredited-dso.pdf", label: "Download PDF form" }],
  "accredited-international": [
    { href: "/forms/accredited-international-contractor.pdf", label: "International Contractor PDF" },
    { href: "/forms/accredited-international-supplier.pdf", label: "International Supplier PDF" },
  ],
  "associate-contractor": [{ href: "/forms/associate-contractor.pdf", label: "Download PDF form" }],
  "associate-designer": [{ href: "/forms/associate-designer.pdf", label: "Download PDF form" }],
  "associate-supplier": [{ href: "/forms/associate-supplier.pdf", label: "Download PDF form" }],
  "associate-individual": [{ href: "/forms/associate-individual.pdf", label: "Download PDF form" }],
  "training-provider": [{ href: "/forms/training-provider.pdf", label: "Download PDF form" }],
  "student": [{ href: "/forms/student.pdf", label: "Download PDF form" }],
};

function ApplyPage() {
  const { category } = Route.useParams();
  const config = CATEGORIES[category]!;
  const pdfs = PDF_MAP[category] ?? [];
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

        {pdfs.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pt-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-bali-green mb-1">Two ways to apply</div>
                <h2 className="text-lg font-bold text-bali-blue mb-1">Prefer to fill in offline?</h2>
                <p className="text-sm text-slate-600">
                  Download the editable PDF, complete it at your own pace, then email it with any
                  supporting documents to{" "}
                  <a href="mailto:membership@bali.org.uk" className="text-bali-green font-semibold underline">
                    membership@bali.org.uk
                  </a>
                  . Otherwise, complete the online form below.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                {pdfs.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-bali-green text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                    </svg>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {config.isStudent ? (
          <StudentApplicationForm config={config} />
        ) : config.isIndividual ? (
          <IndividualApplicationForm config={config} />
        ) : (
          <ApplicationForm config={config} />
        )}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
