import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Exporting Plants And Plant Products — BALI";
const DESC = "On 1st January 2021 new rules were placed on the movement of goods between the United Kingdom (UK) and European Union (EU) - but also between the UK and No…";

export const Route = createFileRoute("/help/plant-health/exporting-plants-and-plant-products")({
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
      title={`Exporting Plants And Plant Products`}
      intro={`On 1st January 2021 new rules were placed on the movement of goods between the United Kingdom (UK) and European Union (EU) - but also between the UK and Northern Ireland.  Businesses involved in the export of plants, plant material and machinery need to adapt their working practices accordingly.`}
      body={
        <>
          <h4>Contents</h4>
          <p>- EU-UK Trade and Cooperation Agreement - Regulated products - Phytosanitary certificate - Prohibited and high risk plants - Growing media - Machinery - Wood packaging material - IT systems associated with exportation - Northern Ireland - Defra drop-in session</p>
          <h4>EU-UK Trade and Cooperation Agreement</h4>
          <p>The trade deal reached between the EU and UK on Christmas Eve 2020 meant that businesses throughout the UK would be able to sell their goods to the EU without being subjected to tariffs.</p>
          <p>EU rules limit what can enter the EU market from non-member countries, which means landscape and horticulture businesses in the UK wishing to export to EU countries will need to negotiate non-tariff obstacles including additional paperwork, such as the need for phytosanitary certificates and health checks on goods.</p>
          <p>The EU places plants and plant products in categories according to their bio-security risk, with some high-risk plants and plant products currently prohibited from entering the EU – and also Northern Ireland.</p>
          <h4>All regulated products listed below, exported from England, Scotland or Wales to the EU and Northern Ireland, will be subject to EU rules:</h4>
          <ul><li>plants for planting</li><li>root and tubercle vegetables</li><li>most fruits</li><li>cut flowers</li><li>some seeds</li><li>leafy vegetables</li><li>agricultural or forestry machinery and vehicles</li></ul>
          <h4>Phytosanitary certificate</h4>
          <p>Exporters of the regulated goods such as those outlined above are likely to need a phytosanitary certificate.  To identify whether the goods you intend to export need to be accompanied by a plant phytosanitary certificate, plant health authorities in each of the nations below may be consulted:</p>
          <p>Telephone: 0300 1000 313 - select option 3 when calling Email: planthealth.info@apha.gov.uk</p>
          <p>Wales telephone: 0300 1000 313 - select option 3 when calling email: planthealth.info@apha.gov.uk</p>
          <p>Scotland Telephone: 0131 244 8890 email: hort.marketing@gov.scot</p>
          <p>Northern Ireland Telephone: 0300 200 7847 email: planthealth@daera-ni.gov.uk</p>
          <p>To get a phytosanitary certificate, goods must be inspected by an authorised inspector.</p>
          <h4>Exporting prohibited and high-risk plants</h4>
          <p>From 1 January 2021, the UK will not be permitted to export the commodities below to the EU or Northern Ireland (NI) until further notice:</p>
          <ul><li>High risk plants</li></ul>
          <p>High-risk plants and plant products are prohibited from entering the EU and NI from all countries, until a full risk assessment is conducted by the European Food Safety Authority (EFSA).</p>
          <p>The following plants for planting are prohibited:</p>
          <p>Acacia Acer Albizia Almus Annona Bauhinia Berberis Betula Caesalpinia Cassia Castanea Cornus Corylus Crataegus Diospyros Fagus Ficus carica Fraxinus Hamamelis Jasminum Juglans Ligustrum Lonicera Malus Nerium Persea Populus Prunus Quercus Robinia Salix Sorbus Taxus Tilia Ulmus</p>
          <p>This risk assessment will be a collaborative effort between the trade and Defra, Forestry Commission, Forestry Research and devolved administrations, and submitted by Defra to the European Commission.</p>
          <p>Once the risk assessment has been authorised by EFSA, organisations in the UK will be permitted to export high risk plants and plant products to the EU, providing a phytosanitary certificate is provided.  The risk assessment and associated dossiers submitted to the European Commission are comprehensive and will take time to collate.  Once submitted to the European Commission, it is unclear how long it will take for the European Commission to process each risk assessment.</p>
          <ul><li>Seed and other propagating material requiring third country equivalence</li><li>Prohibited plants and plant products</li></ul>
          <p>The following plants and plant products are prohibited for export from GB to the EU and NI:</p>
          <p>- Isolated bark of Castanea - Plants of Vitis, other than fruits - Plants of Citrus, Fortunella, Poncirus, and their hybrids, other than fruits and seeds - Tubers of Solanum tuberosum, seed potatoes - Plants for planting of stolon - or tuber-forming species of Solanum, or their hybrids - Soil as such consisting in part of solid organic substances - Growing medium as such, other than soil, consisting in whole or in part of solid organic substances, other than that composed entirely of peat or fibre of Cocos nucifera, previously not used for growing of plants or for any agricultural purposes</p>
          <h4>Growing media</h4>
          <p>- Attached to plants Growing media attached to or associated with plants for exporting must meet the EU’s third country import requirements when being exported to EU countries.  The options open to exporters are outlined in this document ( please click ). For guidance on exporting growing media attached to plants destined for Northern Ireland, please click here for the latest information. - As a commodity Soil and growing media are currently prohibited from entering the EU or NI from England, Wales or Scotland.  Defra are currently working on a solution with the EU commission.</p>
          <h4>Machinery</h4>
          <p>Used machinery for agricultural or forestry purposes now requires inspection by a plant health inspector and a phytosanitary certificate (PC) prior to export to the EU.</p>
          <p>To be issued with a PC for export to the EU, all used machinery must be washed and cleaned before shipping to ensure freedom from soil and other debris.  The machinery should be visually free from soil i.e. there should be no appreciable signs of soil or other debris.</p>
          <p>For full details of the machinery requiring inspection and a PC prior to export please click this link.</p>
          <p>For guidance on exporting used machinery for agricultural and forestry purposes to Northern Ireland, please click here for the latest information.</p>
          <h4>Wood packaging material</h4>
          <p>From 1st January 2021, all wood packaging material moving between GB and the EU, as well as GB and Northern Ireland, must meet International Standard for Phytosanitary Measures 15 (ISPM 15) by undergoing heat treatment and marking.</p>
          <p>ISPM 15 is a series of measures designed to reduce the risk of introducing/spreading pests associated with wood packaging material (WPM).</p>
          <p>Wood packaging material includes: - Pallets - Crates - Boxes - Cable drums - Dunnage (materials used to protect loads during shipping, and includes beams, planks, boards and wedges)</p>
          <p>To be compliant with ISPM 15, wood packaging material must be marked with the ISPM 15 stamp consisting of three codes (country code, producer code and the treatment applied) and the International Plant Protection Convention (IPPC) symbol.</p>
          <p>Once a pallet is heat-treated and marked according to ISPM 15 international standards, it can be reused without requiring further heat-treatment or inspection.  Providing the ISPM 15 stamp remains legible on the pallet, pallets can be reused for export from GB to the EU and Northern Ireland.  The only situation when further heat-treatment may be required is in the event the pallet needs to be repaired and/or remarked.</p>
          <p>The examples below illustrate some variants of the required components of the ISPM 15 mark you are likely to see on wood packaging material.  The following components are required:</p>
          <p>IPPC (International Plant Protection Committee) symbol XX = Country code 000 = Producer/treatment provider code YY = Treatment code using the appropriate abbreviation (HT, DH, MB or SF)</p>
          <p>For full details of the requirements for wood packaging material, please click on this link</p>
          <h4>IT systems associated with exportation of plants and plant materials</h4>
          <p>The IT system used to apply for plant phytosanitary certificates will change during 2021, from the current eDomero system to a new export service called Plant Health Export Service (PHES).  PHES will replace eDomero with a service that is faster, more efficient and provides a modern and user-friendly interface for traders to submit applications.</p>
          <p>From Thursday 11th November 2021 exporters of used farm machinery will no longer be able to use eDomero to make export applications</p>
          <p>From Tuesday 30th November 2021 exporters of plant products (eDomero ref: HH91) or plant produce (eDomero ref: PHE36) will no longer be able to use eDomero to make export applications.</p>
          <p>Defra are holding a number of webinar sessions throughout October and November 2021 to show users how to register and submit export notifications, as well as issuing guidance to help users register and raise applications on the new service.</p>
          <p>Please click here to review dates for webinars and register to attend sessions Please click here to review guidance</p>
          <h4>The process for sending the products listed above to the EU will be the same as the current process for sending them to third countries.</h4>
          <p>The following measures are required:</p>
          <ul><li>check with the destination country to identify whether a phytosanitary certificate is required ( click here to check )</li><li>Apply for a phytosanitary certificate from plant health authority in England or Scotland prior to export.  In England an internet-based system called eDomero enables users to apply for services electronically.</li></ul>
          <h3>Northern Ireland</h3>
        </>
      }
    />
  );
}
