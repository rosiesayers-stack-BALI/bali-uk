// Mock news engagement analytics + headline/trending flags.
// Everything here is frontend-only.
// TODO: replace with backend endpoints
//   GET  /admin/news/:id/stats
//   POST /admin/news/:id/headline   (with paid billing)

import { useSyncExternalStore } from "react";

// ---------- Views time-series ----------

export type NewsStat = {
  views: number;      // total lifetime views
  clicks: number;     // total "read more" clicks (approx recent engagement)
  recentClicks: number; // last 7 days — drives "trending"
  series: number[];   // 14 day view series (oldest -> newest)
};

// Deterministic pseudo-random so the same article always shows the same numbers.
function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function statsFor(articleId: string, title = ""): NewsStat {
  const seed = hash(articleId + "|" + title);
  const base = 40 + (seed % 220);
  const growth = 0.6 + ((seed >> 4) % 40) / 30;
  const series: number[] = [];
  for (let i = 0; i < 14; i++) {
    const noise = ((seed >> (i % 8)) % 17) - 8;
    series.push(Math.max(2, Math.round(base * (1 + growth * (i / 14) * 0.5)) + noise));
  }
  const views = series.reduce((a, b) => a + b, 0) + 200 + (seed % 900);
  const clicks = Math.round(views * (0.06 + ((seed >> 3) % 12) / 200));
  const recentClicks = Math.round(clicks * (0.28 + ((seed >> 5) % 20) / 100));
  return { views, clicks, recentClicks, series };
}

// ---------- Headline overlay (localStorage) ----------

type HeadlineRecord = {
  headlineId: string | null; // article id currently pinned as paid headline
  paidPricePence: number;    // mock paid amount
  paidUntil: string;         // ISO date
};

const HEADLINE_KEY = "bali_admin_news_headline_v1";

function readHeadline(): HeadlineRecord {
  if (typeof window === "undefined") return { headlineId: null, paidPricePence: 0, paidUntil: "" };
  try {
    const raw = window.localStorage.getItem(HEADLINE_KEY);
    return raw ? (JSON.parse(raw) as HeadlineRecord) : { headlineId: null, paidPricePence: 0, paidUntil: "" };
  } catch {
    return { headlineId: null, paidPricePence: 0, paidUntil: "" };
  }
}
function writeHeadline(v: HeadlineRecord) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(HEADLINE_KEY, JSON.stringify(v)); } catch { /* noop */ }
  emit();
}

const listeners = new Set<() => void>();
// Cache latest snapshot so useSyncExternalStore has a stable reference.
let headlineCache: HeadlineRecord = readHeadline();
function emit() { headlineCache = readHeadline(); listeners.forEach((l) => l()); }
function sub(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function snap() { return headlineCache; }
export function useHeadline() {
  return useSyncExternalStore(sub, snap, snap);
}

// TODO: replace with real payment/billing call.
export function setHeadline(id: string, pricePence = 4900, days = 7) {
  const until = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
  writeHeadline({ headlineId: id, paidPricePence: pricePence, paidUntil: until });
}
export function clearHeadline() {
  writeHeadline({ headlineId: null, paidPricePence: 0, paidUntil: "" });
}

// Given a list of articles (with id + title), pick the trending one by
// recent clicks. Returns id or null if list empty.
export function computeTrending(articles: Array<{ id: string; title?: string | null }>): string | null {
  if (!articles.length) return null;
  let bestId: string | null = null;
  let bestScore = -1;
  for (const a of articles) {
    const s = statsFor(a.id, a.title ?? "").recentClicks;
    if (s > bestScore) { bestScore = s; bestId = a.id; }
  }
  return bestId;
}
