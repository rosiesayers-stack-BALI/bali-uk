import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Help & advice — BALI";
const DESC = "BALI provides members with practical help across contracts, health & safety, law, equipment, plant health, dispute resolution and wellbeing. Browse the top";

export const Route = createFileRoute("/help/")({
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
      eyebrow="Member support"
      title="Help & advice"
      intro="BALI provides members with practical help across contracts, health & safety, law, equipment, plant health, dispute resolution and wellbeing. Browse the topics below or contact us directly."
      bullets={[
  "Free HR and H&S helpline via Quest legal partner",
  "Standard contracts for commercial and domestic work",
  "Dispute resolution service for member-to-client issues",
  "Plant health, pest and disease alerts and guidance",
  "Equipment and PPE buying guidance",
  "BALI Podcast: Dig Deep — conversations from the industry"
]}
    />
  );
}
