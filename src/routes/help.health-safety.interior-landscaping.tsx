import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "interior landscaping — BALI";
const DESC = "Interior landscaping; what does it mean to you? An unnecessary expense or a means of improving worker productivity? A feature to draw visitors or a potenti…";

export const Route = createFileRoute("/help/health-safety/interior-landscaping")({
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
      title={`interior landscaping`}
      intro={`Interior landscaping; what does it mean to you? An unnecessary expense or a means of improving worker productivity? A feature to draw visitors or a potential headache for the cleaners?`}
      body={
        <>
          <h3>Recognising the health benefits of interior landscaping in domestic and commercial settings makes people more contented and productive.</h3>
          <p>Interior landscaping has come a long way since the days of using a sickly Peace Lily to prop open a door. Peer-reviewed scientific articles support the theory that interior landscaping has the potential to make offices, restaurants, houses, schools, universities and public realm areas healthier, and anyone in these spaces more contented and productive.</p>
          <p>Sound too good to be true? Well-executed and maintained interior planting has been scientifically proven to bring benefits to workers and the office environment including:</p>
          <ul><li>Increased productivity</li><li>Decreased stress (lower blood pressure)</li><li>Increased attentiveness</li><li>More job satisfaction</li><li>Better perceived work-life balance</li></ul>
          <p>The range of health and wellbeing benefits seems unlikely until one considers the reality of office life. Most offices are in urban areas where outside air pollution is consistently high. A significant volume of exterior pollutants enter buildings and mix with office pollutants – commonly volatile organic compounds from items such as furniture, printers, air fresheners and paint - to create an unhealthy environment. Even small concentrations of these chemicals can have an effect and result in ailments familiar to most office workers: headaches, sore eyes, nose and throat, and nausea. These are commonly grouped as sick building syndrome.</p>
          <p>The benefit of interior plants is simple – they remove most types of air-borne pollutants via the natural process of photosynthesis and help maintain office humidity via another natural process - transpiration. Plants also help to dissipate noise.</p>
          <p>The use of designed interior planting schemes within commercial and public buildings started in the late 1970s and early 1980s when the concept of incorporating atriums into new buildings became widespread. Architects and developers commonly incorporated schemes of containerised plants in offices, shopping malls, hospitals and airports. An industry grew to service clients who wanted the benefits of interior plants but none of the hassle.</p>
          <p>Times have changed and there is a gulf between architect-designed atriums of the 1970s and the limited space available in many modern office spaces. As a result, space-efficient solutions have been developed which feature stand-alone, wall hung, ceiling hung, pots or planters and are proving increasingly popular in commercial and domestic spaces.</p>
          <p>At the 2019 BALI National Landscape Awards, the Principal Award for Interior Landscape - Installation Only was won by BALI Registered Contractor Nurture Landscaps , for an interior planting scheme inside the Kimpton Fitzroy Hotel. The client brief was to supply plants, both living and faux, and free-standing planters and pots, along with GRP trellis planters and supporting structures. Six 5m olive trees with kiln-dried trunks and replica foliage form the main elements of the scheme with the remaining planting being a mixture of real and faux plants in tropical and temperate species to live both inside and outside in the Palm Court and Winter Gardens. A total of 64 planters are included in the scheme in zinc, terracotta, GRP and stone, and bespoke GRP liners were designed for the built-in planters.</p>
          <p>Most interior landscapers work with approximately 20 plant specimens, very few of which will be used by exterior landscapers. The size and variety of specimens varies hugely, depending on availability of space and budget, with environmental factors such as water, nutrients, light and humidity being tailored to suit an installation. Although self-watering systems now exist, most interior landscape contractors also offer a complete maintenance service which includes watering, cleaning, pruning and replacing dead plants.</p>
          <p>The wider benefits of interior landscaping should be considered as a way of providing a healthy and pleasant working environment, with the bonus of enhancing the image of the company.</p>
        </>
      }
    />
  );
}
