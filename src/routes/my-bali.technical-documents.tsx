import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { FieldStyles } from "./my-bali.profile.personal";
import { TECHNICAL_DOCS } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/technical-documents")({
  component: TechDocsPage,
});

function TechDocsPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("");

  const types = useMemo(() => Array.from(new Set(TECHNICAL_DOCS.map((d) => d.type))), []);
  const filtered = TECHNICAL_DOCS.filter((d) => {
    if (q && !d.title.toLowerCase().includes(q.toLowerCase()) && !d.description.toLowerCase().includes(q.toLowerCase())) return false;
    if (type && d.type !== type) return false;
    return true;
  });

  return (
    <>
      <PageHeader title="Technical documents" subtitle="Downloadable technical guidance for members." />
      <Card>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          <input className="input" placeholder="Search documents…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All file types</option>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500">No documents match these filters.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {filtered.map((d) => (
              <li key={d.id} className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{d.title}</h3>
                  <p className="text-sm text-gray-600">{d.description}</p>
                </div>
                <div className="text-xs text-gray-500 sm:text-right whitespace-nowrap">
                  <div>{d.type} · {d.size}</div>
                  <div>{d.date}</div>
                </div>
                <a href="#" className="inline-flex items-center text-sm bg-bali-blue hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg">
                  Download
                </a>
              </li>
            ))}
          </ul>
        )}
      </Card>
      <FieldStyles />
    </>
  );
}
