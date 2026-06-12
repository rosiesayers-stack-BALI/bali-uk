import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "BALI National Charitable Foundation — BALI";
const DESC = "The BALI-NCF supports landscape industry workers and their families in times of hardship, and funds education and training initiatives for the next generat";

export const Route = createFileRoute("/about/ncf")({
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
      eyebrow="Charitable arm"
      title="BALI National Charitable Foundation"
      intro="The BALI-NCF supports landscape industry workers and their families in times of hardship, and funds education and training initiatives for the next generation of landscape professionals."
      bullets={[
  "Grants for industry workers experiencing illness, injury or bereavement",
  "Bursaries supporting students entering landscape careers",
  "Funded by member donations, events and the BALI Chalk Fund",
  "Apply confidentially via the hardship fund route"
]}
    />
  );
}
