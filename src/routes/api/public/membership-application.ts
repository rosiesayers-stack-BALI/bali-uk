import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MEMBERSHIP_EMAIL = "membership@bali.org.uk";

export const Route = createFileRoute("/api/public/membership-application")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const form = await request.formData();
          const category = String(form.get("category") ?? "");
          const payloadRaw = String(form.get("payload") ?? "{}");

          if (!category || category.length > 60) {
            return new Response("Invalid category", { status: 400 });
          }

          let payload: Record<string, unknown>;
          try {
            payload = JSON.parse(payloadRaw);
          } catch {
            return new Response("Invalid payload", { status: 400 });
          }

          // Basic shape validation
          const baseSchema = z.object({
            company: z.object({
              name: z.string().min(1).max(200),
            }).passthrough(),
            applicantContact: z.object({
              name: z.string().min(1).max(200),
              email: z.string().email().max(255),
            }).passthrough(),
          }).passthrough();
          const parsed = baseSchema.safeParse(payload);
          if (!parsed.success) {
            return new Response("Invalid form data", { status: 400 });
          }

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

          // Collect file entries
          const fileEntries: Array<{ key: string; file: File }> = [];
          for (const [k, v] of form.entries()) {
            if (k.startsWith("file:") && v instanceof File) {
              if (v.size > 10 * 1024 * 1024) {
                return new Response("File too large", { status: 400 });
              }
              fileEntries.push({ key: k.slice(5), file: v });
            }
          }
          if (fileEntries.length > 12) {
            return new Response("Too many files", { status: 400 });
          }

          const submissionId = crypto.randomUUID();
          const uploads: Array<{ label: string; path: string; signedUrl: string }> = [];

          for (const { key, file } of fileEntries) {
            const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
            const path = `${category}/${submissionId}/${Date.now()}_${safeName}`;
            const buf = await file.arrayBuffer();
            const { error: upErr } = await supabaseAdmin.storage
              .from("membership-applications")
              .upload(path, buf, { contentType: file.type || "application/octet-stream", upsert: false });
            if (upErr) {
              console.error("upload error", upErr);
              return new Response("Upload failed", { status: 500 });
            }
            const { data: signed } = await supabaseAdmin.storage
              .from("membership-applications")
              .createSignedUrl(path, 60 * 60 * 24 * 14); // 14 days
            uploads.push({ label: key, path, signedUrl: signed?.signedUrl ?? "" });
          }

          // Build email body
          const html = renderApplicationEmail(category, payload, uploads);
          const subject = `New BALI membership application — ${category} — ${(parsed.data.company.name as string)}`;
          const applicantEmail = parsed.data.applicantContact.email as string;
          const applicantName = parsed.data.applicantContact.name as string;

          // Try to send via Lovable Emails queue if available; otherwise log to console.
          let emailSent = false;
          try {
            const rpc = (supabaseAdmin as unknown as { rpc: (fn: string, args: Record<string, unknown>) => Promise<{ error: unknown }> }).rpc;
            const { error: enqErr } = await rpc("enqueue_email", {
              queue_name: "transactional_emails",
              payload: {
                to: MEMBERSHIP_EMAIL,
                from: "noreply@notify.bali.org.uk",
                subject,
                html,
                reply_to: applicantEmail,
              },
            });
            if (!enqErr) emailSent = true;
            else console.warn("enqueue_email failed:", enqErr);
          } catch (e) {
            console.warn("enqueue_email not available:", e);
          }

          if (!emailSent) {
            // Fallback: log full submission for manual recovery while email infra is being set up
            console.log("====== MEMBERSHIP APPLICATION (email infra pending) ======");
            console.log("SUBJECT:", subject);
            console.log("TO:", MEMBERSHIP_EMAIL);
            console.log("REPLY-TO:", applicantEmail);
            console.log("APPLICANT:", applicantName);
            console.log("CATEGORY:", category);
            console.log("UPLOADS:", JSON.stringify(uploads, null, 2));
            console.log("PAYLOAD:", JSON.stringify(payload, null, 2));
            console.log("===========================================================");
          }

          return Response.json({ ok: true, submissionId, emailSent });
        } catch (e) {
          console.error("membership-application error:", e);
          return new Response("Server error", { status: 500 });
        }
      },
    },
  },
});

function escapeHtml(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRow(label: string, value: unknown): string {
  if (value === undefined || value === null || value === "") return "";
  let display: string;
  if (Array.isArray(value)) display = value.length ? value.map((v) => escapeHtml(v)).join(", ") : "—";
  else if (typeof value === "object") display = "<pre style=\"margin:0;font-family:inherit;white-space:pre-wrap\">" + escapeHtml(JSON.stringify(value, null, 2)) + "</pre>";
  else display = escapeHtml(value);
  return `<tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;color:#334155;width:38%;border-bottom:1px solid #e2e8f0;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0f172a;border-bottom:1px solid #e2e8f0">${display}</td></tr>`;
}

function renderSection(title: string, rows: string[]): string {
  const body = rows.filter(Boolean).join("");
  if (!body) return "";
  return `<h3 style="margin:24px 0 8px;color:#1D4D59;font-size:16px">${escapeHtml(title)}</h3><table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">${body}</table>`;
}

function renderApplicationEmail(category: string, payload: Record<string, unknown>, uploads: Array<{ label: string; path: string; signedUrl: string }>): string {
  const company = (payload.company ?? {}) as Record<string, unknown>;
  const applicant = (payload.applicantContact ?? {}) as Record<string, unknown>;
  const main = (payload.mainContact ?? {}) as Record<string, unknown>;
  const invoice = (payload.invoiceContact ?? {}) as Record<string, unknown>;
  const sig = (payload.signature ?? {}) as Record<string, unknown>;
  const tradeRefs = (payload.tradeRefs ?? []) as Array<Record<string, unknown>>;
  const clientRefs = (payload.clientRefs ?? []) as Array<Record<string, unknown>>;
  const disciplines = (payload.disciplines ?? []) as string[];
  const docs = (payload.documents ?? {}) as Record<string, boolean>;

  const ref = (r: Record<string, unknown>, i: number) =>
    `<div style="padding:8px 0;border-top:1px solid #e2e8f0"><strong>#${i + 1}</strong> ${escapeHtml(r.contactName ?? "—")} (${escapeHtml(r.companyName ?? "—")}) · ${escapeHtml(r.email ?? "")} · ${escapeHtml(r.mobile ?? "")}</div>`;

  const uploadList = uploads.length
    ? `<ul style="padding-left:20px;color:#0f172a">${uploads
        .map((u) => `<li><strong>${escapeHtml(u.label)}</strong> — <a href="${escapeHtml(u.signedUrl)}" style="color:#0E8B61">Download</a> <span style="color:#64748b;font-size:12px">(link valid 14 days)</span></li>`)
        .join("")}</ul>`
    : '<p style="color:#64748b">No files uploaded — applicant may send separately.</p>';

  const declaredDocs = Object.entries(docs).filter(([, v]) => v).map(([k]) => k);

  return `<!doctype html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;margin:0;padding:24px;color:#0f172a">
<div style="max-width:720px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e8f0">
<h1 style="margin:0 0 4px;color:#0E8B61;font-size:22px">New membership application</h1>
<p style="margin:0 0 24px;color:#64748b;font-size:14px">Category: <strong style="color:#0f172a">${escapeHtml(category)}</strong></p>

${renderSection("Company information", [
  renderRow("Company name", company.name),
  renderRow("Parent company", company.parentCompanyName),
  renderRow("Parent membership #", company.parentCompanyMembershipNo),
  renderRow("Address", [company.streetAddress, company.town, company.county, company.postcode, company.country].filter(Boolean).join(", ")),
  renderRow("Regions", company.regions),
  renderRow("Registration #", company.registrationNumber),
  renderRow("VAT #", company.vatNumber),
  renderRow("Incorporation", company.incorporationDate),
  renderRow("Employees", company.employees),
  renderRow("Turnover", company.turnover),
  renderRow("Turnover band", company.turnoverBand),
  renderRow("Telephone", company.telephone),
  renderRow("Public email", company.publicEmail),
  renderRow("Company email", company.companyEmail),
  renderRow("Website", company.website),
  renderRow("Description", company.description),
])}

${disciplines.length ? renderSection("Disciplines", [renderRow("Selected", disciplines)]) : ""}

${renderSection("Applicant contact", [
  renderRow("Name", applicant.name),
  renderRow("Job title", applicant.jobTitle),
  renderRow("Email", applicant.email),
  renderRow("Phone", applicant.phone),
  renderRow("Comms prefs", applicant.commsPrefs),
])}
${renderSection("Main contact", [
  renderRow("Name", main.name),
  renderRow("Job title", main.jobTitle),
  renderRow("Email", main.email),
  renderRow("Phone", main.phone),
  renderRow("Comms prefs", main.commsPrefs),
])}
${renderSection("Invoice contact", [
  renderRow("Name", invoice.name),
  renderRow("Job title", invoice.jobTitle),
  renderRow("Email", invoice.email),
  renderRow("Phone", invoice.phone),
  renderRow("Comms prefs", invoice.commsPrefs),
])}

${tradeRefs.length ? `<h3 style="margin:24px 0 8px;color:#1D4D59;font-size:16px">Trade references</h3>${tradeRefs.map(ref).join("")}` : ""}
${clientRefs.length ? `<h3 style="margin:24px 0 8px;color:#1D4D59;font-size:16px">Client references</h3>${clientRefs.map(ref).join("")}` : ""}

<h3 style="margin:24px 0 8px;color:#1D4D59;font-size:16px">Supporting documents</h3>
<p style="margin:0 0 8px;color:#475569;font-size:13px"><strong>Marked to send separately:</strong> ${declaredDocs.length ? declaredDocs.map(escapeHtml).join(", ") : "none"}</p>
${uploadList}

${renderSection("Signature", [
  renderRow("Signed by", sig.name),
  renderRow("Job title", sig.jobTitle),
  renderRow("Date", sig.date),
  renderRow("Agreed to T&Cs", payload.agreeTerms),
  renderRow("Agreed to Code of Conduct", payload.agreeCode),
])}

</div>
</body></html>`;
}
