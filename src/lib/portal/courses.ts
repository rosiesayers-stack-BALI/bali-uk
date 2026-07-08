import { supabase } from "@/integrations/supabase/client";

export type CourseStatus = "pending" | "published" | "rejected" | "changes_requested";

export type ProviderCourse = {
  id: string;
  profile_id: string | null;
  title: string;
  description: string;
  category: string | null;
  duration: string | null;
  format: string | null;
  location: string | null;
  venue: string;
  cost: string | null;
  booking_url: string | null;
  contact_email: string | null;
  date_text: string;
  iso_date: string | null;
  image_url: string | null;
  status: CourseStatus;
  reviewer_notes: string | null;
  created_at?: string;
  updated_at?: string;
};

/**
 * Category suggestions. These mirror the derived categories used on the
 * public /events/training listing (Operative / Supervisor / Manager / Member)
 * plus a small set of common training-provider topics so members can pick
 * whatever best fits their course.
 */
export const COURSE_CATEGORIES = [
  "Operative",
  "Supervisor",
  "Manager",
  "Member",
  "Practical Skills",
  "Health & Safety",
  "Business",
  "Horticulture",
  "Other",
];

export const COURSE_FORMATS = ["Online", "In person", "Hybrid"];

export async function listMyCourses(profileId: string): Promise<ProviderCourse[]> {
  const { data, error } = await supabase
    .from("training_courses")
    .select(
      "id, profile_id, title, description, category, duration, format, location, venue, cost, booking_url, contact_email, date_text, iso_date, image_url, status, reviewer_notes, created_at, updated_at",
    )
    .eq("profile_id", profileId)
    .order("iso_date", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as ProviderCourse[];
}

export type CourseInput = Omit<
  ProviderCourse,
  "id" | "status" | "reviewer_notes" | "profile_id" | "created_at" | "updated_at"
>;

export async function createCourse(profileId: string, input: CourseInput) {
  const { error } = await supabase.from("training_courses").insert({
    profile_id: profileId,
    title: input.title,
    description: input.description,
    category: input.category,
    duration: input.duration,
    format: input.format,
    location: input.location,
    venue: input.venue || input.location || (input.format ?? ""),
    cost: input.cost,
    booking_url: input.booking_url,
    contact_email: input.contact_email,
    date_text: input.date_text,
    iso_date: input.iso_date,
    image_url: input.image_url,
    // status is forced to 'pending' by trigger for non-admins
  });
  if (error) throw error;
}

export async function updateCourse(id: string, patch: Partial<CourseInput>) {
  const { error } = await supabase
    .from("training_courses")
    .update({
      ...patch,
      venue: patch.venue ?? patch.location ?? undefined,
    })
    .eq("id", id);
  if (error) throw error;
}

export async function deleteCourse(id: string) {
  const { error } = await supabase.from("training_courses").delete().eq("id", id);
  if (error) throw error;
}
