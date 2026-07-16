import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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
    start_time: "",
    end_time: "",
    venue: "",
    category: "",
    description: "",
    body_paragraphs: [] as string[],
    image_url: null as string | null,
    image_alt: "",
    booking_url: "",
    published: true,
    member_price: "" as string,
    non_member_price: "" as string,
    capacity: 0,
    booking_enabled: true,
    payment_card: true,
    payment_invoice: true,
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
      const d = existing.data as typeof existing.data & {
        start_time: string | null;
        end_time: string | null;
        member_price: number | null;
        non_member_price: number | null;
        capacity: number | null;
        booking_enabled: boolean | null;
        payment_options: { card?: boolean; invoice?: boolean } | null;
      };
      setForm({
        slug: d.slug,
        title: d.title,
        date_text: d.date_text ?? "",
        start_time: d.start_time ?? "",
        end_time: d.end_time ?? "",
        venue: d.venue ?? "",
        category: d.category ?? "",
        description: d.description ?? "",
        body_paragraphs: (d.body_paragraphs as string[]) ?? [],
        image_url: d.image_url,
        image_alt: d.image_alt ?? "",
        booking_url: d.booking_url ?? "",
        published: d.published,
        member_price: d.member_price != null ? String(d.member_price) : "",
        non_member_price: d.non_member_price != null ? String(d.non_member_price) : "",
        capacity: d.capacity ?? 0,
        booking_enabled: d.booking_enabled ?? true,
        payment_card: d.payment_options?.card ?? true,
        payment_invoice: d.payment_options?.invoice ?? true,
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
      start_time: form.start_time || null,
      end_time: form.end_time || null,
      venue: form.venue,
      category: form.category,
      description: form.description,
      body_paragraphs: form.body_paragraphs,
      image_url: form.image_url,
      image_alt: form.image_alt,
      booking_url: form.booking_url || null,
      published: Boolean(form.published),
      member_price: form.member_price === "" ? null : Number(form.member_price),
      non_member_price: form.non_member_price === "" ? null : Number(form.non_member_price),
      capacity: Number(form.capacity) || 0,
      booking_enabled: Boolean(form.booking_enabled),
      payment_options: { card: form.payment_card, invoice: form.payment_invoice },
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
        <div className="grid grid-cols-2 gap-4">
          <F label="Start time" hint="e.g. 09:30">
            <input value={form.start_time} onChange={(e) => setForm({ ...form, start_time: e.target.value })} className={cls} />
          </F>
          <F label="End time" hint="optional, e.g. 15:30">
            <input value={form.end_time} onChange={(e) => setForm({ ...form, end_time: e.target.value })} className={cls} />
          </F>
        </div>
        <F label="Venue">
          <input value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} className={cls} />
        </F>
        <fieldset className="border border-gray-200 rounded-lg p-4 space-y-4">
          <legend className="px-2 text-sm font-semibold text-bali-slate">Booking &amp; pricing</legend>
          <div className="grid grid-cols-2 gap-4">
            <F label="Member price (£)" hint="Leave blank for free / TBC">
              <input type="number" min="0" step="0.01" value={form.member_price} onChange={(e) => setForm({ ...form, member_price: e.target.value })} className={cls} />
            </F>
            <F label="Non-member price (£)">
              <input type="number" min="0" step="0.01" value={form.non_member_price} onChange={(e) => setForm({ ...form, non_member_price: e.target.value })} className={cls} />
            </F>
            <F label="Capacity" hint="0 = unlimited">
              <input type="number" min="0" step="1" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) || 0 })} className={cls} />
            </F>
            <label className="flex items-center gap-2 text-sm mt-6">
              <input type="checkbox" checked={form.booking_enabled} onChange={(e) => setForm({ ...form, booking_enabled: e.target.checked })} />
              Booking enabled (show "Book now")
            </label>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="font-medium text-gray-700">Payment options:</span>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={form.payment_card} onChange={(e) => setForm({ ...form, payment_card: e.target.checked })} />
              Pay by card
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={form.payment_invoice} onChange={(e) => setForm({ ...form, payment_invoice: e.target.checked })} />
              Pay by invoice
            </label>
          </div>
          {/* TODO: replace mock payment with real Stripe/GoCardless integration. */}
        </fieldset>
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
          <input
            type="checkbox"
            checked={!!form.published}
            onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
          />
          Publish (visible on the public site)
          <span
            className={`ml-2 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
              form.published ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-700"
            }`}
          >
            {form.published ? "Will be Published" : "Will be saved as Draft"}
          </span>
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
      {!isNew && <AttendeesPanel eventId={id} />}
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
