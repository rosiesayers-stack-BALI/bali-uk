import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Plant Health Information — BALI";
const DESC = "Landscape professionals have an important role to play in protecting UK plant health. Plant passports, post-Brexit arrangements, importing, exporting, biosecurity — what you need to know.";

export const Route = createFileRoute("/help/plant-health")({
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

const SUB = [
  { title: "Moving plants and plant products within GB", description: "UK Plant Passports — what they are, when you need one, and how to issue them.", href: "https://www.bali.org.uk/help-and-advice/plant-health/plant-passports/" },
  { title: "Importing plants and plant products from the EU to GB", description: "Post-Brexit plant health arrangements and phytosanitary certificate requirements.", href: "https://www.bali.org.uk/help-and-advice/plant-health/post-brexit-plant-health-arrangements/" },
  { title: "Exporting plants and plant products", description: "What landscape businesses exporting from GB need to do.", href: "https://www.bali.org.uk/help-and-advice/plant-health/exporting-plants-and-plant-products/" },
  { title: "Glossary", description: "Key terms used across the UK plant health regime.", href: "https://www.bali.org.uk/help-and-advice/plant-health/glossary/" },
  { title: "FAQ", description: "Common questions on plant passports, imports and biosecurity.", href: "https://www.bali.org.uk/help-and-advice/plant-health/faq/" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Biosecurity"
      title="Plant Health Information"
      intro="Plant health is under threat. Climate change and human activities have altered ecosystems, reduced biodiversity, and created new niches where pests and diseases can thrive. Landscape professionals have an important role to play in protecting our precious planet."
      body={
        <>
          <p>
            Plant pests and diseases are often impossible to eradicate once they have established, and managing them is time-consuming and expensive. Prevention is critical to avoiding the devastating impact of pests and diseases on the environment.
          </p>
          <h3>The landscape industry has an important role to play</h3>
          <p>
            Updated plant health regulations were introduced by the European Union during December 2019 to prevent the spread of pests and diseases, and place responsibilities on all landscape professionals. Most EU plant health regulations were adopted by the UK upon departure from the EU in December 2020.
          </p>
          <p>
            Use of UK plant passports is required for most movements of plants and plant material within the UK from January 2021. Plants and plant material imported into the UK from the EU will require a phytosanitary certificate upon entry.
          </p>
        </>
      }
      subTopics={SUB}
    />
  );
}
