import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Pests & diseases — BALI";
const DESC = "Up-to-date alerts on the pests and diseases most relevant to UK landscape professionals — including box tree moth, Xylella, ash dieback, oak processionary ";

export const Route = createFileRoute("/help/pests")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <StubPage
      eyebrow="Alerts"
      title="Pests & diseases"
      intro="Up-to-date alerts on the pests and diseases most relevant to UK landscape professionals — including box tree moth, Xylella, ash dieback, oak processionary moth and Asian hornet."
      bullets={[
  "Box tree moth & caterpillar — identification and treatment",
  "Xylella fastidiosa — Defra surveillance and reporting",
  "Ash dieback (Chalara) — assessment and replacement guidance",
  "Oak processionary moth — control zones and PPE requirements",
  "Asian hornet — reporting and apiary protection"
]}
    />
  );
}
