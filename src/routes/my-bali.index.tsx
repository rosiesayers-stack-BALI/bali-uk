import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, BadgeCheck, Briefcase, Building2, CalendarDays, Download,
  ExternalLink, Eye, FileText, Gavel, Globe, GraduationCap, Handshake, IdCard,
  LineChart, Mail, MousePointerClick, Newspaper, ScrollText, Shield, Sparkles,
  UserRound, Users, Video,
} from "lucide-react";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import {
  BENEFITS, RESOURCES, MEMBERSHIP, MEMBER_FEED, STATS,
} from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/")({
  head: () => ({ meta: [{ title: "My BALI — Dashboard" }] }),
  component: DashboardIndex,
});

const BENEFIT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  logo: BadgeCheck,
  digital: Sparkles,
  "hr-hs": Shield,
  insure: Handshake,
  jobs: Briefcase,
  dispute: Gavel,
  utp: Award,
};

const RESOURCE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  brand: Sparkles,
  domestic: ScrollText,
  "landscape-news": Newspaper,
  webinar: Video,
  stickers: IdCard,
  quality: BadgeCheck,
  bank: Building2,
  articles: FileText,
};

const STAT_ICONS = {
  websiteViews: Globe,
  profileViews: Eye,
  logins: UserRound,
  searchResults: LineChart,
  emailClicks: MousePointerClick,
} as const;

const QUICK_ACTIONS = [
  { label: "Update details", to: "/my-bali/profile/personal", icon: UserRound },
  { label: "Update directory listing", to: "/my-bali/profile/directory", icon: Building2 },
  { label: "Who's Who entry", to: "/my-bali/profile/whos-who", icon: Users },
  { label: "View directory entry", to: "/directory/search", icon: ExternalLink },
  { label: "Download membership certificate", to: "/my-bali/profile", icon: Download },
] as const;

function DashboardIndex() {
  return (
    <>
      <PageHeader title="Your dashboard" subtitle="A snapshot of your BALI membership." />

      {/* Snapshot tiles */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <SnapshotTile icon={CalendarDays} label="Membership expiry" value={MEMBERSHIP.expiry} accent="bali-blue" />
        <SnapshotTile icon={GraduationCap} label="Event bookings" value={String(MEMBERSHIP.eventBookings)} accent="bali-green" />
        <SnapshotTile icon={Eye} label="Profile views" value={STATS.profileViews.toLocaleString()} accent="bali-flow" />
        <SnapshotTile icon={Globe} label="Website views" value={STATS.websiteViews.toLocaleString()} accent="bali-grass" />
      </div>

      {/* Profile actions + stats */}
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
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-bali-slate">Statistics</h3>
            <Link to="/my-bali/statistics" className="text-sm text-bali-blue font-semibold hover:underline">View →</Link>
          </div>
          <ul className="space-y-3 text-sm">
            {[
              { k: "Website views", v: STATS.websiteViews, i: STAT_ICONS.websiteViews },
              { k: "Profile views", v: STATS.profileViews, i: STAT_ICONS.profileViews },
              { k: "Logins", v: STATS.logins, i: STAT_ICONS.logins },
              { k: "Search results", v: STATS.searchResults, i: STAT_ICONS.searchResults },
              { k: "Email clicks", v: STATS.emailClicks, i: STAT_ICONS.emailClicks },
            ].map((s) => {
              const Icon = s.i;
              return (
                <li key={s.k} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Icon className="w-4 h-4 text-bali-blue/70" aria-hidden />
                    {s.k}
                  </span>
                  <span className="font-semibold text-bali-slate tabular-nums">{s.v.toLocaleString()}</span>
                </li>
              );
            })}
          </ul>
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

      {/* Feed */}
      <Card>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-bali-slate flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-bali-blue" aria-hidden />
            Member news & documents
          </h3>
          <Link to="/my-bali/content" className="text-sm text-bali-blue font-semibold hover:underline">My content →</Link>
        </div>
        <ul className="divide-y divide-gray-100">
          {MEMBER_FEED.map((n) => (
            <li key={n.id} className="py-4 first:pt-0 last:pb-0">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                    <Mail className="w-3.5 h-3.5" aria-hidden />
                    <span>{n.date}</span>
                  </p>
                  <h4 className="font-semibold text-bali-slate">{n.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{n.excerpt}</p>
                </div>
                <a href={n.href} className="shrink-0 inline-flex items-center gap-1 text-sm text-bali-blue font-semibold hover:underline">
                  View <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

function SnapshotTile({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent: "bali-blue" | "bali-green" | "bali-flow" | "bali-grass";
}) {
  const bg = {
    "bali-blue": "bg-bali-blue/10 text-bali-blue",
    "bali-green": "bg-bali-green/10 text-bali-green",
    "bali-flow": "bg-bali-flow/10 text-bali-flow",
    "bali-grass": "bg-bali-grass/10 text-bali-grass",
  }[accent];
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
      <span className={`grid place-items-center w-11 h-11 rounded-lg shrink-0 ${bg}`}>
        <Icon className="w-5 h-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</p>
        <p className="text-xl font-bold text-bali-slate tabular-nums truncate">{value}</p>
      </div>
    </div>
  );
}
