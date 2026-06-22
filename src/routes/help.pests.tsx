import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Pests & Diseases — BALI";
const DESC = "A resource for landscape professionals on high-profile UK pests and diseases — ash dieback, Asian hornet, oak processionary moth, Xylella fastidiosa and more, with the latest legal requirements and best practice.";

export const Route = createFileRoute("/help/pests")({
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

const SUB = [
  { title: "Ash dieback", href: "/help/pests/ash-dieback" },
  { title: "Asian hornet", href: "/help/pests/asian-hornet" },
  { title: "Asian longhorn beetle", href: "/help/pests/asian-longhorn-beetle" },
  { title: "Biosecurity toolkit", href: "/help/pests/biosecurity-toolkit" },
  { title: "Brown-tail moth", href: "/help/pests/brown-tail-moth" },
  { title: "Canker stain of plane", href: "/help/pests/canker-stain-of-plane" },
  { title: "Eight-toothed spruce bark beetle", href: "/help/pests/eight-toothed-spruce-bark-beetle" },
  { title: "Emerald ash borer beetle", href: "/help/pests/emerald-ash-borer-beetle" },
  { title: "Oak lace bug", href: "/help/pests/oak-lace-bug" },
  { title: "Oak processionary moth", href: "/help/pests/oak-processionary-moth" },
  { title: "Ticks and encephalitis virus", href: "/help/pests/ticks-and-encephalitis-virus" },
  { title: "Xylella fastidiosa", href: "/help/pests/xylella-fastidiosa" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Alerts"
      title="Pests & Diseases"
      intro="A resource for all disciplines of landscape professional wishing to learn about the threat from high-profile pests and diseases, together with the latest legal requirements and best practice for specific species."
      body={
        <p>
          Some of the detailed articles linked below are for BALI members only. To access the full library, become a member by making an enquiry on the <a href="/join">Join page</a>.
        </p>
      }
      subTopics={SUB}
    />
  );
}
