import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "alcohol in the workplace — BALI";
const DESC = "Whilst The Health and Safety at Work etc Act 1974 states employers have a duty to ensure the health, safety and welfare of employees in relation to alcohol…";

export const Route = createFileRoute("/help/health-safety/alcohol-in-the-workplace")({
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
      title={`alcohol in the workplace`}
      intro={`Whilst The Health and Safety at Work etc Act 1974 states employers have a duty to ensure the health, safety and welfare of employees in relation to alcohol at work, there is no legislation in the UK which requires a company to implement alcohol policies in the workplace.  Furthermore, the management of any company can set its own alcohol limit, which may be enforceable according to site or job role.`}
      body={
        <>
          <h3>There is no universal limit for alcohol levels in the landscape industry, which means being under the UK drink drive limit alone may not always be sufficient</h3>
          <p>Many employers and site managers have adopted a zero-tolerance approach (i.e. zero alcohol in the system of an individual) to alcohol. This means that, in the event of a test for alcohol, being under the drink drive limit alone may not be acceptable.</p>
          <p>Alcohol limits may be detailed during a site or company induction, but operatives are advised to seek clarification if in doubt.  Operatives on construction sites may be subject to random drugs and alcohol tests.</p>
          <p>The reason for a zero-tolerance approach to alcohol is that, even at blood alcohol concentrations lower than the legal driving limit, research has shown alcohol can reduce physical co-ordination and reaction speeds.  On a construction site there is a risk of injury to operatives and third parties if these abilities are impaired.</p>
          <p>For more information on managing drug and alcohol misuse at work, visit the HSE website</p>
        </>
      }
    />
  );
}
