import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import { Newspaper, Calendar, FileText, GraduationCap, IdCard } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
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
        news: n.count ?? 0,
        events: e.count ?? 0,
        policy: p.count ?? 0,
        training: t.count ?? 0,
        liss: l.count ?? 0,
      };
    },
  });

  const cards = [
    { to: "/admin/news", label: "News articles", icon: Newspaper, count: counts.data?.news, colour: "bg-blue-50 text-blue-700" },
    { to: "/admin/events", label: "Events", icon: Calendar, count: counts.data?.events, colour: "bg-green-50 text-green-700" },
    { to: "/admin/policy", label: "Policy updates", icon: FileText, count: counts.data?.policy, colour: "bg-purple-50 text-purple-700" },
    { to: "/admin/training", label: "Training courses", icon: GraduationCap, count: counts.data?.training, colour: "bg-amber-50 text-amber-700" },
    { to: "/admin/liss", label: "LISS applications", icon: IdCard, count: counts.data?.liss, colour: "bg-rose-50 text-rose-700" },
  ];

  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Add, edit and publish content across the BALI website." />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
        {cards.map(({ to, label, icon: Icon, count, colour }) => (
          <Link
            key={to}
            to={to}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-bali-blue hover:shadow-md transition-all"
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${colour} mb-4`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{count ?? "—"}</p>
            <p className="text-sm font-medium text-gray-700 mt-1 group-hover:text-bali-blue">
              Manage {label.toLowerCase()} →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
