import bannerImg from "../assets/About.jpg";

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            background: "rgba(30,30,30,0.85)",
            padding: "40px 60px",
            borderRadius: "12px",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "56px", margin: 0 }}>About Us</h1>
          <p style={{ fontSize: "24px", marginTop: "15px", color: "#ccc" }}>
            Find & Sign
          </p>
        </div>
      </section>

      {/* STICKY SECTION (Image + Text) */}
      <section
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "1100px",
            width: "100%",
            padding: "40px",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Image */}
          <div style={{ flex: "1 1 400px" }}>
            <div
              style={{
                width: "100%",
                height: "250px",
                background: "#ddd",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "1 1 400px" }}>
            <p style={{ color: "#555", lineHeight: "1.6", fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>

      {/* SCROLLING SECTION (comes over sticky) */}
      <section
        style={{
          
          height: "100vh",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          position: "fixed",
        }}
      >
        <div
          style={{
            width: "80%",
            maxWidth: "1000px",
            height: "300px",
            background: "#ccc",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <span style={{ color: "#444" }}>Media / Video Section</span>
        </div>
      </section>
    </>
  );
}