import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Ash Dieback — BALI";
const DESC = "Ash dieback was first identified in the UK in 2012. The disease is well established throughout mainland Europe, where it is responsible for losses of comme…";

export const Route = createFileRoute("/help/pests/ash-dieback")({
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
      title={`Ash Dieback`}
      intro={`Ash dieback was first identified in the UK in 2012. The disease is well established throughout mainland Europe, where it is responsible for losses of commercial and amenity tree planting.`}
      body={
        <>
          <p>Spread by a fungus called Hymenoscyphus fraxineus, the disease is often simply referred to as ‘ash dieback’ due to the symptoms on infected trees: leaf loss, crown dieback and bark lesions.</p>
          <p>Once infected, trees are likely to die either as a direct result of the disease or will succumb to other diseases.  Three tree and shrub species in the same family (Oleaceae) as ash, including mock privet, narrow-leaved mock privet and white fringe tree are also susceptible to the disease.</p>
          <h3>documents</h3>
          <ol><li>Ash dieback found on three new host species of tree in the UK 15 Jul 2019 423kb PDF</li><li>True cost of Ash dieback revealed 8 May 2019 356kb PDF</li><li>Ash Dieback Action Plan Toolkit 4 Apr 2019 950kb DOCX</li></ol>
        </>
      }
    />
  );
}
