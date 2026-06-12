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
      intro="An online resource for members, including helpful tools, templates and documents to support safe working across hard and soft landscaping, grounds maintenance and design work."
      subTopics={SUB}
    />
  );
}
