import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Landscape Contract — BALI";
const DESC = "BALI has developed three template contracts for designer and contractor members to use with their domestic clients — design only, build only, and design & build.";

export const Route = createFileRoute("/help/contract")({
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
      eyebrow="Contracts"
      title="Landscape Contract"
      intro="The British Association of Landscape Industries has developed three template contracts for use by designer and contractor members with their domestic client. Use this page to learn more about the contracts and download them for free."
      body={
        <>
          <h3>Why use a BALI contract?</h3>
          <p>
            Use of any contract ensures the best chance of a mutually beneficial working relationship.
          </p>
          <p>
            The Association's suite of contracts are easy to understand and don't contain any jargon. These simple-to-use, editable documents ensure both parties are aware of the terms and conditions associated with a project.
          </p>
          <h3>What contracts are available?</h3>
          <ul>
            <li><strong>Design only</strong> — suitable for garden or landscape design projects, without a construction element.</li>
            <li><strong>Build only</strong> — suitable for garden or landscape construction projects, without a design element.</li>
            <li><strong>Design and build</strong> — suitable for garden or landscape design and construction projects.</li>
          </ul>
          <h3>Supporting information</h3>
          <ul>
            <li><strong>Contact details</strong> (Schedule 1) — record contact details of both parties.</li>
            <li><strong>Privacy notice</strong> (Schedule 4) — outlines how BALI members manage data issued by their client.</li>
            <li><strong>Practical completion certificate</strong> (Schedule 5) — record practical completion of a project.</li>
            <li><strong>Project variation template</strong> — record the detail of all variations during the course of a project.</li>
          </ul>
        </>
      }
      documents={[
        { title: "Domestic Contract: Design only", href: "https://www.bali.org.uk/help-and-advice/documents/commercial-contracts-design-only/", meta: "DOCX · members only" },
        { title: "Domestic Contract: Build only", href: "https://www.bali.org.uk/help-and-advice/documents/commercial-contract-build-only/", meta: "DOCX · members only" },
        { title: "Domestic Contract: Design and Build", href: "https://www.bali.org.uk/help-and-advice/documents/commercial-contracts-design-and-build/", meta: "DOCX · members only" },
        { title: "Project variation template", href: "https://www.bali.org.uk/help-and-advice/documents/project-variation-template/", meta: "DOCX · members only" },
        { title: "Practical completion certificate", href: "https://www.bali.org.uk/help-and-advice/documents/practical-completion-certificate/", meta: "DOCX · members only" },
        { title: "Contact details (Schedule 1)", href: "https://www.bali.org.uk/help-and-advice/documents/contact-details/", meta: "DOCX · members only" },
      ]}
    />
  );
}
