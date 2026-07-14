import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { RESOURCES } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/resources")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHeader title="My resources" subtitle="Templates, guidance and members-only downloads." />
      <Card>
        <ul className="divide-y divide-gray-100">
          {RESOURCES.map((r) => (
            <li key={r.id} className="py-3 flex justify-between items-center">
              <span className="text-gray-800 text-sm">{r.title}</span>
              <a href={r.href} className="text-sm text-bali-blue hover:underline focus:outline-none focus:ring-2 focus:ring-bali-blue/25 rounded">
                Open →
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
