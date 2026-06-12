import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Dispute service — BALI";
const DESC = "Where a dispute arises between a BALI member and their client, our dispute resolution service offers an independent, low-cost route to a fair outcome — oft";

export const Route = createFileRoute("/help/dispute")({
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
      eyebrow="Resolution"
      title="Dispute service"
      intro="Where a dispute arises between a BALI member and their client, our dispute resolution service offers an independent, low-cost route to a fair outcome — often avoiding court."
      bullets={[
  "Independent assessment by an experienced industry adjudicator",
  "Lower cost and faster than civil litigation",
  "Available for both commercial and domestic disputes",
  "Outcomes binding on the member under our Code of Conduct"
]}
    />
  );
}
