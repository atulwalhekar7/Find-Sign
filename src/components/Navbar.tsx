import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/FS Primary Lockup_Gold.png";
import callIcon from "../assets/Icon.png";

const COLORS = {
  racingGreen: "#073B2F",
  aqua: "#69E4DC",
  black: "#000000",
  white: "#FFFFFF",
};

const NAV_ITEMS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        /* ───────── NAV LAYOUT ───────── */
        .nav-inner {
  width: 100%;
  max-width: 1512px;
  margin: 0 auto;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24px 130px;
}

     .nav-logo {
   width: 159px !important;
          height: 59px !important;
  object-fit: contain;
  display: block;
}

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 68px;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 558px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 8px;
          color: ${COLORS.black};
          font-family: "SohneBuch";
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .nav-link:hover,
        .nav-link:active,
        .nav-link.active {
          border-radius: var(--sds-size-radius-200);
          background: #EAE5DF;
          display: inline-flex;
          padding: var(--sds-size-space-200);
          justify-content: center;
          align-items: center;
          gap: var(--sds-size-space-200);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        /* CTA */
        .nav-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 12px 24px;
          border-radius: 8px;
          background: ${COLORS.aqua};
          color: ${COLORS.racingGreen};
          font-family: "CX80";
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.48px;
          text-decoration: none;
          text-transform: uppercase;
          white-space: nowrap;
          gap: 10px;
        }

        .mobile-call-icon {
          display: none;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${COLORS.white};
          position: relative;
          box-sizing: border-box;
          border: 1px solid rgba(105, 228, 220, 0.3);
        }

        .mobile-call-icon::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: conic-gradient(from 0deg, transparent, ${COLORS.aqua}, transparent 40%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: rotate-border 2s linear infinite;
          pointer-events: none;
        }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        /* Mobile drawer */
        .nav-drawer {
          display: none;
          background: ${COLORS.white};
          padding: 12px 20px 24px;
          border-top: 1px solid rgba(27,67,50,0.07);
        }

       .nav-drawer-link:hover,
.nav-drawer-link:active,
.nav-drawer-link.active {
  background: #EAE5DF !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
}
        @keyframes call-vibrate {
          0%, 20%, 100% { transform: rotate(0deg); }
          3%, 9%, 15% { transform: rotate(-12deg); }
          6%, 12%, 18% { transform: rotate(12deg); }
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .vibrate-icon {
          animation: call-vibrate 3s infinite ease-in-out;
        }

        /* Tablet */
        @media (max-width: 1199px) {
          .nav-inner {
            padding: 24px 48px;
          }

          .nav-actions {
            gap: 36px;
          }

          .nav-links {
            width: auto;
            gap: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .nav-inner {
            height: 80px;
            padding: 24px 20px;
          }

          .nav-logo {
            width: 128px;
            height: 47px !important;
          }

          .nav-links {
            display: none !important;
          }

          .nav-actions {
            gap: 12px;
          }

          .nav-cta {
            display: none !important;
          }

          .mobile-call-icon {
            display: flex !important;
          }

          .nav-hamburger {
            display: block !important;
          }

          .nav-drawer {
            display: block;
          }
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: COLORS.white,
          width: "100%",
          transition: "all 0.4s ease",
boxShadow: "0 4px 20px rgba(0, 0, 0, 0.10)"
        }}
      >
        {/* ───── Top Bar ───── */}
        <div className="nav-inner">
          {/* Logo */}
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo} // The logo image source
              alt="Find & Sign Buyer Advocate Logo" // Descriptive alt text for the logo
              className="nav-logo"
            />
          </NavLink>

          {/* CTA + Hamburger */}
          <div className="nav-actions">
            {/* Desktop Links */}
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.to} className="nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Call Icon (outside drawer, near hamburger) */}
            <a
              href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-call-icon"
              aria-label="Book a Call"
            >
              <img src={callIcon} className="vibrate-icon" width="16" height="16" alt="" />
            </a>

            {/* CTA */}
           <a
  href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-cta" // The "Book a Call" button for desktop
>
  <img src={callIcon} className="vibrate-icon" width="20" height="20" alt="" />
  Book a Call
</a>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"} // Dynamic aria-label for screen readers
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"> {/* Hide decorative SVG from screen readers */}
                {menuOpen ? (
                  <path
                    d="M5 5l12 12M5 17L17 5"
                    stroke={COLORS.racingGreen}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <line
                      x1="3"
                      y1="6"
                      x2="19"
                      y2="6"
                      stroke={COLORS.racingGreen}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="11"
                      x2="19"
                      y2="11"
                      stroke={COLORS.racingGreen}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="16"
                      x2="19"
                      y2="16"
                      stroke={COLORS.racingGreen}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ───── Mobile Drawer ───── */}
        {menuOpen && (
          <div className="nav-drawer">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="nav-drawer-link"
                onClick={() => setMenuOpen(false)}
               style={({ isActive }) => ({
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "'SohneBuch'",
  fontSize: "15px",
  color: isActive ? COLORS.aqua : COLORS.racingGreen,
  fontWeight: isActive ? 500 : 400,
  textDecoration: "none",
  padding: "10px 12px",
  borderBottom: "1px solid rgba(27,67,50,0.06)",
})}
              >
                {item.label}
              </NavLink>
            ))}

           <a
  href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a Call" // Accessible label for the link
  onClick={() => setMenuOpen(false)}
 style={{
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "16px",
  height: "48px",
  padding: "12px 24px",
  borderRadius: "8px",
  background: COLORS.aqua,
  color: COLORS.racingGreen,
  fontFamily: "CX80",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: "15px",
  letterSpacing: "4.8px",
  textDecoration: "none",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
}}
>
  <img src={callIcon} className="vibrate-icon" width="18" height="18" alt="" aria-hidden="true" />
  Book a Call
</a>
          </div>
        )}
      </nav>
    </>
  );
}
