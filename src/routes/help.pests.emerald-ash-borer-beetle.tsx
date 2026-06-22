import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "emerald ash borer beetle — BALI";
const DESC = "Whilst there have been no discoveries in the United Kingdom to date, the ability of the beetle to fly means it has now spread across USA, Canada and Russia…";

export const Route = createFileRoute("/help/pests/emerald-ash-borer-beetle")({
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
      title={`emerald ash borer beetle`}
      intro={`Whilst there have been no discoveries in the United Kingdom to date, the ability of the beetle to fly means it has now spread across USA, Canada and Russia, and is now within 10km of the Russian borders with Ukraine and Belarus.`}
      body={
        <>
          <h3>The emerald ash borer beetle (Agrilus planipennis) is a potential threat to ash trees in the UK.</h3>
          <p>Infestation of ash trees by emerald ash borer is normally fatal. As UK ash trees are already under threat from Chalara ash dieback (which is already established in the UK), it is feared the effect on ash trees from further attacks would be serious.</p>
          <p>As the name suggests, emerald ash borer beetles are a metallic emerald green colour, with adults between 7.5 and 13.5mm long. Unfortunately, infestation of the beetle is difficult to detect until symptoms become severe.  Clues to infestation include:</p>
          <ul><li>Crown dieback and dying branches</li><li>Yellowing and thinning foliage</li><li>D-shaped holes in the bark, produced by adult beetles as they emerge from larval stage</li><li>Serpentine galleries beneath bark of tree</li></ul>
          <p>Members who identify any signs of emerald ash borer are encouraged to contact either the Animal and Plant Agency (APHA) or Forest Research .</p>
          <h3>how to identify the emerald ash borer beetle (Agrilus planipennis)</h3>
        </>
      }
    />
  );
}
