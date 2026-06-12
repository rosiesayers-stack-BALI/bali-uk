import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Law & regulations — BALI";
const DESC = "Stay on the right side of the law with BALI's legal guidance — covering employment, consumer law, contract disputes, environmental regulation, immigration ";

export const Route = createFileRoute("/help/law")({
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
      eyebrow="Legal"
      title="Law & regulations"
      intro="Stay on the right side of the law with BALI's legal guidance — covering employment, consumer law, contract disputes, environmental regulation, immigration checks and more."
      bullets={[
  "Free HR and employment law helpline via Quest",
  "Guidance notes on key regulations affecting landscapers",
  "Template documents — contracts, NDAs, employment letters",
  "Referral to specialist solicitors at member rates"
]}
    />
  );
}
