import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Machinery & Driving — BALI";
const DESC = "Essential information on equipment and operating rules for landscape professionals — towing, tachographs, rebated fuel, E10 fuel, tractor licences, driving for better business.";

export const Route = createFileRoute("/help/equipment")({
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
  { title: "Towing", description: "Towing a trailer — licences, weights and the law.", href: "https://www.bali.org.uk/help-and-advice/equipment/towing-a-trailer/" },
  { title: "Tachographs", description: "When tachographs are required and how to stay compliant.", href: "https://www.bali.org.uk/help-and-advice/equipment/tachographs/" },
  { title: "Rebated (red) fuel", description: "Rules around using rebated diesel on the road and on site.", href: "https://www.bali.org.uk/help-and-advice/equipment/red-diesel-v2/" },
  { title: "E10 fuel", description: "What E10 means for landscape machinery and older equipment.", href: "https://www.bali.org.uk/help-and-advice/equipment/e10-fuel/" },
  { title: "Tractor licences", description: "Categories, age requirements and what you can drive.", href: "https://www.bali.org.uk/help-and-advice/equipment/tractors/" },
  { title: "Driving for better business", description: "Industry programme helping employers manage work-related road risk.", href: "https://www.bali.org.uk/help-and-advice/equipment/driving-for-better-business/" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Machinery & driving"
      title="Machinery & Driving"
      intro="Essential information on equipment and operating rules. Landscape work involves trailers, tractors, fuel and tools — each with its own legal and safety framework. Use the resources below to stay compliant and protect your team."
      subTopics={SUB}
    />
  );
}
