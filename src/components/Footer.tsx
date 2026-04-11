import { useState } from "react";
import Logo from "../assets/FS Primary Lockup_Gold.png";

const socialIcons = [
  {
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const SocialBtn: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      title={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 34, height: 34, borderRadius: 6,
        border: `1px solid ${hov ? "#c8b99a" : "#2e5040"}`,
        background: hov ? "rgba(200,185,154,0.12)" : "transparent",
        color: hov ? "#c8b99a" : "#7aaa8a",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", outline: "none",
        transition: "all 0.2s ease",
      }}
    >
      {icon}
    </button>
  );
}

const ColLink: React.FC<{ href?: string; children: React.ReactNode }> = ({ href = "#", children }) => {
  const [hov, setHov] = useState(false);
  return (
    <li style={{ listStyle: "none", marginBottom: 10 }}>
      <a
        href={href}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ fontSize: 13.5, color: hov ? "#c8b99a" : "#9dbfaa", textDecoration: "none", transition: "color 0.18s" }}
      >
        {children}
      </a>
    </li>
  );
}

const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p style={{
      fontSize: 11, fontWeight: 700,
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: "#e8e0d0", marginBottom: 18,
      fontFamily: "'Montserrat', sans-serif",
    }}>
      {children}
    </p>
  );
}

const contactItems = [
  { label: "T", href: "tel:0431158233", text: "0431 158 233" },
  { label: "E", href: "mailto:niki@findandsignba.com.au", text: "niki@findandsignba.com.au" },
  { label: "W", href: "https://findandsignba.com.au", text: "findandsignba.com.au" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <footer style={{
        background: "#1a3d2b",
        color: "#e8e0d0",
        fontFamily: "'Montserrat', sans-serif",
        padding: "48px 56px 32px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "180px minmax(220px, auto) 1fr 1fr auto",
          gap: 40,
          alignItems: "start",
          maxWidth: 1100,
        }}>

          {/* Logo */}
          <div>
            <img src={Logo} alt="Find and Sign" style={{ width: 140, display: "block" }} />
          </div>

          {/* Contact */}
          <div>
            <ColTitle>Contact</ColTitle>
            <ul style={{ padding: 0 }}>
              {contactItems.map(({ label, href, text }) => (
                <li key={label} style={{
                  listStyle: "none", marginBottom: 10,
                  display: "flex", alignItems: "baseline",
                  gap: 6, flexWrap: "nowrap",
                }}>
                  <span style={{ fontSize: 13, color: "#9dbfaa", flexShrink: 0, minWidth: 10 }}>{label}</span>
                  <a href={href} style={{ fontSize: 13, color: "#9dbfaa", textDecoration: "underline", textUnderlineOffset: 3, whiteSpace: "nowrap" }}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <ColTitle>Explore</ColTitle>
            <ul style={{ padding: 0 }}>
              <ColLink>About</ColLink>
              <ColLink>Journeys</ColLink>
              <ColLink>Services</ColLink>
              <ColLink>Insights</ColLink>
              <ColLink>Contact</ColLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <ColTitle>Legal</ColTitle>
            <ul style={{ padding: 0 }}>
              <ColLink>Privacy Policy</ColLink>
              <ColLink>Terms &amp; Conditions</ColLink>
            </ul>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {socialIcons.map((s) => (
              <SocialBtn key={s.label} icon={s.icon} label={s.label} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 48, paddingTop: 20,
          borderTop: "1px solid #2a5038",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 10,
          maxWidth: 1100,
        }}>
          <span style={{ fontSize: 12, color: "#6a9070", letterSpacing: "0.02em" }}>ABN XXXXXXXXXX</span>
          <span style={{ fontSize: 12, color: "#6a9070", letterSpacing: "0.02em" }}>© 2026 Find and Sign Buyer Advocate</span>
        </div>
      </footer>
    </>
  );
}