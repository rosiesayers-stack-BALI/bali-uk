import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "canker stain of plane — BALI";
const DESC = "Ceratocystis platani, which may also be referred to as plane wilt disease, is a serious threat to several plane species, including London plane (Platanus x…";

export const Route = createFileRoute("/help/pests/canker-stain-of-plane")({
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
      title={`canker stain of plane`}
      intro={`Ceratocystis platani, which may also be referred to as plane wilt disease, is a serious threat to several plane species, including London plane (Platanus x acerifolia) and its parents, Platanus orientalis and Platanus occidentalis. Whilst the fungus that causes canker stain of plane is not yet in the UK, it is now in Italy, France and Greece, and responsible for notable tree fatalities.The fungus can infect specimens through wounds in bark or stems as well as root-to-root contact.  As the fungus spreads, it may disrupt the water transport system of the tree and cause cankers. Whilst these cankers may be recognisable only as longitudinal cracks on larger, thicker barked trees, removal of the bark will reveal staining - hence the name ‘Canker stain of plane’.`}
      body={
        <>
          <h3>documents</h3>
          <ol><li>Canker stain of plane 22 Jul 2019 243kb PDF</li></ol>
        </>
      }
    />
  );
}
