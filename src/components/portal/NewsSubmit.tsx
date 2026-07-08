import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Loader2, XCircle, AlertTriangle, FileText } from "lucide-react";
import { listMySubmissions, submitNewsItem, type Submission } from "@/lib/portal/api";
import { ImageField } from "@/components/admin/ImageField";

const statusStyles: Record<Submission["status"], { label: string; cls: string; Icon: typeof Clock }> = {
  pending: { label: "Pending review", cls: "bg-amber-100 text-amber-800", Icon: Clock },
  approved: { label: "Approved", cls: "bg-emerald-100 text-emerald-800", Icon: CheckCircle2 },
  published: { label: "Published", cls: "bg-green-100 text-green-800", Icon: CheckCircle2 },
  rejected: { label: "Rejected", cls: "bg-red-100 text-red-700", Icon: XCircle },
  changes_requested: { label: "Changes requested", cls: "bg-orange-100 text-orange-800", Icon: AlertTriangle },
};

export function NewsSubmit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [subs, setSubs] = useState<Submission[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(true);

  const refresh = () =>
    listMySubmissions()
      .then((s) => setSubs(s.filter((x) => x.kind === "news")))
      .catch((e) => setError((e as Error).message))
      .finally(() => setLoadingSubs(false));

  useEffect(() => {
    void refresh();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      await submitNewsItem({
        title: title.trim(),
        description: description.trim(),
        body: body.trim(),
        image_url: imageUrl,
      });
      setMessage("Thanks — your news item has been submitted for review. You'll be notified once BALI staff approve it.");
      setTitle("");
      setDescription("");
      setBody("");
      setImageUrl(null);
      await refresh();
      setTimeout(() => setMessage(null), 5000);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <form onSubmit={submit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Submit a news item</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Your submission will be reviewed by BALI staff before it appears on the public news page.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={140}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
            placeholder="e.g. Company XYZ wins landscape award"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Short summary</label>
          <textarea
            rows={2}
            maxLength={280}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm resize-none"
            placeholder="One-sentence teaser shown in listings."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
          <textarea
            rows={8}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm resize-none"
            placeholder="Full news copy. Blank lines separate paragraphs."
          />
        </div>

        <div>
          <ImageField label="Feature image (optional)" value={imageUrl} onChange={setImageUrl} />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {message && (
          <p className="text-sm text-green-700 inline-flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> {message}
          </p>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={submitting || !title.trim() || !body.trim()}
            className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-60 inline-flex items-center gap-2"
          >
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {submitting ? "Submitting…" : "Submit for review"}
          </button>
        </div>
      </form>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4 inline-flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-500" /> Your submissions
        </h3>
        {loadingSubs ? (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading…
          </div>
        ) : subs.length === 0 ? (
          <p className="text-sm text-gray-500">No submissions yet.</p>
        ) : (
          <div className="space-y-2">
            {subs.map((s) => {
              const meta = statusStyles[s.status];
              const Icon = meta.Icon;
              return (
                <div key={s.id} className="flex items-start gap-3 border border-gray-200 rounded-lg p-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Submitted {new Date(s.created_at).toLocaleDateString()}
                    </p>
                    {s.reviewer_notes && (
                      <p className="text-xs text-gray-700 mt-1.5 bg-gray-50 border border-gray-100 rounded px-2 py-1.5">
                        <span className="font-medium">Reviewer note:</span> {s.reviewer_notes}
                      </p>
                    )}
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${meta.cls}`}>
                    <Icon className="w-3 h-3" /> {meta.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
