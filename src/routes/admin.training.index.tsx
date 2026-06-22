import { createFileRoute } from "@tanstack/react-router";
import { AdminList } from "@/components/admin/AdminList";

export const Route = createFileRoute("/admin/training/")({
  component: () => (
    <AdminList
      table="training_courses"
      title="Training courses"
      subtitle="Manage courses shown at /events/training"
      newHref="/admin/training/new"
      editHrefPrefix="/admin/training/"
      orderBy="iso_date"
      extraColumns={(row) => <span className="text-xs">{(row.venue as string) || "—"}</span>}
    />
  ),
});
