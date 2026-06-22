import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Tractors — BALI";
const DESC = "Following requests from members, the Association has worked with a specialist transport solicitor to clarify what driving licence entitlement is required w…";

export const Route = createFileRoute("/help/equipment/tractors")({
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
      title={`Tractors`}
      intro={`Following requests from members, the Association has worked with a specialist transport solicitor to clarify what driving licence entitlement is required when driving a tractor as part of a landscape or horticultural activity.`}
      body={
        <>
          <p>Click the button below to access the guidance.</p>
          <h3>tractor license entitlement</h3>
        </>
      }
    />
  );
}
