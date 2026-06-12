import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import DirectoryListing from "../components/DirectoryListing";

const TITLE = "Search the BALI Landscape Directory";
const DESC = "Search all accredited landscape contractors, designers, suppliers and training providers by name, region or specialism.";

export const Route = createFileRoute("/directory/search")({
  head: () => ({
    meta: [
      { title: TITLE + " — BALI" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="text-white" style={{ background: "linear-gradient(135deg, #1D4D59 0%, #0E8B61 100%)" }}>
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <div className="text-emerald-200 font-semibold tracking-widest uppercase text-xs mb-4">Search all members</div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4">{TITLE}</h1>
            <p className="text-lg text-emerald-50/90 max-w-3xl">{DESC}</p>
          </div>
        </section>
        <DirectoryListing />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
