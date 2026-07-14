import { createFileRoute } from "@tanstack/react-router";
import ForgottenPasswordPage from "../pages/ForgottenPasswordPage";

export const Route = createFileRoute("/forgotten-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Forgotten password — My BALI" },
      { name: "description", content: "Reset your BALI member account password." },
    ],
  }),
  component: ForgottenPasswordPage,
});
