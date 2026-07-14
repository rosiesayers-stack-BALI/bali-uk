import type { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CookieBanner from "../CookieBanner";
import SmartLink from "../SmartLink";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AuthLayout({ title, subtitle, children, footer }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero band */}
      <section className="bg-gradient-to-br from-bali-slate via-bali-blue to-bali-green text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
          <p className="text-bali-grass text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            My BALI · Member area
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-white/80 text-sm max-w-2xl">{subtitle}</p>}
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
          {/* Form card */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
              {children}
            </div>
            {footer && <div className="mt-4 text-center text-xs text-gray-500">{footer}</div>}
          </div>

          {/* Marketing panel */}
          <aside className="hidden lg:block bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-bali-slate mb-3">Why My BALI?</h2>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Your member portal gives you one place to manage your BALI profile,
              access member-only resources, submit news, and track your directory
              performance.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Manage your directory listing & Who's Who",
                "Access members-only technical documents",
                "Track profile statistics & event bookings",
                "Submit news and events to BALI",
              ].map((line) => (
                <li key={line} className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bali-grass shrink-0" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-600">
              Not yet a member?{" "}
              <SmartLink to="/join" className="text-bali-blue font-semibold hover:underline">
                Join BALI today →
              </SmartLink>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
