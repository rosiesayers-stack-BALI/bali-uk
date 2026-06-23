import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/admin/liss/")({
  component: AdminLissList,
});

const STATUSES = [
  "all",
  "submitted",
  "in_review",
  "info_required",
  "approved",
  "rejected",
] as const;

const STATUS_STYLE: Record<string, string> = {
  submitted: "bg-blue-100 text-blue-800",
  in_review: "bg-amber-100 text-amber-800",
  info_required: "bg-orange-100 text-orange-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

function AdminLissList() {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("all");

  const list = useQuery({
    queryKey: ["admin", "liss_applications", status],
    queryFn: async () => {
      let q = supabase
        .from("liss_applications")
        .select("id, full_name, email, card_name, category_slug, application_type, status, created_at")
        .order("created_at", { ascending: false });
      if (status !== "all") q = q.eq("status", status);
      const { data, error } = await q;
      if (error) throw error;
      return data;
    },
  });

  return (
    <div>
      <PageHeader
        title="LISS/CSCS applications"
        subtitle="Review SmartCard applications submitted via the website."
      />

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                status === s
                  ? "bg-bali-blue text-white border-bali-blue"
                  : "bg-white text-gray-700 border-gray-200 hover:border-bali-blue"
              }`}
            >
              {s.replace("_", " ")}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {list.isLoading ? (
            <div className="p-8 text-sm text-gray-500">Loading…</div>
          ) : list.error ? (
            <div className="p-8 text-sm text-red-600">{(list.error as Error).message}</div>
          ) : !list.data?.length ? (
            <div className="p-8 text-sm text-gray-500">No applications.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Applicant</th>
                  <th className="px-4 py-3">Card</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {list.data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{row.full_name}</div>
                      <div className="text-xs text-gray-500">{row.email}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      <div>{row.card_name}</div>
                      <div className="text-xs text-gray-500 capitalize">{row.category_slug}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{row.application_type}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {new Date(row.created_at).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${
                          STATUS_STYLE[row.status] ?? "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {row.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        to="/admin/liss/$id"
                        params={{ id: row.id }}
                        className="text-bali-blue hover:underline text-sm font-medium"
                      >
                        Review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
