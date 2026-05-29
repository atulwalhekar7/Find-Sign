import React, { useEffect } from "react";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";

import bannerImg from "../assets/About.jpg";

const TermsSection = ({
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

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Terms and Conditions | Find and Sign Buyer Advocate";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Review the Terms and Conditions for using the Find and Sign Buyer Advocate website and engaging our professional buyer's agency services in Perth, Western Australia."
      );
    }
  }, []);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)", fontFamily: "'Söhne', sans-serif", color: "var(--text-primary)" }}>

      {/* ── Hero ── */}
      <section
        className="terms-hero-banner"
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
            Terms & Conditions
          </h1>
         
        </div>
      </section>

      {/* ── Main Content ── */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 40px" }}>

        <TermsSection title="1. Introduction">
          <p tabIndex={0}>These Website Terms and Conditions govern your access to and use of the Find and Sign Buyer Advocate website located at findandsignba.com.au, owned and operated by Nakrani Group Pty Ltd (ABN:29 691 543 914 ) T/A Find and Sign Buyer Advocate, a licensed buyers agency based in Perth, Western Australia.</p>
          <p tabIndex={0}>By accessing or using this website, you agree to be bound by these Terms and Conditions in full. If you do not agree with any part of these Terms and Conditions, you must not use this website. These Terms and Conditions should be read together with our Privacy Policy and Terms of Use, both of which are available on this website.</p>
          <p tabIndex={0}>These Terms and Conditions are governed by and construed in accordance with the laws of Western Australia and the Commonwealth of Australia, including the Australian Consumer Law as set out in Schedule 2 of the Competition and Consumer Act 2010 (Cth).</p>
        </TermsSection>

        <TermsSection title="2. About Our Business">
          <p tabIndex={0}>Find and Sign Buyer Advocate is a licensed buyers agency operating in Perth, Western Australia. We provide professional buyers advocacy and advisory services to clients purchasing residential property. Our services are provided exclusively on behalf of buyers and we do not act for vendors or sellers at any time.</p>
          <p tabIndex={0}>Nakrani Group Pty Ltd holds the relevant licences and registrations required to operate as a buyers agency in Western Australia under the Real Estate and Business Agents Act 1978 (WA). Details of our licensing are available on request.</p>
        </TermsSection>

        <TermsSection title="3. Website Content">
          <p tabIndex={0}>The content published on this website is provided for general information purposes only. It does not constitute financial, investment, legal, or property advice and must not be relied upon as such. Nothing on this website should be taken as a recommendation to buy or sell any specific property or investment.</p>
          <p tabIndex={0}>While we take all reasonable steps to ensure the accuracy and currency of the information on this website, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or suitability of the information for any particular purpose. Property market data, suburb statistics, and any figures referenced on this website are indicative only and subject to change without notice.</p>
          <p tabIndex={0}>You should always seek independent professional advice tailored to your specific circumstances before making any property, financial, or legal decision.</p>
        </TermsSection>

        <TermsSection title="4. No Client Relationship">
          <p tabIndex={0}>Your use of this website does not create a client relationship between you and Find and Sign Buyer Advocate. A formal client relationship is only established upon the execution of a signed Client Service Agreement by both parties and receipt of the agreed retainer fee in cleared funds.</p>
          <p tabIndex={0}>Any enquiry submitted through this website, including through a contact form, email, or booking request, does not constitute an engagement of our services and does not give rise to any duty of care or obligation on the part of Find and Sign Buyer Advocate to act on your behalf.</p>
        </TermsSection>

        <TermsSection title="5. Australian Consumer Law">
          <p tabIndex={0}>Nothing in these Terms and Conditions is intended to exclude, restrict, or modify any rights you may have under the Australian Consumer Law (ACL) contained in Schedule 2 of the Competition and Consumer Act 2010 (Cth), or any other applicable legislation that cannot be lawfully excluded.</p>
          <p tabIndex={0}>Under the ACL, you may be entitled to certain consumer guarantees in relation to services we provide. Where those guarantees apply, we are required to provide remedies in accordance with the ACL. Our liability for any failure to comply with a consumer guarantee is limited to resupplying the relevant service or paying the cost of having the service resupplied, to the extent permitted by law.</p>
        </TermsSection>

        <TermsSection title="6. Unfair Contract Terms">
          <p tabIndex={0}>These Terms and Conditions are intended to be clear, transparent, and fair to all parties. In accordance with the Treasury Laws Amendment (More Competition, Better Prices) Act 2022 (Cth), which took effect from 9 November 2023, unfair terms in standard form contracts are prohibited under the Australian Consumer Law and the Australian Securities and Investments Commission Act 2001 (Cth).</p>
          <p tabIndex={0}>Find and Sign Buyer Advocate is committed to ensuring that no term in these Terms and Conditions or in any related standard form agreement causes a significant imbalance in the rights and obligations of the parties, is not reasonably necessary to protect our legitimate business interests, or would cause you detriment if relied upon.</p>
          <p tabIndex={0}>If you believe any term in these Terms and Conditions is unfair, we invite you to contact us directly. You may also seek independent legal advice or contact the Australian Competition and Consumer Commission (ACCC) at www.accc.gov.au.</p>
        </TermsSection>

        <TermsSection title="7. Privacy and Data Collection">
          <p tabIndex={0}>Your use of this website is subject to our Privacy Policy, which is incorporated into these Terms and Conditions by reference. Our Privacy Policy sets out how we collect, use, store, and disclose your personal information in accordance with the Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), and the Privacy and Other Legislation Amendment Act 2024 (Cth).</p>
          <p tabIndex={0}>By using this website, you consent to the collection and handling of your personal information as described in our Privacy Policy. Our Privacy Policy is available at [WEBSITE URL/privacy-policy].</p>
        </TermsSection>

        <TermsSection title="8. Statutory Tort for Serious Invasions of Privacy">
          <p tabIndex={0}>From 10 June 2025, individuals in Australia have a direct legal right to seek redress for serious invasions of privacy under the Privacy and Other Legislation Amendment Act 2024 (Cth). Find and Sign Buyer Advocate is committed to handling all personal information collected through this website with the highest standard of care and in full compliance with our obligations under Australian privacy law.</p>
        </TermsSection>

        <TermsSection title="9. Spam and Electronic Communications">
          <p tabIndex={0}>Any electronic communications sent by Find and Sign Buyer Advocate, including marketing emails and property updates, are sent in compliance with the Spam Act 2003 (Cth). We will only send you commercial electronic messages where you have provided your express or inferred consent to receive them. Every marketing communication we send will include a clear and functional unsubscribe mechanism. You may opt out of receiving marketing communications at any time by using the unsubscribe link in any email or by contacting us directly.</p>
        </TermsSection>

        <TermsSection title="10. Intellectual Property">
          <p tabIndex={0}>All content on this website, including but not limited to text, graphics, logos, icons, images, and the overall design and layout, is the intellectual property of Nakrani Group Pty Ltd and is protected under the Copyright Act 1968 (Cth) and other applicable Australian intellectual property laws.</p>
          <p tabIndex={0}>You may access, view, and print content from this website for your own personal and non-commercial use only. You must not reproduce, republish, distribute, modify, transmit, or commercially exploit any content from this website without our prior written consent. Any unauthorised use of our intellectual property may give rise to legal action.</p>
        </TermsSection>

        <TermsSection title="11. Third Party Links and Affiliated Services">
          <p tabIndex={0}>This website may contain links to third party websites, including those of our affiliated service providers such as mortgage brokers, settlement agents, building inspectors, property managers, accountants, quantity surveyors, and sales agents. These links are provided for your convenience only.</p>
          <p tabIndex={0}>Find and Sign Buyer Advocate does not endorse, control, or accept responsibility for the content, accuracy, privacy practices, or conduct of any third party website or service provider. Your use of any third party website is entirely at your own risk and subject to the terms and conditions of that website.</p>
          <p tabIndex={0}>Please note that Find and Sign Buyer Advocate may receive a referral fee or commission in connection with some affiliated service referrals. This does not affect the independence of our buyers advocacy service or our obligation to act in your best interests as your buyer representative.</p>
        </TermsSection>

        <TermsSection title="12. Cookies and Tracking Technologies">
          <p tabIndex={0}>This website uses cookies and third party tracking tools including Google Analytics and Meta (Facebook) Pixel to understand how visitors use our website and to improve the user experience. By continuing to use this website, you consent to the use of these technologies in accordance with our Privacy Policy.</p>
          <p tabIndex={0}>You may manage or disable cookies through your browser settings at any time. Please note that disabling cookies may affect the functionality of certain features on this website.</p>
        </TermsSection>

        <TermsSection title="13. Acceptable Use">
          <p tabIndex={0}>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use of the website. You must not use this website to transmit any unsolicited or unauthorised advertising material, engage in any conduct that is unlawful, harmful, or fraudulent, attempt to gain unauthorised access to any part of the website or its underlying systems, or upload or transmit any viruses, malicious code, or other harmful material.</p>
          <p tabIndex={0}>We reserve the right to restrict or terminate your access to this website at any time and without notice if we reasonably believe you are in breach of these Terms and Conditions or applicable law.</p>
        </TermsSection>

        <TermsSection title="14. Website Availability">
          <p tabIndex={0}>We aim to ensure this website is available at all times, however we do not guarantee that it will be uninterrupted, error free, or free from viruses or other harmful components. We reserve the right to suspend, withdraw, or restrict access to all or any part of the website at any time for operational, technical, or commercial reasons without notice.</p>
          <p tabIndex={0}>Find and Sign Buyer Advocate accepts no liability for any loss, inconvenience, or damage caused by the unavailability or interruption of this website.</p>
        </TermsSection>

        <TermsSection title="15. Limitation of Liability">
          <p tabIndex={0}>To the maximum extent permitted by Australian law, Nakrani Group Pty Ltd and Find and Sign Buyer Advocate will not be liable for any direct, indirect, incidental, special, or consequential loss or damage arising from your use of, or inability to use, this website or any content on it. This includes but is not limited to loss of data, loss of profit, loss of opportunity, or any property related financial loss.</p>
          <p tabIndex={0}>Nothing in these Terms and Conditions excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law or any other applicable legislation that cannot be lawfully excluded.</p>
        </TermsSection>

        <TermsSection title="16. Indemnity">
          <p tabIndex={0}>You agree to indemnify, defend, and hold harmless Nakrani Group Pty Ltd, its directors, employees, contractors, and representatives from and against any claims, damages, losses, costs, and expenses, including reasonable legal fees, arising out of or in connection with your use of this website, your breach of these Terms and Conditions, or your violation of any applicable law or the rights of any third party.</p>
        </TermsSection>

        <TermsSection title="17. Dispute Resolution">
          <p tabIndex={0}>In the event of any dispute arising from these Terms and Conditions or your use of this website, you agree to first contact us directly to attempt to resolve the matter in good faith. We are committed to resolving disputes promptly and fairly.</p>
          <p tabIndex={0}>If a dispute cannot be resolved directly, it may be referred to mediation or another appropriate dispute resolution process before legal proceedings are commenced, where this is practical and consistent with applicable law. Any legal proceedings must be brought in the courts of Western Australia.</p>
        </TermsSection>

        <TermsSection title="18. Governing Law">
          <p tabIndex={0}>These Terms and Conditions are governed by and constructed in accordance with the laws of Western Australia and the Commonwealth of Australia. You submit to the exclusive jurisdiction of the courts of Western Australia for the resolution of any dispute arising from these Terms and Conditions or your use of this website.</p>
        </TermsSection>

        <TermsSection title="19. Changes to These Terms and Conditions">
          <p tabIndex={0}>We reserve the right to update or amend these Terms and Conditions at any time without prior notice. Any changes will take effect from the date they are published on this website. Your continued use of the website following any update constitutes your acceptance of the revised Terms and Conditions. We recommend reviewing this page periodically to stay informed of any changes.</p>
        </TermsSection>

        <TermsSection title="20. Contact Us">
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
            <p tabIndex={0}>Website: findandsignba.com.au</p>
            <p tabIndex={0}>Location: Perth, Western Australia</p>
          </div>
          <p tabIndex={0} style={{ fontSize: "14px", fontStyle: "italic", marginTop: "12px", color: "var(--text-muted)" }}>
            These Website Terms and Conditions have been prepared as a general guide only and do not constitute legal advice. It is recommended that this document be reviewed by an Australian legal professional before publication.
          </p>
        </TermsSection>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />

      <style>{`
        .terms-hero-banner {
          aspect-ratio: 16 / 7;
        }
        @media (max-width: 1024px) {
          h1 { font-size: 56px !important; }
          h2 { font-size: 38px !important; }
        }
        @media (max-width: 768px) {
          .terms-hero-banner {
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