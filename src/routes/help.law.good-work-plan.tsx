import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "the good work plan — BALI";
const DESC = "In 2017 Matthew Taylor, the Chief Executive of the Royal Society for the Encouragement of Arts, Manufacturers and Commerce , published the Good Work report…";

export const Route = createFileRoute("/help/law/good-work-plan")({
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
      title={`the good work plan`}
      intro={`In 2017 Matthew Taylor, the Chief Executive of the Royal Society for the Encouragement of Arts, Manufacturers and Commerce , published the Good Work report.  This document outlined 53 proposals to the government, aimed at improving modern working practices. Specifically, the report considered how employment practices needed to change in order to keep pace with modern business models, and discussed the developing nature of self-employed and contracted workers, and how the existing labour laws must change to accommodate these individuals and the businesses that employ them.`}
      body={
        <>
          <h3>Important employment law changes in effect from Monday 6 April 2020.</h3>
          <p>The government responded to the report by publishing The Good Work Plan in 2018, which identified the changes that would be implemented. These affect England, Wales and Scotland, and the following changes came into effect last week:</p>
          <ul><li>A written statement of main terms and conditions (frequently known as written statement of particulars) must now be provided to Employees and Workers by their employer on or before the first day of their employment</li><li>The period to break continuous service has now extended from 1 week to 4 weeks, which means employees who work intermittently for their employees can access their employment rights</li><li>The pay reference period for holiday calculations has increased from 12 to 52 weeks, or for employees with less than 52 weeks service, the total number of weeks they have worked.  This means the holiday pay for employees with variable hours will reflect their working hours across the year, and not vary according to high or low season.</li><li>Employees who do not have regular working hours are now able to request a more stable contract after 26 weeks continuous service, with a more fixed working pattern and guaranteed hours.</li><li>Agency workers are now entitled to the same pay as the direct recruits of a business after they have performed the same role with the same hirer for 12 consecutive calendar weeks</li></ul>
          <p>Full details of the changes can be reviewed on the government’s website.</p>
        </>
      }
    />
  );
}
