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
      {/* Dark overlay for the whole background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)", // Slightly lighter overlay to let image show
        }}
      />
      
      {/* Centered box with Grey Background */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          padding: "60px 40px",
          backgroundColor: "rgba(33, 33, 33, 0.85)", // The grey background
          borderRadius: "12px",
          backdropFilter: "blur(8px)", // Modern "glass" effect
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h1
          style={{
            fontFamily: "'GTSuper', serif",
            fontSize: "56px",
            fontWeight: 500,
            color: "#FFFFFF", // Changed from #000 to #FFF for readability
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0,
          }}
        >
          Client Outcomes
        </h1>
        <p
          style={{
            color: '#CCCCCC',
            textAlign: 'center',
            fontFamily: 'Söhne',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: '36px',
            maxWidth: '600px',
            margin: '20px auto 0'
          }}
        >
          Find & Sign
        </p>
      </div>
    </section>
  );
}