import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Safe Digging — BALI";
const DESC = "Earlier this month a groundworks contractor was fined £32,400 and ordered to pay costs of £2657,18 for breaching Construction (Design and Management) Regul…";

export const Route = createFileRoute("/help/health-safety/safe-digging")({
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
      title={`Safe Digging`}
      intro={`Earlier this month a groundworks contractor was fined £32,400 and ordered to pay costs of £2657,18 for breaching Construction (Design and Management) Regulations (CDM) which resulted in one of its employees sustaining serious burns to his face, chest, abdomen, groin, both arms and legs, amounting to roughly 50% of his total body.`}
      body={
        <>
          <h3>As indicated in the HSE report, following a safe system of work avoids any serious injuries and fines from safe digging.</h3>
          <p>These burns were caused when an electric breaker used by an operative struck an 11kv electricity cable. Of significance to the landscape industry is the photo included in the Health and Safety Executive’s report, below:</p>
          <p>The image above shows a situation which many landscape operatives face on a regular basis: digging (relatively shallow) holes in unfamiliar areas of grass. In this instance the operative had used an electronic breaker to break through concrete haunching at the back of a kerb with the intention of installing a new fence. The hole was relatively shallow when the incident occurred.</p>
          <p>As indicated in the HSE report, following a safe system of work would have avoided this situation. A sae system in this instance consists of three elements:</p>
          <ol><li>Planning the work</li><li>Detecting, identifying and marking underground services</li><li>Safe excavation/safe digging practices</li></ol>
          <p>Each of these steps are critical to ensure the safety of operatives breaking ground in any situation.</p>
          <p>Most underground electrical cables are laid in trenches between 450mm and 1m deep. However, the location of cables should never be assumed – as is shown in the picture above.</p>
          <p>The HSE have produced a free, detailed guide on how to avoid the dangers associated with breaking ground: http://www.hse.gov.uk/pUbns/priced/hsg47.pdf</p>
        </>
      }
    />
  );
}
