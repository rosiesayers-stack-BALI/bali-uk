import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Winter Care — BALI";
const DESC = "The location of outdoor spaces means most are used throughout the year regardless of weather.  Plant growth cycles mean that autumn and winter are a great …";

export const Route = createFileRoute("/help/health-safety/winter-care")({
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
      title={`Winter Care`}
      intro={`The location of outdoor spaces means most are used throughout the year regardless of weather.  Plant growth cycles mean that autumn and winter are a great opportunity to undertake maintenance of a wide range of plant specimens, particularly trees.`}
      body={
        <>
          <h3>There really is no latent period in the landscape maintenance profession.</h3>
          <p>Hard surfaces are equally like to be under pressure, and require maintenance to promote their continued use.</p>
          <p>Grass will continue to grow at a minimum temperature of 14 degrees Celsius, so mowing may continue into the months that are unseasonably mild, subject to the weather and areas being dry enough.</p>
          <p>Leaves and plant debris will need to be removed from grassed area to prevent lawns from dying and from walkways and hard surfaces to prevent pedestrians slipping and the surfaces becoming stained.</p>
          <p>Plant and shrub growth will need to be checked and cut back appropriately if it is overhanging walk ways, cars parks or obscuring lines of sight for vehicles and pedestrians on the property. Rejuvenative pruning can take place through the winter, this presents an opportunity to cut back hard those deciduous shrubs that have become overgrown and give them a chance to produce young new healthy growth, which in turn will produce a healthier shrub with improved flowering.</p>
          <p>Evaluate any areas of soil that have been used as a cut through and may have become compacted leading to soil erosion or uneven surfaces, alleviating compaction through cultivation should take place and replanting or grass seeding can then follow in the spring.</p>
          <p>It’s that time of year when potentially we could have a lot of Ice and snow, last year saw a 52% rise in slips trips and falls during icy and snowy conditions. A close eye should be kept on the weather, checking for warnings concerning potential ice and snow on local weather channels. There are specialty member contractors that focus on preventative and reactive gritting and snow clearance services so that outdoor settings don’t pose a hazard when conditions take a turn for the worse.</p>
          <p>If you have good sized trees, now is the time to check for dead and diseased branches and have them safely removed by a reputable Arboriculturalist.</p>
          <p>Edges are something we take for granted, but we are very reliant on them for guiding us and helping us navigate, whether that be the edge of a path, a road, a grassed area or planted border. When these become overgrown or obscured this increases the chance of injury from slips, trips or falls and damage from vehicles that can’t see where they should be travelling or parking. So, make sure they are well maintained and clearly defined.</p>
          <p>Playground equipment and surfacing should be checked on a regular basis, but with these areas perhaps being a little less used at this time of year, it’s an ideal time to carry out a thorough check through visual checks for signs of damage and wear and tear, along with a tactile test. Timber play equipment should be checked for cracks and anything exceeding 8mm should be reported. Moving parts should be checked and lubricated as necessary. Make sure the safety surface areas are clear of debris and trip hazards and check for sign of wear and tear and replace as needed. A professional inspection should take place at least once a year. If serious defects are detected, then equipment should be immobilised and repaired as soon as possible. All play equipment and surfaces should comply with European Standards of Play Equipment (EN1176) and or Surfacing (EN1177).</p>
          <p>It’s also a great time to check sports surfacing. Continue to keep surfaces free of debris, and in frosty conditions and when snow has settled, keep off artificial grass as walking on the surface can damage the artificial fibres. It is also best to try not to remove snow once its settled but allow it to thaw as removal can again damage the fibres. Avoid applying rock salt or grit as this, once dissolved can cause contamination and damage to the surface. Specialist PDV salts and antifreezes can be applied by contractors to help prevent ice and snow settling, but is not appropriate for all surfaces, so specialist advice should be sort for your type of surface. One of the biggest problem’s artificial surfaces face at this time of the year is the potential to flood, with a build up of contaminates water will be slow to drain, therefore regular brushing and replacement infill materials is essential to keep the areas draining adequately. If flooding and standing water persists, then contractors may need to be contacted to carry out a deep cleaning process and restore the correct drainage properties. If ignored this will only continue to worsen as times goes on.</p>
          <p>Images credited to Accredited Contractor member idverde</p>
        </>
      }
    />
  );
}
