import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "ROLO — BALI";
const DESC = "ROLO (Register of Land-based Operatives) is a one-day health, safety and environmental awareness course for landscape industry workers — a recognised route";

export const Route = createFileRoute("/liss-cscs/rolo")({
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
      eyebrow="Training course"
      title="ROLO"
      intro="ROLO (Register of Land-based Operatives) is a one-day health, safety and environmental awareness course for landscape industry workers — a recognised route onto the LISS/CSCS scheme for those without a formal NVQ."
      bullets={[
  "One-day classroom or online course",
  "Covers H&S, environmental awareness and best practice",
  "Pass certificate accepted for LISS/CSCS Labourer card",
  "Delivered by accredited training providers UK-wide"
]}
    />
  );
}
