export function ParagraphsField({
  value,
  onChange,
  label = "Body",
}: {
  value: string[];
  onChange: (paragraphs: string[]) => void;
  label?: string;
}) {
  const text = value.join("\n\n");
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        <span className="ml-2 text-xs font-normal text-gray-500">
          Separate paragraphs with a blank line
        </span>
      </label>
      <textarea
        value={text}
        rows={14}
        onChange={(e) => {
          const paras = e.target.value.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
          onChange(paras);
        }}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-blue font-sans text-sm leading-relaxed"
      />
    </div>
  );
}
