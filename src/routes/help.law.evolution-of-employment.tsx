import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Evolution Of Employment — BALI";
const DESC = "Whilst new working arrangements have the potential to enable short-term or highly flexible demands for labour to be fulfilled, the existing legislative fra…";

export const Route = createFileRoute("/help/law/evolution-of-employment")({
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
      title={`Evolution Of Employment`}
      intro={`Whilst new working arrangements have the potential to enable short-term or highly flexible demands for labour to be fulfilled, the existing legislative framework – which has evolved to cater for traditional ‘employees’ – often does not afford sufficient protection to the rights of a new position labelled ‘workers’. Workers are a half-way house between employees and self-employed individuals, often at risk from losing basic employment rights as a result of unscrupulous employers.`}
      body={
        <>
          <h3>Together with a growing trend for self-employment, mobile phone applications and an emerging gig economy are providing employers and labour markets with greater flexibility than ever before.</h3>
          <p>In 2017 a report commissioned by the government evaluated the changing landscape of work and made recommendations to ensure future legislation reflects these changes. Many changes in law have already been adopted or will do in the near future.</p>
          <p>One of the areas of legislation to be changed as a result of this review is section 1 of the Employment Rights Act 1996. Currently, ‘employees’ in a role for more than one month must be given a document containing specific information including holiday pay, sick leave, and length of time the job is likely to last within 2 months of the date they start work. This document may often be refereed to as an employment contract or written statement, and may be in parts, provided this 2-month limit is met.</p>
          <p>Anyone defined as a ‘worker’ - which may include people employed under zero-hours contracts or employed through an agency - is not currently entitled to any of this information at any stage in their role. This leaves a significant number of contemporary ‘workers’ in a vulnerable position so, as of 6th April 2020, new requirements will be enforced:</p>
          <ul><li>Both employees and workers are entitled to a section 1 statement on the first day of work, regardless of the duration of their role.</li><li>Details concerning working periods, leave entitlement, sick pay, renumeration, probationary period and training must be given.</li></ul>
          <p>As of 6th April 2020, employers must ensure statements, which include the full suite of employment details, are produced ready for new recruits on their first day of employment.</p>
          <p>Whilst employers are not required to automatically furnish existing employees (those who started before April 6th 2020) with the additional information contained within a new written statement, employees can request this from an employer, and it must be provided with 1 month of the request.  Significantly, former employees can also request this statement up to three months after the end of their employment.</p>
          <p>Whilst the broader reach of the statement of employment is easy to identify, employers must also now distinguish ‘workers’ from those who are ‘self-employed’. This distinction must be reasonable, to ensure ‘workers’ are provided with the necessary written statement.</p>
          <p>The changes proposed are essential to ensure new working arrangements benefit both employers and employees. The landscape industry, with its tendency to demand seasonal or part-time labour, has already benefitted from ‘workers’. To continue reaping the rewards of this, it is essential employers review contracts and prepare in advance of April 2020 to avoid potential pitfalls.</p>
          <h3>Further information:</h3>
          <p>The Employment Rights (Miscellaneous Amendments) Regulations 2019</p>
        </>
      }
    />
  );
}
