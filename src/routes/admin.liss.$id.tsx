import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Download, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import {
  getLissFileUrl,
  updateLissApplicationStatus,
  deleteLissApplication,
} from "@/lib/liss-admin.functions";

export const Route = createFileRoute("/admin/liss/$id")({
  component: AdminLissDetail,
});

type FileEntry = {
  path: string;
  name: string;
  size: number;
  kind: string;
};

const STATUSES = ["submitted", "in_review", "info_required", "approved", "rejected"] as const;

function AdminLissDetail() {
  const { id } = Route.useParams();
  const qc = useQueryClient();
  const navigate = useNavigate();

  const app = useQuery({
    queryKey: ["admin", "liss_applications", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("liss_applications")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data as any;
    },
  });

  const setStatus = useMutation({
    mutationFn: (status: (typeof STATUSES)[number]) =>
      updateLissApplicationStatus({ data: { id, status } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "liss_applications"] });
    },
  });

  const remove = useMutation({
    mutationFn: () => deleteLissApplication({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "liss_applications"] });
      navigate({ to: "/admin/liss" });
    },
  });

  async function openFile(path: string) {
    try {
      const { url } = await getLissFileUrl({ data: { path } });
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      alert((e as Error).message);
    }
  }

  if (app.isLoading) return <div className="p-8 text-sm text-gray-500">Loading…</div>;
  if (app.error)
    return <div className="p-8 text-sm text-red-600">{(app.error as Error).message}</div>;
  if (!app.data) return <div className="p-8 text-sm text-gray-500">Not found.</div>;

  const a = app.data;
  const files = (a.uploaded_files ?? []) as FileEntry[];

  return (
    <div>
      <PageHeader
        title={a.full_name}
        subtitle={`${a.card_name} — ${a.application_type}`}
        actions={
          <Link
            to="/admin/liss"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-bali-blue"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        }
      />

      <div className="p-8 space-y-6 max-w-4xl">
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Status</h2>
            <span className="text-xs text-gray-500">
              Submitted {new Date(a.created_at).toLocaleString("en-GB")}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setStatus.mutate(s)}
                disabled={setStatus.isPending}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                  a.status === s
                    ? "bg-bali-blue text-white border-bali-blue"
                    : "bg-white text-gray-700 border-gray-200 hover:border-bali-blue"
                }`}
              >
                {s.replace("_", " ")}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Applicant</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <Field label="Full name" value={a.full_name} />
            <Field label="Email" value={a.email} />
            <Field label="Phone" value={a.phone} />
            <Field label="Date of birth" value={a.date_of_birth} />
            <Field label="Home address" value={a.home_address} full />
          </dl>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Employment</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <Field label="Employer" value={a.employer_name} />
            <Field label="Job title" value={a.job_title} />
            <Field label="Employer address" value={a.employer_address} full />
          </dl>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Qualifications</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <Field label="ROLO completed" value={a.rolo_completed_on} />
            <Field label="CITB completed" value={a.citb_completed_on} />
            <Field label="Qualification summary" value={a.qualification_summary} full />
          </dl>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Uploaded documents</h2>
          {files.length === 0 ? (
            <p className="text-sm text-gray-500">No files uploaded.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {files.map((f) => (
                <li key={f.path} className="flex items-center justify-between py-2">
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 truncate">{f.name}</div>
                    <div className="text-xs text-gray-500 capitalize">
                      {f.kind.replace("_", " ")} · {Math.round(f.size / 1024)} KB
                    </div>
                  </div>
                  <button
                    onClick={() => openFile(f.path)}
                    className="inline-flex items-center gap-1.5 text-sm text-bali-blue hover:underline"
                  >
                    <Download className="w-4 h-4" /> Download
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {a.notes && (
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-2">Notes from applicant</h2>
            <p className="text-sm whitespace-pre-wrap text-gray-700">{a.notes}</p>
          </section>
        )}

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-2">Consents</h2>
          <p className="text-sm text-gray-700">
            Terms accepted: <strong>{a.consent_terms ? "Yes" : "No"}</strong>
          </p>
          <p className="text-sm text-gray-700">
            Marketing opt-in: <strong>{a.consent_marketing ? "Yes" : "No"}</strong>
          </p>
        </section>

        <section className="flex justify-end">
          <button
            onClick={() => {
              if (confirm(`Delete application from ${a.full_name}? This cannot be undone.`)) {
                remove.mutate();
              }
            }}
            className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" /> Delete application
          </button>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  full,
}: {
  label: string;
  value: string | null | undefined;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <dt className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</dt>
      <dd className="text-sm text-gray-900 mt-0.5 whitespace-pre-wrap">{value || "—"}</dd>
    </div>
  );
}
