import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Apply for a LISS/CSCS SmartCard — BALI";
const DESC = "Applying for a LISS/CSCS card takes three steps: check the card you qualify for, pass the CITB H,S&E test, then submit your application with evidence of qu";

export const Route = createFileRoute("/liss-cscs/apply")({
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
      eyebrow="Get your card"
      title="Apply for a LISS/CSCS SmartCard"
      intro="Applying for a LISS/CSCS card takes three steps: check the card you qualify for, pass the CITB H,S&E test, then submit your application with evidence of qualifications."
      bullets={[
  "Step 1 — Check qualifications using our matrix tool",
  "Step 2 — Book and pass the CITB H,S&E test for your level",
  "Step 3 — Submit application with evidence and photo",
  "Cards typically delivered within 10 working days"
]}
    />
  );
}
