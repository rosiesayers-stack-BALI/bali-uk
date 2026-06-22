import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Bats And Rabies — BALI";
const DESC = "Whilst bats in the UK can carry the disease, rabies, it is not the classical rabies associated with dogs and horror movies. Some bats in the UK carry a typ…";

export const Route = createFileRoute("/help/health-safety/bats-and-rabies")({
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
      title={`Bats And Rabies`}
      intro={`Whilst bats in the UK can carry the disease, rabies, it is not the classical rabies associated with dogs and horror movies. Some bats in the UK carry a type of rabies virus called European Bat Lyssaviruses (EBLV).`}
      body={
        <>
          <h3>Rabies on bats in the UK is extremely rare. However, contracting rabies can be fatal and remains a risk for landscape operatives working on sites where bats may be living.</h3>
          <p>The risk of catching the virus from a bat in the UK is very low; surveillance of bats in the UK has identified a very low number infected. EBLV is transmitted only through a bite of an infected bat or by its saliva entering a wound or mucous membrane such as the nostrils, mouth and lips, eyelids and ears. Direct contact between landscape operatives and bats is also rare.</p>
          <p>However, a risk remains. In 2002 a batworker from Scotland died from EBLV, and earlier this month the Animal and Plant Health Agency (APHA) confirmed a dead bat found in Poole, Dorset, carried the virus. Landscape operatives may work in the proximity of bats, particularly on works associated with old buildings.</p>
          <p>EBLV can be treated by GPs, but it is essential this is administered as soon as possible after exposure. It is also important to be aware of symptoms on humans infected:</p>
          <ul><li>Anxiety, headaches and fever in early stages</li><li>Spasms of the swallowing muscles making it difficult or impossible to drink</li><li>Breathing difficulties Operatives who are bitten or scratched by a bat must:</li><li>Wash the wound or contact area with soap and water</li><li>Disinfect the wound</li><li>Contact a doctor immediately for advice</li></ul>
          <p>For more advice on bats and rabies visit the Bat Conservation Trust .</p>
          <p>Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.</p>
          <h3>documents</h3>
          <ol><li>bats and rabies 4 Sep 2019 244kb PDF</li></ol>
        </>
      }
    />
  );
}
