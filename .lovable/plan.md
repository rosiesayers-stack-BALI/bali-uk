## Goal
Add every public BALI page (excluding the My BALI members-only area) that is currently missing from the new site, with real content lifted from bali.org.uk.

## Scope (≈80 pages)
- **About**: `/about/what-is-bali`, `/about/rhs-chelsea-flower-show-2025`, `/our-team`
- **Contact**: `/contact/team`
- **Events**: `/events/terms`
- **Help & Advice sub-tree** (largest block):
  - Contracts/Law: CDM (+4 subs), GDPR, IR35, JCLI, Good Work Plan, VAT Reverse Charge, Water Abstraction, Evolution of Employment
  - Equipment (new section): index + Driving for Better Business, E10 Fuel, Red Diesel, Tachographs (+1), Towing a Trailer, Tractors (+1)
  - Dispute: Client Info, FAQs, Member Info
  - Health & Safety: 17 sub-pages
  - Pests & Diseases: 12 sub-pages
  - Plant Health (new section): index + 8 subs
  - Misc: Guides, Managing Client Expectations, Domestic Landscape Contract, Online Renewals FAQs
- **LISS/CSCS**: 7 SmartCard category pages, 9 Check Qualifications pages, 3 Industry Accreditation pages, 2 ROLO sub-pages, FAQs
- **Membership/Join**: 9 member-type pages, Membership Enquiry, Training Provider Declaration, Become-a-Member
- **Membership Quality Standard**: full breakdown (12 sub-pages across Management Responsibility, Product/Service Delivery, Resource Management)
- **Directory**: Who's Who Directory 2025/26
- **Other**: `/policy` landing, `/site-search` results page, conference discount-code page, `/news/landscape-news`

## Approach

### 1. Reuse existing infrastructure
- All pages render via the existing `src/routes/$.tsx` splat using entries in `src/content/pages.ts`. No new route files needed.
- New nav sub-items added to `Navbar.tsx` where appropriate (Equipment, Plant Health top-level entries; member-type links under Join).

### 2. Scrape live content
- Write a one-shot Node script (`scripts/scrape-bali.ts`, then deleted) that:
  - Fetches each target URL from `bali.org.uk`
  - Uses `cheerio` to extract: page title (h1), intro (lead paragraph), section headings + body, hero image, bullet lists
  - Maps each to a `PageContent` object with theme assigned per top-level section (help=warm, lisscscs=green, membership=blue, about=blue, directory=slate)
  - Emits TS source appended to `pages.ts`

### 3. Images
- For each scraped page, download the hero image into `src/assets/scraped/<slug>.jpg` and reference via the local path. Keep alt text from the source.

### 4. Navigation updates
- Add **Equipment** and **Plant Health** as new top-level items under Help & Advice in `Navbar.tsx`
- Add second-level expandable groups for sub-pages where helpful (LISS/CSCS apply categories, H&S topics) — or leave as links from the parent page only to keep the nav uncluttered

### 5. Verification
- After generation, spot-check 5 pages in the preview to confirm content rendered correctly
- Build passes (no TS errors in pages.ts)

## What this does NOT include
- My BALI / members area (`/my-bali/*`) — explicitly excluded per your instruction
- Form back-ends (membership enquiry, RHS enquiry, training-provider declaration will render as informational pages with a "Contact us" CTA, not live forms — wiring forms is a separate task)
- News article backfill (existing 52 articles untouched; you can ask separately for a full news archive import)

## Time / size
This is a large content drop — ~80 new entries, probably +3,000–5,000 lines in `pages.ts`. I will run the scrape in batches of ~20 pages at a time to keep things reviewable.

## Confirm before I start
Two quick choices:
1. **Scrape verbatim** (current site copy, including any dated phrasing) vs **scrape + light edit** (clean up obvious legacy references like "2024 changes")? Default: verbatim.
2. **Images**: download and host locally vs hot-link from `bali.org.uk`? Default: download locally (safer, faster, matches existing pattern).

Reply "go" (or with overrides) and I'll start with the Help & Advice block.