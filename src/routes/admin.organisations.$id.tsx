import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { StatusPill, ApplicationTypeBadge } from "@/components/admin/PeopleOrgList";
import { useCrm } from "@/lib/admin/mock-crm";
import { Globe, Phone, MapPin, Briefcase, Users } from "lucide-react";

export const Route = createFileRoute("/admin/organisations/$id")({
  component: OrgDetail,
});

function OrgDetail() {
  const { id } = Route.useParams();
  const crm = useCrm();
  const org = crm.organisations.find((o) => o.id === id);
  if (!org) throw notFound();
  const people = crm.people.filter((p) => p.organisationId === org.id);

  return (
    <div>
      <PageHeader
        title={org.name}
        subtitle={`${org.discipline} · ${org.town}, ${org.region}`}
        back={{ to: "/admin/organisations", label: "Back to Organisations" }}
        actions={<StatusPill status={org.status} />}
      />
      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Details</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Field icon={Globe} label="Website" value={<a href={`https://${org.website}`} target="_blank" rel="noreferrer" className="text-bali-blue hover:underline">{org.website}</a>} />
              <Field icon={Phone} label="Phone" value={org.phone} />
              <Field icon={MapPin} label="Location" value={`${org.town}, ${org.county} · ${org.region}`} />
              <Field icon={Briefcase} label="Discipline" value={org.discipline} />
              <Field icon={Users} label="Team size" value={org.size} />
              <Field icon={Briefcase} label="Member since" value={new Date(org.memberSince).toLocaleDateString("en-GB")} />
            </dl>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Recent activity</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>· Renewed membership · 2 months ago</li>
              <li>· Directory listing updated · 5 weeks ago</li>
              <li>· 3 members attended National Conference</li>
              <li className="text-xs text-gray-400 italic">TODO: Replace with real activity feed from backend.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-3">Linked people ({people.length})</h2>
          {people.length === 0 ? (
            <p className="text-sm text-gray-500">No linked people yet.</p>
          ) : (
            <ul className="space-y-2">
              {people.map((p) => (
                <li key={p.id}>
                  <Link to="/admin/people/$id" params={{ id: p.id }} className="text-sm font-semibold text-bali-blue hover:underline">
                    {p.name}
                  </Link>
                  <p className="text-xs text-gray-500">{p.role}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1 mb-1"><Icon className="w-3 h-3" />{label}</dt>
      <dd className="text-gray-900">{value}</dd>
    </div>
  );
}
