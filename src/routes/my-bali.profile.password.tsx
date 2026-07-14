import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Card } from "../components/mybali/DashboardShell";
import { FieldStyles } from "./my-bali.profile.personal";
import { useMyBaliAuth } from "../services/auth-context";

export const Route = createFileRoute("/my-bali/profile/password")({
  component: ChangePassword,
});

function ChangePassword() {
  const { changePassword } = useMyBaliAuth();
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (newPw !== confirm) return setMsg({ type: "err", text: "New passwords do not match." });
    setLoading(true);
    try {
      await changePassword(oldPw, newPw);
      setMsg({ type: "ok", text: "Password updated." });
      setOldPw(""); setNewPw(""); setConfirm("");
    } catch (err) {
      setMsg({ type: "err", text: err instanceof Error ? err.message : "Failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-lg">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Change password</h2>
      {msg && (
        <div className={`mb-4 rounded-lg px-4 py-2 text-sm border ${msg.type === "ok" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-700"}`}>
          {msg.text}
        </div>
      )}
      <form onSubmit={submit} className="space-y-3">
        <label className="block text-sm">
          <span className="block text-gray-700 font-medium mb-1">Current password</span>
          <input type="password" className="input" value={oldPw} onChange={(e) => setOldPw(e.target.value)} required />
        </label>
        <label className="block text-sm">
          <span className="block text-gray-700 font-medium mb-1">New password (min 8 chars)</span>
          <input type="password" className="input" value={newPw} onChange={(e) => setNewPw(e.target.value)} minLength={8} required />
        </label>
        <label className="block text-sm">
          <span className="block text-gray-700 font-medium mb-1">Confirm new password</span>
          <input type="password" className="input" value={confirm} onChange={(e) => setConfirm(e.target.value)} minLength={8} required />
        </label>
        <button disabled={loading} className="w-full bg-bali-blue hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm">
          {loading ? "Updating…" : "Update password"}
        </button>
      </form>
      <FieldStyles />
    </Card>
  );
}
