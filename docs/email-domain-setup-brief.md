# Email Domain Setup — Brief for Tech Agency

**Project:** BALI membership application forms (Lovable Cloud app)
**Purpose:** Allow the app to send transactional emails (membership application
submissions, applicant confirmations) from a `@bali.org.uk` address.
**What we need from you:** Add a small number of DNS records at our domain
registrar / DNS provider so our email-sending platform (Lovable Emails) can
verify the domain and send on our behalf.

---

## Background

We are using Lovable's built-in email service. Rather than us managing
individual SPF / DKIM / DMARC / MX / Return-Path records, Lovable uses
**NS (nameserver) delegation of a dedicated subdomain**. Once the subdomain
is delegated to Lovable's nameservers, Lovable provisions and rotates all the
required records inside that delegated zone automatically.

**Important:** delegation is on a **subdomain only** (suggested:
`notify.bali.org.uk`). Your existing records for the root `bali.org.uk`
(website, Microsoft 365 / Google Workspace MX, SPF, DKIM, DMARC, etc.) are
**not affected** and must be left in place.

---

## What to add

Please create the following records at the DNS provider for `bali.org.uk`:

| Type | Name / Host             | Value                  | TTL      |
|------|-------------------------|------------------------|----------|
| NS   | `notify.bali.org.uk`    | `ns3.lovable.cloud.`   | Default  |
| NS   | `notify.bali.org.uk`    | `ns4.lovable.cloud.`   | Default  |

Notes:
- The host/name field is `notify` (some control panels want it written as
  `notify.bali.org.uk.` with a trailing dot — both forms are equivalent).
- Both NS records sit on the **same** `notify` subdomain.
- Please **do not** add SPF, DKIM, DMARC, MX, A, or CNAME records on
  `notify.bali.org.uk` — Lovable will manage all of those inside the
  delegated zone. Any pre-existing records on that subdomain must be removed,
  otherwise delegation will fail to verify.
- Do **not** change any records on the root `bali.org.uk` or on
  `www.bali.org.uk`.

If you would prefer a different subdomain label (e.g. `mail`, `send`,
`email`), let us know before you start and we'll re-issue the request — the
subdomain has to match what we register inside Lovable.

---

## After the records are live

1. Please confirm by email once the two NS records have been added.
2. We will then click **Verify** in the Lovable dashboard. Verification
   usually completes within 30 minutes but can take up to 72 hours depending
   on DNS propagation.
3. Once verified, application submission emails will begin sending from
   `notify@notify.bali.org.uk` (display: `BALI Membership
   <membership@bali.org.uk>`). No further action is needed from your side.

---

## Reverting

If we ever stop using Lovable Emails, simply **delete the two NS records**
on `notify.bali.org.uk`. Nothing else needs unwinding because all of the
SPF/DKIM/etc. records live inside the delegated zone and disappear with it.

---

## Contact

For questions about this request, reply to this email or contact the BALI
digital team.
