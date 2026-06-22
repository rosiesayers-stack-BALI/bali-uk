import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Health & Safety — BALI";
const DESC = "Online H&S resource for BALI members, including helpful tools, templates and documents covering risk assessment, lone working, mental health, vibration, silica dust and more.";

export const Route = createFileRoute("/help/health-safety")({
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
  { title: "Risk assessment", description: "The law requires employers to identify the hazards that could cause injury or illness to staff.", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/risk-assessments/" },
  { title: "Alcohol in the workplace", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/alcohol-in-the-workplace/" },
  { title: "Allergic reactions to insect stings", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/allergic-reactions-to-insect-stings/" },
  { title: "Bats and rabies", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/bats-and-rabies/" },
  { title: "Hand arm vibration", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/hand-arm-vibration/" },
  { title: "Interior landscaping", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/interior-landscaping/" },
  { title: "Latex allergies", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/latex-allergies/" },
  { title: "Lone working", description: "Employers have a responsibility to manage the risk employees face when working alone.", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/lone-working/" },
  { title: "Mental health", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/mental-health/" },
  { title: "Outdoor safety", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/outdoor-safety/" },
  { title: "Safe digging", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/safe-digging/" },
  { title: "Silica dust", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/silica-dust/" },
  { title: "Slopes", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/slopes/" },
  { title: "Whole body vibration", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/whole-body-vibration/" },
  { title: "Winter care", href: "https://www.bali.org.uk/help-and-advice/health-and-safety/winter-care/" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="H&S"
      title="Health & Safety"
      intro="An online resource for members, including tools, templates and guidance to support safe working across hard and soft landscaping, grounds maintenance and design."
      body={
        <>
          <h3>Your legal duty as an employer</h3>
          <p>
            The Health and Safety at Work etc. Act 1974 places a duty on every employer to ensure, so far as is reasonably practicable, the health, safety and welfare of employees and anyone else affected by their work. For landscape businesses that covers everything from manual handling and vibration to lone working, plant operation and chemical use.
          </p>

          <h3>The five things every site needs</h3>
          <ul>
            <li><strong>A written risk assessment</strong> for the activities being carried out — required by law if you employ five or more people, and good practice for everyone else.</li>
            <li><strong>A site-specific method statement</strong> covering access, services, machinery and emergency arrangements.</li>
            <li><strong>Trained and competent operators</strong> — with up-to-date certificates for chainsaw, MEWP, telehandler, abrasive wheels and any other regulated equipment in use.</li>
            <li><strong>Appropriate PPE</strong> issued, recorded and replaced when damaged or worn out.</li>
            <li><strong>A clear point of contact</strong> on site, with first-aid provision proportionate to the work and crew size.</li>
          </ul>

          <h3>Higher-risk areas in landscape work</h3>
          <ul>
            <li><strong>Hand-arm and whole-body vibration</strong> from brushcutters, mowers and compactors.</li>
            <li><strong>Silica dust</strong> from cutting paving, stone and concrete — on-tool extraction or water suppression is required.</li>
            <li><strong>Lone working</strong> for grounds maintenance teams visiting multiple sites.</li>
            <li><strong>Manual handling</strong> of plants, stone, kerbs and timber.</li>
            <li><strong>Slips, trips and falls</strong> on sloped or uneven sites.</li>
            <li><strong>Mental health</strong> — increasingly recognised as a workplace H&S issue, with industry-specific support available.</li>
          </ul>

          <h3>Need a template?</h3>
          <p>
            Members can request risk assessment and method statement templates, toolbox-talk material and policy starters from the BALI team — saving hours of drafting work and giving you a defensible baseline.
          </p>
        </>
      }
      subTopics={SUB}
    />
  );
}
