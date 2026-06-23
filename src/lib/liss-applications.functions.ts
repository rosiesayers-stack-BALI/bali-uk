import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const FileEntry = z.object({
  path: z.string().min(1).max(500),
  name: z.string().min(1).max(200),
  size: z.number().int().nonnegative(),
  kind: z.enum(["rolo", "citb", "qualification", "photo_id", "photo", "other"]),
});

const Schema = z.object({
  id: z.string().uuid(),
  category_slug: z.string().min(1).max(80),
  card_slug: z.string().min(1).max(120),
  card_name: z.string().min(1).max(200),
  application_type: z.enum(["new", "update", "renewal", "duplicate"]),

  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  home_address: z.string().trim().min(5).max(500),

  employer_name: z.string().trim().max(200).optional().or(z.literal("")),
  employer_address: z.string().trim().max(500).optional().or(z.literal("")),
  job_title: z.string().trim().max(120).optional().or(z.literal("")),

  rolo_completed_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  citb_completed_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  qualification_summary: z.string().trim().max(1000).optional().or(z.literal("")),

  uploaded_files: z.array(FileEntry).max(20),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  consent_marketing: z.boolean(),
  consent_terms: z.literal(true),
});

export type LissApplicationInput = z.infer<typeof Schema>;

const blank = (v: string | undefined) => (v && v.length ? v : null);

export const submitLissApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => Schema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("liss_applications").insert({
      id: data.id,
      category_slug: data.category_slug,
      card_slug: data.card_slug,
      card_name: data.card_name,
      application_type: data.application_type,
      full_name: data.full_name,
      email: data.email,
      phone: blank(data.phone),
      date_of_birth: blank(data.date_of_birth),
      home_address: data.home_address,
      employer_name: blank(data.employer_name),
      employer_address: blank(data.employer_address),
      job_title: blank(data.job_title),
      rolo_completed_on: blank(data.rolo_completed_on),
      citb_completed_on: blank(data.citb_completed_on),
      qualification_summary: blank(data.qualification_summary),
      uploaded_files: data.uploaded_files,
      notes: blank(data.notes),
      consent_marketing: data.consent_marketing,
      consent_terms: data.consent_terms,
      status: "submitted",
    });

    if (error) {
      console.error("[liss] insert failed", error);
      throw new Error("We couldn't save your application. Please try again or email liss@bali.org.uk.");
    }

    return { ok: true, id: data.id };
  });
