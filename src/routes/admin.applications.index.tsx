import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/admin/PageHeader";
import { FeeInline } from "@/components/admin/FeeDisplay";
import { ApplicationTypeBadge } from "@/components/admin/PeopleOrgList";
import {
  fetchApplications, toApplication, updateStage, useAppOverlays,
  PIPELINE_STAGES, SIDE_STAGES, type Application, type ApplicationStage,
} from "@/lib/admin/applications";
import { APPLICATION_TYPES, getApplicationType, type ApplicationTypeId } from "@/lib/membership-types";
import { LayoutGrid, List, Search } from "lucide-react";

export const Route = createFileRoute("/admin/applications/")({
  component: ApplicationsIndex,
});

const ALL_STAGES: ApplicationStage[] = [...PIPELINE_STAGES, ...SIDE_STAGES];

const STAGE_COLOUR: Record<ApplicationStage, string> = {
  "Applied": "border-blue-300 bg-blue-50",
  "Under review": "border-amber-300 bg-amber-50",
  "Checks/references": "border-purple-300 bg-purple-50",
  "Approved": "border-emerald-300 bg-emerald-50",
  "Onboarding link sent": "border-teal-300 bg-teal-50",
  "Active": "border-green-400 bg-green-50",
  "Rejected": "border-rose-300 bg-rose-50",
  "On-hold": "border-gray-300 bg-gray-50",
};

function ApplicationsIndex() {
  const overlays = useAppOverlays();
  const qc = useQueryClient();
  const q = useQuery({ queryKey: ["admin", "applications"], queryFn: fetchApplications });
  const applications: Application[] = useMemo(
    () => (q.data ?? []).map((r) => toApplication(r, overlays)),
    [q.data, overlays],
  );

  const move = useMutation({
    mutationFn: async ({ id, from, to }: { id: string; from: ApplicationStage; to: ApplicationStage }) => {
      await updateStage(id, to, from);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "applications"] }),
  });

  const [view, setView] = useState<"board" | "list">("board");
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<ApplicationStage | "">("");
  const [typeFilter, setTypeFilter] = useState<ApplicationTypeId | "">("");
  const [dragId, setDragId] = useState<string | null>(null);

  const filtered = applications.filter((a) => {
    if (search) {
      const s = search.toLowerCase();
      const typeLabel = getApplicationType(a.applicationType)?.label ?? "";
      if (!(a.applicantName.toLowerCase().includes(s) || a.organisation.toLowerCase().includes(s) || typeLabel.toLowerCase().includes(s))) return false;
    }
    if (stageFilter && a.stage !== stageFilter) return false;
    if (typeFilter && a.applicationType !== typeFilter) return false;
    return true;
  });

  const grouped: Record<ApplicationStage, Application[]> = ALL_STAGES.reduce((acc, s) => {
    acc[s] = filtered.filter((a) => a.stage === s);
    return acc;
  }, {} as Record<ApplicationStage, Application[]>);

  return (
    <div>
      <PageHeader
        title="Applications"
        subtitle="Membership applications pipeline — approve applicants and send onboarding."
        actions={
          <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden bg-white">
            <button onClick={() => setView("board")} className={`px-3 py-1.5 text-sm inline-flex items-center gap-1 ${view === "board" ? "bg-bali-blue text-white" : "text-gray-700 hover:bg-gray-50"}`}>
              <LayoutGrid className="w-4 h-4" /> Board
            </button>
            <button onClick={() => setView("list")} className={`px-3 py-1.5 text-sm inline-flex items-center gap-1 ${view === "list" ? "bg-bali-blue text-white" : "text-gray-700 hover:bg-gray-50"}`}>
              <List className="w-4 h-4" /> List
            </button>
          </div>
        }
      />
      <div className="space-y-4">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search applicant or organisation…"
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue" />
          </div>
          <select value={stageFilter} onChange={(e) => setStageFilter(e.target.value as ApplicationStage | "")}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white">
            <option value="">All stages</option>
            {ALL_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as ApplicationTypeId | "")}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white" aria-label="Filter by application type">
            <option value="">All application types</option>
            {APPLICATION_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
          <span className="text-xs text-gray-500 ml-auto">
            <strong className="text-bali-slate">{filtered.length}</strong> application{filtered.length === 1 ? "" : "s"}
          </span>
        </div>

        {q.isLoading ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-sm text-gray-500 text-center">Loading applications…</div>
        ) : q.error ? (
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 text-sm text-red-700">{(q.error as Error).message}</div>
        ) : view === "board" ? (
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-4">
              {ALL_STAGES.map((stage) => (
                <div key={stage}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => {
                    if (!dragId) return;
                    const src = applications.find((a) => a.id === dragId);
                    if (src && src.stage !== stage) move.mutate({ id: src.id, from: src.stage, to: stage });
                    setDragId(null);
                  }}
                  className={`w-72 flex-shrink-0 rounded-xl border-2 border-dashed p-3 ${STAGE_COLOUR[stage]}`}>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">{stage}</h3>
                    <span className="text-xs font-semibold text-gray-600 bg-white/70 rounded-full px-2 py-0.5">{grouped[stage].length}</span>
                  </div>
                  <div className="space-y-2">
                    {grouped[stage].map((a) => (
                      <div key={a.id} draggable onDragStart={() => setDragId(a.id)}
                        className="bg-white rounded-lg border border-gray-100 shadow-sm p-3 cursor-grab active:cursor-grabbing hover:border-bali-blue">
                        <Link to="/admin/applications/$id" params={{ id: a.id }} className="block">
                          <p className="text-sm font-semibold text-bali-slate hover:text-bali-blue">{a.applicantName}</p>
                          <p className="text-xs text-gray-500 truncate">{a.organisation}</p>
                          <div className="mt-1.5"><ApplicationTypeBadge id={a.applicationType} short /></div>
                          <p className="text-[11px] text-gray-500 mt-1">{a.town || "—"} · {a.discipline}</p>
                          <p className="text-[10px] text-gray-400 mt-1">Applied {new Date(a.dateApplied).toLocaleDateString("en-GB")}</p>
                        </Link>
                      </div>
                    ))}
                    {grouped[stage].length === 0 && (
                      <p className="text-xs text-gray-400 italic px-1 py-6 text-center">No applications</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {filtered.length === 0 ? (
              <div className="p-10 text-center text-sm text-gray-500">No applications.</div>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Applicant</th>
                    <th className="px-4 py-3">Organisation</th>
                    <th className="px-4 py-3">Application type</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Discipline</th>
                    <th className="px-4 py-3">Applied</th>
                    <th className="px-4 py-3">Stage</th>
                    <th className="px-4 py-3">Onboarding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((a) => (
                    <tr key={a.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">
                        <Link to="/admin/applications/$id" params={{ id: a.id }} className="text-bali-slate hover:text-bali-blue">{a.applicantName}</Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{a.organisation}</td>
                      <td className="px-4 py-3"><ApplicationTypeBadge id={a.applicationType} /></td>
                      <td className="px-4 py-3 text-gray-600">{[a.town, a.region].filter(Boolean).join(", ") || "—"}</td>
                      <td className="px-4 py-3 text-gray-600">{a.discipline}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{new Date(a.dateApplied).toLocaleDateString("en-GB")}</td>
                      <td className="px-4 py-3">
                        <select value={a.stage}
                          onChange={(e) => move.mutate({ id: a.id, from: a.stage, to: e.target.value as ApplicationStage })}
                          className="text-xs rounded-md border border-gray-300 bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-bali-blue/25">
                          {ALL_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">{a.onboarding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
