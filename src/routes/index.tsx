import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BALI — British Association of Landscape Industries" },
      {
        name: "description",
        content:
          "The UK's leading Trade Association and accreditation body for landscape professionals — delivering excellence through standards, innovation and leadership.",
      },
      { property: "og:title", content: "BALI — British Association of Landscape Industries" },
      {
        property: "og:description",
        content:
          "The UK's leading Trade Association and accreditation body for landscape professionals.",
      },
    ],
  }),
  component: HomePage,
});
