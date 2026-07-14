import { createFileRoute } from "@tanstack/react-router";
import { Eye, Globe, LineChart, MousePointerClick, UserRound } from "lucide-react";
import { PageHeader } from "../components/mybali/DashboardShell";
import { STATS } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/statistics")({
  component: StatsPage,
});

const TILES = [
  { k: "Website views", v: STATS.websiteViews, icon: Globe, accent: "bali-grass" },
  { k: "Profile views", v: STATS.profileViews, icon: Eye, accent: "bali-blue" },
  { k: "Logins", v: STATS.logins, icon: UserRound, accent: "bali-flow" },
  { k: "Search results", v: STATS.searchResults, icon: LineChart, accent: "bali-green" },
  { k: "Email clicks", v: STATS.emailClicks, icon: MousePointerClick, accent: "bali-warm" },
] as const;

const ACCENT: Record<string, string> = {
  "bali-blue": "bg-bali-blue/10 text-bali-blue",
  "bali-green": "bg-bali-green/10 text-bali-green",
  "bali-grass": "bg-bali-grass/10 text-bali-grass",
  "bali-flow": "bg-bali-flow/10 text-bali-flow",
  "bali-warm": "bg-bali-warm/10 text-bali-warm",
};

function StatsPage() {
  return (
    <>
      <PageHeader title="Profile statistics" subtitle="How your BALI profile is performing." />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {TILES.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.k} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <span className={`inline-grid place-items-center w-10 h-10 rounded-lg mb-3 ${ACCENT[t.accent]}`}>
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <div className="text-3xl font-bold text-bali-slate tabular-nums">{t.v.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-semibold">{t.k}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
