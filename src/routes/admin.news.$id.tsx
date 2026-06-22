import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import { ImageField } from "@/components/admin/ImageField";
import { ParagraphsField } from "@/components/admin/ParagraphsField";
import { slugify, toIsoDate } from "@/lib/admin/util";

export const Route = createFileRoute("/admin/news/$id")({
  component: NewsEditor,
});

function NewsEditor() {
  const { id } = useParams({ from: "/admin/news/$id" });
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    date_text: "",
    image_url: "" as string | null,
    image_alt: "",
    body_paragraphs: [] as string[],
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const existing = useQuery({
    queryKey: ["admin", "news_articles", id],
    enabled: !isNew,
    queryFn: async () => {
      const { data, error } = await supabase.from("news_articles").select("*").eq("id", id).maybeSingle();
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
        image_url: existing.data.image_url,
        image_alt: existing.data.image_alt ?? "",
        body_paragraphs: (existing.data.body_paragraphs as string[]) ?? [],
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
      image_url: form.image_url,
      image_alt: form.image_alt,
      body_paragraphs: form.body_paragraphs,
      published: form.published,
    };
    const res = isNew
      ? await supabase.from("news_articles").insert(payload).select("id").single()
      : await supabase.from("news_articles").update(payload).eq("id", id);
    setSaving(false);
    if (res.error) {
      setError(res.error.message);
      return;
    }
    navigate({ to: "/admin/news" });
  };

  if (!isNew && existing.isLoading) return <div className="p-8 text-sm text-gray-500">Loading…</div>;

  return (
    <div>
      <PageHeader
        title={isNew ? "New news article" : "Edit news article"}
        back={{ to: "/admin/news", label: "Back to news" }}
      />
      <form onSubmit={onSave} className="p-8 max-w-3xl space-y-5">
        <Field label="Title">
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })}
            className={inputCls}
          />
        </Field>
        <Field label="Slug (URL)" hint={`/news/${form.slug || "your-article-slug"}`}>
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} className={inputCls} />
        </Field>
        <Field label="Date (display text)" hint="e.g. 12 Jun 2026">
          <input value={form.date_text} onChange={(e) => setForm({ ...form, date_text: e.target.value })} className={inputCls} />
        </Field>
        <Field label="Description (summary)">
          <textarea
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className={inputCls}
          />
        </Field>
        <ImageField value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} label="Hero image" />
        <Field label="Image alt text">
          <input value={form.image_alt} onChange={(e) => setForm({ ...form, image_alt: e.target.value })} className={inputCls} />
        </Field>
        <ParagraphsField value={form.body_paragraphs} onChange={(p) => setForm({ ...form, body_paragraphs: p })} />
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
          Publish (visible on the public site)
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-bali-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-bali-blue/90 disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => navigate({ to: "/admin/news" })}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const inputCls = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-blue text-sm";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
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
