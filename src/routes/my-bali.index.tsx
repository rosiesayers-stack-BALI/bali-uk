import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { useMyBaliAuth } from "../services/auth-context";
import {
  BENEFITS, RESOURCES, MEMBERSHIP, MEMBER_FEED, STATS,
} from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/")({
  head: () => ({ meta: [{ title: "My BALI — Dashboard" }] }),
  component: DashboardIndex,
});

function DashboardIndex() {
  const { user } = useMyBaliAuth();
  return (
    <>
      <PageHeader
        title={`Welcome, ${user?.name ?? "member"}`}
        subtitle="Your My BALI member area."
      />

      {/* Top row: profile + stats */}
      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My profile</h2>
            <Link to="/my-bali/profile" className="text-sm text-bali-blue hover:underline">Manage →</Link>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm mb-5">
            <div>
              <dt className="text-gray-500">Membership expiry</dt>
              <dd className="font-semibold text-gray-900 text-lg">{MEMBERSHIP.expiry}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Event bookings</dt>
              <dd className="font-semibold text-gray-900 text-lg">{MEMBERSHIP.eventBookings}</dd>
            </div>
          </dl>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {[
              { label: "Update details", to: "/my-bali/profile/personal" },
              { label: "Update directory listing", to: "/my-bali/profile/directory" },
              { label: "Who's Who entry", to: "/my-bali/profile/whos-who" },
              { label: "View directory entry", to: "/directory/search" },
              { label: "Download membership certificate", to: "/my-bali/profile" },
            ].map((a) => (
              <Link
                key={a.label}
                to={a.to}
                className="border border-gray-200 rounded-lg px-3 py-2 hover:border-bali-blue hover:text-bali-blue transition-colors"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>
            <Link to="/my-bali/statistics" className="text-sm text-bali-blue hover:underline">View →</Link>
          </div>
          <ul className="space-y-2 text-sm">
            {[
              { k: "Website views", v: STATS.websiteViews },
              { k: "Profile views", v: STATS.profileViews },
              { k: "Logins", v: STATS.logins },
              { k: "Search results", v: STATS.searchResults },
              { k: "Email clicks", v: STATS.emailClicks },
            ].map((s) => (
              <li key={s.k} className="flex justify-between border-b border-gray-100 pb-2 last:border-0">
                <span className="text-gray-600">{s.k}</span>
                <span className="font-semibold text-gray-900">{s.v.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Benefits + resources */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My benefits</h2>
            <Link to="/my-bali/benefits" className="text-sm text-bali-blue hover:underline">All →</Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {BENEFITS.map((b) => (
              <li key={b.id} className="py-2 text-sm text-gray-700">{b.title}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My resources</h2>
            <Link to="/my-bali/resources" className="text-sm text-bali-blue hover:underline">All →</Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {RESOURCES.map((r) => (
              <li key={r.id} className="py-2 text-sm">
                <a href={r.href} className="text-gray-700 hover:text-bali-blue">{r.title}</a>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Feed */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Member news & documents</h2>
        <ul className="divide-y divide-gray-100">
          {MEMBER_FEED.map((n) => (
            <li key={n.id} className="py-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{n.date}</span>
                <a href={n.href} className="text-bali-blue hover:underline">View</a>
              </div>
              <h3 className="font-semibold text-gray-900">{n.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{n.excerpt}</p>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
