import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { Field, Banner, FieldStyles } from "./my-bali.profile.personal";
import { ORGANISATION, REGIONS, COUNTRIES } from "../services/mybali-data";
import { useCanEditOrganisation, ReadOnlyBanner } from "@/lib/mybali/contact-role";

export const Route = createFileRoute("/my-bali/profile/organisation")({
  component: OrgEdit,
});

// TODO: replace with API PUT /me/organisation
function OrgEdit() {
  const [form, setForm] = useState(ORGANISATION);
  const [saved, setSaved] = useState(false);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));
  const setAddr = <K extends keyof typeof form.address>(k: K, v: string) =>
    setForm((f) => ({ ...f, address: { ...f.address, [k]: v } }));
  const setSocial = <K extends keyof typeof form.socials>(k: K, v: string) =>
    setForm((f) => ({ ...f, socials: { ...f.socials, [k]: v } }));
  const toggleRegion = (r: string) =>
    setForm((f) => ({ ...f, regions: f.regions.includes(r) ? f.regions.filter((x) => x !== r) : [...f.regions, r] }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const { canEdit, reason } = useCanEditOrganisation();

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Organisation details</h2>
      {!canEdit && reason && <ReadOnlyBanner reason={reason} />}
      {saved && <Banner>Organisation saved (mock).</Banner>}
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <fieldset disabled={!canEdit} className="contents">
        <Field label="Organisation name" className="sm:col-span-2" required>
          <input className="input" value={form.name} onChange={(e) => set("name", e.target.value)} required />
        </Field>
        <Field label="Business description" className="sm:col-span-2">
          <textarea className="input min-h-[100px]" value={form.description} onChange={(e) => set("description", e.target.value)} />
        </Field>

        <fieldset className="sm:col-span-2">
          <legend className="block text-sm text-gray-700 font-medium mb-2">Regions of operation</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {REGIONS.map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.regions.includes(r)}
                  onChange={() => toggleRegion(r)}
                  className="rounded border-gray-300 text-bali-blue focus:ring-bali-blue/40"
                />
                {r}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Company number">
          <input className="input" value={form.companyNumber} onChange={(e) => set("companyNumber", e.target.value)} />
        </Field>
        <Field label="VAT number">
          <input className="input" value={form.vatNumber} onChange={(e) => set("vatNumber", e.target.value)} />
        </Field>

        <Field label="Address" className="sm:col-span-2">
          <input className="input" value={form.address.street} onChange={(e) => setAddr("street", e.target.value)} />
        </Field>
        <Field label="Town"><input className="input" value={form.address.town} onChange={(e) => setAddr("town", e.target.value)} /></Field>
        <Field label="County"><input className="input" value={form.address.county} onChange={(e) => setAddr("county", e.target.value)} /></Field>
        <Field label="Region">
          <select className="input" value={form.address.region} onChange={(e) => setAddr("region", e.target.value)}>
            {REGIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Postcode"><input className="input" value={form.address.postcode} onChange={(e) => setAddr("postcode", e.target.value)} /></Field>
        <Field label="Country">
          <select className="input" value={form.address.country} onChange={(e) => setAddr("country", e.target.value)}>
            {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="Telephone"><input className="input" value={form.telephone} onChange={(e) => set("telephone", e.target.value)} /></Field>
        <Field label="Email"><input type="email" className="input" value={form.email} onChange={(e) => set("email", e.target.value)} /></Field>
        <Field label="Website" className="sm:col-span-2">
          <input type="url" className="input" value={form.website} onChange={(e) => set("website", e.target.value)} placeholder="https://" />
        </Field>

        <fieldset className="sm:col-span-2">
          <legend className="block text-sm text-gray-700 font-medium mb-2">Social links</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Facebook"><input className="input" value={form.socials.facebook} onChange={(e) => setSocial("facebook", e.target.value)} /></Field>
            <Field label="Twitter / X"><input className="input" value={form.socials.twitter} onChange={(e) => setSocial("twitter", e.target.value)} /></Field>
            <Field label="LinkedIn"><input className="input" value={form.socials.linkedin} onChange={(e) => setSocial("linkedin", e.target.value)} /></Field>
            <Field label="Instagram"><input className="input" value={form.socials.instagram} onChange={(e) => setSocial("instagram", e.target.value)} /></Field>
            <Field label="Other" className="sm:col-span-2"><input className="input" value={form.socials.other} onChange={(e) => setSocial("other", e.target.value)} /></Field>
          </div>
        </fieldset>

        <div className="sm:col-span-2 flex justify-end">
          <button type="submit" disabled={!canEdit} className="bg-bali-blue hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm disabled:bg-gray-300 disabled:cursor-not-allowed">Save changes</button>
        </div>
        </fieldset>
      </form>
      <FieldStyles />
    </Card>
  );
}
