import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "FAQ — BALI";
const DESC = "What is the purpose of a plant passport? Why has the use of plant passports been increased? My business deals with a variety of plants, how do I know which…";

export const Route = createFileRoute("/help/plant-health/faq")({
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
      eyebrow="Plant health"
      title={`FAQ`}
      intro={`What is the purpose of a plant passport? Why has the use of plant passports been increased? My business deals with a variety of plants, how do I know which ones require a plant passport? Do I need to issue a plant passport when moving plants or plant products from one of my premises to the other? Are there any exceptions to the plant passport rule? Where can I find Part A and Part B on a Plant Passport?`}
      body={
        <>
          <h3>Frequently Asked Questions</h3>
          <h4>Contents</h4>
          <p>What is the purpose of a plant passport?</p>
          <p>Plant passports ensure that plants and plant products are traced throughout the supply chain and declares compliance with plant health requirements such as freedom from pests, which is essential for maintaining biosecurity.</p>
          <p>Why has the use of plant passports been increased?</p>
          <p>Plant passports allows the UK to take a more proactive approach to plant health, instead of a reactive approach. Therefore in the future we will be able tackle pest threats to industry and the environment as they emerge.</p>
          <p>My business deals with a variety of plants, how do I know which ones require a plant passport?</p>
          <p>The following require a plant passport for movement within the UK:</p>
          <p>• all plants for planting; • root and tubercle vegetables; • some common fruits other than fruit preserves by deep freezing; • some cut flowers; • some seeds ; • leafy vegetables other than vegetables preserved by deep freezing; • potatoes from some countries; • machinery or vehicles which have been operated for agricultural or forestry purposes.</p>
          <p>For a full list of plants, plant products and other objects for which a plant passport is required for movement within the Union territory from 14 December 2019, please click here</p>
          <p>Do I need to issue a plant passport when moving plants or plant products from one of my premises to the other?</p>
          <p>If you move regulated material between your own premises that are more than 10 miles apart a plant passport must be issued.  The reason for this is to maintain traceability of that material.  Journeys between premises of less than 10 miles do not require a plant passport.</p>
          <p>Are there any exceptions to the plant passport rule?</p>
          <p>From 1st January 2021 imports into the UK from the EU will require a phytosanitary certificate upon departure from the EU.  If the plant material is going direct to site and being planted at this same site, the phytosanitary certificate issued in the EU can accompany the consignment to that site and no additional plant passport is required.</p>
          <p>Note: If the operator in question met any of the below criteria, a UK plant passport would need to be issued:</p>
          <p>Moving material to another professional operator; Selling material to final users (those buying for personal use) by means of distance contract, e.g. online; Moving material to another of their own premises which is more than 10 miles from the premises to which the consignment arrived; If the phytosanitary status of the consignment changes, for example, if it has been grown on or if they have been reconfigured (e.g. two plants in separate pots have been planted up in a new pot together).</p>
          <p>Where can I find Part A and Part B on a Plant Passport?</p>
          <p>Part A and Part B are highlighted in the boxes below.  Note the distinction between the proposed UK Plant Passport (left) to be used from 1st January 2021 and the current EU Plant Passport (right).</p>
          <p>Please note: Whilst the size and layout of plant passports may differ between consignments, the information contained should be in the format below.</p>
        </>
      }
    />
  );
}
