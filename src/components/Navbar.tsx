import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/FS Primary Lockup_Gold.png";

const COLORS = {
  racingGreen: "#1B4332",
  aqua:        "#40C9A2",
  white:       "#FFFFFF",
} as const;

const FONTS = {
  display: "'Cormorant Garamond', Georgia, serif",
  body:    "'DM Sans', sans-serif",
} as const;

const NAV_ITEMS = [
  { label: "About",    to: "/about"           },
  { label: "Journeys", to: "/client-outcomes" },
  { label: "Services", to: "/services"        },
  { label: "Insights", to: "/insights"        },
  { label: "Contact",  to: "/contact"         },
] as const;

/* ── Logo ── */
function Logo() {
  const color = COLORS.racingGreen;
  return (
    <NavLink
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "9px",
    textDecoration: "none",
    flexShrink: 0,
  }}
>
  <img
    src={logo}
    alt="Logo"
    style={{
      height: "34px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</NavLink>
  );
}

/* ── Navbar ── */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const textColor = COLORS.racingGreen;

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: COLORS.white,
      boxShadow: "0 1px 20px rgba(0,0,0,0.08)",
      transition: "box-shadow 0.4s ease",
    }}>
      <div style={{
        /* Full width — no max-width clipping */
        width: "100%",
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}>

        <Logo />

        {/* Desktop nav */}
        <ul className="desktop-nav" style={{
          display: "flex",
          gap: "36px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          flex: 1,
          justifyContent: "center",
        }}>
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  fontFamily: FONTS.body,
                  fontWeight: 400,
                  fontSize: "14px",
                  color: isActive ? COLORS.aqua : textColor,
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

        {/* Book a Call — solid aqua, no border */}
        <NavLink
          to="/contact"
          style={{
            fontFamily: FONTS.body,
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: COLORS.white,
            background: COLORS.aqua,
            padding: "11px 24px",
            borderRadius: "2px",
            textDecoration: "none",
            whiteSpace: "nowrap" as const,
            flexShrink: 0,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Book a Call
        </NavLink>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(v => !v)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px", flexShrink: 0 }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <path d="M5 5l12 12M5 17L17 5" stroke={COLORS.racingGreen} strokeWidth="1.4" strokeLinecap="round"/>
              : <>
                  <line x1="3" y1="6"  x2="19" y2="6"  stroke={COLORS.racingGreen} strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke={COLORS.racingGreen} strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="3" y1="16" x2="19" y2="16" stroke={COLORS.racingGreen} strokeWidth="1.4" strokeLinecap="round"/>
                </>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ background: COLORS.white, padding: "12px 40px 24px", borderTop: "1px solid rgba(27,67,50,0.07)" }}>
          {NAV_ITEMS.map(item => (
            <NavLink key={item.label} to={item.to} onClick={() => setMenuOpen(false)}
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
            >{item.label}</NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block", marginTop: "16px",
              fontFamily: FONTS.body, fontWeight: 600, fontSize: "11px",
              letterSpacing: "0.14em", textTransform: "uppercase" as const,
              color: COLORS.white, background: COLORS.aqua,
              padding: "11px 24px", borderRadius: "2px", textDecoration: "none",
            }}
          >Book a Call</NavLink>
        </div>
      )}
    </nav>
  );
}