import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Mail, Save, ShieldCheck } from "lucide-react";
import { PageHeader, Card } from "@/components/mybali/DashboardShell";
import {
  NEWSLETTERS, getOptIns, setOptIns,
  CURRENT_MEMBER_PERSON_ID,
  type NewsletterKey,
} from "@/lib/admin/mock-mailing";

export const Route = createFileRoute("/my-bali/email-preferences")({
  head: () => ({ meta: [{ title: "Email preferences — My BALI" }] }),
  component: EmailPreferences,
});

function EmailPreferences() {
  const [opts, setOpts] = useState<NewsletterKey[]>([]);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setOpts(getOptIns(CURRENT_MEMBER_PERSON_ID));
  }, []);

  const toggle = (k: NewsletterKey) => {
    setOpts((cur) => cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]);
    setDirty(true);
  };

  const save = () => {
    setOptIns(CURRENT_MEMBER_PERSON_ID, opts);
    setDirty(false);
    toast.success("Email preferences saved");
  };

  const unsubAll = () => {
    if (!confirm("Unsubscribe from all BALI emails? You can opt back in at any time.")) return;
    setOpts([]);
    setOptIns(CURRENT_MEMBER_PERSON_ID, []);
    setDirty(false);
    toast("You have been unsubscribed from all BALI emails.");
  };

  return (
    <div>
      <PageHeader
        title="Email preferences"
        subtitle="Choose which BALI emails you want to receive. You can change these at any time."
        action={
          <button
            onClick={save}
            disabled={!dirty}
            className="inline-flex items-center gap-2 bg-bali-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bali-blue/90 disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> Save preferences
          </button>
        }
      />

      <Card>
        <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-bali-blue/10 text-bali-blue flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-700">
              We only send emails you've asked for. Transactional messages
              (bookings, invoices, membership updates) are always sent regardless
              of these preferences.
            </p>
          </div>
        </div>

        <ul className="divide-y divide-gray-100">
          {NEWSLETTERS.map((n) => {
            const on = opts.includes(n.id);
            return (
              <li key={n.id} className="py-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold text-bali-slate flex items-center gap-2">
                    <Mail className="w-4 h-4 text-bali-blue" />
                    {n.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{n.description}</p>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer shrink-0 mt-1">
                  <span className="sr-only">Toggle {n.label}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wide ${on ? "text-emerald-700" : "text-gray-400"}`}>
                    {on ? "Subscribed" : "Off"}
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    onClick={() => toggle(n.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${on ? "bg-bali-green" : "bg-gray-300"}`}
                  >
                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-1"}`} />
                  </button>
                </label>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-gray-500">Prefer not to hear from us at all?</p>
          <button
            onClick={unsubAll}
            className="text-sm font-semibold text-red-600 hover:underline"
          >
            Unsubscribe from all
          </button>
        </div>
      </Card>
    </div>
  );
}
