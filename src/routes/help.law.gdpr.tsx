import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "GDPR — BALI";
const DESC = "The regulation has fundamentally reshaped the way in which data is handled across every sector, from healthcare to banking and beyond. The British Associat…";

export const Route = createFileRoute("/help/law/gdpr")({
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
      title={`GDPR`}
      intro={`The regulation has fundamentally reshaped the way in which data is handled across every sector, from healthcare to banking and beyond. The British Association of Landscape Industries has been working closely with members to ensure they are compliant with the new regulation by producing a helpful data protection fact sheet.`}
      body={
        <>
          <h3>The EU General Data Protection Regulation (GDPR) is the most important change in data privacy regulation in 20 years.</h3>
          <h3>What is GDPR?</h3>
          <p>The General Data Protection Regulation forms part of the data protection regime in the UK, together with the new Data Protection Act 2018 (DPA 2018). This replaces the Data Protection Act 1988. The main provisions of this applied from 25 May 2018, which means all business should already be applying the principles of the GDPR in their daily work activities.</p>
          <h3>Who does it apply to?</h3>
          <p>The GDPR applies to businesses who may be called a ‘controller’ or ‘processor’. A controller determines the purposes and means of processing personal data. A processor is responsible for processing personal data on behalf of a controller. As a landscape contractor or designer, it is most likely that you are a controller, since you will frequently be deciding what personal data to collect (for example, the names, email addresses, telephone numbers and addresses of clients) and how this information will be recorded e.g. on a phone, in a book or via email. Note that GDPR applies to historic, current and all future electronic and manual records held by your company.</p>
          <p>Personal data only includes information relating to natural persons who can be identified or who are identifiable, directly from the information in question (e.g. name, address, email, NI number); or who can be indirectly identified from that information in combination with other information (e.g. Computer’s IP address). As a landscape contractor or garden designer, it is likely you will record personal data from clients which includes their name, address and email address. Information about companies or public authorities is not personal data, however, information about individuals acting as sole traders, employees, partners and company directors where they are individually identifiable, and the information relates to them as an individual, may constitute personal data.</p>
          <h3>What are my responsibilities?</h3>
          <p>Whilst the owners, directors or management team are directly accountable, all employees within a business have a responsibility to ensure their business conforms with the General Data Protection Regulation. Before collecting personal information, you must identify valid grounds under the GDPR (known as a ‘lawful basis’) for collecting and using personal data from your customers and prospective customers. There are six of these lawful bases, which are listed below:</p>
          <p>6. Legitimate interests</p>
          <p>For example, you may record information such as a name and address to provide a quote or a service, offer credit terms and get paid. These examples fall under the lawful basis of processing by way of “contract” as without this basic information you could not provide your services. You must ensure that you do not do anything with the data in breach of any other laws, such as give it to others without permission (see consent) or store it in an unsecure way. Note that storing data in an insecure way could include writing client names, addresses and phone numbers in a book which is not thoughtfully looked after, or on computer or phone which is not password protected. You must use personal data in a way that is fair. This means you must not process the data in a way that is unduly detrimental, unexpected or misleading to the individuals concerned – for example, share or sell it. You must be clear, open and honest with people from the start about how you will use their personal data.</p>
          <h3>What are the rights of my customers and potential customers?</h3>
          <p>The individuals whose information you collect and use have particular rights. There are eight of these, which are:</p>
          <p>1. The right to be informed (i.e. what exactly will you do with their information?)</p>
          <p>2. The right of access (i.e. you must be able to give individuals a copy of their personal data that you hold on them)</p>
          <p>3. The right to rectification (i.e. individuals are entitled to have their personal information corrected)</p>
          <p>4. The right to erasure (also known as the right to be forgotten, in some circumstances an individual can request a business deletes information held about them)</p>
          <p>5. The right to restrict processing (in some circumstances an individual can limit the way in which a business uses their data)</p>
          <p>6. The right to data portability (this right gives individuals the right to receive information they originally provided to a business in a format that is organised and commonly used)</p>
          <p>7. The right to object (in some circumstances, an individual can object to businesses processing their data in a specific way)</p>
          <p>8. Rights in relation to automated decision making and profiling. (in some circumstances, businesses can be prevented from using automated – computer controlled – decisions)</p>
          <p>More detail on these is included in the “Further reading” section, on the document attached to this page.</p>
          <h3>What is consent?</h3>
          <p>As discussed in the responsibilities section, as a business you should ensure you process (collect, record, organise, store or use) data on a lawful basis. As a landscape contractor or garden designer, in most cases you will be processing data under the lawful basis of ‘contract’. If, for example, you wish to contact a customer regarding additional services your business can offer, or sign a customer to direct marketing materials, a different lawful basis is required – ‘consent’ is one such example of a different lawful basis.</p>
          <p>The definition of consent in GDPR is similar to the definition of consent outside of GDPR! Under GDPR, consent is given by an individual to a business when s/he gives a specific and informed decision of his or her wishes either via a statement or clear affirmative action (e.g. ticking a box) called an opt-in. For example, consent may be gained from an individual to send them additional information on relevant products by using the following text as part of a contract for works:</p>
          <p>I consent to [your company name] sending me additional information on relevant and complementary products or services, from time to time, by the following methods:</p>
          <p>□ email □ letter □ telephone □ text message</p>
          <p>The wording above is found in a consent form which is designed to be used in conjunction with the Association's domestic contract. Both of these documents are free for Association members to use and can be found on our website. You must keep clear records to demonstrate consent you hold. The GDPR gives a specific right to withdraw consent. You need to tell people about their right to withdraw and offer them easy ways to withdraw consent at any time. You may wish to use the consent form provided by our Association.</p>
          <h3>What is a breach and what do I do?</h3>
          <p>A personal data breach means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. This includes breaches that are the result of both accidental and deliberate causes. For example, losing a book in which you keep client addresses is classed as a data breach, as is losing a mobile telephone which contains the names and address of clients.</p>
          <p>The GDPR introduces a duty on all organisations to report certain types of personal data breach to the relevant supervisory authority (currently this is the ICO). You must do this within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk of adversely affecting individuals’ rights and freedoms, you must also inform those individuals without undue delay.</p>
          <p>You should ensure you have robust breach detection, investigation and internal reporting procedures in place. This will facilitate decision-making about whether or not you need to notify the relevant supervisory authority and the affected individuals. This is based on material harm to individuals, scale of impact, likelihood of recurrence, risk to others and so forth.</p>
          <p>You must also keep a record of any personal data breaches, regardless of whether you are required to notify the authority. Where can I find further information For further information you can visit the ICO Website at https://ico.org.uk/ or call the Small Business Helpline on 0303 123 1113.</p>
          <p>Some or all of the articles on this page are for members only. To access, become a member by making an enquiry.</p>
          <h3>documents</h3>
          <ol><li>Data Protection Factsheet 12 Mar 2019 223kb PDF</li></ol>
        </>
      }
    />
  );
}
