import bannerImg from "../assets/DSC06218.jpg";

export default function ClientOutcomes() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        padding: "0 20px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* ✅ RESPONSIVE CENTER BOX */}
      <div
        style={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",

          width: "90%",            // 🔥 prevents edge touching
          maxWidth: "800px",
          margin: "0 auto",

          padding: "60px 40px",
          backgroundColor: "rgba(33, 33, 33, 0.85)",
          borderRadius: "12px",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h1
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
          Client Outcomes
        </h1>

        <p
          style={{
            color: "#CCCCCC",
            fontFamily: "Söhne",
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "36px",
            maxWidth: "600px",
            margin: "20px auto 0",
          }}
        >
          Find & Sign
        </p>
      </div>

      {/* ✅ RESPONSIVE FIX */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="max-width: 800px"] {
            width: 92% !important;
            padding: 32px 20px !important;
          }

          h1 {
            font-size: 40px !important;
            line-height: 48px !important;
          }

          p {
            font-size: 18px !important;
            line-height: 28px !important;
          }
        }

        @media (max-width: 600px) {
          div[style*="max-width: 800px"] {
            width: 94% !important;
          }

          h1 {
            font-size: 32px !important;
            line-height: 40px !important;
          }

          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}