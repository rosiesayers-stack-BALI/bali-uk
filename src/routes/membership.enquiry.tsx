import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Membership enquiry — BALI";
const DESC = "Not sure which category fits your business? Our membership team responds to every enquiry within 48 hours and can guide you through the right route.";

export const Route = createFileRoute("/membership/enquiry")({
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
      eyebrow="Talk to us"
      title="Membership enquiry"
      intro="Not sure which category fits your business? Our membership team responds to every enquiry within 48 hours and can guide you through the right route."
      bullets={[
  "Call us on +44 (0)24 7669 0333",
  "Email membership@bali.org.uk",
  "Book a 15-minute discovery call (online booking coming soon)",
  "Or browse all 12 membership categories on the Join page"
]}
    />
  );
}
