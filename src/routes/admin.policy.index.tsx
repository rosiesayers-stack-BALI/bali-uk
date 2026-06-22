import { createFileRoute } from "@tanstack/react-router";
import { AdminList } from "@/components/admin/AdminList";

export const Route = createFileRoute("/admin/policy/")({
  component: () => (
    <AdminList
      table="policy_posts"
      title="Policy updates"
      subtitle="Manage policy posts shown at /policy"
      newHref="/admin/policy/new"
      editHrefPrefix="/admin/policy/"
      extraColumns={(row) => (
        <span className="text-xs">{((row.themes as string[]) || []).join(", ") || "—"}</span>
      )}
    />
  ),
});
