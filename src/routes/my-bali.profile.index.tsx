import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "../components/mybali/DashboardShell";
import { MEMBERSHIP, PROFILE, ORGANISATION } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/profile/")({
  component: ProfileOverview,
});

function ProfileOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Membership</h2>
        <dl className="text-sm space-y-2">
          <Row k="Membership number" v={MEMBERSHIP.membershipNumber} />
          <Row k="Member since" v={MEMBERSHIP.memberSince} />
          <Row k="Expiry" v={MEMBERSHIP.expiry} />
          <Row k="Event bookings" v={String(MEMBERSHIP.eventBookings)} />
        </dl>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Personal</h2>
        <dl className="text-sm space-y-2">
          <Row k="Name" v={`${PROFILE.title} ${PROFILE.firstName} ${PROFILE.lastName}`} />
          <Row k="Job title" v={PROFILE.jobTitle} />
          <Row k="Email" v={PROFILE.email} />
          <Row k="Mobile" v={PROFILE.mobile} />
        </dl>
        <Link to="/my-bali/profile/personal" className="inline-block mt-4 text-sm text-bali-blue hover:underline">Edit personal details →</Link>
      </Card>
      <Card className="md:col-span-2">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Organisation</h2>
        <dl className="text-sm space-y-2">
          <Row k="Name" v={ORGANISATION.name} />
          <Row k="Website" v={ORGANISATION.website} />
          <Row k="Regions" v={ORGANISATION.regions.join(", ")} />
        </dl>
        <Link to="/my-bali/profile/organisation" className="inline-block mt-4 text-sm text-bali-blue hover:underline">Edit organisation →</Link>
      </Card>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-gray-100 pb-2 last:border-0">
      <dt className="text-gray-500">{k}</dt>
      <dd className="font-medium text-gray-900 text-right">{v}</dd>
    </div>
  );
}
