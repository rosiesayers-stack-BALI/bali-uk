import { MEMBERS, matchesPostcode, type Member, type ProjectType } from "../directory/members";
import { newsArticles } from "../../content/news";
import { events } from "../../content/events";

export type SearchFilters = {
  q?: string;
  postcode?: string;
  projectType?: ProjectType | "";
  category?: Member["category"] | "";
};

export type MemberResult = { kind: "member"; item: Member };
export type NewsResult = {
  kind: "news";
  slug: string;
  title: string;
  description: string;
  image?: string;
};
export type EventResult = {
  kind: "event";
  slug: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image?: string;
};

export type GroupedResults = {
  members: MemberResult[];
  news: NewsResult[];
  events: EventResult[];
  total: number;
};

const includes = (hay: string, needle: string) =>
  hay.toLowerCase().includes(needle.toLowerCase());

export function runSearch(filters: SearchFilters): GroupedResults {
  const q = (filters.q ?? "").trim();
  const postcode = (filters.postcode ?? "").trim();
  const projectType = filters.projectType || "";
  const category = filters.category || "";

  const members: MemberResult[] = MEMBERS.filter((m) => {
    if (category && m.category !== category) return false;
    if (projectType && !m.projectTypes.includes(projectType)) return false;
    if (postcode && !matchesPostcode(m.postcode, postcode)) return false;
    if (q) {
      const hay = `${m.name} ${m.specialism} ${m.description} ${m.region} ${m.projectTypes.join(" ")}`;
      if (!includes(hay, q)) return false;
    }
    return true;
  }).map((item) => ({ kind: "member", item }));

  // News + events aren't location-scoped; only include when the user hasn't
  // filtered strictly by postcode-only searches with no other signal.
  const wantAux = !!q || !!projectType;

  const news: NewsResult[] = wantAux
    ? newsArticles
        .filter((n) => {
          if (q && !includes(`${n.title} ${n.description}`, q)) return false;
          if (projectType && !includes(`${n.title} ${n.description}`, projectType.split(" ")[0])) return false;
          return true;
        })
        .slice(0, 12)
        .map((n) => ({
          kind: "news",
          slug: n.slug,
          title: n.title,
          description: n.description,
          image: n.image?.url,
        }))
    : [];

  const eventResults: EventResult[] = wantAux
    ? events
        .filter((e) => {
          if (q && !includes(`${e.title} ${e.description} ${e.venue} ${e.category}`, q)) return false;
          if (projectType && !includes(`${e.title} ${e.description} ${e.category}`, projectType.split(" ")[0])) return false;
          return true;
        })
        .slice(0, 12)
        .map((e) => ({
          kind: "event",
          slug: e.slug,
          title: e.title,
          date: e.date,
          venue: e.venue,
          description: e.description,
          image: e.image?.url,
        }))
    : [];

  return {
    members,
    news,
    events: eventResults,
    total: members.length + news.length + eventResults.length,
  };
}
