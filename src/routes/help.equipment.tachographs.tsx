import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Tachographs — BALI";
const DESC = "Are your vehicles fitted with a tachograph? Do you know when to use a tachograph? Do you know when a tachograph is not needed?";

export const Route = createFileRoute("/help/equipment/tachographs")({
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
      title={`Tachographs`}
      intro={`Are your vehicles fitted with a tachograph? Do you know when to use a tachograph? Do you know when a tachograph is not needed?`}
      body={
        <>
          <p>The Association has worked with a specialist transport solicitor to clarify the law concerning use of a tachograph when operating a vehicle and trailer as part of a landscape or horticultural business.</p>
          <p>Click the button below to access the guidance.</p>
          <h3>use of tachographs by landscape contractors</h3>
        </>
      }
    />
  );
}
