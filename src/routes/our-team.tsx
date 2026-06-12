import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Meet our team — BALI";
const DESC = "The BALI head office team supports members, runs events, manages accreditation, and represents the industry day-to-day from our Warwickshire office.";

export const Route = createFileRoute("/our-team")({
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
      eyebrow="Our people"
      title="Meet our team"
      intro="The BALI head office team supports members, runs events, manages accreditation, and represents the industry day-to-day from our Warwickshire office."
      bullets={[
  "Membership team — applications, renewals and benefits",
  "Marketing & communications — Landscape News, social, PR",
  "Events & training — Awards, Conference, regional events",
  "Operations & finance — accreditation, governance, support"
]}
    />
  );
}
