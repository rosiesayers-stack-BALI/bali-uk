import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Risk Assessments — BALI";
const DESC = "The Management of Health and Safety at Work Regulations 1999 requires the following measures as a minimum:";

export const Route = createFileRoute("/help/health-safety/risk-assessments")({
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
      title={`Risk Assessments`}
      intro={`The Management of Health and Safety at Work Regulations 1999 requires the following measures as a minimum:`}
      body={
        <>
          <h3>The law requires all employers to protect their employees, and others, from harm.</h3>
          <ul><li>Identify the hazards that could cause injury or illness in your business</li><li>Evaluate the likelihood that someone could be harmed and the severity of this risk</li><li>Eliminate the hazard if possible, and if not, control the risk</li></ul>
          <p>Whilst it is not necessary for employers to eliminate all risks associated with their business practices, it is essential that measures are taken to do everything reasonably practicable to protect people from harm.</p>
          <p>For most small and medium-sized landscape businesses, risk assessment is a straightforward process and does not require the person undertaking the risk assessment process to possess any additional training or qualifications.</p>
          <p>Association members have free access to a variety of risk assessment and method statement templates, ranging from a single table to a suite of risk assessment documents covering the most common landscape construction and maintenance tasks.</p>
          <p>Suited to smaller businesses completing multiple domestic projects of a similar nature.</p>
          <ul><li>Introduction to risk assessment</li><li>Risk assessment and method statement document</li></ul>
          <p>Suited to businesses completing a wide variety of construction or grounds maintenance projects including work for commercial clients.</p>
          <ul><li>Guidance document</li><li>Inventory</li><li>Blank template</li><li>51 risk assessment and method statement documents</li><li>COVID-19 risk assessment</li></ul>
          <p>If you would like to become a member and access the documents on this page please make an enquiry today.</p>
        </>
      }
    />
  );
}
