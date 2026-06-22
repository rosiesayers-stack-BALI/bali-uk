import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Dispute Resolution Service — BALI";
const DESC = "Learn more about the dispute resolution service offered by The British Association of Landscape Industries to members and their clients.";

export const Route = createFileRoute("/help/dispute")({
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

const SUB = [
  { title: "Client information", description: "How the service works if you are a client of a BALI member and want to raise a dispute.", href: "/help/dispute/client-information" },
  { title: "Member information", description: "What to do as a BALI member if a client raises a dispute with you.", href: "/help/dispute/member-information" },
  { title: "Frequently asked questions", description: "Common questions about the BALI dispute resolution service answered.", href: "/help/dispute/frequently-asked-questions" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Resolution"
      title="Dispute Service"
      intro="An independent, low-cost route to a fair outcome that often avoids the courts — open to BALI members and to the clients of BALI members."
      body={
        <>
          <h3>What is the BALI Dispute Resolution Service?</h3>
          <p>
            Landscape projects involve people, plants, weather and a long list of moving parts, so even with the best intentions things sometimes go wrong. The BALI Dispute Resolution Service is a structured, professionally facilitated process that helps clients and member contractors resolve disagreements without resorting to formal legal action.
          </p>
          <p>
            It is run independently of the parties involved, draws on technical experts from across the industry, and is delivered at a fraction of the cost of court proceedings or arbitration.
          </p>

          <h3>When you might use it</h3>
          <ul>
            <li>Disagreement over the standard or completeness of works</li>
            <li>Disputes about variations, scope creep or extras</li>
            <li>Concerns about plant quality, establishment or replacement</li>
            <li>Issues around final payment or retention</li>
            <li>Communication or contractual breakdowns mid-project</li>
          </ul>

          <h3>How it works</h3>
          <ul>
            <li><strong>Step 1 — Talk first.</strong> Most issues are resolved through direct conversation. Put concerns in writing and give the other party a reasonable opportunity to respond.</li>
            <li><strong>Step 2 — Contact BALI.</strong> If the matter is not resolved, contact us. We will explain the service, gather basic details and confirm eligibility.</li>
            <li><strong>Step 3 — Independent review.</strong> A qualified industry expert reviews the documentation, contract terms and (where appropriate) the site, and produces an impartial report.</li>
            <li><strong>Step 4 — Outcome.</strong> The report is shared with both parties. The vast majority of cases are settled at this stage without further escalation.</li>
          </ul>

          <h3>Good practice that prevents disputes</h3>
          <ul>
            <li>Use a written contract — JCLI, the BALI Domestic Landscape Contract or equivalent.</li>
            <li>Agree specifications, drawings and a payment schedule in writing before work starts.</li>
            <li>Document variations as they happen, signed by both parties.</li>
            <li>Keep dated photographs and site notes throughout the project.</li>
          </ul>
        </>
      }
      subTopics={SUB}
    />
  );
}
