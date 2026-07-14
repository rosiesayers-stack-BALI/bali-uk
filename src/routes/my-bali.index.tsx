import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, BadgeCheck, Briefcase, Building2, CalendarDays, Clock, Download,
  ExternalLink, Eye, FileText, Gavel, Globe, GraduationCap, Handshake, IdCard,
  LineChart as LineIcon, Mail, MapPin, MousePointerClick, Newspaper, ScrollText, Shield, Sparkles,
  TrendingUp, TrendingDown, UserRound, Users, Video, ArrowRight,
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import {
  BENEFITS, RESOURCES, MEMBERSHIP, MEMBER_EVENTS, STATS_TIMESERIES, pctChange,
  NEWS_ARTICLES, EVENT_TYPE_COLORS,
} from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/")({
  head: () => ({ meta: [{ title: "My BALI — Dashboard" }] }),
  component: DashboardIndex,
});

const BENEFIT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  logo: BadgeCheck, digital: Sparkles, "hr-hs": Shield, insure: Handshake,
  jobs: Briefcase, dispute: Gavel, utp: Award,
};
const RESOURCE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  brand: Sparkles, domestic: ScrollText, "landscape-news": Newspaper, webinar: Video,
  stickers: IdCard, quality: BadgeCheck, bank: Building2, articles: FileText,
};

const QUICK_ACTIONS = [
  { label: "Update details", to: "/my-bali/profile/personal", icon: UserRound },
  { label: "Update directory listing", to: "/my-bali/profile/directory", icon: Building2 },
  { label: "Who's Who entry", to: "/my-bali/profile/whos-who", icon: Users },
  { label: "View directory entry", to: "/directory/search", icon: ExternalLink },
  { label: "Download membership certificate", to: "/my-bali/profile", icon: Download },
] as const;

function fmtShort(iso: string) {
  return new Date(iso + (iso.length === 10 ? "T00:00:00" : "")).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

const STAT_TILES = [
  { key: "websiteViews" as const, label: "Website views", icon: Globe, color: "#65a30d" },
  { key: "profileViews" as const, label: "Profile views", icon: Eye, color: "#1e3a5f" },
  { key: "logins" as const, label: "Logins", icon: UserRound, color: "#0891b2" },
  { key: "searchResults" as const, label: "Search results", icon: LineIcon, color: "#16a34a" },
  { key: "emailClicks" as const, label: "Email clicks", icon: MousePointerClick, color: "#d97706" },
];

function DashboardIndex() {
  const featured = NEWS_ARTICLES.find((a) => a.featured) ?? NEWS_ARTICLES[0];
  const recentNews = NEWS_ARTICLES.filter((a) => a.id !== featured.id).slice(0, 3);
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = [...MEMBER_EVENTS].filter((e) => e.date >= "2026-01-01").sort((a, b) => a.date.localeCompare(b.date)).slice(0, 4);

  return (
    <>
      <PageHeader title="Your dashboard" subtitle="A snapshot of your BALI membership." />

      {/* Stat tiles with sparklines */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
        {STAT_TILES.map((t) => {
          const data = STATS_TIMESERIES[t.key];
          const value = data[data.length - 1].value;
          const change = pctChange(data);
          const up = change >= 0;
          const Icon = t.icon;
          return (
            <div key={t.key} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="grid place-items-center w-8 h-8 rounded-lg" style={{ backgroundColor: `${t.color}18`, color: t.color }}>
                  <Icon className="w-4 h-4" aria-hidden />
                </span>
                <span className={`inline-flex items-center gap-0.5 text-[11px] font-semibold px-1.5 py-0.5 rounded ${up ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"}`}>
                  {up ? <TrendingUp className="w-3 h-3" aria-hidden /> : <TrendingDown className="w-3 h-3" aria-hidden />}
                  {up ? "+" : ""}{change}%
                </span>
              </div>
              <div className="text-2xl font-bold text-bali-slate tabular-nums">{value.toLocaleString()}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-wide font-semibold">{t.label}</div>
              <div className="h-8 mt-1 -mx-1">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="value" stroke={t.color} strokeWidth={1.75} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured News */}
      <section className="mb-8">
        <div className="flex items-end justify-between mb-4">
          <h3 className="text-xl font-bold text-bali-slate flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-bali-blue" aria-hidden /> News for members
          </h3>
          <Link to="/my-bali/news" className="text-sm text-bali-blue font-semibold hover:underline">All news →</Link>
        </div>
        <article className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden grid md:grid-cols-[1.2fr_1fr]">
          <div className="relative min-h-[220px]">
            <img src={featured.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col">
            <span className="inline-flex self-start text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full bg-bali-blue/10 text-bali-blue mb-2">
              Featured · {featured.category}
            </span>
            <h4 className="text-xl font-bold text-bali-slate leading-snug">{featured.title}</h4>
            <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" aria-hidden /> {fmtShort(featured.date)}</p>
            <p className="text-sm text-gray-600 mt-2">{featured.excerpt}</p>
            <Link to="/my-bali/news" className="mt-auto inline-flex items-center gap-1.5 text-bali-blue text-sm font-semibold hover:underline pt-4">
              Read the article <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-3 mt-4">
          {recentNews.map((a) => (
            <Link key={a.id} to="/my-bali/news" className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-bali-blue/30 transition flex flex-col">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img src={a.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <span className="text-[10px] uppercase tracking-wide font-semibold text-bali-blue">{a.category}</span>
                <h5 className="font-semibold text-sm text-bali-slate mt-1 leading-snug group-hover:text-bali-blue">{a.title}</h5>
                <p className="text-[11px] text-gray-500 mt-1">{fmtShort(a.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <Card className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-bali-slate flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-bali-blue" aria-hidden /> Upcoming events
          </h3>
          <Link to="/my-bali/events" className="text-sm text-bali-blue font-semibold hover:underline">Full calendar →</Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {upcoming.map((e) => (
            <li key={e.id} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 items-start border border-gray-100 rounded-lg p-3">
              <div className={`shrink-0 grid place-items-center w-12 h-12 rounded-lg ${EVENT_TYPE_COLORS[e.type] ?? "bg-gray-400 text-white"}`}>
                <div className="text-center leading-tight">
                  <div className="text-[9px] uppercase font-semibold opacity-90">
                    {new Date(e.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short" })}
                  </div>
                  <div className="text-base font-bold">{new Date(e.date + "T00:00:00").getDate()}</div>
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide font-semibold text-bali-blue">{e.type}</p>
                <p className="font-semibold text-sm text-bali-slate truncate">{e.title}</p>
                <p className="text-[11px] text-gray-500 flex flex-wrap gap-x-2 mt-0.5">
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden /> {e.time ?? "TBC"}</span>
                  <span className="inline-flex items-center gap-1 truncate"><MapPin className="w-3 h-3" aria-hidden /> {e.venue}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Profile actions + at-a-glance */}
      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-bali-slate">My profile</h3>
            <Link to="/my-bali/profile" className="text-sm text-bali-blue font-semibold hover:underline">Manage →</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {QUICK_ACTIONS.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.label}
                  to={a.to}
                  className="group flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 hover:border-bali-blue hover:bg-bali-blue/5 transition-colors focus:outline-none focus:ring-2 focus:ring-bali-blue/30"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-bali-blue/10 text-bali-blue group-hover:bg-bali-blue group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-4 h-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-bali-blue">{a.label}</span>
                </Link>
              );
            })}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-bali-slate mb-4">Membership</h3>
          <dl className="space-y-3 text-sm">
            <Row label="Category" value={MEMBERSHIP.category} />
            <Row label="Status" value={<span className="inline-flex items-center gap-1 text-green-700 font-semibold"><BadgeCheck className="w-4 h-4" aria-hidden /> {MEMBERSHIP.status}</span>} />
            <Row label="Renews" value={MEMBERSHIP.expiry} />
            <Row label="Member since" value={MEMBERSHIP.memberSince} />
            <Row label="Membership no." value={MEMBERSHIP.membershipNumber} />
            <Row label="Event bookings" value={String(MEMBERSHIP.eventBookings)} />
          </dl>
          <Link to={MEMBERSHIP.directoryUrl} className="mt-4 inline-flex items-center gap-1.5 text-sm text-bali-blue font-semibold hover:underline">
            View your directory listing <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </Link>
        </Card>
      </div>

      {/* Benefits + resources */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <Card>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-bali-slate">My benefits</h3>
            <Link to="/my-bali/benefits" className="text-sm text-bali-blue font-semibold hover:underline">All benefits →</Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BENEFITS.map((b) => {
              const Icon = BENEFIT_ICONS[b.id] ?? Award;
              return (
                <li key={b.id}>
                  <a href="#" className="group flex items-center gap-2.5 rounded-lg p-2 hover:bg-bali-blue/5 transition-colors">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-bali-green/10 text-bali-green shrink-0">
                      <Icon className="w-4 h-4" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-bali-blue">{b.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-bali-slate">My resources</h3>
            <Link to="/my-bali/resources" className="text-sm text-bali-blue font-semibold hover:underline">All resources →</Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {RESOURCES.map((r) => {
              const Icon = RESOURCE_ICONS[r.id] ?? FileText;
              return (
                <li key={r.id}>
                  <a href={r.href} className="group flex items-center gap-2.5 rounded-lg p-2 hover:bg-bali-blue/5 transition-colors">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-bali-blue/10 text-bali-blue shrink-0">
                      <Icon className="w-4 h-4" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-bali-blue">{r.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
      <dt className="text-gray-500">{label}</dt>
      <dd className="font-semibold text-bali-slate text-right">{value}</dd>
    </div>
  );
}
