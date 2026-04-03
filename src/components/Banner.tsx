const COLORS = {
  racingGreen: "#1B4332",
  aqua:        "#40C9A2",
  white:       "#FFFFFF",
} as const;

const FONTS = {
  display: "'Cormorant Garamond', Georgia, serif",
  body:    "'DM Sans', sans-serif",
} as const;

export default function HeroBanner() {
  return (
    <section style={{
      /* Full viewport — no margin, no padding, edge to edge */
      position: "relative",
      width: "100vw",
      height: "100vh",
      minHeight: "620px",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      /* Pull outside any parent padding */
      marginLeft: "calc(-50vw + 50%)",
    }}>

      {/* ── Background image — warm property photo ── */}
      <div style={{
        position: "relative",
        inset: 0,
        backgroundImage: `url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=90")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        animation: "kenBurns 14s ease-in-out infinite alternate",
      }}/>

      {/* ── Subtle dark overlay — preserves warm tones of image ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(
          160deg,
          rgba(0,0,0,0.04) 0%,
          rgba(0,0,0,0.18) 50%,
          rgba(0,0,0,0.46) 100%
        )`,
      }}/>

      {/* ── Content — bottom left ── */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        padding: "0 40px 68px",
        boxSizing: "border-box" as const,
      }}>
        <h1 style={{
          fontFamily: FONTS.display,
          fontWeight: 500,
          fontSize: "clamp(46px, 6.5vw, 82px)",
          color: COLORS.white,
          lineHeight: 1.06,
          margin: "0 0 32px",
          maxWidth: "700px",
          letterSpacing: "-0.01em",
        }}>
          The advantage<br />of being first.
        </h1>

        {/* Watch Brand Video button */}
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: FONTS.body,
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: COLORS.white,
            /* Semi-transparent bg like original */
            background: "rgba(30,30,30,0.45)",
            border: "1px solid rgba(255,255,255,0.35)",
            padding: "14px 26px",
            borderRadius: "2px",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            transition: "background 0.25s, border-color 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(64,201,162,0.3)";
            e.currentTarget.style.borderColor = COLORS.aqua;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(30,30,30,0.45)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
          }}
        >
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
            <path d="M0 0.5L9 5.5L0 10.5V0.5Z" fill="white"/>
          </svg>
          Watch the Brand Video
        </button>
      </div>

      {/* ── Scroll indicator — right edge, vertical ── */}
      <div style={{
        position: "absolute",
        right: "36px",
        bottom: "44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        zIndex: 2,
      }}>
        <div style={{
          width: "1px",
          height: "52px",
          background: "rgba(255,255,255,0.22)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%",
            height: "45%",
            background: "rgba(255,255,255,0.75)",
            animation: "scrollLine 2.2s ease-in-out infinite",
          }}/>
        </div>
        <span style={{
          fontFamily: FONTS.body,
          fontSize: "9px",
          fontWeight: 500,
          letterSpacing: "0.22em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.65)",
          writingMode: "vertical-rl" as const,
          transform: "rotate(180deg)",
        }}>Scroll</span>
      </div>
    </section>
  );
}