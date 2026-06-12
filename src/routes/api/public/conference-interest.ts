import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  member: z.boolean().optional(),
  sponsorInterest: z.boolean().optional(),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const Route = createFileRoute("/api/public/conference-interest")({
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
          const { error } = await supabaseAdmin.from("conference_interest").insert({
            name: parsed.data.name,
            email: parsed.data.email,
            company: parsed.data.company || null,
            role: parsed.data.role || null,
            member: !!parsed.data.member,
            sponsor_interest: !!parsed.data.sponsorInterest,
            notes: parsed.data.notes || null,
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
