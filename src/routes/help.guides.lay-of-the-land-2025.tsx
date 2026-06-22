import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Lay of the Land 2025 — BALI";
const DESC = "With a contribution of £38bn to UK GDP and the supporting of 722,000 jobs, the environmental and landscaping sector provides clear benefits to the UK, not …";

export const Route = createFileRoute("/help/guides/lay-of-the-land-2025")({
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
      eyebrow="Guides & toolkits"
      title={`Lay of the Land 2025`}
      intro={`With a contribution of £38bn to UK GDP and the supporting of 722,000 jobs, the environmental and landscaping sector provides clear benefits to the UK, not only financially, but also in mental wellbeing and the enjoyment of our communities and outdoor spaces.`}
      body={
        <>
          <p>It is vital therefore that the sector is well-understood and given the tools it needs – both by industry drivers and government policymakers – to continue to deliver the aforementioned benefits to the country.</p>
          <p>So, as the biggest Trade Association in the landscaping sector, we’ve undertaken our biggest member survey to date to ascertain the true sentiment and direction of travel of the industry. Our flagship “Lay of the Land” report provides an insight into the hopes of, challenges faced by, and future plans of respondents, leading to valuable recommendations for strengthening and supporting BALI members and the wider ecosystem.</p>
          <p>Some of the key highlights include:</p>
          <ul><li>45% of respondents were “confident or very confident” about their ability to maintain or expand their business over the next 12 months</li><li>47% were planning to explore opportunities in Biodiversity and Net Zero in the next 12 months</li><li>Businesses are focused inwardly, with 53% saying they plan to concentrate on new domestic markets, compared to fewer than 10% stating they were looking into new trade import and export pathways.</li></ul>
          <h3>documents</h3>
          <ol><li>Lay of the Land 3 Oct 2025 8079kb PDF</li></ol>
        </>
      }
    />
  );
}
