import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Hardship Fund — BALI";
const DESC = "The Membership Hardship Fund helps current BALI members continue their association in the event of unforeseen financial difficulty. Confidential, case-by-case support.";

export const Route = createFileRoute("/help/hardship")({
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
    <HelpPage
      eyebrow="Confidential support"
      title="Hardship Fund"
      intro="The Membership Hardship Fund is intended to help current members continue their association with BALI in the event of unforeseen financial difficulty."
      body={
        <>
          <p>
            Members may apply to the Association for support in funding part or all of the cost of a year's membership at their existing rate. Applications are assessed on a case-by-case basis.
          </p>
          <p>
            Below is some outline guidance on eligibility for the fund, but if you would like to discuss a specific situation, or would like more information, please do contact us.
          </p>
          <h3>Eligibility</h3>
          <ul>
            <li>Support is available to members from the fifth consecutive year of membership — i.e. following at least four full years of membership.</li>
            <li>Support is not available retrospectively — it will not be paid as a refund of membership fees.</li>
            <li>The number of hardship grants available in any year will depend on the number of applications we receive, and the funds available.</li>
            <li>Support will only be available for one year — i.e. one application per member and cannot be repeated.</li>
            <li>Support is available on the basis that members will retain their membership beyond the year of support.</li>
          </ul>
          <h3>How to apply</h3>
          <p>
            For more information or to discuss an application, please contact the Membership team at <a href="mailto:membership@bali.org.uk"><strong>membership@bali.org.uk</strong></a>, or phone us for an informal chat on <strong>+44 (0)24 7669 8658</strong> or <strong>+44 (0)24 7669 8651</strong>.
          </p>
          <p>
            <em>All discussions and applications will be treated in the strictest confidence.</em>
          </p>
        </>
      }
    />
  );
}
