import GetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="contact-page-heading-section" style={{
        backgroundColor: "#ebe6de", // Matching the background of GetInTouch
        paddingTop: "80px", // Top padding for the section
        paddingBottom: "40px", // Bottom padding before the GetInTouch component
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1512px", // Max width for content alignment
        margin: "0 auto", // Center the content
        boxSizing: "border-box", // Include padding in width
        paddingLeft: "196px", // Matching Services.tsx padding
        paddingRight: "196px", // Matching Services.tsx padding
      }}>
        <h1
          style={{
            color: "var(--FS-RACING-GREEN, #073B2F)",
            textAlign: "center",
            fontVariantNumeric: "lining-nums proportional-nums",
            fontFamily: "GT Super Display Medium",
            fontSize: "44px", // Consistent with other main section headings (H2s)
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "54px",
            letterSpacing: "-0.88px",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px", // Gap for the underline
          }}
        >
          Contact Us
          <div style={{ width: "160px", height: "1px", background: "#073B2F" }} />
        </h1>
      </div>
      <GetInTouch hideInternalHeading={true} />
      <SimpleFooter />

      <style>{`
        @media (max-width: 1200px) {
          .contact-page-heading-section {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }

        @media (max-width: 900px) {
          .contact-page-heading-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 40px !important;
            padding-bottom: 20px !important;
          }
          .contact-page-heading-section h1 { font-size: 32px !important; line-height: 40px !important; }
        }

        @media (max-width: 600px) {
          .contact-page-heading-section h1 { font-size: 28px !important; line-height: 36px !important; }
        }
      `}</style>
    </>
  );
}