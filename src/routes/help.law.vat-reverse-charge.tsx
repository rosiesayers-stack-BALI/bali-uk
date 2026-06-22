import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "VAT reverse charge — BALI";
const DESC = "From 1st March 2021 the domestic VAT reverse charge will apply to most supplies of building and construction services. This change will affect nearly all l…";

export const Route = createFileRoute("/help/law/vat-reverse-charge")({
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
      title={`VAT reverse charge`}
      intro={`From 1st March 2021 the domestic VAT reverse charge will apply to most supplies of building and construction services. This change will affect nearly all landscape contractors to some extent, and it is important our members understand the consequences of the changes.`}
      body={
        <>
          <h3>Domestic VAT reverse charge for building and construction services</h3>
          <h3>Contents</h3>
          <p>- What is the domestic VAT reverse charge? - Why is the domestic VAT reverse charge being introduced? - Who will the domestic VAT reverse charge apply to? - Which services will the reverse charge apply to? - Are there any circumstances when the VAT reverse charge does not apply? - Where do responsibilities lie regarding notification of VAT reverse charge?</p>
          <h4>What is the domestic VAT reverse charge for building and construction services?</h4>
          <p>From 1st March 2021, all businesses performing sub-contractor duties by supplying construction services to a VAT-registered customer (a contractor) will no longer charge VAT.  Instead, the customer (contractor) will pay the VAT owed by the sub-contractor directly to HMRC.</p>
          <p>This means if you are a VAT-registered sub-contractor, who is registered with the CIS scheme and currently receives VAT payments from a contractor client, as of 1st March 2021 you will no longer receive VAT from these clients.</p>
          <h4>Why is the domestic VAT reverse charge for building and construction services being introduced?</h4>
          <p>HMRC believes there has been an increase in VAT fraud within labour supply chains in large construction projects, which they estimate costs the UK government over £100m per year.  Specifically, companies at the end of long supply chains are not paying the VAT they receive to HMRC.  The VAT reverse charge is being introduced to help reduce VAT fraud.</p>
          <h4>Who will the domestic VAT reverse charge for building and construction services apply to?</h4>
          <p>The new charge will apply to anyone who pays for work which they bill on, or anyone who is paid by other contractors. Both the customer (contractor) and the supplier (sub-contractor) must be:</p>
          <p>1. VAT registered 2. Registered with the Construction Industry Scheme (CIS) 3. Doing works that are either subject to standard rate (20%) or reduced rate (5%) VAT</p>
          <h4>Which services will the reverse charge apply to?</h4>
          <p>The reverse charge will apply to the same services currently reported under the CIS.</p>
          <p>Included within CIS: - Landscaping a housing estate, an industrial estate or the surrounds of a house as a finishing operation in a wider project of construction - Landscaping a location following demolition of buildings or structures - The construction of walls, drives, patios and suchlike, as part of ‘routine landscaping’, as these operations will be caught by FA04/S74 (2)(b), as ‘works forming … part of the land’ - Tree-felling as part of site clearance or on completion of a construction operation - Turf laying as part of a wider project of construction. Excluded from CIS: - Routine landscaping, gardening, forestry and tree surgery not undertaken in the course of a wider project of construction - Landscape maintenance of sales areas, house plots, public open spaces and verges constructed/planted as part of a housing estate, an industrial estate or the surrounds of a house as a finishing operation in a wider project of construction - Landscaping open-cast mine areas after mining has ceased (where there are no pit head machinery, buildings or structures). - Construction of golf courses (if not associated with the construction of buildings such as club houses). - Cleaning up an undeveloped site prior to onward sale of land</p>
          <p>For the original text as presented in the Construction Industry Scheme Reform Manual, please click this link , and for a list of general construction services included within the CIS, click this link .</p>
          <p>The reverse charge does not apply when only materials are supplied, but does apply when the cost of materials is included within a service provided - and this is regardless of material or labour content.  If labour and materials are on the same invoice, all are included in the reverse charge procedure.</p>
          <h4>Are there any circumstances when the VAT reverse charge for building and construction services does not apply?</h4>
          <p>The VAT reverse charge for building and construction services does not apply in the following circumstances:</p>
          <ul><li>When contractors use sub-contractors for zero-rated work</li><li>If the contractor or sub-contractor is not VAT registered</li><li>Where building or construction works are for end users</li></ul>
          <h4>Where do responsibilities lie regarding notification of VAT reverse charge for building and construction services?</h4>
          <ul><li>The customer (the contractor) must advise the supplier (sub-contractor) if they are an end user – and therefore not subject to the reverse charge – in writing.  HMRC suggest the following wording is used:</li></ul>
          <p>‘We are an end user for the purposes of section 55A VAT Act 1994 reverse charge for building and construction services. Please issue us with a normal VAT invoice, with VAT charged at the appropriate rate. We will not account for the reverse charge’</p>
          <ul><li>The subcontractor may need to ask the customer if they are an end user and should record this request and any response in writing and retain as evidence.  It is important the subcontractor also identifies and records evidence supplied to suggest the customer (contractor) is VAT registered and subject to CIS.</li></ul>
          <p>Remember: If subcontractors wrongly apply the reverse charge and do not obtain VAT from the customer, whilst they will not receive VAT from the customer, they will still be expected to pay VAT to HMRC.  The customer may be difficult to trace/no longer exist when the error arises, leaving the subcontractor to pay the VAT.</p>
          <ul><li>The supplier (the sub-contractor) must advise on their invoice if the VAT reverse VAT charge applies.  Whilst no VAT will be charged on the invoice, the invoice must refer to the reverse charge and how much VAT is due (20% or 5%).  HMRC suggest the following wording is used:</li></ul>
          <p>‘Reverse charge: VAT Act 1994 Section 55A applies’ or</p>
          <p>‘Reverse charge: S.55A VATA 94’ applies’ or</p>
          <p>‘Reverse charge: Customer to pay the VAT to HMRC’</p>
          <h4>Further information</h4>
          <p>VAT reverse charge technical guide Flowchart to identify normal VAT charges or domestic VAT reverse charge How to prepare for VAT reverse charge</p>
        </>
      }
    />
  );
}
