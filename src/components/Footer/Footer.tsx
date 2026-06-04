import { NavLink } from "react-router-dom";

import logo from "../../assets/FS Primary Lockup_Gold.png";
import light from "../../assets/Light Gold.svg";
import callIcon from "../../assets/Icon.png";

import fbIcon from "../../assets/icon/fb.svg";
import igIcon from "../../assets/icon/Instagram.svg";
import liIcon from "../../assets/icon/LinkedIn.svg";
import tiIcon from "../../assets/icon/Tiktok.svg";
import goIcon from "../../assets/icon/Google.svg";

import "./Footer.css";

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
              <a className="footer-link" href="mailto:niki@findandsignba.com.au">info@findandsignba.com.au</a>
            </div>
            <div style={{ width: "93px", display: "flex", padding: "10px", alignItems: "center", gap: "10px" }}></div>
            <a
              href="https://calendly.com/findandsignba-info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book"
            >
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
            </div>
            <div className="footer-legal-text" tabIndex={0}>
              Licensed Real Estate Agent <br />
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
  );
}