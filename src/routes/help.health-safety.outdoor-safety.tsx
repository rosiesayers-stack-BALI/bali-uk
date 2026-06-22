import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Outdoor Safety — BALI";
const DESC = "This page will be regularly updated with helpful guidance designed to mitigate the risks of working outdoors. A recent enquiry from an Association member p…";

export const Route = createFileRoute("/help/health-safety/outdoor-safety")({
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
      eyebrow="Health & safety"
      title={`Outdoor Safety`}
      intro={`This page will be regularly updated with helpful guidance designed to mitigate the risks of working outdoors. A recent enquiry from an Association member prompted a specific technical report to be written, which concerns the use of sunscreen in the workplace. The member asked whether it is the responsibility of an employer to supply sunscreen when the employee spends most of his/her working day outside. You can find this document, and many more, available to download on this page.`}
      body={
        <>
          <h3>There are many risks associated with working outdoors but exposure to the sun is one of the primary concerns, particularly as it is closely linked to skin cancer.</h3>
          <h3>documents</h3>
          <ol><li>Sunscreen and outdoor working: Employer and employee responsibilities 27 Jun 2019 247kb PDF</li><li>BALI's guide to working in hot conditions outdoors 24 Jul 2019 262kb PDF</li></ol>
        </>
      }
    />
  );
}
