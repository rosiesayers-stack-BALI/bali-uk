import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import DirectoryListing from "../components/DirectoryListing";

const TITLE = "Designers — BALI Landscape Directory";
const DESC = "Accredited garden designers, landscape architects and design-build practices — vetted on portfolio, client work and professional standards.";

export const Route = createFileRoute("/directory/designer")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <div className="text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-4">Landscape Directory</div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4">Find a BALI Accredited Designer</h1>
            <p className="text-lg text-emerald-50/90 max-w-3xl">{DESC}</p>
          </div>
        </section>
        <DirectoryListing initialCategory="designer" lockCategory />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
