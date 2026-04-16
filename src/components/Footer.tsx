import Logo from "../assets/FS Primary Lockup_Gold.png";

/* ================= SOCIAL ICONS ================= */

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7.2c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm5.8-8.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zM7 2c-2.76 0-5 2.24-5 5v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 18H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v9c0 2.21-1.79 4-4 4z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 17H6.5V9h2v8zM7.5 7.8c-.7 0-1.2-.6-1.2-1.3S6.8 5.2 7.5 5.2s1.2.6 1.2 1.3-.5 1.3-1.2 1.3zM18 17h-2v-4.3c0-1-.4-1.7-1.3-1.7-.8 0-1.3.6-1.3 1.7V17h-2V9h2v1.1c.4-.6 1.2-1.3 2.3-1.3 1.8 0 2.3 1.2 2.3 3V17z"/>
  </svg>
);

/* ================= SOCIAL LINKS ================= */

const socialIcons = [
  {
    label: "Facebook",
    Icon: FacebookIcon,
    url: "https://www.facebook.com/nakranipropertybuyers/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/niki-nakrani-13b269237/",
  },
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
        }

        .footer-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 80px 40px 40px;
        }

        /* ================= GRID ================= */
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 32px;
          row-gap: 40px;
          align-items: start;
        }

        .logo { grid-column: span 3; }
        .contact { grid-column: span 3; }
        .explore { grid-column: span 2; }
        .legal { grid-column: span 2; }

        .social {
          grid-column: span 2;
          display: flex;
          justify-content: flex-end;
          gap: 18px;
          align-items: center;
        }

        /* ================= TEXT ================= */
        .title {
          font-family: "CX80", "DM Sans", sans-serif;
          font-size: 13px;
          letter-spacing: 0.28em;
          margin-bottom: 16px;
          color: #F9F9F9;
        }

        .link {
          display: block;
          font-family: "Sohne", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: white;
          text-decoration: none;
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .contact-row {
          display: flex;
          gap: 6px;
          margin-bottom: 10px;
          font-size: 12px;
          font-family: "Sohne", sans-serif;
        }

        .contact-row a {
          color: white;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* ================= SOCIAL (FIXED) ================= */
        .social-link {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
  color: rgba(255, 255, 255, 0.85);
          transition: opacity 0.2s ease;
          
        }

        .social-link svg {
          width: 24px;
          height: 24px;
          display: block;
        }

        .social-link:hover {
          opacity: 0.7;
        }

        /* ================= BOTTOM ================= */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 70px;
          font-family: "Sohne", sans-serif;
          font-size: 13px;
          font-weight: 300;
        }

        /* ================= TABLET ================= */
        @media (max-width: 1024px) {
          .logo { grid-column: span 6; }
          .contact { grid-column: span 6; }
          .explore { grid-column: span 4; }
          .legal { grid-column: span 4; }
          .social { grid-column: span 4; justify-content: flex-start; }
        }

        /* ================= MOBILE ================= */
        @media (max-width: 768px) {
          .footer-container {
            padding: 60px 20px 30px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-grid">

            {/* LOGO */}
            <div className="logo">
              <img src={Logo} alt="logo" style={{ width: "150px" }} />
            </div>

            {/* CONTACT */}
            <div className="contact">
              <div className="title">CONTACT</div>

              <div className="contact-row">
                <span>T</span>
                <a href="tel:0431158233">0431 158 233</a>
              </div>

              <div className="contact-row">
                <span>E</span>
                <a href="mailto:niki@findandsignba.com.au">
                  niki@findandsignba.com.au
                </a>
              </div>

              <div className="contact-row">
                <span>W</span>
                <a href="https://findandsignba.com.au">
                  findandsignba.com.au
                </a>
              </div>
            </div>

            {/* EXPLORE */}
            <div className="explore">
              <div className="title">EXPLORE</div>
              <a className="link">About</a>
              <a className="link">Journeys</a>
              <a className="link">Services</a>
              <a className="link">Insights</a>
              <a className="link">Contact</a>
            </div>

            {/* LEGAL */}
            <div className="legal">
              <div className="title">LEGAL</div>
              <a className="link">Privacy Policy</a>
              <a className="link">Terms & Conditions</a>
            </div>

            {/* SOCIAL */}
            <div className="social">
              {socialIcons.map(({ label, Icon, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="footer-bottom">
            <span>ABN XXXXXXXXXX</span>
            <span>© 2026 Find and Sign Buyer Advocate</span>
          </div>

        </div>
      </footer>
    </>
  );
}