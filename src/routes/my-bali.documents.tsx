import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import SmartLink from "../components/SmartLink";

export const Route = createFileRoute("/my-bali/documents")({
  head: () => ({
    meta: [
      { title: "My BALI — Documents & Resources" },
      { name: "description", content: "Members-only BALI documents, guidance and downloads." },
      { property: "og:title", content: "My BALI — Documents & Resources" },
      { property: "og:description", content: "Members-only BALI documents, guidance and downloads." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DocumentsPage,
});

// TODO: replace with real backend API / CMS-managed document list.
const DOCUMENTS = [
  { title: "Brand Guidelines", href: "https://www.bali.org.uk/help-and-advice/documents/brand-guidelines/bali-brand-guidelines.pdf", label: "Updated", date: "30 Mar 2021" },
  { title: "Domestic Contract", href: "https://www.bali.org.uk/help-and-advice/contracts-law-and-regulations/construction-design-management-cdm/domestic-projects/client/", label: "Updated", date: "23 Mar 2021" },
  { title: "Landscape News – Summer 2026", href: "https://issuu.com/balilandscapeuk/docs/bali_landscape_news_summer_2025", label: "Updated", date: "29 Jul 2026" },
  { title: "Webinar Recordings", href: "https://www.bali.org.uk/my-bali/webinar-recordings/", label: "Updated", date: "1 Jun 2021" },
  { title: "Order Vehicle Stickers", href: "https://www.bali.org.uk/my-bali/order-vehicle-stickers/", label: "Updated", date: "1 Apr 2021" },
  { title: "Quality Standard", href: "https://www.bali.org.uk/members/bali-quality-standard/", label: "Updated", date: "23 Mar 2021" },
  { title: "BALI Bank Details", href: "https://www.bali.org.uk/my-bali/bali-bank-details/?preview=true", label: "Updated", date: "14 May 2024" },
  { title: "Articles of Association", href: "https://www.bali.org.uk/help-and-advice/documents/articles-of-association/articles-of-association-final-may-2021.pdf", label: "Updated", date: "16 Jun 2021" },
  { title: "Secure Document Transfer", href: "https://www.bali.org.uk/my-bali/secure-documents/", label: "Created", date: "14 May 2024" },
];

type Resolved = { kind: "internal" | "external"; to: string };

function resolve(href: string): Resolved {
  const isBali = /^https?:\/\/(www\.)?bali\.org\.uk\//i.test(href);
  const isPdf = /\.pdf(\?|#|$)/i.test(href);
  // PDFs and non-BALI links open in a new tab.
  if (!isBali || isPdf) return { kind: "external", to: href };
  // Internal BALI paths navigate within the app.
  return { kind: "internal", to: href.replace(/^https?:\/\/(www\.)?bali\.org\.uk/i, "") };
}

function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="Documents & Resources"
        subtitle="Members-only documents, guidance and downloads."
      />
      <Card>
        <ul className="divide-y divide-gray-100">
          {DOCUMENTS.map((d) => {
            const link = resolve(d.href);
            return (
              <li key={d.title} className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{d.title}</h3>
                  <p className="text-sm text-gray-600 break-all">{d.href}</p>
                </div>
                <div className="text-xs text-gray-500 sm:text-right whitespace-nowrap">
                  <div>{d.label}</div>
                  <div>{d.date}</div>
                </div>
                {link.kind === "external" ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm bg-bali-blue hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg"
                  >
                    Open <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  </a>
                ) : (
                  <SmartLink
                    to={link.to}
                    className="inline-flex items-center text-sm bg-bali-blue hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg"
                  >
                    Open
                  </SmartLink>
                )}
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
}
