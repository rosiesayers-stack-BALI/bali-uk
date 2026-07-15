import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/admin/mock-db";
import { PageHeader } from "@/components/admin/PageHeader";
import { ImageField } from "@/components/admin/ImageField";
import { ParagraphsField } from "@/components/admin/ParagraphsField";
import { slugify, toIsoDate } from "@/lib/admin/util";

const THEMES = ["Budget & Tax", "Consultations", "Environment", "Business & Trade"] as const;

export const Route = createFileRoute("/admin/policy/$id")({
  component: PolicyEditor,
});

function PolicyEditor() {
  const { id } = useParams({ from: "/admin/policy/$id" });
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    date_text: "",
    author: "",
    read_minutes: 3,
    themes: [] as string[],
    image_url: null as string | null,
    image_alt: "",
    source_url: "",
    body_paragraphs: [] as string[],
    pullquote_text: "",
    pullquote_attribution: "",
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const existing = useQuery({
    queryKey: ["admin", "policy_posts", id],
    enabled: !isNew,
    queryFn: async () => {
      const { data, error } = await supabase.from("policy_posts").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (existing.data) {
      setForm({
        slug: existing.data.slug,
        title: existing.data.title,
        description: existing.data.description ?? "",
        date_text: existing.data.date_text ?? "",
        author: existing.data.author ?? "",
        read_minutes: existing.data.read_minutes ?? 3,
        themes: (existing.data.themes as string[]) ?? [],
        image_url: existing.data.image_url,
        image_alt: existing.data.image_alt ?? "",
        source_url: existing.data.source_url ?? "",
        body_paragraphs: (existing.data.body_paragraphs as string[]) ?? [],
        pullquote_text: existing.data.pullquote_text ?? "",
        pullquote_attribution: existing.data.pullquote_attribution ?? "",
        published: existing.data.published,
      });
    }
  }, [existing.data]);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const payload = {
      slug: form.slug || slugify(form.title),
      title: form.title,
      description: form.description,
      date_text: form.date_text,
      iso_date: toIsoDate(form.date_text),
      author: form.author,
      read_minutes: form.read_minutes,
      themes: form.themes,
      image_url: form.image_url,
      image_alt: form.image_alt,
      source_url: form.source_url || null,
      body_paragraphs: form.body_paragraphs,
      pullquote_text: form.pullquote_text || null,
      pullquote_attribution: form.pullquote_attribution || null,
      published: form.published,
    };
    const res = isNew
      ? await supabase.from("policy_posts").insert(payload).select("id").single()
      : await supabase.from("policy_posts").update(payload).eq("id", id);
    setSaving(false);
    if (res.error) return setError(res.error.message);
    navigate({ to: "/admin/policy" });
  };

  if (!isNew && existing.isLoading) return <div className="p-8 text-sm text-gray-500">Loading…</div>;

  const toggleTheme = (t: string) =>
    setForm({ ...form, themes: form.themes.includes(t) ? form.themes.filter((x) => x !== t) : [...form.themes, t] });

  return (
    <div>
      <PageHeader title={isNew ? "New policy update" : "Edit policy update"} back={{ to: "/admin/policy", label: "Back to policy" }} />
      <form onSubmit={onSave} className="p-8 max-w-3xl space-y-5">
        <F label="Title">
          <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })} className={cls} />
        </F>
        <F label="Slug" hint={`/policy/${form.slug || "your-policy-slug"}`}>
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} className={cls} />
        </F>
        <div className="grid grid-cols-3 gap-4">
          <F label="Date" hint="e.g. June 12, 2026"><input value={form.date_text} onChange={(e) => setForm({ ...form, date_text: e.target.value })} className={cls} /></F>
          <F label="Author"><input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className={cls} /></F>
          <F label="Read time (mins)"><input type="number" min={1} value={form.read_minutes} onChange={(e) => setForm({ ...form, read_minutes: Number(e.target.value) || 3 })} className={cls} /></F>
        </div>
        <F label="Themes">
          <div className="flex flex-wrap gap-2">
            {THEMES.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => toggleTheme(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${form.themes.includes(t) ? "bg-bali-blue text-white border-bali-blue" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </F>
        <F label="Description (summary)">
          <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={cls} />
        </F>
        <ImageField value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
        <F label="Image alt text"><input value={form.image_alt} onChange={(e) => setForm({ ...form, image_alt: e.target.value })} className={cls} /></F>
        <ParagraphsField value={form.body_paragraphs} onChange={(p) => setForm({ ...form, body_paragraphs: p })} />
        <div className="grid grid-cols-2 gap-4">
          <F label="Pull-quote (optional)"><textarea rows={2} value={form.pullquote_text} onChange={(e) => setForm({ ...form, pullquote_text: e.target.value })} className={cls} /></F>
          <F label="Pull-quote attribution"><input value={form.pullquote_attribution} onChange={(e) => setForm({ ...form, pullquote_attribution: e.target.value })} className={cls} /></F>
        </div>
        <F label="Source URL (optional)"><input type="url" value={form.source_url} onChange={(e) => setForm({ ...form, source_url: e.target.value })} className={cls} /></F>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          Publish
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button type="submit" disabled={saving} className="bg-bali-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-bali-blue/90 disabled:opacity-50">{saving ? "Saving…" : "Save"}</button>
          <button type="button" onClick={() => navigate({ to: "/admin/policy" })} className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50">Cancel</button>
        </div>
      </form>
    </div>
  );
}

const cls = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-blue text-sm";
function F({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {hint && <span className="ml-2 text-xs font-normal text-gray-500">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
