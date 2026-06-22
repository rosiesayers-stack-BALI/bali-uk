import { createFileRoute, redirect } from "@tanstack/react-router";

// The categories page lives at /join (full custom page with categories grid,
// benefits, steps, FAQ). We keep one canonical implementation and redirect.
export const Route = createFileRoute("/membership/categories")({
  beforeLoad: () => {
    throw redirect({ to: "/join" });
  },
});
