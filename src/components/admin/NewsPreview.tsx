// Renders a preview of a news article using the same layout as the public
// /news/$slug page. Used from the admin news editor.
import type { ReactNode } from "react";
import { X } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export type NewsPreviewData = {
  title: string;
  description?: string;
  date_text?: string;
  image_url?: string | null;
  image_alt?: string;
  body_paragraphs: string[];
  slug?: string;
};

export function NewsPreviewDialog({ data, onClose }: { data: NewsPreviewData; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${data.title || "Untitled article"}`}
      className="fixed inset-0 z-[100] bg-black/60 p-2 sm:p-6 grid place-items-stretch"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl mx-auto overflow-hidden grid grid-rows-[auto_minmax(0,1fr)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-bali-blue bg-bali-blue/10 rounded px-2 py-1">
              Live preview
            </span>
            <span className="text-sm text-gray-500 truncate">How this article will look on the public site</span>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded" aria-label="Close preview">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto">
          <PreviewArticle data={data} />
        </div>
      </div>
    </div>
  );
}

function PreviewArticle({ data }: { data: NewsPreviewData }) {
  return (
    <div className="min-h-full flex flex-col bg-white">
      <Navbar />
      <article className="flex-1">
        <header
          className="relative overflow-hidden py-16 text-white"
          style={{ background: "linear-gradient(135deg, #6D4276 0%, #21509A 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-6 relative">
            <nav className="text-sm text-blue-100/80 mb-4 flex flex-wrap items-center gap-2">
              <span>Home</span>
              <span className="opacity-60">/</span>
              <span>News</span>
              <span className="opacity-60">/</span>
              <span className="text-white truncate max-w-xs">{data.title || "Untitled article"}</span>
            </nav>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-bali-grass">BALI News</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {data.title || "Untitled article"}
            </h1>
            {data.date_text && <p className="text-blue-100 text-sm">{data.date_text}</p>}
          </div>
        </header>

        {data.image_url && (
          <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
            <img
              src={data.image_url}
              alt={data.image_alt ?? data.title}
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-black/5"
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 py-12">
          {data.description && (
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{data.description}</p>
          )}
          <div className="prose prose-lg max-w-none space-y-5 text-gray-700 leading-relaxed">
            {data.body_paragraphs.length === 0 ? (
              <PreviewEmpty>Add paragraphs of body copy to see them rendered here.</PreviewEmpty>
            ) : (
              data.body_paragraphs.map((p, i) => <p key={i}>{p}</p>)
            )}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

function PreviewEmpty({ children }: { children: ReactNode }) {
  return (
    <p className="italic text-gray-400 border-l-4 border-gray-200 pl-4">{children}</p>
  );
}
