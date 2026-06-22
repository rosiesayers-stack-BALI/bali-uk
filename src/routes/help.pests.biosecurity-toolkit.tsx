import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "biosecurity toolkit — BALI";
const DESC = "The Landscape Institute has published a new plant health and biosecurity toolkit to help built environment professionals combat Britain’s biggest pests and…";

export const Route = createFileRoute("/help/pests/biosecurity-toolkit")({
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
      eyebrow="Pests & diseases"
      title={`biosecurity toolkit`}
      intro={`The Landscape Institute has published a new plant health and biosecurity toolkit to help built environment professionals combat Britain’s biggest pests and diseases.`}
      body={
        <>
          <p>Launched in partnership with the Society of Garden Designers (SGD), the British Association of Landscape Industries (BALI) and the Association of Professional Landscapers (APL), the resource is a huge milestone in collaborative working, and the first comprehensive, dedicated biosecurity guide for landscape architects, garden designers, consultants and contractors.</p>
          <p>The purpose of the toolkit is to identify best practice across the sector and embed agreed systematic biosecurity protocols into every stage of a landscape project in a way that has never before been achieved.</p>
          <h3>documents</h3>
          <ol><li>Plant Health and Biosecurity: The Landscape Consultant's Toolkit 11 Apr 2019 586kb PDF</li></ol>
        </>
      }
    />
  );
}
