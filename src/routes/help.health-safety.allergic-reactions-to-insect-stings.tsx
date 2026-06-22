import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Allergic Reactions To Insect Stings — BALI";
const DESC = "Regardless of age or geographic location, whether you work in an office or out on site, spend your free time worshipping the sun or hiding in the shade, wa…";

export const Route = createFileRoute("/help/health-safety/allergic-reactions-to-insect-stings")({
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
      eyebrow="Health & safety"
      title={`Allergic Reactions To Insect Stings`}
      intro={`Regardless of age or geographic location, whether you work in an office or out on site, spend your free time worshipping the sun or hiding in the shade, wasps and bees are one of the few invertebrates we encounter in Europe which pose a risk of harm.`}
      body={
        <>
          <h3>Getting stung by an insect is an inevitable consequence of interacting with the environment.</h3>
          <p>For most people, a sting from a bee or wasp is a short-term inconvenience. A few hours of significant pain, which can be alleviated with nothing more than a rude word, some cold water and perhaps a mild painkiller. For other people, however, bees and wasps pose a significant danger. Allergic reactions or anaphylaxis can develop from a sting, which are potentially life-threatening.</p>
          <p>The article, written by Dr. Aarn Huissoon (MB, PhD, FRCP, FRCPath) for BALI, has been possible thanks to a financial grant from ALK-Abello, a global, research-driven pharmaceutical company which focusses on allergy diagnosis and treatment. It has been written specifically for landscape professionals and explores the types of reactions, the symptoms and treatment.</p>
          <p>For more information about how to treat insect stings visit the NHS website here.</p>
          <h3>documents</h3>
          <ol><li>Allergic Reactions to Insect Stings by Dr Aarn Huissoon 12 Mar 2019 220kb PDF</li></ol>
        </>
      }
    />
  );
}
