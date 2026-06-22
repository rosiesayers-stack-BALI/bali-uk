import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "importing plants and plant products from the EU to GB — BALI";
const DESC = "- Summary of changes 2021/2022 - Pre-notification requirements from January 2022 - Place of Destination Scheme - Prioritisation of high priority plant insp…";

export const Route = createFileRoute("/help/plant-health/post-brexit-plant-health-arrangements")({
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
      eyebrow="Plant health"
      title={`importing plants and plant products from the EU to GB`}
      intro={`- Summary of changes 2021/2022 - Pre-notification requirements from January 2022 - Place of Destination Scheme - Prioritisation of high priority plant inspections - Inspection fees - Border Control Post - Border Control Post FAQ - Control Point - Control Point FAQ - Difference between Border Control Posts and Control Points - Border Control Post and Control Point: Additional information - Imports from Ireland to GB - Content and format of UK Plant Passports - 'Pest Free Area' to replace 'Protected Zones' - IT systems associated with importing plants and plant products - PEACH - IPAFFS - Defra drop-in session - Useful links`}
      body={
        <>
          <h4>Contents</h4>
          <h4>Summary of changes 2021/2022</h4>
          <ul><li>Require pre-notification and to be accompanied by phytosanitary certificate</li><li>Physical inspection at Place of Destination (POD)</li></ul>
          <ul><li>Continued pre-notification and accompany by phytosanitary certificate</li><li>Physical inspection at Place of Destination (POD)</li></ul>
          <ul><li>Continued pre-notifyication and accompany by phytosanitary certificate</li><li>Physical inspection move to Border Control Points (BCP) and Control Points (CP).  Place of Destination (POD) system to cease.</li></ul>
          <p>Click here for a list of High priority plants and plant products Click here for a list of Regulated and notifiable (article 72 goods) plants and plant products and Regulated (article 73 goods) plants and plant products</p>
          <h4>Requirements for imports of regulated and notifiable plants and plant products to GB from the EU (January 2022 onwards)</h4>
          <p>From January 2022 all ‘high-priority’ plants and plant products will continue to require pre-notification and to be accompanied by a Phytosanitary Certificate.</p>
          <p>All other plants, plant products and other objects from the EU, Liechtenstein and Switzerland, which are categorised as ‘regulated and notifiable’ will require pre-notification but not a Phytosanitary Certificate.</p>
          <p>Please click this link to identify which plants, plant products and other objects are defined as regulated and/or notifiable.</p>
          <h4>Place of Destination (PoD) Scheme (from 1st January 2021 until 1st July 2022) for high-priority plants and plant products</h4>
          <p>A system of site or premises-based physical inspections on high priority plants and plant products was introduced by Defra on the 1st January 2021 and will last until 1st July 2022.  This means that, from 1st January 2021 until 30th June 2022, businesses must notify Defra of imports and register a 'Place of Destination' for plant(s) or plant material(s) where physical and identity checks - undertaken by a Defra plant health inspector - can take place.</p>
          <p>The inspection may be carried out on plants or plant materials arriving from the EU and are either:</p>
          <p>a) being delivered to a yard/compound b) going direct to a UK site and being planted at this same site</p>
          <p>The phytosanitary certificate issued in the EU can accompany the consignment to this 'place of destination' without a UK Plant Passport being required, providing the place of destination is registered using this form and emailed to the Animal and Plant Health Agency (APHA) at this address . Movement of materials in this way is subject to pre-notification via an internet-based Defra tool called 'Procedure for Electronic Application for Certificates' (PEACH).</p>
          <p>The terms of pre-notification are as follows:</p>
          <ul><li>By air and roll-on-roll-off freight; at least 4 working hours before the consignment lands arrives in GB</li><li>All other freight; at least 1 working day before the consignment arrives in GB</li></ul>
          <p>APHA inspectors will aim to inspect consignments within 4 working hours of the inspection ready time provided by the importer in their pre-notification. APHA can carry out inspections of consignments at registered PoDs 7 days a week, from 7am to 7pm.  Where this is not possible the goods should be held over to the following day for the inspection and clearance of goods to be completed.</p>
          <p>Whilst importers can only register a PoD in their own name if they have ownership of that site, it is likely that importers may wish to send some consignments to addresses which belong to their client or customer.  In this situation, importers and PoD must confirm their business relationship to ensure their accounts are linked in PEACH and valid applications can be completed.  This can be completed via email to the PoD registration email address: PODRegistrations@apha.gov.uk It is suggested the following text is used: As importer X – name and full address, I require to be linked with PoD Y – name and full addess, in the PEACH system.</p>
          <h4>Prioritisation of high-priority plants and plant products</h4>
          <p>Defra have released guidance regarding the level of prioritisation given by inspectors to specific species of imported plants.</p>
          <p>Importers have been advised of the following:</p>
          <p>• When faced with a consignment of mixed species/types of plants, inspectors will focus on those of highest priority.</p>
          <p>• The larger the number of high priority plants included in a consignment, the more intensive the inspection is likely to be.</p>
          <p>• The default inspection level is 100%, but if the consignment includes only finished plants/bulbs, then a 10% rate would apply, and likewise a reduced frequency would apply for certain other commodities, as indicated in the table.</p>
          <p>• When organising their day, inspectors will prioritise those consignments they know include higher priority plants.</p>
          <p>• There are contingency arrangements built-in to cater for circumstances where inspectors cannot meet their targets, which involve releasing consignments after 4 working hours and/or following up plants at a later stage. For further information on Service Level Agreements at Place of Destination please refer to the guidance on the Plant Health Portal.</p>
          <p>For full details of the species prioritised for inspection, please click this link .</p>
          <h4>Inspection fees for high-priority plants and plant products</h4>
          <p>Fees and charging for plant health controls (documentary, identity, and physical checks) on imports of EU high-priority plants and plant products were introduced on Tuesday 1st June 2021 in England, Wales and Scotland.</p>
          <p>Further guidance providing an explanation of how these fees are to be applied, including those intended for final user, are available on the Plant Health Portal.  Please click here for more details.</p>
          <h4>Border Control Posts (1st July 2022 onwards)</h4>
          <p>Border Control Posts will be built and plant health inspectors recruited throughout Great Britain (GB) during 2021, with the aim of performing physical checks on regulated goods - which include all plants for planting - upon entry into GB from July 2022.</p>
          <p>Border Control Posts will be positioned throughout England, Wales and Scotland, meaning once physical checks have been performed and material cleared, goods can be transported throughout GB. Click here for a list of up-to-date BCP locations for plant imports within Great Britain.</p>
          <p>Whilst APHA staff will be present at Border Control Posts, each facility will be commercially operated.</p>
          <p>From 1st July 2022 : physical and identity checks of all regulated plants and plant products (not just those which are high-priority) will move from Places of Destination to Border Control Posts.  The requirement for pre-notification and phytosanitary certificates will be extended to all regulated plants and plant products (i.e. not just those which are ‘high-priority’).</p>
          <p>Guidance issued by Defra for Border Control Posts: Click here Border Control Post update (issued September 2021) by Defra: Click here</p>
          <h4>Border Control Post: FAQ</h4>
          <p>Q: How will consignments be selected for inspection at Border Control Posts or Control Points? A: The selection process is risk-based.  APHA will not inspect every lorry, they will inspect the % that is required.</p>
          <p>Q: Will plants be watered and cared for if they are held for a long period of time (longer than a few hours) at Border Control Posts? A: Storage facilities at Border Control Posts are temperature controlled and consignments will be held for the minimum amount of time whilst undergoing inspection. Each consignment falls under the responsibility and control of the Border Control Post operator whilst being held at a Border Control Post, who are also responsible for maintaining the temperature and structure.  Defra will work with operators to ensure there is no commodity degredation.</p>
          <p>Q: Who will be responsible for damages to consignments whilst at Border Control Posts? A: Operators of Border Control Posts will be responsible for damages.  There will be no compensation for damage to plants caused by samples being taken for analysis.</p>
          <p>Q: How will consignments be loaded/unloaded whilst at a Border Control Post? A: Entire lorry consignments will not be unloaded unless necessary and it is very rare for an entire lorry to be unloaded. APHA inspectors will review genera, and will take a representative sample from each genera.  In a mixed consignment APHA inspectors will only inspect from 10 genera out of a lorry.  Operators are experienced in dealing with mixed loads.</p>
          <p>Q: How will lorries with large items, such as mature trees, be dealt with during the inspection process at Border Control Posts? A: Border Control Posts must provide equipment that is suitable for the commmodities for which they are regulated, meaning they will have a range of equipment at their disposal for movement of consignments.  In addition, the import managers at each Border Control Post can make a judgement based on each consignment, which may mean it can move inland under notice.</p>
          <p>Q: Is a member of staff required to be present at the Border Control Post during inspection of a consignment? A: There is no requirement for stakeholders to be present at Border Control Posts; only APHA staff or operators should be present at this location.</p>
          <p>Q: What is the cost of using Border Control Post facilities? A: Whilst Defra has published full details of inspection fees ( click here ), these fees are distinct from the costs of using Border Control Post facilities.  As these facilities are commercially operated, Defra has less control on the fees charged which have yet to be published.  No date has been given for the fees.</p>
          <p>Q: How does the 4 hour pre-notification period work in relation to Border Control Posts? A: Within 4 hours of the plants being available for inspection (i.e. when a lorry arrives at a Border Control Post), Defra will complete an inspection if the goods are being held or will clear the goods for onward movement.</p>
          <p>Q: Do Border Control Posts operate 24/7 and does the 4-hour window apply for 24 hours a day? A: This depends on the site; some sites will only operate when a ferry arrives at port (e.g. twice per week) whereas other sites will operate on a 24-hour basis.  Opening hours for each individual Border Control Post will be decided by the operator, although the APHA will ensure sites are manned according to stakeholder demands during hours of operation.</p>
          <p>Q: How will hauliers be expected to manage the need to stop at Border Control Posts? A: Defra will communicate clearly with applicants via IPAFFS and Customs will be clearly communicating with declarants and hauliers whether goods need to stop for checks at the border.</p>
          <p>Q: Will plants for planting require a plant passport from the Border Control Post to the destination? A: No.  Plants for planting can move from the Border Control Post to the first place of arrival with the phytosanitary certificate issued in the EU by the exporter.  From the first place of arrival they will need to be plant passported.</p>
          <p>Q: Who has to arrange the inspection of plant material upon entry to the UK; the importer or exporter? A: The GB importer has ultimate responsibility, although this may be delegated to customs agents or brokers.</p>
          <p>Q: If phytosanitary checks have already been undertaken in the country of origin, why is there a need to perform additional checks once at the GB border? A: Unfortunately checks made on goods in the EU do not always capture all pests and diseases, and therefore additional checks are required at GB border.</p>
          <h4>Control Points (1st July 2022 onwards)</h4>
          <p>Control Points (CP) will perform a similar role to Border Control Posts but at a different geographic location; Control Points are inland inspection facilities where sanitary and phytosanitary checks of plants and plant products take place under customs supervision.  In contrast to a Border Control Post, Control Points will be manned by inspectors as necessary (i.e. when a consignment requires checking).</p>
          <p>Temporary storage facilities which meet the same minimum requirements as a Border Control Post in terms of facilities and resource to facilitate inspections may apply for Control Point status.  CPs will be designated by Defra and APHA. Click here for the process and conditions for Control Point authorisation.</p>
          <h4>Differences between Border Control Posts and Control Points</h4>
          <p>Customs authorised premises</p>
          <h4>Control Point FAQ</h4>
          <p>Q: Can an individual plant nursery or business be appointed as a Control Point for their goods alone? A: Any business can apply, but they must meet Customs authorisation requirements to be a temporary storage facility and they must also meet Border Control Point requirements.</p>
          <p>Q: Is there a limit on the number of Control Point applications that will be approved? A: There are stringent requirements for Control Point approvals; applicants must meet Border Control Point requirements and must also be customs authorised.  APHA must also be able to service these Control Points. Applicants must be receiving a fairly high volume of consignments [number not specified] to be designated.</p>
          <p>Q: How long does it take to be approved as a Control Point? A: There is no set period, but the process can take several months.  Advice is to put application in as soon as possible.</p>
          <h4>Border Control Post and Control Point: Additional information</h4>
          <p>Webinar recording: click here Defra presentation slide download: click here Border Control Post FAQ: Click here</p>
          <h4>Imports from Ireland to GB</h4>
          <p>The Government has decided to extend the border arrangements which currently apply to goods moving from the island of Ireland to Great Britain.</p>
          <p>This means goods moving from the island of Ireland to Great Britain will continue to do so on the basis of the arrangements that apply currently until further notice; and will not, for now, be affected by the changes being introduced on 1st January 2022 for all other inbound goods.</p>
          <p>For plant health controls the result is that:</p>
          <ul><li>The new pre-notification requirements being introduced on EU imports from 1 January 2022 will not apply to goods imported from the Republic of Ireland (ROI) to GB.</li><li>Existing requirements for ‘high-priority’ plants remain unchanged, i.e. imports of these goods from the ROI to GB and indirect movements from Northern Ireland (NI) moved via the ROI to GB, will continue to require pre-notification, to be accompanied by a phytosanitary certificate, and will be subject to risk-based import checks.</li><li>Direct movements from NI to GB of NI Qualifying plants and plant products, will continue to have unfettered access to GB.</li></ul>
          <h4>Phytosanitary certificate and pre-notification requirements for multi-drop consignments and consignments split across lorries</h4>
          <p>Importers utilising the multidrop system must ensure they pass forward information regarding the Phytosanitary certificate and PEACH application number off the drop off points for the consignment to ensure goods can be traced back to the notification on PEACH. This provides a direct line of traceability to the relevant plant health authorities.</p>
          <p>Defra have issued guidance for the phytosanitary certificate and pre-notification requirements for 5 scenarios, to help importers understand how plants or plant products may be imported into the UK under the new post-Brexit regime. BALI have listed 2 of the most common scenarios below, but please click this link for the other scenarios.</p>
          <p>One lorry contains plant consignments from one or multiple exporter(s) for multiple importers destined for different addresses or sites within the UK. Pre-notification and phytosanitary certificate requirements Each separate consignment destined for each premises must have a phytosanitary certificate and pre-notification submitted to the relevant plant health service by each importer. Labelling and marking of each separate consignment in the lorry must be clear to make sure that consignments do not get mixed.</p>
          <p>Each consignment, once at its respective place of destination, must not be split until the necessary import controls have been performed.  This means the lorry can drop each distinct consignment covered by a phytosanitary certificate and importers pre-notification at each PoD along a route, providing more flexibility. Plant passporting requirements Unless each place of destination is a retailer selling direct to customers, the place of destination will need to be authorised to issue plant passports for any onward movement of plant passported goods.</p>
          <p>Scenario 2 One lorry contains plant consignments for one importer is routed into a distribution centre from which orders are dispatched to customers/retail stores.  This example could cover large scale retailers or growers who take on importing responsibilities on behalf of their customers.</p>
          <p>Pre-notification and phytosanitary certificate requirements The distribution centre would act as the PoD and the plant health import controls would be performed there. The importer may use one PC to accompany the consignment to the PoD, with only one pre-notification required. Plant passporting requirements The distribution centre acting as the PoD would not qualify as a retailer selling goods directly to customer, therefore the distribution centre will need to be authorised to issue plant passports for any onward movement of goods requiring a plant passport.</p>
          <h4>Movement of plants and plant material from 'Place of Destination'</h4>
          <p>Phytosanitary certificates must be replaced with a UK Plant Passport at the ' Place of Destination ' if the operator meets any of the below criteria:</p>
          <ul><li>Moving material to another professional operator;</li><li>Selling material to final users (those buying for personal use) by means of distance contract, e.g. online;</li><li>Moving material to another of their own premises which is more than 10 miles from the premises to which the consignment arrived;</li><li>If the phytosanitary status of the consignment changes, for example, if it has been grown on or if they have been reconfigured (e.g. two plants in separate pots have been planted up in a new pot together).</li></ul>
          <p>Note: To help ease the transition to the new UK Plant Passport process in 2021, Defra have permitted EU-based operators to attach UK Plant Passports to consignments destined for the UK for the first 6 months of 2021 only.  This decision is to help the onward movement of plants and plant material once cleared at the First Place of Destination, and will help operators.</p>
          <p>UK Plant Passports attached by EU-based operators must be generated by UK-based operators authorised to issue UK Plant Passports, and will have no legal status until they reach their First Place of Destination in the UK.  A phytosanitary certificate will still be required on all material entering the UK from the EU.</p>
          <h4>The content and format of UK Plant Passports differs from the EU Plant Passports previously used</h4>
          <p>To make EU Plant Passports and UK Plant Passports easier to distinguish, UK Plant Passports (below left) feature the following:</p>
          <ul><li>No flag on UK Plant Passports</li><li>'UK Plant Passport' words rather than the current 'Plant Passport'</li><li>No changes to Section A (botanical name)</li><li>Section B will no longer be prefixed with 'GB'</li><li>No changes to Section C (traceability codes)</li><li>Section D (country of origin) will change slightly for some plant species.  Details to be confirmed.</li></ul>
          <h4>Please click on this link to review the changes in more detail and see example templates.</h4>
          <h4>The EU term ‘Protected zones’ will change to 'Pest Free Areas'</h4>
          <p>GB will use the internationally recognised term ‘Pest Free Areas’ (PFA). Pests previously referred to as Protected Zone pests will either become GB quarantine pests, which refers to the fact that the pest is absent throughout the UK, or PFA pests, which refers to those pests that are absent in only part of GB.</p>
          <p>Commodities which are hosts of GB quarantine pests will require standard UK Plant Passports (please see image above) for movement within the UK, whereas commodities which are hosts of PFA pests will require PFA UK Plant Passports (please see image, below) for movement within GB.</p>
          <h4>IT systems associated with importing plants and plant products</h4>
          <p>- PEACH Imports of plants and plant materials are currently pre-notified via an internet-based Defra tool called 'Procedure for Electronic Application for Certificates' (PEACH).</p>
          <p>If you are currently using PEACH to pre-notify imports of plants and plant products, you should continue using that system in 2022. You will be directed when to transfer from PEACH to the IPAFFS service.</p>
          <p>It is necessary to register before using PEACH; click here to register.  A step-by-step guide for using PEACH is available on the Plant Health Portal; click here to view this guide.</p>
          <p>- IPAFFS The IT system used to facilitate pre-notification of imports of plants and plant products is due to move from the current PEACH system to a new system called Import of Products, Animals, Food and Feed System (IPAFFS) during 2022.</p>
          <p>If you are new to making pre-notifications and not currently registered on PEACH, you should register for and use IPAFFS to complete pre-notifications of ‘regulated and notifiable’ goods in 2022.</p>
          <p>Traders who are currently using IPAFFS as part of Defra's early adopter phase will continue to use IPAFFS for existing goods in scope plus those requiring pre-notification in 2022.</p>
          <p>Email questions about the new system directly to Defra by clicking on this link</p>
          <p>Please click here for more general information on IPAFFS.</p>
          <h4>Defra drop-in session</h4>
          <p>Defra now offer drop-in sessions for landscape professionals to ask any plant importing or exporting questions.  These virtual sessions will take place every other Thursday, alternating between importing and exporting, and are an opportunity for stakeholders to talk directly with a member of the Plant Health policy team for ten minutes about moving plants and plant products between the EU and GB.</p>
          <p>To make the most of the allocated time (10 minutes) Defra ask that questions are submitted in advance on the sign-up form.</p>
          <p>Click here to ask import-related questions Click here to ask export related questions</p>
          <h4>Useful links</h4>
          <p>Plant Passports and the Post-Transition Period factsheet Defra Border Control Post guidance</p>
        </>
      }
    />
  );
}
