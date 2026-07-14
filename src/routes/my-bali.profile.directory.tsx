import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { Field, Banner, FieldStyles } from "./my-bali.profile.personal";

export const Route = createFileRoute("/my-bali/profile/directory")({
  component: DirectoryEdit,
});

type Project = { id: string; title: string; summary: string };
type Team = { id: string; name: string; role: string };
type Accreditation = { id: string; title: string; issuer: string };

// TODO: replace mock state with API GET/PUT /me/directory
function DirectoryEdit() {
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    { id: "p1", title: "Riverside Corporate HQ", summary: "12,000m² landscape refit for a Warwickshire HQ." },
  ]);
  const [team, setTeam] = useState<Team[]>([
    { id: "t1", name: "Alex Rivers", role: "Managing Director" },
  ]);
  const [accreds, setAccreds] = useState<Accreditation[]>([
    { id: "a1", title: "ISO 9001", issuer: "BSI" },
  ]);
  const [saved, setSaved] = useState(false);

  const readFile = (f: File | null, setter: (s: string | null) => void) => {
    if (!f) return setter(null);
    const r = new FileReader();
    r.onload = () => setter(r.result as string);
    r.readAsDataURL(f);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Directory listing</h2>
      {saved && <Banner>Directory listing saved (mock).</Banner>}
      <form onSubmit={submit} className="space-y-8">
        <section>
          <h3 className="font-semibold text-gray-900 mb-3">Images</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Logo (max 1080×1080)">
              <input type="file" accept="image/*" onChange={(e) => readFile(e.target.files?.[0] ?? null, setLogo)} className="text-sm" />
              {logo && <img src={logo} alt="Logo preview" className="mt-2 h-24 w-24 object-contain border rounded" />}
            </Field>
            <Field label="Banner (max 1280×800)">
              <input type="file" accept="image/*" onChange={(e) => readFile(e.target.files?.[0] ?? null, setBanner)} className="text-sm" />
              {banner && <img src={banner} alt="Banner preview" className="mt-2 h-24 w-full object-cover border rounded" />}
            </Field>
          </div>
        </section>

        <Repeatable
          title="Projects"
          items={projects}
          onAdd={() => setProjects((s) => [...s, { id: crypto.randomUUID(), title: "", summary: "" }])}
          onRemove={(id) => setProjects((s) => s.filter((x) => x.id !== id))}
          renderItem={(p, update) => (
            <>
              <Field label="Title"><input className="input" value={p.title} onChange={(e) => update({ ...p, title: e.target.value })} /></Field>
              <Field label="Summary"><textarea className="input" value={p.summary} onChange={(e) => update({ ...p, summary: e.target.value })} /></Field>
            </>
          )}
          onUpdate={(idx, v) => setProjects((s) => s.map((x, i) => (i === idx ? v : x)))}
        />

        <Repeatable
          title="Team members"
          items={team}
          onAdd={() => setTeam((s) => [...s, { id: crypto.randomUUID(), name: "", role: "" }])}
          onRemove={(id) => setTeam((s) => s.filter((x) => x.id !== id))}
          renderItem={(t, update) => (
            <>
              <Field label="Name"><input className="input" value={t.name} onChange={(e) => update({ ...t, name: e.target.value })} /></Field>
              <Field label="Role"><input className="input" value={t.role} onChange={(e) => update({ ...t, role: e.target.value })} /></Field>
            </>
          )}
          onUpdate={(idx, v) => setTeam((s) => s.map((x, i) => (i === idx ? v : x)))}
        />

        <Repeatable
          title="Accreditations"
          items={accreds}
          onAdd={() => setAccreds((s) => [...s, { id: crypto.randomUUID(), title: "", issuer: "" }])}
          onRemove={(id) => setAccreds((s) => s.filter((x) => x.id !== id))}
          renderItem={(a, update) => (
            <>
              <Field label="Title"><input className="input" value={a.title} onChange={(e) => update({ ...a, title: e.target.value })} /></Field>
              <Field label="Issuer"><input className="input" value={a.issuer} onChange={(e) => update({ ...a, issuer: e.target.value })} /></Field>
            </>
          )}
          onUpdate={(idx, v) => setAccreds((s) => s.map((x, i) => (i === idx ? v : x)))}
        />

        <div className="flex justify-end">
          <button className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm">Save listing</button>
        </div>
      </form>
      <FieldStyles />
    </Card>
  );
}

function Repeatable<T extends { id: string }>({
  title, items, onAdd, onRemove, onUpdate, renderItem,
}: {
  title: string;
  items: T[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (index: number, value: T) => void;
  renderItem: (item: T, update: (v: T) => void) => React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <button type="button" onClick={onAdd} className="text-sm text-bali-blue hover:underline">+ Add</button>
      </div>
      <div className="space-y-3">
        {items.length === 0 && <p className="text-sm text-gray-500">No items yet.</p>}
        {items.map((item, i) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4 grid gap-3 sm:grid-cols-2 relative">
            {renderItem(item, (v) => onUpdate(i, v))}
            <button type="button" onClick={() => onRemove(item.id)} className="absolute top-2 right-2 text-xs text-red-600 hover:underline">Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
}
