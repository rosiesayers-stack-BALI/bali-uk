# BALI Website — Build Plan

## 1. Confirmed decisions
- **Workbooks** = source of truth for members, opportunities, invoices, bookings.
- **Sync cadence**: hourly, bidirectional.
- **Payments**: keep **Global Payments** (HPP/Realex-style hosted iframe — same as the existing site). Money goes directly to BALI.
- **Event booking**: members can both **book new events** (write to Workbooks) and **view their bookings** (read from Workbooks).
- **Member-authored news/events**: in scope, with BALI moderation before publish.
- **Application forms**: 10 of 13 received, covering Accredited (Contractor, Designer, Supplier, DSO, Group, Int'l Contractor, Int'l Supplier) and Associate (Contractor, Designer, Individual). Still needed: Registered Designer, Student, ROLO Training Provider.

## 2. Data model (Lovable Cloud / Postgres)

```text
workbooks_orgs        ← pulled hourly      (id, wb_id, name, vat, reg_no, address, region, disciplines[], category, status, exclude_from_promotion, updated_at)
workbooks_people      ← pulled hourly      (id, wb_id, org_id, name, email, phone, is_main_contact, login_email)
workbooks_invoices    ← pulled hourly      (id, wb_id, org_id, amount, status, smartcard_ref, issued_at)
workbooks_bookings    ← pulled + pushed    (id, wb_id, person_id, event_id, status, paid_at, amount)
workbooks_opportunities ← pulled hourly    (sales leads / enquiries status)

directory_profiles    ← OUR CMS            (org_id FK, about, logo, banner, whos_who_70w, slug)
directory_projects    ← OUR CMS            (profile_id, title, description, images[])
directory_team        ← OUR CMS            (profile_id, name, role, photo)
directory_accreds     ← OUR CMS            (profile_id, name, logo)   -- max 5
directory_testimonials ← OUR CMS           (profile_id, quote, author, images[])  -- max 6 imgs

events                 ← OUR CMS + booking link to workbooks_bookings
news_articles          ← OUR CMS (member-authored, moderated)
member_events          ← OUR CMS (member-authored, moderated)

profile_stats          ← OUR analytics    (org_id, period, views, logins, search_appearances, profile_views)

membership_applications ← write-only      (category, payload jsonb, file_uploads[], status, workbooks_lead_id)
                                          -- pushed to Workbooks as Sales Lead
documents              ← gated library    (file, title, category, allowed_member_types[])
benefits               ← gated content    (same gating pattern)

user_roles             ← already exists   (admin/editor/member)
```

Members log in with their Workbooks email; their `org_id` links them to everything they can edit.

## 3. Workbooks sync (hourly cron)

- TanStack server route `src/routes/api/public/hooks/workbooks-sync.ts`
- pg_cron hits it every hour with the anon key
- Pulls **People, Organisations, Memberships, Disciplines, Categories, Regions, Opportunities, Invoices, Event Bookings**
- Pushes **enquiries, applications, profile edits, password changes, new event bookings, SmartCard updates**
- Uses Workbooks REST API + the API key stored in secrets (`WORKBOOKS_API_KEY`, `WORKBOOKS_BASE_URL`)
- Failure handling: log + retry next cycle; never block site reads

## 4. Authentication
- Email/password against Workbooks (validated via API on login, then a Lovable Cloud session is minted)
- **Spoof login** for BALI staff (admin can impersonate any member for support)
- **Forgot password** with 24h expiring link (validates against Workbooks, updates both sides)

## 5. Members portal (gated under `/portal`)
- Dashboard: membership status, renewal date, SmartCard
- **My profile editor** (writes to directory_* tables, not Workbooks)
  - About (200 words), Who's Who (70 words), logo, banner
  - Projects with images
  - Team members with photos
  - Accreditations (max 5)
  - Testimonials (max 6 images)
- **My bookings** (read from Workbooks)
- **My invoices** (read from Workbooks)
- **My stats** (views, logins, profile views, search appearances)
- **Submit news article** / **Submit event** (queued for BALI approval)
- **Account**: address, phone, password — pushed to Workbooks

## 6. Public directory
- `/directory` index + category pages (Contractor, Designer, Supplier, Training)
- **Keyword search** with weighted fields (company name > disciplines > description)
- **Postcode search** (geocoded radius) — separate from keyword
- **ROLO training provider** sub-directory (filtered slice)
- Listing page combines Workbooks data (contact, disciplines, regions) + our CMS data (projects, team, testimonials, who's who)
- Honours `exclude_from_promotion` flag from Workbooks

## 7. Event booking + Global Payments
1. Member browses `/events`, clicks an event
2. Booking form (attendee details, dietary, etc.) — fields mirror Workbooks booking record
3. Server creates a pending `workbooks_bookings` row, then redirects to **Global Payments HPP** (hosted iframe matching the existing site)
4. Global Payments posts back to `/api/public/hooks/global-payments-callback` with HMAC signature → verify → mark booking paid → push to Workbooks as confirmed booking
5. Confirmation email + visible in "My bookings"

Secrets needed: `GLOBAL_PAYMENTS_MERCHANT_ID`, `GLOBAL_PAYMENTS_SHARED_SECRET`, `GLOBAL_PAYMENTS_ACCOUNT_ID` (sandbox + live pair).

## 8. Membership application forms (13 categories)

Single dynamic form engine driven by JSON schemas. One schema per category captures:
- **Section 1**: org / individual info, address, regions of operation, registration / VAT, employees, turnover band, telephone, email, website, description (200 words), **disciplines with project value bands** (£5K / £10K / £50K / £100K / Unlimited) — Accredited only
- **Section 2**: applicant contact (name, role, email, phone)
- **Section 3**: references (where required)
- **Section 4**: T&Cs + code of conduct checkboxes, signature, date
- **File uploads** for supporting docs (insurance, accounts) into `membership-applications` bucket

Submission writes to `membership_applications`, then pushes to Workbooks as a **Sales Lead** with the right category tag. BALI processes it inside Workbooks; sync brings the resulting Org/Person back to the site.

## 9. Gated library
- **Documents**, **Benefits & Resources**, **Help & Advice (members-only sections)**
- Each item tagged with allowed membership categories
- Gate enforced server-side (server function checks role + member category before returning content/file URL)

## 10. SEO + content (already partly built)
- Per-route titles, descriptions, og:image
- JSON-LD: Organization sitewide, Event on event pages, Article on news, FAQPage on plant-health FAQ
- Sitemap route generated from DB

## 11. Build order (rough sequencing)

```text
Week 1  Workbooks sync skeleton + auth against Workbooks + portal shell
Week 2  My profile editor + directory CMS tables + public directory read
Week 3  Event booking + Global Payments HPP integration + callbacks
Week 4  Membership application engine (all 13 categories) + Sales Lead push
Week 5  Member-authored news/events + moderation queue + gated docs/benefits
Week 6  Postcode/keyword search, profile stats, spoof login, polish, go-live
```

## 12. Open items to confirm
1. **Workbooks API key + base URL** — once you have it from Workbooks support, add via the secret tool.
2. **Global Payments credentials** — Merchant ID, Shared Secret, Account ID (sandbox first, then live).
3. **Remaining 3 application forms** — Registered Designer, Student, ROLO Training Provider.
4. **Email sender domain** — for booking confirmations, application receipts, password reset. Need a verified domain (e.g. `noreply@bali.org.uk`).
5. **Geocoding provider** — Google Maps, Mapbox, or postcodes.io (free, UK-only — recommend this).

---

Approve this and I'll start with Week 1: data model migration + Workbooks sync route + auth wiring, behind a feature flag so it doesn't disrupt the live site.