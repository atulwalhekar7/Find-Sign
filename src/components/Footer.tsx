import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";

import logo from "../assets/FS Primary Lockup_Gold.png";
import fbIcon from "../assets/icon/fb.svg";
import igIcon from "../assets/icon/Instagram.svg";
import liIcon from "../assets/icon/LinkedIn.svg";
import tiIcon from "../assets/icon/Tiktok.svg";
import goIcon from "../assets/icon/Google.svg";

const socialIcons = [
  { label: "Facebook", img: fbIcon, url: "https://www.facebook.com/nakranipropertybuyers/" },
  { label: "Instagram", img: igIcon, url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" },
  { label: "LinkedIn", img: liIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },
  { label: "Tiktok", img: tiIcon, url: "https://www.tiktok.com/@findandsignba/" },
  { label: "Google", img: goIcon, url: "https://www.google.com/search?kgmid=/g/11vyhyd916&hl=en-IN&q=Find+and+Sign+Buyer+Advocate" },
];

const exploreLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const CALENDLY = "https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc";

const THEMES = {
  dark: {
    footerBg:       "#000000",
    titleColor:     "#F9F9F9",
    linkColor:      "#EAE5DF",
    legalColor:     "#EAE5DF",
    copyrightColor: "#846F58",
    btnBg:          "#69E4DC",
    btnColor:       "#073B2F",
    labelColor:     "#EAE5DF",
  },
  light: {
    footerBg:       "#073B2F",
    titleColor:     "#F9F9F9",
    linkColor:      "#EAE5DF",
    legalColor:     "#EAE5DF",
    copyrightColor: "#846F58",
    btnBg:          "#69E4DC",
    btnColor:       "#073B2F",
    labelColor:     "#EAE5DF",
  },
};

export default function Footer() {
  const { theme } = useTheme();
  const t = THEMES[theme]; // ✅ re-evaluates on every render when theme changes

  return (
    <>
      {/* Only keep layout/responsive CSS here — no color styles */}
      <style>{`
        .footer-grid {
          display: inline-flex;
          align-items: flex-start;
          gap: 55px 32px;
          width: 100%;
        }
        .footer-link-hover:hover { opacity: 0.75; }
        .social-link:hover { opacity: 0.6; }
        .btn-book:hover { opacity: 0.85; }
        @media (max-width: 1200px) {
          .footer-wrap { padding: 56px 76px !important; }
        }
        @media (max-width: 768px) {
          .footer-wrap { padding: 48px 20px !important; }
          .footer-grid { flex-direction: column !important; }
          .desktop-only { display: none !important; }
          .footer-contact-col, .footer-explore-col, .footer-legal-col { width: 100% !important; margin-left: 0 !important; }
        }
      `}</style>

      <footer
        className="footer-wrap"
        style={{
          background: t.footerBg,         // ✅ inline — updates on theme change
          color: "#FFFFFF",
          width: "100%",
          display: "flex",
          minHeight: "589px",
          padding: "24px 130px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "66px",
          transition: "background 0.3s ease",
        }}
      >
        {/* Social Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", padding: "10px 0" }}>
          {socialIcons.map(({ label, img, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              className="social-link" style={{ display: "flex", transition: "opacity 0.2s" }}>
              <img src={img} alt={label} style={{ width: "24px", height: "24px" }} />
            </a>
          ))}
        </div>

        {/* Main Grid */}
        <div className="footer-grid">

          {/* Logo */}
          <div style={{ width: "167px", flexShrink: 0, padding: "8px 0" }}>
            <NavLink to="/">
              <img src={logo} alt="Logo" style={{ width: "159px", height: "59px", objectFit: "contain" }} />
            </NavLink>
          </div>

          <div className="desktop-only" style={{ width: "68px" }} />

          {/* Contact */}
          <div className="footer-contact-col" style={{ display: "flex", width: "267px", padding: "10px", flexDirection: "column", alignItems: "flex-start", gap: "8px", marginLeft: "32px" }}>
            <div style={{ fontFamily: "CX80BOLD", fontSize: "18px", letterSpacing: "5.76px", color: t.titleColor, textTransform: "uppercase", marginBottom: "10px", marginTop: "10px", transition: "color 0.3s ease" }}>
              Contact
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "6px 0" }}>
              <span style={{ marginRight: "8px", fontFamily: "SohneBuch", color: t.labelColor, transition: "color 0.3s ease" }}>T</span>
              <a href="tel:0431158233" style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", color: t.linkColor, textDecoration: "underline", transition: "color 0.3s ease" }}>
                0431 158 233
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "6px 0" }}>
              <span style={{ marginRight: "8px", fontFamily: "SohneBuch", color: t.labelColor, transition: "color 0.3s ease" }}>E</span>
              <a href="mailto:info@findandsignba.com.au" style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", color: t.linkColor, textDecoration: "underline", transition: "color 0.3s ease" }}>
                info@findandsignba.com.au
              </a>
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="btn-book"
              style={{ display: "flex", height: "48px", padding: "12px 16px", justifyContent: "center", alignItems: "center", background: t.btnBg, borderRadius: "8px", border: "none", textDecoration: "none", fontFamily: "CX80BOLD", fontSize: "14px", letterSpacing: "4.48px", color: t.btnColor, textTransform: "uppercase", marginTop: "8px", cursor: "pointer", transition: "background 0.3s ease" }}>
              Book a call
            </a>
          </div>

          {/* Explore */}
          <div className="footer-explore-col" style={{ display: "flex", width: "167px", padding: "10px", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
            <div style={{ fontFamily: "CX80BOLD", fontSize: "18px", letterSpacing: "5.76px", color: t.titleColor, textTransform: "uppercase", marginBottom: "10px", marginTop: "10px", transition: "color 0.3s ease" }}>
              Explore
            </div>
            {exploreLinks.map(({ label, to }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", padding: "6px 0" }}>
                <NavLink to={to} className="footer-link-hover"
                  style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", color: t.linkColor, textDecoration: "none", transition: "color 0.3s ease" }}>
                  {label}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="desktop-only" style={{ width: "68px" }} />

          {/* Legal */}
          <div className="footer-legal-col" style={{ display: "flex", width: "168px", padding: "10px", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
            <div style={{ fontFamily: "CX80BOLD", fontSize: "18px", letterSpacing: "5.76px", color: t.titleColor, textTransform: "uppercase", marginBottom: "10px", marginTop: "10px", transition: "color 0.3s ease" }}>
              Legal
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "6px 0" }}>
              <NavLink to="/privacy-policy" className="footer-link-hover"
                style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", color: t.linkColor, textDecoration: "none", transition: "color 0.3s ease" }}>
                Privacy Policy
              </NavLink>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "6px 0" }}>
              <a href="#" className="footer-link-hover"
                style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", color: t.linkColor, textDecoration: "none", transition: "color 0.3s ease" }}>
                Terms &amp; Conditions
              </a>
            </div>
            <div style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", lineHeight: "24px", color: t.legalColor, padding: "4px 0", transition: "color 0.3s ease" }}>
              Licensed Real Estate Agent <br />RA86202 / RA84411
            </div>
            <div style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", lineHeight: "24px", color: t.legalColor, padding: "4px 0", transition: "color 0.3s ease" }}>
              ABN 29 691 543 914
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div style={{ marginTop: "auto", width: "100%" }}>
          <span style={{ fontFamily: "Söhne, sans-serif", fontSize: "16px", color: t.copyrightColor }}>
            © 2026 Find and Sign Buyer Advocate
          </span>
        </div>

      </footer>
    </>
  );
}