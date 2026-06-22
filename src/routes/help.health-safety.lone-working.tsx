import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Lone Working — BALI";
const DESC = "Managing the risks associated with lone working involves considering which employees are likely to work alone, and which areas of their work pose a hazard.…";

export const Route = createFileRoute("/help/health-safety/lone-working")({
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
      title={`Lone Working`}
      intro={`Managing the risks associated with lone working involves considering which employees are likely to work alone, and which areas of their work pose a hazard. Employers have a responsibility to ensure they train, supervise, and monitor lone workers, as well as keep in touch with them.`}
      body={
        <>
          <h3>As with any other work-related task, employers have a responsibility to manage the risk employees face when working alone.</h3>
          <p>As the Health and Safety Executive (HSE) defines a lone worker as ‘ anyone who works by themselves without close or direct supervision ’, most landscape professionals are likely to fit within the definition at some point in their working life.</p>
          <p>Social distancing guidance issued by the government during the coronavirus pandemic had the potential to create additional lone workers in many BALI member companies, who must be identified and managed appropriately. This management extends to employees now working from home instead of an office.</p>
          <p>Risks of relevance to lone workers on sites and at home include:</p>
          <ul><li>The place of work (e.g. isolated or rural location)</li><li>A person’s medical suitability</li><li>Stress and mental wellbeing</li><li>Violence directed towards the lone worker from the public</li></ul>
          <h3>Training</h3>
          <p>It is particularly important lone workers understand the risks associated with their work and how to control these. Training is essential where supervision may not be available in uncertain situations, or where workers need to cope with unexpected situations.</p>
          <p>It is also important for workers to understand the limitations of their role whilst lone working, and able to recognise when they should seek advice or support from other members of staff.</p>
          <h3>Supervision</h3>
          <p>Regardless of the need to work alone, workers must also be supervised appropriately. Higher risk tasks and workers’ ability to identify health and safety issues dictate the need for additional supervision. Even if they have been trained, new workers must be supervised initially, particularly if they are undertaking a job with specific risks and are required to deal with situations that are new to them.</p>
          <h3>Monitoring</h3>
          <p>Lone workers must be monitored, regardless of whether they are on-site or working from home. Share details of monitoring systems with lone workers, including procedures. Popular methods of monitoring include:</p>
          <ul><li>Arranging pre-arranged visitors from supervisors</li><li>Knowing where lone workers are at all times, with regular contact using phones, radios and email.  The frequency of this contact may vary from hourly to daily depending on the site</li><li>Systems for raising alarm where worker needs help or support immediately, or where worker fails to check-in with supervisor at a predetermined time.</li></ul>
          <h3>Additional information</h3>
          <p>HSE Guide: Lone working</p>
          <p>The British Association of Landscape Industries has produced a generic lone worker risk assessment, available to members free of charge. Please contact our Technical Officer Owen Baker owen.baker@bali.org.uk to receive a copy of this. If you are not a member and would like access to similar documents, please consider a membership and make an enquiry today.</p>
        </>
      }
    />
  );
}
