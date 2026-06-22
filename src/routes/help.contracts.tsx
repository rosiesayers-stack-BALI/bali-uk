import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Contracts & Templates — BALI";
const DESC = "BALI's free template contracts for designer and contractor members — design only, build only, design & build — plus supporting schedules, variation templates and completion certificates.";

export const Route = createFileRoute("/help/contracts")({
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
      title="Contracts & Templates"
      intro="The British Association of Landscape Industries has developed a suite of template contracts for designer and contractor members to use with domestic clients — design only, build only, and design & build — along with the supporting schedules that complete the pack."
      body={
        <>
          <h3>Why use a BALI contract?</h3>
          <p>
            Use of any contract ensures the best chance of a mutually beneficial working relationship. The Association's suite of contracts are easy to understand and don't contain any jargon. These simple-to-use, editable documents ensure both parties are aware of the terms and conditions associated with a project.
          </p>
          <h3>What contracts are available?</h3>
          <ul>
            <li><strong>Design only</strong> — suitable for garden or landscape design projects, without a construction element.</li>
            <li><strong>Build only</strong> — suitable for garden or landscape construction projects, without a design element.</li>
            <li><strong>Design and build</strong> — suitable for combined garden or landscape design and construction projects.</li>
          </ul>
          <h3>Supporting schedules &amp; templates</h3>
          <ul>
            <li><strong>Contact details</strong> (Schedule 1) — record contact details of both parties.</li>
            <li><strong>Privacy notice</strong> (Schedule 4) — how BALI members manage data issued by their client.</li>
            <li><strong>Practical completion certificate</strong> (Schedule 5) — record practical completion of a project.</li>
            <li><strong>Project variation template</strong> — record the detail of all variations during the course of a project.</li>
          </ul>
          <p className="text-sm text-slate-500">
            All downloads are DOCX files and free to current BALI members. For commercial and sub-contract use see the JCLI contract suite in <a href="/help/law/jcli-contracts">Law &amp; Compliance</a>.
          </p>
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
