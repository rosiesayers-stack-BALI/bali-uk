import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Member Information — BALI";
const DESC = "This guidance is available to BALI members. Sign in on bali.org.uk to read the full Member Information content.";

export const Route = createFileRoute("/help/dispute/member-information")({
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
    <HelpPage
      eyebrow="Dispute resolution"
      title={`Member Information`}
      intro={`This guidance is available to BALI members. Sign in on bali.org.uk to read the full Member Information content.`}
      body={
        <>
          <p>This page contains members-only guidance. <a href="https://www.bali.org.uk/help-and-advice/dispute-resolution-service/member-information/" target="_blank" rel="noopener noreferrer">Read the full article on bali.org.uk</a> after signing in.</p>
        </>
      }
    />
  );
}
