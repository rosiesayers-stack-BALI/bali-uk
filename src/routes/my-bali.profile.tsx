import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHeader } from "../components/mybali/DashboardShell";

export const Route = createFileRoute("/my-bali/profile")({
  head: () => ({ meta: [{ title: "My BALI — My profile" }] }),
  component: ProfileLayout,
});

const TABS = [
  { to: "/my-bali/profile", label: "Overview", exact: true },
  { to: "/my-bali/profile/personal", label: "Personal details" },
  { to: "/my-bali/profile/organisation", label: "Organisation" },
  { to: "/my-bali/profile/disciplines", label: "Disciplines" },
  { to: "/my-bali/profile/directory", label: "Directory listing" },
  { to: "/my-bali/profile/password", label: "Change password" },
  { to: "/my-bali/profile/password", label: "Change password" },
  { to: "/my-bali/profile/bookings", label: "Event bookings" },
] as const;

function ProfileLayout() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  return (
    <>
      <PageHeader title="My profile" subtitle="Manage your account, organisation and directory listing." />
      <nav aria-label="Profile sections" className="mb-6 overflow-x-auto">
        <ul className="flex gap-1 border-b border-gray-200">
          {TABS.map((t) => {
            const active = "exact" in t && t.exact ? pathname === t.to : pathname === t.to || pathname.startsWith(t.to + "/");
            return (
              <li key={t.to}>
                <Link
                  to={t.to}
                  className={`inline-block whitespace-nowrap text-sm px-4 py-2 border-b-2 -mb-px transition-colors ${
                    active
                      ? "border-bali-blue text-bali-blue font-semibold"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
