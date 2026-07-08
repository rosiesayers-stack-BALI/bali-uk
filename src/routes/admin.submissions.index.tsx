import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Loader2, XCircle, AlertTriangle, ExternalLink } from "lucide-react";
import {
  approveNewsSubmission,
  listAllSubmissions,
  rejectSubmission,
  requestChangesOnSubmission,
  type AdminSubmission,
} from "@/lib/admin/submissions";

export const Route = createFileRoute("/admin/submissions/")({
  component: SubmissionsPage,
});

const filters: { id: "pending" | "all" | "decided"; label: string }[] = [
  { id: "pending", label: "Pending" },
  { id: "decided", label: "Decided" },
  { id: "all", label: "All" },
];

const badge: Record<AdminSubmission["status"], { label: string; cls: string; Icon: typeof Clock }> = {
  pending: { label: "Pending", cls: "bg-amber-100 text-amber-800", Icon: Clock },
  approved: { label: "Approved", cls: "bg-emerald-100 text-emerald-800", Icon: CheckCircle2 },
  published: { label: "Published", cls: "bg-green-100 text-green-800", Icon: CheckCircle2 },
  rejected: { label: "Rejected", cls: "bg-red-100 text-red-700", Icon: XCircle },
  changes_requested: { label: "Changes requested", cls: "bg-orange-100 text-orange-800", Icon: AlertTriangle },
};

function SubmissionsPage() {
  const [items, setItems] = useState<AdminSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<(typeof filters)[number]["id"]>("pending");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  const refresh = () => {
    setLoading(true);
    listAllSubmissions()
      .then(setItems)
      .catch((e) => setError((e as Error).message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refresh();
  }, []);

  const filtered = items.filter((s) => {
    if (tab === "all") return true;
    if (tab === "pending") return s.status === "pending" || s.status === "changes_requested";
    return s.status === "approved" || s.status === "rejected" || s.status === "published";
  });

  const withBusy = async (id: string, fn: () => Promise<void>) => {
    setBusyId(id);
    setError(null);
    try {
      await fn();
      refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Member submissions</h1>
          <p className="text-sm text-gray-500 mt-1">Review and publish member-submitted news items.</p>
        </div>
      </div>

      <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-lg w-fit">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setTab(f.id)}
            className={`px-4 py-1.5 text-sm rounded-md ${
              tab === f.id ? "bg-white shadow-sm font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading…
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500">
          Nothing to show here.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((s) => {
            const b = badge[s.status];
            const Icon = b.Icon;
            const isOpen = expanded === s.id;
            const note = notes[s.id] ?? "";
            const busy = busyId === s.id;
            return (
              <div key={s.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-4 flex items-start gap-4">
                  {s.payload.image_url && (
                    <img src={s.payload.image_url} alt="" className="w-20 h-20 object-cover rounded-lg" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-gray-900">{s.title}</p>
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${b.cls}`}>
                        <Icon className="w-3 h-3" /> {b.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Org {s.wb_org_id} · Submitted {new Date(s.created_at).toLocaleString()}
                    </p>
                    {s.payload.description && (
                      <p className="text-sm text-gray-700 mt-2">{s.payload.description}</p>
                    )}
                    {s.reviewer_notes && (
                      <p className="text-xs mt-2 bg-gray-50 border border-gray-100 rounded px-2 py-1.5 text-gray-700">
                        <span className="font-medium">Reviewer note:</span> {s.reviewer_notes}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => setExpanded(isOpen ? null : s.id)}
                      className="text-xs text-bali-blue hover:underline"
                    >
                      {isOpen ? "Hide" : "Review"}
                    </button>
                    {s.published_id && (
                      <a
                        href={`/news`}
                        className="text-xs text-gray-500 hover:text-bali-blue inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" /> View
                      </a>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-3">
                    {s.payload.body && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Body</p>
                        <div className="text-sm text-gray-800 whitespace-pre-wrap bg-white border border-gray-200 rounded p-3">
                          {s.payload.body}
                        </div>
                      </div>
                    )}
                    {(s.status === "pending" || s.status === "changes_requested") && (
                      <>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                            Reviewer notes (shown to member)
                          </label>
                          <textarea
                            rows={2}
                            value={note}
                            onChange={(e) => setNotes({ ...notes, [s.id]: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Optional for approve; required for reject / request changes."
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button
                            disabled={busy}
                            onClick={() => withBusy(s.id, () => approveNewsSubmission(s, note))}
                            className="bg-bali-green hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-60 inline-flex items-center gap-1"
                          >
                            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                            Approve & publish
                          </button>
                          <button
                            disabled={busy || !note.trim()}
                            onClick={() => withBusy(s.id, () => requestChangesOnSubmission(s, note))}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-60"
                          >
                            Request changes
                          </button>
                          <button
                            disabled={busy || !note.trim()}
                            onClick={() => withBusy(s.id, () => rejectSubmission(s, note))}
                            className="border border-red-300 text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-60"
                          >
                            Reject
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
