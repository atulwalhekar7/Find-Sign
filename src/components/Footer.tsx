import { useState } from "react";
import Logo from "../assets/FS Primary Lockup_Gold.png";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialIcons = [
  { label: "Facebook",  Icon: FacebookIcon  },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "LinkedIn",  Icon: LinkedInIcon  },
];

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
        lineHeight:     "1.6",
        display:        "block",
        fontFamily:     "'Montserrat', sans-serif",
      }}
    >
      {children}
    </a>
  );
};

const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
 <p style={{
  color:         "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
  fontFamily:    '"CX80 Trial VAR"',
  fontSize:      "18px",
  fontStyle:     "normal",
  fontWeight:    150,
  lineHeight:    "18px",
  letterSpacing: "5.76px"
}}>
    {children}
  </p>
);

const contactItems = [
  { label: "T", href: "tel:0431158233",                   text: "0431 158 233"              },
  { label: "E", href: "mailto:niki@findandsignba.com.au", text: "niki@findandsignba.com.au" },
  { label: "W", href: "https://findandsignba.com.au",     text: "findandsignba.com.au"      },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .footer-social-link { color: #9dbfaa; transition: color 0.2s; text-decoration: none; display: flex; align-items: center; justify-content: center; }
        .footer-social-link:hover { color: #c8b99a; }
      `}</style>

      {/* Full-width green background */}
      <footer style={{
        width:      "100%",
        background: "#073B2F",
        fontFamily: "'Montserrat', sans-serif",
        color:      "#e8e0d0",
      }}>

        {/* Centred inner container — mirrors 1512px outer with 196px side padding → 1120px content */}
        <div style={{
          maxWidth: "1120px",
          margin:   "0 auto",
          padding:  "80px 0 0",
        }}>

          {/* ── MAIN ROW ── */}
          <div style={{
            display:        "flex",
            alignItems:     "flex-start",
            justifyContent: "space-between",
            width:          "100%",
          }}>

            {/* Logo */}
            <div style={{ flexShrink: 0 }}>
              <img src={Logo} alt="Find and Sign" style={{ width: "90px", display: "block" }} />
            </div>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
              <ColTitle>Contact</ColTitle>
              {contactItems.map(({ label, href, text }) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <span style={{ fontSize: "12px", color: "#9dbfaa", flexShrink: 0, fontFamily: "'Montserrat', sans-serif" }}>
                    {label}
                  </span>
                  <a href={href} style={{ fontSize: "12px", color: "#9dbfaa", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap", fontFamily: "'Montserrat', sans-serif" }}>
                    {text}
                  </a>
                </div>
              ))}
            </div>

            {/* Explore */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
              <ColTitle>Explore</ColTitle>
              <ColLink>About</ColLink>
              <ColLink>Journeys</ColLink>
              <ColLink>Services</ColLink>
              <ColLink>Insights</ColLink>
              <ColLink>Contact</ColLink>
            </div>

            {/* Legal */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
              <ColTitle>Legal</ColTitle>
              <ColLink>Privacy Policy</ColLink>
              <ColLink>Terms &amp; Conditions</ColLink>
            </div>

            {/* Social icons — horizontal, far right */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0, marginTop: "2px" }}>
              {socialIcons.map(({ label, Icon }) => (
                <a key={label} href="#" title={label} className="footer-social-link">
                  <Icon />
                </a>
              ))}
            </div>

          </div>

          {/* ── DIVIDER + BOTTOM BAR ── */}
          <div style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            marginTop:      "60px",
            paddingTop:     "24px",
            paddingBottom:  "40px",
          
          }}>
            <span style={{
  display:    "inline-flex",
  alignItems: "center",
  gap:        "34px"
}}>
              ABN XXXXXXXXXX
            </span>
            <span style={{
  color:       "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
  fontFamily:  "Söhne",
  fontSize:    "16px",
  fontStyle:   "normal",
  fontWeight:  400,
  lineHeight:  "24px"
}}>
  © 2026 Find and Sign Buyer Advocate
</span>
          </div>

        </div>
      </footer>
    </>
  );
}