import { createFileRoute, redirect } from "@tanstack/react-router";

// Consolidated into the main Join / Categories page.
export const Route = createFileRoute("/membership/become-a-member")({
  beforeLoad: () => {
    throw redirect({ to: "/join" });
  },
});
