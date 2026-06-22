import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import { fetchTrainingList, type TrainingRow } from "../lib/content/db";

const TITLE = "Training Courses — BALI";
const DESC = "Browse upcoming ROLO Health, Safety and Environmental Awareness courses and other training delivered by BALI's approved training providers.";

export const Route = createFileRoute("/events/training")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  loader: async () => {
    const rows = await fetchTrainingList();
    const courses: Course[] = rows.map((r: TrainingRow) => ({
      url: r.source_url ?? "#",
      img: r.image_url ?? "",
      title: r.title,
      desc: r.description,
      date: r.date_text,
      venue: r.venue,
    }));
    return { courses };
  },
  component: TrainingPage,
});

type Course = { url: string; img: string; title: string; desc: string; date: string; venue: string };

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseDate(d: string): Date | null {
  // "12 Jun 2026"
  const m = /(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/.exec(d);
  if (!m) return null;
  const mi = MONTHS.indexOf(m[2]);
  if (mi < 0) return null;
  return new Date(Number(m[3]), mi, Number(m[1]));
}

function categoryOf(c: Course): "Operative" | "Supervisor" | "Manager" | "Member" {
  const t = (c.title + " " + c.desc).toLowerCase();
  if (t.includes("supervisor")) return "Supervisor";
  if (t.includes("manager")) return "Manager";
  if (t.includes("operative") || t.includes("rolo")) return "Operative";
  return "Member";
}

function venueType(c: Course): "Online" | "In person" {
  const v = (c.venue + " " + c.title).toLowerCase();
  return v.includes("online") || v.includes("zoom") || v.includes("virtual") || v.includes("remote") ? "Online" : "In person";
}

const PAGE_SIZE = 24;

function TrainingPage() {
  const { courses } = useLoaderData({ from: '/events/training' });
  const all: Course[] = courses;
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"All" | "Operative" | "Supervisor" | "Manager" | "Member">("All");
  const [mode, setMode] = useState<"All" | "Online" | "In person">("All");
  const [month, setMonth] = useState<"All" | string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const monthOptions = useMemo(() => {
    const set = new Set<string>();
    all.forEach((c) => {
      const d = parseDate(c.date);
      if (d) set.add(`${MONTHS[d.getMonth()]} ${d.getFullYear()}`);
    });
    return Array.from(set);
  }, [all]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all
      .filter((c) => {
        if (cat !== "All" && categoryOf(c) !== cat) return false;
        if (mode !== "All" && venueType(c) !== mode) return false;
        if (month !== "All") {
          const d = parseDate(c.date);
          if (!d || `${MONTHS[d.getMonth()]} ${d.getFullYear()}` !== month) return false;
        }
        if (q && !(c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.venue.toLowerCase().includes(q))) return false;
        return true;
      })
      .sort((a, b) => {
        const da = parseDate(a.date)?.getTime() ?? 0;
        const db = parseDate(b.date)?.getTime() ?? 0;
        return da - db;
      });
  }, [all, query, cat, mode, month]);

  const onFilterChange = <T,>(fn: (v: T) => void) => (v: T) => { setVisible(PAGE_SIZE); fn(v); };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative text-white" style={{ background: "linear-gradient(135deg, #CF5E2C 0%, #6D4276 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <nav className="text-sm text-white/80 mb-4 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="opacity-60">/</span>
            <Link to="/events" className="hover:text-white">Events</Link>
            <span className="opacity-60">/</span>
            <span className="text-white">Training courses</span>
          </nav>
          <span className="inline-block px-3 py-1 border border-white/40 text-white text-[10px] uppercase tracking-widest font-bold mb-5 rounded-full">Events</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">BALI Training Courses</h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            Upcoming ROLO Health, Safety and Environmental Awareness courses and other industry training delivered by BALI's network of approved training providers. {all.length} courses scheduled.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        {/* FILTERS */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisible(PAGE_SIZE); }}
              placeholder="Search by keyword, provider or venue…"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-bali-warm/30 focus:border-bali-warm text-sm"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <select
              value={cat}
              onChange={(e) => onFilterChange(setCat)(e.target.value as typeof cat)}
              className="px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-bali-warm/30"
            >
              <option value="All">All course types</option>
              <option value="Operative">ROLO Operative</option>
              <option value="Supervisor">ROLO Supervisor</option>
              <option value="Manager">ROLO Manager</option>
              <option value="Member">Member training</option>
            </select>
            <select
              value={mode}
              onChange={(e) => onFilterChange(setMode)(e.target.value as typeof mode)}
              className="px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-bali-warm/30"
            >
              <option value="All">Online or in person</option>
              <option value="Online">Online only</option>
              <option value="In person">In person only</option>
            </select>
            <select
              value={month}
              onChange={(e) => onFilterChange(setMonth)(e.target.value as typeof month)}
              className="px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-bali-warm/30"
            >
              <option value="All">Any month</option>
              {monthOptions.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-900">{Math.min(visible, filtered.length)}</span> of <span className="font-bold text-slate-900">{filtered.length}</span> courses
            {(query || cat !== "All" || mode !== "All" || month !== "All") && (
              <button onClick={() => { setQuery(""); setCat("All"); setMode("All"); setMonth("All"); setVisible(PAGE_SIZE); }} className="ml-3 text-bali-warm font-semibold hover:underline">Clear filters</button>
            )}
          </div>
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-500 border border-dashed border-slate-200 rounded-2xl">
            No courses match your filters.
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.slice(0, visible).map((c) => {
                const cls = categoryOf(c);
                const vt = venueType(c);
                return (
                  <a
                    key={c.url}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div className="relative aspect-[8/5] bg-slate-100 overflow-hidden">
                      <img
                        src={c.img}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }}
                      />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/95 text-slate-700">{cls}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${vt === "Online" ? "bg-bali-flow/95 text-white" : "bg-bali-warm/95 text-white"}`}>{vt}</span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="text-xs font-bold uppercase tracking-wider text-bali-warm mb-1.5">{c.date}</div>
                      <h3 className="font-bold text-slate-900 leading-snug mb-2 line-clamp-3">{c.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2 flex-1">{c.desc}</p>
                      <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
                        <span className="text-slate-500 truncate">{c.venue}</span>
                        <span className="font-bold text-bali-warm group-hover:underline shrink-0">Book →</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            {visible < filtered.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="px-8 py-3 rounded-full bg-bali-warm text-white font-bold text-sm hover:bg-bali-purple transition-colors"
                >
                  Load more ({filtered.length - visible} remaining)
                </button>
              </div>
            )}
          </>
        )}

        {/* INFO STRIP */}
        <section className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-100">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="font-bold text-xl text-slate-900 mb-2">About ROLO training</h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                The ROLO Health, Safety & Environmental Awareness Course is the mandatory course for most LISS/CSCS SmartCards. Delivered as a one-day course (online or in person) by BALI's approved network of training providers — including Landscape Training Group, Orchard Learning, ITS Training, Prime Training and others.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://www.bali.org.uk/liss-cscs/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-bali-warm text-white font-bold text-sm text-center hover:bg-bali-purple transition-colors">LISS/CSCS smartcards →</a>
              <Link to="/contact" className="px-6 py-3 rounded-full border-2 border-bali-warm text-bali-warm font-bold text-sm text-center hover:bg-bali-warm hover:text-white transition-colors">Become a training provider</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
