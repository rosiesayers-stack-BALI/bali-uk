import { createFileRoute } from "@tanstack/react-router";

/**
 * Workbooks → Lovable Cloud hourly sync endpoint.
 *
 * Called by pg_cron every hour with the Supabase anon key as `apikey`.
 *
 * Requires:
 *   - WORKBOOKS_API_KEY    (per-user API key)
 *   - WORKBOOKS_BASE_URL   (e.g. https://secure.workbooks.com)
 *
 * Pulls from Workbooks and upserts into workbooks_* tables. The full record
 * is always stored in the `raw` jsonb column so we can refine field mapping
 * later without re-fetching. Unknown / missing fields are left null.
 */

const PAGE_SIZE = 100;
const MAX_PAGES_PER_RESOURCE = 50; // 5000 records max per resource per run

type Resource =
  | "organisations"
  | "people"
  | "customer_invoices"
  | "event_bookings"
  | "sales_leads"
  | "opportunities";

const RESOURCE_PATHS: Record<Resource, string> = {
  organisations: "/crm/organisations.api",
  people: "/crm/people.api",
  customer_invoices: "/accounting/sales_invoices.api",
  event_bookings: "/crm/event_bookings.api",
  sales_leads: "/crm/sales_leads.api",
  opportunities: "/crm/opportunities.api",
};

// Columns we want from each resource. Workbooks' JSON API returns only `id`
// + `lock_version` unless _select_columns[] is sent. Use `*` to get everything.
const SELECT_ALL = ["*"];

export const Route = createFileRoute("/api/public/hooks/workbooks-sync")({
  server: {
    handlers: {
      POST: async ({ request }) => guard(request) ?? handle(),
      GET: async ({ request }) => guard(request) ?? handle(),
    },
  },
});

function guard(request: Request): Response | null {
  const expected = process.env.WORKBOOKS_SYNC_SECRET;
  if (!expected) {
    console.error("workbooks-sync: WORKBOOKS_SYNC_SECRET not configured — refusing to run");
    return new Response("Server misconfigured", { status: 503 });
  }
  const provided =
    request.headers.get("x-webhook-secret") ??
    request.headers.get("x-sync-secret") ??
    new URL(request.url).searchParams.get("secret");
  if (!provided || provided.length !== expected.length) {
    return new Response("Unauthorized", { status: 401 });
  }
  // constant-time compare
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  if (mismatch !== 0) return new Response("Unauthorized", { status: 401 });
  return null;
}

async function handle(): Promise<Response> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

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
    const msg = "Workbooks credentials not configured — set WORKBOOKS_API_KEY and WORKBOOKS_BASE_URL";
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
  const errors: Record<string, string> = {};

  for (const resource of Object.keys(RESOURCE_PATHS) as Resource[]) {
    try {
      const rows = await fetchAll(baseUrl, apiKey, RESOURCE_PATHS[resource]);
      pulled[resource] = rows.length;
      if (rows.length) await upsertResource(supabaseAdmin, resource, rows);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`workbooks-sync: ${resource} failed`, err);
      errors[resource] = msg;
    }
  }

  const hasErrors = Object.keys(errors).length > 0;
  await supabaseAdmin
    .from("workbooks_sync_runs")
    .update({
      status: hasErrors ? "error" : "ok",
      finished_at: new Date().toISOString(),
      pulled,
      error_message: hasErrors ? JSON.stringify(errors) : null,
    })
    .eq("id", run.id);

  return json({ ok: !hasErrors, pulled, errors: hasErrors ? errors : undefined });
}

// ---------- Workbooks API ----------

type WbRow = Record<string, unknown>;

async function fetchAll(baseUrl: string, apiKey: string, path: string): Promise<WbRow[]> {
  const all: WbRow[] = [];
  for (let page = 0; page < MAX_PAGES_PER_RESOURCE; page++) {
    const url = new URL(path, baseUrl);
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("_start", String(page * PAGE_SIZE));
    url.searchParams.set("_limit", String(PAGE_SIZE));
    url.searchParams.set("_sortorder", "asc");

    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      throw new Error(`${path} HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
    const body = (await res.json()) as { data?: WbRow[]; total?: number };
    const data = Array.isArray(body.data) ? body.data : [];
    all.push(...data);
    if (data.length < PAGE_SIZE) break;
  }
  return all;
}

// ---------- Mapping ----------

function pick(row: WbRow, ...keys: string[]): string | null {
  for (const k of keys) {
    const v = row[k];
    if (v != null && v !== "") return String(v);
  }
  return null;
}

function pickNum(row: WbRow, ...keys: string[]): number | null {
  for (const k of keys) {
    const v = row[k];
    if (v != null && v !== "" && !Number.isNaN(Number(v))) return Number(v);
  }
  return null;
}

function pickDate(row: WbRow, ...keys: string[]): string | null {
  const v = pick(row, ...keys);
  if (!v) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

async function upsertResource(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any,
  resource: Resource,
  rows: WbRow[],
): Promise<void> {
  const now = new Date().toISOString();

  switch (resource) {
    case "organisations": {
      const mapped = rows
        .filter((r) => r.id != null)
        .map((r) => ({
          wb_id: String(r.id),
          name: pick(r, "name", "organisation_name"),
          category: pick(r, "industry", "organisation_category"),
          status: pick(r, "status"),
          vat_number: pick(r, "vat_number"),
          reg_number: pick(r, "registration_number", "company_registration_number"),
          address_line1: pick(r, "main_location[street_address]", "main_location[address_1]"),
          address_line2: pick(r, "main_location[address_2]"),
          town: pick(r, "main_location[town]"),
          county: pick(r, "main_location[county_province_state]", "main_location[county]"),
          postcode: pick(r, "main_location[postcode]"),
          country: pick(r, "main_location[country]"),
          region: pick(r, "main_location[region]"),
          phone: pick(r, "main_location[telephone]", "telephone"),
          public_email: pick(r, "main_location[email]", "email"),
          website: pick(r, "website"),
          raw: r,
          synced_at: now,
        }));
      if (mapped.length) await db.from("workbooks_orgs").upsert(mapped, { onConflict: "wb_id" });
      return;
    }
    case "people": {
      const mapped = rows
        .filter((r) => r.id != null)
        .map((r) => ({
          wb_id: String(r.id),
          wb_org_id: pick(r, "employer_link", "main_employer[id]", "employer_id"),
          name: pick(r, "name", "person_personal_title") ?? "(unknown)",
          email: pick(r, "main_location[email]", "email"),
          phone: pick(r, "main_location[telephone]", "telephone"),
          raw: r,
          synced_at: now,
        }));
      if (mapped.length) await db.from("workbooks_people").upsert(mapped, { onConflict: "wb_id" });
      return;
    }
    case "customer_invoices": {
      const mapped = rows
        .filter((r) => r.id != null)
        .map((r) => ({
          wb_id: String(r.id),
          wb_org_id: pick(r, "customer_organisation_id", "customer[id]", "customer_party_id"),
          reference: pick(r, "document_reference", "reference"),
          amount: pickNum(r, "gross_amount", "net_amount", "total_amount"),
          status: pick(r, "status", "document_status"),
          smartcard_ref: pick(r, "created_through_reference", "external_reference"),
          issued_at: pickDate(r, "document_date", "created_at"),
          raw: r,
          synced_at: now,
        }));
      if (mapped.length) await db.from("workbooks_invoices").upsert(mapped, { onConflict: "wb_id" });
      return;
    }
    case "event_bookings": {
      const mapped = rows
        .filter((r) => r.id != null)
        .map((r) => ({
          wb_id: String(r.id),
          wb_person_id: pick(r, "person_id", "delegate_person_id", "attendee[id]"),
          wb_org_id: pick(r, "organisation_id", "delegate_organisation_id"),
          attendee_name: pick(r, "name", "delegate_name", "attendee_name"),
          attendee_email: pick(r, "email", "delegate_email"),
          status: pick(r, "status", "booking_status"),
          amount: pickNum(r, "total_price", "price", "amount"),
          paid_at: pickDate(r, "paid_at", "payment_received_at"),
          payment_ref: pick(r, "payment_reference", "external_reference"),
          payment_provider: pick(r, "payment_provider"),
          notes: pick(r, "notes", "description"),
          raw: r,
          synced_at: now,
        }));
      if (mapped.length) await db.from("workbooks_bookings").upsert(mapped, { onConflict: "wb_id" });
      return;
    }
    case "sales_leads": {
      const mapped = rows
        .filter((r) => r.id != null)
        .map((r) => ({
          wb_id: String(r.id),
          wb_org_id: pick(r, "org_lead_party[id]", "organisation_id"),
          title: pick(r, "name", "description"),
          stage: pick(r, "status", "stage"),
          amount: pickNum(r, "amount", "value"),
          raw: r,
          synced_at: now,
        }));
      if (mapped.length)
        await db.from("workbooks_opportunities").upsert(mapped, { onConflict: "wb_id" });
      return;
    }
    case "opportunities": {
      const mapped = rows
        .filter((r) => r.id != null)
        .map((r) => ({
          wb_id: String(r.id),
          wb_org_id: pick(r, "customer[id]", "organisation_id", "primary_contact[employer_id]"),
          title: pick(r, "description", "name"),
          stage: pick(r, "stage", "sales_stage"),
          amount: pickNum(r, "amount", "estimated_close_amount", "value"),
          raw: r,
          synced_at: now,
        }));
      if (mapped.length)
        await db.from("workbooks_opportunities").upsert(mapped, { onConflict: "wb_id" });
      return;
    }
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
