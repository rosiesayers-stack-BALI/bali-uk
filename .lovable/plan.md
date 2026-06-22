# BALI Admin Portal — Build Plan

## What you'll get

A password-protected `/admin` area where staff can sign in (shared BALI account) and add/edit/delete:
- **News articles**
- **Events**
- **Policy updates**
- **Training courses**

The public site keeps working exactly as it does now, but the content comes from the database instead of code files.

## How it will work for staff

1. Visit `bali.org.uk/admin` (or `/login`)
2. Sign in with the shared BALI email + password, **or** click "Sign in with Google" with the BALI Google Workspace account
3. Land on a dashboard with four sections: News, Events, Policy, Training
4. Each section shows a list of items with **+ New**, **Edit**, **Delete**, and a **Draft / Published** toggle
5. Forms include image upload, rich-text body, date picker, category dropdowns, etc.
6. "Save" updates the live site immediately — no publishing step needed for content changes

## Build steps

### 1. Database (Lovable Cloud)
Create four tables: `news_articles`, `events`, `policies`, `training_courses`, plus a `media_assets` table for uploaded images. All public-readable (so the site shows them), but only signed-in admins can write.

### 2. Image storage
Set up a storage bucket for uploaded hero images / cover photos, with admin-only upload.

### 3. Migrate existing content
One-off import script pulls everything from `src/content/news.ts`, `src/content/events.ts`, `src/content/policy.ts`, and `src/content/training-courses.json` into the database. The existing pages (`/news`, `/events`, `/policy`, `/events/training`) are switched to read from the database.

### 4. Authentication
- Email/password + Google sign-in (Google managed by Lovable — no setup needed from you)
- One shared admin account; I'll send you instructions to set the password on first launch
- Protected `/admin` routes (signed-out users get bounced to login)

### 5. Admin UI
- `/admin` dashboard
- `/admin/news`, `/admin/events`, `/admin/policy`, `/admin/training` list pages
- `/admin/news/new`, `/admin/news/:id/edit` (and same pattern for the others)
- Forms with validation, image upload, draft/publish toggle, rich-text editor for body content
- Confirmation dialogs on delete

### 6. Public site updates
Switch the four public pages to fetch from the database, with the same look and feel as today.

## What I'll need from you after I build

- A password for the shared BALI admin account (you'll set it on first login via password reset email — I won't see it)
- A confirmation that the migrated content looks right before we go live

## Out of scope for v1 (can be added later)
- Multiple staff accounts with audit log of "who edited what"
- Scheduled publishing (post goes live at a future date)
- Magazine editions admin
- Member directory admin
- Conference page admin

## Rough size
Substantial — this is the biggest change since you started. I'll build it in this order so you can review as we go: database & migration → admin auth & shell → News admin → Events admin → Policy admin → Training admin → switch public pages over.

Shall I proceed?