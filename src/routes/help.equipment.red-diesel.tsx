import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Red Diesel — BALI";
const DESC = "This guidance is available to BALI members. Sign in on bali.org.uk to read the full Red Diesel content.";

export const Route = createFileRoute("/help/equipment/red-diesel")({
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
      eyebrow="Machinery & driving"
      title={`Red Diesel`}
      intro={`This guidance is available to BALI members. Sign in on bali.org.uk to read the full Red Diesel content.`}
      body={
        <>
          <p>This page contains members-only guidance. <a href="https://www.bali.org.uk/help-and-advice/equipment/red-diesel-v2/" target="_blank" rel="noopener noreferrer">Read the full article on bali.org.uk</a> after signing in.</p>
        </>
      }
    />
  );
}
