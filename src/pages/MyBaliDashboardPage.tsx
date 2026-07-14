import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import SmartLink from "../components/SmartLink";
import { useMyBaliAuth } from "../services/auth-context";

export default function MyBaliDashboardPage() {
  const navigate = useNavigate();
  const { user, logout, changePassword } = useMyBaliAuth();

  const [showChange, setShowChange] = useState(false);
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const doLogout = async () => {
    await logout();
    navigate({ to: "/login" });
  };

  const doChange = async (e: FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      await changePassword(oldPw, newPw);
      setMsg({ type: "ok", text: "Password updated." });
      setOldPw("");
      setNewPw("");
      setShowChange(false);
    } catch (err) {
      setMsg({ type: "err", text: err instanceof Error ? err.message : "Failed." });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null; // guard handles redirect

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <SmartLink to="/">
            <img
              src="https://www.bali.org.uk/themes/bali/gfx/logo.png"
              alt="BALI"
              className="h-12 w-auto"
            />
          </SmartLink>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden sm:inline">
              Signed in as <strong className="text-gray-800">{user.email}</strong>
            </span>
            <button
              onClick={doLogout}
              className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-6 lg:p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}</h1>
          <p className="text-gray-500 mt-1">Your My BALI dashboard.</p>
        </div>

        {msg && (
          <div
            className={`rounded-lg px-4 py-3 text-sm mb-6 ${
              msg.type === "ok"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-700"
            }`}
          >
            {msg.text}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Account</h2>
            <dl className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-500">Name</dt>
                <dd className="font-medium text-gray-900">{user.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Email</dt>
                <dd className="font-medium text-gray-900">{user.email}</dd>
              </div>
            </dl>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>
              <button
                onClick={() => setShowChange((s) => !s)}
                className="text-sm text-bali-blue hover:underline"
              >
                {showChange ? "Cancel" : "Change password"}
              </button>
            </div>
            {showChange ? (
              <form onSubmit={doChange} className="space-y-3">
                <input
                  type="password"
                  placeholder="Current password"
                  value={oldPw}
                  onChange={(e) => setOldPw(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
                  required
                />
                <input
                  type="password"
                  placeholder="New password (min 8 chars)"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bali-blue/25 focus:border-bali-blue"
                  minLength={8}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-bali-blue hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm"
                >
                  {loading ? "Updating…" : "Update password"}
                </button>
              </form>
            ) : (
              <p className="text-sm text-gray-500">Keep your account secure by updating your password regularly.</p>
            )}
          </section>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          This is a frontend-only demo. All auth actions are mocked until our backend is connected.
        </p>
      </main>
    </div>
  );
}
