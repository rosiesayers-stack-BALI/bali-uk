import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "What is LISS/CSCS? — BALI";
const DESC = "LISS/CSCS is the Landscape Industry Skills Scheme — a CSCS-affiliated competence card scheme proving that landscape workers have the qualifications and hea";

export const Route = createFileRoute("/liss-cscs/")({
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
      eyebrow="Smartcard scheme"
      title="What is LISS/CSCS?"
      intro="LISS/CSCS is the Landscape Industry Skills Scheme — a CSCS-affiliated competence card scheme proving that landscape workers have the qualifications and health & safety knowledge for the work they do on site."
      bullets={[
  "Recognised on all CSCS-required sites across the UK",
  "Cards graded by qualification: Trainee, Skilled, Advanced, Manager",
  "Requires the CITB Health, Safety & Environment test",
  "Renewable every 5 years"
]}
    />
  );
}
