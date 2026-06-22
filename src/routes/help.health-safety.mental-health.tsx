import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "mental health — BALI";
const DESC = "► How common are mental health issues in the UK? ► How many people in the UK get treatment for mental health issues? ► Employees: Looking after your mental…";

export const Route = createFileRoute("/help/health-safety/mental-health")({
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
      eyebrow="Health & safety"
      title={`mental health`}
      intro={`► How common are mental health issues in the UK? ► How many people in the UK get treatment for mental health issues? ► Employees: Looking after your mental health at work ► Employers: Advice and resources for line managers ► Contacts`}
      body={
        <>
          <h3>Contents</h3>
          <h3>How common are mental health issues?</h3>
          <ul><li>1 in 4 people will experience a mental health problem of some kind each year in England</li><li>1 in 6 people report experiencing a common mental health problem (like anxiety and depression) in any given week in England</li><li>Between 2011 and 2015, 13% of in-work suicides* were from within the skilled construction and building trades - despite construction accounting for 7% of the UK workforce</li><li>Suicide kills more construction workers than falls each year</li></ul>
          <p>* Suicidal thoughts are not mental health diagnoses, but they are related to mental health</p>
          <h3>How many people get treatment for mental health issues?</h3>
          <ul><li>Approximately 1 in 8 adults with a mental health problem are currently getting treatment</li></ul>
          <h3>Employees: Looking after your mental health at work</h3>
          <p>How to be mentally healthy at work by MIND ( link to document ) How to manage stress by MIND ( link to document )</p>
          <h3>Resources for employers</h3>
          <p>People managers guide to mental health by Chartered Institute of Personnel and Development (CIPD) and MIND ( link to document ) How to support staff who are experiencing a mental health problem by MIND ( link to document ) How to take stock of mental health in your workplace by MIND ( link to document ) Line Managers' Resource by Mental Health First Aid (MHFA) ( link to document )</p>
          <h3>Contacts</h3>
          <p>Perennial Provider of free and confidential advice, support and financial assistance to people of all ages working in, or retired from horticulture. https://perennial.org.uk/</p>
          <p>Samaritans Offer a safe place for you to talk any time you like, in your own way – about whatever's getting to you https://www.samaritans.org/ Telephone: 116 123 SANEline SANEline is a national out-of-hours mental health helpline offering specialist emotional support, guidance and information to anyone affected by mental illness, including family, friends and carers. Telephone: 0300 304 7000 Papyrus PAPYRUS is the UK Charity for the prevention of young suicide (under 35) Telephone: 0800 068 4141 Shout UK's first free, confidential, 24/7 text support service. It's a place to go if you're struggling to cope and need mental health support. Text number: 85258 - Anxiety</p>
          <p>National charity helping people with Anxiety Telephone: 08444 775 774 Text number: 07537416905</p>
          <p>Depression UK National Self-Help Organisation helping people cope with their depression www.depressionuk.org</p>
          <p>Harmless An organisation who works to address and overcome issues related to self-harm and suicide www.harmless.org.uk</p>
          <p>Drugwise Promotes evidence-based information on drugs, alcohol and tobacco www.drugwise.org.uk</p>
          <p>Drinkaware www.drinkaware.co.uk Telephone: 0300 123 1110</p>
          <p>Gamblers Anonymous UK www.gamblersanonymous.org</p>
          <p>- Men’s Mental Health</p>
          <p>Men’s Health Forum www.menshealthforum.org.uk</p>
          <p>Man Gang mangang.org</p>
          <p>National Debt Line Telephone: 0808 808 4000</p>
          <p>Money Advice Service Telephone: 0800 138 7777</p>
          <h3>documents</h3>
          <ol><li>Mental Health - Line managers resource 4 Feb 2021 615kb PDF</li></ol>
        </>
      }
    />
  );
}
