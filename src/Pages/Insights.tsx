import bannerImg from "../assets/About.jpg";
import { NavLink } from "react-router-dom";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  white: "#FFFFFF",
} as const;

export default function Insights() {
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
      {/* Dark background overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.3)", // Lighter overlay so central box pops
        }}
      />
      
      {/* Centered box with Grey Background */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "750px",
          // --- Added Grey Background Styles ---
          backgroundColor: "rgba(33, 33, 33, 0.85)", // Dark semi-transparent grey
          padding: "60px 40px", // Breathing room for text
          borderRadius: "12px",
          backdropFilter: "blur(8px)", // Modern glass effect matching your style
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontFamily: "'GTSuper', serif",
            fontSize: "56px",
            fontWeight: 500,
            color: "#FFF", // Changed to white for visibility
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0,
          }}
        >
          Insights
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
            maxWidth: '600px', // Using maxWidth for better layout
            margin: '20px auto 0'
          }}
        >
          Find & Sign
        </p>
      </div>
    </section>
  );
}