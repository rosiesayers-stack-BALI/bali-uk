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
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          {back && (
            <Link to={back.to} className="inline-flex items-center text-sm text-gray-500 hover:text-bali-blue mb-2">
              <ChevronLeft className="w-4 h-4" /> {back.label}
            </Link>
          )}
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}
