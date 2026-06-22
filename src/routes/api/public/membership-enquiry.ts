import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  categoryInterest: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
  source: z.string().trim().max(80).optional().or(z.literal("")),
});

export const Route = createFileRoute("/api/public/membership-enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = schema.safeParse(json);
          if (!parsed.success) {
            return new Response(JSON.stringify({ error: "Invalid form data" }), {
              status: 400,
              headers: { "content-type": "application/json" },
            });
          }
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { error } = await supabaseAdmin.from("membership_enquiries").insert({
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone || null,
            company: parsed.data.company || null,
            category_interest: parsed.data.categoryInterest || null,
            message: parsed.data.message,
            source: parsed.data.source || "membership-enquiry",
          });
          if (error) {
            return new Response(JSON.stringify({ error: "Could not save" }), {
              status: 500,
              headers: { "content-type": "application/json" },
            });
          }
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        } catch {
          return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }
      },
    },
  },
});
