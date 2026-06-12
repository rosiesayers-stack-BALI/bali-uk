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
  { title: "Lay of the Land Report 2025", description: "The highly anticipated industry benchmark report — available to read now.", href: "https://www.bali.org.uk/help-and-advice/lay-of-the-land-2025/" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Resources"
      title="Guides & Downloads"
      intro="Unlock your marketing potential with our exclusive collection of best-practice guides, created just for BALI members. Start with our Social Media, PR & Media and Email Marketing guides — packed with practical tips to grow your business."
      subTopicsHeading="Guides & case studies"
      subTopics={SUB}
    />
  );
}
