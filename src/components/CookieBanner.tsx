import { useState, useEffect } from "react";
import Link from "./SmartLink";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("bali-cookies-accepted")) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("bali-cookies-accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-bali-slate border-t border-white/10 text-white p-4 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-gray-300 flex-1">
          This site uses cookies. By continuing to use it, you agree to our use of cookies.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Link to="/cookies" className="text-sm text-gray-400 hover:text-white underline transition-colors">
            Cookie Policy
          </Link>
          <button
            onClick={accept}
            className="bg-bali-green hover:bg-green-700 text-white text-sm px-5 py-2 rounded-lg font-semibold transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
