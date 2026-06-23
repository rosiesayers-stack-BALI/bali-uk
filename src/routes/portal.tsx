import { createFileRoute, redirect } from "@tanstack/react-router";
import PortalPage from "../pages/PortalPage";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/portal")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "My BALI Portal" },
      { name: "description", content: "Your BALI member dashboard." },
    ],
  }),
  component: PortalPage,
});
