import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import { CalendarDays, ChevronLeft, ChevronRight, LayoutGrid, List, Plus, Edit, Trash2, Eye, EyeOff, MapPin, Clock, X } from "lucide-react";
import { EVENT_TYPE_COLORS } from "@/services/mybali-data";

export const Route = createFileRoute("/admin/events/")({
  component: EventsAdminIndex,
});

type EventRow = {
  id: string;
  title: string;
  slug: string;
  date_text: string | null;
  iso_date: string | null;
  venue: string | null;
  category: string | null;
  published: boolean;
};

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth() + n, 1); }

function EventsAdminIndex() {
  const qc = useQueryClient();
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [cursor, setCursor] = useState<Date>(() => startOfMonth(new Date()));
  const [selected, setSelected] = useState<EventRow | null>(null);

  const list = useQuery({
    queryKey: ["admin", "events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("id, title, slug, date_text, iso_date, venue, category, published")
        .order("iso_date", { ascending: true, nullsFirst: false });
      if (error) throw error;
      return data as EventRow[];
    },
  });

  const togglePublish = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      const { error } = await supabase.from("events").update({ published }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "events"] }),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("events").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "events"] }),
  });

  const byDate = useMemo(() => {
    const m = new Map<string, EventRow[]>();
    (list.data ?? []).forEach((e) => {
      if (!e.iso_date) return;
      const key = e.iso_date.slice(0, 10);
      const arr = m.get(key) ?? [];
      arr.push(e);
      m.set(key, arr);
    });
    return m;
  }, [list.data]);

  const monthLabel = cursor.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
  const leading = (cursor.getDay() + 6) % 7;
  const cells: Array<{ date?: Date; iso?: string }> = [];
  for (let i = 0; i < leading; i++) cells.push({});
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(cursor.getFullYear(), cursor.getMonth(), d);
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ date, iso });
  }
  while (cells.length % 7 !== 0) cells.push({});

  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Manage events shown at /events — schedule with the calendar or edit as a list."
        actions={
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button onClick={() => setView("calendar")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium ${view === "calendar" ? "bg-bali-blue text-white" : "text-gray-600 hover:text-bali-blue"}`}>
                <LayoutGrid className="w-4 h-4" /> Calendar
              </button>
              <button onClick={() => setView("list")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium ${view === "list" ? "bg-bali-blue text-white" : "text-gray-600 hover:text-bali-blue"}`}>
                <List className="w-4 h-4" /> List
              </button>
            </div>
            <Link to="/admin/events/new" className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90">
              <Plus className="w-4 h-4" /> New event
            </Link>
          </div>
        }
      />

      {list.isLoading ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-sm text-gray-500 text-center">Loading events…</div>
      ) : list.error ? (
        <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 text-sm text-red-700">{(list.error as Error).message}</div>
      ) : view === "calendar" ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button onClick={() => setCursor(addMonths(cursor, -1))} className="p-2 rounded-lg border border-gray-200 hover:border-bali-blue hover:text-bali-blue" aria-label="Previous month">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setCursor(addMonths(cursor, 1))} className="p-2 rounded-lg border border-gray-200 hover:border-bali-blue hover:text-bali-blue" aria-label="Next month">
                <ChevronRight className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-bold text-bali-slate ml-2">{monthLabel}</h3>
            </div>
            <button onClick={() => setCursor(startOfMonth(new Date()))} className="text-sm text-bali-blue font-semibold hover:underline">Today</button>
          </div>
          <div className="grid grid-cols-7 text-[11px] uppercase tracking-wide font-semibold text-gray-500 mb-1">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
              <div key={d} className="px-2 py-1.5">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((c, i) => {
              const events = c.iso ? byDate.get(c.iso) ?? [] : [];
              const isToday = c.iso === new Date().toISOString().slice(0, 10);
              return (
                <div key={i} className={`min-h-[96px] rounded-lg border p-1.5 text-xs ${c.date ? "bg-white border-gray-100" : "bg-gray-50 border-transparent"} ${isToday ? "ring-2 ring-bali-blue/40" : ""}`}>
                  {c.date && (
                    <>
                      <div className={`text-[11px] font-semibold mb-1 ${isToday ? "text-bali-blue" : "text-gray-500"}`}>{c.date.getDate()}</div>
                      <div className="space-y-1">
                        {events.slice(0, 3).map((e) => {
                          const colour = e.category ? EVENT_TYPE_COLORS[e.category] ?? "bg-gray-400 text-white" : "bg-gray-400 text-white";
                          return (
                            <button key={e.id} onClick={() => setSelected(e)}
                              className={`w-full text-left truncate px-1.5 py-1 rounded text-[11px] font-medium ${colour} hover:opacity-90`}
                              title={e.title}>
                              {e.title}
                            </button>
                          );
                        })}
                        {events.length > 3 && <div className="text-[10px] text-gray-500 px-1">+{events.length - 3} more</div>}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {!list.data?.length ? (
            <div className="p-10 text-center text-sm text-gray-500">No events yet — click <strong>New event</strong> to add one.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Venue</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {list.data.map((e) => {
                  const colour = e.category ? EVENT_TYPE_COLORS[e.category] ?? "bg-gray-400 text-white" : "bg-gray-400 text-white";
                  return (
                    <tr key={e.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">
                        <Link to="/admin/events/$id" params={{ id: e.id }} className="text-bali-slate hover:text-bali-blue">{e.title}</Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{e.date_text || "—"}</td>
                      <td className="px-4 py-3">
                        {e.category ? <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full ${colour}`}>{e.category}</span> : <span className="text-gray-400">—</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{e.venue || "—"}</td>
                      <td className="px-4 py-3">
                        {e.published ? (
                          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800"><Eye className="w-3 h-3" /> Published</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 text-gray-700"><EyeOff className="w-3 h-3" /> Draft</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="inline-flex items-center gap-1">
                          <button onClick={() => togglePublish.mutate({ id: e.id, published: !e.published })} className="p-1.5 text-gray-500 hover:text-bali-blue hover:bg-gray-100 rounded" title={e.published ? "Unpublish" : "Publish"}>
                            {e.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <Link to="/admin/events/$id" params={{ id: e.id }} className="p-1.5 text-gray-500 hover:text-bali-blue hover:bg-gray-100 rounded">
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button onClick={() => { if (confirm(`Delete "${e.title}"?`)) remove.mutate(e.id); }} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      {selected && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className={`px-5 py-3 flex items-center justify-between ${selected.category ? EVENT_TYPE_COLORS[selected.category] ?? "bg-gray-500 text-white" : "bg-gray-500 text-white"}`}>
              <span className="text-xs uppercase tracking-wide font-semibold">{selected.category || "Event"}</span>
              <button onClick={() => setSelected(null)} className="text-white/90 hover:text-white" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-bali-slate">{selected.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-bali-blue" /> {selected.date_text || "Date TBC"}</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-bali-blue" /> {selected.venue || "Venue TBC"}</li>
                <li className="flex items-center gap-2 text-xs text-gray-500"><Clock className="w-3.5 h-3.5" /> {selected.published ? "Published" : "Draft"}</li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <Link to="/admin/events/$id" params={{ id: selected.id }} className="inline-flex items-center gap-2 bg-bali-blue hover:bg-bali-slate text-white text-sm font-semibold px-4 py-2 rounded-lg">
                  <Edit className="w-4 h-4" /> Edit event
                </Link>
                <button onClick={() => setSelected(null)} className="text-sm text-gray-600 hover:text-bali-blue">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
