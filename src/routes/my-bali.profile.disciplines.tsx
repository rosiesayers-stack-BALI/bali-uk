import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { Banner } from "./my-bali.profile.personal";
import { DISCIPLINES } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/profile/disciplines")({
  component: DisciplinesEdit,
});

// TODO: replace with API PUT /me/disciplines
function DisciplinesEdit() {
  const [selected, setSelected] = useState<string[]>(["Soft landscaping", "Hard landscaping"]);
  const [saved, setSaved] = useState(false);
  const toggle = (d: string) =>
    setSelected((s) => (s.includes(d) ? s.filter((x) => x !== d) : [...s, d]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Disciplines</h2>
      <p className="text-sm text-gray-500 mb-4">Select all landscaping disciplines that apply to your organisation.</p>
      {saved && <Banner>Disciplines saved (mock).</Banner>}
      <form onSubmit={submit}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {DISCIPLINES.map((d) => (
            <label key={d} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={selected.includes(d)}
                onChange={() => toggle(d)}
                className="rounded border-gray-300 text-bali-blue focus:ring-bali-blue/40"
              />
              {d}
            </label>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm">Save disciplines</button>
        </div>
      </form>
    </Card>
  );
}
