import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { unlockSite } from "@/lib/site-gate.functions";

const GATE_STORAGE_KEY = "bali_site_gate_unlocked";

export function SiteGate({ onUnlock }: { onUnlock: () => void }) {
  const unlock = useServerFn(unlockSite);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await unlock({ data: { password } });
      if (result.ok) {
        try { localStorage.setItem(GATE_STORAGE_KEY, "1"); } catch {}
        onUnlock();
      } else {
        setError(result.error ?? "Incorrect password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-foreground">British Association of Landscape Industries</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This site is currently private. Please enter the access password to continue.
        </p>
        <label className="mt-6 block text-sm font-medium text-foreground" htmlFor="site-password">
          Password
        </label>
        <input
          id="site-password"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "Checking…" : "Enter site"}
        </button>
      </form>
    </div>
  );
}
