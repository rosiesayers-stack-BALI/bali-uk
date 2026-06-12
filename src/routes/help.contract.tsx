import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "BALI Landscape Contract — BALI";
const DESC = "The BALI Landscape Contract is the industry's standard form of contract for commercial hard and soft landscaping projects — fair to contractor and client, ";

export const Route = createFileRoute("/help/contract")({
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
      eyebrow="Contracts"
      title="BALI Landscape Contract"
      intro="The BALI Landscape Contract is the industry's standard form of contract for commercial hard and soft landscaping projects — fair to contractor and client, and recognised across the UK."
      bullets={[
  "Plain-English wording reviewed by industry lawyers",
  "Sections covering scope, payment, variations and defects",
  "Aligns with JCT minor works for sub-contract use",
  "Member discount on official printed and PDF copies"
]}
    />
  );
}
