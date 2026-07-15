import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/admin/PageHeader";
import {
  fetchApplication, toApplication, updateStage, addNote,
  sendOnboardingLink, sendApplicationLink,
  setPaymentMethod, setFeeStatus, addReference, addDocument,
  useAppOverlays, PIPELINE_STAGES, SIDE_STAGES,
  type ApplicationStage, type PaymentMethod, type FeeStatus,
} from "@/lib/admin/applications";
import { Mail, Phone, MapPin, Briefcase, Check, X, Link as LinkIcon, Copy, PauseCircle, Tag, CreditCard, FileText, Users as UsersIcon, Send } from "lucide-react";
import { ApplicationTypeBadge } from "@/components/admin/PeopleOrgList";
import { FeeCard, FeeInline } from "@/components/admin/FeeDisplay";
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
  const app = toApplication(q.data);

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
  const [copied, setCopied] = useState<string | null>(null);
  const [refName, setRefName] = useState("");
  const [refOrg, setRefOrg] = useState("");
  const [refEmail, setRefEmail] = useState("");
  const [docName, setDocName] = useState("");
  const [docKind, setDocKind] = useState("Insurance certificate");

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const move = useMutation({
    mutationFn: async (to: ApplicationStage) => { await updateStage(app.id, to, app.stage); },
    onSuccess: () => onChange(),
  });

  const appLinkMut = useMutation({
    mutationFn: async () => { await sendApplicationLink(app.id, app.stage); },
    onSuccess: () => { showToast("Application link generated (mock — TODO: email via backend)."); onChange(); },
  });

  const onboardLinkMut = useMutation({
    mutationFn: async () => { await sendOnboardingLink(app.id, app.stage); },
    onSuccess: () => { showToast("Onboarding link generated (mock — TODO: email via backend)."); onChange(); },
  });

  const copy = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div>
      <PageHeader
        title={app.applicantName}
        subtitle={`${app.organisation} · Enquired ${new Date(app.dateApplied).toLocaleDateString("en-GB")} · Source: ${app.source}`}
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
              <Field icon={Briefcase} label="Discipline" value={app.discipline} />
              <Field icon={Tag} label="Application type" value={
                <span className="inline-flex flex-col gap-1">
                  <span className="inline-flex items-center gap-2">
                    <ApplicationTypeBadge id={app.applicationType} />
                    <span className="text-xs text-gray-500">{getApplicationType(app.applicationType)?.label ?? app.category}</span>
                  </span>
                  <FeeInline id={app.applicationType} />
                </span>
              } />
              <Field icon={CreditCard} label="Payment method" value={
                <select value={app.paymentMethod}
                  onChange={(e) => { setPaymentMethod(app.id, e.target.value as PaymentMethod); onChange(); }}
                  className="text-sm rounded-md border border-gray-300 bg-white px-2 py-1">
                  {(["Not set", "Card", "Invoice"] as PaymentMethod[]).map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              } />
              <Field icon={CreditCard} label="Fee status" value={
                <select value={app.feeStatus}
                  onChange={(e) => { setFeeStatus(app.id, e.target.value as FeeStatus); onChange(); }}
                  className="text-sm rounded-md border border-gray-300 bg-white px-2 py-1">
                  {(["Unpaid", "Awaiting invoice", "Paid", "N/A"] as FeeStatus[]).map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              } />
            </dl>
          </section>

          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-bali-slate">Actions</h2>
              <span className="text-xs text-gray-500">Onboarding: <strong className="text-bali-slate">{app.onboarding}</strong></span>
            </div>
            <div className="flex flex-wrap gap-2">
              {app.stage === "Awaiting application" && (
                <button onClick={() => appLinkMut.mutate()}
                  className="inline-flex items-center gap-1.5 bg-bali-blue text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800">
                  <Send className="w-4 h-4" /> Send application link
                </button>
              )}
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
                <button onClick={() => onboardLinkMut.mutate()}
                  className="inline-flex items-center gap-1.5 bg-bali-blue text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800">
                  <LinkIcon className="w-4 h-4" /> Send onboarding link
                </button>
              )}
            </div>
            {app.applicationLink && (
              <LinkBox
                label="Application link"
                link={app.applicationLink}
                copied={copied === "app"}
                onCopy={() => copy("app", app.applicationLink!)}
                note="TODO: email this link to the applicant via our backend."
                colour="purple"
              />
            )}
            {app.onboardingLink && (
              <LinkBox
                label="Onboarding link"
                link={app.onboardingLink}
                copied={copied === "onb"}
                onCopy={() => copy("onb", app.onboardingLink!)}
                note="TODO: email this link to the applicant via our backend."
                colour="teal"
              />
            )}
          </section>

          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-bali-slate mb-4 flex items-center gap-2"><UsersIcon className="w-4 h-4" /> References</h2>
            <div className="space-y-2 mb-4">
              {app.references.length === 0 && <p className="text-sm text-gray-500">No references yet.</p>}
              {app.references.map((r) => (
                <div key={r.id} className="text-sm border border-gray-200 rounded-lg p-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-bali-slate">{r.name} <span className="text-gray-500 font-normal">· {r.organisation}</span></p>
                    <p className="text-xs text-gray-500">{r.email}</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${r.status === "Received" ? "bg-emerald-100 text-bali-green" : r.status === "Requested" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-700"}`}>{r.status}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <input value={refName} onChange={(e) => setRefName(e.target.value)} placeholder="Name" className="rounded-lg border border-gray-300 px-3 py-2 text-sm" />
              <input value={refOrg} onChange={(e) => setRefOrg(e.target.value)} placeholder="Organisation" className="rounded-lg border border-gray-300 px-3 py-2 text-sm" />
              <input value={refEmail} onChange={(e) => setRefEmail(e.target.value)} placeholder="Email" className="rounded-lg border border-gray-300 px-3 py-2 text-sm" />
              <button
                onClick={() => {
                  if (!refName.trim()) return;
                  addReference(app.id, { name: refName.trim(), organisation: refOrg.trim(), email: refEmail.trim() });
                  setRefName(""); setRefOrg(""); setRefEmail("");
                  showToast("Reference added.");
                  onChange();
                }}
                className="bg-bali-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-800">
                Add reference
              </button>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-bali-slate mb-4 flex items-center gap-2"><FileText className="w-4 h-4" /> Documents</h2>
            <div className="space-y-2 mb-4">
              {app.documents.length === 0 && <p className="text-sm text-gray-500">No documents uploaded yet.</p>}
              {app.documents.map((d) => (
                <div key={d.id} className="text-sm border border-gray-200 rounded-lg p-3 flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-bali-slate">{d.name}</p>
                    <p className="text-xs text-gray-500">{d.kind} · uploaded {new Date(d.uploadedAt).toLocaleDateString("en-GB")}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input value={docName} onChange={(e) => setDocName(e.target.value)} placeholder="Filename or reference" className="rounded-lg border border-gray-300 px-3 py-2 text-sm" />
              <select value={docKind} onChange={(e) => setDocKind(e.target.value)} className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white">
                <option>Insurance certificate</option>
                <option>Company accounts</option>
                <option>Trade reference</option>
                <option>ID / proof of address</option>
                <option>Other</option>
              </select>
              <button
                onClick={() => {
                  if (!docName.trim()) return;
                  addDocument(app.id, { name: docName.trim(), kind: docKind });
                  setDocName("");
                  showToast("Document recorded (mock — TODO: wire real uploads).");
                  onChange();
                }}
                className="bg-bali-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-800">
                Record document
              </button>
            </div>
            <p className="text-[11px] text-gray-400 italic mt-2">TODO: replace with real uploads to backend storage.</p>
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

        <div className="space-y-6">
        <FeeCard id={app.applicationType} />
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
                {h.note && <p className="text-xs text-gray-600 mt-1 italic">"{h.note}"</p>}
              </li>
            ))}
          </ol>
        </section>
        </div>
      </div>

      {toast && (
        <div role="status" className="fixed bottom-6 right-6 bg-bali-slate text-white text-sm px-4 py-3 rounded-lg shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  );
}

function LinkBox({ label, link, copied, onCopy, note, colour }: { label: string; link: string; copied: boolean; onCopy: () => void; note: string; colour: "teal" | "purple" }) {
  const cls = colour === "teal"
    ? { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-800", inner: "border-teal-200" }
    : { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800", inner: "border-purple-200" };
  return (
    <div className={`mt-4 p-3 rounded-lg ${cls.bg} border ${cls.border}`}>
      <p className={`text-xs font-semibold ${cls.text} mb-1`}>{label}</p>
      <div className="flex items-center gap-2">
        <code className={`flex-1 text-xs bg-white border ${cls.inner} rounded px-2 py-1.5 truncate`}>{link}</code>
        <button
          onClick={onCopy}
          className={`inline-flex items-center gap-1 text-xs ${cls.text} border ${cls.inner} rounded px-2 py-1 bg-white`}>
          <Copy className="w-3 h-3" /> {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className={`text-[11px] ${cls.text} mt-2 italic`}>{note}</p>
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
