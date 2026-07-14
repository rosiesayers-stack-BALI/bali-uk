import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";
import MyBaliDashboardPage from "../pages/MyBaliDashboardPage";
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
      { title: "My BALI — Member dashboard" },
      { name: "description", content: "Your BALI member dashboard." },
    ],
  }),
  component: MyBaliDashboardPage,
});
