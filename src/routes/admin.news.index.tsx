import { createFileRoute } from "@tanstack/react-router";
import { AdminList } from "@/components/admin/AdminList";

export const Route = createFileRoute("/admin/news/")({
  component: () => (
    <AdminList
      table="news_articles"
      title="News articles"
      subtitle="Manage articles shown at /news"
      newHref="/admin/news/new"
      editHrefPrefix="/admin/news/"
    />
  ),
});
