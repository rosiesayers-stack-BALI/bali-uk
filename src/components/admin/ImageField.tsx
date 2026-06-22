import { useState } from "react";
import { Upload, X } from "lucide-react";
import { uploadContentImage } from "@/lib/admin/storage";

export function ImageField({
  value,
  onChange,
  label = "Image",
}: {
  value: string | null | undefined;
  onChange: (url: string | null) => void;
  label?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFile = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const url = await uploadContentImage(file);
      onChange(url);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {value ? (
        <div className="relative inline-block">
          <img src={value} alt="" className="w-64 h-40 object-cover rounded-lg border border-gray-200" />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-red-50"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-bali-blue hover:bg-gray-50">
          <Upload className="w-6 h-6 text-gray-400 mb-2" />
          <span className="text-sm text-gray-600">{uploading ? "Uploading…" : "Click to upload"}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void onFile(file);
            }}
          />
        </label>
      )}
      <input
        type="url"
        placeholder="Or paste image URL"
        value={value || ""}
        onChange={(e) => onChange(e.target.value || null)}
        className="mt-2 w-full max-w-md px-3 py-1.5 text-sm border border-gray-300 rounded-lg"
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
