import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Check your qualifications — BALI";
const DESC = "Use our qualification matrix to find which LISS/CSCS card you're eligible for based on your NVQs, diplomas, apprenticeships or industry experience.";

export const Route = createFileRoute("/liss-cscs/check")({
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
      eyebrow="Eligibility"
      title="Check your qualifications"
      intro="Use our qualification matrix to find which LISS/CSCS card you're eligible for based on your NVQs, diplomas, apprenticeships or industry experience."
      bullets={[
  "Trainee — for those working towards a qualification",
  "Skilled — NVQ Level 2 or equivalent industry qualification",
  "Advanced — NVQ Level 3 or equivalent",
  "Manager — NVQ Level 4-7 in supervision/management"
]}
    />
  );
}
