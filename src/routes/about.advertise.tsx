import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Advertise with BALI — Reach UK Landscape Professionals";
const DESC = "Reach decision-makers across the UK landscape industry through Landscape News magazine, our website, newsletter, awards programme and National Conference.";

export const Route = createFileRoute("/about/advertise")({
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
      eyebrow="Reach the industry"
      title="Advertise with BALI"
      intro="Reach decision-makers across the UK landscape industry through Landscape News magazine, our website, newsletter, awards programme and National Conference."
      bullets={[
  "Landscape News print and digital magazine",
  "Targeted website advertising and sponsored content",
  "Awards and conference sponsorship packages",
  "Member-only directory and supplier showcase opportunities"
]}
    />
  );
}
