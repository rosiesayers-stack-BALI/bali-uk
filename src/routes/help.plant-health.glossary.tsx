import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Glossary — BALI";
const DESC = "Authorised operator Competent authority Phytosanitary certificate Place of destination Plant passport Professional operator Registered operator Trade Unit";

export const Route = createFileRoute("/help/plant-health/glossary")({
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
      title={`Glossary`}
      intro={`Authorised operator Competent authority Phytosanitary certificate Place of destination Plant passport Professional operator Registered operator Trade Unit`}
      body={
        <>
          <h4>Contents</h4>
          <p>Professional operator</p>
          <p>Any person, governed by public or private law, involved professionally in, and legally responsible for, one or more of the following activities concerning plants, plant products and other objects: (a) planting; (b) breeding; (c) production, including growing, multiplying and maintaining; (d) introduction into, and movement within and out of, the Union territory; (e) making available on the market; (f) storage, collection, dispatching and processing</p>
          <p>Defra suggest you are likely to be a professional operator if: • you regularly sell plants or plant products with a view to making a profit or earn commission from selling plants or plant products for other people or; • your plants and plant products are clearly advertised as for sale to professional operators or; • you grow or produce plants or plant products to sell regularly with a view to making a profit or; • you are paid for a service (e.g. landscaping) you provide relating to plants or plant products.</p>
          <p>A professional operator registered with the appropriate competent authority (e.g. Animal and Plant Health Agency (APHA) in England, Science and Advice for Scottish Agriculture (SASA) in Scotland or Department of Agriculture Environment and Rural Affairs (DAERA) in Northern Ireland.</p>
          <p>A registered operator authorised by the competent authority to issue plant passports or issue any other official phytosanitary attestation.</p>
          <p>A competent authority is any person or organization that has the legally delegated or invested authority, capacity, or power to perform a designated function</p>
          <p>A Plant Passport (PP) is an official label for the movement of regulated plants and plant products within the EU and, where applicable, into and within EU Protected Zones (PZs). It demonstrates compliance with all plant health requirements for the relevant plant or plant product.</p>
          <p>Plant passports must be attached to the smallest trade unit at the applicable stage on the supply chain.  A trade unit could be a box, trolley or tray, so if there are multiple plants of the same commodity, a passport can be attached to that box, trolley or tray.  Alternatively, if a delivery is the final stage of the supply chain, e.g. a van load of plants going direct to a site and not being moved on again, the van would be the trade unit, and a single passport could cover the plants in the van load.</p>
          <p>Place of destination (POD)</p>
          <p>Place of Destination refers to the agreed location to which a shipment is expected to arrive.  In the landscape industry a construction site may serve as a place of destination.  Alternatively, a site depot, yard or plant nursery may also serve as a place of destination.</p>
          <p>Phytosanitary certificate</p>
          <p>A phytosanitary certificate is a statement from a plant health authority that a consignment:</p>
          <p>has been officially inspected complies with legal requirements for entry into the UK is free from serious pests and diseases The inspection referred to in a phytosanitary certificate must take place no more than 14 days before the consignment is dispatched from the country where a supplier is. The certificate must be signed by someone in the inspecting plant health authority within the same 14-day period.</p>
          <p>A phytosanitary certificate is required for each consignment from the plant health authority in the country where a supplier is.  If a consignment includes materials from more than one country, a separate phytosanitary certificate from the plant health authority in each country will be required.</p>
        </>
      }
    />
  );
}
