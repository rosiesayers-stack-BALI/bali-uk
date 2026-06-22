import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "silica dust — BALI";
const DESC = "The risks associated with asbestos are widely publicised nowadays and, hopefully, the number of fatalities associated with this material will be reduced du…";

export const Route = createFileRoute("/help/health-safety/silica-dust")({
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
      eyebrow="Health & safety"
      title={`silica dust`}
      intro={`The risks associated with asbestos are widely publicised nowadays and, hopefully, the number of fatalities associated with this material will be reduced due to the increased awareness. However, another material – silica dust – is equally damaging to the human respiratory system and found in many of the materials landscape operatives are likely to encounter on a daily basis.`}
      body={
        <>
          <h3>Whilst awareness of asbestos is now universal, another material – silica dust – is equally damaging to the human respiratory system and found in most materials used by the landscape industry</h3>
          <p>Limestone, sandstone, ironstone, marble, granite, concrete, aggregates, mortar, bricks, tiles and slate all contain silica.  The silica in these materials is harmless if undisturbed, but drilling, cutting, breaking or grinding can generate dust particles of silica which are harmful to health.</p>
          <p>Small particles of silica remain airborne for a significant period of time, during which they may be inhaled by unprotected operatives.  The small size of silica particles allow them to be inhaled deep into the lungs, where they remain lodged.  The body is unable to remove the particles, which means they cause inflammation and scarring. In the long-term, this can cause lung diseases.</p>
          <p>Appropriate management of exposure to silica dust is of critical importance to the health and well-being of employees. The points below are intended as a guide only, and an expert should be consulted to ensure all risks are correctly identified and appropriate control measures implemented.</p>
          <p>1. Stop silica dust getting into the air; where possible, materials could be cut off-site, in a facility where there are fewer receptors to the dust;</p>
          <p>2. Identify the tasks which will require cutting, drilling, breaking or grinding; 3. Landscape construction works are likely to involve use of hand-held equipment, such as disc cutters, angle grinders or drills. The primary method of silica dust control on this equipment would be wet dust suppression and local exhaust ventilation; 4. Regardless of the primary type of dust control, suitable respiratory protective equipment (RPE) will also be required by the machinery operator, and possibly other staff working in proximity of the works. The type of RPE is likely to take the form of a full or half-mask respirator. Various levels of protection are available, and wearers should be appropriately trained and face fit tested for equipment.</p>
          <h4>Further information</h4>
          <p>Dust control on cut-off saws used for stone or concrete (HSE Document)</p>
          <p>Institution of Occupational Safety and Health (IOSH) resource pack</p>
        </>
      }
    />
  );
}
