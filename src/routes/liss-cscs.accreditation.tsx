import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Industry accreditation — BALI";
const DESC = "LISS/CSCS is fully accredited by the Construction Skills Certification Scheme (CSCS) and recognised on all major UK construction and landscape sites.";

export const Route = createFileRoute("/liss-cscs/accreditation")({
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
      eyebrow="Industry-wide"
      title="Industry accreditation"
      intro="LISS/CSCS is fully accredited by the Construction Skills Certification Scheme (CSCS) and recognised on all major UK construction and landscape sites."
      bullets={[
  "Logo-affiliated CSCS partner card scheme",
  "Recognised by major contractors, local authorities and clients",
  "Aligned with the CSCS Industry Accreditation framework",
  "Cards verified online via the CSCS card-check tool"
]}
    />
  );
}
