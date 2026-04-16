import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/FS Primary Lockup_Gold.png";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  white: "#FFFFFF",
};

const FONTS = {
  display: "'Cormorant Garamond', Georgia, serif",
  body: "'DM Sans', sans-serif",
};

const NAV_ITEMS = [
  { label: "About", to: "/about" },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

/* ── Logo ── */
function Logo({ isHome }: { isHome: boolean }) {
  return (
    <NavLink
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        textDecoration: "none",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "34px",
          width: "auto",
          objectFit: "contain",
          filter: isHome ? "brightness(0) invert(1)" : "none",
        }}
      />
    </NavLink>
  );
}

/* ── Navbar ── */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <style>{`
        .nav-grid {
          width: 100%;
          padding: 0 40px;
          height: 64px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          gap: 16px;
        }

        .logo-col {
          grid-column: span 3;
          display: flex;
          align-items: center;
        }

        .nav-col {
          grid-column: span 6;
          display: flex;
          justify-content: center;
        }

        .cta-col {
          grid-column: span 3;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 16px;
        }

        .desktop-nav {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 24px;
        }

        /* Tablet & Mobile */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: block !important;
          }

          .cta {
            display: none;
          }

          .logo-col {
            grid-column: span 6;
          }

          .nav-col {
            display: none;
          }

          .cta-col {
            grid-column: span 6;
          }
        }

        @media (max-width: 768px) {
          .nav-grid {
            padding: 0 20px;
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
        <div className="nav-grid">
          {/* Logo */}
          <div className="logo-col">
            <Logo isHome={isHome} />
          </div>

          {/* Desktop Nav */}
          <div className="nav-col">
            <ul className="desktop-nav">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    style={{
                      fontFamily: 'Söhne, "DM Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "rgb(27, 67, 50)",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Hamburger */}
          <div className="cta-col">
            <NavLink
              to="/contact"
              className="cta"
              style={{
                fontFamily: "CX80",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: COLORS.white,
                background: COLORS.aqua,
                padding: "11px 24px",
                borderRadius: "2px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Book a Call
            </NavLink>

            <button
              className="hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
              }}
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

        {/* Mobile Drawer */}
        {menuOpen && (
          <div
            style={{
              background: COLORS.white,
              padding: "12px 40px 24px",
              borderTop: "1px solid rgba(27,67,50,0.07)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  display: "block",
                  fontFamily: FONTS.body,
                  fontSize: "15px",
                  color: isActive ? COLORS.aqua : COLORS.racingGreen,
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
                fontFamily: FONTS.body,
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