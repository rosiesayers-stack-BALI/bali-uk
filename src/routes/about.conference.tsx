import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "BALI National Conference 2026 — Save the Date";
const DESC = "The BALI National Conference brings the industry together for a full day of keynote talks, panels, networking and learning — the can't-miss event in the la";

export const Route = createFileRoute("/about/conference")({
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
      eyebrow="Flagship event"
      title="National Conference 2026"
      intro="The BALI National Conference brings the industry together for a full day of keynote talks, panels, networking and learning — the can't-miss event in the landscape calendar."
      bullets={[
  "One-day conference with keynotes, panels and breakouts",
  "Networking lunch and evening drinks reception",
  "Industry exhibition with leading suppliers",
  "Programme, speakers and tickets announced soon"
]}
    />
  );
}
