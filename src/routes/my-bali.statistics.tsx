import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { STATS } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/statistics")({
  component: StatsPage,
});

function StatsPage() {
  const tiles = [
    { k: "Website views", v: STATS.websiteViews },
    { k: "Profile views", v: STATS.profileViews },
    { k: "Logins", v: STATS.logins },
    { k: "Search results", v: STATS.searchResults },
    { k: "Email clicks", v: STATS.emailClicks },
  ];
  return (
    <>
      <PageHeader title="Profile statistics" subtitle="How your BALI profile is performing." />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
        {tiles.map((t) => (
          <Card key={t.k} className="text-center">
            <div className="text-3xl font-bold text-bali-blue">{t.v.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mt-1">{t.k}</div>
          </Card>
        ))}
      </div>
    </>
  );
}
