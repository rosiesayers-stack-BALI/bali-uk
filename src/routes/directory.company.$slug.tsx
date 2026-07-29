import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Globe, Linkedin, Instagram, Facebook, Twitter, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { CATEGORY_LABEL } from "../lib/directory/members";
import { getApplicationType } from "@/lib/membership-types";
import {
  getDirectoryCompany,
  logProfileEnquiry,
  resolveImageUrl,
  type CompanyProject,
  type DirectoryCompany,
} from "../lib/directory/public-profiles";

export const Route = createFileRoute("/directory/company/$slug")({
  head: () => ({
    meta: [
      { title: "Company profile — BALI Landscape Directory" },
      {
        name: "description",
        content: "View an accredited BALI member's company profile, example projects and contact details.",
      },
      { property: "og:title", content: "Company profile — BALI Landscape Directory" },
      {
        property: "og:description",
        content: "View an accredited BALI member's company profile, example projects and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CompanyProfilePage,
});

function CompanyProfilePage() {
  const { slug } = Route.useParams();
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState<DirectoryCompany | null>(null);
  const [projects, setProjects] = useState<CompanyProject[]>([]);
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    getDirectoryCompany(slug)
      .then(async (res) => {
        if (!alive) return;
        setCompany(res?.company ?? null);
        setProjects(res?.projects ?? []);
        if (res?.company.logoUrl) {
          const url = await resolveImageUrl(res.company.logoUrl);
          if (alive) setLogo(url);
        } else if (alive) {
          setLogo(null);
        }
      })
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [slug]);

  const tier = company?.membershipType ? getApplicationType(company.membershipType) : undefined;

  const socials = company
    ? ([
        { key: "linkedin", label: "LinkedIn", url: company.socials.linkedin, Icon: Linkedin },
        { key: "instagram", label: "Instagram", url: company.socials.instagram, Icon: Instagram },
        { key: "twitter", label: "X", url: company.socials.twitter, Icon: Twitter },
        { key: "facebook", label: "Facebook", url: company.socials.facebook, Icon: Facebook },
      ].filter((s) => Boolean(s.url && s.url.trim())) as {
        key: string;
        label: string;
        url: string;
        Icon: typeof Linkedin;
      }[])
    : [];

  const enquire = () => {
    if (!company) return;
    void logProfileEnquiry(company);
    const target = company.websiteUrl;
    if (target) window.open(target, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
            <Link to="/directory/search" className="inline-flex items-center gap-2 text-emerald-100 text-sm font-semibold hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to directory search
            </Link>
            {loading ? (
              <h1 className="font-bold text-3xl md:text-4xl">Loading company profile…</h1>
            ) : !company ? (
              <h1 className="font-bold text-3xl md:text-4xl">Company not found</h1>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center overflow-hidden shrink-0 shadow">
                  {logo ? (
                    <img src={logo} alt={`${company.name} logo`} className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className="text-bali-blue font-bold text-2xl">{company.name.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <div className="text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-2">
                    {CATEGORY_LABEL[company.category]}
                    {company.region ? ` · ${company.region}` : ""}
                  </div>
                  <h1 className="font-bold text-3xl md:text-4xl mb-3">{company.name}</h1>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/25">
                    ✓ {tier?.label ?? "Accredited BALI Member"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {!loading && !company && (
          <section className="max-w-5xl mx-auto px-6 py-16">
            <p className="text-slate-600">
              We couldn't find that company.{" "}
              <Link to="/directory/search" className="text-bali-green font-semibold hover:underline">
                Search the directory
              </Link>
              .
            </p>
          </section>
        )}

        {company && (
          <section className="max-w-5xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-xl text-bali-blue mb-3">About</h2>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {company.description || "This member hasn't added a description yet."}
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-xl text-bali-blue mb-4">Example projects</h2>
                {projects.length === 0 ? (
                  <p className="text-sm text-slate-500">No example projects added yet.</p>
                ) : (
                  <ul className="space-y-4">
                    {projects.map((p) => (
                      <li key={p.id} className="border border-slate-100 rounded-xl p-4">
                        <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-xs text-slate-400 mt-4">Project images and video coming in a later phase.</p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-lg text-bali-blue mb-4">Get in touch</h2>
                {company.websiteUrl ? (
                  <button
                    onClick={enquire}
                    className="w-full bg-bali-green hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Enquire →
                  </button>
                ) : (
                  <Link
                    to="/contact"
                    className="block text-center w-full bg-bali-green hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Enquire →
                  </Link>
                )}
                {company.websiteUrl && (
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bali-green hover:underline break-all"
                  >
                    <Globe className="w-4 h-4 shrink-0" /> Visit website
                  </a>
                )}
                {socials.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">Follow</p>
                    <div className="flex items-center gap-3">
                      {socials.map(({ key, label, url, Icon }) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-bali-green hover:border-bali-green transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </section>
        )}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
