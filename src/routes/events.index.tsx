import { useMemo, useState, useEffect, useDeferredValue } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Calendar as CalendarIcon, MapPin, Filter as FilterIcon, X, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "../components/SmartLink";
import AdBanner from "../components/ads/AdBanner";
import SponsoredCard from "../components/ads/SponsoredCard";
import { fetchAllEventsList, type EventRow } from "../lib/content/db";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — BALI" },
      { name: "description", content: "Browse upcoming BALI national, regional, webinar and supplier events — filter by type, region and date across the UK landscape industry." },
      { property: "og:title", content: "Upcoming Events — BALI" },
      { property: "og:description", content: "Upcoming events from the British Association of Landscape Industries." },
    ],
  }),
  loader: async () => ({ events: await fetchAllEventsList() }),
  component: EventsIndex,
});

// ---- helpers ------------------------------------------------------------

const REGIONS = ["South West", "Midlands", "South Thames", "North Thames", "Yorkshire & North East", "East Anglia", "National"] as const;
type Region = (typeof REGIONS)[number] | "Online";

// TODO: replace with CMS region field once the events taxonomy exposes it.
function deriveRegion(e: EventRow): Region {
  const v = (e.venue ?? "").toLowerCase();
  if (v === "online") return "Online";
  const t = e.title.toLowerCase();
  if (t.startsWith("south west") || t.startsWith("southwest")) return "South West";
  if (t.startsWith("south thames")) return "South Thames";
  if (t.startsWith("north thames")) return "North Thames";
  if (t.startsWith("midlands")) return "Midlands";
  if (t.startsWith("yorkshire")) return "Yorkshire & North East";
  if (t.startsWith("east anglia") || t.includes("east anglia")) return "East Anglia";
  return "National";
}

function isWebinar(e: EventRow): boolean {
  return (e.venue ?? "").trim().toLowerCase() === "online" || e.category.toLowerCase() === "webinar";
}

function effectiveType(e: EventRow): string {
  return isWebinar(e) ? "Webinar" : e.category;
}

// For generic "BALI Regional Event" entries, promote the region to the primary tag.
function primaryTag(e: EventRow): string {
  const t = effectiveType(e);
  if (t === "BALI Regional Event") return deriveRegion(e);
  return t;
}

// Per-region colour tokens — kept within the existing bali palette.
const REGION_COLORS: Record<string, string> = {
  "South West": "bg-bali-grass text-bali-slate",
  "Midlands": "bg-bali-blue text-white",
  "South Thames": "bg-bali-purple text-white",
  "North Thames": "bg-sky-600 text-white",
  "Yorkshire & North East": "bg-amber-500 text-bali-slate",
  "East Anglia": "bg-emerald-600 text-white",
  "National": "bg-bali-slate text-white",
  "Online": "bg-bali-purple text-white",
};

// Non-region event types.
const TYPE_COLORS: Record<string, string> = {
  "Webinar": "bg-bali-purple text-white",
  "Supplier Forum": "bg-bali-slate text-white",
  "BALI Chalk Fund": "bg-bali-grass text-bali-slate",
  "Member Event": "bg-bali-grass text-bali-slate",
};
function tagBadgeClass(tag: string) {
  return REGION_COLORS[tag] ?? TYPE_COLORS[tag] ?? "bg-gray-800 text-white";
}

function isPast(e: EventRow): boolean {
  if (!e.iso_date) return false;
  const today = new Date().toISOString().slice(0, 10);
  return e.iso_date < today;
}

function monthKey(iso: string | null): string {
  if (!iso) return "";
  return iso.slice(0, 7); // YYYY-MM
}
function monthLabel(key: string): string {
  if (!key) return "";
  const [y, m] = key.split("-");
  return new Date(Number(y), Number(m) - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

// ---- page ---------------------------------------------------------------

const PAGE_SIZE = 9;

function EventsIndex() {
  const { events } = Route.useLoaderData();

  // filter state
  const [q, setQ] = useState("");
  const dq = useDeferredValue(q);
  const [type, setType] = useState<string>("all");
  const [region, setRegion] = useState<string>("all");
  const [month, setMonth] = useState<string>("all");
  const [tense, setTense] = useState<"future" | "past">("future");
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [mobileOpen, setMobileOpen] = useState(false);

  // derived options
  const allTypes = useMemo(() => {
    const s = new Set<string>();
    events.forEach((e: EventRow) => { if (!isWebinar(e)) s.add(effectiveType(e)); });
    return Array.from(s).sort();
  }, [events]);

  const allMonths = useMemo(() => {
    const s = new Set<string>();
    events.forEach((e: EventRow) => { if (e.iso_date) s.add(monthKey(e.iso_date)); });
    return Array.from(s).sort();
  }, [events]);

  // active filter set
  const filtered = useMemo(() => {
    const needle = dq.trim().toLowerCase();
    return events.filter((e: EventRow) => {
      if (isWebinar(e)) return false; // webinars live only in the spotlight section
      if (tense === "future" && isPast(e)) return false;
      if (tense === "past" && !isPast(e)) return false;
      if (type !== "all" && effectiveType(e) !== type) return false;
      if (region !== "all" && deriveRegion(e) !== region) return false;
      if (month !== "all" && monthKey(e.iso_date) !== month) return false;
      if (needle && !(`${e.title} ${e.venue}`.toLowerCase().includes(needle))) return false;
      return true;
    });
  }, [events, dq, type, region, month, tense]);

  // reset paging when filters change
  useEffect(() => { setPageSize(PAGE_SIZE); }, [dq, type, region, month, tense]);

  const visible = filtered.slice(0, pageSize);
  const hasMore = filtered.length > pageSize;

  const webinars = useMemo(
    () => events.filter((e: EventRow) => isWebinar(e) && !isPast(e)).slice(0, 4),
    [events],
  );

  const activeCount = [type !== "all", region !== "all", month !== "all", q.trim() !== "", tense !== "future"].filter(Boolean).length;
  const clearAll = () => { setQ(""); setType("all"); setRegion("all"); setMonth("all"); setTense("future"); };


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* hero */}
      <section className="py-16 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #21509A 0%, #6D4276 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">BALI Events</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            National conferences, regional connects, supplier forums, webinars and training days — built for and by the UK landscape industry.
          </p>
          <a
            href="#filters"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4"
          >
            <FilterIcon className="w-4 h-4" aria-hidden /> Filter events
          </a>
        </div>
      </section>

      {/* webinars spotlight */}
      {webinars.length > 0 && (
        <section aria-labelledby="webinars-heading" className="py-12 bg-gradient-to-b from-bali-purple/5 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
              <div>
                <p className="uppercase tracking-widest text-xs font-semibold text-bali-purple mb-2 inline-flex items-center gap-2">
                  <Monitor className="w-4 h-4" aria-hidden /> Webinars
                </p>
                <h2 id="webinars-heading" className="text-2xl sm:text-3xl font-bold text-bali-slate">Upcoming webinars</h2>
                <p className="text-gray-600 mt-1">Join us online — no travel required.</p>
              </div>
              <button
                onClick={applyWebinarFilter}
                className="text-sm font-semibold text-bali-blue hover:text-bali-purple underline underline-offset-4"
              >
                View all webinars →
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.slice(0, 3).map((w: EventRow) => (
                <WebinarCard key={w.id} event={w} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* filters + grid */}
      <section className="py-12" id="events-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">

            {/* filter panel */}
            <aside id="filters" aria-label="Filter events" className="lg:sticky lg:top-24 lg:self-start mb-6 lg:mb-0">
              {/* mobile toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="filter-controls"
                className="lg:hidden w-full inline-flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 font-semibold text-bali-slate"
              >
                <span className="inline-flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" aria-hidden /> Filter events
                  {activeCount > 0 && (
                    <span className="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-bali-blue text-white text-[11px] font-bold">{activeCount}</span>
                  )}
                </span>
                <ChevronDown className={`w-4 h-4 transition ${mobileOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>

              <div
                id="filter-controls"
                className={`${mobileOpen ? "block" : "hidden"} lg:block bg-white border border-gray-200 rounded-2xl p-5 space-y-5 mt-3 lg:mt-0`}
              >
                <div>
                  <label htmlFor="f-search" className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Search</label>
                  <input
                    id="f-search"
                    type="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Title or location…"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-bali-blue focus:ring-2 focus:ring-bali-blue/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="f-type" className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Event type</label>
                  <select
                    id="f-type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:border-bali-blue focus:ring-2 focus:ring-bali-blue/20 focus:outline-none"
                  >
                    <option value="all">All types</option>
                    {allTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="f-region" className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Region</label>
                  <select
                    id="f-region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:border-bali-blue focus:ring-2 focus:ring-bali-blue/20 focus:outline-none"
                  >
                    <option value="all">All regions</option>
                    {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="f-month" className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Month</label>
                  <select
                    id="f-month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:border-bali-blue focus:ring-2 focus:ring-bali-blue/20 focus:outline-none"
                  >
                    <option value="all">Any month</option>
                    {allMonths.map((m) => <option key={m} value={m}>{monthLabel(m)}</option>)}
                  </select>
                </div>

                <fieldset>
                  <legend className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">When</legend>
                  <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 w-full" role="tablist">
                    <button
                      role="tab"
                      aria-selected={tense === "future"}
                      onClick={() => setTense("future")}
                      className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition ${tense === "future" ? "bg-bali-blue text-white" : "text-gray-600 hover:text-bali-blue"}`}
                    >Upcoming</button>
                    <button
                      role="tab"
                      aria-selected={tense === "past"}
                      onClick={() => setTense("past")}
                      className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition ${tense === "past" ? "bg-bali-blue text-white" : "text-gray-600 hover:text-bali-blue"}`}
                    >Past</button>
                  </div>
                </fieldset>

                <button
                  type="button"
                  onClick={clearAll}
                  disabled={activeCount === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-bali-blue hover:text-bali-purple disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  <X className="w-3.5 h-3.5" aria-hidden /> Clear filters
                </button>
              </div>
            </aside>

            {/* results */}
            <div>
              <div className="flex items-center justify-between mb-6" aria-live="polite">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-bali-slate">{visible.length}</span> of <span className="font-semibold text-bali-slate">{filtered.length}</span> events
                </p>
              </div>

              <AdBanner placement="events-inline" seed={1} className="mb-8" />

              {filtered.length === 0 ? (
                <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-12 text-center">
                  <p className="text-lg font-semibold text-bali-slate mb-1">No events match your filters</p>
                  <p className="text-gray-600 text-sm mb-4">Try widening your search — clear a filter or switch to past events.</p>
                  <button onClick={clearAll} className="inline-flex items-center gap-1.5 bg-bali-blue hover:bg-bali-purple text-white font-semibold text-sm px-4 py-2 rounded-lg transition">
                    Clear filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {visible.map((e: EventRow, i: number) => {
                      const nodes: React.ReactNode[] = [<EventCard key={e.id} event={e} />];
                      if ((i + 1) % 5 === 0) nodes.push(<SponsoredCard key={`sp-${i}`} placement="events-feed" seed={Math.floor(i / 5)} />);
                      return nodes;
                    })}
                  </div>

                  {hasMore && (
                    <div className="mt-10 text-center">
                      <button
                        onClick={() => setPageSize((n) => n + PAGE_SIZE)}
                        className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-purple text-white font-semibold px-6 py-3 rounded-lg transition"
                      >
                        Load more events
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}

// ---- cards --------------------------------------------------------------

function EventCard({ event }: { event: EventRow }) {
  const t = effectiveType(event);
  const parts = event.date_text.split(" ");
  const day = parts[0] ?? event.date_text;
  const month = (parts[1] ?? "").toUpperCase();
  const year = parts[2] ?? "";
  const region = deriveRegion(event);
  const primary = primaryTag(event); // region name for generic regional events, else the type
  // primaryTag = region for generic regional events, else the event type.
  const past = isPast(event);
  const booking = event.booking_url;

  return (
    <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-bali-blue hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
      <div className="relative">
        {event.image_url ? (
          <img src={event.image_url} alt={event.image_alt ?? event.title} loading="lazy" className="w-full h-44 object-cover" />
        ) : (
          <div className="w-full h-44 bg-gradient-to-br from-bali-blue/10 via-bali-purple/10 to-bali-grass/20 grid place-items-center">
            <CalendarIcon className="w-10 h-10 text-bali-blue/40" aria-hidden />
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white rounded-xl shadow-lg overflow-hidden text-center w-16 ring-1 ring-black/5">
          <div className="bg-bali-blue text-white text-[10px] font-bold uppercase tracking-wider py-1">{month}</div>
          <div className="py-1">
            <div className="text-2xl font-extrabold leading-none text-gray-900">{day}</div>
            {year && <div className="text-[10px] text-gray-500 mt-0.5">{year}</div>}
          </div>
        </div>
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full shadow-sm ${tagBadgeClass(primary)}`}>
            {primary}
          </span>
          {past && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gray-800/80 text-white">Past</span>}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        {t === "BALI Regional Event" ? (
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Regional Connect</p>
        ) : (
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{region}</p>
        )}
        <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-bali-blue transition-colors">
          {booking ? (
            <a href={booking} className="focus:outline-none focus:underline">{event.title}</a>
          ) : (
            <Link to="/events/$slug" params={{ slug: event.slug }}>{event.title}</Link>
          )}
        </h3>
        <div className="mt-3 inline-flex items-center gap-2 text-bali-blue font-bold text-base">
          <CalendarIcon className="w-4 h-4" aria-hidden />
          {event.date_text}
        </div>
        {event.description && <p className="text-sm text-gray-600 mt-3 line-clamp-3 flex-1">{event.description}</p>}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-sm text-gray-500 min-w-0">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
            <span className="truncate">{event.venue}</span>
          </span>
          {/* TODO: replace with real availability data from CMS */}
          <span className="text-[11px] font-semibold text-bali-grass whitespace-nowrap">Places available</span>
        </div>
        {booking && !past && (
          <a
            href={booking}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-bali-blue hover:bg-bali-purple text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition"
          >
            Book now
          </a>
        )}
      </div>
    </article>
  );
}

function WebinarCard({ event }: { event: EventRow }) {
  const booking = event.booking_url;
  const dateLong = event.iso_date
    ? new Date(event.iso_date + "T00:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })
    : event.date_text;
  return (
    <article className="bg-white rounded-2xl border border-bali-purple/30 shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="bg-gradient-to-br from-bali-purple to-bali-blue text-white px-5 py-4 flex items-center gap-2">
        <Monitor className="w-4 h-4" aria-hidden />
        <span className="text-[11px] font-bold uppercase tracking-widest">Webinar</span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-xs uppercase tracking-widest font-semibold text-bali-blue mb-2">Online session</p>
        <h3 className="font-bold text-bali-slate text-lg leading-snug">{event.title}</h3>
        <p className="mt-3 text-sm text-gray-700 font-semibold inline-flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-bali-purple" aria-hidden />
          {dateLong}
          {/* TODO: surface real start time from CMS */}
          <span className="text-gray-500 font-normal">· Time TBC</span>
        </p>
        {event.description && <p className="text-sm text-gray-600 mt-3 line-clamp-3 flex-1">{event.description}</p>}
        {booking && (
          <a
            href={booking}
            className="mt-5 inline-flex items-center justify-center gap-2 bg-bali-purple hover:bg-bali-blue text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition"
          >
            Reserve your spot
          </a>
        )}
      </div>
    </article>
  );
}
