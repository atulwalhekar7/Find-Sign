import GetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

const THEMES = {
  dark: {
    sectionBg:   "#1A1A1A",
    headingColor: "#F9F9F9",
    dividerColor: "#F9F9F9",
  },
  light: {
    sectionBg:   "#ebe6de",
    headingColor: "#073B2F",
    dividerColor: "#073B2F",
  },
};

export default function Contact() {
  const { theme } = useTheme();
  const t = THEMES[theme];

  return (
    <>
      <div
        className="contact-page-heading-section"
        style={{
          backgroundColor: t.sectionBg,
          paddingTop: "64px",
          paddingBottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1512px",
          margin: "0 auto",
          boxSizing: "border-box",
          paddingLeft: "196px",
          paddingRight: "196px",
          transition: "background-color 0.3s ease",
        }}
      >
        <h1
          tabIndex={0}
          style={{
            color: t.headingColor,
            textAlign: "center",
            fontVariantNumeric: "lining-nums proportional-nums",
            fontFamily: "GT Super Display Medium",
            fontSize: "44px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "54px",
            letterSpacing: "1px",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            transition: "color 0.3s ease",
          }}
        >
          Contact Us
          <div
            style={{
              width: "160px",
              height: "1px",
              background: t.dividerColor,
              transition: "background 0.3s ease",
            }}
          />
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
          .contact-page-heading-section h1 { font-size: 56px !important; line-height: 1.1 !important; }
          h2 { font-size: 42px !important; }
          h3 { font-size: 32px !important; }
        }

        @media (max-width: 600px) {
          .contact-page-heading-section h1 { font-size: 56px !important; line-height: 1.1 !important; }
        }
      `}</style>
    </>
  );
}