import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import MyBaliLoginPage from "../pages/MyBaliLoginPage";

export const Route = createFileRoute("/login")({
  ssr: false,
  validateSearch: (search) =>
    z.object({ dest: z.string().optional() }).parse(search),
  head: () => ({
    meta: [
      { title: "Sign in — My BALI" },
      { name: "description", content: "Sign in to your BALI member account." },
    ],
  }),
  component: MyBaliLoginPage,
});
