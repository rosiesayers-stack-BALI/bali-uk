import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Health & Safety — BALI";
const DESC = "BALI members have free access to expert health and safety advice via our partnership with Quest — covering risk assessments, RAMS, CDM compliance, accident";

export const Route = createFileRoute("/help/health-safety")({
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
      eyebrow="H&S"
      title="Health & Safety"
      intro="BALI members have free access to expert health and safety advice via our partnership with Quest — covering risk assessments, RAMS, CDM compliance, accident reporting and HSE liaison."
      bullets={[
  "Free H&S helpline open during business hours",
  "Document library: risk assessment and method statement templates",
  "On-site H&S audits available at member rates",
  "Industry alerts on incidents, regulations and HSE focus"
]}
    />
  );
}
