import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "frequently asked questions — BALI";
const DESC = "What are the benefits of the dispute resolution service?";

export const Route = createFileRoute("/help/dispute/frequently-asked-questions")({
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
      eyebrow="Dispute resolution"
      title={`frequently asked questions`}
      intro={`What are the benefits of the dispute resolution service?`}
      body={
        <>
          <ul><li>Dispute Resolution Ombudsman is independent and impartial</li><li>The service is free for customers who have used the services of a member of the British Association of Landscape Industries</li><li>The service will provide a clear resolution the member is legally bound to comply with.</li><li>The resolution process is easy to access, meaning the Customer can avoid potentially lengthy and costly litigation.</li></ul>
          <p>What type of complaints can the dispute resolution service help with?</p>
          <ul><li>Work carried out by an Accredited designer or contractor who is a current member of the British Association of Landscape Industries</li><li>A service performed by an Accredited designer or contractor who is a member of the British Association of Landscape Industries</li></ul>
          <p>What complaints can the Dispute Resolution Ombudsman not help with?</p>
          <ul><li>The Customer has a complaint against a business that is not currently a member of the British Association of Landscape Industries</li><li>The Customer has a complaint against a member of the British Association of Landscape Industries who has entered administration, liquidation or has ceased trading</li><li>The Customer has a complaint against a member of the British Association of Landscape Industries that is already being dealt with by a court or another Ombudsman scheme</li><li>The Customer has previously accepted a resolution in full and final settlement of a dispute with a member of the British Association of Landscape Industries</li><li>It has been more than 3 months since the Customer has received a final response about their complaint from a member of the British Association of Landscape Industries</li></ul>
          <p>How will DRO make a decision and what are the possible outcomes?</p>
          <p>A decision will be made based on evidence supplied, legal obligations of both parties and what appears to be fair and reasonable given the circumstances of the case.</p>
          <p>Whilst the Member is bound by the decision of the Ombudsman, the Customer is not, and remains free to pursue their complaint via an alternative method should they disagree with the outcome of the Ombudsman.</p>
          <p>As a provider of alternative dispute resolution services, the Ombudsman has more flexibility than the legal system to identify remedies to resolve a dispute.  Solutions may include:</p>
          <ul><li>Remedial works</li><li>Instruction for the Member to provide an explanation or gesture of goodwill</li><li>Refund (full or partial)</li><li>Compensation (the Customer will need to evidence any losses incurred)</li></ul>
          <p>What is the process associated with the Dispute Resolution Service?</p>
          <ul><li>The Ombudsman will send the Customer a Client Resolution Form which will capture all project information.</li><li>The Ombudsman expect the Customer to submit supporting evidence including: All project documentation, including contract, design drawings, specification and bill of quantity High resolution photographs of the project – and the aspects which concern you All correspondence exchanged during the project Details of any variations agreed during the project</li><li>The Ombudsman will forward the completed application form and evidence to the Member responsible for the project, and ask them to respond with their own account and supporting evidence</li><li>An Ombudsman will be assigned to assess the documents and begin a process of conciliation between the Customer and Member</li><li>Where an agreement cannot be reached or where the Ombudsman has been unable to make a decision based upon the evidence provided, the case may proceed to adjudication.  At this point an Independent Expert Witness may be asked to visit the location of the works to provide their opinion.</li><li>With a complete case file, the Ombudsman will then write their Adjudication report.</li></ul>
          <ul><li>All project documentation, including contract, design drawings, specification and bill of quantity</li><li>High resolution photographs of the project – and the aspects which concern you</li><li>All correspondence exchanged during the project</li><li>Details of any variations agreed during the project</li></ul>
        </>
      }
    />
  );
}
