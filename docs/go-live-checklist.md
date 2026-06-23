# Go-Live Checklist — bali.org.uk

A running list of everything that needs to happen before the new site is
fully functional on `bali.org.uk`. Tick items off as they're completed.
Update this file whenever a new dependency or action surfaces.

Legend: `[ ]` to do · `[~]` in progress / waiting on third party · `[x]` done

---

## 1. Domain & hosting

- [ ] **Connect `bali.org.uk` to Lovable**
  - In Lovable: *Project Settings → Domains → Connect Domain*, add both
    `bali.org.uk` and `www.bali.org.uk`.
  - Brief the tech agency to add the A records (`@` and `www` → `185.158.133.1`)
    and the `_lovable` TXT verification record at the registrar.
  - Choose `bali.org.uk` (or `www`) as the **Primary** domain so the other
    redirects to it.
  - Wait for SSL to provision (up to 72h, usually <1h).
- [ ] **Decide cutover plan with the agency** — when DNS for the live site
  flips from the current host to Lovable. Ideally out-of-hours.
- [ ] **Redirects from the old site** — give the agency a list of any old URLs
  that need 301s to new equivalents (e.g. old PDF application links →
  `/join/<category>/apply`).

## 2. Email sending (membership applications)

- [~] **Agency to add NS delegation for `notify.bali.org.uk`** — see
  `docs/email-domain-setup-brief.md`. Two NS records pointing to
  `ns3.lovable.cloud` and `ns4.lovable.cloud`.
- [ ] **Verify the email domain in Lovable** once the agency confirms.
- [ ] **Switch the membership form from console-logging to live email** —
  currently `src/routes/api/public/membership-application.ts` logs to the
  server console as a safety net; remove that fallback once email is verified.
- [ ] **Send a test application end-to-end** and confirm `membership@bali.org.uk`
  receives the summary + signed document links, and the applicant gets the
  confirmation email.
- [ ] **Wire enquiry-form notifications** — the short "Apply online" form on
  `/join/<category>/apply` and the general `/membership/enquiry` form
  currently save submissions to the database only. Once the email domain is
  verified, add an email notification to `membership@bali.org.uk` (and an
  acknowledgement to the applicant) on every submission.
- [ ] **Confirm `membership@bali.org.uk` mailbox exists** and is monitored by
  the membership team (this is a separate mailbox on the agency's mail
  platform — not something Lovable provisions).


## 3. Membership application forms

- [ ] **Sign-off from the membership team** on each of the 9 forms:
  Accredited Contractor / Designer / Supplier / Group / DSO, Associate
  Contractor / Designer, International Contractor / Supplier.
- [ ] **Confirm Student & Training Provider** routes — currently `mailto:`
  fallbacks because no PDFs were supplied. Either provide the forms or
  confirm mailto is acceptable for launch.
- [ ] **GDPR / privacy copy** — confirm the wording on the consent checkboxes
  and add a link to the privacy policy.
- [ ] **Retention policy** for uploaded supporting documents in Lovable
  Cloud storage (currently private bucket, signed links expire after 14
  days, files themselves remain). Decide how long files are kept and whether
  to add a cleanup job.

## 4. Content & SEO

- [ ] Final proofread of `/join` and every `/join/<category>/apply` page.
- [ ] Page titles, meta descriptions, OG/Twitter cards on every public route.
- [ ] Favicon and social share image using BALI branding.
- [ ] `robots.txt` and `sitemap.xml` reviewed.
- [ ] Run the built-in SEO scan and clear any critical findings.

## 5. Legal & compliance

- [ ] Privacy policy reviewed for the new data flows (form data emailed off-site,
  documents stored in Lovable Cloud).
- [ ] Cookie / analytics banner if analytics are added.
- [ ] Accessibility pass (keyboard nav, contrast, form labels).

## 6. Analytics & monitoring

- [ ] Add analytics (e.g. Plausible / GA4) if required.
- [ ] Decide on uptime monitoring for the published site.
- [ ] Confirm someone owns the Lovable account and billing.

## 7. Final publish

- [ ] Click **Publish** in Lovable to push the latest build.
- [ ] After DNS cutover, smoke-test on `bali.org.uk`: home, `/join`, one
  application submission, mobile view, 404 page.
- [ ] Announce launch internally.

---

## Action owners

| Area                          | Owner                       |
|-------------------------------|-----------------------------|
| DNS / domain / NS delegation  | Tech agency                 |
| `membership@bali.org.uk` inbox| BALI membership team        |
| Form content sign-off         | BALI membership team        |
| Privacy / legal copy          | BALI ops                    |
| Lovable build & publish       | Digital lead (Lovable user) |

Related docs:
- `docs/email-domain-setup-brief.md` — DNS instructions for the agency
- `.lovable/plan.md` — application form build plan
