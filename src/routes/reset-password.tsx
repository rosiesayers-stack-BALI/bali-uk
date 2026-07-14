import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import ResetPasswordPage from "../pages/ResetPasswordPage";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  validateSearch: (search) =>
    z.object({ token: z.string().optional() }).parse(search),
  head: () => ({
    meta: [
      { title: "Reset password — My BALI" },
      { name: "description", content: "Choose a new password for your BALI account." },
    ],
  }),
  component: ResetPasswordPage,
});
