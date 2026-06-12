import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "NHSS18 — BALI";
const DESC = "NHSS18 is the National Highway Sector Scheme for grounds maintenance and landscape works on or adjacent to the highway. BALI is the scheme owner and suppor";

export const Route = createFileRoute("/liss-cscs/nhss18")({
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
      eyebrow="Highways sector"
      title="NHSS18"
      intro="NHSS18 is the National Highway Sector Scheme for grounds maintenance and landscape works on or adjacent to the highway. BALI is the scheme owner and supports member certification."
      bullets={[
  "Required for landscape works on Highways England contracts",
  "Covers competence, equipment, and safe systems of work",
  "Audited annually by UKAS-accredited certification bodies",
  "BALI advises on scheme requirements and audit prep"
]}
    />
  );
}
