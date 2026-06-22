import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "hand arm vibration — BALI";
const DESC = "Landscape tools which fit into this category include chainsaws, brush cutters, hedge trimmers, blowers and disc cutters. Using this equipment on a regular …";

export const Route = createFileRoute("/help/health-safety/hand-arm-vibration")({
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
      title={`hand arm vibration`}
      intro={`Landscape tools which fit into this category include chainsaws, brush cutters, hedge trimmers, blowers and disc cutters. Using this equipment on a regular basis for several hours each day can cause damage to nerves, blood vessels and joints of the hand, wrist and arm. The damage is irreversible, and can result in tingling and numbness in the fingers, loss of dexterity and even loss of strength.`}
      body={
        <>
          <h3>Hand-arm vibration is a health issue caused by prolonged exposure to vibration, usually from vibrating equipment such as hand-held tools or hand-guided tools.</h3>
          <h3>Property Management company fined £600,000 after 5 workers diagnosed with HAVS</h3>
          <p>A property management and development company has been fined £600,000 and ordered to pay costs of £13,995.06 after pleading guilty to breaching Section 2(1) of the Health and Safety at work Act 1974.</p>
          <p>A court heard that between 2009 and 2014 five employees working for Places for People used power tools to carry out grounds maintenance at sites in Milton Keynes, Rotherham and Hull.  An investigation by the HSE discovered the company failed to assess or manage the risks associated with vibrating tools, failed to provide training or health surveillance for its maintenance workers, and failed to maintain equipment appropriately.</p>
          <p>Members not committed to providing health surveillance, particularly in relation to hand arm vibration syndrome, are advised to pay attention to this substantial fine imposed for failure to identify and manage hand arm vibration.   HAVS risk assessment and health surveillance is essential where the workforce uses handheld power tools.</p>
          <p>The HSE provides a significant amount of free information and guidance for employers eager to stay within the law, including clear guidance on how to stay within the law. Specifically, employers are required to:</p>
          <ul><li>Assess the vibration risk to your employees;</li><li>Take action to reduce vibration exposure that produces those risks</li><li>Decide if employees are likely to be exposed above the:</li><li>Daily exposure action value (EAV) and if they are:</li><li>introduce a programme of controls to eliminate risk, or reduce exposure to as low a level as is reasonably practicable;</li><li>Daily exposure limit value (ELV) and if they are:</li><li>take immediate action to reduce their exposure below the limit value;</li><li>Make sure the legal limits on vibration exposure are not exceeded;</li><li>Provide information and training to employees on health risks and the actions you are taking to control those risks;</li><li>Carry out health surveillance (regular health checks) where there is a risk to health;</li><li>Consult your trade union safety representative or employee representative on your proposals to control risk and to provide health surveillance</li><li>Keep a record of your risk assessment and control actions;</li><li>Keep health records for employees under health surveillance;</li><li>Review and update your risk assessment regularly.</li></ul>
          <p>For additional information visit http://www.hse.gov.uk/vibration/hav/advicetoemployers/responsibilities.htm</p>
          <h3>documents</h3>
          <ol><li>Health surveillance for hand-arm vibration syndrome 7 Aug 2019 280kb PDF</li><li>HSE exposure calculator 25 Sep 2019 254kb PDF</li></ol>
        </>
      }
    />
  );
}
