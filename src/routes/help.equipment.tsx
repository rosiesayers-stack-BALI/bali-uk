import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "Machinery & Driving — BALI";
const DESC = "Essential information on equipment and operating rules for landscape professionals — towing, tachographs, rebated fuel, E10 fuel, tractor licences, driving for better business.";

export const Route = createFileRoute("/help/equipment")({
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
  { title: "Towing", description: "Towing a trailer — licences, weights and the law.", href: "/help/equipment/towing" },
  { title: "Tachographs", description: "When tachographs are required and how to stay compliant.", href: "/help/equipment/tachographs" },
  { title: "Rebated (red) fuel", description: "Rules around using rebated diesel on the road and on site.", href: "/help/equipment/red-diesel" },
  { title: "E10 fuel", description: "What E10 means for landscape machinery and older equipment.", href: "/help/equipment/e10-fuel" },
  { title: "Tractor licences", description: "Categories, age requirements and what you can drive.", href: "/help/equipment/tractors" },
  { title: "Driving for better business", description: "Industry programme helping employers manage work-related road risk.", href: "/help/equipment/driving-for-better-business" },
];

function Page() {
  return (
    <HelpPage
      eyebrow="Machinery & driving"
      title="Machinery & Driving"
      intro="Landscape work involves trailers, tractors, fuel and powered tools — each with its own legal and safety framework. Use the resources below to stay compliant, protect your team and avoid avoidable fines."
      body={
        <>
          <h3>Why this section matters</h3>
          <p>
            Vehicles and machinery are by far the highest-risk activity for most landscape businesses. Getting the rules right protects your team, your insurance position and your operator's licence — and demonstrates professionalism to clients and HSE inspectors alike.
          </p>

          <h3>Key compliance checkpoints</h3>
          <ul>
            <li><strong>Driving licences.</strong> Check the actual entitlements held by every driver — not just the category they "think" they have. Post-1997 car licences are restricted on trailer weights, and tractor categories (F) have age and road-use limits.</li>
            <li><strong>Trailer loading and security.</strong> Know the maximum authorised mass (MAM) of your vehicle and trailer combination, and how to secure tools, ride-on mowers and materials safely.</li>
            <li><strong>Tachographs.</strong> Most landscape vehicles are exempt — but exemptions are narrower than people assume, particularly once you go over 3.5t or work beyond a defined radius.</li>
            <li><strong>Fuel.</strong> Rebated (red) diesel rules tightened significantly in 2022. Most landscape and grounds-maintenance work can no longer use red diesel; check the current HMRC guidance before fuelling.</li>
            <li><strong>E10 petrol.</strong> Some older two-stroke equipment, strimmers and chainsaws are not compatible with E10. Check manufacturer guidance to avoid engine damage.</li>
          </ul>

          <h3>Driver and operator safety</h3>
          <p>
            Work-related road risk is the single biggest cause of work-related fatalities in the UK. The Driving for Better Business programme — backed by National Highways — gives employers free tools to assess risk, set policies and demonstrate due diligence to clients and insurers.
          </p>

          <h3>Before you start a job</h3>
          <ul>
            <li>Confirm vehicle and trailer are within MAM and properly maintained.</li>
            <li>Verify the driver's licence entitlement and any required CPC.</li>
            <li>Check tool inspection, PAT and operator training records are in date.</li>
            <li>Brief the team on site access, parking and unloading risks.</li>
          </ul>
        </>
      }
      subTopics={SUB}
    />
  );
}
