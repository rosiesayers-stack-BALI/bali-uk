import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { useCrm, ALL_REGIONS, ALL_DISCIPLINES, type Discipline, type Region } from "@/lib/admin/mock-crm";
import { ArrowUpDown } from "lucide-react";

type SortKey = "name" | "town" | "region" | "discipline" | "status";

export function PeopleOrgList({ kind }: { kind: "people" | "organisations" }) {
  const crm = useCrm();
  const [q, setQ] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState<Region | "">("");
  const [discipline, setDiscipline] = useState<Discipline | "">("");
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({ key: "name", dir: "asc" });

  const rows = useMemo(() => {
    const base = kind === "people" ? crm.people : crm.organisations;
    const filtered = base.filter((r) => {
      if (q && !r.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (town && !r.town.toLowerCase().includes(town.toLowerCase())) return false;
      if (region && r.region !== region) return false;
      if (discipline && r.discipline !== discipline) return false;
      return true;
    });
    filtered.sort((a, b) => {
      const av = String((a as unknown as Record<string, unknown>)[sort.key] ?? "");
      const bv = String((b as unknown as Record<string, unknown>)[sort.key] ?? "");
      return sort.dir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
    return filtered;
  }, [crm, kind, q, town, region, discipline, sort]);

  const toggle = (key: SortKey) =>
    setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));

  const clear = () => { setQ(""); setTown(""); setRegion(""); setDiscipline(""); };

  return (
    <div>
      <PageHeader
        title={kind === "people" ? "People" : "Organisations"}
        subtitle={kind === "people" ? "Members and contacts across the BALI network." : "Member organisations across the BALI network."}
      />
      <div className="p-8 space-y-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <input
            type="search"
            placeholder={`Search ${kind === "people" ? "name" : "organisation name"}…`}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
            aria-label="Search name"
          />
          <input
            type="search"
            placeholder="Town / city"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
            aria-label="Filter by town"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value as Region | "")}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue bg-white"
            aria-label="Filter by region"
          >
            <option value="">All regions</option>
            {ALL_REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value as Discipline | "")}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue bg-white"
            aria-label="Filter by discipline"
          >
            <option value="">All disciplines</option>
            {ALL_DISCIPLINES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-gray-500"><strong className="text-gray-900">{rows.length}</strong> result{rows.length === 1 ? "" : "s"}</span>
            <button onClick={clear} className="text-xs text-bali-blue hover:underline">Clear filters</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {rows.length === 0 ? (
            <div className="p-10 text-center text-sm text-gray-500">No records match those filters.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <tr>
                  {(["name","town","region","discipline","status"] as SortKey[]).map((k) => (
                    <th key={k} className="px-4 py-3">
                      <button onClick={() => toggle(k)} className="inline-flex items-center gap-1 hover:text-bali-blue">
                        {k === "name" && kind === "organisations" ? "Organisation" : k[0].toUpperCase() + k.slice(1)}
                        <ArrowUpDown className={`w-3 h-3 ${sort.key === k ? "text-bali-blue" : "text-gray-400"}`} />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {kind === "people" ? (
                        <Link to="/admin/people/$id" params={{ id: r.id }} className="hover:text-bali-blue">{r.name}</Link>
                      ) : (
                        <Link to="/admin/organisations/$id" params={{ id: r.id }} className="hover:text-bali-blue">{r.name}</Link>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{r.town}</td>
                    <td className="px-4 py-3 text-gray-600">{r.region}</td>
                    <td className="px-4 py-3 text-gray-600">{r.discipline}</td>
                    <td className="px-4 py-3">
                      <StatusPill status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const cls =
    status === "Active" ? "bg-emerald-100 text-bali-green" :
    status === "Prospect" ? "bg-blue-100 text-bali-blue" :
    status === "Lapsed" ? "bg-gray-200 text-gray-700" :
    status === "Applicant" ? "bg-amber-100 text-amber-700" :
    "bg-gray-100 text-gray-700";
  return <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full ${cls}`}>{status}</span>;
}
