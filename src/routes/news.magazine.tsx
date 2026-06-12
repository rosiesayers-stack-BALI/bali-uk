import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Landscape News magazine — BALI";
const DESC = "Landscape News is BALI's quarterly industry magazine — covering members, projects, policy, training and innovation across the UK landscape sector.";

export const Route = createFileRoute("/news/magazine")({
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
      eyebrow="Member publication"
      title="Landscape News magazine"
      intro="Landscape News is BALI's quarterly industry magazine — covering members, projects, policy, training and innovation across the UK landscape sector."
      bullets={[
  "Quarterly print edition mailed free to all members",
  "Digital edition available on the member portal",
  "Editorial submissions welcomed from members",
  "Advertising opportunities — see Advertise with BALI"
]}
    />
  );
}
