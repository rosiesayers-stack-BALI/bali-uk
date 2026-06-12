import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Association Quality Standard — BALI";
const DESC = "The Association Quality Standard underpins BALI Accreditation — the assessment framework members are measured against during application and at periodic re";

export const Route = createFileRoute("/membership/quality")({
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
      eyebrow="Accreditation"
      title="Association Quality Standard"
      intro="The Association Quality Standard underpins BALI Accreditation — the assessment framework members are measured against during application and at periodic review."
      bullets={[
  "Documented quality and H&S management systems",
  "Evidence of completed projects to professional standards",
  "Client and trade references verified by BALI",
  "Periodic re-assessment to maintain accredited status"
]}
    />
  );
}
