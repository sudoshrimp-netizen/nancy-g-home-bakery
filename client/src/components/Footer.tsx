/**
 * Footer — Nancy G's Home Bakery
 * Design: Soft Pastel Cottage Bakery
 */
import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 mt-auto"
      style={{ background: "oklch(0.220 0.010 40)", color: "oklch(0.850 0.008 60)" }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/manus-storage/nancy_logo_813becd1.jpg"
              alt="Nancy Gs Homebakery logo"
              className="mb-3 rounded-xl object-contain"
              style={{ height: "72px", width: "auto", filter: "brightness(0) invert(1) opacity(0.9)" }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.680 0.010 60)" }}>
              Your everyday, comfort-type Simple &amp; Sweet Desserts. Est. Galt, CA · September 2020.
            </p>
            <p className="text-xs mt-3" style={{ color: "oklch(0.580 0.080 15)" }}>
              Proud Latina Owned · Woman Owned Business
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.780 0.080 15)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "oklch(0.680 0.010 60)" }}>
              {[
                { label: "Menu & Pricing", href: "#menu" },
                { label: "About Nancy", href: "#about" },
                { label: "Allergen Notice", href: "#allergens" },
                { label: "How to Order", href: "#order" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(l.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white transition-colors bg-transparent border-none p-0 text-left"
                    style={{ color: "oklch(0.680 0.010 60)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors" style={{ color: "oklch(0.680 0.010 60)" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.780 0.080 15)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Connect
            </h4>
            <p className="text-sm mb-3" style={{ color: "oklch(0.680 0.010 60)" }}>
              All orders &amp; inquiries via Instagram DM only.
            </p>
            <a
              href="https://www.instagram.com/nancygs_homebakery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "oklch(0.780 0.080 15)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @nancygs_homebakery
            </a>
            <p className="text-xs mt-4" style={{ color: "oklch(0.500 0.010 60)" }}>
              Pick up only · Galt, CA · No shipping
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.10)", color: "oklch(0.500 0.010 60)" }}
        >
          <p>© {year} Nancy G's Home Bakery. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors" style={{ color: "oklch(0.500 0.010 60)" }}>
              Privacy Policy
            </Link>
            <span>·</span>
            <span>CFO Permit &amp; Business Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
