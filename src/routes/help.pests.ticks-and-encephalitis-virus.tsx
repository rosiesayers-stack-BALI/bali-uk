import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Ticks And Encephalitis Virus — BALI";
const DESC = "An infectious disease, discovered in the UK for the first time and carried by ticks, has the potential to damage the brain and can also affect humans throu…";

export const Route = createFileRoute("/help/pests/ticks-and-encephalitis-virus")({
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
      title={`Ticks And Encephalitis Virus`}
      intro={`An infectious disease, discovered in the UK for the first time and carried by ticks, has the potential to damage the brain and can also affect humans through the tick's bite. Public Health England (PHE) has confirmed the presence of the encephalitis virus , which originates from the tick, in Thetford Forest Norfolk and on the Hampshire-Dorset border. While the PHE says the risk is “very low”, it is investigating how common the infected ticks might be.`}
      body={
        <>
          <p>The small parasitic arachnids are becoming more common in parts of the UK, mainly due to increasing deer numbers. Ticks can also live in the undergrowth and latch onto humans when walking through the undergrowth and long grass. Ticks can also carry other diseases, including Lyme disease .</p>
          <p>Most people who catch the encephalitis virus will have no or only mild flu-like symptoms, but it can affect the brain and central nervous system and can sometimes be fatal. A vaccine is available privately for tick-borne encephalitis.</p>
          <p>The tick-borne encephalitis virus is already present in mainland Europe and parts of Asia. It is thought infected ticks have been introduced to the UK via migratory birds.</p>
          <p>The NHS advises that tick bites can be prevented by covering skin while walking outdoors, using existing paths and nature trails, applying insect repellent and checking your clothes and hair after going for a walk.</p>
          <p>A video, introduced by PHE in 2013, features senior scientist Maaike Pietzsch who explains how to avoid being bitten by a tick, what to do if you have been bitten and how to remove them.</p>
          <h3>documents</h3>
          <ol><li>PHE Tick Awareness Tookit 31 Oct 2019 906kb PDF</li><li>PHE Surveillance Survey 2019 31 Oct 2019 519kb PDF</li><li>PHE Ticket Awareness Leaflet 31 Oct 2019 1789kb PDF</li></ol>
        </>
      }
    />
  );
}
