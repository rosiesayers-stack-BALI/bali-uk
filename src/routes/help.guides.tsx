import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Guides & Downloads — BALI";
const DESC = "Unlock your marketing potential with our exclusive collection of best-practice guides, created just for BALI members — social media, PR & media, email marketing and more.";

export const Route = createFileRoute("/help/guides")({
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

const SUB = [
  { title: "Social Media Best Practice Guide", description: "Practical tips to boost your online impact across the major platforms.", href: "https://issuu.com/balilandscapeuk/docs/social_media_best_practice_guide_" },
  { title: "PR and Media Best Practice Guide", description: "Practical insights to help landscaping businesses craft press releases that get noticed.", href: "https://issuu.com/balilandscapeuk/docs/pr_and_media_best_practice_guide" },
  { title: "Email Marketing Best Practice Guide", description: "Nurture client relationships, showcase your expertise, and stand out in crowded inboxes.", href: "https://issuu.com/balilandscapeuk/docs/email_marketing_best_practice_guide_" },
  { title: "Hillier Nurseries case study", description: "How just one week inspired a student into landscaping — and why he believes the future starts with BALI.", href: "https://issuu.com/balilandscapeuk/docs/hillier_nurseries_case_study" },
  { title: "The Garden Room Studio case study", description: "How landscaping unleashed a dormant design dream.", href: "https://issuu.com/balilandscapeuk/docs/the_garden_room_studio_case_study" },
  { title: "Lay of the Land Report 2025", description: "The highly anticipated industry benchmark report — available to read now.", href: "/help/guides/lay-of-the-land-2025" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Resources"
      title="Guides & Downloads"
      intro="Unlock your marketing potential with our exclusive collection of best-practice guides, created just for BALI members."
      body={
        <>
          <h3>What's in this library</h3>
          <p>
            We have built a growing library of practical, member-only guides covering the areas where small landscape businesses most often need a steer — social media, PR and email marketing — alongside case studies showing how BALI membership has helped real businesses grow.
          </p>

          <h3>How to get the most from these guides</h3>
          <ul>
            <li><strong>Pick one channel and commit.</strong> A consistent quarterly newsletter beats sporadic activity across five platforms.</li>
            <li><strong>Show the work.</strong> Before-and-after shots, planting plans and on-site videos consistently out-perform stock imagery.</li>
            <li><strong>Use the BALI badge.</strong> Featuring your membership on proposals, vehicles and signage builds trust before you've even quoted.</li>
            <li><strong>Recycle good content.</strong> A single project can be a case study, a social post, a press release and a newsletter feature.</li>
          </ul>

          <h3>Industry insight: Lay of the Land</h3>
          <p>
            BALI's flagship industry report — <em>Lay of the Land</em> — benchmarks the state of the UK landscape sector each year, drawing on member data, market trends and economic indicators. Use it to set targets, brief funders and stakeholders, and inform pricing decisions.
          </p>
        </>
      }
      subTopicsHeading="Guides & case studies"
      subTopics={SUB}
    />
  );
}
