## Goal

Make /admin fully consistent with /my-bali — mock auth + local mock/service data layer, no Supabase — without breaking /my-bali, /portal, or the public site.

## Already done in this turn

- **Mock staff auth** — new `src/services/admin-auth.ts` with a seeded demo staff user (`admin@bali.org.uk` / `admin123`, role `admin`), separate localStorage key so it's fully isolated from member auth.
- **`src/lib/admin/auth.ts`** rewritten as a thin hook around the mock service (no Supabase).
- **`AdminGate`** now redirects to a staff sign-in screen when not signed in or role isn't staff.
- **`AdminLogin`** rebuilt as email/password only, styled with the /my-bali chrome (Navbar, hero, Footer). Google/OAuth/password-reset paths removed.
- **`src/routes/admin.reset-password.tsx`** deleted (it was Supabase-only).
- `AdminShell` already uses the /my-bali chrome (Navbar, gradient hero, Footer, CookieBanner) — kept as-is.

## Still to do (proposed scope)

Each admin CRUD screen currently calls Supabase directly. To retire Supabase from /admin, I'll introduce a **mock content service** and rewire each route to it. Existing UI, forms, image fields, previews, filters and analytics stay; only the data source changes.

### 1. New mock content service — `src/services/admin-content.ts`

Single module exposing typed CRUD + list APIs for:

- `newsArticles` (list / get / create / update / delete / publish)
- `events`
- `policyPosts`
- `trainingCourses` (with status workflow: pending/published/rejected/changes_requested)
- `lissApplications` (list / get / update status / notes)
- `submissions` (membership + short-apply form submissions)
- `dashboardCounts()` — aggregated counts for the admin dashboard tiles

Backed by:
- Seed data pulled from existing `src/content/*.ts` / `*.json` (news, events, policy, training-courses) so the admin loads with realistic content on first run.
- In-memory arrays + localStorage persistence (same pattern as `admin-auth`), with a tiny pub/sub so lists refresh after writes.
- Each function commented `// TODO: replace with real backend API call`.

### 2. Rewire admin routes (Supabase → mock service)

- `src/routes/admin.index.tsx` — dashboard counts from `dashboardCounts()`.
- `src/routes/admin.news.index.tsx` + `admin.news.$id.tsx` — list/edit/preview/publish, Trending + paid Headline slot preserved.
- `src/routes/admin.events.index.tsx` + `admin.events.$id.tsx` — list, month view, publish, delete.
- `src/routes/admin.policy.index.tsx` + `admin.policy.$id.tsx`.
- `src/routes/admin.training.index.tsx` + `admin.training.$id.tsx` — status workflow preserved.
- `src/routes/admin.liss.index.tsx` + `admin.liss.$id.tsx` — list + detail, status updates.
- `src/routes/admin.submissions.index.tsx` — reads from mock submissions.

React Query is retained; only the `queryFn` bodies change. Mutations invalidate the same keys they do today so the UI still refreshes.

### 3. Image / file handling

`ImageField` currently uploads to Supabase Storage. Swap to a lightweight local approach:
- Accept an image URL string, or read a chosen file as a data URL and store that. Good enough for the mock/prototype layer.
- TODO comment to swap to real object storage later.

### 4. Cleanup

- Remove Supabase imports from all `src/routes/admin.*.tsx` files.
- Leave `src/integrations/supabase/*` in place (still used by /portal and public site).
- Leave `src/lib/admin/submissions.ts`, `functions.ts`, `storage.ts` — replace their bodies with mock-service calls (keep exports so callers don't break) or delete if unreferenced after the rewire.
- Do NOT touch `/portal`, `/my-bali`, or public routes.

### 5. Preserved features

- Dashboard summary tiles + recent activity.
- People/Organisations lists with unified search + filters (already mock).
- Applications pipeline (already mock/local, reading from submissions).
- Membership categories + 2026-27 fee display (already in place).
- News: create/edit/delete, live Preview, engagement analytics, Trending auto-promote, paid Headline slot.
- Calendar/Events manager (month view + list).
- LISS applications review, Training course workflow, Policy manager, Submissions inbox.
- /my-bali chrome (Navbar/hero/Footer) across every admin screen.

## Out of scope

- Real backend endpoints (each mock function is marked with a `TODO`).
- /portal migration (explicitly excluded by the user).
- Any change to /my-bali or public routes.

## Risks / notes

- Big surface area — I'll do the migration route-by-route in one pass, typecheck after each cluster, and keep the same query keys so mutations still refresh lists.
- Persistence is localStorage-only, so clearing storage resets admin content — matches the /my-bali prototype behaviour.

Reply "go" (or with tweaks) and I'll implement the content service and rewire every admin route in the next turn.
