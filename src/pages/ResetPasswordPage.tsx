import { useState, type FormEvent } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import SmartLink from "../components/SmartLink";
import AuthLayout from "../components/mybali/AuthLayout";
import { useMyBaliAuth } from "../services/auth-context";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { token?: string };
  const token = typeof search?.token === "string" ? search.token : "";
  const { resetPassword } = useMyBaliAuth();

  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (pw1 !== pw2) {
      setError("Passwords do not match.");
      return;
    }
    if (!token) {
      setError("Missing reset token. Please request a new link.");
      return;
    }
    setLoading(true);
    try {
      await resetPassword(token, pw1);
      setDone(true);
      setTimeout(() => navigate({ to: "/login" }), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Reset your password" subtitle="Choose a new password for your BALI account.">
      {done ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
          Password updated. Redirecting to sign in…
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <div className="mb-5">
            <label htmlFor="pw1" className="block text-sm font-medium text-gray-700 mb-1.5">
              New password
            </label>
            <input
              id="pw1"
              type="password"
              autoComplete="new-password"
              value={pw1}
              onChange={(e) => setPw1(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
              minLength={8}
              required
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters.</p>
          </div>
          <div className="mb-5">
            <label htmlFor="pw2" className="block text-sm font-medium text-gray-700 mb-1.5">
              Confirm new password
            </label>
            <input
              id="pw2"
              type="password"
              autoComplete="new-password"
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
              minLength={8}
              required
            />
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-5">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-bali-blue hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all"
          >
            {loading ? "Updating…" : "Update password"}
          </button>
          <div className="mt-6 text-center">
            <SmartLink to="/login" className="text-sm text-bali-blue hover:underline">
              ← Back to sign in
            </SmartLink>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
