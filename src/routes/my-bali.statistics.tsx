import { createFileRoute } from "@tanstack/react-router";
import { Eye, Globe, LineChart as LineIcon, MousePointerClick, UserRound, TrendingUp, TrendingDown } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { STATS_TIMESERIES, pctChange, type StatSeries } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/statistics")({
  head: () => ({ meta: [{ title: "Profile statistics — My BALI" }] }),
  component: StatsPage,
});

type Metric = {
  key: keyof typeof STATS_TIMESERIES;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const METRICS: Metric[] = [
  { key: "websiteViews",  label: "Website views",  icon: Globe,              color: "#65a30d" },
  { key: "profileViews",  label: "Profile views",  icon: Eye,                color: "#1e3a5f" },
  { key: "logins",        label: "Logins",         icon: UserRound,          color: "#0891b2" },
  { key: "searchResults", label: "Search results", icon: LineIcon,           color: "#16a34a" },
  { key: "emailClicks",   label: "Email clicks",   icon: MousePointerClick,  color: "#d97706" },
];

function currentValue(s: StatSeries[]) {
  return s[s.length - 1]?.value ?? 0;
}

function StatsPage() {
  const combined = STATS_TIMESERIES.websiteViews.map((row, i) => ({
    month: row.month,
    "Website views": row.value,
    "Profile views": STATS_TIMESERIES.profileViews[i].value,
  }));

  return (
    <>
      <PageHeader
        title="Profile statistics"
        subtitle="How your BALI profile is performing over the last 12 months."
      />

      {/* Combined trend */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-bali-slate">Reach — last 12 months</h3>
          <p className="text-xs text-gray-500">Website vs profile views</p>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={combined} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gWeb" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#65a30d" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#65a30d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gProf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1e3a5f" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#1e3a5f" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb" }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Area type="monotone" dataKey="Website views" stroke="#65a30d" fill="url(#gWeb)" strokeWidth={2} />
              <Area type="monotone" dataKey="Profile views" stroke="#1e3a5f" fill="url(#gProf)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Per-metric cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {METRICS.map((m) => {
          const data = STATS_TIMESERIES[m.key];
          const value = currentValue(data);
          const change = pctChange(data);
          const up = change >= 0;
          const Icon = m.icon;
          return (
            <Card key={m.key}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className="grid place-items-center w-10 h-10 rounded-lg"
                    style={{ backgroundColor: `${m.color}18`, color: m.color }}
                  >
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{m.label}</div>
                    <div className="text-2xl font-bold text-bali-slate tabular-nums">{value.toLocaleString()}</div>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold px-2.5 py-1 rounded-full ${
                    up ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                  }`}
                  aria-label={`${up ? "Up" : "Down"} ${Math.abs(change)}% vs previous 6 months`}
                >
                  {up ? <TrendingUp className="w-4 h-4" aria-hidden /> : <TrendingDown className="w-4 h-4" aria-hidden />}
                  {up ? "+" : ""}
                  {change}%
                </span>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                    <YAxis stroke="#94a3b8" fontSize={11} />
                    <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb" }} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={m.color}
                      strokeWidth={2}
                      dot={{ r: 2 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
