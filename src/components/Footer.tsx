import { useState } from "react";
import Logo from "../assets/FS Primary Lockup_Gold.png";

/* ── Social icons — 24×24, flex-shrink:0 ── */
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialIcons = [
  { label: "Facebook",  Icon: FacebookIcon  },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "LinkedIn",  Icon: LinkedInIcon  },
];

/* ── Column link ── */
const ColLink: React.FC<{ href?: string; children: React.ReactNode }> = ({ href = "#", children }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize:       "13px",
        fontWeight:     300,
        color:          hov ? "#c8b99a" : "#9dbfaa",
        textDecoration: "none",
        transition:     "color 0.18s",
        lineHeight:     "1.5",
        display:        "block",
      }}
    >
      {children}
    </a>
  );
};

/* ── Column title ── */
const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{
    fontSize:      "11px",
    fontWeight:    700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color:         "#e8e0d0",
    fontFamily:    "'Montserrat', sans-serif",
    lineHeight:    "1",
  }}>
    {children}
  </p>
);

const contactItems = [
  { label: "T", href: "tel:0431158233",                    text: "0431 158 233"              },
  { label: "E", href: "mailto:niki@findandsignba.com.au",  text: "niki@findandsignba.com.au" },
  { label: "W", href: "https://findandsignba.com.au",      text: "findandsignba.com.au"      },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/*
        ── OUTER CONTAINER — Figma ──
        display: flex;
        width: 1512px;
        padding: 96px 196px;
        flex-direction: column;
        align-items: flex-start;
        gap: 66px;
        background: var(--Brand-Foundation-FS-RACING-GREEN, #073B2F);
      */}
      <footer style={{
        display:       "flex",
        width:         "1512px",
        padding:       "96px 196px",
        flexDirection: "column",
        alignItems:    "flex-start",
        gap:           "66px",
        background:    "var(--Brand-Foundation-FS-RACING-GREEN, #073B2F)",
        boxSizing:     "border-box",
        fontFamily:    "'Montserrat', sans-serif",
        color:         "#e8e0d0",
      }}>

        {/*
          ── NAV ROW — Figma Frame 25 ──
          display: flex;
          width: 1120px;   (1512 - 2×196)
          flex-direction: row;
          align-items: flex-start;
          gap: 33px;     (gaps between logo col, contact col, explore col, legal col, socials col)
        */}
        <div style={{
          display:    "flex",
          width:      "1120px",
          alignItems: "flex-start",
          gap:        "33px",
        }}>

          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <img src={Logo} alt="Find and Sign" style={{ width: "140px", display: "block" }} />
          </div>

          {/*
            ── CONTACT column — Figma ──
            display: flex;
            width: 71px  → grows to fit content
            padding: 10px 0;
            align-items: center;
            gap: 10px;
          */}
          <div style={{
            display:       "flex",
            flexDirection: "column",
            padding:       "10px 0",
            alignItems:    "flex-start",
            gap:           "10px",
            flex:          "0 0 auto",
          }}>
            <ColTitle>Contact</ColTitle>
            {contactItems.map(({ label, href, text }) => (
              <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "12px", color: "#9dbfaa", flexShrink: 0 }}>{label}</span>
                <a href={href} style={{ fontSize: "12px", color: "#9dbfaa", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
                  {text}
                </a>
              </div>
            ))}
          </div>

          {/*
            ── EXPLORE column — Figma ──
            display: flex;
            width: 71px → grows to fit
            padding: 10px 0;
            align-items: center;
            gap: 10px;
          */}
          <div style={{
            display:       "flex",
            flexDirection: "column",
            padding:       "10px 0",
            alignItems:    "flex-start",
            gap:           "10px",
            flex:          "0 0 auto",
          }}>
            <ColTitle>Explore</ColTitle>
            <ColLink>About</ColLink>
            <ColLink>Journeys</ColLink>
            <ColLink>Services</ColLink>
            <ColLink>Insights</ColLink>
            <ColLink>Contact</ColLink>
          </div>

          {/*
            ── LEGAL column — Figma ──
            display: flex;
            padding: 10px 0;
            align-items: center;
            gap: 10px;
            align-self: stretch;
          */}
          <div style={{
            display:       "flex",
            flexDirection: "column",
            padding:       "10px 0",
            alignItems:    "flex-start",
            gap:           "10px",
            alignSelf:     "stretch",
            flex:          "0 0 auto",
          }}>
            <ColTitle>Legal</ColTitle>
            <ColLink>Privacy Policy</ColLink>
            <ColLink>Terms &amp; Conditions</ColLink>
          </div>

          {/* Spacer — push socials to far right */}
          <div style={{ flex: 1 }} />

          {/*
            ── SOCIAL ICONS — Figma: width:24px; height:24px; flex-shrink:0 ──
            Row of 3 icons at 24×24
          */}
          <div style={{
            display:    "flex",
            alignItems: "center",
            gap:        "16px",
            paddingTop: "10px",
            flexShrink: 0,
          }}>
            {socialIcons.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                title={label}
                style={{
                  color:          "#9dbfaa",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  width:          "24px",
                  height:         "24px",
                  flexShrink:     0,
                  transition:     "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b99a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9dbfaa")}
              >
                <Icon />
              </a>
            ))}
          </div>

        </div>

        {/*
          ── BOTTOM BAR — Figma Frame 6 ──
          display: flex;
          width: 1120px;
          padding: 34px 10px;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,0.12)

          ABN col: width:254px; padding:10px 0; align-items:center; gap:10px
          Copyright col: width:354px; padding:10px 0; align-items:center; gap:10px
        */}
        <div style={{
          display:        "flex",
          width:          "1120px",
          padding:        "34px 10px",
          justifyContent: "space-between",
          alignItems:     "center",
          gap:            "10px",
          borderTop:      "1px solid rgba(255,255,255,0.12)",
          boxSizing:      "border-box",
        }}>
          <div style={{
            display:    "flex",
            width:      "254px",
            padding:    "10px 0",
            alignItems: "center",
            gap:        "10px",
          }}>
            <span style={{ fontSize: "12px", color: "#6a9070", letterSpacing: "0.02em" }}>
              ABN XXXXXXXXXX
            </span>
          </div>

          <div style={{
            display:    "flex",
            width:      "354px",
            padding:    "10px 0",
            alignItems: "center",
            gap:        "10px",
            justifyContent: "flex-end",
          }}>
            <span style={{ fontSize: "12px", color: "#6a9070", letterSpacing: "0.02em" }}>
              © 2026 Find and Sign Buyer Advocate
            </span>
          </div>
        </div>

      </footer>
    </>
  );
}