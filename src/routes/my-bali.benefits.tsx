import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { BENEFITS } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/benefits")({
  component: BenefitsPage,
});

function BenefitsPage() {
  return (
    <>
      <PageHeader title="My benefits" subtitle="Everything included in your BALI membership." />
      <div className="grid gap-4 md:grid-cols-2">
        {BENEFITS.map((b) => (
          <Card key={b.id}>
            <h3 className="font-semibold text-gray-900">{b.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{b.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
