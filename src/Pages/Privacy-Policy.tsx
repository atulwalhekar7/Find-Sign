import React, { useEffect } from "react";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";

import bannerImg from "../assets/perth-property-investment-strategy.jpg";

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section
    style={{
      padding: "48px 0",
      borderBottom: "1px solid var(--bg-tertiary)",
    }}
  >
    <h2
      tabIndex={0}
      style={{
        fontFamily: "'GT Super Display Medium'",
        fontSize: "44px",
        fontWeight: 500,
        color: "var(--text-heading)",
        lineHeight: "1.2",
        letterSpacing: "-0.48px",
        marginBottom: "24px",
      }}
    >
      {title}
    </h2>

    <div
      style={{
        fontFamily: "'Söhne', sans-serif",
        fontSize: "18px",
        lineHeight: "1.8",
        color: "var(--text-secondary)",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {children}
    </div>
  </section>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Find and Sign Buyer Advocate";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read the Privacy Policy for Find and Sign Buyer Advocate and learn how we collect, use, store, and protect your personal information."
      );
    }
  }, []);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)", fontFamily: "'Söhne', sans-serif", color: "var(--text-primary)" }}>

      {/* ── Hero ── */}
      <section
        className="privacy-hero-banner"
        style={{
          minHeight: "70vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",
          }}
        >
          <h1
            tabIndex={0}
            style={{
              fontFamily: "'GT Super Display Medium'",
              fontSize: "56px",
              fontWeight: 500,
              color: "#FFF",
              lineHeight: "1.1",
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            Privacy Policy
          </h1>
         
        </div>
      </section>

      {/* ── Main Content ── */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 40px" }}>

        <PolicySection title="Our Commitment to Your Privacy">
          <p tabIndex={0}>Nakrani Group Pty Ltd trading as Find and Sign Buyer Advocate is committed to protecting the privacy of our clients and website visitors.</p>
          <p tabIndex={0}>This Privacy Policy outlines how we collect, use, store, and disclose your personal information in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), and the Privacy and Other Legislation Amendment Act 2024 (Cth).</p>
          <p tabIndex={0}>By using our website or engaging our services, you consent to the collection and use of your personal information as described in this policy.</p>
        </PolicySection>

        <PolicySection title="What Information We Collect">
          <ul style={{ paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <li tabIndex={0}>Your full name, email address, phone number, and postal address.</li>
            <li tabIndex={0}>Financial information relevant to your property purchase including budget, borrowing capacity, and investment goals.</li>
            <li tabIndex={0}>Property preferences and requirements shared with us during our engagement.</li>
            <li tabIndex={0}>Identity verification information collected in connection with our AML/CTF obligations.</li>
            <li tabIndex={0}>Information submitted through enquiry forms, booking forms, or email subscriptions.</li>
            <li tabIndex={0}>Any other information you choose to provide during the course of our engagement.</li>
          </ul>
        </PolicySection>

        <PolicySection title="How We Collect Your Information">
          <ul style={{ paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <li tabIndex={0}>Directly from you through forms, phone calls, emails, and service engagements.</li>
            <li tabIndex={0}>Automatically through third-party tools including Google Analytics and Meta Pixel.</li>
            <li tabIndex={0}>Through cookies and similar tracking technologies on our website.</li>
          </ul>
        </PolicySection>

        <PolicySection title="Why We Collect Your Information">
          <ul style={{ paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <li tabIndex={0}>To provide our buyers advocacy services.</li>
            <li tabIndex={0}>To respond to your enquiries and communications.</li>
            <li tabIndex={0}>To tailor our services to your property goals.</li>
            <li tabIndex={0}>To comply with AML/CTF obligations.</li>
            <li tabIndex={0}>To send property updates and marketing communications where consent has been provided.</li>
            <li tabIndex={0}>To improve website functionality and user experience.</li>
            <li tabIndex={0}>To comply with legal and regulatory obligations.</li>
          </ul>
        </PolicySection>

        <PolicySection title="AML/CTF Obligations">
          <p tabIndex={0}>From 1 July 2026, buyers agents are classified as reporting entities under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth).</p>
          <p tabIndex={0}>We are required to collect and verify certain personal information as part of our customer identification and due diligence obligations.</p>
          <p tabIndex={0}>We collect only the minimum information required and retain it only for as long as required by law.</p>
        </PolicySection>

        <PolicySection title="Storing Your Information">
          <p tabIndex={0}>Your personal information is stored securely using cloud-based platforms and digital systems.</p>
          <p tabIndex={0}>We take reasonable technical and organisational measures to protect your information from misuse, loss, unauthorised access, modification, or disclosure.</p>
          <p tabIndex={0}>Access to your information is restricted to authorised personnel only.</p>
        </PolicySection>

        <PolicySection title="Sharing Your Information">
          <p tabIndex={0}>We only share your information in limited circumstances including:</p>
          <ul style={{ paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <li tabIndex={0}>With affiliated service providers relevant to your property journey.</li>
            <li tabIndex={0}>With third-party business platforms including CRM and analytics providers.</li>
            <li tabIndex={0}>Where required or permitted by law or regulatory obligations.</li>
          </ul>
          <p tabIndex={0}>We do not sell your personal information to any third party.</p>
        </PolicySection>

        <PolicySection title="Third Party Tools and Analytics">
          <p tabIndex={0}>Our website uses Google Analytics and Meta (Facebook) Pixel to help us understand visitor behaviour and improve website performance.</p>
          <p tabIndex={0}>These tools may use cookies to collect information about your visit.</p>
          <p tabIndex={0}>You may manage your preferences through your browser or platform settings.</p>
        </PolicySection>

        <PolicySection title="Cookies">
          <p tabIndex={0}>Our website uses cookies to enhance your browsing experience and collect analytical data.</p>
          <p tabIndex={0}>You may disable cookies through your browser settings, however some website functionality may be affected.</p>
        </PolicySection>

        <PolicySection title="Marketing Communications">
          <p tabIndex={0}>We may occasionally send you market updates, property insights, and service information.</p>
          <p tabIndex={0}>We only send marketing communications where consent has been provided.</p>
          <p tabIndex={0}>You may unsubscribe at any time using the unsubscribe link in our emails or by contacting us directly.</p>
        </PolicySection>

        <PolicySection title="Access and Correction">
          <p tabIndex={0}>You may request access to the personal information we hold about you and request corrections where necessary.</p>
          <p tabIndex={0}>We will respond within a reasonable timeframe in accordance with the Australian Privacy Principles.</p>
        </PolicySection>

        <PolicySection title="Complaints">
          <p tabIndex={0}>If you believe your information has not been handled appropriately, please contact us first so we can attempt to resolve your concern.</p>
          <p tabIndex={0}>You may also lodge a complaint with the Office of the Australian Information Commissioner (OAIC).</p>
        </PolicySection>

        <PolicySection title="Changes to This Policy">
          <p tabIndex={0}>We may update this Privacy Policy from time to time to reflect changes in legal obligations or business practices.</p>
          <p tabIndex={0}>The latest version will always be available on our website.</p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <div
            style={{
              background: "var(--bg-secondary)",
              borderRadius: "16px",
              padding: "32px",
              border: "1px solid var(--bg-tertiary)",
            }}
          >
            <p tabIndex={0}><strong>Nakrani Group Pty Ltd trading as Find and Sign Buyer Advocate</strong></p>
            <p tabIndex={0}>Email: info@findandsignba.com.au</p>
            <p tabIndex={0}>Website: www.findandsignba.com.au</p>
          </div>
        </PolicySection>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />

      <style>{`
        .privacy-hero-banner {
          aspect-ratio: 16 / 7;
        }
        @media (max-width: 1024px) {
          h1 { font-size: 56px !important; }
          h2 { font-size: 38px !important; }
        }
        @media (max-width: 768px) {
          .privacy-hero-banner {
            aspect-ratio: 4 / 5;
            min-height: unset;
          }

          h1 {
            font-size: 42px !important;
            line-height: 1.2 !important;
            letter-spacing: 0.02em !important;
          }

          h2 {
            font-size: 32px !important;
          }

          main {
            padding: 60px 24px !important;
          }
        }
        @media (max-width: 480px) {
          h1 { font-size: 36px !important; }
          h2 { font-size: 28px !important; }
        }
      `}</style>
    </div>
  );
}