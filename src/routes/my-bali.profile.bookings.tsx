import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { FieldStyles } from "./my-bali.profile.personal";
import { EVENT_BOOKINGS, EVENT_TYPES } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/profile/bookings")({
  component: Bookings,
});

function Bookings() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [range, setRange] = useState<"all" | "upcoming" | "past">("all");

  const filtered = useMemo(() => {
    return EVENT_BOOKINGS.filter((b) => {
      if (q && !b.title.toLowerCase().includes(q.toLowerCase())) return false;
      if (type && b.type !== type) return false;
      if (range !== "all" && b.when !== range) return false;
      return true;
    });
  }, [q, type, range]);

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">My event bookings</h2>
      <div className="grid gap-3 sm:grid-cols-3 mb-6">
        <label className="text-sm">
          <span className="sr-only">Keyword</span>
          <input className="input" placeholder="Search bookings…" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="sr-only">Event type</span>
          <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All event types</option>
            {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
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

      {filtered.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-gray-200 rounded-lg">
          <p className="text-gray-500 text-sm">You have no event bookings that match these filters.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {filtered.map((b) => (
            <li key={b.id} className="py-3 flex justify-between text-sm">
              <div>
                <div className="font-medium text-gray-900">{b.title}</div>
                <div className="text-gray-500">{b.type}</div>
              </div>
              <div className="text-gray-600">{b.date}</div>
            </li>
          ))}
        </ul>
      )}
      <FieldStyles />
    </Card>
  );
}
