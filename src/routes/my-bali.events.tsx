import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ChevronLeft, ChevronRight, List, LayoutGrid, MapPin, Clock, X } from "lucide-react";
import { PageHeader, Card } from "../components/mybali/DashboardShell";
import { MEMBER_EVENTS, EVENT_TYPE_COLORS, EVENT_TYPES, type MemberEvent } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/events")({
  head: () => ({ meta: [{ title: "Events — My BALI" }] }),
  component: EventsPage,
});

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function addMonths(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}
function fmtLong(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

function EventsPage() {
  const earliest = MEMBER_EVENTS.reduce((a, e) => (e.date < a ? e.date : a), MEMBER_EVENTS[0].date);
  const [cursor, setCursor] = useState(() => startOfMonth(new Date(earliest + "T00:00:00")));
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selected, setSelected] = useState<MemberEvent | null>(null);

  const filtered = useMemo(
    () => MEMBER_EVENTS.filter((e) => typeFilter === "all" || e.type === typeFilter),
    [typeFilter]
  );

  const byDate = useMemo(() => {
    const m = new Map<string, MemberEvent[]>();
    filtered.forEach((e) => {
      const arr = m.get(e.date) ?? [];
      arr.push(e);
      m.set(e.date, arr);
    });
    return m;
  }, [filtered]);

  const monthLabel = cursor.toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  // build calendar grid (Mon-first)
  const firstDay = cursor;
  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
  const leading = (firstDay.getDay() + 6) % 7; // Mon = 0
  const cells: Array<{ date?: Date; iso?: string }> = [];
  for (let i = 0; i < leading; i++) cells.push({});
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(cursor.getFullYear(), cursor.getMonth(), d);
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ date, iso });
  }
  while (cells.length % 7 !== 0) cells.push({});

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Regional connects, training, webinars, flower shows and the BALI national programme."
        action={
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setView("calendar")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  view === "calendar" ? "bg-bali-blue text-white" : "text-gray-600 hover:text-bali-blue"
                }`}
                aria-pressed={view === "calendar"}
              >
                <LayoutGrid className="w-4 h-4" aria-hidden /> Calendar
              </button>
              <button
                onClick={() => setView("list")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  view === "list" ? "bg-bali-blue text-white" : "text-gray-600 hover:text-bali-blue"
                }`}
                aria-pressed={view === "list"}
              >
                <List className="w-4 h-4" aria-hidden /> List
              </button>
            </div>
          </div>
        }
      />

      {/* Type filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        <FilterChip active={typeFilter === "all"} onClick={() => setTypeFilter("all")}>
          All events
        </FilterChip>
        {EVENT_TYPES.map((t) => (
          <FilterChip key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>
            <span className={`inline-block w-2.5 h-2.5 rounded-full mr-1.5 align-middle ${EVENT_TYPE_COLORS[t] ?? "bg-gray-400"}`} />
            {t}
          </FilterChip>
        ))}
      </div>

      {view === "calendar" ? (
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCursor(addMonths(cursor, -1))}
                className="p-2 rounded-lg border border-gray-200 hover:border-bali-blue hover:text-bali-blue transition"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCursor(addMonths(cursor, 1))}
                className="p-2 rounded-lg border border-gray-200 hover:border-bali-blue hover:text-bali-blue transition"
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-bold text-bali-slate ml-2">{monthLabel}</h3>
            </div>
            <button
              onClick={() => setCursor(startOfMonth(new Date()))}
              className="text-sm text-bali-blue font-semibold hover:underline"
            >
              Today
            </button>
          </div>

          <div className="grid grid-cols-7 text-[11px] uppercase tracking-wide font-semibold text-gray-500 mb-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="px-2 py-1.5">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((c, i) => {
              const events = c.iso ? byDate.get(c.iso) ?? [] : [];
              const isToday = c.iso === new Date().toISOString().slice(0, 10);
              return (
                <div
                  key={i}
                  className={`min-h-[92px] rounded-lg border p-1.5 text-xs ${
                    c.date ? "bg-white border-gray-100" : "bg-gray-50 border-transparent"
                  } ${isToday ? "ring-2 ring-bali-blue/40" : ""}`}
                >
                  {c.date && (
                    <>
                      <div className={`text-[11px] font-semibold mb-1 ${isToday ? "text-bali-blue" : "text-gray-500"}`}>
                        {c.date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {events.slice(0, 3).map((e) => (
                          <button
                            key={e.id}
                            onClick={() => setSelected(e)}
                            className={`w-full text-left truncate px-1.5 py-1 rounded text-[11px] font-medium ${EVENT_TYPE_COLORS[e.type] ?? "bg-gray-400 text-white"} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60`}
                            title={`${e.title} — ${e.type}`}
                          >
                            {e.time ? `${e.time} · ` : ""}{e.title}
                          </button>
                        ))}
                        {events.length > 3 && (
                          <div className="text-[10px] text-gray-500 px-1">+{events.length - 3} more</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      ) : (
        <Card>
          <ul className="divide-y divide-gray-100">
            {filtered.map((e) => (
              <li key={e.id} className="py-4 first:pt-0 last:pb-0 grid grid-cols-[auto_minmax(0,1fr)_auto] gap-4 items-start">
                <div className={`shrink-0 grid place-items-center w-14 h-14 rounded-lg ${EVENT_TYPE_COLORS[e.type] ?? "bg-gray-400 text-white"}`}>
                  <div className="text-center leading-tight">
                    <div className="text-[10px] uppercase font-semibold opacity-90">
                      {new Date(e.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short" })}
                    </div>
                    <div className="text-lg font-bold">{new Date(e.date + "T00:00:00").getDate()}</div>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide font-semibold text-bali-blue">{e.type}</p>
                  <h4 className="font-bold text-bali-slate">{e.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 flex flex-wrap gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden /> {e.time ?? "TBC"}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" aria-hidden /> {e.venue}</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1.5 line-clamp-2">{e.description}</p>
                </div>
                <button
                  onClick={() => setSelected(e)}
                  className="shrink-0 text-sm font-semibold text-bali-blue hover:underline"
                >
                  View →
                </button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {selected && <EventDialog event={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
        active
          ? "bg-bali-blue text-white border-bali-blue"
          : "bg-white text-gray-600 border-gray-200 hover:border-bali-blue hover:text-bali-blue"
      }`}
    >
      {children}
    </button>
  );
}

function EventDialog({ event, onClose }: { event: MemberEvent; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`px-5 py-3 flex items-center justify-between ${EVENT_TYPE_COLORS[event.type] ?? "bg-gray-500 text-white"}`}>
          <span className="text-xs uppercase tracking-wide font-semibold">{event.type}</span>
          <button onClick={onClose} className="text-white/90 hover:text-white" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-bali-slate">{event.title}</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
            <li className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-bali-blue" aria-hidden /> {fmtLong(event.date)}</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-bali-blue" aria-hidden /> {event.time ?? "Time TBC"}</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-bali-blue" aria-hidden /> {event.venue}</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">{event.description}</p>
          <div className="mt-6 flex items-center gap-3">
            {/* TODO: wire to real booking API */}
            <button
              className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-slate text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
              onClick={onClose}
            >
              {event.booked ? "View booking" : "Book place"}
            </button>
            <button
              onClick={onClose}
              className="text-sm text-gray-600 hover:text-bali-blue"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
