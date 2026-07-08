import { useState } from "react";
import { Loader2, Save } from "lucide-react";
import { ImageField } from "@/components/admin/ImageField";
import {
  COURSE_CATEGORIES,
  COURSE_FORMATS,
  type ProviderCourse,
} from "@/lib/portal/courses";

export type CourseFormValues = {
  title: string;
  description: string;
  category: string;
  duration: string;
  format: string;
  location: string;
  cost: string;
  booking_url: string;
  contact_email: string;
  date_text: string;
  iso_date: string;
  image_url: string | null;
};

function fromCourse(c?: ProviderCourse | null): CourseFormValues {
  return {
    title: c?.title ?? "",
    description: c?.description ?? "",
    category: c?.category ?? "",
    duration: c?.duration ?? "",
    format: c?.format ?? "",
    location: c?.location ?? "",
    cost: c?.cost ?? "",
    booking_url: c?.booking_url ?? "",
    contact_email: c?.contact_email ?? "",
    date_text: c?.date_text ?? "",
    iso_date: c?.iso_date ?? "",
    image_url: c?.image_url ?? null,
  };
}

export function CourseForm({
  initial,
  onSubmit,
  onCancel,
  submitting,
  submitLabel,
}: {
  initial?: ProviderCourse | null;
  onSubmit: (values: CourseFormValues) => void | Promise<void>;
  onCancel?: () => void;
  submitting?: boolean;
  submitLabel: string;
}) {
  const [v, setV] = useState<CourseFormValues>(fromCourse(initial));
  const set = <K extends keyof CourseFormValues>(k: K, val: CourseFormValues[K]) =>
    setV((s) => ({ ...s, [k]: val }));

  const canSubmit = v.title.trim() && v.description.trim();
  const needsLocation = v.format === "In person" || v.format === "Hybrid";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit) void onSubmit(v);
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Course title</label>
        <input
          value={v.title}
          onChange={(e) => set("title", e.target.value)}
          required
          maxLength={200}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          placeholder="e.g. ROLO Health, Safety & Environmental Awareness — 1 day"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          rows={4}
          required
          value={v.description}
          onChange={(e) => set("description", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm resize-none"
          placeholder="Who it's for, what it covers, and what learners walk away with."
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={v.category}
            onChange={(e) => set("category", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
          >
            <option value="">— Select —</option>
            {COURSE_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
          <select
            value={v.format}
            onChange={(e) => set("format", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
          >
            <option value="">— Select —</option>
            {COURSE_FORMATS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <input
            value={v.duration}
            onChange={(e) => set("duration", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
            placeholder="e.g. 1 day, 2 half-days, 4 weeks"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cost (optional)</label>
          <input
            value={v.cost}
            onChange={(e) => set("cost", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
            placeholder="e.g. £180 + VAT"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location {needsLocation && <span className="text-gray-400">(required for in-person)</span>}
          </label>
          <input
            value={v.location}
            onChange={(e) => set("location", e.target.value)}
            required={needsLocation}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
            placeholder="e.g. Islip Training Centre, Northants"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={v.iso_date}
            onChange={(e) => {
              const iso = e.target.value;
              set("iso_date", iso);
              if (iso) {
                const d = new Date(iso);
                const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                set("date_text", `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`);
              }
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Booking / enquiry link</label>
          <input
            type="url"
            value={v.booking_url}
            onChange={(e) => set("booking_url", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
            placeholder="https://…"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact email</label>
          <input
            type="email"
            value={v.contact_email}
            onChange={(e) => set("contact_email", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm"
            placeholder="training@yourcompany.co.uk"
          />
        </div>
      </div>

      <div>
        <ImageField label="Course image / logo (optional)" value={v.image_url} onChange={(u) => set("image_url", u)} />
        <p className="text-xs text-gray-500 mt-1">Recommended 800×500px. PNG or JPG, max 5MB.</p>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          disabled={!canSubmit || submitting}
          className="bg-bali-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-60 inline-flex items-center gap-2"
        >
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {submitting ? "Saving…" : submitLabel}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
