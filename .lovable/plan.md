## What I'll build

Nine online application forms — one per membership category — replacing the PDF downloads. Each form sits at `/join/<category>/apply`, with file uploads stored in Lovable Cloud and the completed application emailed to `membership@bali.org.uk`.

## Pages

- `/join/accredited-contractor/apply`
- `/join/accredited-designer/apply`
- `/join/accredited-supplier/apply`
- `/join/accredited-group/apply`
- `/join/accredited-dso/apply`
- `/join/international-contractor/apply` (was "International" — there are actually two: Contractor + Supplier)
- `/join/international-supplier/apply`
- `/join/associate-contractor/apply`
- `/join/associate-designer/apply`

The `/join` page category cards will link to these instead of `/contact`. (Student & Training Provider PDFs weren't uploaded — I'll keep those as mailto for now.)

## Form structure (shared)

All forms reuse the same building blocks, configured per category:

1. **Company information** — name, address, postcode, country, regions (multi-check), reg/VAT no., employees, turnover, telephone, public email, website. Associate forms also include "Date of incorporation".
2. **Company description** — textarea (200-word limit, live counter).
3. **Disciplines** *(Contractor/Designer/Supplier categories only)* — multi-check list specific to category.
4. **Three contacts** — Applicant / Main / Invoice, each with name, email, phone, job title + 8 communication preferences. "Same as above" toggle copies values.
5. **References** *(Accredited only)* — Trade refs (2) + Client refs (varies: 10 for Contractor, fewer/different for others).
6. **Supporting documents** — file upload (PDF/JPG/PNG, max 10MB each) for each required doc: company letterhead, PL insurance, EL insurance, latest accounts, H&S policy, etc. (per category).
7. **Terms & code of conduct** — two required checkboxes + typed name/job title/date as e-signature.

Built with `react-hook-form` + `zod` validation. Progress saved to `sessionStorage` so a refresh doesn't lose work.

## File uploads

- Private Lovable Cloud storage bucket `membership-applications`.
- On submit, files upload first; signed URLs (7-day expiry) are included in the email so the membership team can download.
- Server-side validation: file type whitelist, 10MB per file, max 8 files per application.

## Submission

Public TanStack server route `/api/public/membership-application` (rate-limited by IP, simple in-memory token bucket):
- Validates payload with zod.
- Uploads files to storage via service role.
- Sends one email to `membership@bali.org.uk` via Lovable Emails using a `membership-application` React Email template — applicant info in body, all answers in a styled summary table, signed links to uploaded docs.
- Sends a confirmation email to the applicant ("We've received your application").
- Returns success → applicant sees a thank-you screen.

No data is stored in the DB beyond the upload itself (per your "email only" choice).

## Email infrastructure

Requires Lovable Emails domain. If not yet configured, I'll prompt you to set one up — emails won't send until DNS is verified, but the rest of the build proceeds.

## Out of scope (for this pass)

- Admin portal (you chose email-only).
- Payment (you chose fees-later).
- Saving drafts across devices / accounts.
- Student & Training Provider forms (no PDFs supplied).

## Technical notes

- Shared form schema lives in `src/lib/membership/forms.ts` — one config object per category drives the UI, validation, and email rendering.
- Shared `<ApplicationForm config={...} />` component renders any category from its config — keeps the 9 routes thin.
- Storage bucket created via migration with RLS (service-role write, no public read; signed URLs only).
