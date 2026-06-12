import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Plant health — BALI";
const DESC = "Protecting UK plant health is critical to our industry. BALI works with Defra, APHA and the HTA on biosecurity standards and shares alerts on emerging pest";

export const Route = createFileRoute("/help/plant-health")({
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
      eyebrow="Biosecurity"
      title="Plant health"
      intro="Protecting UK plant health is critical to our industry. BALI works with Defra, APHA and the HTA on biosecurity standards and shares alerts on emerging pests and diseases."
      bullets={[
  "Plant Passport regime — guidance for member businesses",
  "Notifiable pest and disease list with reporting routes",
  "Best practice for sourcing, inspecting and quarantining stock",
  "Sign-up to Defra plant health alerts"
]}
    />
  );
}
