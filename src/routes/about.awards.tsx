import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";

const HERO_IMAGE =
  "/__l5e/assets-v1/3ec5a36c-6554-41f6-b5f4-5490c14ac67a/0944_bali051225_pga_7269.jpg";

const GALLERY: { url: string; alt: string }[] = [
  { url: "/__l5e/assets-v1/7c708798-9086-45d4-b4ca-59d1af9a31fe/0829_bali051225_pg2_1645.jpg", alt: "Wayne Grills on stage with Origin Enterprises headline sponsor backdrop" },
  { url: "/__l5e/assets-v1/1af5e1ca-6ca6-44e9-9c0e-888b85370d4d/0935_bali051225_pga_7260.jpg", alt: "Packed awards dinner in full atmospheric lighting" },
  { url: "/__l5e/assets-v1/361c3748-f195-4f9e-b3f8-ea7e8a4fbdbe/0448_bali051225_pga_6980.jpg", alt: "Table setting with candles and drinks ahead of the ceremony" },
  { url: "/__l5e/assets-v1/4598c643-2f63-4911-97f3-ca5654dd4ca5/1225_bali051225_pga_7354.jpg", alt: "Guests celebrating at their table" },
  { url: "/__l5e/assets-v1/73011cca-9ba8-4b34-8119-0e7669f9fd70/ba051225_tb2_0194_145.jpg", alt: "Members sharing a laugh during the evening" },
  { url: "/__l5e/assets-v1/27420fd8-4da6-477c-95d3-b6294e2b400d/ba051225_tb2_0689_277.jpg", alt: "Winners celebrating an award announcement" },
  { url: "/__l5e/assets-v1/1deb8fb1-a7e1-4cca-878a-0f3e910bb1ee/ba051225_tb2_0376_189.jpg", alt: "Guest raising a winning ticket during the ceremony" },
  { url: "/__l5e/assets-v1/bdab5064-a7a2-44e9-b3f7-b134fa2b26ad/ba051225_tb2_0666_271.jpg", alt: "Two attendees laughing together at the awards" },
];

const TITLE = "National Landscape Awards — BALI";
const DESC =
  "The flagship awards celebrating landscaping excellence across the UK. 2026 entries are now open — submit your project via the BALI Awards platform.";

export const Route = createFileRoute("/about/awards")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: AwardsPage,
});

function AwardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <section className="relative rounded-3xl overflow-hidden bg-[#002B45] text-white shadow-2xl">
            <div className="absolute inset-0">
              <img
                src={HERO_IMAGE}
                alt=""
                className="w-full h-full object-cover opacity-40"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#002B45]/95 via-[#002B45]/80 to-[#2FB457]/40" />
            </div>

            <div className="relative z-10 px-8 sm:px-12 py-20 sm:py-28 max-w-3xl">
              <nav className="flex mb-8 text-xs tracking-widest uppercase text-white/60 space-x-3 font-semibold">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="opacity-40">/</span>
                <Link to="/about" className="hover:text-white">About</Link>
                <span className="opacity-40">/</span>
                <span className="text-[#7FD699]">Awards</span>
              </nav>
              <span className="inline-block px-3 py-1 border border-[#7FD699] text-[#7FD699] text-[10px] uppercase tracking-widest font-bold mb-6 rounded-full">
                About BALI
              </span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.05] tracking-tight">
                National Landscape{" "}
                <span className="italic font-normal">Awards</span>
              </h1>
              <p className="text-lg text-white/85 font-light leading-relaxed mb-10 border-l-2 border-[#7FD699] pl-6">
                2026 National Landscape Award entries are now open. We are thrilled to announce that this year's entries are now being accepted — the biggest landscaping awards ceremony in Europe.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.baliawards.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#2FB457] text-white font-bold tracking-wide uppercase text-xs hover:bg-[#279949] transition-all transform hover:-translate-y-0.5 rounded-md"
                >
                  Enter the Awards
                </a>
                <a
                  href="http://www.baliawards.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold tracking-wide uppercase text-xs hover:bg-white/20 transition-all rounded-md border border-white/20"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>

          {/* Video */}
          <section className="mt-20">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-[#2FB457] text-xs font-bold uppercase tracking-[0.2em] mb-2">Watch the Highlights</p>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#002B45] italic">A night of excellence</h2>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
              <iframe
                src="https://www.youtube.com/embed/s6_HivofMvg"
                title="BALI National Landscape Awards 2025 highlights"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>

          {/* Content triad */}
          <section className="grid md:grid-cols-3 gap-10 md:gap-16 mt-28 mb-32">
            {[
              {
                n: "01",
                h: "Inspiring and celebrating landscaping excellence",
                p: "The National Landscape Awards provides the industry with a platform to showcase and improve their business and celebrate their achievements both within and outside of the industry. There are categories appropriate to all Accredited categories of membership.",
              },
              {
                n: "02",
                h: "Categories for every member",
                p: "If you are an Accredited Contractor, Group or Designer member, there are categories appropriate to all scheme sizes — from a small domestic garden to a large public landscaped space. Supplier Exceptional Service and Employer Excellence categories showcase service, product and exemplary business practice.",
              },
              {
                n: "03",
                h: "Enter now",
                p: "Entries are open now — submit your entry via the BALI Awards platform. Learn more about the Awards at baliawards.co.uk.",
                cta: { label: "Visit Platform", href: "https://www.baliawards.co.uk/" },
              },
            ].map((s) => (
              <div key={s.n} className="relative pt-6">
                <span className="text-8xl font-serif text-slate-100 absolute -top-2 -left-3 -z-10 select-none leading-none">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold text-[#002B45] mb-4 relative">{s.h}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.p}</p>
                {s.cta && (
                  <a
                    href={s.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-[#2FB457] text-xs font-bold uppercase tracking-widest inline-flex items-center hover:translate-x-1 transition-transform"
                  >
                    {s.cta.label}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </section>

          {/* Gallery */}
          <section className="mb-32">
            <div className="text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-serif text-[#002B45] mb-4">
                Gallery of Excellence
              </h2>
              <div className="w-24 h-px bg-[#2FB457] mx-auto mb-4" />
              <p className="text-slate-500 text-xs sm:text-sm uppercase tracking-[0.25em]">
                Highlights from the 2025 Awards
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
              <GalleryTile img={GALLERY[0]} className="md:col-span-2 md:row-span-2" />
              <GalleryTile img={GALLERY[1]} />
              <GalleryTile img={GALLERY[2]} />
              <GalleryTile img={GALLERY[3]} className="md:row-span-2" />
              <GalleryTile img={GALLERY[4]} />
              <GalleryTile img={GALLERY[5]} />
              <GalleryTile img={GALLERY[6]} className="md:col-span-2" />
              <GalleryTile img={GALLERY[7]} className="md:col-span-2" />
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative rounded-3xl bg-[#002B45] p-12 sm:p-16 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[#2FB457] opacity-[0.06] -skew-y-12 translate-y-20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">Ready to take the next step?</h2>
              <p className="max-w-2xl mx-auto text-white/75 mb-10 text-base sm:text-lg leading-relaxed">
                Whether you're a landscape professional or a client, BALI is here to help. Get in touch with our team — we respond to every enquiry within 48 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link
                  to="/contact"
                  className="px-10 py-4 border border-white text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#002B45] transition-all rounded-md"
                >
                  Contact BALI
                </Link>
                <Link
                  to="/join"
                  className="px-10 py-4 bg-[#2FB457] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#279949] shadow-lg shadow-[#2FB457]/20 transition-all rounded-md"
                >
                  Join Today
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}

function GalleryTile({
  img,
  className = "",
}: {
  img: { url: string; alt: string };
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl group bg-slate-100 ring-1 ring-slate-200 ${className}`}>
      <img
        src={img.url}
        alt={img.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
