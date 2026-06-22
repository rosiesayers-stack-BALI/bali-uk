import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "IR35 — BALI";
const DESC = "By setting up as a limited company, workers can continue to work for an existing employer, but as a ‘contractor’. Personal service companies are a variatio…";

export const Route = createFileRoute("/help/law/ir35")({
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
      eyebrow="Law & legislation"
      title={`IR35`}
      intro={`By setting up as a limited company, workers can continue to work for an existing employer, but as a ‘contractor’. Personal service companies are a variation of this and are popular where clients and recruitment agencies avoid hiring contractors operating as sole traders.`}
      body={
        <>
          <h3>IR35 is a piece of UK tax legislation, designed to close a loophole in the tax system that allows a specific group of workers to pay less tax.</h3>
          <p>Operating as a contractor or personal service company allows workers to avoid paying national insurance contributions on a significant part of their income, which traditional employees must do. When used legitimately, this reduced tax is intended to provide the contractor with money for holiday or sick pay, but also paying for equipment necessary to do their job. This arrangement also benefits the client, as they do not need to pay annual leave or sick pay to contractors or personal service companies.</p>
          <p>Whilst operating as a contractor can be entirely legitimate, Her Majesty’s Revenue and Customs (HMRC) regard the practice of masquerading as a ‘contractor’ as a form of tax avoidance, and introduced IR35 to ensure, where appropriate, contractors deemed to be employees pay the same amount of tax as traditional employees. If HMRC identify cases where individuals have been masquerading as self-employed contractors without justification, they will be required to pay the missing tax back to HMRC, with interest and penalties for a period of up to 6 years.</p>
          <p>Working ‘Inside IR35’ is where a worker is considered an employee (commonly referred to as a ‘deemed employee’) for the purposes of tax by HMRC. The following are likely to apply in this scenario:</p>
          <ul><li>The client decides how, when and where the workers services are provided</li><li>Contractor is paid regardless of the quality of services provided</li><li>Client would not be willing to accept a substitute to provide the services</li><li>Contractor does not provide own equipment</li></ul>
          <p>Working ‘Outside IR35’ is where a worker may genuinely be considered self-employed for tax purposes.</p>
          <ul><li>The contractor decides how, when and where the workers services are provided</li><li>Contractor may be paid according to work or service delivered</li><li>Client would accept a substitute to provide the services</li><li>Contractor provides own equipment for services provided</li></ul>
          <p>HMRC believe IR35, which was first introduced in 2000, was not sufficiently robust to prevent all tax avoidance. Therefore, since 2017 public sector clients has been responsible for administering IR35 for any workers claiming to be a contractor. As of 6th April 2021, private sector clients will face similar changes; medium and large businesses will be responsible for deciding the IR35 status of the contractors who work for them. For now, contractors working for smaller companies (defined by HMRC, but generally with a turnover of less than £10.2 million, balance sheet of less than £5 million and fewer than 50 employees) will be responsible for setting their own IR35 status.</p>
          <p>The only problem with IR35, is that whilst ‘deemed employees’ must pay the same amount of tax as traditional employees, they are not entitled to benefits such as annual leave, sick pay or pensions, as employees would be. Furthermore, clients may not be experienced in making decisions regarding the employment status of their workers. This leaves genuine contractors in a more vulnerable position if they are wrongly deemed to be Inside IR35.</p>
          <p>It is therefore important for IR35 to be applied correctly. HMRC require employers to take reasonable care when determining whether workers are inside or outside the remit of IR35.</p>
          <p>Note: The IR35 reforms, which were due to be implemented in April 2020, have been delayed 1 year due to the Coronavirus.</p>
          <p>Further information:</p>
          <p>https://www.gov.uk/topic/business-tax/ir35</p>
        </>
      }
    />
  );
}
