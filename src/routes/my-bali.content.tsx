import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card, PageHeader } from "../components/mybali/DashboardShell";
import { Field, FieldStyles } from "./my-bali.profile.personal";
import { MY_CONTENT, type ContentStatus } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/content")({
  component: ContentPage,
});

type Item = {
  id: string;
  type: "News" | "Event";
  title: string;
  date: string;
  status: ContentStatus;
  body?: string;
};

const STATUS_STYLES: Record<ContentStatus, string> = {
  draft: "bg-gray-100 text-gray-700",
  submitted: "bg-yellow-100 text-yellow-800",
  published: "bg-green-100 text-green-800",
};

function ContentPage() {
  const [items, setItems] = useState<Item[]>(MY_CONTENT);
  const [editing, setEditing] = useState<Item | null>(null);

  const startNew = () =>
    setEditing({ id: crypto.randomUUID(), type: "News", title: "", date: new Date().toISOString().slice(0, 10), status: "draft", body: "" });

  const save = (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setItems((s) => {
      const exists = s.some((x) => x.id === editing.id);
      return exists ? s.map((x) => (x.id === editing.id ? editing : x)) : [editing, ...s];
    });
    setEditing(null);
  };

  return (
    <>
      <PageHeader
        title="My content"
        subtitle="Submit news and events from your organisation to BALI."
        action={
          <button onClick={startNew} className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg text-sm">
            + New submission
          </button>
        }
      />

      {editing && (
        <Card className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {items.some((i) => i.id === editing.id) ? "Edit submission" : "New submission"}
          </h2>
          <form onSubmit={save} className="grid gap-4 sm:grid-cols-2">
            <Field label="Type">
              <select className="input" value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value as Item["type"] })}>
                <option>News</option>
                <option>Event</option>
              </select>
            </Field>
            <Field label="Date">
              <input type="date" className="input" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} />
            </Field>
            <Field label="Title" className="sm:col-span-2" required>
              <input className="input" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} required />
            </Field>
            <Field label="Body" className="sm:col-span-2">
              <textarea className="input min-h-[120px]" value={editing.body ?? ""} onChange={(e) => setEditing({ ...editing, body: e.target.value })} />
            </Field>
            <Field label="Status">
              <select className="input" value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value as ContentStatus })}>
                <option value="draft">Draft</option>
                <option value="submitted">Submitted</option>
                <option value="published">Published</option>
              </select>
            </Field>
            <div className="sm:col-span-2 flex justify-end gap-2">
              <button type="button" onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg border border-gray-300 text-sm">Cancel</button>
              <button type="submit" className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg text-sm">Save</button>
            </div>
          </form>
        </Card>
      )}

      <Card>
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">No submissions yet.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {items.map((i) => (
              <li key={i.id} className="py-3 flex items-center gap-3">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_STYLES[i.status]}`}>{i.status}</span>
                <span className="text-xs text-gray-500 uppercase">{i.type}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 text-sm">{i.title}</div>
                  <div className="text-xs text-gray-500">{i.date}</div>
                </div>
                <button onClick={() => setEditing(i)} className="text-sm text-bali-blue hover:underline">Edit</button>
              </li>
            ))}
          </ul>
        )}
      </Card>
      <FieldStyles />
    </>
  );
}
