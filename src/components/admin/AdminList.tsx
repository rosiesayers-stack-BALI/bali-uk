import { Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/admin/mock-db";
import { PageHeader } from "./PageHeader";

type Row = {
  id: string;
  title: string;
  date_text?: string | null;
  published: boolean;
};

export function AdminList({
  table,
  title,
  subtitle,
  newHref,
  editHrefPrefix,
  extraColumns,
  orderBy = "iso_date",
}: {
  table: "news_articles" | "events" | "policy_posts" | "training_courses";
  title: string;
  subtitle: string;
  newHref: string;
  editHrefPrefix: string; // e.g. "/admin/news/"
  extraColumns?: (row: Row & Record<string, unknown>) => React.ReactNode;
  orderBy?: string;
}) {
  const qc = useQueryClient();

  const list = useQuery({
    queryKey: ["admin", table],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .order(orderBy as never, { ascending: false, nullsFirst: false });
      if (error) throw error;
      return data as Array<Row & Record<string, unknown>>;
    },
  });

  const togglePublish = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      const { error } = await supabase.from(table).update({ published }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", table] }),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", table] }),
  });

  return (
    <div>
      <PageHeader
        title={title}
        subtitle={subtitle}
        actions={
          <Link
            to={newHref}
            className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90"
          >
            <Plus className="w-4 h-4" /> New
          </Link>
        }
      />

      <div className="p-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {list.isLoading ? (
            <div className="p-8 text-sm text-gray-500">Loading…</div>
          ) : list.error ? (
            <div className="p-8 text-sm text-red-600">{(list.error as Error).message}</div>
          ) : !list.data?.length ? (
            <div className="p-8 text-sm text-gray-500">No items yet — click “New” to add one.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Date</th>
                  {extraColumns && <th className="px-4 py-3">Info</th>}
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {list.data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900 max-w-md">
                      <div className="truncate">{row.title}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.date_text || "—"}</td>
                    {extraColumns && <td className="px-4 py-3 text-gray-600">{extraColumns(row)}</td>}
                    <td className="px-4 py-3">
                      {row.published ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                          <Eye className="w-3 h-3" /> Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
                          <EyeOff className="w-3 h-3" /> Draft
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => togglePublish.mutate({ id: row.id, published: !row.published })}
                          className="p-1.5 text-gray-500 hover:text-bali-blue hover:bg-gray-100 rounded"
                          title={row.published ? "Unpublish" : "Publish"}
                        >
                          {row.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <Link
                          to={`${editHrefPrefix}${row.id}`}
                          className="p-1.5 text-gray-500 hover:text-bali-blue hover:bg-gray-100 rounded"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${row.title}"? This cannot be undone.`)) {
                              remove.mutate(row.id);
                            }
                          }}
                          className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
