import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/portal/slugify";

export type AdminSubmission = {
  id: string;
  kind: "news" | "event";
  title: string;
  payload: {
    body?: string;
    image_url?: string | null;
    image_alt?: string | null;
    description?: string;
  };
  status: "pending" | "approved" | "rejected" | "changes_requested" | "published";
  reviewer_notes: string | null;
  published_id: string | null;
  submitted_by: string | null;
  wb_org_id: string;
  created_at: string;
  updated_at: string;
};

export async function listAllSubmissions(): Promise<AdminSubmission[]> {
  const { data, error } = await supabase
    .from("member_submissions")
    .select("id, kind, title, payload, status, reviewer_notes, published_id, submitted_by, wb_org_id, created_at, updated_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as unknown as AdminSubmission[];
}

async function notify(userId: string | null, title: string, body: string, link: string | null) {
  if (!userId) return;
  await supabase.from("notifications").insert({
    user_id: userId,
    kind: "submission",
    title,
    body,
    link,
  });
}

/** Approve a news submission: create a news_articles row and mark published. */
export async function approveNewsSubmission(sub: AdminSubmission, notes?: string) {
  if (sub.kind !== "news") throw new Error("Only news submissions supported here.");
  const paragraphs = (sub.payload.body ?? "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const baseSlug = slugify(sub.title) || `member-news-${Date.now()}`;
  // Ensure unique slug
  const slug = await uniqueSlug(baseSlug);

  const today = new Date();
  const iso = today.toISOString().slice(0, 10);
  const dateText = today.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  const { data: article, error: insErr } = await supabase
    .from("news_articles")
    .insert({
      slug,
      title: sub.title,
      description: sub.payload.description ?? "",
      body_paragraphs: paragraphs,
      image_url: sub.payload.image_url ?? null,
      image_alt: sub.payload.image_alt ?? null,
      iso_date: iso,
      date_text: dateText,
      published: true,
      sort_order: 0,
    })
    .select("id, slug")
    .single();
  if (insErr) throw insErr;

  const { error: updErr } = await supabase
    .from("member_submissions")
    .update({
      status: "published",
      reviewer_notes: notes ?? null,
      published_id: article.id,
    })
    .eq("id", sub.id);
  if (updErr) throw updErr;

  await notify(
    sub.submitted_by,
    "Your news item has been published",
    `"${sub.title}" is now live on the BALI news page.`,
    `/news/${article.slug}`,
  );
}

export async function rejectSubmission(sub: AdminSubmission, notes: string) {
  const { error } = await supabase
    .from("member_submissions")
    .update({ status: "rejected", reviewer_notes: notes })
    .eq("id", sub.id);
  if (error) throw error;
  await notify(
    sub.submitted_by,
    "Your news submission was not approved",
    `"${sub.title}" — reviewer note: ${notes}`,
    "/portal",
  );
}

export async function requestChangesOnSubmission(sub: AdminSubmission, notes: string) {
  const { error } = await supabase
    .from("member_submissions")
    .update({ status: "changes_requested", reviewer_notes: notes })
    .eq("id", sub.id);
  if (error) throw error;
  await notify(
    sub.submitted_by,
    "Changes requested on your news submission",
    `"${sub.title}" — reviewer note: ${notes}`,
    "/portal",
  );
}

async function uniqueSlug(base: string): Promise<string> {
  let candidate = base;
  for (let i = 0; i < 10; i++) {
    const { data } = await supabase.from("news_articles").select("id").eq("slug", candidate).maybeSingle();
    if (!data) return candidate;
    candidate = `${base}-${i + 2}`;
  }
  return `${base}-${Date.now()}`;
}
