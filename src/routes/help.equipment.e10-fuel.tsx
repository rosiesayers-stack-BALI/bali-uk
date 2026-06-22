import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "e10 fuel — BALI";
const DESC = "The proportion of ethanol in standard unleaded petrol has now increased to 10% and is labelled ‘E10’ to reflect this change.";

export const Route = createFileRoute("/help/equipment/e10-fuel")({
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
      title={`e10 fuel`}
      intro={`The proportion of ethanol in standard unleaded petrol has now increased to 10% and is labelled ‘E10’ to reflect this change.`}
      body={
        <>
          <p>Engines fitted to landscape equipment sold within the past 10 years are generally compatible with petrol containing ethanol, to the extent that materials used in their manufacture are resistant to the potentially corrosive effects of ethanol.  Although guidance differs between manufacturers (and the instruction manual should be the first point of reference), most equipment sold within the last 10 years can be run on either E5 or E10 petrol without modification.</p>
          <p>Regardless of this compatibility, however, is the need to review storage of equipment run on E10 fuel.</p>
          <p>Due to its propensity to absorb – and later separate – from water, ethanol in E10 petrol can cause water (for example, condensation) to settle within parts of the engine such as the fuel tank, carburettor, or fuel injection system and cause difficult starting and/or corrosion.  Consequently, landscape equipment stored with E10 fuel for a period of more than 30 days may be difficult to start and require fuel draining from the fuel system prior to use.</p>
          <p>Ethanol can cause problems in older machinery by dissolving soft materials used in parts such as seals and gaskets, not designed to be immersed in petrol which contains ethanol.  Prolonged exposure to ethanol can result in parts failing, resulting in fuel leaks or poorly running engines.  When in long term storage (for example, during the winter), fuel containing ethanol may also become acidic and cause corrosion of aluminium, zinc and galvanised materials, brass, copper and lead/tin coated steels – all of which are likely to be found in older engines.</p>
          <p>Owners of older equipment, or those wishing to avoid running their equipment on fuel with 10% ethanol, have options:</p>
          <ol><li>Several manufacturers offer fuel compatible with new and old landscape equipment which contains no ethanol.  For example, BALI affiliate member Stihl produce Moto4Plus for 4-stroke engines and MotoMix for 2-stroke engines. Aspen is another brand who offer ethanol free fuels and pre-mixed 2-stroke fuel for landscape equipment.</li><li>From September 2021, all super-unleaded fuel will be sold with a lower 5% ethanol content for the foreseeable future.  This fuel is more expensive than standard unleaded but ensures greater compatibility with older engines due to the lower ethanol content.</li></ol>
          <p>From September 2021, all super-unleaded fuel will be sold with a lower 5% ethanol content for the foreseeable future.  This fuel is more expensive than standard unleaded but ensures greater compatibility with older engines due to the lower ethanol content.</p>
          <p>Regardless of equipment age, the correct procedure should be followed prior to storage of machinery for more than 30 days, to prevent equipment damage and breakdown.</p>
          <p>Guidance differs between manufacturers, with some suggesting all fuel is drained from machines prior to storage, whereas others suggest an additive – commonly called fuel stabiliser - is added to the fuel tank prior to machine storage to prevent petrol from deteriorating.  Owner’s manuals should be the consult if in doubt.  The STIHL and Aspen ethanol-free fuels mentioned in points 1 and 2, above, can remain in machines without issue and generally have a storage life of several years.</p>
        </>
      }
    />
  );
}
