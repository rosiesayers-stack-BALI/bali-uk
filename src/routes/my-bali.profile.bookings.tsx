import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/mybali/DashboardShell";
import { FieldStyles } from "./my-bali.profile.personal";
import { supabase } from "@/integrations/supabase/client";
import { useCurrentPerson } from "@/lib/mybali/contact-role";

export const Route = createFileRoute("/my-bali/profile/bookings")({
  component: Bookings,
});

type BookingRow = {
  id: string;
  event_slug: string | null;
  attendee_name: string | null;
  places: number;
  amount: number | null;
  status: string;
  paid_at: string | null;
  payment_provider: string | null;
  payment_ref: string | null;
  attended: boolean;
  events: { title: string; date_text: string | null; iso_date: string | null; category: string | null } | null;
};

const gbp = (v: number | null | undefined) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(Number(v ?? 0));

function Bookings() {
  const person = useCurrentPerson();
  const [q, setQ] = useState("");
  const [range, setRange] = useState<"all" | "upcoming" | "past">("all");

  const bookings = useQuery({
    queryKey: ["mybali", "bookings", person?.id ?? "anon"],
    enabled: !!person?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("workbooks_bookings")
        .select("id, event_slug, attendee_name, places, amount, status, paid_at, payment_provider, payment_ref, attended, events(title, date_text, iso_date, category)")
        .eq("wb_person_id", person!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as BookingRow[];
    },
  });

  const filtered = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    return (bookings.data ?? []).filter((b) => {
      const title = b.events?.title ?? "";
      if (q && !title.toLowerCase().includes(q.toLowerCase())) return false;
      const iso = b.events?.iso_date ?? null;
      if (range === "upcoming" && (!iso || iso < today)) return false;
      if (range === "past" && (!iso || iso >= today)) return false;
      return true;
    });
  }, [bookings.data, q, range]);

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">My event bookings</h2>
      <div className="grid gap-3 sm:grid-cols-2 mb-6">
        <label className="text-sm">
          <span className="sr-only">Keyword</span>
          <input className="input" placeholder="Search bookings…" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="sr-only">Date range</span>
          <select className="input" value={range} onChange={(e) => setRange(e.target.value as typeof range)}>
            <option value="all">All dates</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </label>
      </div>

      {!person ? (
        <div className="text-center py-10 border border-dashed border-gray-200 rounded-lg">
          <p className="text-gray-500 text-sm">Sign in to see your event bookings.</p>
        </div>
      ) : bookings.isLoading ? (
        <div className="text-center py-10 text-sm text-gray-500">Loading your bookings…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-gray-200 rounded-lg">
          <p className="text-gray-500 text-sm">You have no event bookings that match these filters.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {filtered.map((b) => (
            <li key={b.id} className="py-4 grid gap-1 sm:grid-cols-[1fr_auto] items-start">
              <div>
                <div className="font-medium text-gray-900">{b.events?.title ?? "Event"}</div>
                <div className="text-xs text-gray-500">
                  {b.events?.date_text ?? "—"} · {b.places} place{b.places === 1 ? "" : "s"}
                  {b.attended && <span className="ml-2 inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Attended</span>}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {b.payment_provider ?? "—"}
                  {b.payment_ref && <span className="ml-2 font-mono">{b.payment_ref}</span>}
                </div>
              </div>
              <div className="text-right sm:text-right">
                <div className="text-sm font-semibold text-bali-slate">{gbp(b.amount)}</div>
                <span className={`inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                  b.status === "Confirmed" ? "bg-green-100 text-green-800" :
                  b.status === "Awaiting payment" ? "bg-amber-100 text-amber-800" :
                  "bg-gray-200 text-gray-700"
                }`}>{b.status}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <FieldStyles />
    </Card>
  );
}
