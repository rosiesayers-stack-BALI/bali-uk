import { useMemo, useState } from "react";
import { Users } from "lucide-react";
import { useCrm, ALL_REGIONS } from "@/lib/admin/mock-crm";
import type { Region, MembershipStatus } from "@/lib/admin/mock-crm";
import { APPLICATION_TYPES, type ApplicationTypeId } from "@/lib/membership-types";
import {
  ALL_PERSON_TYPES, ALL_STATUSES, NEWSLETTERS,
  countMembers,
  type NewsletterKey, type PersonType, type SegmentFilter,
} from "@/lib/admin/mock-mailing";

function Chip({
  on, onClick, children,
}: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
        on
          ? "bg-bali-blue text-white border-bali-blue"
          : "bg-white text-gray-700 border-gray-300 hover:border-bali-blue hover:text-bali-blue"
      }`}
    >
      {children}
    </button>
  );
}

function toggle<T>(arr: T[], v: T): T[] {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}

export function SegmentBuilder({
  initial,
  onChange,
}: {
  initial: SegmentFilter;
  onChange: (filter: SegmentFilter) => void;
}) {
  const crm = useCrm();
  const [filter, setFilter] = useState<SegmentFilter>(initial);

  const update = (patch: Partial<SegmentFilter>) => {
    const next = { ...filter, ...patch };
    setFilter(next);
    onChange(next);
  };

  const count = useMemo(() => countMembers(crm.people, filter), [crm.people, filter]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide font-semibold text-emerald-700">Live member count</p>
          <p className="text-2xl font-bold text-emerald-900">{count.toLocaleString()}</p>
        </div>
        <p className="text-xs text-emerald-800/80 ml-auto max-w-xs">
          Updates as you change filters. Members must match every group (AND) but any option within a group (OR).
        </p>
      </div>

      <Group title="Membership category" hint="One of the 13 official BALI categories.">
        {APPLICATION_TYPES.map((t) => (
          <Chip
            key={t.id}
            on={filter.categories.includes(t.id)}
            onClick={() => update({ categories: toggle<ApplicationTypeId>(filter.categories, t.id) })}
          >
            {t.short}
          </Chip>
        ))}
      </Group>

      <Group title="Region / area">
        {ALL_REGIONS.map((r) => (
          <Chip
            key={r}
            on={filter.regions.includes(r)}
            onClick={() => update({ regions: toggle<Region>(filter.regions, r) })}
          >
            {r}
          </Chip>
        ))}
      </Group>

      <Group title="Membership status">
        {ALL_STATUSES.map((s) => (
          <Chip
            key={s}
            on={filter.statuses.includes(s)}
            onClick={() => update({ statuses: toggle<MembershipStatus>(filter.statuses, s) })}
          >
            {s}
          </Chip>
        ))}
      </Group>

      <Group title="Person type">
        {ALL_PERSON_TYPES.map((pt) => (
          <Chip
            key={pt}
            on={filter.personTypes.includes(pt)}
            onClick={() => update({ personTypes: toggle<PersonType>(filter.personTypes, pt) })}
          >
            {pt}
          </Chip>
        ))}
      </Group>

      <Group title="Newsletter opt-in" hint="Person must be opted in to every selected newsletter.">
        {NEWSLETTERS.map((n) => (
          <Chip
            key={n.id}
            on={filter.requiredOptIns.includes(n.id)}
            onClick={() => update({ requiredOptIns: toggle<NewsletterKey>(filter.requiredOptIns, n.id) })}
          >
            {n.label}
          </Chip>
        ))}
      </Group>
    </div>
  );
}

function Group({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-sm font-semibold text-bali-slate">{title}</h3>
        {hint && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
