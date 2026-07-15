import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { StatusPill, ApplicationTypeBadge } from "@/components/admin/PeopleOrgList";
import { FeeCard } from "@/components/admin/FeeDisplay";
import { useCrm } from "@/lib/admin/mock-crm";
import { Mail, Phone, MapPin, Briefcase, Building2 } from "lucide-react";

export const Route = createFileRoute("/admin/people/$id")({
  component: PersonDetail,
});

function PersonDetail() {
  const { id } = Route.useParams();
  const crm = useCrm();
  const person = crm.people.find((p) => p.id === id);
  if (!person) throw notFound();
  const org = person.organisationId ? crm.organisations.find((o) => o.id === person.organisationId) : null;
  const colleagues = org ? crm.people.filter((p) => p.organisationId === org.id && p.id !== person.id) : [];

  return (
    <div>
      <PageHeader
        title={person.name}
        subtitle={person.role}
        back={{ to: "/admin/people", label: "Back to People" }}
        actions={<div className="flex items-center gap-2"><ApplicationTypeBadge id={person.applicationType} /><StatusPill status={person.status} /></div>}
      />
      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Contact</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Field icon={Mail} label="Email" value={<a href={`mailto:${person.email}`} className="text-bali-blue hover:underline">{person.email}</a>} />
              <Field icon={Phone} label="Phone" value={person.phone} />
              <Field icon={MapPin} label="Location" value={`${person.town}, ${person.county} · ${person.region}`} />
              <Field icon={Briefcase} label="Discipline" value={person.discipline} />
            </dl>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Recent activity</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>· Joined BALI on {new Date(person.joined).toLocaleDateString("en-GB")}</li>
              <li>· Attended Regional Meet-up · 3 weeks ago</li>
              <li>· Renewed membership · last renewal cycle</li>
              <li className="text-xs text-gray-400 italic">TODO: Replace with real activity feed from backend.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Building2 className="w-4 h-4" /> Organisation</h2>
            {org ? (
              <div>
                <Link to="/admin/organisations/$id" params={{ id: org.id }} className="text-bali-blue hover:underline font-semibold">
                  {org.name}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{org.discipline} · {org.town}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Independent member — no organisation.</p>
            )}
          </div>

          {colleagues.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-3">Colleagues</h2>
              <ul className="space-y-2">
                {colleagues.map((c) => (
                  <li key={c.id}>
                    <Link to="/admin/people/$id" params={{ id: c.id }} className="text-sm text-bali-blue hover:underline">
                      {c.name}
                    </Link>
                    <span className="text-xs text-gray-500"> · {c.role}</span>
                  </li>
                ))}
              </ul>
            </div>
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
