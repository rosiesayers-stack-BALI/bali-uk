import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/admin/mock-db";
import { PageHeader } from "@/components/admin/PageHeader";
import { ImageField } from "@/components/admin/ImageField";
import { ParagraphsField } from "@/components/admin/ParagraphsField";
import { slugify, toIsoDate } from "@/lib/admin/util";

export const Route = createFileRoute("/admin/events/$id")({
  component: EventsEditor,
});

function EventsEditor() {
  const { id } = useParams({ from: "/admin/events/$id" });
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState({
    slug: "",
    title: "",
    date_text: "",
    venue: "",
    category: "",
    description: "",
    body_paragraphs: [] as string[],
    image_url: null as string | null,
    image_alt: "",
    booking_url: "",
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const existing = useQuery({
    queryKey: ["admin", "events", id],
    enabled: !isNew,
    queryFn: async () => {
      const { data, error } = await supabase.from("events").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (existing.data) {
      setForm({
        slug: existing.data.slug,
        title: existing.data.title,
        date_text: existing.data.date_text ?? "",
        venue: existing.data.venue ?? "",
        category: existing.data.category ?? "",
        description: existing.data.description ?? "",
        body_paragraphs: (existing.data.body_paragraphs as string[]) ?? [],
        image_url: existing.data.image_url,
        image_alt: existing.data.image_alt ?? "",
        booking_url: existing.data.booking_url ?? "",
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
      date_text: form.date_text,
      iso_date: toIsoDate(form.date_text),
      venue: form.venue,
      category: form.category,
      description: form.description,
      body_paragraphs: form.body_paragraphs,
      image_url: form.image_url,
      image_alt: form.image_alt,
      booking_url: form.booking_url || null,
      published: form.published,
    };
    const res = isNew
      ? await supabase.from("events").insert(payload).select("id").single()
      : await supabase.from("events").update(payload).eq("id", id);
    setSaving(false);
    if (res.error) return setError(res.error.message);
    navigate({ to: "/admin/events" });
  };

  if (!isNew && existing.isLoading) return <div className="p-8 text-sm text-gray-500">Loading…</div>;

  return (
    <div>
      <PageHeader
        title={isNew ? "New event" : "Edit event"}
        back={{ to: "/admin/events", label: "Back to events" }}
      />
      <form onSubmit={onSave} className="p-8 max-w-3xl space-y-5">
        <F label="Title">
          <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })} className={cls} />
        </F>
        <F label="Slug" hint={`/events/${form.slug || "your-event-slug"}`}>
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} className={cls} />
        </F>
        <div className="grid grid-cols-2 gap-4">
          <F label="Date" hint="e.g. 18 Jun 2026">
            <input value={form.date_text} onChange={(e) => setForm({ ...form, date_text: e.target.value })} className={cls} />
          </F>
          <F label="Category" hint="e.g. BALI Regional Event">
            <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={cls} />
          </F>
        </div>
        <F label="Venue">
          <input value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} className={cls} />
        </F>
        <F label="Description (summary)">
          <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={cls} />
        </F>
        <ImageField value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
        <F label="Image alt text">
          <input value={form.image_alt} onChange={(e) => setForm({ ...form, image_alt: e.target.value })} className={cls} />
        </F>
        <ParagraphsField value={form.body_paragraphs} onChange={(p) => setForm({ ...form, body_paragraphs: p })} />
        <F label="Booking link (optional)">
          <input type="url" value={form.booking_url} onChange={(e) => setForm({ ...form, booking_url: e.target.value })} className={cls} />
        </F>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          Publish
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button type="submit" disabled={saving} className="bg-bali-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-bali-blue/90 disabled:opacity-50">
            {saving ? "Saving…" : "Save"}
          </button>
          <button type="button" onClick={() => navigate({ to: "/admin/events" })} className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
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
