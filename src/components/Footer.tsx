import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";

import logo from "../assets/FS Primary Lockup_Gold.png";
import light from "../assets/Light Gold.svg"
import callIcon from "../assets/Icon.png";

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
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .footer {
          background: #073B2F;
          color: white;
          width: 100%;
          margin: 0 auto;
          display: flex;
          min-height: 682px;
          padding: 96px 196px;
          flex-direction: column;
          align-items: flex-start;
          gap: 66px;
          flex-shrink: 0;
        }

        /* ── EXTRA CONTENT FRAME (SOCIAL + COPYRIGHT) ── */
        .footer-extra-frame {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-left: 302px; /* Align precisely under the Contact column (Logo 167px + Gap 55px + Margin 120px), shifted further left */
          gap: 66px;
        }

        .footer-social { display: flex; align-items: center; gap: 32px; padding: 10px 0; }
        .social-link {
          display: flex;
          transition: opacity 0.2s;
        }
        .social-link:hover { opacity: 0.6; }
        .social-link img { width: 24px; height: 24px; }

        /* ── MAIN CONTENT GRID ── */
        .footer-grid {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 55px;
          flex-wrap: nowrap;
          width: 100%;
          height: 298px;
          flex-shrink: 0;
        }

        /* Logo Column */
        .footer-logo-container {
          width: 167px;
          height: 79px;
          flex-shrink: 0;
          aspect-ratio: 159/59;
          padding: 8px 0;
flex-direction: column;
align-items: flex-start;
gap: 10px;
          margin-left: -60px; /* Shift logo further to the left */
        }

        .footer-logo {
           width: 128px;
          height: 47px;
          object-fit: contain;
        }

        /* Contact Column */
        .footer-contact {
          display: flex;
          width: 267px;
          padding: 10px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          margin-left: 120px; /* Shift right from logo */
        }

        /* Explore Column */
        .footer-explore {
          display: flex;
          width: auto;
          min-width: 167px;
          padding: 10px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        /* Legal Column */
        .footer-legal {
          display: flex;
          width: 168px;
          padding: 10px 10px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          margin-left: 70px;
        }

        /* Text Styles */
        .section-title {
          font-family: "CX80BOLD";
          font-size: 18px;
          font-weight: 150;
          line-height: 18px;
          letter-spacing: 5.76px;
          color: #F9F9F9;
          // padding: 10px 0;
          text-transform: uppercase;
          margin-bottom: 10px;
          margin-top: 10px;
        }

        .footer-row {
          display: flex;
          align-items: center;
          padding: 6px 0;
        }

        .footer-text, .footer-link {
          font-family: "Söhne", sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #EAE5DF;
          text-decoration: none;
          white-space: nowrap;
        }
        .footer-link { text-decoration: underline; }

        .contact-label { margin-right: 8px; font-family: "SohneBuch";}

        .btn-book {
          display: flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          background: #69E4DC;
          border-radius: 8px;
          border: none;
          text-decoration: none;
          font-family: "CX80";
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.48px;
          color: #073B2F;
          text-transform: uppercase;
          margin-top: 12px;
          gap: 10px;
        }

        @keyframes call-vibrate {
          0%, 20%, 100% { transform: rotate(0deg); }
          3%, 9%, 15% { transform: rotate(-12deg); }
          6%, 12%, 18% { transform: rotate(12deg); }
        }
        .vibrate-icon {
          animation: call-vibrate 3s infinite ease-in-out;
        }


        .footer-legal-text {
          font-family: "Söhne", sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #EAE5DF;
          padding: 4px 0;
          white-space: nowrap;
        }

        .footer-copyright {
          font-family: "Söhne", sans-serif;
          font-size: 16px;
          color: white;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .footer { padding: 56px 76px; height: auto; min-height: auto; }
          .footer-extra-frame { padding-left: 10px; margin-top: 0; }
          .footer-grid { gap: 24px; flex-wrap: wrap; height: auto; }
          .footer-logo-container, .footer-contact, .footer-legal { margin-left: 0; padding: 10px; }
          .footer-logo-container { height: auto; aspect-ratio: auto; }
          .footer-contact { gap: 8px; }
        }
        @media (max-width: 1024px) {
          .footer { padding: 56px 40px; }
          .footer-grid { justify-content: flex-start; }
        }
        @media (max-width: 768px) {
          .footer { padding: 48px 20px; gap: 40px; }
          .footer-grid { flex-direction: column; gap: 24px; }
          .footer-contact, .footer-explore, .footer-legal, .footer-logo-container { 
            width: 100%; 
            margin-left: 0; 
            padding: 0 10px;
            height: auto;
            aspect-ratio: auto;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Main Grid Row */}
        <div className="footer-grid">

          {/* Logo */}
          <div style={{ width: "167px", flexShrink: 0, padding: "8px 0" }}>
            <NavLink to="/">
              <img src={logo} alt="Logo" style={{ width: "159px", height: "59px", objectFit: "contain" }} />
              <img src={light} alt="Logo" className="footer-logo" />
            </NavLink>
          </div>

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
            <a href="https://calendly.com/findandsignba-info" target="_blank" rel="noopener noreferrer" className="btn-book">
              <img src={callIcon} className="vibrate-icon" width="20" height="20" alt="" />
              Book a Call
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

        {/* Extra Frame - Positioned below Book a Call button, containing Social Icons and Copyright */}
        <div className="footer-extra-frame">
          <div className="footer-social">
            {socialIcons.map(({ label, img, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={img} alt={label} />
              </a>
            ))}
          </div>
          <span className="footer-copyright" tabIndex={0}>© 2026 Find and Sign Buyer Advocate</span>
        </div>

      </footer>
    </>
  );
}