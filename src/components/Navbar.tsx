import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/FS Primary Lockup_Gold.png";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  white: "#FFFFFF",
};

const NAV_ITEMS = [
  { label: "About", to: "/about" },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <style>{`
        /* ───────── NAV LAYOUT ───────── */
        .nav-inner {
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 196px;
          box-sizing: border-box;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        /* CTA */
        .nav-cta {
          display: flex;
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

        /* Tablet */
        @media (max-width: 1199px) {
          .nav-inner {
            padding: 0 48px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0 20px;
          }

          .nav-links {
            display: none !important;
          }

          .nav-cta {
            display: none !important;
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isHome ? "transparent" : COLORS.white,
          boxShadow: isHome ? "none" : "0 1px 20px rgba(0,0,0,0.08)",
          transition: "all 0.4s ease",
        }}
      >
        {/* ───── Top Bar ───── */}
        <div className="nav-inner">
          {/* Logo */}
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "34px",
                objectFit: "contain",
                filter: isHome ? "brightness(0) invert(1)" : "none",
              }}
            />
          </NavLink>

          {/* Desktop Links */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    fontFamily: 'Söhne, "DM Sans", sans-serif',
                    fontWeight: isActive ? 500 : 400,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: isActive
                      ? "#073B2F"
                      : isHome
                      ? "#FFFFFF"
                      : "#000",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s",
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* CTA */}
            <NavLink
              to="/contact"
              className="nav-cta"
              style={{
                fontFamily: "CX80",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "4.8px",
                textTransform: "uppercase",
                color: "#073B2F",
                background: "#76e4dc",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
              }}
            >
              Book a Call
            </NavLink>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <path
                    d="M5 5l12 12M5 17L17 5"
                    stroke={isHome ? COLORS.white : COLORS.racingGreen}
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
                      stroke={isHome ? COLORS.white : COLORS.racingGreen}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="11"
                      x2="19"
                      y2="11"
                      stroke={isHome ? COLORS.white : COLORS.racingGreen}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="16"
                      x2="19"
                      y2="16"
                      stroke={isHome ? COLORS.white : COLORS.racingGreen}
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
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  display: "block",
                  fontFamily: "'Söhne', 'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: isActive
                    ? COLORS.aqua
                    : COLORS.racingGreen,
                  fontWeight: isActive ? 500 : 400,
                  textDecoration: "none",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(27,67,50,0.06)",
                })}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-block",
                marginTop: "16px",
                fontFamily: "'Söhne', 'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: COLORS.white,
                background: COLORS.aqua,
                padding: "11px 24px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Book a Call
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}