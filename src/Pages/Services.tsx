import bannerImg from "../assets/DSC06057.jpg";
import { NavLink } from "react-router-dom";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  white: "#FFFFFF",
} as const;

export default function Services() {
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
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
        }}
      />
      
      {/* Centered content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "700px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontFamily: "'GTSuper', serif",
            fontSize: '56px',
            fontWeight: 500,
            color: '#FFF',
            lineHeight: '64px',
            letterSpacing: '-1.12px',
            fontVariantNumeric: 'lining-nums proportional-nums',
            alignSelf: 'stretch'
          }}
        >
          Comprehensive Legal Solutions
        </h1>
      </div>
    </section>
  );
}

