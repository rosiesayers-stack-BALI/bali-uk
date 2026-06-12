import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Hardship fund — BALI";
const DESC = "The BALI-NCF Hardship Fund provides confidential grants to landscape industry workers and their families facing illness, injury, bereavement or sudden fina";

export const Route = createFileRoute("/help/hardship")({
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
      eyebrow="Confidential support"
      title="Hardship fund"
      intro="The BALI-NCF Hardship Fund provides confidential grants to landscape industry workers and their families facing illness, injury, bereavement or sudden financial difficulty."
      bullets={[
  "Confidential application — handled by NCF trustees only",
  "One-off grants for essential household and recovery costs",
  "Open to current and former industry workers and dependents",
  "Apply by email — full criteria and form on request"
]}
    />
  );
}
