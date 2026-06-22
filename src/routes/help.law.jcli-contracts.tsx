import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "JCLI contracts — BALI";
const DESC = "These documents update the CPSE/JCLI Guidance for the Advanced Ordering or Contract Growing of Hardy Nursery Stock (HTA 1999). October 2014.";

export const Route = createFileRoute("/help/law/jcli-contracts")({
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
      title={`JCLI contracts`}
      intro={`These documents update the CPSE/JCLI Guidance for the Advanced Ordering or Contract Growing of Hardy Nursery Stock (HTA 1999). October 2014.`}
      body={
        <>
          <h3>Guidance on the conditions of contract and other issues concerning the contract growing of plant material by nursery growers for their clients.</h3>
          <h4>JCLI Contracts Forum</h4>
          <p>The JCLI Contracts Forum agrees and badges commercial and domestic project standard forms of contract and associated guidance documents for the landscape industry. The contracts and guidance are produced and published by individual member organisations.</p>
          <p>The JCLI Contracts Forum is organised by the Landscape Institute. Its members are the Association of Professional Landscapers (APL), the British Association of Landscape Industries (BALI), the Horticultural Trades Association (HTA), the Institute of Chartered Foresters (ICF), the Landscape Institute (LI) and the Society of Garden Designers (SGD).</p>
          <p>The JCLI badging of contracts is considered important for two main reasons: firstly, because ‘JCLI’ has a strong reputation for contracts, based on the reputation of the Landscape Contract originally produced in 1978; and secondly, because the documents are agreed by the members of the Forum and are therefore non-partisan industry standard documents.</p>
          <h4>History of JCLI</h4>
          <p>JCLI was originally the Joint Council for Landscape Industries and was convened in 1973 to bring together all those organisations in any way concerned with landscape design, construction or management. In 2004 it became the Joint Committee for Landscape Industries with a slightly different mission but was dissolved in 2010. The JCLI Contracts Forum was formed in 2010 by the Landscape Institute to continue the existing JCLI contracts and expand the range of contracts. ‘JCLI’ is no longer an acronym.</p>
          <p>JCLI documents were always produced by individual member organisations but agreed by JCLI and badged JCLI. This continues with the JCLI Contracts Forum, which is only concerned with contracts and associated documents for the landscape industry.</p>
        </>
      }
    />
  );
}
