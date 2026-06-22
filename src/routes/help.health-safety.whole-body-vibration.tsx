import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Whole Body Vibration — BALI";
const DESC = "Whole body vibration (WBV) is a health issue caused by prolonged exposure to vibration, shocks or jolts, transmitted from mobile machinery to the operator …";

export const Route = createFileRoute("/help/health-safety/whole-body-vibration")({
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
      title={`Whole Body Vibration`}
      intro={`Whole body vibration (WBV) is a health issue caused by prolonged exposure to vibration, shocks or jolts, transmitted from mobile machinery to the operator through the seat or feet.  Whilst research on landscape-specific equipment is limited, prolonged periods spent on ride-on machinery such as tractors, mowers and quads over uneven ground are believed to result in symptoms associated with WBV.  Symptoms commonly include lower back pain, WBV may also cause musculoskeletal disorders.`}
      body={
        <>
          <p>Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.</p>
          <h3>documents</h3>
          <ol><li>Whole body vibration 20 Aug 2019 348kb PDF</li></ol>
        </>
      }
    />
  );
}
