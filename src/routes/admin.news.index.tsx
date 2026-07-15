import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import { statsFor, useHeadline, computeTrending, setHeadline, clearHeadline } from "@/lib/admin/news-stats";
import { Plus, Edit, Trash2, Eye, EyeOff, Flame, Star, TrendingUp, ArrowUpDown } from "lucide-react";
import { ResponsiveContainer, LineChart, Line } from "recharts";

export const Route = createFileRoute("/admin/news/")({
  component: NewsAdminIndex,
});

type NewsRow = {
  id: string;
  title: string;
  slug: string;
  date_text: string | null;
  iso_date: string | null;
  published: boolean;
};

type SortKey = "date" | "views" | "clicks" | "recent";

function NewsAdminIndex() {
  const qc = useQueryClient();
  const headline = useHeadline();
  const [sort, setSort] = useState<SortKey>("date");

  const list = useQuery({
    queryKey: ["admin", "news_articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_articles")
        .select("id, title, slug, date_text, iso_date, published")
        .order("iso_date", { ascending: false, nullsFirst: false });
      if (error) throw error;
      return data as NewsRow[];
    },
  });

  const togglePublish = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      const { error } = await supabase.from("news_articles").update({ published }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "news_articles"] }),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("news_articles").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "news_articles"] }),
  });

  const trendingId = useMemo(
    () => (list.data ? computeTrending(list.data) : null),
    [list.data],
  );

  const decorated = useMemo(() => {
    if (!list.data) return [];
    return list.data.map((r) => ({ row: r, stats: statsFor(r.id, r.title) }));
  }, [list.data]);

  const ranked = useMemo(() => {
    const arr = [...decorated];
    // Sort by selected key; ties keep original order.
    if (sort === "views") arr.sort((a, b) => b.stats.views - a.stats.views);
    else if (sort === "clicks") arr.sort((a, b) => b.stats.clicks - a.stats.clicks);
    else if (sort === "recent") arr.sort((a, b) => b.stats.recentClicks - a.stats.recentClicks);
    else arr.sort((a, b) => (b.row.iso_date ?? "").localeCompare(a.row.iso_date ?? ""));

    // Pin trending to the top, headline above that.
    const headlineRow = arr.find((x) => x.row.id === headline.headlineId);
    const trendingRow = arr.find((x) => x.row.id === trendingId && x.row.id !== headline.headlineId);
    const rest = arr.filter((x) => x.row.id !== headline.headlineId && x.row.id !== trendingId);
    return { pinned: [headlineRow, trendingRow].filter(Boolean) as typeof arr, rest };
  }, [decorated, sort, trendingId, headline.headlineId]);

  return (
    <div>
      <PageHeader
        title="News articles"
        subtitle="Manage articles, monitor engagement, and set trending or paid headline placement."
        actions={
          <Link
            to="/admin/news/new"
            className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90"
          >
            <Plus className="w-4 h-4" /> New article
          </Link>
        }
      />

      <div className="mb-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-wide font-semibold text-gray-500">Sort by</span>
        <SortChip active={sort === "date"} onClick={() => setSort("date")} icon={ArrowUpDown}>Newest</SortChip>
        <SortChip active={sort === "views"} onClick={() => setSort("views")} icon={Eye}>Most views</SortChip>
        <SortChip active={sort === "clicks"} onClick={() => setSort("clicks")} icon={TrendingUp}>Most clicked</SortChip>
        <SortChip active={sort === "recent"} onClick={() => setSort("recent")} icon={Flame}>Trending (7d)</SortChip>
        <span className="text-xs text-gray-500 ml-auto">
          Headline and Trending are pinned to the top regardless of sort.
        </span>
      </div>

      {list.isLoading ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-sm text-gray-500 text-center">Loading news…</div>
      ) : list.error ? (
        <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 text-sm text-red-700">{(list.error as Error).message}</div>
      ) : !list.data?.length ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-sm text-gray-500 text-center">
          No articles yet — click <strong>New article</strong> to add one.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Article</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Views</th>
                <th className="px-4 py-3 text-right">Clicks</th>
                <th className="px-4 py-3 text-right">7d</th>
                <th className="px-4 py-3">Trend</th>
                <th className="px-4 py-3">Placement</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ranked.pinned.map(({ row, stats }) => (
                <Row key={row.id} row={row} stats={stats}
                  isHeadline={row.id === headline.headlineId}
                  isTrending={row.id === trendingId && row.id !== headline.headlineId}
                  onToggleHeadline={() => row.id === headline.headlineId ? clearHeadline() : setHeadline(row.id)}
                  onTogglePublish={() => togglePublish.mutate({ id: row.id, published: !row.published })}
                  onDelete={() => { if (confirm(`Delete "${row.title}"?`)) remove.mutate(row.id); }}
                />
              ))}
              {ranked.rest.map(({ row, stats }) => (
                <Row key={row.id} row={row} stats={stats}
                  isHeadline={false}
                  isTrending={false}
                  onToggleHeadline={() => setHeadline(row.id)}
                  onTogglePublish={() => togglePublish.mutate({ id: row.id, published: !row.published })}
                  onDelete={() => { if (confirm(`Delete "${row.title}"?`)) remove.mutate(row.id); }}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Row({
  row, stats, isHeadline, isTrending, onToggleHeadline, onTogglePublish, onDelete,
}: {
  row: NewsRow;
  stats: ReturnType<typeof statsFor>;
  isHeadline: boolean;
  isTrending: boolean;
  onToggleHeadline: () => void;
  onTogglePublish: () => void;
  onDelete: () => void;
}) {
  const seriesData = stats.series.map((v, i) => ({ i, v }));
  return (
    <tr className={`hover:bg-gray-50 ${isHeadline ? "bg-amber-50/40" : isTrending ? "bg-rose-50/40" : ""}`}>
      <td className="px-4 py-3 font-medium text-gray-900 max-w-md">
        <div className="flex items-center gap-2 flex-wrap">
          {isHeadline && <HeadlineBadge />}
          {isTrending && <TrendingBadge />}
          <Link to="/admin/news/$id" params={{ id: row.id }} className="hover:text-bali-blue truncate">{row.title}</Link>
        </div>
      </td>
      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.date_text || "—"}</td>
      <td className="px-4 py-3 text-right tabular-nums">{stats.views.toLocaleString()}</td>
      <td className="px-4 py-3 text-right tabular-nums">{stats.clicks.toLocaleString()}</td>
      <td className="px-4 py-3 text-right tabular-nums font-semibold text-bali-slate">{stats.recentClicks.toLocaleString()}</td>
      <td className="px-4 py-3">
        <div className="w-24 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={seriesData}>
              <Line type="monotone" dataKey="v" stroke="#21509A" strokeWidth={1.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={onToggleHeadline}
          title={isHeadline ? "Remove paid headline placement" : "Mark as paid headline"}
          className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full border ${
            isHeadline
              ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-600"
              : "text-amber-700 border-amber-300 hover:bg-amber-50"
          }`}
        >
          <Star className="w-3 h-3" /> {isHeadline ? "Headline" : "Set headline"}
        </button>
      </td>
      <td className="px-4 py-3">
        {row.published ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800">
            <Eye className="w-3 h-3" /> Published
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
            <EyeOff className="w-3 h-3" /> Draft
          </span>
        )}
      </td>
      <td className="px-4 py-3 text-right">
        <div className="inline-flex items-center gap-1">
          <button onClick={onTogglePublish} className="p-1.5 text-gray-500 hover:text-bali-blue hover:bg-gray-100 rounded" title={row.published ? "Unpublish" : "Publish"}>
            {row.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <Link to="/admin/news/$id" params={{ id: row.id }} className="p-1.5 text-gray-500 hover:text-bali-blue hover:bg-gray-100 rounded">
            <Edit className="w-4 h-4" />
          </Link>
          <button onClick={onDelete} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function SortChip({ active, onClick, icon: Icon, children }: { active: boolean; onClick: () => void; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
      active ? "bg-bali-blue text-white border-bali-blue" : "text-gray-700 border-gray-200 hover:border-bali-blue hover:text-bali-blue bg-white"
    }`}>
      <Icon className="w-3.5 h-3.5" /> {children}
    </button>
  );
}

export function HeadlineBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">
      <Star className="w-3 h-3" /> Headline
    </span>
  );
}
export function TrendingBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
      <Flame className="w-3 h-3" /> Trending
    </span>
  );
}
