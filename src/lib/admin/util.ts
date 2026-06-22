export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function toIsoDate(text: string | null | undefined): string | null {
  if (!text) return null;
  const direct = Date.parse(text);
  if (!Number.isNaN(direct)) {
    const d = new Date(direct);
    if (d.getFullYear() > 1900) return d.toISOString().slice(0, 10);
  }
  // "12 Jun 2026"
  const m = text.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const d = new Date(`${m[2]} ${m[1]}, ${m[3]}`);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  return null;
}
