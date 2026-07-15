import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Zap, Info } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { useMailingStore, updateAutomation } from "@/lib/admin/mock-mailing";

export const Route = createFileRoute("/admin/automations/")({
  head: () => ({ meta: [{ title: "Automations — Admin" }] }),
  component: AutomationsPage,
});

function AutomationsPage() {
  const { automations } = useMailingStore();

  return (
    <div>
      <PageHeader
        title="Automations"
        subtitle="Triggered emails sent automatically as members and applications move through key events."
      />

      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 mb-6 flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-900">
          Automations are read-only for now. Toggling on/off updates the mock config but no emails are sent yet.
          {/* TODO: wire to backend scheduler + Mailchimp/transactional email provider. */}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {automations.map((a) => (
          <AutomationCard key={a.id} id={a.id} />
        ))}
      </div>
    </div>
  );
}

function AutomationCard({ id }: { id: string }) {
  const { automations } = useMailingStore();
  const a = automations.find((x) => x.id === id)!;
  const [template, setTemplate] = useState(a.template);
  const [dirty, setDirty] = useState(false);

  const toggle = () => {
    updateAutomation(a.id, { enabled: !a.enabled });
    toast(`${a.name} ${!a.enabled ? "enabled" : "paused"}`);
  };

  const saveTpl = () => {
    updateAutomation(a.id, { template });
    setDirty(false);
    toast.success("Template saved");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider font-bold text-bali-blue mb-1 flex items-center gap-1">
            <Zap className="w-3 h-3" /> {a.channel}
          </p>
          <h3 className="font-bold text-bali-slate">{a.name}</h3>
          <p className="text-xs text-gray-500 mt-1">Trigger: {a.trigger}</p>
        </div>
        <label className="inline-flex items-center gap-2 cursor-pointer shrink-0">
          <span className="sr-only">Enable {a.name}</span>
          <span className={`text-[10px] font-semibold uppercase tracking-wide ${a.enabled ? "text-emerald-700" : "text-gray-400"}`}>
            {a.enabled ? "On" : "Off"}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={a.enabled}
            onClick={toggle}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              a.enabled ? "bg-bali-green" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                a.enabled ? "translate-x-4" : "translate-x-1"
              }`}
            />
          </button>
        </label>
      </div>

      <p className="text-sm text-gray-600 mt-3">{a.description}</p>

      <div className="mt-4 flex-1 flex flex-col">
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Template (placeholder)
        </label>
        <textarea
          rows={4}
          value={template}
          onChange={(e) => { setTemplate(e.target.value); setDirty(true); }}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-bali-blue/20 focus:border-bali-blue"
        />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[11px] text-gray-500">Uses {"{{tokens}}"} for personalisation.</p>
          {dirty && (
            <button
              onClick={saveTpl}
              className="text-xs font-semibold text-bali-blue hover:underline"
            >
              Save template
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
