import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "BALI Podcast: Dig Deep — BALI";
const DESC = "Dig Deep is BALI's official podcast — honest conversations with leading voices from across the UK landscape industry. New episodes released monthly.";

export const Route = createFileRoute("/help/podcast")({
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
      eyebrow="Listen"
      title="BALI Podcast: Dig Deep"
      intro="Dig Deep is BALI's official podcast — honest conversations with leading voices from across the UK landscape industry. New episodes released monthly."
      bullets={[
  "Available on Spotify, Apple Podcasts and YouTube",
  "Interviews with award-winning contractors, designers and suppliers",
  "Deep-dives on industry issues — labour, sustainability, policy",
  "Suggest a guest or topic by emailing the team"
]}
    />
  );
}
