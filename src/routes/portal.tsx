import { createFileRoute } from "@tanstack/react-router";
import PortalPage from "../pages/PortalPage";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "My BALI Portal" },
      { name: "description", content: "Your BALI member dashboard." },
    ],
  }),
  component: PortalPage,
});
