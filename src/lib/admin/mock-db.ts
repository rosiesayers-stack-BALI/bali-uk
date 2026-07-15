// Mock Supabase-shaped adapter for /admin.
// Drop-in replacement for `@/integrations/supabase/client` in admin routes.
// TODO: replace this whole module with real backend API calls when available.
//
// Supports the narrow subset used by admin routes:
//   supabase.from(table).select(cols, opts?)
//   supabase.from(table).insert(payload).select("id").single()
//   supabase.from(table).update(payload).eq("id", id)
//   supabase.from(table).delete().eq("id", id)
//   supabase.from(table).select(...).eq(k, v).order(col, {ascending, nullsFirst}).maybeSingle()
//   supabase.storage.from(bucket).upload(path, file).getPublicUrl(path).remove([path]).createSignedUrl(path, ttl)
//
// Data is persisted per-table to localStorage; images uploaded via `storage`
// live as data URLs in memory (not persisted, to avoid quota issues).

import { newsArticles as seedNews } from "@/content/news";
import { events as seedEvents } from "@/content/events";
import { policyPosts as seedPolicy } from "@/content/policy";
import trainingSeed from "@/content/training-courses.json";
import { slugify } from "@/lib/portal/slugify";

// ---------- Types ----------

type Row = Record<string, unknown> & { id?: string };
type TableName =
  | "news_articles"
  | "events"
  | "policy_posts"
  | "training_courses"
  | "liss_applications"
  | "member_submissions"
  | "membership_applications"
  | "notifications";

type PgResult<T> = { data: T; error: { message: string } | null; count?: number | null };

// ---------- Storage layer ----------

const STORAGE_PREFIX = "bali_admin_mockdb_v3:";
const listeners = new Map<TableName, Set<() => void>>();

function loadTable<T extends Row>(name: TableName, seed: () => T[]): T[] {
  if (typeof window === "undefined") return seed();
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + name);
    if (raw) {
      let rows = JSON.parse(raw) as T[];
      // One-off cleanup: remove the abandoned end-to-end test article.
      if (name === "news_articles") {
        const before = rows.length;
        rows = rows.filter((r) => (r as Row).slug !== "claude-e2e-test");
        if (rows.length !== before) {
          try {
            window.localStorage.setItem(STORAGE_PREFIX + name, JSON.stringify(rows));
          } catch {
            /* ignore */
          }
        }
      }
      return rows;
    }
  } catch {
    /* ignore */
  }
  const initial = seed();
  try {
    window.localStorage.setItem(STORAGE_PREFIX + name, JSON.stringify(initial));
  } catch {
    /* ignore quota */
  }
  return initial;
}

function saveTable<T extends Row>(name: TableName, rows: T[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_PREFIX + name, JSON.stringify(rows));
  } catch {
    /* ignore quota */
  }
  const subs = listeners.get(name);
  if (subs) for (const fn of subs) fn();
}

function uid() {
  return (
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : "id_" + Math.random().toString(36).slice(2) + Date.now().toString(36)
  );
}

// ---------- Seed helpers ----------

function seedNewsRows(): Row[] {
  const now = new Date().toISOString();
  return seedNews.slice(0, 30).map((n, i) => ({
    id: uid(),
    slug: n.slug,
    title: n.title,
    description: n.description,
    date_text: n.date || "",
    iso_date: n.iso_date ?? null,
    image_url: n.image?.url ?? null,
    image_alt: n.image?.alt ?? null,
    body_paragraphs: n.body,
    published: true,
    sort_order: i,
    created_at: now,
    updated_at: now,
  }));
}

function seedEventsRows(): Row[] {
  const now = new Date().toISOString();
  return (seedEvents as Array<Record<string, unknown>>).map((e, i) => ({
    id: uid(),
    slug: (e.slug as string) ?? slugify(String(e.title ?? `event-${i}`)),
    title: (e.title as string) ?? "",
    date_text: (e.date as string) ?? "",
    iso_date: (e.iso_date as string) ?? null,
    venue: (e.venue as string) ?? "",
    category: (e.category as string) ?? (e.type as string) ?? "",
    description: (e.description as string) ?? "",
    body_paragraphs: (e.body as string[]) ?? [],
    image_url: ((e.image as { url?: string } | undefined)?.url) ?? null,
    image_alt: ((e.image as { alt?: string } | undefined)?.alt) ?? "",
    booking_url: (e.booking_url as string) ?? (e.bookingUrl as string) ?? null,
    member_price: (e.member_price as number | undefined) ?? null,
    nonmember_price: (e.nonmember_price as number | undefined) ?? null,
    published: true,
    created_at: now,
    updated_at: now,
  }));
}

function seedPolicyRows(): Row[] {
  const now = new Date().toISOString();
  return seedPolicy.map((p, i) => ({
    id: uid(),
    slug: p.slug,
    title: p.title,
    description: p.description ?? "",
    date_text: p.date ?? "",
    iso_date: null,
    author: p.author ?? "",
    read_minutes: p.readMinutes ?? 3,
    themes: p.themes ?? [],
    image_url: p.image?.url ?? null,
    image_alt: p.image?.alt ?? "",
    source_url: p.sourceUrl ?? null,
    body_paragraphs: p.body ?? [],
    pullquote_text: p.pullquote?.text ?? null,
    pullquote_attribution: p.pullquote?.attribution ?? null,
    published: true,
    sort_order: i,
    created_at: now,
    updated_at: now,
  }));
}

function seedTrainingRows(): Row[] {
  const now = new Date().toISOString();
  const arr = Array.isArray(trainingSeed) ? trainingSeed : [];
  return arr.slice(0, 20).map((t: Record<string, unknown>) => ({
    id: uid(),
    title: (t.title as string) ?? "",
    description: (t.description as string) ?? "",
    date_text: (t.date as string) ?? "",
    iso_date: null,
    venue: (t.venue as string) ?? "",
    image_url: ((t.image as { url?: string } | undefined)?.url) ?? null,
    source_url: (t.sourceUrl as string) ?? (t.source_url as string) ?? null,
    published: true,
    status: "published",
    created_at: now,
    updated_at: now,
  }));
}

// Seed a realistic BALI enquiry → application pipeline so /admin/applications
// shows content on first visit. TODO: replace with real backend data.
function seedMembershipApplicationsRows(): Row[] {
  const now = Date.now();
  const day = 86400000;
  const iso = (d: number) => new Date(now - d * day).toISOString();
  const rows: Array<{
    applicant_name: string; applicant_email: string; company_name: string;
    category: string; town: string; county: string; region: string;
    phone: string; status: string; source: string; payment_method?: string;
    days: number;
  }> = [
    { applicant_name: "Harriet Blake", applicant_email: "harriet@willowscapes.co.uk", company_name: "Willowscapes Ltd", category: "associate_contractor", town: "Oxford", county: "Oxfordshire", region: "South East", phone: "01865 555 004", status: "Enquiry received", source: "BALI Website", days: 2 },
    { applicant_name: "Marcus Doyle", applicant_email: "marcus@doyle-design.com", company_name: "Doyle Design Studio", category: "associate_designer", town: "Edinburgh", county: "Midlothian", region: "Scotland", phone: "0131 555 210", status: "Enquiry received", source: "BALI Website", days: 5 },
    { applicant_name: "Priya Nash", applicant_email: "priya@nashsupply.co.uk", company_name: "Nash Supply Co", category: "associate_supplier", town: "Leicester", county: "Leicestershire", region: "Midlands", phone: "0116 555 812", status: "Qualifying", source: "BALI Website", days: 9 },
    { applicant_name: "Owen Foster", applicant_email: "owen@fostergrounds.uk", company_name: "Foster Grounds Care", category: "accredited_contractor", town: "Bristol", county: "Bristol", region: "South West", phone: "0117 555 040", status: "Awaiting application", source: "Referral", days: 14 },
    { applicant_name: "Isla Reid", applicant_email: "isla@reidlandscape.scot", company_name: "Reid Landscape", category: "accredited_contractor", town: "Glasgow", county: "Lanarkshire", region: "Scotland", phone: "0141 555 991", status: "Application received – awaiting fee", source: "BALI Website", payment_method: "Invoice", days: 21 },
    { applicant_name: "Ben Harper", applicant_email: "ben@harpertrees.co.uk", company_name: "Harper Tree Services", category: "associate_contractor", town: "Norwich", county: "Norfolk", region: "Midlands", phone: "01603 555 700", status: "Application received – paid", source: "BALI Website", payment_method: "Card", days: 25 },
    { applicant_name: "Sara Ellis", applicant_email: "sara@ellisdesign.co.uk", company_name: "Ellis Garden Design", category: "accredited_designer", town: "Truro", county: "Cornwall", region: "South West", phone: "01872 555 088", status: "Approved", source: "BALI Website", payment_method: "Card", days: 34 },
    { applicant_name: "Rhys Jones", applicant_email: "rhys@jonesnursery.wales", company_name: "Jones Nursery", category: "accredited_supplier", town: "Swansea", county: "Swansea", region: "Wales", phone: "01792 555 330", status: "Active", source: "BALI Website", payment_method: "Invoice", days: 60 },
    { applicant_name: "Kate Mills", applicant_email: "kate@millsconsult.co.uk", company_name: "Mills Consulting", category: "associate_individual", town: "Sheffield", county: "South Yorkshire", region: "Yorkshire", phone: "0114 555 220", status: "On-hold", source: "Referral", days: 45 },
    { applicant_name: "Tom Ford", applicant_email: "tom@fordroots.co.uk", company_name: "Ford Roots Ltd", category: "associate_contractor", town: "Cambridge", county: "Cambridgeshire", region: "Midlands", phone: "01223 555 616", status: "Rejected", source: "BALI Website", days: 40 },
  ];
  return rows.map((r) => ({
    id: uid(),
    category: r.category,
    applicant_name: r.applicant_name,
    applicant_email: r.applicant_email,
    company_name: r.company_name,
    payload: { town: r.town, county: r.county, region: r.region, phone: r.phone, source: r.source, payment_method: r.payment_method ?? "Not set" },
    status: r.status,
    notes: null,
    created_at: iso(r.days),
    updated_at: iso(Math.max(0, r.days - 1)),
  }));
}

// In-memory tables, hydrated lazily on first access.
type Table = { rows: Row[]; loaded: boolean; seed: () => Row[] };
const tables: Record<TableName, Table> = {
  news_articles: { rows: [], loaded: false, seed: seedNewsRows },
  events: { rows: [], loaded: false, seed: seedEventsRows },
  policy_posts: { rows: [], loaded: false, seed: seedPolicyRows },
  training_courses: { rows: [], loaded: false, seed: seedTrainingRows },
  liss_applications: { rows: [], loaded: false, seed: () => [] },
  membership_applications: { rows: [], loaded: false, seed: seedMembershipApplicationsRows },
  member_submissions: { rows: [], loaded: false, seed: () => [] },
  notifications: { rows: [], loaded: false, seed: () => [] },
};

function getRows(name: TableName): Row[] {
  const t = tables[name];
  if (!t.loaded) {
    t.rows = loadTable(name, t.seed);
    t.loaded = true;
  }
  return t.rows;
}

function setRows(name: TableName, rows: Row[]) {
  tables[name].rows = rows;
  tables[name].loaded = true;
  saveTable(name, rows);
}

// ---------- Query builder ----------

type Filter = (r: Row) => boolean;

class QueryBuilder implements PromiseLike<PgResult<any>> {
  private op: "select" | "insert" | "update" | "delete" = "select";
  private cols = "*";
  private countMode: false | "exact" = false;
  private headOnly = false;
  private filters: Filter[] = [];
  private orderCol: string | null = null;
  private orderAsc = true;
  private orderNullsFirst = false;
  private payload: Row | Row[] | null = null;
  private singleMode: "single" | "maybe" | null = null;
  private returnAfterWrite = false;

  constructor(private table: TableName) {}

  select(cols = "*", opts?: { count?: "exact"; head?: boolean }) {
    // After insert/update, .select() means "return the affected rows".
    if (this.op === "select") this.op = "select";
    else this.returnAfterWrite = true;
    this.cols = cols;
    if (opts?.count) this.countMode = opts.count;
    if (opts?.head) this.headOnly = true;
    return this;
  }
  insert(payload: Row | Row[]) {
    this.op = "insert";
    this.payload = payload;
    return this;
  }
  update(payload: Row) {
    this.op = "update";
    this.payload = payload;
    return this;
  }
  delete() {
    this.op = "delete";
    return this;
  }
  eq(k: string, v: unknown) {
    this.filters.push((r) => r[k] === v);
    return this;
  }
  neq(k: string, v: unknown) {
    this.filters.push((r) => r[k] !== v);
    return this;
  }
  ilike(k: string, pattern: string) {
    const re = new RegExp("^" + pattern.replace(/%/g, ".*").replace(/_/g, ".") + "$", "i");
    this.filters.push((r) => re.test(String(r[k] ?? "")));
    return this;
  }
  in(k: string, arr: unknown[]) {
    this.filters.push((r) => arr.includes(r[k]));
    return this;
  }
  or(_clause: string) {
    // Not used by admin; no-op.
    return this;
  }
  order(col: string, opts: { ascending?: boolean; nullsFirst?: boolean } = {}) {
    this.orderCol = col;
    this.orderAsc = opts.ascending !== false;
    this.orderNullsFirst = !!opts.nullsFirst;
    return this;
  }
  limit(_n: number) {
    return this;
  }
  single() {
    this.singleMode = "single";
    return this;
  }
  maybeSingle() {
    this.singleMode = "maybe";
    return this;
  }

  then<TResult1 = PgResult<any>, TResult2 = never>(
    onfulfilled?: ((value: PgResult<any>) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
  ): PromiseLike<TResult1 | TResult2> {
    return Promise.resolve()
      .then(() => this.run())
      .then(onfulfilled ?? undefined, onrejected ?? undefined);
  }

  private matches(rows: Row[]) {
    return rows.filter((r) => this.filters.every((f) => f(r)));
  }

  private sorted(rows: Row[]) {
    if (!this.orderCol) return rows;
    const col = this.orderCol;
    const nf = this.orderNullsFirst;
    const asc = this.orderAsc;
    return [...rows].sort((a, b) => {
      const av = a[col];
      const bv = b[col];
      const aNull = av === null || av === undefined || av === "";
      const bNull = bv === null || bv === undefined || bv === "";
      if (aNull && bNull) return 0;
      if (aNull) return nf ? -1 : 1;
      if (bNull) return nf ? 1 : -1;
      if (av! < bv!) return asc ? -1 : 1;
      if (av! > bv!) return asc ? 1 : -1;
      return 0;
    });
  }

  private run(): PgResult<any> {
    try {
      const now = new Date().toISOString();
      if (this.op === "select") {
        const all = getRows(this.table);
        const filtered = this.sorted(this.matches(all));
        if (this.countMode === "exact" && this.headOnly) {
          return { data: null, error: null, count: filtered.length };
        }
        if (this.singleMode === "single") {
          if (filtered.length === 0) return { data: null, error: { message: "No rows" } };
          return { data: filtered[0], error: null };
        }
        if (this.singleMode === "maybe") {
          return { data: filtered[0] ?? null, error: null };
        }
        return { data: filtered, error: null, count: this.countMode === "exact" ? filtered.length : null };
      }

      if (this.op === "insert") {
        const arr = Array.isArray(this.payload) ? this.payload : [this.payload!];
        const inserted = arr.map((r) => ({
          id: (r.id as string) ?? uid(),
          created_at: (r.created_at as string) ?? now,
          updated_at: now,
          ...r,
        }));
        const rows = getRows(this.table);
        setRows(this.table, [...inserted, ...rows]);
        if (this.returnAfterWrite || this.singleMode) {
          const data = this.singleMode ? inserted[0] : inserted;
          return { data, error: null };
        }
        return { data: null, error: null };
      }

      if (this.op === "update") {
        const rows = getRows(this.table);
        const patch = this.payload as Row;
        const next = rows.map((r) =>
          this.filters.every((f) => f(r)) ? { ...r, ...patch, updated_at: now } : r,
        );
        setRows(this.table, next);
        if (this.returnAfterWrite || this.singleMode) {
          const updated = next.filter((r) => this.filters.every((f) => f(r)));
          const data = this.singleMode ? updated[0] ?? null : updated;
          return { data, error: null };
        }
        return { data: null, error: null };
      }

      if (this.op === "delete") {
        const rows = getRows(this.table);
        const next = rows.filter((r) => !this.filters.every((f) => f(r)));
        setRows(this.table, next);
        return { data: null, error: null };
      }

      return { data: null, error: { message: "Unsupported op" } };
    } catch (e) {
      return { data: null, error: { message: (e as Error).message } };
    }
  }
}

// ---------- Storage adapter (mock) ----------

const uploadedUrls = new Map<string, string>();

async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(r.error ?? new Error("File read failed"));
    r.readAsDataURL(file);
  });
}

function storageFrom(_bucket: string) {
  return {
    async upload(path: string, file: File, _opts?: unknown) {
      try {
        const url = await fileToDataUrl(file);
        uploadedUrls.set(path, url);
        return { data: { path }, error: null };
      } catch (e) {
        return { data: null, error: { message: (e as Error).message } };
      }
    },
    getPublicUrl(path: string) {
      return { data: { publicUrl: uploadedUrls.get(path) ?? path } };
    },
    async createSignedUrl(path: string, _ttlSeconds: number) {
      const url = uploadedUrls.get(path) ?? path;
      return { data: { signedUrl: url }, error: null };
    },
    async remove(paths: string[]) {
      paths.forEach((p) => uploadedUrls.delete(p));
      return { data: null, error: null };
    },
  };
}

// ---------- Exposed client ----------

export const supabase = {
  from(table: TableName) {
    return new QueryBuilder(table);
  },
  storage: {
    from: storageFrom,
  },
} as const;

// Utility for hooks that want to subscribe to a table's changes.
export function subscribeTable(name: TableName, cb: () => void): () => void {
  let set = listeners.get(name);
  if (!set) {
    set = new Set();
    listeners.set(name, set);
  }
  set.add(cb);
  return () => set!.delete(cb);
}
