import { MEMBERS, matchesPostcode, type Member, type ProjectType } from "../directory/members";
import { newsArticles } from "../../content/news";
import { events } from "../../content/events";
import { ALL_PAGES } from "../../content/pages";
import { policyPosts } from "../../content/policy";
import { SITE_PAGES } from "./site-pages.generated";

// ---------- Types ----------

export type SearchFilters = {
  q?: string;
  postcode?: string;
  projectType?: ProjectType | "";
  category?: Member["category"] | "";
};

export type ResultType =
  | "Page"
  | "Membership"
  | "Help"
  | "Event"
  | "News"
  | "Member"
  | "Policy"
  | "Directory";

export type SearchResult = {
  id: string;
  type: ResultType;
  title: string;
  description: string;
  to: string;
  params?: Record<string, string>;
  search?: Record<string, string>;
  image?: string;
  meta?: string; // e.g. region, date, venue
  score: number;
  // For members we also keep the raw item so the results page can render its rich card
  member?: Member;
};

export type GroupedResults = {
  groups: { label: string; type: ResultType; items: SearchResult[] }[];
  total: number;
  /** If the query was auto-corrected via fuzzy matching, the corrected string used to produce these results. */
  didYouMean?: string;
  /** The original query the user typed, if it differed from what was searched. */
  originalQuery?: string;
  // Backwards-compat accessors used by SmartSearch etc.
  members: { item: Member }[];
  news: { slug: string; title: string; description: string; image?: string }[];
  events: { slug: string; title: string; date: string; venue: string; description: string; image?: string }[];
  pages: SearchResult[];
};

// ---------- Fuzzy matching (Levenshtein + vocabulary) ----------

/** Iterative Levenshtein distance with early-exit when it exceeds `max`. */
function levenshtein(a: string, b: string, max: number): number {
  if (a === b) return 0;
  const al = a.length, bl = b.length;
  if (Math.abs(al - bl) > max) return max + 1;
  if (al === 0) return bl;
  if (bl === 0) return al;
  let prev = new Array(bl + 1);
  let curr = new Array(bl + 1);
  for (let j = 0; j <= bl; j++) prev[j] = j;
  for (let i = 1; i <= al; i++) {
    curr[0] = i;
    let rowMin = curr[0];
    const ac = a.charCodeAt(i - 1);
    for (let j = 1; j <= bl; j++) {
      const cost = ac === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      if (curr[j] < rowMin) rowMin = curr[j];
    }
    if (rowMin > max) return max + 1;
    [prev, curr] = [curr, prev];
  }
  return prev[bl];
}

/** Distance tolerance: strict on short words, more lenient on long ones. */
function distanceBudget(len: number): number {
  if (len <= 3) return 0;   // no fuzzy match on very short tokens
  if (len <= 4) return 1;
  if (len <= 7) return 2;
  return 3;
}

let vocabCache: { list: string[]; set: Set<string> } | null = null;

function buildVocab(): { list: string[]; set: Set<string> } {
  if (vocabCache) return vocabCache;
  const set = new Set<string>();
  const add = (text: string | undefined) => {
    if (!text) return;
    for (const token of text.toLowerCase().split(/[^a-z0-9]+/)) {
      if (token.length >= 3) set.add(token);
    }
  };
  for (const p of ALL_PAGES) {
    add(p.content.title);
    add(p.content.intro);
    add(p.content.eyebrow);
    if (p.content.sections) for (const s of p.content.sections) { add(s.heading); add(s.body); if (s.bullets) add(s.bullets.join(" ")); }
    if (p.content.highlights) for (const h of p.content.highlights) { add(h.title); add(h.body); }
  }
  for (const p of SITE_PAGES) { add(p.title); add(p.description); add(p.eyebrow); }
  for (const n of newsArticles) { add(n.title); add(n.description); add(n.body.join(" ")); }
  for (const e of events) { add(e.title); add(e.description); add(e.venue); add(e.category); add(e.body.join(" ")); }
  for (const p of policyPosts) { add(p.title); add(p.description); add(p.body.join(" ")); add(p.themes.join(" ")); }
  for (const m of MEMBERS) { add(m.name); add(m.specialism); add(m.description); add(m.projectTypes.join(" ")); }
  vocabCache = { list: [...set], set };
  return vocabCache;
}

/** Find the closest vocab token to `term` within its distance budget. Returns undefined if no acceptable match. */
function nearestVocabWord(term: string): string | undefined {
  const vocab = buildVocab();
  if (vocab.set.has(term)) return term;
  const budget = distanceBudget(term.length);
  if (budget === 0) return undefined;
  let best: string | undefined;
  let bestDist = budget + 1;
  const first = term.charCodeAt(0);
  for (const w of vocab.list) {
    // Cheap prefilter: length + first-letter proximity (allow ±1 for typos on first char).
    if (Math.abs(w.length - term.length) > budget) continue;
    const wFirst = w.charCodeAt(0);
    if (wFirst !== first && budget < 2) continue;
    const d = levenshtein(term, w, bestDist - 1);
    if (d < bestDist) {
      bestDist = d;
      best = w;
      if (d === 0) break;
    }
  }
  return best;
}

/**
 * Produce a corrected query where each unrecognised token is swapped for its
 * nearest vocab word. Returns undefined if nothing needed correcting.
 */
function fuzzyCorrectQuery(terms: string[]): string | undefined {
  const vocab = buildVocab();
  let anyChanged = false;
  const corrected: string[] = [];
  for (const t of terms) {
    if (vocab.set.has(t)) { corrected.push(t); continue; }
    const near = nearestVocabWord(t);
    if (near && near !== t) { corrected.push(near); anyChanged = true; }
    else { corrected.push(t); }
  }
  return anyChanged ? corrected.join(" ") : undefined;
}


// ---------- Scoring ----------

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const norm = (s: string) => s.toLowerCase();

function countOccurrences(hay: string, needle: string): number {
  if (!needle) return 0;
  let count = 0;
  let idx = 0;
  while ((idx = hay.indexOf(needle, idx)) !== -1) {
    count++;
    idx += needle.length;
  }
  return count;
}

type Doc = {
  title: string;
  headings: string;
  body: string;
};

function scoreDoc(doc: Doc, q: string, terms: string[]): number {
  const title = norm(doc.title);
  const headings = norm(doc.headings);
  const body = norm(doc.body);
  const combined = `${title} \n ${headings} \n ${body}`;
  // Require all terms to appear somewhere (AND-match)
  for (const t of terms) if (!combined.includes(t)) return 0;

  let score = 0;
  if (title === q) score += 1000;
  else if (title.startsWith(q + " ") || title === q) score += 500;
  else if (new RegExp(`\\b${escapeRe(q)}\\b`).test(title)) score += 300;
  else if (title.includes(q)) score += 180;

  for (const t of terms) {
    const wb = new RegExp(`\\b${escapeRe(t)}\\b`);
    if (wb.test(title)) score += 90;
    else if (title.includes(t)) score += 45;
    score += Math.min(countOccurrences(headings, t), 8) * 25;
    score += Math.min(countOccurrences(body, t), 12) * 3;
  }
  return score;
}

// ---------- Intent boosts ----------
// Common high-intent queries should reliably land on the right hub page.
const INTENTS: { patterns: RegExp[]; path: string; boost: number }[] = [
  { patterns: [/\bjoin\b/, /\bsign\s*up\b/, /\bapply\b/, /\bbecome\s+a?\s*member\b/], path: "/join", boost: 900 },
  { patterns: [/\bmembership\b/, /\bmember\b/], path: "/membership", boost: 700 },
  { patterns: [/\baccredit(ed|ation)\b/, /\bregister(ed)?\s+designer\b/], path: "/membership", boost: 500 },
  { patterns: [/\bawards?\b/], path: "/about/awards", boost: 500 },
  { patterns: [/\bconference\b/], path: "/about/conference", boost: 500 },
  { patterns: [/\bcontact\b/, /\bphone\b/, /\bemail\b/], path: "/contact", boost: 500 },
  { patterns: [/\bevents?\b/], path: "/events", boost: 400 },
  { patterns: [/\bdirectory\b/, /\bfind\s+a\b/], path: "/directory", boost: 400 },
  { patterns: [/\bnews\b/], path: "/news", boost: 400 },
  { patterns: [/\bcareers?\b/, /\bjobs?\b/, /\bvacanc/], path: "/about/careers", boost: 500 },
  { patterns: [/\blogin\b/, /\bportal\b/, /\bsign\s*in\b/], path: "/portal", boost: 400 },
  { patterns: [/\bfees?\b/, /\bcost\b/, /\bprice\b/], path: "/membership/fees", boost: 400 },
  { patterns: [/\bhelp\b/, /\bsupport\b/, /\badvice\b/], path: "/help", boost: 300 },
  { patterns: [/\bcscs\b/, /\bliss\b/], path: "/liss-cscs", boost: 500 },
];

function intentBoost(path: string, q: string): number {
  let total = 0;
  for (const intent of INTENTS) {
    if (intent.path !== path) continue;
    if (intent.patterns.some((p) => p.test(q))) total += intent.boost;
  }
  return total;
}

// ---------- Type classification for pages ----------

function classifyPagePath(path: string): ResultType {
  if (path === "/membership" || path.startsWith("/membership/") || path === "/join" || path.startsWith("/join/")) return "Membership";
  if (path.startsWith("/help") || path.startsWith("/liss-cscs")) return "Help";
  if (path === "/directory" || path.startsWith("/directory/")) return "Directory";
  if (path === "/events" || path.startsWith("/events")) return "Event";
  if (path === "/news" || path.startsWith("/news")) return "News";
  return "Page";
}

// ---------- Build & search index ----------

function buildPageDoc(path: string): { doc: Doc; description: string; image?: string; title: string } {
  const rich = ALL_PAGES.find((p) => p.path === path)?.content;
  const stub = SITE_PAGES.find((p) => p.path === path);
  const title = rich?.title || stub?.title || path;
  const eyebrow = rich?.eyebrow || stub?.eyebrow || "";
  const description = rich?.intro || stub?.description || "";
  const headings = [eyebrow, ...(rich?.sections?.map((s) => s.heading) ?? [])].filter(Boolean).join("\n");
  const bodyParts: string[] = [description];
  if (rich?.sections) for (const s of rich.sections) {
    bodyParts.push(s.body);
    if (s.bullets) bodyParts.push(s.bullets.join(" "));
  }
  if (rich?.highlights) for (const h of rich.highlights) bodyParts.push(`${h.title} ${h.body}`);
  if (stub?.description && !rich) bodyParts.push(stub.description);
  return {
    doc: { title, headings, body: bodyParts.join("\n") },
    description,
    image: rich?.image?.url,
    title,
  };
}

// Union of every page path we know about (rich + stubs from route filenames)
function allPagePaths(): string[] {
  const set = new Set<string>();
  for (const p of ALL_PAGES) set.add(p.path);
  for (const p of SITE_PAGES) set.add(p.path);
  // Never surface admin, api, auth-only routes in site search
  return [...set].filter((p) =>
    !p.startsWith("/admin") &&
    !p.startsWith("/api") &&
    p !== "/forgotten-password" &&
    p !== "/login" &&
    p !== "/portal" ? true : ["/portal"].includes(p),
  ).filter(Boolean);
}

// ---------- Public API ----------

export function runSearch(filters: SearchFilters): GroupedResults {
  const qRaw = (filters.q ?? "").trim();
  const q = norm(qRaw);
  const terms = q.split(/\s+/).filter(Boolean);

  // First pass: exact search as typed.
  const exact = runSearchInternal(filters, q, terms);

  // Only try fuzzy correction when:
  //  - the user actually typed a query, and
  //  - the exact pass returned nothing.
  // This preserves accuracy: exact matches are never displaced by fuzzy ones.
  if (terms.length === 0 || exact.total > 0) return exact;

  const corrected = fuzzyCorrectQuery(terms);
  if (!corrected || corrected === q) return exact;

  const correctedTerms = corrected.split(/\s+/).filter(Boolean);
  const fuzzy = runSearchInternal(filters, corrected, correctedTerms);
  if (fuzzy.total === 0) return exact;

  return { ...fuzzy, didYouMean: corrected, originalQuery: qRaw };
}

function runSearchInternal(filters: SearchFilters, q: string, terms: string[]): GroupedResults {
  
  const postcode = (filters.postcode ?? "").trim();
  const projectType = filters.projectType || "";
  const category = filters.category || "";

  const hasQuery = terms.length > 0;
  const hasFilter = !!(postcode || projectType || category);

  // ----- Members (respect all filters) -----
  const memberResults: SearchResult[] = MEMBERS
    .filter((m) => {
      if (category && m.category !== category) return false;
      if (projectType && !m.projectTypes.includes(projectType)) return false;
      if (postcode && !matchesPostcode(m.postcode, postcode)) return false;
      if (hasQuery) {
        const doc: Doc = {
          title: m.name,
          headings: `${m.specialism} ${m.projectTypes.join(" ")}`,
          body: `${m.description} ${m.region} ${m.postcode}`,
        };
        return scoreDoc(doc, q, terms) > 0;
      }
      return true;
    })
    .map((m) => {
      const doc: Doc = {
        title: m.name,
        headings: `${m.specialism} ${m.projectTypes.join(" ")}`,
        body: `${m.description} ${m.region} ${m.postcode}`,
      };
      const score = hasQuery ? scoreDoc(doc, q, terms) : 100;
      return {
        id: `m-${m.id}`,
        type: "Member" as const,
        title: m.name,
        description: m.description,
        to: "/directory",
        meta: `${m.region} · ${m.specialism}`,
        score,
        member: m,
      };
    })
    .sort((a, b) => b.score - a.score);

  // If any structured filter is set (postcode / projectType / category), the
  // user is clearly looking for members — don't dilute with pages/news/events.
  const filterOnlyMode = hasFilter && !hasQuery;

  // ----- Pages (rich + stubs) -----
  const pageResults: SearchResult[] = [];
  if (hasQuery && !filterOnlyMode) {
    for (const path of allPagePaths()) {
      const { doc, description, image, title } = buildPageDoc(path);
      let score = scoreDoc(doc, q, terms);
      if (score === 0) continue;
      score += intentBoost(path, q);
      const type = classifyPagePath(path);
      pageResults.push({
        id: `p-${path}`,
        type,
        title,
        description,
        to: path,
        image,
        score,
      });
    }
    pageResults.sort((a, b) => b.score - a.score);
  }

  // ----- News -----
  const newsResults: SearchResult[] = [];
  if (hasQuery && !filterOnlyMode) {
    for (const n of newsArticles) {
      const doc: Doc = { title: n.title, headings: "", body: `${n.description} ${n.body.join(" ")}` };
      const score = scoreDoc(doc, q, terms);
      if (score === 0) continue;
      newsResults.push({
        id: `n-${n.slug}`,
        type: "News",
        title: n.title,
        description: n.description,
        to: "/news/$slug",
        params: { slug: n.slug },
        image: n.image?.url,
        score,
      });
    }
    newsResults.sort((a, b) => b.score - a.score);
  }

  // ----- Events -----
  const eventResults: SearchResult[] = [];
  if (hasQuery && !filterOnlyMode) {
    for (const e of events) {
      const doc: Doc = {
        title: e.title,
        headings: `${e.category} ${e.venue}`,
        body: `${e.description} ${e.body.join(" ")}`,
      };
      const score = scoreDoc(doc, q, terms);
      if (score === 0) continue;
      eventResults.push({
        id: `e-${e.slug}`,
        type: "Event",
        title: e.title,
        description: e.description,
        to: "/events/$slug",
        params: { slug: e.slug },
        image: e.image?.url,
        meta: `${e.date} · ${e.venue}`,
        score,
      });
    }
    eventResults.sort((a, b) => b.score - a.score);
  }

  // ----- Policy -----
  const policyResults: SearchResult[] = [];
  if (hasQuery && !filterOnlyMode) {
    for (const p of policyPosts) {
      const doc: Doc = {
        title: p.title,
        headings: p.themes.join(" "),
        body: `${p.description} ${p.body.join(" ")}`,
      };
      const score = scoreDoc(doc, q, terms);
      if (score === 0) continue;
      policyResults.push({
        id: `pol-${p.slug}`,
        type: "Policy",
        title: p.title,
        description: p.description,
        to: "/policy/$slug",
        params: { slug: p.slug },
        image: p.image?.url,
        meta: p.date,
        score,
      });
    }
    policyResults.sort((a, b) => b.score - a.score);
  }

  // Group in the order the user expects (Pages first for informational intent)
  const groups: GroupedResults["groups"] = ([
    { label: "Pages", type: "Page" as const, items: pageResults.filter((r) => r.type === "Page") },
    { label: "Membership & Join", type: "Membership" as const, items: pageResults.filter((r) => r.type === "Membership") },
    { label: "Help & Guides", type: "Help" as const, items: pageResults.filter((r) => r.type === "Help") },
    { label: "Directory", type: "Directory" as const, items: pageResults.filter((r) => r.type === "Directory") },
    { label: "Members", type: "Member" as const, items: memberResults },
    { label: "Events", type: "Event" as const, items: [...pageResults.filter((r) => r.type === "Event"), ...eventResults] },
    { label: "News", type: "News" as const, items: [...pageResults.filter((r) => r.type === "News"), ...newsResults] },
    { label: "Policy & Campaigns", type: "Policy" as const, items: policyResults },
  ]).filter((g) => g.items.length > 0);

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return {
    groups,
    total,
    // Backwards-compat
    members: memberResults.map((r) => ({ item: r.member! })),
    news: newsResults.map((r) => ({
      slug: r.params!.slug,
      title: r.title,
      description: r.description,
      image: r.image,
    })),
    events: eventResults.map((r) => ({
      slug: r.params!.slug,
      title: r.title,
      date: r.meta?.split(" · ")[0] ?? "",
      venue: r.meta?.split(" · ")[1] ?? "",
      description: r.description,
      image: r.image,
    })),
    pages: pageResults,
  };
}
