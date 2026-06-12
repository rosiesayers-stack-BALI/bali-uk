import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Supported charities — BALI";
const DESC = "BALI and its members support a range of industry-related charities through fundraising at events, the BALI Chalk Fund and direct contributions.";

export const Route = createFileRoute("/about/charities")({
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
      eyebrow="Giving back"
      title="Supported charities"
      intro="BALI and its members support a range of industry-related charities through fundraising at events, the BALI Chalk Fund and direct contributions."
      bullets={[
  "BALI-NCF — our own charitable foundation",
  "Perennial — supporting horticulturists in need",
  "Greenfingers — therapeutic gardens for children's hospices",
  "Industry mental health initiatives via The Lighthouse Club"
]}
    />
  );
}
