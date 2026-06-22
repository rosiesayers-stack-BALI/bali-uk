import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "xylella fastidiosa — BALI";
const DESC = "Contents - Introduction - Geographic distribution of Xylella - How the trade and public can help - New measures in 2021";

export const Route = createFileRoute("/help/pests/xylella-fastidiosa")({
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
      title={`xylella fastidiosa`}
      intro={`Contents - Introduction - Geographic distribution of Xylella - How the trade and public can help - New measures in 2021`}
      body={
        <>
          <h3>Xylella fastidiosa has the potential to cause disease in over 350 plant species. It has not been detected in the UK but there have been major outbreaks across Europe.</h3>
          <h4>Introduction</h4>
          <p>Xylella fastidiosa, more commonly referred to as Xylella, is a bacterium which causes disease in a wide range of plants including many shrubs and herbaceous plants, olive and several species of broadleaf trees.  Common symptoms of Xylella include leaf scorch, wilt, die-back and plant death. There is no known cure for the disease.</p>
          <h4>Geographic distribution of Xylella</h4>
          <p>Outbreaks of Xylella have previously occurred in Italy, France, Spain, Germany and Portugal, and the disease continues to spread throughout Europe.  Outbreaks were discovered in Belgium in 2018, and in Southern France, Italy and Spain during 2020.</p>
          <p>The challenge associated with managing the spread of Xylella concerns its long latency period, which means infected host plants may be transported into non-infected countries such as the UK without showing any symptoms. Research suggests there is a higher risk of Xylella with olive, almond, lavender, rosemary, coffee and polygala plants.</p>
          <h4>How the trade and public can help</h4>
          <p>The trade and public are asked to look out for symptoms and report cases which cannot be explained by factors such as frost damage, drought or other common pests and diseases, to the TreeAlert service .</p>
          <p>Advice to help prevent the accidental introduction of Xylella includes:</p>
          <ol><li>Source new plants carefully, where possible purchase plants grown in the UK</li><li>Propagate your own plants from seeds or cuttings</li><li>Check plants for signs of disease before purchase and monitor the health of new plants</li><li>Never bring plants back with you from abroad</li></ol>
          <h4>New measures for March 2021</h4>
          <p>To prevent the accidental introduction of Xylella to the UK, new measures are due to be introduced on higher risk host plants imported into GB from 4th March 2021.</p>
          <p>The new measures will affect imports of the following high-risk hosts of Xylella: • Coffea (coffee) • Lavandula sp. (lavender) • Nerium oleander • Olea europaea (olive) • Polygala myrtifolia • Prunus dulcis (almond) • Rosmarinus officinalis (rosemary)</p>
          <p>Plants for planting, other than seeds, that belong to the genera and species listed in the list of Xylella host plants, other than, Coffea (coffee), Lavandula sp. (lavender), Nerium oleander, Olea europaea (olive), Polygala myrtifolia, Prunus dulcis (almond) and Rosmarinus officinalis (rosemary), from all third countries:</p>
          <p>The plants must: (a) have been grown for at least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa or (b) have been grown for at least three years before export, or in the case of plants which are younger than three years have been grown throughout their life, in an area that is free from Xylella fastidiosa or (c) in the case of plants which originate in an area where Xylella fastidiosa is not known to be absent, have been produced in a site that is: • authorised as a site that is free from Xylella fastidiosa and its vectors, • physically protected against the introduction of Xylella fastidiosa, • surrounded by a zone with a width of 100 m where plants found to be infected with Xylella fastidiosa removed, and appropriate treatments against the vectors have been applied, • treatments to maintain freedom from the vectors have been carried out • at least two official inspections during the flight season of the vectors have been carried out. • neither symptoms of Xylella fastidiosa or its vectors were found in the site or 100m zone surrounding it, if suspect symptoms were observed, testing was carried out to confirm the absence of Xylella fastidiosa. • inspection and testing prior to export. Plants intended for planting other than seeds, of Coffea sp. and Polygala myrtifolia, from any third country: (a) have been grown for at least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa. or (b) have been grown for at least three years before export, or in the case of plants which are younger than three years have been grown throughout their life, in an area that is free from Xylella fastidiosa. and in the case of Polygala myrtifolia (c) each lot of plants of Polygala myrtifolia has been subjected in addition to official visual inspection, sampling and testing.</p>
          <p>Plants intended for planting other than seeds, of Lavandula sp., Nerium oleander and Rosmarinus officinalis, from any third country: (a) have been grown for at least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa. or (b) in the case of plants which originate in an area where Xylella fastidiosa is not known to be absent, have been produced • a place of production registered and supervised by the national plant protection organisation for a period of at least one year before the export of the plants • the place of production and a 200m zone surrounding it is known to be free from Xylella fastidiosa. • the plants have been subjected to an annual official inspection sampling and testing to confirm the absence of Xylella fastidiosa • immediately before their export, the plants were subjected to an official visual inspection for the presence of Xylella fastidiosa where any symptoms are observed, testing should be carried out. • the plants have been grown under physical protection</p>
          <p>Plants intended for planting other than seeds and plants grown for their entire production cycle in vitro, of Olea europaea and Prunus dulcis from any third country:</p>
          <p>(a) have been grown for least three years or in the case of plants which are younger than three years, have been grown throughout their life, in a country which, is known to be free from Xylella fastidiosa. or (b) in the case of plants which originate in an area where Xylella fastidiosa is not known to be absent, plants have been produced in: • place of production registered and supervised by the national plant protection organisation for a period of at least one year before the export of the plants • the place of production and a 200m zone surrounding it is known to be free from Xylella fastidiosa. • the plants have been subjected to an annual official inspection sampling and testing to confirm the absence of Xylella fastidiosa • immediately before their export, the plants were subjected to an official visual inspection for the presence of Xylella fastidiosa where any symptoms are observed, testing should be carried out. • Plant have been grown under physical protection</p>
        </>
      }
    />
  );
}
