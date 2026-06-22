import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/help/domestic-landscape-contract")({
  beforeLoad: () => {
    throw redirect({ to: "/help/contracts" });
  },
});
