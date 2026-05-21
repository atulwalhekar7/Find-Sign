import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/FS Primary Lockup_Gold.png";
import callIcon from "../assets/Icon.png";
import { useTheme } from "./ThemeContext";

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

/* ── Animated Sun/Moon toggle icon ── */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: `1.5px solid ${isDark ? "rgba(105,228,220,0.5)" : "rgba(7,59,47,0.2)"}`,
        background: isDark ? "rgba(105,228,220,0.08)" : "rgba(7,59,47,0.04)",
        cursor: "pointer",
        flexShrink: 0,
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        }}
      >
        {/* Sun icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke={COLORS.racingGreen} strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke={COLORS.racingGreen} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
        }}
      >
        {/* Moon icon */}
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="#69E4DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // ✅ Pull theme so we can react to dark/light in inline styles
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // ── Semantic color tokens that flip per theme ──
  const navBg       = isDark ? "#0a1f1a" : COLORS.white;
  const textColor   = isDark ? COLORS.aqua : COLORS.black;
  const drawerBg    = isDark ? "#0d2b23" : COLORS.white;
  const drawerBorder= isDark ? "rgba(105,228,220,0.12)" : "rgba(27,67,50,0.07)";
  // Hamburger lines: white in dark mode so they're visible on dark nav
  const hamburgerStroke = isDark ? COLORS.white : COLORS.racingGreen;
  // Drawer link text: aqua highlight in dark, racing-green in light

  const drawerActiveBg  = isDark ? "rgba(105,228,220,0.12)" : "#EAE5DF";


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
          justify-content: flex-start;
          box-sizing: border-box;
          padding: 24px 130px;
        }

     .nav-logo {
   width: 128px;
          height: 47px;
  object-fit: contain;
  display: block;
}

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-left: auto;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          width: auto;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 8px;
          font-family: "SohneBuch";
          color: ${COLORS.black};
          font-family: "SohneBuch"!important;
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease, background 0.2s ease;
          /* ✅ color is now set via inline style per theme */
        }

        .nav-link:hover,
        .nav-link:active,
        .nav-link.active {
          border-radius: var(--sds-size-radius-200, 8px);
          background: ${isDark ? "rgba(105,228,220,0.12)" : "#EAE5DF"};
          display: inline-flex;
          padding: var(--sds-size-space-200, 8px);
          justify-content: center;
          align-items: center;
          gap: var(--sds-size-space-200, 8px);
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
          padding: 12px 20px 24px;
          border-top: 1px solid ${drawerBorder};
        }

        .nav-drawer-link:hover,
        .nav-drawer-link:active,
        .nav-drawer-link.active {
          background: ${drawerActiveBg} !important;
          border-radius: 8px !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
        }

       .nav-drawer-link:hover,
.nav-drawer-link:active,
.nav-drawer-link.active {
  background: #EAE5DF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
        @keyframes call-vibrate {
          0%, 20%, 100% { transform: rotate(0deg); }
          3%, 9%, 15%   { transform: rotate(-12deg); }
          6%, 12%, 18%  { transform: rotate(12deg); }
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
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
            height: 47px;
          }
          .nav-links {
            display: none;
          }
          .nav-actions {
            gap: 12px;
          }
          .nav-cta {
            display: none;
          }
          .mobile-call-icon {
            display: flex;
          }
          .nav-hamburger {
            display: block;
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
          // ✅ Flips between dark and light background
          background: navBg,
          width: "100%",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.10)",
        }}
      >
        {/* ───── Top Bar ───── */}
        <div className="nav-inner">
          {/* Logo */}
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Find & Sign Buyer Advocate Logo"
              className="nav-logo"
            />
          </NavLink>

          {/* Actions */}
          <div className="nav-actions">
            {/* Desktop Links */}
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {/* ✅ color applied inline so it reacts to theme state */}
                  <NavLink
                    to={item.to}
                    className="nav-link"
                    style={{ color: textColor }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            {/* Mobile Call Icon */}
            <a
              href="https://calendly.com/findandsignba-info"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-call-icon"
              aria-label="Book a Call"
            >
              <img src={callIcon} className="vibrate-icon" width="16" height="16" alt="" />
            </a>

            {/* CTA */}
           <a
  href="https://calendly.com/findandsignba-info"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-cta" // The "Book a Call" button for desktop
>
  <img src={callIcon} className="vibrate-icon" width="20" height="20" alt="" />
  Book a Call
</a>

            {/* ✅ Hamburger — stroke now uses hamburgerStroke (white in dark, green in light) */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path
                    d="M5 5l12 12M5 17L17 5"
                    stroke={hamburgerStroke}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <line x1="3" y1="6"  x2="19" y2="6"  stroke={hamburgerStroke} strokeWidth="1.4" strokeLinecap="round"/>
                    <line x1="3" y1="11" x2="19" y2="11" stroke={hamburgerStroke} strokeWidth="1.4" strokeLinecap="round"/>
                    <line x1="3" y1="16" x2="19" y2="16" stroke={hamburgerStroke} strokeWidth="1.4" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ───── Mobile Drawer ───── */}
        {menuOpen && (
          <div
            className="nav-drawer"
            // ✅ Drawer background also flips with theme
            style={{ background: drawerBg }}
          >
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
                 color: COLORS.black, // Changed to match desktop view text color
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
  href="https://calendly.com/findandsignba-info"
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
