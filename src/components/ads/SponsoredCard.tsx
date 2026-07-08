import { useEffect, useState } from "react";
import Link from "../SmartLink";
import { pickSponsored, type SponsoredPlacement } from "../../lib/ads/slots";

type Props = {
  placement: SponsoredPlacement;
  seed?: number;
  className?: string;
};

/**
 * A sponsored content card designed to sit inline within a news/events/directory
 * grid. Matches the surrounding card size so it feels integrated, but is clearly
 * badged "Sponsored" for transparency.
 */
export default function SponsoredCard({ placement, seed = 0, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ad = pickSponsored(placement, seed);
  if (!mounted || !ad) {
    return <div className={`rounded-2xl bg-slate-50 border border-slate-200 h-64 ${className}`} aria-hidden />;
  }

  return (
    <Link
      to={ad.href}
      className={`group relative bg-white rounded-2xl border-2 border-amber-200 overflow-hidden hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col ${className}`}
      aria-label={`Sponsored content by ${ad.advertiser}`}
    >
      <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
        ★ Sponsored
      </span>
      {ad.image ? (
        <img src={ad.image} alt="" loading="lazy" className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-44 bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center">
          <span className="text-amber-700/70 font-bold text-2xl tracking-tight">{ad.advertiser}</span>
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-2">
          Presented by {ad.advertiser}
        </p>
        <h3 className="font-bold text-slate-900 leading-snug group-hover:text-amber-800 transition-colors line-clamp-3">
          {ad.title}
        </h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-3 flex-1">{ad.description}</p>
        {ad.cta && (
          <span className="mt-4 text-amber-700 text-sm font-bold group-hover:underline">
            {ad.cta} →
          </span>
        )}
      </div>
    </Link>
  );
}
