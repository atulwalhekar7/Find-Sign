import { NavLink } from "react-router-dom";

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
  { label: "Tiktok", img: tiIcon, url: " https://www.tiktok.com/@findandsignba/" },
  { label: "Google", img: goIcon, url: "https://www.google.com/search?kgmid=/g/11vyhyd916&hl=en-IN&q=Find+and+Sign+Buyer+Advocate" },
];

const exploreLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .footer {
          background: #073B2F;
          color: white;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 96px 0;
          gap: 66px;
        }

        /* ── 4K FIX ONLY: inner wrapper caps content width to match navbar ── */
        .footer-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 196px;
          display: flex;
          flex-direction: column;
          gap: 66px;
        }

        /* ── EXTRA CONTENT FRAME (SOCIAL + COPYRIGHT) ── */
        .footer-extra-frame {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-left: 302px;
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
          width: 100%;
          max-width: 1440px; 
          display: flex;
          justify-content: space-between; 
          align-items: flex-start;
          gap: 55px;
          margin: 0 auto; 
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
          margin-left: -60px;
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
          margin-left: 120px;
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

        /* ── RESPONSIVE — ALL ORIGINAL, UNTOUCHED ── */
        @media (max-width: 1200px) {
          .footer { padding: 56px 76px; height: auto; min-height: auto; }
          .footer-inner { padding: 0; }
          .footer-extra-frame { padding-left: 10px; margin-top: 0; }
          .footer-grid { gap: 24px; flex-wrap: wrap; height: auto; }
          .footer-logo-container, .footer-contact, .footer-legal { margin-left: 0; padding: 10px; }
          .footer-logo-container { height: auto; aspect-ratio: auto; }
          .footer-contact { gap: 8px; }
        }
        @media (max-width: 1024px) {
          .footer { padding: 56px 40px; }
          .footer-inner { padding: 0; }
          .footer-grid { justify-content: flex-start; }
        }
        @media (max-width: 768px) {
          .footer { padding: 48px 20px; gap: 40px; }
          .footer-inner { padding: 0; }
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
        {/* ── 4K FIX: single inner wrapper aligns content with navbar ── */}
        <div className="footer-inner">

          {/* Main Grid Row */}
          <div className="footer-grid">
            {/* Logo */}
            <div className="footer-logo-container">
              <NavLink to="/">
                <img src={light} alt="Logo" className="footer-logo" />
              </NavLink>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <div className="section-title" tabIndex={0}>Contact</div>
              <div className="footer-row">
                <span className="contact-label" tabIndex={0}>T</span>
                <a className="footer-link" href="tel:0431158233">0431 158 233</a>
              </div>
              <div className="footer-row">
                <span className="contact-label" tabIndex={0}>E</span>
                <a className="footer-link" href="mailto:niki@findandsignba.com.au">info@findandsignba.com.au </a>
              </div>
              <div style={{width:"93px", display: "flex", padding:"10px", alignItems: "center", gap: "10px"}}></div>
              <a href="https://calendly.com/findandsignba-info" target="_blank" rel="noopener noreferrer" className="btn-book">
                <img src={callIcon} className="vibrate-icon" width="20" height="20" alt="" />
                Book a Call
              </a>
            </div>

            {/* Explore */}
            <div className="footer-explore">
              <div className="section-title" tabIndex={0}>Explore</div>
              {exploreLinks.map(({ label, to }) => (
                <div className="footer-row" key={label}>
                  <NavLink to={to} className="footer-text">{label}</NavLink>
                </div>
              ))}
            </div>

            {/* Legal */}
            <div className="footer-legal">
              <div className="section-title" tabIndex={0}>Legal</div>
              <div className="footer-row">
                <NavLink to="/privacy-policy" className="footer-text">
                  Privacy Policy
                </NavLink>
              </div>
<div className="footer-row">
  <NavLink to="/terms-and-conditions" className="footer-text">
    Terms & Conditions
  </NavLink>
</div>              <div className="footer-legal-text" tabIndex={0}>
                Licensed Real Estate Agent <br/>
                RA86202 / RA84411
              </div>
              <div className="footer-legal-text" tabIndex={0}>ABN 29 691 543 914</div>
            </div>
          </div>

          {/* Extra Frame - Social Icons and Copyright */}
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

        </div>
      </footer>
    </>
  );
}