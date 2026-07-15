import { useState, type FormEvent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { adminLogin } from "@/services/admin-auth";
import { ShieldCheck } from "lucide-react";

// Staff-only sign-in for /admin. Uses the mock staff auth service.
// TODO: replace with real backend API call once available.
export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onLogin = async (ev: FormEvent) => {
    ev.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await adminLogin(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1D4D59 0%, #21509A 55%, #0E8B61 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-10 lg:py-12">
          <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            Staff back-office
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Admin sign in</h1>
          <p className="mt-1 text-white/80 text-sm max-w-2xl">
            This area is for BALI staff only. Sign in with your admin credentials to manage
            members, applications and content.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-md w-full mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-bali-blue/10 text-bali-blue">
              <ShieldCheck className="w-5 h-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-bold text-bali-slate">Staff sign in</h2>
              <p className="text-xs text-gray-500">Restricted to authorised administrators.</p>
            </div>
          </div>

          <form onSubmit={onLogin} className="space-y-4" noValidate>
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bali-blue hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Demo: admin@bali.org.uk / admin123
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
