import { supabase } from "@/integrations/supabase/client";

export type Socials = {
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
};

export type DirectoryProfile = {
  id: string;
  wb_org_id: string;
  slug: string;
  about: string | null;
  whos_who: string | null;
  logo_url: string | null;
  banner_url: string | null;
  website_url: string | null;
  socials: Socials;
};

export type Project = {
  id: string;
  profile_id: string;
  title: string;
  description: string | null;
  images: string[];
  sort_order: number | null;
};

export type Submission = {
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
  created_at: string;
  updated_at: string;
};

export type Notification = {
  id: string;
  kind: string;
  title: string;
  body: string | null;
  link: string | null;
  read_at: string | null;
  created_at: string;
};

/** Look up the current user's linked Workbooks org (first one). */
export async function getMyOrgId(): Promise<string | null> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return null;
  const { data, error } = await supabase
    .from("member_links")
    .select("wb_org_id")
    .eq("user_id", auth.user.id)
    .limit(1)
    .maybeSingle();
  if (error) return null;
  return data?.wb_org_id ?? null;
}

export async function getMyDirectoryProfile(): Promise<DirectoryProfile | null> {
  const orgId = await getMyOrgId();
  if (!orgId) return null;
  const { data, error } = await supabase
    .from("directory_profiles")
    .select("id, wb_org_id, slug, about, whos_who, logo_url, banner_url, website_url, socials")
    .eq("wb_org_id", orgId)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  return {
    ...data,
    socials: (data.socials as Socials) || {},
  };
}

export async function updateMyDirectoryProfile(
  id: string,
  patch: Partial<Pick<DirectoryProfile, "about" | "whos_who" | "logo_url" | "banner_url" | "website_url" | "socials">>,
) {
  const { error } = await supabase.from("directory_profiles").update(patch).eq("id", id);
  if (error) throw error;
}

export async function listMyProjects(profileId: string): Promise<Project[]> {
  const { data, error } = await supabase
    .from("directory_projects")
    .select("id, profile_id, title, description, images, sort_order")
    .eq("profile_id", profileId)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((p) => ({
    ...p,
    images: Array.isArray(p.images) ? (p.images as string[]) : [],
  }));
}

export async function upsertProject(
  profileId: string,
  project: { id?: string; title: string; description: string; images: string[]; sort_order?: number },
) {
  if (project.id) {
    const { error } = await supabase
      .from("directory_projects")
      .update({
        title: project.title,
        description: project.description,
        images: project.images,
        sort_order: project.sort_order ?? 0,
      })
      .eq("id", project.id);
    if (error) throw error;
  } else {
    const { error } = await supabase.from("directory_projects").insert({
      profile_id: profileId,
      title: project.title,
      description: project.description,
      images: project.images,
      sort_order: project.sort_order ?? 0,
    });
    if (error) throw error;
  }
}

export async function deleteProject(id: string) {
  const { error } = await supabase.from("directory_projects").delete().eq("id", id);
  if (error) throw error;
}

/** News submission (goes to member_submissions with status='pending'). */
export async function submitNewsItem(input: {
  title: string;
  description: string;
  body: string;
  image_url?: string | null;
  image_alt?: string | null;
}) {
  const orgId = await getMyOrgId();
  if (!orgId) throw new Error("Your account isn't linked to a member organisation yet. Please contact BALI staff.");
  const { data: auth } = await supabase.auth.getUser();
  const { error } = await supabase.from("member_submissions").insert({
    kind: "news",
    wb_org_id: orgId,
    submitted_by: auth.user?.id ?? null,
    title: input.title,
    payload: {
      description: input.description,
      body: input.body,
      image_url: input.image_url ?? null,
      image_alt: input.image_alt ?? null,
    },
    status: "pending",
  });
  if (error) throw error;
}

export async function listMySubmissions(): Promise<Submission[]> {
  const { data, error } = await supabase
    .from("member_submissions")
    .select("id, kind, title, payload, status, reviewer_notes, published_id, created_at, updated_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as unknown as Submission[];
}

/** Notifications */
export async function listMyNotifications(): Promise<Notification[]> {
  const { data, error } = await supabase
    .from("notifications")
    .select("id, kind, title, body, link, read_at, created_at")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) throw error;
  return (data ?? []) as Notification[];
}

export async function markNotificationRead(id: string) {
  await supabase.from("notifications").update({ read_at: new Date().toISOString() }).eq("id", id);
}

export async function markAllNotificationsRead() {
  await supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .is("read_at", null);
}
