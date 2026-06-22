import { createFileRoute } from "@tanstack/react-router";
import HelpPage from "../components/HelpPage";

const TITLE = "towing — BALI";
const DESC = "What weight can I tow with a car licence? *UPDATED 16/12/2021* How much weight can my vehicle tow? How much weight can my trailer carry? What size trailer …";

export const Route = createFileRoute("/help/equipment/towing")({
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
      eyebrow="Machinery & driving"
      title={`towing`}
      intro={`What weight can I tow with a car licence? *UPDATED 16/12/2021* How much weight can my vehicle tow? How much weight can my trailer carry? What size trailer can I tow? How can I avoid exceeding the towing capacity of my trailer or vehicle?`}
      body={
        <>
          <h3>Contents</h3>
          <h4>What weight can I tow with a car licence?</h4>
          <p>New rules introduced on 16th December 2021 allow anyone who passed their car driving test (Driving licence category B) from 1st January 1997 to tow trailers up to 3,500kg maximum authorised mass* (MAM).</p>
          <p>This change is significant; up until now, anyone who passed their car driving test after 1st January 1997 has been required by law to pass a car and trailer driving test to tow a trailer up to 3,500kg MAM (within the towing limits of the vehicle).  Drivers will now get Category BE added to their driving licence when they next get a new photocard driving licence and do not need to contact DVLA for this to happen.</p>
          <p>Any person who passed their driving test before 1st January 1997 is permitted to drive a vehicle and trailer with a combined weight not exceeding 8,250kg</p>
          <p>Regardless of the law change, employers are reminded of the need to ensure employees are competent to drive a car or van with trailer.  Training providers such as BALI member Train for Towing continue to offer packages which ensure drivers are taught how to load, attach and drive with a trailer.</p>
          <p>BALI strongly recommend new drivers and those who have not previously driven with a trailer receive professional training before driving with a trailer either for domestic or commercial purposes. *Maximum authorised mass (MAM) is defined is the maximum weight of a vehicle or trailer including the maximum load that can be carried safely while used on the road. This is also known as gross vehicle weight (GVW) or permissible maximum weight.</p>
          <p>Link to DVSA webpage: New rules for towing a trailer with a car from autumn 2021</p>
          <h4>How much weight can my vehicle tow?</h4>
          <p>It is important to refer to the Vehicle Identification Number (VIN) plate found on all cars and vans when identifying the weight limit of a vehicle, as this is the reference point used if a vehicle is stopped by authorities.</p>
          <p>The VIN plate is usually found on the vehicle chassis, under the bonnet or on a door pillar, and contains several numbers as shown on the image below:</p>
          <p>In the image above, there are 4 separate numbers:</p>
          <p>2255kg: The Gross Vehicle Weight of the vehicle.  This is the maximum weight of the vehicle when it is fully loaded with fuel, driver, passenger and cargo.</p>
          <p>4185kg: Gross train weight, the combined maximum allowable mass of the fully-loaded vehicle and fully-loaded trailer.  This figure must never be exceeded.</p>
          <p>1120kg: Maximum permissible axle load (weight) on front axle 1180kg: Maximum permissible axle load (weight) on rear axle</p>
          <p>The maximum towing capacity of a vehicle is calculated by subtracting the gross vehicle weight from the gross train weight.</p>
          <p>Using the VIN plate in the picture above as an example: 4185kg - 2255kg = Towing capacity of 1,930kg (this figure includes the weight of the trailer and anything carried in the trailer) The towing capacity of vans and cars varies according to body size, body type, drive-train and transmission, so always check the weight plate of whatever vehicle you are using carefully.</p>
          <h4>How much weight can my trailer carry?</h4>
          <p>Trailer manufacturers record the maximum trailer weight on the chassis plate of the trailer.</p>
          <h4>What size (dimension) trailer can I tow with my vehicle?</h4>
          <p>A towing vehicle with a gross vehicle weight of 3500kg or lower is restricted to the size of trailer it may tow. The trailer can be a maximum of 7m long by 2.55m wide.</p>
          <h4>How can I avoid exceeding the towing capacity of my trailer or vehicle?</h4>
          <p>Get your vehicle and/or trailer weighed at a weighbridge. Use this link to find weighbridges throughout the UK</p>
        </>
      }
    />
  );
}
