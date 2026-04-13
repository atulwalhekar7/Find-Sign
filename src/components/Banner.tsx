
import { NavLink } from "react-router-dom";
import { useState } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import logo from "../assets/FS Primary Lockup_Gold.png";

const COLORS = {
  racingGreen: "#1B4332",
  aqua:        "#40C9A2",
  teal:        "#2dd4bf",
  white:       "#FFFFFF",
  textGray:    "#333333",
  overlay:     "rgba(0, 0, 0, 0.38)",
} as const;

/*
  Typography (from Figma):
  ─ Display / Headlines  →  GT Super Medium
  ─ Body B1/B2/B3        →  Söhne Leicht / Söhne Buch
  ─ Labels L1/L2         →  WE SIGNED IT (all-caps tracking)

  GT Super & Söhne are licensed fonts — loaded via your existing
  @font-face declarations in index.css / global stylesheet.
  If not yet added, place the @font-face rules in your global CSS:

  @font-face {
    font-family: 'GT Super';
    src: url('/fonts/GTSuperDisplay-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Söhne';
    src: url('/fonts/soehne-leicht.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Söhne';
    src: url('/fonts/soehne-buch.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'WE SIGNED IT';
    src: url('/fonts/WeSignedIt.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
*/

 

const NAV_ITEMS = [
  { label: "About",           to: "/about"           },
  { label: "Services",        to: "/services"        },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Insights",        to: "/insights"        },
  { label: "Contact",         to: "/contact"         },
] as const;

/* ─── Navbar ─── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position:   "fixed",
      top: 0, left: 0, right: 0,
      zIndex:     1000,
      background: COLORS.white,
      boxShadow:  "0 1px 20px rgba(0,0,0,0.08)",
      transition: "box-shadow 0.4s ease",
    }}>
      <div style={{
        width:           "100%",
        padding:         "0 40px",
        height:          "64px",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "space-between",
        gap:             "24px",
      }}>

        {/* Logo */}
        <NavLink to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <img src={logo} alt="Find & Sign" style={{ height: "34px", width: "auto", objectFit: "contain" }} />
        </NavLink>

        {/* Desktop nav links */}
        <ul style={{
          display:        "flex",
          gap:            "36px",
          listStyle:      "none",
          margin:         0,
          padding:        0,
          flex:           1,
          justifyContent: "center",
        }}>
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  fontFamily:     "'Söhne', 'DM Sans', sans-serif",
                  fontWeight:     400,
                  fontSize:       "14px",
                  color:          isActive ? COLORS.aqua : COLORS.racingGreen,
                  textDecoration: "none",
                  letterSpacing:  "0.02em",
                  transition:     "color 0.2s",
                })} 
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Book a Call CTA */}
        <NavLink
          to="/contact"
          style={{
            fontFamily:     "'Söhne', 'DM Sans', sans-serif",
            fontWeight:     600,
            fontSize:       "11px",
            letterSpacing:  "0.14em",
            textTransform:  "uppercase" as const,
            color:          COLORS.white,
            background:     COLORS.aqua,
            padding:        "11px 24px",
            borderRadius:   "2px",
            textDecoration: "none",
            whiteSpace:     "nowrap" as const,
            flexShrink:     0,
            transition:     "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Book a Call
        </NavLink>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display:    "none",
            background: "none",
            border:     "none",
            cursor:     "pointer",
            padding:    "4px",
            flexShrink: 0,
          }}
          className="hamburger"
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
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                display:        "block",
                fontFamily:     "'Söhne', 'DM Sans', sans-serif",
                fontSize:       "15px",
                color:          isActive ? COLORS.aqua : COLORS.racingGreen,
                fontWeight:     isActive ? 500 : 400,
                textDecoration: "none",
                padding:        "10px 0",
                borderBottom:   "1px solid rgba(27,67,50,0.06)",
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display:        "inline-block",
              marginTop:      "16px",
              fontFamily:     "'Söhne', 'DM Sans', sans-serif",
              fontWeight:     600,
              fontSize:       "11px",
              letterSpacing:  "0.14em",
              textTransform:  "uppercase" as const,
              color:          COLORS.white,
              background:     COLORS.aqua,
              padding:        "11px 24px",
              borderRadius:   "2px",
              textDecoration: "none",
            }}
          >
            Book a Call
          </NavLink>
        </div>
      )}
    </nav>
  );
}

/* ─── Page ─── */
export default function App() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Söhne', 'DM Sans', sans-serif;
          background: #fff;
          overflow-x: hidden;
        }

        /* Push content below fixed navbar */
        .page-wrapper { padding-top: 64px; }

        /* ── HERO ── */
        .hero-top {
          position:          relative;
          width:             100%;
          height:            610px;
          display:           flex;
          align-items:       center;
          justify-content:   center;
          text-align:        center;
          overflow:          hidden;
          background-image:  linear-gradient(${COLORS.overlay}, ${COLORS.overlay}), url(${bannerImg});
          background-size:   cover;
          background-position: center;
        }

        .content-wrap {
          position:       relative;
          z-index:        2;
          display:        flex;
          flex-direction: column;
          align-items:    center;
          gap:            24px;
        }

        /* D1 — GT Super Medium */
        .hero-title {
  font-family: "GT Super Display";
  font-size: 56px;
  font-style: normal;
  font-weight: 500;
  color: var(--FS-WHITE, var(--Brand-Utility-FS-WHITE, #FFF));
  line-height: 64px;
  letter-spacing: -1.12px;
  font-variant-numeric: lining-nums proportional-nums;

  align-self: stretch;
}

        /* L1 — WE SIGNED IT (label style) */
        .watch-btn {
  display: flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC);
  background: transparent;
    color: white;.description
}

        

        /* ── BOTTOM ── */
        .hero-bottom {
          padding:         72px 5%;
          background:      #fff;
          display:         flex;
          flex-direction:  column;
          align-items:     center;
          text-align:      center;
        }

        /* B1 — Söhne Leicht 24/36 */
       .description {
  width: 1046px;

  color: #000;
  text-align: center;

  font-family: Söhne;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
}

        /* L1 — WE SIGNED IT label style */
       .find-out-btn {
  display: flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC);

  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));

  font-family: "CX80 Trial VAR";
  font-size: 15px;
  font-style: normal;
  font-weight: 150;
  line-height: 15px;
  letter-spacing: 4.8px;
  margin-top: 30px;
  background: white;
}
  .find-out-btn:hover {
   background: #073B2F;
          color: #ffffff;
        }

        /* Hamburger hidden on desktop */
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>

      <div className="page-wrapper">
        <Navbar />

        {/* ── HERO ── */}
        <section className="hero-top">
          <div className="content-wrap">
            <h1 className="hero-title">The advantage of being first.</h1>
            <button className="watch-btn">
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <path d="M9 5.5L0 11V0L9 5.5Z" fill="white" />
              </svg>
              Watch the Video
            </button>
          </div>
        </section>

        {/* ── BOTTOM ── */}
        <section className="hero-bottom">
          <p className="description">
            Find &amp; Sign is a property buyer's advocate. We represent clients across Western Australia,
            identifying the right properties and securing them before they reach the wider market.
          </p>
          <button className="find-out-btn">Find Out More</button>
        </section>
      </div>
    </>
  );
}
