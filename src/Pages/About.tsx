import bannerImg from "../assets/About.jpg";

export default function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",   // vertical center
        justifyContent: "center", // horizontal center
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
        }}
      />

      {/* ✅ CENTER BOX */}
     <div
  style={{
    position: "relative",
    zIndex: 2,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    width: "90%",              // 🔥 IMPORTANT (adds left-right space)
    maxWidth: "600px",         // keeps desktop size same

    margin: "0 auto",          // center

    backgroundColor: "rgba(30, 30, 30, 0.85)",
    padding: "40px 60px",
    borderRadius: "12px",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  }}
>        <h1
          style={{
            fontFamily: "'GTSuper', serif",
            fontSize: "56px",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            margin: 0,
          }}
        >
          About Us
        </h1>

        <p
          style={{
            color: "#CCCCCC",
            fontFamily: "Söhne",
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "36px",
            marginTop: "15px",
          }}
        >
          Find & Sign
        </p>
      </div>

      {/* ✅ RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          h1 {
            font-size: 40px !important;
            line-height: 48px !important;
          }

          p {
            font-size: 18px !important;
            line-height: 28px !important;
          }

          div[style*="padding: 40px 60px"] {
            padding: 24px 20px !important;
          }
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 32px !important;
            line-height: 40px !important;
          }

          p {
            font-size: 16px !important;
          }
        }
          @media (max-width: 900px) {
  div[style*="max-width: 600px"] {
    width: 92% !important;     /* 🔥 space from edges */
    padding: 24px 20px !important;
  }
}

@media (max-width: 600px) {
  div[style*="max-width: 600px"] {
    width: 94% !important;     /* 🔥 more breathing space */
  }
}
      `}</style>
    </section>
  );
}