import { Link } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

export type SubTopic = {
  title: string;
  description?: string;
  href: string; // external if starts with http
};

export type HelpPageProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  body?: React.ReactNode;
  subTopics?: SubTopic[];
  subTopicsHeading?: string;
  documents?: { title: string; href: string; meta?: string }[];
};

export default function HelpPage({
  eyebrow = "Help & Advice",
  title,
  intro,
  body,
  subTopics,
  subTopicsHeading = "Topics in this section",
  documents,
}: HelpPageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
            <nav className="text-emerald-200/80 text-sm mb-6">
              <Link to="/help" className="hover:text-white">Help &amp; Advice</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{title}</span>
            </nav>
            <div className="flex items-center gap-3 text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-5">
              <span className="h-px w-8 bg-emerald-300" />
              {eyebrow}
            </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-3xl">{intro}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
          {body && (
            <div className="help-content max-w-none mb-10 text-slate-700 leading-relaxed [&_h3]:text-bali-blue [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:font-bold [&_h4]:text-lg [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2 [&_li]:text-slate-700 [&_a]:text-bali-green [&_a]:font-semibold [&_a:hover]:underline [&_strong]:text-slate-900">
              {body}
            </div>
          )}

          {subTopics && subTopics.length > 0 && (
            <>
              <h2 className="font-bold text-2xl text-bali-blue mb-5">{subTopicsHeading}</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {subTopics.map((s) => {
                  const isExternal = s.href.startsWith("http");
                  const cls = "group p-5 bg-white border border-slate-200 rounded-xl hover:border-bali-green hover:shadow-md transition-all flex justify-between items-start gap-4";
                  const inner = (
                    <>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-bali-green transition-colors">{s.title}</div>
                        {s.description && <div className="text-sm text-slate-500 mt-1 leading-relaxed">{s.description}</div>}
                      </div>
                      <svg className="w-5 h-5 text-bali-green flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </>
                  );
                  return isExternal ? (
                    <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                  ) : (
                    <Link key={s.title} to={s.href} className={cls}>{inner}</Link>
                  );
                })}
              </div>
            </>
          )}

          {documents && documents.length > 0 && (
            <>
              <h2 className="font-bold text-2xl text-bali-blue mb-5">Documents &amp; downloads</h2>
              <ul className="bg-slate-50 rounded-2xl border border-slate-200 divide-y divide-slate-200 mb-12">
                {documents.map((d) => (
                  <li key={d.title}>
                    <a href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 p-4 hover:bg-white transition-colors">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-bali-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <div>
                          <div className="font-semibold text-slate-900">{d.title}</div>
                          {d.meta && <div className="text-xs text-slate-500">{d.meta}</div>}
                        </div>
                      </div>
                      <span className="text-bali-green font-semibold text-sm">Download →</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-12 p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
            <h2 className="font-bold text-xl text-bali-blue mb-2">Need to talk to someone?</h2>
            <p className="text-slate-600 mb-5">Our team responds to every member enquiry within 48 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="bg-bali-green text-white px-6 py-3 rounded-full font-bold hover:bg-bali-slate transition-colors">Contact the team</Link>
              <a href="mailto:contact@bali.org.uk" className="border border-bali-green text-bali-green px-6 py-3 rounded-full font-bold hover:bg-bali-green hover:text-white transition-colors">Email contact@bali.org.uk</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
