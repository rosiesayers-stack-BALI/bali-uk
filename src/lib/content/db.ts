// News + events (and policy + training) read from Lovable Cloud (Supabase).
// Public reads use anon SELECT policies on the news_articles/events tables
// (published = true). Admin writes go through the same tables so the /news
// and /events pages reflect admin changes on next navigation/refresh.
import { supabase } from "@/integrations/supabase/client";

// No-op subscription hook: we don't have realtime on these tables, so
// consumers refetch on route navigation instead. Kept as an export so the
// call sites in news/events routes don't have to change.
// TODO: switch to Supabase Realtime for live updates if the news/events
// tables get added to the supabase_realtime publication.
export function subscribeTable(_table: string, _cb: () => void): () => void {
  return () => {};
}


export type NewsRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date_text: string;
  iso_date: string | null;
  image_url: string | null;
  image_alt: string | null;
  body_paragraphs: string[];
  sort_order: number;
};

export type EventRow = {
  id: string;
  slug: string;
  title: string;
  date_text: string;
  iso_date: string | null;
  venue: string;
  category: string;
  description: string;
  body_paragraphs: string[];
  image_url: string | null;
  image_alt: string | null;
  booking_url: string | null;
  sort_order: number;
  member_price?: number | null;
  nonmember_price?: number | null;
  non_member_price?: number | null;
  start_time?: string | null;
  end_time?: string | null;
  booking_enabled?: boolean;
  capacity?: number;
  payment_options?: { card?: boolean; invoice?: boolean } | null;
};

export type PolicyRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date_text: string;
  iso_date: string | null;
  author: string;
  read_minutes: number;
  themes: string[];
  image_url: string | null;
  image_alt: string | null;
  source_url: string | null;
  body_paragraphs: string[];
  pullquote_text: string | null;
  pullquote_attribution: string | null;
  external_links: unknown;
};

export type TrainingRow = {
  id: string;
  title: string;
  description: string;
  date_text: string;
  iso_date: string | null;
  venue: string;
  image_url: string | null;
  source_url: string | null;
  sort_order: number;
  category?: string | null;
  duration?: string | null;
  format?: string | null;
  location?: string | null;
  cost?: string | null;
  booking_url?: string | null;
  contact_email?: string | null;
  provider?: { id: string; slug: string; logo_url: string | null } | null;
};

const handle = <T,>({ data, error }: { data: unknown; error: { message: string } | null }): T => {
  if (error) throw new Error(error.message);
  return (data ?? []) as T;
};

export const fetchNewsList = async (): Promise<NewsRow[]> =>
  handle(
    await supabase
      .from("news_articles")
      .select("*")
      .eq("published", true)
      .order("iso_date", { ascending: false, nullsFirst: false })
      .order("sort_order", { ascending: false }),
  );

export const fetchNewsBySlug = async (slug: string): Promise<NewsRow | null> => {
  const { data, error } = await supabase
    .from("news_articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as NewsRow | null;
};

export const fetchEventsList = async (): Promise<EventRow[]> => {
  const today = new Date().toISOString().slice(0, 10);
  const rows = await supabase
    .from("events")
    .select("*")
    .eq("published", true)
    .order("iso_date", { ascending: true, nullsFirst: false });
  const all = handle<EventRow[]>(rows);
  return all.filter((e) => !e.iso_date || e.iso_date >= today);
};

// Returns every published event (upcoming + past), for pages that need to
// offer a future/past toggle. TODO: replace with a CMS/API call when wired up.
export const fetchAllEventsList = async (): Promise<EventRow[]> =>
  handle(
    await supabase
      .from("events")
      .select("*")
      .eq("published", true)
      .order("iso_date", { ascending: true, nullsFirst: false }),
  );


export const fetchEventBySlug = async (slug: string): Promise<EventRow | null> => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as EventRow | null;
};

export const fetchPolicyList = async (): Promise<PolicyRow[]> =>
  handle(
    await supabase
      .from("policy_posts")
      .select("*")
      .eq("published", true)
      .order("iso_date", { ascending: false, nullsFirst: false }),
  );

export const fetchPolicyBySlug = async (slug: string): Promise<PolicyRow | null> => {
  const { data, error } = await supabase
    .from("policy_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data;
};

export const fetchTrainingList = async (): Promise<TrainingRow[]> => {
  const { data, error } = await supabase
    .from("training_courses")
    .select("*, provider:directory_profiles(id, slug, logo_url)")
    .eq("published", true)
    .order("iso_date", { ascending: true, nullsFirst: false })
    .order("sort_order", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as unknown as TrainingRow[];
};
