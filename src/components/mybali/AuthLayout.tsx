import type { ReactNode } from "react";
import SmartLink from "../SmartLink";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AuthLayout({ title, subtitle, children, footer }: Props) {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <div className="bg-bali-blue text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <SmartLink
            to="/"
            className="text-blue-200 text-xs hover:text-white transition-colors flex items-center gap-1"
          >
            ← Back to website
          </SmartLink>
          <SmartLink
            to="/join"
            className="hover:text-bali-grass transition-colors font-medium uppercase tracking-wide text-xs"
          >
            Not a member? Join today
          </SmartLink>
        </div>
      </div>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <SmartLink to="/">
            <img
              src="https://www.bali.org.uk/themes/bali/gfx/logo.png"
              alt="BALI"
              className="h-12 w-auto"
            />
          </SmartLink>
          <p className="text-sm text-gray-500 hidden sm:block">My BALI</p>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
            {subtitle ? <p className="text-gray-500 text-sm mb-7">{subtitle}</p> : <div className="mb-4" />}
            {children}
          </div>
          {footer ? <div className="mt-5 text-center text-xs text-gray-400">{footer}</div> : null}
        </div>
      </main>

      <footer className="bg-bali-slate text-gray-400 text-xs py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          © 2025 British Association of Landscape Industries
        </div>
      </footer>
    </div>
  );
}
