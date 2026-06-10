import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "../pages/LoginPage";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Member Login — BALI" },
      { name: "description", content: "Sign in to your BALI member portal." },
    ],
  }),
  component: LoginPage,
});
