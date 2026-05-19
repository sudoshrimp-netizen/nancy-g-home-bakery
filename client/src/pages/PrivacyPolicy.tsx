/**
 * Privacy Policy — Nancy G's Home Bakery
 * Covers: data collection, cookies, CCPA (California), GDPR basics,
 *         third-party services, user rights, and contact.
 * Last updated: May 2026
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.990 0.008 60)" }}>
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="text-sm font-medium inline-flex items-center gap-1 mb-6"
              style={{ color: "oklch(0.580 0.100 15)" }}
            >
              ← Back to Home
            </Link>
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ color: "oklch(0.580 0.100 15)" }}
            >
              Legal
            </p>
            <h1
              className="text-5xl font-bold mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm" style={{ color: "oklch(0.500 0.015 40)" }}>
              <strong>Last Updated:</strong> May 2026 &nbsp;·&nbsp; <strong>Effective Date:</strong> May 2026
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-10"
            style={{ height: "1px", background: "oklch(0.580 0.100 15 / 0.25)" }}
          />

          {/* Body */}
          <div
            className="prose prose-lg max-w-none space-y-10"
            style={{ color: "oklch(0.350 0.012 40)" }}
          >
            {/* 1 */}
            <Section title="1. Introduction">
              <p>
                Welcome to <strong>Nancy G's Home Bakery</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information when you visit our website at{" "}
                <a
                  href="https://nancy-g-home-bakery.manus.space"
                  style={{ color: "oklch(0.580 0.100 15)" }}
                >
                  nancy-g-home-bakery.manus.space
                </a>{" "}
                (the "Site").
              </p>
              <p>
                By using the Site, you agree to the practices described in this policy. If you do not agree, please do not use the Site.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Information We Collect">
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}>
                2.1 Information You Provide
              </h3>
              <p>
                This website is informational only. We do not operate an online store or collect payment information directly through this Site. All orders are placed via Instagram Direct Message. When you contact us through Instagram, Instagram's own privacy policy governs the data you share there.
              </p>

              <h3 className="font-semibold text-lg mb-2 mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}>
                2.2 Automatically Collected Information
              </h3>
              <p>
                When you visit the Site, certain technical information is automatically collected, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>IP address (anonymized where possible)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Date and time of your visit</li>
              </ul>
              <p className="mt-3">
                This information is collected through <strong>Umami Analytics</strong>, a privacy-focused, cookie-free analytics platform that does not track users across websites and does not sell data to third parties.
              </p>
            </Section>

            {/* 3 */}
            <Section title="3. Cookies and Tracking Technologies">
              <p>
                This Site uses minimal cookies. Specifically:
              </p>
              <table
                className="w-full text-sm border-collapse mt-3"
                style={{ borderColor: "oklch(0.900 0.020 30)" }}
              >
                <thead>
                  <tr style={{ background: "oklch(0.975 0.012 20)" }}>
                    <th className="text-left p-3 font-semibold border" style={{ borderColor: "oklch(0.900 0.020 30)", color: "oklch(0.220 0.010 40)" }}>Cookie Name</th>
                    <th className="text-left p-3 font-semibold border" style={{ borderColor: "oklch(0.900 0.020 30)", color: "oklch(0.220 0.010 40)" }}>Purpose</th>
                    <th className="text-left p-3 font-semibold border" style={{ borderColor: "oklch(0.900 0.020 30)", color: "oklch(0.220 0.010 40)" }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border" style={{ borderColor: "oklch(0.900 0.020 30)" }}>nancyg_cookie_consent</td>
                    <td className="p-3 border" style={{ borderColor: "oklch(0.900 0.020 30)" }}>Stores your cookie consent preference</td>
                    <td className="p-3 border" style={{ borderColor: "oklch(0.900 0.020 30)" }}>1 year (localStorage)</td>
                  </tr>
                  <tr style={{ background: "oklch(0.975 0.012 20)" }}>
                    <td className="p-3 border" style={{ borderColor: "oklch(0.900 0.020 30)" }}>Umami analytics</td>
                    <td className="p-3 border" style={{ borderColor: "oklch(0.900 0.020 30)" }}>Anonymous page-view analytics (no personal data)</td>
                    <td className="p-3 border" style={{ borderColor: "oklch(0.900 0.020 30)" }}>Session only</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4">
                We do <strong>not</strong> use advertising cookies, tracking pixels, or third-party behavioral advertising networks. You may clear your browser's local storage at any time to reset your consent preference.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. How We Use Your Information">
              <p>The limited information we collect is used solely to:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Understand how visitors use the Site so we can improve it</li>
                <li>Monitor the technical performance and security of the Site</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> sell, rent, or trade your information to any third party. We do not use your information for targeted advertising.
              </p>
            </Section>

            {/* 5 */}
            <Section title="5. Third-Party Services">
              <p>
                The Site links to or embeds content from the following third-party services. Each has its own privacy policy:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                <li>
                  <strong>Instagram / Meta</strong> — Orders are placed via Instagram DM. See{" "}
                  <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.580 0.100 15)" }}>
                    Instagram's Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Google Fonts</strong> — Fonts are loaded from Google's CDN. Google may collect IP addresses. See{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.580 0.100 15)" }}>
                    Google's Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Manus Hosting</strong> — This Site is hosted on Manus infrastructure. Standard server logs may be retained per Manus's data retention policy.
                </li>
              </ul>
            </Section>

            {/* 6 */}
            <Section title="6. California Privacy Rights (CCPA)">
              <p>
                If you are a California resident, you have the following rights under the <strong>California Consumer Privacy Act (CCPA)</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                <li><strong>Right to Know</strong> — You may request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong>Right to Delete</strong> — You may request deletion of personal information we have collected, subject to certain exceptions.</li>
                <li><strong>Right to Opt-Out</strong> — We do not sell personal information. There is nothing to opt out of.</li>
                <li><strong>Right to Non-Discrimination</strong> — We will not discriminate against you for exercising your CCPA rights.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us via Instagram DM at{" "}
                <a href="https://www.instagram.com/nancygs_homebakery" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.580 0.100 15)" }}>
                  @nancygs_homebakery
                </a>.
              </p>
            </Section>

            {/* 7 */}
            <Section title="7. Your Rights Under GDPR (EU/UK Visitors)">
              <p>
                If you are located in the European Union or United Kingdom, you have the following rights under the <strong>General Data Protection Regulation (GDPR)</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                <li><strong>Right of Access</strong> — Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification</strong> — Request correction of inaccurate data.</li>
                <li><strong>Right to Erasure</strong> — Request deletion of your data ("right to be forgotten").</li>
                <li><strong>Right to Restrict Processing</strong> — Request that we limit how we use your data.</li>
                <li><strong>Right to Data Portability</strong> — Receive your data in a structured, machine-readable format.</li>
                <li><strong>Right to Object</strong> — Object to processing based on legitimate interests.</li>
              </ul>
              <p className="mt-3">
                Our lawful basis for processing analytics data is <strong>legitimate interest</strong> (understanding website usage to improve the service). You may withdraw consent or object at any time by contacting us.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Children's Privacy">
              <p>
                This Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
              </p>
            </Section>

            {/* 9 */}
            <Section title="9. Data Retention">
              <p>
                We retain anonymized analytics data for up to 24 months to identify usage trends. Cookie consent preferences stored in your browser's local storage remain until you clear them. We do not retain personally identifiable information through this website.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. Security">
              <p>
                We take reasonable technical measures to protect the Site and any data it processes. However, no method of transmission over the internet is 100% secure. We encourage you to exercise caution when sharing personal information online.
              </p>
            </Section>

            {/* 11 */}
            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of the Site after changes constitutes your acceptance of the updated policy.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. Contact Us">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
              </p>
              <div
                className="mt-4 p-5 rounded-xl"
                style={{ background: "oklch(0.975 0.012 20)", border: "1px solid oklch(0.580 0.100 15 / 0.2)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "oklch(0.220 0.010 40)" }}>Nancy G's Home Bakery</p>
                <p className="text-sm" style={{ color: "oklch(0.450 0.012 40)" }}>Galt, California</p>
                <p className="text-sm mt-2">
                  Instagram:{" "}
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
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.220 0.010 40)" }}
      >
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "oklch(0.400 0.012 40)" }}>
        {children}
      </div>
    </div>
  );
}
