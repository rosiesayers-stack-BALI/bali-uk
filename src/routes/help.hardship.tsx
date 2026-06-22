import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/help/hardship")({
  beforeLoad: () => {
    throw redirect({ to: "/membership/hardship-fund" });
  },
});
