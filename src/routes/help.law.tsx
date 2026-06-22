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
      intro="An online resource focusing on the legal frameworks and contractual documents that affect every landscape business in the UK — from CDM compliance to GDPR, IR35 and the latest employment changes."
      body={
        <>
          <h3>Why this section matters</h3>
          <p>
            Landscape businesses sit at the intersection of construction, agriculture, employment and environmental law. The frameworks below are the ones that most often catch out small and medium-sized landscape contractors — usually because no one is full-time across them.
          </p>

          <h3>The six legal areas most worth a quarterly review</h3>
          <ul>
            <li><strong>CDM 2015.</strong> The Construction (Design and Management) Regulations apply to almost all landscape construction projects. As a contractor you have duties even on small domestic jobs; on commercial projects with more than one contractor a Principal Designer and Principal Contractor must be appointed in writing.</li>
            <li><strong>VAT domestic reverse charge.</strong> Since March 2021, the reverse charge applies to most construction services between VAT-registered businesses under CIS. Invoicing the wrong way creates HMRC liabilities — check every B2B invoice.</li>
            <li><strong>IR35 / off-payroll working.</strong> If you engage contractors through their own limited companies, you may be responsible for determining their employment status. Get this wrong and HMRC can pursue you for unpaid PAYE and NIC.</li>
            <li><strong>GDPR and data protection.</strong> Even a small landscape business handles personal data — staff records, client contact details, CCTV. A simple privacy notice, retention policy and breach process is the minimum standard.</li>
            <li><strong>Employment law (Good Work Plan and after).</strong> Day-one written statements, holiday pay calculations for irregular-hours workers, and the right to request predictable terms have all changed in recent years.</li>
            <li><strong>Water abstraction.</strong> Taking water from rivers, boreholes or ponds — for irrigation, water features or wash-down — usually requires a licence from the Environment Agency above defined thresholds.</li>
          </ul>

          <h3>Contracts are your first line of defence</h3>
          <p>
            The JCLI suite (Joint Council for Landscape Industries) and BALI's own Domestic Landscape Contract are written for landscape work and recognised across the industry. Using a proper contract, signed before work begins, prevents the majority of disputes that we see — and gives you a clear basis to recover payment if things go wrong.
          </p>

          <p className="text-sm text-slate-500">
            <strong>Disclaimer.</strong> This page is general guidance for BALI members, not legal advice. Always consult a qualified solicitor or accountant for advice on your specific circumstances.
          </p>
        </>
      }
      subTopics={SUB}
    />
  );
}
