import { createFileRoute } from "@tanstack/react-router";
import { PeopleOrgList } from "@/components/admin/PeopleOrgList";

export const Route = createFileRoute("/admin/people/")({
  component: () => <PeopleOrgList kind="people" />,
});
