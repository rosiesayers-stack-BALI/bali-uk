import { createFileRoute, useParams, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Save, RefreshCw, Users, Mail, MousePointerClick, TrendingDown, Send, Trash2, AlertTriangle,
} from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { SegmentBuilder } from "@/components/admin/SegmentBuilder";
import { useCrm } from "@/lib/admin/mock-crm";
import {
  useMailingStore, updateSegment, deleteSegment, markSynced,
  filteredPeople, countMembers,
  type SegmentFilter,
} from "@/lib/admin/mock-mailing";

export const Route = createFileRoute("/admin/mailing/$id")({
  head: () => ({ meta: [{ title: "Mailing list — Admin" }] }),
  component: MailingDetail,
});

function MailingDetail() {
  const { id } = useParams({ from: "/admin/mailing/$id" });
  const navigate = useNavigate();
  const { segments } = useMailingStore();
  const crm = useCrm();
  const seg = segments.find((s) => s.id === id);

  const [name, setName] = useState(seg?.name ?? "");
  const [description, setDescription] = useState(seg?.description ?? "");
  const [filter, setFilter] = useState<SegmentFilter>(seg?.filter ?? { categories: [], regions: [], statuses: [], personTypes: [], requiredOptIns: [] });

  const preview = useMemo(() => (seg ? filteredPeople(crm.people, filter).slice(0, 12) : []), [crm.people, filter, seg]);
  const total = seg ? countMembers(crm.people, filter) : 0;

  if (!seg) {
    return (
      <div>
        <PageHeader title="Mailing list not found" back={{ to: "/admin/mailing", label: "Back to mailing lists" }} />
        <p className="text-sm text-gray-600">This list may have been deleted.</p>
      </div>
    );
  }

  const save = () => {
    if (!name.trim()) { toast.error("Name is required."); return; }
    updateSegment(seg.id, { name: name.trim(), description: description.trim(), filter });
    toast.success("Mailing list saved");
  };

  const sync = () => {
    // TODO: wire to Mailchimp API — create/update audience + tag members from `filteredPeople`.
    markSynced(seg.id);
    toast.success(`Synced ${total.toLocaleString()} members to Mailchimp (mock)`);
  };

  const remove = () => {
    if (!confirm(`Delete "${seg.name}"?`)) return;
    deleteSegment(seg.id);
    navigate({ to: "/admin/mailing" });
  };

  const e = seg.engagement;
  const openRate = e.sent ? Math.round((e.opens / e.sent) * 100) : 0;
  const clickRate = e.sent ? Math.round((e.clicks / e.sent) * 100) : 0;

  return (
    <div>
      <PageHeader
        title={seg.name}
        subtitle="Edit filters, sync to Mailchimp and review recent engagement."
        back={{ to: "/admin/mailing", label: "Back to mailing lists" }}
        actions={
          <div className="flex flex-wrap gap-2">
            <button
              onClick={sync}
              className="inline-flex items-center gap-2 bg-white text-bali-blue border border-bali-blue px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue hover:text-white transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Sync to Mailchimp
            </button>
            <button
              onClick={save}
              className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90"
            >
              <Save className="w-4 h-4" /> Save changes
            </button>
            <button
              onClick={remove}
              aria-label="Delete list"
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg border border-gray-200"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1" htmlFor="name">Name</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-bali-blue/20 focus:border-bali-blue" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1" htmlFor="description">Description</label>
                <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-bali-blue/20 focus:border-bali-blue" />
              </div>
            </div>

            <SegmentBuilder initial={filter} onChange={setFilter} />
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-bali-slate">Preview members ({preview.length} of {total.toLocaleString()})</h3>
            </div>
            {preview.length === 0 ? (
              <p className="text-sm text-gray-500">No members match these filters yet.</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {preview.map((p) => (
                  <li key={p.id} className="py-2 flex items-center justify-between gap-3 text-sm">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate">{p.name}</p>
                      <p className="text-xs text-gray-500 truncate">{p.email}</p>
                    </div>
                    <p className="text-xs text-gray-500 whitespace-nowrap">{p.region} · {p.status}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-semibold text-bali-slate mb-4">Sync status</h3>
            <dl className="space-y-3 text-sm">
              <Row label="Last synced" value={seg.lastSyncedAt ? new Date(seg.lastSyncedAt).toLocaleString("en-GB") : "Never"} />
              <Row label="Mailchimp audience" value={seg.mailchimpAudienceId ?? "—"} mono />
              <Row label="Created by" value={seg.createdBy} />
              <Row label="Created" value={new Date(seg.createdAt).toLocaleDateString("en-GB")} />
            </dl>
            <p className="text-xs text-gray-500 mt-4">
              {/* TODO: wire real Mailchimp API */}
              Sync mocks a Mailchimp audience/tag update. Real API integration is pending.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-semibold text-bali-slate mb-4">Engagement (last send)</h3>
            {e.sent === 0 ? (
              <p className="text-sm text-gray-500">No sends recorded yet.</p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <Metric icon={Send}    label="Sent"          value={e.sent.toLocaleString()} />
                  <Metric icon={Mail}    label={`Opens (${openRate}%)`} value={e.opens.toLocaleString()} />
                  <Metric icon={MousePointerClick} label={`Clicks (${clickRate}%)`} value={e.clicks.toLocaleString()} />
                  <Metric icon={TrendingDown} label="Unsubs"    value={e.unsubscribes.toLocaleString()} />
                </div>
                <p className="text-xs text-gray-500 mt-3 flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  Open rates are unreliable due to Apple Mail Privacy Protection and image proxying.
                </p>
                <p className="text-xs text-gray-500 mt-1">Last sent {e.lastSentAt ? new Date(e.lastSentAt).toLocaleString("en-GB") : "—"}.</p>
              </>
            )}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-semibold text-bali-slate mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-bali-blue" /> {total.toLocaleString()} members
            </h3>
            <p className="text-xs text-gray-500">Live from the mock CRM — matches update immediately as filters change.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</dt>
      <dd className={`text-sm text-gray-800 truncate ${mono ? "font-mono" : ""}`}>{value}</dd>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
      <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <p className="text-lg font-bold text-bali-slate">{value}</p>
    </div>
  );
}
