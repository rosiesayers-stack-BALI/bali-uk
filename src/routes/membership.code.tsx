import { createFileRoute } from "@tanstack/react-router";
import StubPage from "../components/StubPage";

const TITLE = "Code of Conduct — BALI";
const DESC = "The BALI Code of Conduct sets out the professional standards every member commits to — protecting clients, workers and the reputation of the industry.";

export const Route = createFileRoute("/membership/code")({
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
      eyebrow="Professional standards"
      title="Code of Conduct"
      intro="The BALI Code of Conduct sets out the professional standards every member commits to — protecting clients, workers and the reputation of the industry."
      bullets={[
  "Honest, transparent dealing with clients and the public",
  "Compliance with all relevant legal and regulatory standards",
  "Safe working practices and proper insurance cover",
  "Fair treatment of employees, sub-contractors and suppliers",
  "Cooperation with the BALI dispute resolution service"
]}
    />
  );
}
