import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/FS Primary Lockup_Gold.png";

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
          padding: 24px 196px;
          box-sizing: border-box;
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
          font-family: "Sohne", "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: ${COLORS.racingGreen};
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
          font-family: "CX80", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          text-decoration: none;
          text-transform: uppercase;
          white-space: nowrap;
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
            padding: 0 20px;
          }

          .nav-logo {
            width: 108px;
            height: auto;
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
        }}
      >
        {/* ───── Top Bar ───── */}
        <div className="nav-inner">
          {/* Logo */}
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
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

            {/* CTA */}
            <NavLink
              to="/contact"
              className="nav-cta"
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
