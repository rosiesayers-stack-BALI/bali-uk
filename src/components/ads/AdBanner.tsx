import { useEffect, useState } from "react";
import Link from "../SmartLink";
import { pickBanner, type BannerPlacement } from "../../lib/ads/slots";

type Props = {
  placement: BannerPlacement;
  seed?: number;
  variant?: "wide" | "compact";
  className?: string;
};

/**
 * Rotating advertiser banner. Mount-gated so daily rotation doesn't cause
 * SSR/CSR hydration mismatches; reserves layout height while hydrating.
 */
export default function AdBanner({ placement, seed = 0, variant = "wide", className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ad = pickBanner(placement, seed);
  if (!ad) return null;

  const accent = ad.accent ?? "#0E8B61";
  const isCompact = variant === "compact";
  const skeletonHeight = isCompact ? 96 : 168;

  if (!mounted) {
    return (
      <div
        className={`w-full rounded-2xl bg-slate-50 border border-slate-200 ${className}`}
        style={{ height: skeletonHeight }}
        aria-hidden
      />
    );
  }

  return (
    <aside
      role="complementary"
      aria-label={`Advertisement from ${ad.advertiser}`}
      className={`relative w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow ${className}`}
    >
      <div className="absolute top-3 right-3 z-10">
        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-white/90 backdrop-blur px-2 py-1 rounded-full border border-slate-200">
          Advertisement
        </span>
      </div>
      <span
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: accent }}
        aria-hidden
      />
      <Link
        to={ad.href}
        className={`flex ${isCompact ? "flex-row items-center gap-4 p-4 pl-6" : "flex-col md:flex-row items-start md:items-center gap-5 p-6 pl-8"}`}
      >
        <div className="flex-1 min-w-0">
          <p
            className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
            style={{ color: accent }}
          >
            {ad.advertiser}
          </p>
          <h3 className={`font-bold text-slate-900 ${isCompact ? "text-base" : "text-lg md:text-xl"} leading-snug mb-1`}>
            {ad.headline}
          </h3>
          {!isCompact && (
            <p className="text-sm text-slate-600 leading-relaxed mb-3 max-w-2xl">{ad.body}</p>
          )}
          <span
            className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
            style={{ color: accent }}
          >
            {ad.cta} →
          </span>
        </div>
      </Link>
    </aside>
  );
}
