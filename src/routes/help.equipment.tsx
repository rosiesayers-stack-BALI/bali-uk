import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Equipment guidance — BALI";
const DESC = "BALI publishes member-tested guidance and reviews on tools, machinery, vehicles and personal protective equipment — plus discount schemes with leading manu";

export const Route = createFileRoute("/help/equipment")({
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
      eyebrow="Tools & PPE"
      title="Equipment guidance"
      intro="BALI publishes member-tested guidance and reviews on tools, machinery, vehicles and personal protective equipment — plus discount schemes with leading manufacturers."
      bullets={[
  "Buying guides for hand tools, power tools and machinery",
  "PPE specification guidance — gloves, eye, ear, respiratory",
  "Vehicle, trailer and towing compliance guidance",
  "Member discount schemes with leading brands"
]}
    />
  );
}
