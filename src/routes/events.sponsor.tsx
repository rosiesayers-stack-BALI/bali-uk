import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Sponsor BALI National Conference 2026";
const DESC = "Position your brand in front of the most senior decision-makers in UK landscape — at the industry's flagship one-day conference and networking event.";

export const Route = createFileRoute("/events/sponsor")({
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
      eyebrow="Partnership"
      title="Sponsor the National Conference 2026"
      intro="Position your brand in front of the most senior decision-makers in UK landscape — at the industry's flagship one-day conference and networking event."
      bullets={[
  "Headline, platinum, gold and supporting packages available",
  "Exhibition stand, branding, speaking opportunities",
  "Delegate list and post-event leads (where permitted)",
  "Bespoke packages on request — talk to the team"
]}
    />
  );
}
