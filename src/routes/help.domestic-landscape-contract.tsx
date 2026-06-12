import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Domestic Landscape Contract — BALI";
const DESC = "The BALI Domestic Landscape Contract is designed for residential garden and landscaping projects — protecting both the homeowner and the contractor with cl";

export const Route = createFileRoute("/help/domestic-landscape-contract")({
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
      title="Domestic Landscape Contract"
      intro="The BALI Domestic Landscape Contract is designed for residential garden and landscaping projects — protecting both the homeowner and the contractor with clear, fair terms compliant with consumer regulations."
      bullets={[
  "Consumer Rights Act and Consumer Contracts Regulations compliant",
  "Plain-English schedule of works, payment and variations",
  "Cooling-off period and cancellation rights clearly stated",
  "Available in PDF and printed pad format — members discounted"
]}
    />
  );
}
