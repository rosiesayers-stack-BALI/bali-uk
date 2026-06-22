import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Asian Hornet — BALI";
const DESC = "Introduction Identification Sightings Reporting The Asian hornet is a highly effective predator of insects, including honey bees, flies, caterpillars, aphi…";

export const Route = createFileRoute("/help/pests/asian-hornet")({
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
      eyebrow="Pests & diseases"
      title={`Asian Hornet`}
      intro={`Introduction Identification Sightings Reporting The Asian hornet is a highly effective predator of insects, including honey bees, flies, caterpillars, aphids and bugs.  Evidence suggests Asian hornets systematically attack bee colonies and have the potential to cause significant loses.`}
      body={
        <>
          <h3>The Asian hornet is an invasive, non-native species from Asia that represents a threat to native bees and insects in the UK.</h3>
          <p>The Asian hornet was first sighted in the UK during 2016.  Whilst the UK is still free from the Asian hornet, the risk remains high, particularly in the south of the UK with its warmer, milder climate.</p>
          <p>Despite the risk to native insects, the Asian hornet does not pose a greater danger to people; it is not aggressive unless provoked, although can sting.  Accidental introductions of Asian hornet via the landscape supply chain are a possibility, and BALI members are encouraged to remain vigilant and report any sightings.</p>
          <h4>Identification</h4>
          <p>Click here to view a detailed identification guide</p>
          <h4>Asian hornet sightings</h4>
          <p>From 2016 to the present date there have been a total of 21 confirmed sightings of Asian hornet in England.  During 2021 there have been two confirmed sightings and nests destroyed in Berkshire and Hampshire.</p>
          <p>To review details of all Asian hornet sightings between 2016 and the present day, please click here .</p>
          <h4>Reporting</h4>
          <p>Sightings of Asian hornet can be reported either online or email</p>
        </>
      }
    />
  );
}
