// Small display helpers for the 2026-27 membership fee schedule.
// Renders the annual/application fee for a given membership category and,
// where relevant, all bands / variants / extras.

import {
  getCategoryFees,
  getHeadlineFee,
  formatFee,
  FEE_SCHEDULE_YEAR,
  FEE_SCHEDULE_PERIOD,
  FEE_SCHEDULE_NOTES,
} from "@/lib/membership-fees";
import type { ApplicationTypeId } from "@/lib/membership-types";
import { getApplicationType } from "@/lib/membership-types";

// Inline one-line fee summary — good for list rows / detail headers.
export function FeeInline({ id }: { id: ApplicationTypeId | null | undefined }) {
  const h = getHeadlineFee(id);
  if (!h) return <span className="text-xs text-gray-400">—</span>;
  const parts: string[] = [];
  if (h.annualFee != null) parts.push(`${formatFee(h.annualFee)}/yr`);
  if (h.applicationFee != null && h.applicationFee > 0) parts.push(`app ${formatFee(h.applicationFee)}`);
  const suffix = h.bandLabel ? ` · from ${h.bandLabel}` : h.variantLabel ? ` · ${h.variantLabel}` : "";
  return (
    <span className="text-xs text-gray-700">
      {parts.join(" · ") || "See schedule"}{suffix}
      <span className="text-gray-400"> (+ VAT)</span>
    </span>
  );
}

// Full fee card for member/applicant detail pages.
export function FeeCard({ id }: { id: ApplicationTypeId | null | undefined }) {
  const cat = getCategoryFees(id);
  const type = getApplicationType(id ?? undefined);
  if (!cat || !type) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-bold text-gray-900 mb-2">Membership fee</h2>
        <p className="text-sm text-gray-500">No fee configured for this category.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h2 className="font-bold text-gray-900">Membership fee</h2>
          <p className="text-xs text-gray-500">{type.label} · {FEE_SCHEDULE_YEAR}</p>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">
          {FEE_SCHEDULE_YEAR}
        </span>
      </div>

      {cat.applicationFee != null || cat.annualFee != null ? (
        <dl className="grid grid-cols-2 gap-3 text-sm mb-3">
          {cat.applicationFee != null && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Application</dt>
              <dd className="text-gray-900 font-semibold">{formatFee(cat.applicationFee)}</dd>
            </div>
          )}
          {cat.annualFee != null && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Annual</dt>
              <dd className="text-gray-900 font-semibold">{formatFee(cat.annualFee)}</dd>
            </div>
          )}
        </dl>
      ) : null}

      {cat.bands && cat.bands.length > 0 && (
        <div className="mt-2">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Turnover bands</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="py-1 pr-2 font-semibold">Band</th>
                  <th className="py-1 pr-2 font-semibold">Turnover</th>
                  <th className="py-1 pr-2 font-semibold">Application</th>
                  <th className="py-1 font-semibold">Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cat.bands.map((b) => (
                  <tr key={b.code}>
                    <td className="py-1 pr-2 font-semibold text-gray-900">{b.code}</td>
                    <td className="py-1 pr-2 text-gray-700">{b.label}</td>
                    <td className="py-1 pr-2 text-gray-700">{formatFee(b.applicationFee)}</td>
                    <td className="py-1 text-gray-700">{formatFee(b.annualFee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {cat.variants && cat.variants.length > 0 && (
        <div className="mt-3">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Variants</p>
          <ul className="space-y-1.5">
            {cat.variants.map((v) => (
              <li key={v.id} className="text-xs text-gray-700 flex flex-wrap items-baseline justify-between gap-2 border-t border-gray-100 pt-1.5 first:border-t-0 first:pt-0">
                <span className="text-gray-900">{v.label}</span>
                <span className="font-semibold text-gray-900 whitespace-nowrap">
                  {v.applicationFee != null && `${formatFee(v.applicationFee)} app`}
                  {v.applicationFee != null && v.annualFee != null && " · "}
                  {v.annualFee != null && `${formatFee(v.annualFee)}/yr`}
                </span>
                {v.notes && <span className="basis-full text-gray-500 italic">{v.notes}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {cat.extras && cat.extras.length > 0 && (
        <div className="mt-3">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Additional fees</p>
          <ul className="space-y-1 text-xs">
            {cat.extras.map((e) => (
              <li key={e.label} className="flex items-baseline justify-between gap-2">
                <span className="text-gray-700">{e.label}</span>
                <span className="font-semibold text-gray-900 whitespace-nowrap">{formatFee(e.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cat.notes && <p className="text-[11px] text-gray-500 italic mt-3">{cat.notes}</p>}
      <p className="text-[11px] text-gray-400 mt-2">
        {FEE_SCHEDULE_PERIOD}. {FEE_SCHEDULE_NOTES}
      </p>
      <p className="text-[10px] text-gray-400 italic mt-1">
        TODO: source fees from the backend so BALI can edit them without a deploy.
      </p>
    </div>
  );
}
