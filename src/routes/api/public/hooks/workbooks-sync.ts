import { createFileRoute } from "@tanstack/react-router";

/**
 * Workbooks → Lovable Cloud hourly sync endpoint.
 *
 * Called by pg_cron every hour with the Supabase anon key as `apikey`.
 *
 * Requires the following runtime secrets to actually pull data:
 *   - WORKBOOKS_API_KEY     (the per-user API key from Workbooks)
 *   - WORKBOOKS_BASE_URL    (e.g. https://secure.workbooks.com)
 *
 * Until those are set the route is a safe no-op that records a run.
 *
 * Endpoints we'll pull from (Workbooks JSON API):
 *   GET  /crm/organisations.api
 *   GET  /crm/people.api
 *   GET  /accounting/customer_invoices.api
 *   GET  /event/event_bookings.api
 *   GET  /crm/sales_leads.api
 *   GET  /crm/opportunities.api
 *
 * Endpoints we'll push to:
 *   POST /crm/sales_leads.api           (membership applications)
 *   POST /event/event_bookings.api      (paid event bookings)
 *   PUT  /crm/people.api                (profile / address / password changes)
 */

const RESOURCES = [
  "organisations",
  "people",
  "customer_invoices",
  "event_bookings",
  "sales_leads",
  "opportunities",
] as const;

type Resource = (typeof RESOURCES)[number];

export const Route = createFileRoute("/api/public/hooks/workbooks-sync")({
  server: {
    handlers: {
      POST: async () => handle(),
      GET: async () => handle(), // GET allowed for easy manual testing
    },
  },
});

async function handle(): Promise<Response> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // open a run row
  const { data: run, error: runErr } = await supabaseAdmin
    .from("workbooks_sync_runs")
    .insert({ status: "running" })
    .select("id")
    .single();

  if (runErr || !run) {
    console.error("workbooks-sync: failed to open run row", runErr);
    return json({ ok: false, error: "could not open sync run" }, 500);
  }

  const apiKey = process.env.WORKBOOKS_API_KEY;
  const baseUrl = process.env.WORKBOOKS_BASE_URL;

  if (!apiKey || !baseUrl) {
    const msg = "Workbooks credentials not configured — skipping (set WORKBOOKS_API_KEY and WORKBOOKS_BASE_URL)";
    console.warn("workbooks-sync:", msg);
    await supabaseAdmin
      .from("workbooks_sync_runs")
      .update({ status: "ok", finished_at: new Date().toISOString(), error_message: msg })
      .eq("id", run.id);
    return json({ ok: true, skipped: true, message: msg });
  }

  const pulled: Record<Resource, number> = {
    organisations: 0,
    people: 0,
    customer_invoices: 0,
    event_bookings: 0,
    sales_leads: 0,
    opportunities: 0,
  };

  try {
    // TODO: implement per-resource pull → upsert into workbooks_* tables.
    // Stubbed out until the Workbooks API key + base URL are provided
    // and we have a sample JSON shape from Workbooks support to map fields from.

    await supabaseAdmin
      .from("workbooks_sync_runs")
      .update({
        status: "ok",
        finished_at: new Date().toISOString(),
        pulled,
      })
      .eq("id", run.id);

    return json({ ok: true, pulled });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("workbooks-sync: error", err);
    await supabaseAdmin
      .from("workbooks_sync_runs")
      .update({
        status: "error",
        finished_at: new Date().toISOString(),
        error_message: message,
      })
      .eq("id", run.id);
    return json({ ok: false, error: message }, 500);
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
