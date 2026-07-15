import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { SegmentBuilder } from "@/components/admin/SegmentBuilder";
import { createSegment, EMPTY_FILTER, type SegmentFilter } from "@/lib/admin/mock-mailing";

export const Route = createFileRoute("/admin/mailing/new")({
  head: () => ({ meta: [{ title: "New mailing list — Admin" }] }),
  component: NewMailingList,
});

function NewMailingList() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState<SegmentFilter>(EMPTY_FILTER);

  const save = async () => {
    if (!name.trim()) {
      toast.error("Give the mailing list a name.");
      return;
    }
    try {
      const seg = await createSegment({ name: name.trim(), description: description.trim(), filter });
      toast.success(`Created "${seg.name}"`);
      navigate({ to: "/admin/mailing/$id", params: { id: seg.id } });
    } catch (e) {
      toast.error((e as Error).message ?? "Failed to create mailing list");
    }
  };

  return (
    <div>
      <PageHeader
        title="New mailing list"
        subtitle="Define who's in the list. You can sync it to Mailchimp once you're happy."
        back={{ to: "/admin/mailing", label: "Back to mailing lists" }}
        actions={
          <button
            onClick={save}
            className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90"
          >
            <Save className="w-4 h-4" /> Save mailing list
          </button>
        }
      />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Awards 2026 — Designers"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-bali-blue/20 focus:border-bali-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What is this list used for?"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-bali-blue/20 focus:border-bali-blue"
            />
          </div>
        </div>

        <SegmentBuilder initial={filter} onChange={setFilter} />
      </div>
    </div>
  );
}
