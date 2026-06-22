import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "latex allergies — BALI";
const DESC = "With the increase of personal protective equipment (PPE) use, the Health and Safety Executive (HSE) has warned of the potential for workers to develop alle…";

export const Route = createFileRoute("/help/health-safety/latex-allergies")({
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
      title={`latex allergies`}
      intro={`With the increase of personal protective equipment (PPE) use, the Health and Safety Executive (HSE) has warned of the potential for workers to develop allergic reactions to items containing latex.`}
      body={
        <>
          <h3>HSE issue warning over latex allergies with the increase in PPE usage.</h3>
          <p>The Association has produced a technical document containing more information and links to helpful resources, which can be downloaded to the right of this page.</p>
          <h3>documents</h3>
          <ol><li>HSE issue warning over latex allergies 8 Oct 2020 121kb PDF</li></ol>
        </>
      }
    />
  );
}
