import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "CDM Regulations — BALI";
const DESC = "The Construction (Design & Management) Regulations 2015 are the main set of regulations for managing the health, safety and welfare of construction projects.";

export const Route = createFileRoute("/help/law/cdm")({
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
      title={`CDM Regulations`}
      intro={`The Construction (Design & Management) Regulations 2015 are the main set of regulations for managing the health, safety and welfare of construction projects.`}
      body={
        <>
          <h3>The Construction (Design & Management) Regulations 2015</h3>
          <p>The scope of works covered by the definition of 'Construction' in CDM includes many aspects of landscape works, including site clearance, excavation, drainage and earthworks. In addition, any landscape contractor undertaking work on a construction site where other contractors are present will have responsibilities under CDM.</p>
          <p>Please click on the buttons below to learn more about your responsibilities under CDM:</p>
          <h3>CDM in domestic projects</h3>
          <h3>CDM in commercial projects</h3>
          <h3>what landscape operations does CDM cover?</h3>
          <h3>CDM learning materials</h3>
        </>
      }
    />
  );
}
