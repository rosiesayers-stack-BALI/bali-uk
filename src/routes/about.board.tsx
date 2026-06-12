import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Board of Directors — BALI";
const DESC = "BALI is governed by an elected board of directors drawn from across the membership — contractors, designers, suppliers and educators who shape our strategy";

export const Route = createFileRoute("/about/board")({
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
      eyebrow="Governance"
      title="Board of Directors"
      intro="BALI is governed by an elected board of directors drawn from across the membership — contractors, designers, suppliers and educators who shape our strategy and represent member interests."
      bullets={[
  "Elected by the membership at the AGM",
  "Meets quarterly to set strategy and oversight",
  "Includes representation from each membership category",
  "Profiles, biographies and committee details coming soon"
]}
    />
  );
}
