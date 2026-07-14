import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/admin/PageHeader";
import {
  fetchApplication, toApplication, updateStage, addNote, sendOnboardingLink,
  useAppOverlays, PIPELINE_STAGES, SIDE_STAGES,
  type ApplicationStage,
} from "@/lib/admin/applications";
import { Mail, Phone, MapPin, Briefcase, Check, X, Link as LinkIcon, Copy, PauseCircle, Tag } from "lucide-react";
import { ApplicationTypeBadge } from "@/components/admin/PeopleOrgList";
import { getApplicationType } from "@/lib/membership-types";

export const Route = createFileRoute("/admin/applications/$id")({
  component: AppDetail,
});

const ALL_STAGES: ApplicationStage[] = [...PIPELINE_STAGES, ...SIDE_STAGES];

function AppDetail() {
  const { id } = Route.useParams();
  const overlays = useAppOverlays();
  const qc = useQueryClient();

  const q = useQuery({
    queryKey: ["admin", "application", id],
    queryFn: () => fetchApplication(id),
  });

  if (q.isLoading) return <div className="text-sm text-gray-500">Loading…</div>;
  if (q.error) return <div className="text-sm text-red-600">{(q.error as Error).message}</div>;
  if (!q.data) throw notFound();
  const app = toApplication(q.data, overlays);

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["admin", "application", id] });
    qc.invalidateQueries({ queryKey: ["admin", "applications"] });
  };

  return <AppDetailBody app={app} allStages={ALL_STAGES} onChange={invalidate} />;
}

function AppDetailBody({
  app, allStages, onChange,
}: {
  app: ReturnType<typeof toApplication>;
  allStages: ApplicationStage[];
  onChange: () => void;
}) {
  const [note, setNote] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const move = useMutation({
    mutationFn: async (to: ApplicationStage) => { await updateStage(app.id, to, app.stage); },
    onSuccess: () => onChange(),
  });

  const linkMut = useMutation({
    mutationFn: async () => { await sendOnboardingLink(app.id, app.stage); },
    onSuccess: () => { showToast("Onboarding link generated (mock — not emailed)."); onChange(); },
  });

  return (
    <div>
      <PageHeader
        title={app.applicantName}
        subtitle={`${app.organisation} · Applied ${new Date(app.dateApplied).toLocaleDateString("en-GB")}`}
        back={{ to: "/admin/applications", label: "Back to Applications" }}
        actions={
          <select value={app.stage} onChange={(e) => move.mutate(e.target.value as ApplicationStage)}
            className="text-sm rounded-lg border border-gray-300 bg-white px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-bali-blue/25">
            {allStages.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-bali-slate mb-4">Applicant details</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Field icon={Mail} label="Email" value={app.email ? <a href={`mailto:${app.email}`} className="text-bali-blue hover:underline">{app.email}</a> : "—"} />
              <Field icon={Phone} label="Phone" value={app.phone || "—"} />
              <Field icon={MapPin} label="Location" value={[app.town, app.county, app.region].filter(Boolean).join(" · ") || "—"} />
              <Field icon={Briefcase} label="Discipline / Category" value={app.discipline} />
            </dl>
          </section>

          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-bali-slate">Actions</h2>
              <span className="text-xs text-gray-500">Onboarding: <strong className="text-bali-slate">{app.onboarding}</strong></span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => { move.mutate("Approved"); showToast("Application approved."); }}
                className="inline-flex items-center gap-1.5 bg-bali-green text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700">
                <Check className="w-4 h-4" /> Approve
              </button>
              <button onClick={() => { move.mutate("Rejected"); showToast("Application rejected."); }}
                className="inline-flex items-center gap-1.5 bg-rose-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-rose-700">
                <X className="w-4 h-4" /> Reject
              </button>
              <button onClick={() => { move.mutate("On-hold"); showToast("Application put on hold."); }}
                className="inline-flex items-center gap-1.5 bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">
                <PauseCircle className="w-4 h-4" /> On-hold
              </button>
              {app.stage === "Approved" && (
                <button onClick={() => linkMut.mutate()}
                  className="inline-flex items-center gap-1.5 bg-bali-blue text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800">
                  <LinkIcon className="w-4 h-4" /> Send onboarding link
                </button>
              )}
            </div>
            {app.onboardingLink && (
              <div className="mt-4 p-3 rounded-lg bg-teal-50 border border-teal-200">
                <p className="text-xs font-semibold text-teal-800 mb-1">Onboarding link</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-white border border-teal-200 rounded px-2 py-1.5 truncate">{app.onboardingLink}</code>
                  <button
                    onClick={() => { navigator.clipboard.writeText(app.onboardingLink!); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                    className="inline-flex items-center gap-1 text-xs text-teal-800 hover:text-teal-900 border border-teal-300 rounded px-2 py-1 bg-white">
                    <Copy className="w-3 h-3" /> {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <p className="text-[11px] text-teal-700 mt-2 italic">TODO: email this link to the applicant via our backend.</p>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-bali-slate mb-4">Notes</h2>
            <div className="space-y-3 mb-4">
              {app.notes.length === 0 && <p className="text-sm text-gray-500">No notes yet.</p>}
              {app.notes.map((n) => (
                <div key={n.id} className="text-sm bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <p className="text-gray-900">{n.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{n.author} · {new Date(n.createdAt).toLocaleString("en-GB")}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} placeholder="Add a note…"
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue" />
              <button
                onClick={() => { if (note.trim()) { addNote(app.id, note.trim()); setNote(""); showToast("Note added."); onChange(); } }}
                className="bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 self-start">
                Add
              </button>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-bali-slate mb-4">Stage history</h2>
          <ol className="space-y-4 border-l-2 border-gray-200 pl-4">
            {app.history.map((h) => (
              <li key={h.id} className="relative">
                <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-bali-blue" />
                <p className="text-sm font-semibold text-bali-slate">
                  {h.from ? `${h.from} → ${h.to}` : h.to}
                </p>
                <p className="text-xs text-gray-500">{new Date(h.at).toLocaleString("en-GB")} · {h.by}</p>
                {h.note && <p className="text-xs text-gray-600 mt-1 italic">“{h.note}”</p>}
              </li>
            ))}
          </ol>
        </section>
      </div>

      {toast && (
        <div role="status" className="fixed bottom-6 right-6 bg-bali-slate text-white text-sm px-4 py-3 rounded-lg shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  );
}

function Field({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1 mb-1"><Icon className="w-3 h-3" />{label}</dt>
      <dd className="text-gray-900">{value}</dd>
    </div>
  );
}
