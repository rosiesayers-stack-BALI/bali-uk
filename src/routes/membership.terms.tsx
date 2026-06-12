import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Terms of membership — BALI";
const DESC = "All BALI members agree to our standard terms of membership when they join. These cover subscription fees, renewal, conduct, suspension and the obligations ";

export const Route = createFileRoute("/membership/terms")({
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
      eyebrow="Legal"
      title="Terms of membership"
      intro="All BALI members agree to our standard terms of membership when they join. These cover subscription fees, renewal, conduct, suspension and the obligations of accredited status."
      bullets={[
  "Annual subscription with no auto-renewal trap",
  "Right to use the BALI Accredited badge while in good standing",
  "Obligation to uphold the BALI Code of Conduct",
  "Process for complaints, suspension and appeal"
]}
    />
  );
}
