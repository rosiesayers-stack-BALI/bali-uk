import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "eight-toothed spruce bark beetle — BALI";
const DESC = "Ips typographus, also known as European spruce bark beetle, eight-toothed spruce bark beetle, bark beetle, eight-dentate beetle, engraver beetle, eight-spi…";

export const Route = createFileRoute("/help/pests/eight-toothed-spruce-bark-beetle")({
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
      title={`eight-toothed spruce bark beetle`}
      intro={`Ips typographus, also known as European spruce bark beetle, eight-toothed spruce bark beetle, bark beetle, eight-dentate beetle, engraver beetle, eight-spined beetle and spruce bark beetle, is considered a serious pest of spruce ( Picea ) as well as some species in other conifer genera in Europe.`}
      body={
        <>
          <p>The beetle is mainly a secondary pest, meaning it prefers dead, stressed or weakened trees.  However, under some environmental conditions its number can increase and attack healthy trees. The pest has the potential to cause significant damage to the United Kingdom’s spruce-based forestry and timber industries.</p>
          <p>In England the pest was first found in Kent in 2018, and as a precaution a demarcated area established where movement of materials and methods of forest operations have been restricted. In 2024 the pest was found on a small number of cut and fallen Sitka spruce trees in close proximity to infested Norway spruce trees on a site in West Sussex.</p>
          <p>As of June 2024 the demarcated area has been extended to cover parts of Lincolnshire, Bedfordshire, Cambridgeshire, Norfolk and Suffolk in addition to parts of Hampshire, Berkshire, Buckinghamshire, Hertfordshire, Surrey, City and County of the City of London, Greater London, East Sussex, West Sussex, Kent and Essex. Click here to view a detailed map of the demarcated area.</p>
          <p>The following conditions apply in demarcated areas:</p>
          <p>(i) Restrictions on the felling of susceptible material without prior notification. Landowners must provide notice of their intention to fell relevant material at least 14 days in advance of any felling in the demarcated areas. Felling may only commence once written authorisation is provided the Forestry Commission.</p>
          <p>(ii) Restrictions on the killing of trees (either by ring-barking, chemical injection or application, mechanical means, biological control or arboricultural intervention) of the genus Picea A. Dietre over three meters in height, without prior notification. All operations must be agreed in writing by the Forestry Commission.</p>
          <p>(iii) Prohibition on susceptible material being left in situ, unless authorised in writing by a plant health inspector.</p>
          <p>(iv) Prohibition on the movement of spruce (Picea) material with bark (for example, wood with bark, isolated bark, live trees over 3 metres) that has originated within the demarcated area.</p>
          <p>Whilst it was believed the pest was accidentally introduced via imported wood or wood packaging, more recent research suggests the beetle can naturally disperse across the channel.</p>
          <p>Whilst only landowners and timber processors are likely to be affected by the current restrictions on movement of material, establishment of the pest in Great Britain is likely to affect a broad spectrum of stakeholders. Landscape professionals are urged to remain vigilant for signs of the pest and report suspected sightings anywhere in Great Britain using the Tree Alert Form .</p>
          <p>Forest Research website: Larger eight-toothed European spruce bark beetle (Ips typographus)</p>
          <p>The Official Controls (Plant Health and Genetically Modified Organisms) (England) Regulations 2019 The Plant Health (Ips typographus) (Demarcated Area No. 6) Notice</p>
          <p>Defra press release: New warning as Ips typographus tree pest found on new species</p>
        </>
      }
    />
  );
}
