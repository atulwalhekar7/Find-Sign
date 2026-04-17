import Logo from "../assets/FS Primary Lockup_Gold.png";

import fbIcon from "../assets/Vector (2).png";
import igIcon from "../assets/Instagram (2).png";
import liIcon from "../assets/Vector(1).png";

const socialIcons = [
  { label: "Facebook", img: fbIcon, url: "https://www.facebook.com/nakranipropertybuyers/" },
  { label: "Instagram", img: igIcon, url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" },
  { label: "LinkedIn", img: liIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },
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
          position: relative;
          overflow: hidden;
        }

        /* ✅ WHITE SHIMMER */
        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.06),
            transparent
          );
          transform: translateX(-100%);
          animation: shimmer 5s infinite;
        }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .footer-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 80px 40px 48px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 24px;
          row-gap: 40px;
          align-items: start;
        }

        .logo    { grid-column: 1 / span 2; }
        .contact { grid-column: 3 / span 3; }
        .explore { grid-column: 6 / span 2; }
        .legal   { grid-column: 8 / span 2; }

        .social {
          grid-column: 11 / span 2;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 18px;
        }

        .title {
          font-family: "CX80";
          font-size: 18px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 5.76px;
          margin-bottom: 16px;
          color: #F9F9F9;
        }

        /* ✅ POPUP + POINTER */
        .link {
          display: block;
          font-family: "Sohne", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: white;
          text-decoration: none;
          margin-bottom: 10px;
          line-height: 1.6;

          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .link:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .contact-row {
          display: flex;
          gap: 6px;
          margin-bottom: 10px;
          font-size: 12px;
          font-family: "Sohne", sans-serif;
          font-weight: 300;
        }

        .contact-row a {
          color: white;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .social-link img {
          width: 24px;
          height: 24px;
        }

        .social-link:hover {
          opacity: 0.6;
        }

        /* ✅ EXACT FIGMA TEXT STYLING */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 80px;
          width: 100%;
        }

        .footer-bottom span:first-child {
          color: #F9F9F9;
          font-family: "Sohne", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
        }

        .footer-bottom span:last-child {
          color: #F9F9F9;
          font-family: "Sohne", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
        }

        .copyright {
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .footer-container { padding: 60px 20px 32px; }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 32px;
          }

          .logo    { grid-column: 1 / span 2; }
          .contact { grid-column: 1 / span 2; }
          .explore { grid-column: 1 / span 1; }
          .legal   { grid-column: 2 / span 1; }
          .social  { grid-column: 1 / span 2; }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            margin-top: 48px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">

            <div className="logo">
              <img src={Logo} alt="Find and Sign logo" style={{ width: "120px" }} />
            </div>

            <div className="contact">
              <div className="title">CONTACT</div>
              <div className="contact-row">
                <span>T</span>
                <a href="tel:0431158233">0431 158 233</a>
              </div>
              <div className="contact-row">
                <span>E</span>
                <a href="mailto:niki@findandsignba.com.au">niki@findandsignba.com.au</a>
              </div>
              <div className="contact-row">
                <span>W</span>
                <a href="https://findandsignba.com.au">findandsignba.com.au</a>
              </div>
            </div>

            <div className="explore">
              <div className="title">EXPLORE</div>
              <a className="link">About</a>
              <a className="link">Journeys</a>
              <a className="link">Services</a>
              <a className="link">Insights</a>
              <a className="link">Contact</a>
            </div>

            <div className="legal">
              <div className="title">LEGAL</div>
              <a className="link">Privacy Policy</a>
              <a className="link">Terms & Conditions</a>
            </div>

            <div className="social">
              {socialIcons.map(({ label, img, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={img} alt={label} />
                </a>
              ))}
            </div>

          </div>

          <div className="footer-bottom">
            <span>ABN XXXXXXXXXX</span>
            <span className="copyright">© 2026 Find and Sign Buyer Advocate</span>
          </div>

        </div>
      </footer>
    </>
  );
}