import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { PROFILE, TITLES, COUNTRIES } from "../services/mybali-data";

export const Route = createFileRoute("/my-bali/profile/personal")({
  component: PersonalEdit,
});

// TODO: swap this local form state for a real API PUT /me/profile.
function PersonalEdit() {
  const [form, setForm] = useState(PROFILE);
  const [saved, setSaved] = useState(false);
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));
  const setAddr = <K extends keyof typeof form.address>(k: K, v: string) =>
    setForm((f) => ({ ...f, address: { ...f.address, [k]: v } }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal details</h2>
      {saved && <Banner>Details saved (mock).</Banner>}
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <Field label="Title">
          <select
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            className="input"
          >
            {TITLES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Job title">
          <input className="input" value={form.jobTitle} onChange={(e) => set("jobTitle", e.target.value)} />
        </Field>
        <Field label="First name" required>
          <input className="input" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} required />
        </Field>
        <Field label="Last name" required>
          <input className="input" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} required />
        </Field>
        <Field label="Email" required>
          <input type="email" className="input" value={form.email} onChange={(e) => set("email", e.target.value)} required />
        </Field>
        <Field label="Mobile">
          <input className="input" value={form.mobile} onChange={(e) => set("mobile", e.target.value)} />
        </Field>
        <Field label="Street" className="sm:col-span-2">
          <input className="input" value={form.address.street} onChange={(e) => setAddr("street", e.target.value)} />
        </Field>
        <Field label="Town">
          <input className="input" value={form.address.town} onChange={(e) => setAddr("town", e.target.value)} />
        </Field>
        <Field label="County">
          <input className="input" value={form.address.county} onChange={(e) => setAddr("county", e.target.value)} />
        </Field>
        <Field label="Postcode">
          <input className="input" value={form.address.postcode} onChange={(e) => setAddr("postcode", e.target.value)} />
        </Field>
        <Field label="Country">
          <select className="input" value={form.address.country} onChange={(e) => setAddr("country", e.target.value)}>
            {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>

        <div className="sm:col-span-2 flex justify-end">
          <button type="submit" className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm">Save changes</button>
        </div>
      </form>
      <FieldStyles />
    </Card>
  );
}

export function Field({ label, children, required, className = "" }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block text-sm ${className}`}>
      <span className="block text-gray-700 font-medium mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

export function Banner({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm px-4 py-2">{children}</div>;
}

export function FieldStyles() {
  return (
    <style>{`.input{width:100%;border:1px solid #d1d5db;border-radius:0.5rem;padding:0.55rem 0.75rem;font-size:0.875rem;background:#fff}.input:focus{outline:none;border-color:#1e3a8a;box-shadow:0 0 0 3px rgba(30,58,138,0.15)}`}</style>
  );
}
