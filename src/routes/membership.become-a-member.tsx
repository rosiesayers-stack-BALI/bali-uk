import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Become a member — BALI";
const DESC = "Joining BALI takes three simple steps: pick the membership category that fits your business, complete your application online, and complete our assessment ";

export const Route = createFileRoute("/membership/become-a-member")({
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
      eyebrow="Start here"
      title="Become a member"
      intro="Joining BALI takes three simple steps: pick the membership category that fits your business, complete your application online, and complete our assessment process. Most accredited applications are decided within a few weeks."
      bullets={[
  "Step 1 — Choose your category on the Join page",
  "Step 2 — Complete the online application and upload supporting documents",
  "Step 3 — Membership team reviews and confirms your assessment",
  "Step 4 — Welcome pack, badge and member benefits activated"
]}
    />
  );
}
