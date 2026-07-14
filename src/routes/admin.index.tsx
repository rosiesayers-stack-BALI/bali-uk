import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import { useCrm } from "@/lib/admin/mock-crm";
import {
  Newspaper, Calendar, FileText, GraduationCap, IdCard,
  Users, Building2, ClipboardList, TrendingUp, Clock,
} from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const crm = useCrm();

  const counts = useQuery({
    queryKey: ["admin", "counts"],
    queryFn: async () => {
      const [n, e, p, t, l] = await Promise.all([
        supabase.from("news_articles").select("id", { count: "exact", head: true }),
        supabase.from("events").select("id", { count: "exact", head: true }),
        supabase.from("policy_posts").select("id", { count: "exact", head: true }),
        supabase.from("training_courses").select("id", { count: "exact", head: true }),
        supabase.from("liss_applications").select("id", { count: "exact", head: true }),
      ]);
      return {
        news: n.count ?? 0, events: e.count ?? 0, policy: p.count ?? 0,
        training: t.count ?? 0, liss: l.count ?? 0,
      };
    },
  });

  const totalMembers = crm.people.filter((p) => p.status === "Active").length;
  const totalOrgs = crm.organisations.filter((o) => o.status === "Active").length;
  const monthAgo = Date.now() - 30 * 86400000;
  const newThisMonth = crm.applications.filter((a) => new Date(a.dateApplied).getTime() > monthAgo).length;
  const awaitingReview = crm.applications.filter((a) => a.stage === "Applied" || a.stage === "Under review").length;
  const onboardingInProgress = crm.applications.filter(
    (a) => a.stage === "Onboarding link sent" && a.onboarding !== "Completed",
  ).length;

  const recent = [...crm.applications]
    .flatMap((a) => a.history.map((h) => ({ ...h, app: a })))
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, 8);

  const tiles = [
    { label: "Active members", value: totalMembers, icon: Users, colour: "bg-blue-50 text-bali-blue", to: "/admin/people" },
    { label: "Active organisations", value: totalOrgs, icon: Building2, colour: "bg-emerald-50 text-bali-green", to: "/admin/organisations" },
    { label: "New applications (30d)", value: newThisMonth, icon: TrendingUp, colour: "bg-amber-50 text-amber-700", to: "/admin/applications" },
    { label: "Awaiting review", value: awaitingReview, icon: ClipboardList, colour: "bg-rose-50 text-rose-700", to: "/admin/applications" },
    { label: "Onboarding in progress", value: onboardingInProgress, icon: Clock, colour: "bg-purple-50 text-purple-700", to: "/admin/applications" },
  ];

  const contentCards = [
    { to: "/admin/news", label: "News articles", icon: Newspaper, count: counts.data?.news },
    { to: "/admin/events", label: "Events", icon: Calendar, count: counts.data?.events },
    { to: "/admin/policy", label: "Policy updates", icon: FileText, count: counts.data?.policy },
    { to: "/admin/training", label: "Training courses", icon: GraduationCap, count: counts.data?.training },
    { to: "/admin/liss", label: "LISS applications", icon: IdCard, count: counts.data?.liss },
  ];

  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of members, applications and content." />
      <div className="p-8 space-y-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiles.map(({ label, value, icon: Icon, colour, to }) => (
            <Link key={label} to={to} className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-bali-blue hover:shadow-md transition-all group">
              <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${colour} mb-3`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs font-medium text-gray-600 mt-1 group-hover:text-bali-blue">{label}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900">Recent application activity</h2>
              <Link to="/admin/applications" className="text-sm text-bali-blue hover:underline">View all →</Link>
            </div>
            {recent.length === 0 ? (
              <p className="text-sm text-gray-500">No recent activity.</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {recent.map((r) => (
                  <li key={`${r.app.id}-${r.id}`} className="py-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-bali-green flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {r.app.applicantName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900">
                        <Link to="/admin/applications/$id" params={{ id: r.app.id }} className="font-semibold hover:text-bali-blue">
                          {r.app.applicantName}
                        </Link>
                        <span className="text-gray-500"> · {r.from ? `${r.from} → ${r.to}` : r.to}</span>
                      </p>
                      <p className="text-xs text-gray-500">{new Date(r.at).toLocaleString("en-GB")} · {r.by}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Content</h2>
            <ul className="space-y-2">
              {contentCards.map(({ to, label, icon: Icon, count }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-gray-50">
                    <span className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon className="w-4 h-4 text-gray-500" /> {label}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{count ?? "—"}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
