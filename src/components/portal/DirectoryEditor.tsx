import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Save } from "lucide-react";
import {
  getMyDirectoryProfile,
  updateMyDirectoryProfile,
  type DirectoryProfile,
  type Socials,
} from "@/lib/portal/api";
import { ImageField } from "@/components/admin/ImageField";
import { ProjectsEditor } from "./ProjectsEditor";

const SOCIAL_FIELDS: { key: keyof Socials; label: string; placeholder: string }[] = [
  { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/company/…" },
  { key: "instagram", label: "Instagram", placeholder: "https://instagram.com/…" },
  { key: "twitter", label: "X / Twitter", placeholder: "https://x.com/…" },
  { key: "facebook", label: "Facebook", placeholder: "https://facebook.com/…" },
];

function isValidUrl(v: string) {
  if (!v) return true;
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function DirectoryEditor() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<DirectoryProfile | null>(null);
  const [form, setForm] = useState<DirectoryProfile | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    getMyDirectoryProfile()
      .then((p) => {
        if (!alive) return;
        setProfile(p);
        setForm(p);
      })
      .catch((e) => setError((e as Error).message))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Loader2 className="w-4 h-4 animate-spin" /> Loading your listing…
      </div>
    );
  }

  if (!profile || !form) {
    return (
      <div className="max-w-3xl bg-amber-50 border border-amber-200 rounded-xl p-5">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900">Your account isn't linked to a directory listing yet</p>
            <p className="text-sm text-amber-800 mt-1">
              Directory listings are tied to your BALI membership record. Please contact the BALI team to link your
              account, and this page will let you edit your listing directly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const invalidSocials = SOCIAL_FIELDS.filter((f) => !isValidUrl(form.socials[f.key] || ""));
  const invalidWebsite = !isValidUrl(form.website_url || "");
  const canSave = !invalidWebsite && invalidSocials.length === 0;

  const save = async () => {
    if (!canSave) return;
    setSaving(true);
    setError(null);
    try {
      await updateMyDirectoryProfile(form.id, {
        about: form.about,
        whos_who: form.whos_who,
        logo_url: form.logo_url,
        banner_url: form.banner_url,
        website_url: form.website_url,
        socials: form.socials,
      });
      setProfile(form);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const set = <K extends keyof DirectoryProfile>(k: K, v: DirectoryProfile[K]) =>
    setForm((f) => (f ? { ...f, [k]: v } : f));

  return (
    <div className="max-w-3xl space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Your Directory Listing</h3>
            <p className="text-xs text-gray-500 mt-0.5">Changes are published immediately to your public profile.</p>
          </div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Live</span>
        </div>

        {/* Logo */}
        <div>
          <ImageField
            label="Company logo"
            value={form.logo_url}
            onChange={(v) => set("logo_url", v)}
          />
          <p className="text-xs text-gray-500 mt-1">
            PNG or JPG, ideally square, at least 400×400px. Max 5MB.
          </p>
        </div>

        {/* Banner */}
        <div>
          <ImageField
            label="Cover / banner image"
            value={form.banner_url}
            onChange={(v) => set("banner_url", v)}
          />
          <p className="text-xs text-gray-500 mt-1">Wide 3:1 landscape image works best (e.g. 1600×533px).</p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company description</label>
          <textarea
            rows={4}
            value={form.about ?? ""}
            onChange={(e) => set("about", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue transition-all resize-none"
            placeholder="Tell prospective clients about your business…"
          />
        </div>

        {/* Who's who */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Key contacts / team</label>
          <textarea
            rows={3}
            value={form.whos_who ?? ""}
            onChange={(e) => set("whos_who", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue transition-all resize-none"
            placeholder="e.g. Jane Doe — Managing Director"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
          <input
            type="url"
            value={form.website_url ?? ""}
            onChange={(e) => set("website_url", e.target.value || null)}
            placeholder="https://www.yourcompany.co.uk"
            className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 ${
              invalidWebsite ? "border-red-400" : "border-gray-300 focus:border-bali-blue"
            }`}
          />
          {invalidWebsite && <p className="text-xs text-red-600 mt-1">Please enter a valid https:// URL.</p>}
        </div>

        {/* Socials */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Social media</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {SOCIAL_FIELDS.map((f) => {
              const val = form.socials[f.key] ?? "";
              const bad = !isValidUrl(val);
              return (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-gray-500 mb-1">{f.label}</label>
                  <input
                    type="url"
                    value={val}
                    onChange={(e) =>
                      set("socials", { ...form.socials, [f.key]: e.target.value || undefined })
                    }
                    placeholder={f.placeholder}
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 ${
                      bad ? "border-red-400" : "border-gray-300 focus:border-bali-blue"
                    }`}
                  />
                  {bad && <p className="text-xs text-red-600 mt-1">Enter a valid URL.</p>}
                </div>
              );
            })}
          </div>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          <button
            onClick={save}
            disabled={!canSave || saving}
            className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving…" : "Save & Publish"}
          </button>
          {saved && (
            <span className="text-sm text-green-700 inline-flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Saved — your listing is updated.
            </span>
          )}
        </div>
      </div>

      <ProjectsEditor profileId={profile.id} />
    </div>
  );
}
