import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Guides & downloads — BALI";
const DESC = "The BALI document library holds technical guides, contract templates, H&S documents, brand assets and member marketing collateral — all free to members.";

export const Route = createFileRoute("/help/guides")({
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
      eyebrow="Resources"
      title="Guides & downloads"
      intro="The BALI document library holds technical guides, contract templates, H&S documents, brand assets and member marketing collateral — all free to members."
      bullets={[
  "Technical guides on hard and soft landscaping practice",
  "Contract templates and standard forms",
  "Brand assets — BALI logo, accredited badge, web banners",
  "Marketing collateral — case study templates, client leaflets"
]}
    />
  );
}
