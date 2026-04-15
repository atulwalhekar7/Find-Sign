import bannerImg from "../assets/About.jpg";
import { NavLink } from "react-router-dom";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  white: "#FFFFFF",
} as const;

export default function About() {
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
      {/* Optional: Dark overlay for the whole image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.3)", // Lightened to make the text box stand out
        }}
      />
      
      {/* Text Container with Grey Background */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "750px",
          color: "white",
          // --- Added Grey Background Styles ---
          backgroundColor: "rgba(30, 30, 30, 0.85)", // Dark grey with slight transparency
          padding: "40px 60px",
          borderRadius: "12px",
          backdropFilter: "blur(4px)", // Adds a modern "glass" effect
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h1
          style={{
            fontFamily: "'GTSuper', serif",
            fontSize: "56px",
            fontWeight: 500,
            color: "#FFFFFF", // Changed to white for readability
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0,
          }}
        >
          About Us
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
            maxWidth: '600px', // Changed to maxWidth for responsiveness
            margin: '15px auto 0'
          }}
        >
          Find & Sign
        </p>
      </div>
    </section>
  );
}