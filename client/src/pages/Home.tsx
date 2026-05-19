/**
 * Nancy G's Home Bakery — Home Page
 * Design: Soft Pastel Cottage Bakery
 * Colors: Warm white bg, dusty rose primary, sage green secondary, charcoal text
 * Fonts: Cormorant Garamond (headings) + DM Sans (body)
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

// ── Image asset URLs (uploaded from PDF) ──────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663674481040/9eL7H5TM4FzmcfTpCWfUjK/hero_banner-5UQQDQaSL3dfNmnUtDmYH9.webp";
const BIO_BG   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663674481040/9eL7H5TM4FzmcfTpCWfUjK/bio_bg-k3gZSEsUifWAGP7zJr53hG.webp";
const NANCY_PHOTO = "/manus-storage/extracted_p1_03_364f7100.jpeg";

// Product images
const IMGS = {
  chocChip:        "/manus-storage/extracted_p1_02_b8e98d94.jpeg",
  pineappleMini:   "/manus-storage/extracted_p2_04_71123669.jpeg",
  pineappleTray:   "/manus-storage/extracted_p2_05_9369cdc5.jpeg",
  snowball:        "/manus-storage/extracted_p2_06_5bdb5bcc.jpeg",
  oatmeal:         "/manus-storage/extracted_p2_07_1f680b18.jpeg",
  snickerdoodle:   "/manus-storage/extracted_p2_08_3a32ca48.jpeg",
  shortbread:      "/manus-storage/extracted_p2_09_dd766bcb.jpeg",
  reeses:          "/manus-storage/extracted_p2_10_cbca699e.jpeg",
  lemonCake:       "/manus-storage/extracted_p2_11_607e8dcd.jpeg",
  brownies:        "/manus-storage/extracted_p2_12_3fe62637.jpeg",
  cortadillo:      "/manus-storage/extracted_p3_13_6acde50d.jpeg",
  conchita:        "/manus-storage/extracted_p3_14_9a43ba23.jpeg",
  bananaBread:     "/manus-storage/extracted_p3_15_6b51d341.jpeg",
  lactation:       "/manus-storage/extracted_p3_16_ec763fb6.jpeg",
  churroRegular:   "/manus-storage/extracted_p3_17_7bb237d5.jpeg",
  churroPumpkin:   "/manus-storage/extracted_p3_18_12a4ce4d.jpeg",
  sugarCookies:    "/manus-storage/extracted_p3_19_9a6675d1.jpeg",
};

// ── Menu data ─────────────────────────────────────────────────────────────────
const MENU = [
  {
    category: "Cookies",
    items: [
      { name: "Gourmet Chocolate Chip Cookies", price: "$16.50 / dozen", img: IMGS.chocChip, note: "" },
      { name: "Snowball Cookies", price: "$15 / dozen", img: IMGS.snowball, note: "" },
      { name: "Oatmeal Cookies", price: "$17 / dozen", img: IMGS.oatmeal, note: "" },
      { name: "Snickerdoodles", price: "$16.50 / dozen", img: IMGS.snickerdoodle, note: "" },
      { name: "Shortbread Cookies w/ Raspberry", price: "$16 / dozen", img: IMGS.shortbread, note: "" },
      { name: "Reese's Cookie Bites", price: "$16 / dozen", img: IMGS.reeses, note: "" },
      { name: "Lactation Cookies", price: "$20 / dozen", img: IMGS.lactation, note: "" },
    ],
  },
  {
    category: "Pan Dulce & Cupcakes",
    items: [
      { name: "Cortadillo Pan Dulce", price: "$2.50 each (min. 4)", img: IMGS.cortadillo, note: "" },
      { name: "Conchita Cupcakes", price: "$30 / dozen ($2.50 each)", img: IMGS.conchita, note: "" },
    ],
  },
  {
    category: "Cakes & Breads",
    items: [
      { name: "9\" Lemon Olive Oil Cake", price: "$30", img: IMGS.lemonCake, note: "" },
      { name: "6\" Lemon Olive Oil Cake", price: "$18", img: IMGS.lemonCake, note: "" },
      { name: "Banana Nut / Pumpkin Bread", price: "$8.50 mini loaf · $17 large loaf", img: IMGS.bananaBread, note: "" },
      { name: "Custom Cakes", price: "Inquire via DM", img: IMGS.lemonCake, note: "Flavors: Vanilla, Chocolate, Red Velvet, Funfetti, Tres Leches, Lemon Blueberry & Carrot. Sizes: 6\", 8\" & 10\" only. Simple & single tiered." },
    ],
  },
  {
    category: "Specialty Desserts",
    items: [
      { name: "Dreamy Pineapple Mini Desserts", price: "$30 / dozen · 8×8 tray $22", img: IMGS.pineappleMini, note: "" },
      { name: "Cacao Brownies", price: "$6 each (4×4) · 8×8 tray from $22", img: IMGS.brownies, note: "Flavors: Plain ($22 tray), Mint, Oreo, M&M's & Reese's ($25 tray)" },
      { name: "Churro Cheesecake — Regular", price: "$40 (32 bite-size pieces)", img: IMGS.churroRegular, note: "Can do ½ orders. Great for dessert tables." },
      { name: "Churro Cheesecake — Pumpkin", price: "$45 (32 bite-size pieces)", img: IMGS.churroPumpkin, note: "Can do ½ orders. Great for dessert tables." },
      { name: "Sugar Cookies", price: "From $55 / dozen · Mini from $45", img: IMGS.sugarCookies, note: "Flavors: Vanilla/Almond & Funfetti/Snickerdoodle. Character cookies available — price discussed at order. Copyright restrictions apply." },
    ],
  },
];

// Logo
const LOGO = "/manus-storage/nancy_logo_813becd1.jpg";

// ── Fade-up hook ──────────────────────────────────────────────────────────────
function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Home() {
  useFadeUp();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.990 0.008 60)" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
        style={{ background: "oklch(0.990 0.008 60)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})`, opacity: 0.45 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.990 0.008 60 / 0.55) 0%, oklch(0.990 0.008 60 / 0.80) 70%, oklch(0.990 0.008 60) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Logo in hero — shown in a rounded card matching the hero palette */}
          <div className="fade-up flex justify-center mb-6">
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 4px 24px oklch(0.580 0.100 15 / 0.18)",
                border: "2px solid oklch(0.900 0.020 30 / 0.6)",
                display: "inline-block",
              }}
            >
              <img
                src={LOGO}
                alt="Nancy Gs Homebakery"
                className="object-contain block"
                style={{ height: "130px", width: "130px" }}
              />
            </div>
          </div>
          <p
            className="fade-up text-sm font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "oklch(0.580 0.100 15)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Est. Galt, CA · September 2020
          </p>
          <h1
            className="fade-up text-6xl md:text-8xl font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.220 0.010 40)",
              transitionDelay: "60ms",
            }}
          >
            Nancy G's<br />
            <em>Home Bakery</em>
          </h1>
          <p
            className="fade-up text-xl md:text-2xl mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.380 0.020 40)",
              fontStyle: "italic",
              transitionDelay: "120ms",
            }}
          >
            Your everyday, comfort-type Simple &amp; Sweet Desserts
          </p>
          <p
            className="fade-up text-base mb-8"
            style={{ color: "oklch(0.500 0.015 40)", transitionDelay: "160ms" }}
          >
            Made to order always &nbsp;·&nbsp; Pick up only &nbsp;·&nbsp; CFO &amp; Business Licensed
          </p>

          {/* Availability badge */}
          <div
            className="fade-up inline-block mb-8 px-5 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.975 0.012 20)",
              color: "oklch(0.580 0.100 15)",
              border: "1.5px solid oklch(0.580 0.100 15 / 0.4)",
              transitionDelay: "200ms",
            }}
          >
            🗓 Booked thru July 2026 · August &amp; September availability now open!
          </div>

          <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: "240ms" }}>
            <a
              href="https://www.instagram.com/nancygs_homebakery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rose"
            >
              Order on Instagram
            </a>
            <a href="#menu" className="btn-sage">
              View Menu
            </a>
          </div>

          <p
            className="fade-up mt-6 text-xs"
            style={{ color: "oklch(0.580 0.100 15)", transitionDelay: "280ms" }}
          >
            Proud Latina Owned &nbsp;·&nbsp; Woman Owned Business
          </p>
        </div>
      </section>

      {/* ── ABOUT / BIO ── */}
      <section
        id="about"
        className="py-24 relative overflow-hidden"
        style={{ background: "oklch(0.985 0.010 50)" }}
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="fade-up ornament-divider mb-12 max-w-xs mx-auto">
            <span>🤍</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="fade-up relative" style={{ transitionDelay: "60ms" }}>
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{ background: "oklch(0.580 0.100 15 / 0.12)" }}
              />
              <img
                src={NANCY_PHOTO}
                alt="Nancy, the baker behind Nancy G's Home Bakery"
                className="relative rounded-3xl w-full object-cover shadow-xl"
                style={{ maxHeight: "520px", objectPosition: "top" }}
              />
            </div>

            {/* Bio text */}
            <div className="fade-up" style={{ transitionDelay: "120ms" }}>
              <p
                className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "oklch(0.580 0.100 15)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Bio on the Baker
              </p>
              <h2
                className="text-5xl font-bold mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
              >
                Hi! My name is Nancy.
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "oklch(0.350 0.012 40)" }}
              >
                <p>
                  I have many hobbies &amp; baking has definitely been one of them for many years. My idea was to bake comfort-like desserts that you don't really find at the stores. And even if you did, my desserts are always <strong>fresh &amp; made to order.</strong>
                </p>
                <p>
                  I have a pretty busy life at home being a mom of 4, wife of 1 &amp; I have 4 fur babies (2 dogs, 1 cat, &amp; 1 bunny). My current life schedule is pretty tight, therefore I can only bake a couple days out of the week. I do limit the amount of orders I accept, for the sake of my sanity. I am a one-woman show when it comes to baking — I'm a bit of a control freak so I prefer it that way.
                </p>
                <p>
                  I do have my <strong>CFO baking permit &amp; business license.</strong> My baking style is simple more than anything. I am still learning through trial and error. I am humbly grateful &amp; love being able to be a part of your special events through my desserts!
                </p>
                <p>
                  I post flash sales to my story &amp; you can claim/order through DM's. I vary my items every week &amp; I take into consideration what I see my customers want. <strong>NO SHIPPING.</strong>
                </p>
                <p>
                  One thing you'll notice about my page is that I love to support small businesses. I believe that we as a community need to have each other's back. It's not just me me me…it's Us. <em>Community over competition</em> is how it should be.
                </p>
                <p>
                  Thank you for your interest in my small growing business! I appreciate everyone that has shown love &amp; support! The way you all continue to believe in me when I doubt myself really warms my heart.
                </p>
                <p>
                  If you have any questions please DM me on my Instagram and don't forget to follow!{" "}
                  <a
                    href="https://www.instagram.com/nancygs_homebakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "oklch(0.580 0.100 15)", fontWeight: 600 }}
                  >
                    @nancygs_homebakery
                  </a>
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {["CFO Permit", "Business Licensed", "Latina Owned", "Woman Owned", "Made to Order"].map((b) => (
                  <span
                    key={b}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "oklch(0.975 0.012 20)",
                      color: "oklch(0.580 0.100 15)",
                      border: "1px solid oklch(0.580 0.100 15 / 0.35)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24" style={{ background: "oklch(0.990 0.008 60)" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="fade-up text-center mb-4">
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "oklch(0.580 0.100 15)" }}
            >
              Freshly Baked &amp; Made to Order
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
            >
              Dessert &amp; Pricing
            </h2>
          </div>

          <div
            className="fade-up text-center max-w-2xl mx-auto mb-12 text-sm leading-relaxed"
            style={{ color: "oklch(0.500 0.015 40)", transitionDelay: "60ms" }}
          >
            Keep in mind that you are buying from a Home Bakery. These prices reflect my time, my effort, my energy, product prices &amp; recent inflation. All items are always freshly baked and made to order.{" "}
            <em>Prices are subject to change.</em>
          </div>

          {MENU.map((cat, ci) => (
            <div key={cat.category} className="mb-16">
              <div
                className="fade-up ornament-divider mb-8"
                style={{ transitionDelay: `${ci * 40}ms` }}
              >
                <span
                  className="text-xl font-bold px-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
                >
                  {cat.category}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.items.map((item, ii) => (
                  <div
                    key={item.name}
                    className="product-card fade-up rounded-2xl overflow-hidden shadow-md"
                    style={{
                      background: "oklch(0.975 0.012 20)",
                      transitionDelay: `${ii * 50}ms`,
                    }}
                  >
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        style={{ transition: "transform 0.4s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-bold text-lg leading-tight mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="font-semibold text-sm mb-2"
                        style={{ color: "oklch(0.580 0.100 15)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                      >
                        {item.price}
                      </p>
                      {item.note && (
                        <p className="text-xs leading-relaxed" style={{ color: "oklch(0.500 0.015 40)" }}>
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Extras note */}
          <div
            className="fade-up text-center mt-4 text-sm"
            style={{ color: "oklch(0.500 0.015 40)" }}
          >
            ✨ Extras &amp; flash sale items are posted to my{" "}
            <a
              href="https://www.instagram.com/nancygs_homebakery"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "oklch(0.580 0.100 15)", fontWeight: 600 }}
            >
              Instagram Stories
            </a>
          </div>
        </div>
      </section>

      {/* ── ALLERGEN NOTICE ── */}
      <section
        id="allergens"
        className="py-16"
        style={{ background: "oklch(0.985 0.010 50)" }}
      >
        <div className="container max-w-4xl mx-auto px-4">
          <div className="fade-up ornament-divider mb-10 max-w-xs mx-auto">
            <span>⚠️</span>
          </div>
          <div className="fade-up policy-card" style={{ transitionDelay: "60ms" }}>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
            >
              Allergen Notice
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.350 0.012 40)" }}>
              <strong>All desserts are made in a home kitchen that bakes with known allergens</strong>, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Milk", "Eggs", "Fish", "Shellfish", "Tree Nuts", "Wheat", "Peanuts", "Soybeans"].map((a) => (
                <span
                  key={a}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.580 0.100 15 / 0.12)",
                    color: "oklch(0.480 0.100 15)",
                    border: "1px solid oklch(0.580 0.100 15 / 0.3)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.500 0.015 40)" }}>
              All desserts come with an <strong>ingredient tag</strong> so you know exactly what you are enjoying. If you have specific allergy concerns, please contact Nancy directly before placing your order.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section id="order" className="py-24" style={{ background: "oklch(0.990 0.008 60)" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="fade-up text-center mb-12">
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "oklch(0.580 0.100 15)" }}
            >
              Ready to order?
            </p>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
            >
              How to Order
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steps */}
            <div className="fade-up space-y-6" style={{ transitionDelay: "60ms" }}>
              {[
                {
                  step: "1",
                  title: "Check Availability",
                  body: "I have updated availability calendars on my IG Highlights. Please look at those first before asking! If it is unavailable or says booked, I am not accepting any more for that day/month.",
                },
                {
                  step: "2",
                  title: "Send a DM on Instagram",
                  body: "Simply send me a DM on my Instagram! Include the date, items you're interested in, and how many. @nancygs_homebakery",
                },
                {
                  step: "3",
                  title: "Confirm with a Deposit",
                  body: "A deposit is expected and can be discussed/arranged. No deposit, no date. Payment/Deposits are now required when booking or ordering.",
                },
                {
                  step: "4",
                  title: "Pick Up Your Order",
                  body: "Pick up only — no shipping. I accept Zelle, Cash, Apple Pay & Venmo (in preferred order).",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      background: "oklch(0.580 0.100 15)",
                      color: "oklch(0.990 0.008 60)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-xl mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.450 0.012 40)" }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment + CTA */}
            <div className="fade-up space-y-6" style={{ transitionDelay: "120ms" }}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "oklch(0.975 0.012 20)", border: "1px solid oklch(0.580 0.100 15 / 0.2)" }}
              >
                <h3
                  className="font-bold text-2xl mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
                >
                  Payment Methods
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "oklch(0.450 0.012 40)" }}>
                  {["💚 Zelle (preferred)", "💵 Cash", "🍎 Apple Pay", "💙 Venmo"].map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: "oklch(0.640 0.060 145 / 0.12)", border: "1px solid oklch(0.640 0.060 145 / 0.3)" }}
              >
                <h3
                  className="font-bold text-2xl mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
                >
                  As Seen on GoodDay Sacramento!
                </h3>
                <p className="text-sm mb-4" style={{ color: "oklch(0.450 0.012 40)" }}>
                  Did you catch Nancy on GoodDay Sacramento? Watch the segment below!
                </p>
                <a
                  href="https://www.youtube.com/watch?v=Q72TLbojFfw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sage text-sm"
                  style={{ padding: "0.5rem 1.25rem" }}
                >
                  Watch GoodDay Sac Segment ↗
                </a>
              </div>

              <a
                href="https://www.instagram.com/nancygs_homebakery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose w-full text-center block"
                style={{ fontSize: "1rem" }}
              >
                DM Me on Instagram to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THANK YOU ── */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{ background: "oklch(0.975 0.012 20)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BIO_BG})` }}
        />
        <div className="relative z-10 container max-w-2xl mx-auto px-4">
          <div className="fade-up ornament-divider mb-8 max-w-xs mx-auto">
            <span>🤍</span>
          </div>
          <h2
            className="fade-up text-4xl md:text-5xl font-bold italic mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
          >
            Thank you so much for thinking of me for your special events!!!
          </h2>
          <p
            className="fade-up text-lg mb-8"
            style={{ color: "oklch(0.450 0.012 40)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            I feel humbled with so much support!!! Thank you!!!!
          </p>
          <a
            href="https://www.instagram.com/nancygs_homebakery"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up btn-rose"
          >
            Follow @nancygs_homebakery
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}
