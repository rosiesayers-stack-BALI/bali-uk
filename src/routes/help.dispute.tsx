import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Dispute Resolution Service — BALI";
const DESC = "Learn more about the dispute resolution service offered by The British Association of Landscape Industries to members and their clients.";

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

const SUB = [
  { title: "Client information", description: "How the service works if you are a client of a BALI member and want to raise a dispute.", href: "https://www.bali.org.uk/help-and-advice/dispute-resolution-service/client-information/" },
  { title: "Member information", description: "What to do as a BALI member if a client raises a dispute with you.", href: "https://www.bali.org.uk/help-and-advice/dispute-resolution-service/member-information/" },
  { title: "Frequently asked questions", description: "Common questions about the BALI dispute resolution service answered.", href: "https://www.bali.org.uk/help-and-advice/dispute-resolution-service/frequently-asked-questions/" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Resolution"
      title="Dispute Service"
      intro="Learn more about the dispute resolution service offered by The British Association of Landscape Industries to members and their clients — an independent, low-cost route to a fair outcome that often avoids the courts."
      subTopics={SUB}
    />
  );
}
