/**
 * CookieConsent — Nancy G's Home Bakery
 * Provides a GDPR/CCPA-compliant cookie notice banner.
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "nancyg_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Slight delay so the page loads first
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{
        background: "oklch(0.220 0.010 40 / 0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid oklch(1 0 0 / 0.12)",
        animation: "slideUp 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.850 0.008 60)" }}
          >
            🍪 This website uses cookies and analytics to improve your experience. By continuing to browse, you agree to our use of cookies in accordance with our{" "}
            <Link
              href="/privacy-policy"
              className="underline font-semibold"
              style={{ color: "oklch(0.780 0.080 15)" }}
            >
              Privacy Policy
            </Link>
            . You may decline non-essential cookies.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded-full font-medium transition-colors"
            style={{
              background: "transparent",
              border: "1px solid oklch(1 0 0 / 0.25)",
              color: "oklch(0.680 0.010 60)",
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm px-5 py-2 rounded-full font-semibold transition-colors"
            style={{
              background: "oklch(0.580 0.100 15)",
              color: "oklch(0.990 0.008 60)",
              border: "none",
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
