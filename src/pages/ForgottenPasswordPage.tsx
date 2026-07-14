import { useState, type FormEvent } from "react";
import SmartLink from "../components/SmartLink";
import AuthLayout from "../components/mybali/AuthLayout";
import { useMyBaliAuth } from "../services/auth-context";

export default function ForgottenPasswordPage() {
  const { forgotPassword } = useMyBaliAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [demoLink, setDemoLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { resetToken } = await forgotPassword(email);
      setSent(true);
      if (typeof window !== "undefined") {
        setDemoLink(`${window.location.origin}/reset-password?token=${resetToken}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgotten password"
      subtitle="Enter your email and we'll send you a link to reset your password."
    >
      {sent ? (
        <div>
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm mb-4">
            If an account exists for <strong>{email}</strong>, a reset link has been sent.
          </div>
          {demoLink && (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-lg px-4 py-3 text-xs mb-4 break-all">
              <strong>Demo mode:</strong> No email is actually sent. Use this link to reset:
              <br />
              <a href={demoLink} className="underline text-bali-blue">
                {demoLink}
              </a>
            </div>
          )}
          <SmartLink to="/login" className="text-sm text-bali-blue hover:underline">
            ← Back to sign in
          </SmartLink>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
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
            {loading ? "Sending…" : "Send reset link"}
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
