import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/help/contract")({
  beforeLoad: () => {
    throw redirect({ to: "/help/contracts" });
  },
});
