import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Asian Longhorn Beetle — BALI";
const DESC = "The Asian Longhorn Beetle, which was first discovered in Kent in 2012 and likely imported by accident through infested imported wood packaging material, ha…";

export const Route = createFileRoute("/help/pests/asian-longhorn-beetle")({
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
      eyebrow="Pests & diseases"
      title={`Asian Longhorn Beetle`}
      intro={`The Asian Longhorn Beetle, which was first discovered in Kent in 2012 and likely imported by accident through infested imported wood packaging material, has been eradicated in the UK as a result of six years of trapping and surveillance work by the Forestry Commission and the Animal and Plant Health Agency.`}
      body={
        <>
          <p>Find out more about the Asian Longhorn Beetle and updated information regarding the pest using the downloadable document on this page.</p>
          <h3>documents</h3>
          <ol><li>Asian Longhorn Beetle 29 May 2019 324kb DOCX</li></ol>
        </>
      }
    />
  );
}
