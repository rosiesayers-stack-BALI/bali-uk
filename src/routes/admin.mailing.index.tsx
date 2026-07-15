import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Mail, Users, Clock, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { useCrm } from "@/lib/admin/mock-crm";
import { useMailingStore, countMembers, deleteSegment } from "@/lib/admin/mock-mailing";

export const Route = createFileRoute("/admin/mailing/")({
  head: () => ({ meta: [{ title: "Mailing lists — Admin" }] }),
  component: MailingIndex,
});

function MailingIndex() {
  const crm = useCrm();
  const { segments } = useMailingStore();

  return (
    <div>
      <PageHeader
        title="Mailing lists"
        subtitle="Saved audience segments used for member emails. Sync to Mailchimp when ready to send."
        actions={
          <Link
            to="/admin/mailing/new"
            className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90"
          >
            <Plus className="w-4 h-4" /> New mailing list
          </Link>
        }
      />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {segments.length === 0 ? (
          <div className="p-10 text-center text-sm text-gray-500">
            No mailing lists yet — click <span className="font-semibold">New mailing list</span> to build one.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3 hidden md:table-cell">Description</th>
                <th className="px-4 py-3 whitespace-nowrap">Members</th>
                <th className="px-4 py-3 hidden lg:table-cell">Created by</th>
                <th className="px-4 py-3 hidden lg:table-cell whitespace-nowrap">Last updated</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {segments.map((s) => {
                const count = countMembers(crm.people, s.filter);
                return (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link
                        to="/admin/mailing/$id"
                        params={{ id: s.id }}
                        className="font-semibold text-gray-900 hover:text-bali-blue inline-flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4 text-bali-blue/70" />
                        {s.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell max-w-md">
                      <div className="truncate">{s.description || "—"}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        <Users className="w-3 h-3" /> {count.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{s.createdBy}</td>
                    <td className="px-4 py-3 text-gray-500 hidden lg:table-cell whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {new Date(s.updatedAt).toLocaleDateString("en-GB")}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        aria-label={`Delete ${s.name}`}
                        onClick={() => {
                          if (confirm(`Delete "${s.name}"?`)) deleteSegment(s.id);
                        }}
                        className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
