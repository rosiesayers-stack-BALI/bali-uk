import { useState, type FormEvent } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import SmartLink from "../components/SmartLink";
import AuthLayout from "../components/mybali/AuthLayout";
import { useMyBaliAuth } from "../services/auth-context";

function safeDest(dest: unknown): string {
  if (typeof dest !== "string") return "/my-bali";
  // only allow same-origin paths
  if (!dest.startsWith("/") || dest.startsWith("//")) return "/my-bali";
  return dest;
}

export default function MyBaliLoginPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { dest?: string };
  const dest = safeDest(search?.dest);
  const { login } = useMyBaliAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate({ to: dest });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign in to My BALI"
      subtitle="Enter your credentials to access your member account."
      footer={
        <>
          Having trouble logging in?{" "}
          <SmartLink to="/contact" className="text-bali-blue hover:underline">
            Contact us
          </SmartLink>
        </>
      }
    >
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

        <div className="mb-5">
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <SmartLink to="/forgotten-password" className="text-xs text-bali-blue hover:underline">
              Forgotten password?
            </SmartLink>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm pr-16 focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
              required
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
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
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Not yet a member?{" "}
          <SmartLink to="/join" className="text-bali-blue font-semibold hover:underline">
            Join BALI today
          </SmartLink>
        </p>
        <p className="text-xs text-gray-400 mt-3">Demo: demo@bali.org.uk / password123</p>
      </div>
    </AuthLayout>
  );
}
