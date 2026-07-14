import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { Banner, FieldStyles } from "./my-bali.profile.personal";

export const Route = createFileRoute("/my-bali/profile/whos-who")({
  component: WhosWho,
});

const WORD_LIMIT = 70;
const countWords = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

// TODO: replace with API PUT /me/whos-who
function WhosWho() {
  const [description, setDescription] = useState(
    "Alex Rivers is Managing Director of Green Horizon Landscapes Ltd, a BALI-accredited contractor working across the Midlands and South.",
  );
  const [saved, setSaved] = useState(false);
  const words = countWords(description);
  const over = words > WORD_LIMIT;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (over) return;
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Who's Who entry</h2>
      <p className="text-sm text-gray-500 mb-4">A short description for the BALI Who's Who directory, up to {WORD_LIMIT} words.</p>
      {saved && <Banner>Who's Who entry saved (mock).</Banner>}
      <form onSubmit={submit}>
        <label className="block text-sm">
          <span className="sr-only">Description</span>
          <textarea
            className={`input min-h-[160px] ${over ? "border-red-500" : ""}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-describedby="ww-count"
          />
        </label>
        <div id="ww-count" className={`mt-2 text-xs ${over ? "text-red-600" : "text-gray-500"}`} aria-live="polite">
          {words} / {WORD_LIMIT} words{over && " — over limit"}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            disabled={over}
            className="bg-bali-blue hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
          >
            Save entry
          </button>
        </div>
      </form>
      <FieldStyles />
    </Card>
  );
}
