import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight, BadgeCheck, Building2, FileText, IdCard, Newspaper,
  ScrollText, Sparkles, Video,
} from "lucide-react";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { RESOURCES } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/resources")({
  component: ResourcesPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  brand: Sparkles,
  domestic: ScrollText,
  "landscape-news": Newspaper,
  webinar: Video,
  stickers: IdCard,
  quality: BadgeCheck,
  bank: Building2,
  articles: FileText,
};

function ResourcesPage() {
  return (
    <>
      <PageHeader title="My resources" subtitle="Templates, guidance and members-only downloads." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {RESOURCES.map((r) => {
          const Icon = ICONS[r.id] ?? FileText;
          return (
            <a
              key={r.id}
              href={r.href}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-bali-blue hover:shadow-md transition-all flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-bali-blue/30"
            >
              <span className="grid place-items-center w-11 h-11 rounded-lg bg-bali-blue/10 text-bali-blue shrink-0 group-hover:bg-bali-blue group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold text-bali-slate group-hover:text-bali-blue">
                {r.title}
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-bali-blue shrink-0" aria-hidden />
            </a>
          );
        })}
      </div>
    </>
  );
}
