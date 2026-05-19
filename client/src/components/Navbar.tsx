/**
 * Navbar — Nancy G's Home Bakery
 * Design: Soft Pastel Cottage Bakery
 * Cross-page navigation: anchor links navigate to "/" first when on sub-routes,
 * then scroll to the target section after the page mounts.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Allergens", href: "#allergens" },
  { label: "Order", href: "#order" },
  { label: "Privacy", href: "/privacy-policy", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After navigating back to "/", scroll to the pending anchor
  useEffect(() => {
    const pending = sessionStorage.getItem("scrollTo");
    if (pending && location === "/") {
      sessionStorage.removeItem("scrollTo");
      // Small delay to let the page render
      setTimeout(() => {
        const el = document.querySelector(pending);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [location]);

  const handleAnchor = (href: string) => {
    setOpen(false);
    if (!href.startsWith("#")) return;

    if (location === "/") {
      // Already on home — just scroll
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On another page — go home first, then scroll
      sessionStorage.setItem("scrollTo", href);
      navigate("/");
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.990 0.008 60 / 0.96)"
          : "oklch(0.990 0.008 60 / 0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px oklch(0.580 0.100 15 / 0.10)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.900 0.020 30 / 0.5)" : "none",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <img
            src="/manus-storage/nancy_logo_813becd1.jpg"
            alt="Nancy Gs Homebakery logo"
            className="cursor-pointer object-contain"
            style={{ height: "52px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "oklch(0.500 0.015 40)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.580 0.100 15)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.500 0.015 40)")}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => handleAnchor(l.href)}
                className="text-sm font-medium transition-colors duration-150 bg-transparent border-none p-0"
                style={{ color: "oklch(0.500 0.015 40)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.580 0.100 15)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.500 0.015 40)")}
              >
                {l.label}
              </button>
            )
          )}
          <a
            href="https://www.instagram.com/nancygs_homebakery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rose"
            style={{ padding: "0.45rem 1.1rem", fontSize: "0.8rem" }}
          >
            Order Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 rounded transition-all duration-200"
              style={{ background: "oklch(0.580 0.100 15)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "oklch(0.990 0.008 60 / 0.98)", borderTop: "1px solid oklch(0.900 0.020 30)" }}
        >
          {NAV_LINKS.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
                style={{ color: "oklch(0.350 0.012 40)" }}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => handleAnchor(l.href)}
                className="text-base font-medium text-left bg-transparent border-none p-0"
                style={{ color: "oklch(0.350 0.012 40)" }}
              >
                {l.label}
              </button>
            )
          )}
          <a
            href="https://www.instagram.com/nancygs_homebakery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rose text-center"
          >
            Order on Instagram
          </a>
        </div>
      )}
    </header>
  );
}
