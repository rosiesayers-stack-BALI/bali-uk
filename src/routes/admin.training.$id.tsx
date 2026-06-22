import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/admin/PageHeader";
import { ImageField } from "@/components/admin/ImageField";
import { toIsoDate } from "@/lib/admin/util";

export const Route = createFileRoute("/admin/training/$id")({
  component: TrainingEditor,
});

function TrainingEditor() {
  const { id } = useParams({ from: "/admin/training/$id" });
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState({
    title: "",
    description: "",
    date_text: "",
    venue: "",
    image_url: null as string | null,
    source_url: "",
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const existing = useQuery({
    queryKey: ["admin", "training_courses", id],
    enabled: !isNew,
    queryFn: async () => {
      const { data, error } = await supabase.from("training_courses").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (existing.data) {
      setForm({
        title: existing.data.title,
        description: existing.data.description ?? "",
        date_text: existing.data.date_text ?? "",
        venue: existing.data.venue ?? "",
        image_url: existing.data.image_url,
        source_url: existing.data.source_url ?? "",
        published: existing.data.published,
      });
    }
  }, [existing.data]);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const payload = {
      title: form.title,
      description: form.description,
      date_text: form.date_text,
      iso_date: toIsoDate(form.date_text),
      venue: form.venue,
      image_url: form.image_url,
      source_url: form.source_url || null,
      published: form.published,
    };
    const res = isNew
      ? await supabase.from("training_courses").insert(payload).select("id").single()
      : await supabase.from("training_courses").update(payload).eq("id", id);
    setSaving(false);
    if (res.error) return setError(res.error.message);
    navigate({ to: "/admin/training" });
  };

  if (!isNew && existing.isLoading) return <div className="p-8 text-sm text-gray-500">Loading…</div>;

  return (
    <div>
      <PageHeader title={isNew ? "New training course" : "Edit training course"} back={{ to: "/admin/training", label: "Back to training" }} />
      <form onSubmit={onSave} className="p-8 max-w-3xl space-y-5">
        <F label="Title"><input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={cls} /></F>
        <F label="Description"><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={cls} /></F>
        <div className="grid grid-cols-2 gap-4">
          <F label="Date" hint="e.g. 12 Jun 2026"><input value={form.date_text} onChange={(e) => setForm({ ...form, date_text: e.target.value })} className={cls} /></F>
          <F label="Venue" hint="e.g. Online on zoom"><input value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} className={cls} /></F>
        </div>
        <ImageField value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
        <F label="Booking URL"><input type="url" value={form.source_url} onChange={(e) => setForm({ ...form, source_url: e.target.value })} className={cls} /></F>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          Publish
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button type="submit" disabled={saving} className="bg-bali-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-bali-blue/90 disabled:opacity-50">{saving ? "Saving…" : "Save"}</button>
          <button type="button" onClick={() => navigate({ to: "/admin/training" })} className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50">Cancel</button>
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
