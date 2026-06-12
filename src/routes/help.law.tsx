import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Law & Regulations — BALI";
const DESC = "Online resource focusing on legal frameworks and contractual documents — CDM, GDPR, IR35, JCLI Contracts, water abstraction, VAT reverse charge, the Good Work Plan and more.";

export const Route = createFileRoute("/help/law")({
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
  { title: "CDM regulations", description: "How CDM applies to the landscape industry.", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/construction-design-management-cdm/" },
  { title: "Evolution of employment", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/evolution-of-employment/" },
  { title: "GDPR", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/gdpr/" },
  { title: "IR35", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/ir35/" },
  { title: "JCLI Contracts", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/jcli-contracts/" },
  { title: "Water abstraction", description: "Taking water from rivers, lakes, groundwater aquifers and other sources for irrigation, treatment and industrial use.", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/water-abstraction/" },
  { title: "VAT reverse charge", description: "The domestic VAT reverse charge for building and construction services that affects nearly all landscape contractors.", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/vat-reverse-charge/" },
  { title: "The Good Work Plan", description: "Important employment law changes affecting landscape employers — what you need to know.", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/the-good-work-plan/" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Legal"
      title="Law & Regulations"
      intro="An online resource focusing on legal frameworks and contractual documents that affect every landscape business in the UK — from CDM compliance to GDPR, IR35 and the latest employment changes."
      subTopics={SUB}
    />
  );
}
