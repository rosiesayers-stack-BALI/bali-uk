import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "What we do — BALI";
const DESC = "BALI is the UK's leading trade association for landscape professionals — representing, supporting and accrediting contractors, designers, suppliers and edu";

export const Route = createFileRoute("/about/")({
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
      eyebrow="About BALI"
      title="What we do"
      intro="BALI is the UK's leading trade association for landscape professionals — representing, supporting and accrediting contractors, designers, suppliers and educators since 1972."
      bullets={[
  "Represent the landscape industry to government, media and the public",
  "Accredit members against a rigorous quality standard",
  "Provide free HR and Health & Safety support to members",
  "Run the National Landscape Awards — the industry's flagship recognition",
  "Host events, training and regional networks across the UK"
]}
    />
  );
}
