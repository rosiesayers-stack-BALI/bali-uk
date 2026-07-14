import { createFileRoute } from "@tanstack/react-router";
import {
  Award, BadgeCheck, Briefcase, Gavel, Handshake, Shield, Sparkles,
} from "lucide-react";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { BENEFITS } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/benefits")({
  component: BenefitsPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  logo: BadgeCheck,
  digital: Sparkles,
  "hr-hs": Shield,
  insure: Handshake,
  jobs: Briefcase,
  dispute: Gavel,
  utp: Award,
};

function BenefitsPage() {
  return (
    <>
      <PageHeader title="My benefits" subtitle="Everything included in your BALI membership." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {BENEFITS.map((b) => {
          const Icon = ICONS[b.id] ?? Award;
          return (
            <Card key={b.id} className="group transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-lg bg-bali-green/10 text-bali-green shrink-0 group-hover:bg-bali-green group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-bali-slate">{b.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{b.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
