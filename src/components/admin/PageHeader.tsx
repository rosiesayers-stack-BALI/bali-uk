import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  back,
  actions,
}: {
  title: string;
  subtitle?: string;
  back?: { to: string; label: string };
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
      <div className="min-w-0">
        {back && (
          <Link to={back.to} className="inline-flex items-center text-sm text-gray-500 hover:text-bali-blue mb-2">
            <ChevronLeft className="w-4 h-4" /> {back.label}
          </Link>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-bali-slate tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 mt-1 text-sm">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
