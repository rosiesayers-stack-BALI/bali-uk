import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Client Information — BALI";
const DESC = "Historically, the last resort for disagreements between clients and tradespeople was the courts. Options for relatively low value civil claims such as smal…";

export const Route = createFileRoute("/help/dispute/client-information")({
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
      eyebrow="Dispute resolution"
      title={`Client Information`}
      intro={`Historically, the last resort for disagreements between clients and tradespeople was the courts. Options for relatively low value civil claims such as small claims, fast track and multi-track simplified the process and proved popular amongst tradespeople and clients.`}
      body={
        <>
          <h4>Contents Why dispute resolution? Dispute resolution and the Association The process Start a dispute</h4>
          <h4>Why dispute resolution?</h4>
          <p>However, a significant backlog arose during 2020 - 2021 and resulted in long waiting times for court hearings which continue to the present day.  Delays of over 12 months are still common.</p>
          <p>To reduce the burden on the courts, a greater emphasis has been placed on dispute resolution services, which seek to resolve disputes before they reach the courts.  In many cases a court will specify dispute resolution before initiating court proceedings.</p>
          <h4>Dispute resolution and the British Association of Landscape Industries</h4>
          <p>In light of this shift towards dispute resolution, the Association has appointed a third-party provider of dispute services: Dispute Resolution Ombudsman .</p>
          <p>Dispute Resolution Ombudsman is an independent, not-for-profit government approved organisation setup by the Office of Fair Trading in 1992 to help resolve disputes and raise standards.</p>
          <p>Click here to learn more about the Dispute Resolution Ombudsman.</p>
          <h4>The process</h4>
          <p>In the first instance customers are expected to attempt to resolve issues that arise during a project using their appointed designer or contractor's internal procedure.</p>
          <p>If this process fails, the Customer can formally raise a complaint with the Dispute Resolution Ombudsman.</p>
          <p>As part of this process, the client will submit a written statement and all project information to the Ombudsman for review, including:</p>
          <ul><li>Project documentation</li><li>High resolution photographs of the project and areas of concern</li><li>Correspondence exchanged during the project</li><li>Variations agreed during the project</li></ul>
          <p>The Ombudsman will forward the written statement and evidence to the member responsible for the project and ask them to respond with their own account and supporting evidence.</p>
          <p>An Ombudsman will be assigned to assess the documents and begin a process of conciliation between the Customer and Member.</p>
          <p>Where an inspection of the work is necessary to make a fair and reasoned decision, an independent expert will contact the Customer to arrange a convenient time to visit.</p>
          <p>Once assessment is complete, a written report will be sent to the Customer and Member. This includes the Ombudsman’s verdict on the validity of the complaint and any action that should be taken to resolve it.</p>
          <h4>Start a dispute</h4>
          <p>Click here to raise a dispute on the Dispute Resolution Ombudsman's website Note: when prompted to insert a company name, type 'British Association of Landscape Industries' and register a new account.</p>
          <p>Download the file titled 'Client Resolution Form' from this webpage (scroll to the bottom of the page) and email the completed form to: info@disputeresolutionombudsman.org</p>
          <p>Call the Dispute Resolution Ombudsman on: 0333 241 3209</p>
          <h3>documents</h3>
          <ol><li>Client Resolution Form 4 Jul 2024 1072kb PDF</li><li>Quick Start Guide 4 Jul 2024 90kb PDF</li></ol>
        </>
      }
    />
  );
}
