import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Oak Lace Bug — BALI";
const DESC = "Oak lace bug (Corythucha arcuata) is not yet in the UK, but is widespread in Europe.  It has been highlighted as a potential future risk to broad-leaved tr…";

export const Route = createFileRoute("/help/pests/oak-lace-bug")({
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
      title={`Oak Lace Bug`}
      intro={`Oak lace bug (Corythucha arcuata) is not yet in the UK, but is widespread in Europe.  It has been highlighted as a potential future risk to broad-leaved trees in the UK, and particularly oak.  The adult lace bug feeds on the underside of leaves, and whilst is not a significant threat in isolation, large numbers of the pest can cause stress, premature leaf drop and result in hosts more susceptible to pests and diseases.  As with many other pests and diseases, the primary source of transmission is within traded materials.`}
      body={
        <>
          <p>Our latest report, available for BALI members to download, provides more information on the Asian Hornet.</p>
          <p>If you would like to find out how to become a BALI member and access technical documents like this, make an enquiry.</p>
          <h3>documents</h3>
          <ol><li>oak lace bug 14 Aug 2019 323kb PDF</li></ol>
        </>
      }
    />
  );
}
