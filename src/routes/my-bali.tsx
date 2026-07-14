import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { z } from "zod";
import DashboardShell from "../components/mybali/DashboardShell";
import { getCurrentUser } from "../services/auth";

export const Route = createFileRoute("/my-bali")({
  ssr: false,
  validateSearch: (search) => z.object({}).passthrough().parse(search),
  beforeLoad: ({ location }) => {
    if (!getCurrentUser()) {
      throw redirect({ to: "/login", search: { dest: location.href } });
    }
  },
  head: () => ({
    meta: [
      { title: "My BALI — Member area" },
      { name: "description", content: "Your BALI member area." },
    ],
  }),
  component: MyBaliLayout,
});

function MyBaliLayout() {
  return (
    <DashboardShell>
      <Outlet />
    </DashboardShell>
  );
}
