import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "moving plants within the UK — BALI";
const DESC = "Guidance for landscape professionals on moving plants within the uk.";

export const Route = createFileRoute("/help/plant-health/plant-passports")({
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
      title={`moving plants within the UK`}
      intro={`Guidance for landscape professionals on moving plants within the uk.`}
      body={
        <>
          <h4>All landscape professionals have responsibilities in relation to plant health.  Please select the button below that applies to you:</h4>
          <h3>Designer</h3>
          <h3>Domestic landscape contractor</h3>
          <h3>Commercial landscape contractor</h3>
        </>
      }
    />
  );
}
