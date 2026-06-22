import { createFileRoute } from "@tanstack/react-router";
import { AdminList } from "@/components/admin/AdminList";

export const Route = createFileRoute("/admin/events/")({
  component: () => (
    <AdminList
      table="events"
      title="Events"
      subtitle="Manage events shown at /events"
      newHref="/admin/events/new"
      editHrefPrefix="/admin/events/"
      extraColumns={(row) => <span className="text-xs">{(row.venue as string) || "—"}</span>}
    />
  ),
});
