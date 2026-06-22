import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "water abstraction — BALI";
const DESC = "The abstraction of water is managed by the government. Most businesses taking more than 20,000 litres of water a day directly from rivers or groundwater re…";

export const Route = createFileRoute("/help/law/water-abstraction")({
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
      eyebrow="Law & legislation"
      title={`water abstraction`}
      intro={`The abstraction of water is managed by the government. Most businesses taking more than 20,000 litres of water a day directly from rivers or groundwater require an abstraction license. Following review and consultation, shortcomings were identified in the existing system of abstraction, which led to the government introducing a series of new measures in 2016. Over the next few years, rules concerning abstraction are likely to change and may affect Association members.`}
      body={
        <>
          <h3>Water abstraction refers to the process of taking or extracting water from a natural source (rivers, lakes, groundwater aquifers, etc.) for various uses, from drinking to irrigation, treatment, and industrial applications.</h3>
          <p>Historically, taking water from the environment for certain uses and from certain sources could be done without a license. These uses and sources were called ‘exempt activities’ and included, amongst others:</p>
          <p>• All forms of irrigation including trickle</p>
          <p>• Abstractions from previously exempt areas</p>
          <p>It is likely that our members may have been using water under these exemptions. From 1st January 2018, new Environment Agency regulations came into effect, which mean these previously exempt activities cannot continue without an abstraction license. Upon changing the exemption guidelines, the Environment Agency declared a 2-year transitional period which ends on 31st December 2019. Any members who abstract more than 20 cubic metres (m3 ) per day for any previously exempt activities and want to continue to do so, must apply to the Environment Agency for a water resources abstraction license.</p>
          <p>Any persons who fail to notify the Environment Agency before the end of 2019 will automatically lose their right to abstract and be liable for enforcement action. The Environment Agency will assess all licenses applied for during the transitional period by 31 December 2022, and organisations can continue to legally abstract water until this decision is made.</p>
          <h3>Developing a stronger catchment focus</h3>
          <p>A catchment is a geographical area within which rainwater and groundwater collect and contribute to the flow of a specific river. We believe that working collaboratively at a catchment scale will improve understanding of local challenges and help identify the right solutions for individual catchments.</p>
          <p>The Environment Agency will support this by engaging with abstractors and existing local groups, such as catchment partnerships, in catchments facing the greatest challenges. This will produce updated abstraction licensing strategies that detail the solutions to environmental issues and set out approaches to help abstractors access the water they need. The figure below summarises the approach the Environment Agency will take.</p>
          <p>A free hotline and bookable appointment service have been setup to help with drafting applications for previous exemptions or answering any questions about the changes to abstraction licences. The Environment Agency may be contacted via telephone 03708 506506 or emailed: enquiries@environment-agency.gov.uk .</p>
          <p>Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.</p>
          <h3>documents</h3>
          <ol><li>Change to abstraction licensing rules 31 Jul 2019 257kb PDF</li></ol>
        </>
      }
    />
  );
}
