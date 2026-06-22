import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "slopes — BALI";
const DESC = "The Association’s own accident statistics, as well as those of the Health and Safety Executive (HSE), report landscape operatives suffer a disproportionate…";

export const Route = createFileRoute("/help/health-safety/slopes")({
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
      title={`slopes`}
      intro={`The Association’s own accident statistics, as well as those of the Health and Safety Executive (HSE), report landscape operatives suffer a disproportionately high number of accidents whilst completing tasks on slopes.`}
      body={
        <>
          <h3>A code of practice for the landscape industry</h3>
          <h4>Research by the Association revealed incidents on slopes commonly involve one of 2 scenarios:</h4>
          <p>1. operator loses control of ride-on machinery</p>
          <p>- machine loses traction or becomes unstable due to gradient - machine over-turns with operator on-board</p>
          <p>2. operator slips or trips whilst using pedestrian or hand-held equipment, resulting in</p>
          <p>- operator falling - operator losing control or struck by equipment</p>
          <h4>Common causes of incidents include:</h4>
          <ul><li>Machine over-turning due to gradient of slope</li><li>Loss of traction between machine tyres and slope, causing machine to slide</li><li>Sharp steering input from machine operator causing machine to tip</li><li>Operator slips</li><li>Inadequate maintenance of machine/equipment</li></ul>
          <p>Safely completing work on a slope without incident is not a dark-art or subject to luck; it arises from several measures being implemented:</p>
          <ul><li>Site-specific risk assessment</li><li>Equipment suited to the task and site</li><li>Equipment that is correctly maintained</li><li>Knowledgeable and experienced staff</li><li>Detailed briefing document</li><li>Regular review of processes</li></ul>
          <p>Through liaison with members and their own research, the Association discovered there is a gap in knowledge associated with landscape work on slopes; guidance available online is difficult to find or too generic to be of use.</p>
          <p>Therefore the BALI National Contractors Forum undertook a project to identify best practice when working on a gradient, to collate this information and disseminate it as a code of practice document.</p>
          <p>The information within the document is the combined knowledge and experience of established landscape contractors who, over decades, have developed techniques which have allowed them to consistently complete potentially hazardous tasks on slopes without incident.</p>
          <p>The document covers operational issues associated with the use of ride-on machinery, such as lawn mowers and tractors, as well as pedestrian or hand-held equipment such as grass trimmers and knapsack spraying devices.</p>
          <p>Download your free copy below.</p>
          <h4>Additional resources</h4>
          <p>Code of practice document</p>
          <p>Andrew Turner presentation</p>
          <h3>documents</h3>
          <ol><li>Andrew Turner: Slopes Presentation 22 Sep 2023 434kb PDF</li><li>Slopes code of practice document 29 Nov 2023 3965kb PDF</li></ol>
        </>
      }
    />
  );
}
