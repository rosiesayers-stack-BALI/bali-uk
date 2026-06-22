import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "driving for better business — BALI";
const DESC = "The Driving for Better Business (DfBB) initiative was introduced by National Highways (formerly Highways England/Highways Agency) to help employers in the …";

export const Route = createFileRoute("/help/equipment/driving-for-better-business")({
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
      eyebrow="Machinery & driving"
      title={`driving for better business`}
      intro={`The Driving for Better Business (DfBB) initiative was introduced by National Highways (formerly Highways England/Highways Agency) to help employers in the private and public sectors reduce work-related road risk, protecting staff who drive or ride for work, and others who they may share the road with.  The initiative offers a range of information regarding all aspects of vehicle driving and operations.`}
      body={
        <>
          <p>Leaders of the DfBB initiative have invited the Association to become strategic partners due to the landscape industry's reliance on light commercial vehicles for operations - but also their poor track record during road-side checks.</p>
          <p>National Highways warns recent campaigns targeted at vans have revealed the following trends:</p>
          <p>- Two thirds of vans stopped at the roadside by the DVSA have a serious mechanical defect - 40% of vans were prohibited from continuing their journey during roadside checks. - Half of all new vans will fail their MOT at first attempt</p>
          <p>The Van Driver Toolkit provides Association members with free access to a range of materials aimed at helping them understand their responsibilities as a driver or employer.  Topic areas include:</p>
          <ul><li>Licensing</li><li>Fitness to drive</li><li>Driving safely</li><li>Restrictions</li><li>Smarter driving</li><li>Seasonal driving</li></ul>
          <p>Click here to access the Van Driver Toolkit</p>
        </>
      }
    />
  );
}
