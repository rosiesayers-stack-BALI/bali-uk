import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "BALI Membership — Join the UK's Landscape Trade Body";
const DESC = "Members of BALI are recognised across the UK as trusted, accredited landscape professionals. Join hundreds of businesses benefiting from our network, suppo";

export const Route = createFileRoute("/membership/")({
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
    <StubPage
      eyebrow="Membership"
      title="Membership of the Association"
      intro="Members of BALI are recognised across the UK as trusted, accredited landscape professionals. Join hundreds of businesses benefiting from our network, support and standards."
      bullets={[
  "12 membership categories — from contractor to student",
  "Free HR and Health & Safety advice via Quest",
  "Use of the BALI Accredited badge in your marketing",
  "Discounts on insurance, tools, recruitment and logistics",
  "Access to events, awards, training and regional networks"
]}
    />
  );
}
