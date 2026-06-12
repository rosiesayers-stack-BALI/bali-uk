import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Landscaping careers — BALI";
const DESC = "Landscaping is one of the UK's most rewarding outdoor careers — combining horticulture, construction, design and environmental work. We promote routes into";

export const Route = createFileRoute("/about/careers")({
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
      eyebrow="Industry careers"
      title="Landscaping careers"
      intro="Landscaping is one of the UK's most rewarding outdoor careers — combining horticulture, construction, design and environmental work. We promote routes into the industry for school leavers, career changers and apprentices."
      bullets={[
  "Apprenticeship pathways with accredited training providers",
  "Routes for designers, contractors, horticulturists and groundskeepers",
  "Industry pay benchmarks and progression frameworks",
  "Live vacancies at BALI member companies (jobs board coming soon)"
]}
    />
  );
}
