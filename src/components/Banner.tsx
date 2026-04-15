import { NavLink } from "react-router-dom";
import { useState } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import logo from "../assets/FS Primary Lockup_Gold.png";
import heroVideo from "../assets/Interview Draft (2).mp4"; // 👈 update this path to your actual video file

const COLORS = {
  racingGreen: "#1B4332",
  aqua:        "#40C9A2",
  teal:        "#2dd4bf",
  white:       "#FFFFFF",
  textGray:    "#333333",
  overlay:     "rgba(0, 0, 0, 0.38)",
} as const;

const NAV_ITEMS = [
  { label: "About",           to: "/about"           },
  { label: "Services",        to: "/services"        },
  { label: "Client Outcomes", to: "/client-outcomes" },
  { label: "Insights",        to: "/insights"        },
  { label: "Contact",         to: "/contact"         },
] as const;

/* ─── Video Modal ─── */
function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          2000,
        background:      "rgba(0, 0, 0, 0.35)",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "20px",
      }}
    >
      {/* Stop click from closing when clicking the video itself */}
      <div
        onClick={e => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: "900px" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position:   "absolute",
            top:        "-40px",
            right:      0,
            background: "none",
            border:     "none",
            cursor:     "pointer",
            color:      "#fff",
            fontSize:   "28px",
            lineHeight: 1,
            padding:    "4px 8px",
          }}
          aria-label="Close video"
        >
          ✕
        </button>

        <video
          src={heroVideo}
          controls
          autoPlay
          style={{
            width:        "100%",
            borderRadius: "4px",
            display:      "block",
          }}
        />
      </div>
    </div>
  );
}

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
      {/* 12-column grid container */}
      <div className="grid-container" style={{ height: "64px" }}>
        <div className="nav-row" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <NavLink to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={logo} alt="Find & Sign" style={{ height: "34px", width: "auto", objectFit: "contain" }} />
            </NavLink>
          </div>

          {/* Nav links — desktop only */}
          <div className="desktop-nav" style={{ display: "flex", justifyContent: "center", flex: 1 }}>
            <ul style={{
              display:        "flex",
              gap:            "36px",
              listStyle:      "none",
              margin:         0,
              padding:        0,
            }}>
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    style={({ isActive }) => ({
                      fontFamily: 'Sohne, sans-serif',
                      fontWeight: isActive ? 500 : 400,
                      fontSize: "20px",
                      fontStyle: "normal",
                      lineHeight: "28px",
                      color: isActive ? "#073B2F" : "var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000))",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s, fontWeight 0.2s",
                    })}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flexShrink: 0 }}>
            <NavLink
              to="/contact"
              className="desktop-nav"
              style={{
                fontFamily:     "CX80",
                fontWeight:     700,
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
        </div>
      </div>

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
  const [videoOpen, setVideoOpen] = useState(false); // 👈 new state

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Söhne', 'DM Sans', sans-serif;
          background: #fff;
          overflow-x: hidden;
        }
        .page-wrapper { padding-top: 64px; }

        /* ─── 12-Column Grid System ─── */
        .grid-container {
          width: 100%;
          max-width: 100%;
          padding: 0 196px;
          margin: 0 auto;
        }
        .grid-row {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          align-items: center;
        }
        .col-1  { grid-column: span 1; }
        .col-2  { grid-column: span 2; }
        .col-3  { grid-column: span 3; }
        .col-4  { grid-column: span 4; }
        .col-5  { grid-column: span 5; }
        .col-6  { grid-column: span 6; }
        .col-7  { grid-column: span 7; }
        .col-8  { grid-column: span 8; }
        .col-9  { grid-column: span 9; }
        .col-10 { grid-column: span 10; }
        .col-11 { grid-column: span 11; }
        .col-12 { grid-column: span 12; }

        .hero-top {
          position:            relative;
          width:               100%;
          height:              610px;
          display:             flex;
          align-items:         center;
          justify-content:     center;
          text-align:          center;
          overflow:            hidden;
          background-image:    linear-gradient(${COLORS.overlay}, ${COLORS.overlay}), url(${bannerImg});
          background-size:     cover;
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
        .hero-title {
          font-family:          'GT Super Display Medium';
          font-size:            56px;
          font-weight:          500;
          color: var(--fs-white, var(--brand-utility-fs-white, #FFF));
          line-height:          64px;
          letter-spacing:       -1.12px;
          font-variant-numeric: lining-nums proportional-nums;
          align-self:           stretch;
        }
        .watch-btn {
          display:        flex;
          height:         48px;
          padding:        12px 16px;
          justify-content: center;
          align-items:    center;
          gap:            10px;
          font-family:    'CX80', sans-serif;
          font-weight:    700;
          lineHeight:     15px;
          letter-spacing: 4.8px;
          word-spacing:   8px;
          border-radius:  5px;
          border:         1px solid #69E4DC;
          background:     transparent;
          color:          white;
          cursor:         pointer;
          transition:     background 0.2s, color 0.2s;
        }
        .watch-btn:hover {
          background: rgba(105, 228, 220, 0.15);
        }
        .hero-bottom {
          padding:        72px 5%;
          display:        flex;
          flex-direction: column;
          align-items:    center;
          text-align:     center;
          background:     #F9F9F9;
        }
        .description {
          width:       1046px;
          max-width:   100%;
          color:       #000;
          text-align:  center;
          font-family: 'Sohne';
          font-size:   24px;
          font-weight: 300;
          line-height: 36px;
        }
        .find-out-btn {
          display:        flex;
          height:         48px;
          padding:        12px 16px;
          justify-content: center;
          align-items:    center;
          gap:            10px;
          flex-shrink:    0;
          border-radius:  8px;
          border:         1px solid #69E4DC;
          color:          #073B2F;
          font-family:    'CX80', sans-serif;
          font-size:      15px;
          font-weight:    700;
          line-height:    15px;
          letter-spacing: 4.8px;
          margin-top:     30px;
          background:     white;
          cursor:         pointer;
          transition:     background 0.2s, color 0.2s;
        }
        .find-out-btn:hover {
          background: #073B2F;
          color:      #ffffff;
        }
        @media (min-width: 769px) { .hamburger { display: none !important; } }
        @media (max-width: 1200px) {
          .grid-container { padding: 0 80px; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .grid-container { padding: 0 20px; }
        }
      `}</style>

      {/* ─── Video Modal ─── */}
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      <div className="page-wrapper">
        <Navbar />

        <section className="hero-top">
          <div className="content-wrap">
            <h1 className="hero-title">The advantage of being first.</h1>
            <button className="watch-btn" onClick={() => setVideoOpen(true)}>
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <path d="M9 5.5L0 11V0L9 5.5Z" fill="white"/>
              </svg>
              Watch the Video
            </button>
          </div>
        </section>

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