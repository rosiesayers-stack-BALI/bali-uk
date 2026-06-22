import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Brown Tail Moth — BALI";
const DESC = "The brown-tail moth is an insect native to the UK. During the caterpillar stage of its lifecycle, the insect develops hairs which can cause a painful, irri…";

export const Route = createFileRoute("/help/pests/brown-tail-moth")({
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
      title={`Brown Tail Moth`}
      intro={`The brown-tail moth is an insect native to the UK. During the caterpillar stage of its lifecycle, the insect develops hairs which can cause a painful, irritant rash or breathing difficulties in humans and animals upon contact. The caterpillar, easily identified by its red and white markings, is commonly found on hedgerow species such as hawthorn, blackthorn, plum, cherry, rose, blackberry and bramble. The hairs may become airborne. Although originally confined to the south of England, the insect has now spread throughout the UK. Landscape operatives are advised to familiarise themselves with the insect and its habitat.`}
      body={
        <>
          <h3>documents</h3>
          <ol><li>Brown Tail Moth 5 Jun 2019 366kb PDF</li></ol>
        </>
      }
    />
  );
}
