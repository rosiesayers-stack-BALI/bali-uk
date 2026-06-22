import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "oak processionary moth — BALI";
const DESC = "Introduction Identification Guidance for landscape professionals Reporting OPM Resources";

export const Route = createFileRoute("/help/pests/oak-processionary-moth")({
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
      title={`oak processionary moth`}
      intro={`Introduction Identification Guidance for landscape professionals Reporting OPM Resources`}
      body={
        <>
          <h4>Introduction</h4>
          <p>Thaumetopoea processionea or oak processionary moth (OPM) is native to central and southern Europe but has now spread across northern Europe, aided by trade of oak trees.  It was accidentally introduced to the UK and discovered in West London during 2006 and has since spread from this location. OPM has the potential to spread further and affect oak trees throughout England and Wales.</p>
          <p>The caterpillar stage of OPM feeds and lives almost exclusively on both of Britain's native oak species: English/pedunculate and sessile - but also several other species grown in the UK including Turkey oak, chestnut-leaved oak, white oak, Turner's oak, Holm oak, Algerian oak and Hungarian/Italian Oak.</p>
          <p>Large populations of caterpillars can strip foliage from host trees, leaving them vulnerable to other pests and diseases, as well as drought.</p>
          <p>OPM caterpillars grow hairs which pose a health hazard to humans and animals. Symptoms of contact with hairs include skin rashes, eye irritation, sore throats and breathing difficulties. These hairs may be shed when the pest is disturbed, be blown by the wind and accumulate in nests. They may also stick to clothing, equipment and animal fur.</p>
          <h4>Identification</h4>
          <ul><li>Usually present only on oak trees, but may travel along the ground between trees. In rare cases, caterpillars may feed on other broad-leaved species in the absence of oak leaves.</li><li>Active during May, June and July.</li><li>Form a procession (hence the name) when feeding or moving along the trunk, branches and leaves of a host tree.</li><li>Have black heads and grey bodies. They are 2cm long when fully grown and develop long, white hairs when 1cm long.</li><li>Native caterpillar species may easily be mistaken for OPM. Forest Research advise the lackey moth ( Malacosoma neustria ) and brown-tail moth ( Euproctis chrysorrhoea ) may be encountered during spring or early summer. Click here for more information on look-alike species.</li></ul>
          <p>Note: All caterpillars with hairs have the potential to be allergenic and handling is avoided. Only OPM and brown-tail caterpillars produce enough allergens to be considered potentially harmful.</p>
          <h4>Guidance for landscape professionals</h4>
          <p>During May 2023 Defra introduced regulations to prevent the spread of OPM within the UK. The regulations affect professional operators (landscapers) who grow, purchase, hold or plant 'large' oak trees. Large = girth at 1.2m above the root collar more than 8cm.</p>
          <p>Following the introduction of these regulations landscape professionals have three responsibilities in relation to OPM: 1. Record where you plant large oak trees using a spreadsheet supplied by Defra ( click this link to download the file ) with the following information: - supplier where the specimen(s) were purchased (Name, address, phone number) - description of tree(s) purchased (species, size, number, origin) - location where the tree(s) were planted (address, client type) - other reference information (delivery date, invoice number, order number, plant passport reference) Note: Update the Defra spreadsheet each time you plant  large oak trees and be prepared to share the information with Defra.</p>
          <p>2. Restrictions have been placed on movement of large oak trees in the UK in an attempt to slow down the spread of OPM, and professional operators (landscapers) must respect these restrictions.</p>
          <p>The UK has been split into three areas: - Established area (where OPM is present) - Buffer zone (between established area and area of UK free from pest) - Area free from pest (area of UK where there is no OPM). Click this link to view the location of each area (as well as the location of trees found to be infested between 2019 and 2023).</p>
          <p>The table below advises whether large oak trees can pass between each of the areas.</p>
          <p>Red = No movement permitted unless trees grown throughout entirety of life under complete physical protection and inspected.</p>
          <p>Yellow = Movement permitted without exemption providing the trees are in transit for less than 48 hours before moving to the final planting site.</p>
          <p>If trees are in transit for more than 48 hours, biosecurity requirements (a) and (b) apply - see table above for specific requirements.</p>
          <p>biosecurity requirements (a): 1.Landscapers must demonstrate that they meet the Plant Health Management Standard, evidenced through membership of the Plant Healthy Certification Scheme or provision of a Ready to Plant approval from Fera Science Ltd for each consignment to be moved, as well as evidence of ongoing on-site monitoring for OPM and inspection of trees for OPM prior to movement. 2. Landscapers must keep accurate records of the contact details of those receiving large oak trees, including the delivery address and contact details, and store this information for a minimum of 3 years to ensure traceability of movements. ( click this link to download a suitable file )</p>
          <p>biosecurity requirements (b) 1. Professional operators must have a robust control regime in place with appropriate application of phytosanitary treatments in line with Defra’s technical guidance on the application of Plant Protection Products for phytosanitary treatment of OPM. Registration is required for professional users of plant protection products under the Official Control (plant protection products) Regulations. Records of all treatment applications must be kept for a minimum of 3 years. 2. Professional operators must make clients aware inspectors may visit sites to inspect planted trees.</p>
          <p>Green = Movement permitted 3. Meet biosecurity requirements if you store large oak trees for more than 48 hours before moving the specimen to its final planting site.</p>
          <h4>Reporting OPM</h4>
          <p>Any findings of OPM in the buffer zone or area free from pest should be reported to Tree Alert ( link ) or Animal and Plant Health Agency ( link )</p>
          <h4>Resources</h4>
          <p>Defra guidance document: Managing oak processionary moth in England Forestry Commission: Oak Processionary Moth management policy changes guide</p>
          <h3>documents</h3>
          <ol><li>Post Planting Inspection Form 29 Oct 2024 50kb XLSX</li></ol>
        </>
      }
    />
  );
}
