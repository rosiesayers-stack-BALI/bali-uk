// Public company profile data for the member directory.
// Sources: real member listings in the database (directory_profiles +
// workbooks_orgs) merged with the static demo directory in `members.ts`.
// TODO: retire the static demo list once every member has a DB listing.

import { supabase } from "@/integrations/supabase/client";
import { MEMBERS, type MemberCategory } from "./members";
import { normaliseApplicationType, type ApplicationTypeId } from "@/lib/membership-types";

export type CompanySocials = {
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
};

export type DirectoryCompany = {
  id: string;
  slug: string;
  name: string;
  category: MemberCategory;
  membershipType: ApplicationTypeId | null;
  region: string;
  specialism: string;
  description: string;
  established?: number;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  websiteUrl?: string | null;
  socials: CompanySocials;
  wbOrgId?: string | null;
  source: "db" | "static";
};

export type CompanyProject = {
  id: string;
  title: string;
  description: string | null;
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Best-effort map from a membership category id to a directory category. */
function categoryOf(raw: string | null | undefined): MemberCategory {
  const s = (raw ?? "").toLowerCase();
  if (s.includes("training")) return "training";
  if (s.includes("designer")) return "designer";
  if (s.includes("supplier")) return "supplier";
  return "contractor";
}

/** Normalise the region strings held in the CRM to the directory's region list. */
function regionOf(raw: string | null | undefined): string {
  const s = (raw ?? "").trim();
  if (!s) return "";
  if (s === "Midlands") return "West Midlands";
  if (s === "Yorkshire") return "Yorkshire & Humber";
  return s;
}

/** Signed URL cache — the content-images bucket is private. */
const signedCache = new Map<string, string>();

export async function resolveImageUrl(url: string | null | undefined): Promise<string | null> {
  if (!url) return null;
  const marker = "/content-images/";
  const i = url.indexOf(marker);
  if (i === -1) return url;
  const path = url.slice(i + marker.length).split("?")[0];
  if (signedCache.has(path)) return signedCache.get(path)!;
  const { data } = await supabase.storage.from("content-images").createSignedUrl(path, 60 * 60);
  if (!data?.signedUrl) return null;
  signedCache.set(path, data.signedUrl);
  return data.signedUrl;
}

export function staticCompanies(): DirectoryCompany[] {
  return MEMBERS.map((m) => ({
    id: m.id,
    slug: slugify(m.name),
    name: m.name,
    category: m.category,
    membershipType: null,
    region: m.region,
    specialism: m.specialism,
    description: m.description,
    established: m.established,
    logoUrl: null,
    bannerUrl: null,
    websiteUrl: m.website ?? null,
    socials: {},
    wbOrgId: null,
    source: "static",
  }));
}

type ProfileRow = {
  id: string;
  wb_org_id: string;
  slug: string;
  about: string | null;
  logo_url: string | null;
  banner_url: string | null;
  website_url: string | null;
  socials: unknown;
};

type OrgRow = {
  wb_id: string;
  name: string;
  category: string | null;
  region: string | null;
  description: string | null;
  website: string | null;
  logo_url: string | null;
};

function toCompany(p: ProfileRow, o: OrgRow | undefined): DirectoryCompany {
  const membershipType = o?.category ? normaliseApplicationType(o.category) : null;
  return {
    id: p.id,
    slug: p.slug,
    name: o?.name ?? p.slug,
    category: categoryOf(o?.category),
    membershipType,
    region: regionOf(o?.region),
    specialism: o?.category ? o.category.replace(/_/g, " ") : "",
    description: p.about ?? o?.description ?? "",
    logoUrl: p.logo_url ?? o?.logo_url ?? null,
    bannerUrl: p.banner_url ?? null,
    websiteUrl: p.website_url ?? o?.website ?? null,
    socials: (p.socials as CompanySocials) ?? {},
    wbOrgId: p.wb_org_id,
    source: "db",
  };
}

export async function listDirectoryCompanies(): Promise<DirectoryCompany[]> {
  const { data: profiles, error } = await supabase
    .from("directory_profiles")
    .select("id, wb_org_id, slug, about, logo_url, banner_url, website_url, socials");
  if (error || !profiles?.length) return [];
  const orgIds = profiles.map((p) => p.wb_org_id);
  const { data: orgs } = await supabase
    .from("workbooks_orgs")
    .select("wb_id, name, category, region, description, website, logo_url")
    .in("wb_id", orgIds);
  const byId = new Map((orgs ?? []).map((o) => [o.wb_id, o as OrgRow]));
  return (profiles as ProfileRow[])
    .filter((p) => byId.has(p.wb_org_id))
    .map((p) => toCompany(p, byId.get(p.wb_org_id)));
}

export async function getDirectoryCompany(
  slug: string,
): Promise<{ company: DirectoryCompany; projects: CompanyProject[] } | null> {
  const { data: profile } = await supabase
    .from("directory_profiles")
    .select("id, wb_org_id, slug, about, logo_url, banner_url, website_url, socials")
    .eq("slug", slug)
    .maybeSingle();

  if (profile) {
    const { data: org } = await supabase
      .from("workbooks_orgs")
      .select("wb_id, name, category, region, description, website, logo_url")
      .eq("wb_id", profile.wb_org_id)
      .maybeSingle();
    const { data: projects } = await supabase
      .from("directory_projects")
      .select("id, title, description, sort_order, created_at")
      .eq("profile_id", profile.id)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    return {
      company: toCompany(profile as ProfileRow, (org as OrgRow) ?? undefined),
      projects: (projects ?? []).map((p) => ({ id: p.id, title: p.title, description: p.description })),
    };
  }

  const fallback = staticCompanies().find((c) => c.slug === slug);
  return fallback ? { company: fallback, projects: [] } : null;
}

/**
 * Records an "Enquire" click so BALI can report enquiry volume per member.
 * Fire-and-forget: never block the outbound redirect on analytics.
 */
export async function logProfileEnquiry(company: DirectoryCompany) {
  try {
    await supabase.from("profile_stats_events").insert({
      wb_org_id: company.wbOrgId ?? `static:${company.slug}`,
      event_type: "enquiry_click",
      occurred_at: new Date().toISOString(),
      meta: { slug: company.slug, name: company.name, target: company.websiteUrl ?? null },
    });
  } catch {
    /* analytics must never break the user journey */
  }
}
