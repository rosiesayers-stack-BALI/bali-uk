import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Training courses — BALI";
const DESC = "BALI and its accredited training providers run a comprehensive programme of technical, safety and business training for the landscape industry.";

export const Route = createFileRoute("/events/training")({
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
      eyebrow="Skills & development"
      title="Training courses"
      intro="BALI and its accredited training providers run a comprehensive programme of technical, safety and business training for the landscape industry."
      bullets={[
  "Health & safety: NPTC, IPAF, PA-series spraying, chainsaw",
  "Technical: hard landscaping, soft landscaping, irrigation, planting",
  "Business: estimating, project management, leadership",
  "Apprenticeship support and assessor training"
]}
    />
  );
}
