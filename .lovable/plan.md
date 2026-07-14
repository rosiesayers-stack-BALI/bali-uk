
## Current state

**1) Supabase / backend integrations in use (Lovable Cloud = Supabase under the hood)**

Yes — Supabase is connected and used extensively. `.env` has `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY`, and 33 files reference it, including:

- Client wrappers: `src/integrations/supabase/{client,client.server,auth-middleware,auth-attacher}.ts`, `src/integrations/lovable/index.ts`
- App bootstrap: `src/start.ts` (registers `attachSupabaseAuth` middleware)
- Member auth + portal: `src/pages/LoginPage.tsx` (email/password sign-in), `src/routes/portal.tsx` (guarded via `supabase.auth.getUser`), portal features (`src/lib/portal/api.ts`, `src/lib/portal/courses.ts`, `src/components/portal/*`)
- Admin area: `src/lib/admin/*`, `src/components/admin/*`, all `src/routes/admin.*.tsx` including `admin.reset-password.tsx`
- Server functions / public API routes: `src/routes/api/public/*` (membership, conference, workbooks webhook), `src/lib/liss-*.functions.ts`
- Content: `src/lib/content/db.ts`

**2) Existing login / member area**

Yes:
- `/login` → `src/pages/LoginPage.tsx` — real Supabase email+password login, redirects to `/portal`
- `/portal` → `src/pages/PortalPage.tsx` — the member dashboard (Directory editor, News submit, Training Provider Hub, notifications), guarded by Supabase `getUser()`
- `/admin/*` — separate staff admin area with its own Supabase-backed login/reset
- No `/forgotten-password` or `/reset-password` route exists at the member level (only `/admin/reset-password`)

---

## Plan — add a parallel, frontend-only "My BALI" auth

Scope note: The user wants no Supabase for auth **for the new My BALI area**. The existing Supabase-backed `/portal`, `/admin/*`, and public API routes are load-bearing (directory editor, training hub, admin CMS, membership application webhooks). Ripping Supabase out project-wide is a much larger job and would break unrelated features. This plan therefore:

- Builds the new My BALI flow as a standalone, mock-auth area, isolated from Supabase.
- Leaves `/portal`, `/admin/*`, and API routes untouched.
- Assumption (flag if wrong): the existing `/login` + `/portal` remain as-is; the new area lives at `/my-bali` with its own `/login`, `/forgotten-password`, `/reset-password`.

If you actually want to **replace** the current member portal entirely (delete `/portal` and its Supabase wiring), say so and I'll extend the plan — that's a bigger change.

### Mock auth service

`src/services/auth.ts` — single module, no React, no network. Exposes:

```
login(email, password)             -> Promise<User>
logout()                           -> Promise<void>
forgotPassword(email)              -> Promise<{ resetToken: string }>  // demo returns token
resetPassword(token, newPassword)  -> Promise<void>
changePassword(oldPw, newPw)       -> Promise<void>
getCurrentUser()                   -> User | null
subscribe(listener)                -> unsubscribe                       // for context
```

Details:
- In-memory demo users seeded at module load (e.g. `demo@bali.org.uk` / `password123`).
- Session persisted to `localStorage` under `mybali_session_v1` so refresh keeps you signed in; SSR-safe (guard `typeof window`).
- Reset tokens stored in-memory with short TTL; `forgotPassword` logs the reset URL to the console for demo purposes.
- Every exported function starts with `// TODO: replace with real backend API call to <endpoint>`.
- Artificial ~300ms delay so loading states are testable.

### React auth context

`src/services/auth-context.tsx` — `<MyBaliAuthProvider>` + `useMyBaliAuth()` hook. Wraps the service, exposes `{ user, loading, login, logout, ... }`, subscribes to the service so all consumers update together. Mounted inside `__root.tsx` (alongside the existing `QueryClientProvider`) so it's available everywhere but adds zero network traffic.

### Routes (TanStack Start, file-based)

Public:
- `src/routes/login.tsx` — **already exists and is Supabase-backed**. Options:
  - (A) Repoint it to the mock service (breaks current members).
  - (B) Recommended: leave existing `/login` alone; put the new mock login at `/login` only if you confirm you want to replace it. Otherwise use `/my-bali/login`.
  - Assumption for this plan: **replace `/login` with the mock version** since the brief says "Login (/login)". I'll keep the old Supabase login component around as `LoginPageLegacy.tsx` for reference but unrouted. Confirm if you'd rather keep both.
- `src/routes/forgotten-password.tsx` — email form → `forgotPassword()` → success message ("If the email exists, we've sent a reset link"); in dev also surface the demo reset link.
- `src/routes/reset-password.tsx` — reads `?token=` search param, new-password + confirm form → `resetPassword()` → redirect to `/login`.

Protected:
- `src/routes/_mybali/route.tsx` — pathless layout, `ssr: false`, `beforeLoad` reads `getCurrentUser()`; if null, `throw redirect({ to: '/login', search: { dest: location.href } })`.
- `src/routes/_mybali/my-bali.tsx` → URL `/my-bali` — dashboard shell: welcome, account summary, "Change password", "Sign out". Styled to match existing portal (Tailwind, `bali-blue`, same card/`rounded-2xl shadow-lg` treatment as `LoginPage.tsx`).

Login redirect-back: `/login` accepts `?dest=` search param (validated same-origin path), and after successful `login()` navigates to `dest` or `/my-bali`.

### Styling / consistency

- Reuse existing Tailwind tokens (`bali-blue`, `bali-grass`, `bali-slate`), the utility bar + split-panel layout already in `LoginPage.tsx`, and the same header/footer treatment for the three new auth pages so they feel like one family.
- The `/my-bali` dashboard reuses the portal's card patterns but is standalone (does not import Supabase-touching components).

### Non-goals / explicit exclusions

- No changes to `/portal`, `/admin/*`, `src/lib/portal/*`, `src/lib/admin/*`, `src/routes/api/public/*`, or any Supabase integration file.
- No env-var changes, no migrations.
- No real email sending; forgotten-password shows the reset token/link in the UI in dev only.

---

## Files to add

- `src/services/auth.ts` — mock auth service
- `src/services/auth-context.tsx` — provider + hook
- `src/routes/forgotten-password.tsx`
- `src/routes/reset-password.tsx`
- `src/routes/_mybali/route.tsx` — protected pathless layout
- `src/routes/_mybali/my-bali.tsx` — dashboard (URL `/my-bali`)
- `src/components/mybali/AuthLayout.tsx` — shared split-panel shell reused by login/forgotten/reset

## Files to change

- `src/routes/__root.tsx` — wrap `<Outlet />` in `<MyBaliAuthProvider>`
- `src/routes/login.tsx` — swap component to new mock-auth `LoginPage`, accept `?dest=` (only if you confirm replacing the existing member login)
- `src/pages/LoginPage.tsx` — either rewrite for mock auth, or rename to `LoginPageLegacy.tsx` and add a new `MyBaliLoginPage.tsx` (decision hinges on the question above)

## Open questions before I build

1. **Replace or coexist?** Should the new mock `/login` replace the current Supabase member login, or live at a different path so the existing `/portal` keeps working?
2. **Delete `/portal`?** If mock auth replaces Supabase auth, do you also want `/portal` (Directory editor, Training Provider Hub, notifications) removed or left dormant? Those features rely on Supabase and will error if the login no longer produces a Supabase session.
3. Demo credentials to seed (default: `demo@bali.org.uk` / `password123`)?
