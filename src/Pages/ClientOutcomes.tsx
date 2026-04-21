import React from "react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";

import aboutContentImg from "../assets/DSC06081.jpg";
import bannerImg from "../assets/Client Outcomes_Banner.jpg";

// ── DATA ─────────────────────────────────────────────
const blogPosts = Array(6).fill({
  title: "Title",
  description:
    "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
});

const reviews = Array(6).fill({
  title: "Review title",
  body: "Review body",
  name: "Reviewer name",
  date: "Date",
});

// ── MAIN COMPONENT ───────────────────────────────────
export default function ClientOutcomes() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Söhne, sans-serif" }}>
      
      {/* ── HERO ───────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "750px",
            padding: "60px 40px",
            backgroundColor: "rgba(33,33,33,0.85)",
            borderRadius: "12px",
          }}
        >
          <h1 style={{ fontSize: "56px", color: "#FFF", margin: 0 }}>
            Client Outcomes
          </h1>
          <p style={{ color: "#CCC", fontSize: "24px", marginTop: 20 }}>
            Find & Sign
          </p>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────── */}
      <AboutSection
        imageSrc={aboutContentImg}
        heading="About Find & Sign"
        subheading="Subheading"
        body1="Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look."
        body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
      />

      {/* ── CLIENT OUTCOMES GRID ───────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        
        <div style={{ marginBottom: 32 }}>
<h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700 }}>Client Outcomes</h2>
          <p style={{ margin: "0 0 32px", fontSize: 14, color: "#383b3f" }}>Subheading</p>
        </div>

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {blogPosts.map((post, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #E5E5E5",
                borderRadius: 10,
                padding: 20,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                height: "100%",
              }}
            >
              {/* Image */}
              <div
              style={{
  display: "flex",
  width: "160px",
  height: "160px",
  minWidth: "160px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
background: "#eee",}}
              />

<h3
  style={{
    margin: 0,
    color: "#000",

    fontFamily: "GT Super Display",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "40px",
    letterSpacing: "-0.64px",

    fontVariantNumeric: "lining-nums proportional-nums",

    width: "229px",
  }}
>                     {post.title}
              </h3>

<p
  style={{
    margin: 0,
    width: "229px",
    color: "#757575",

    fontFamily: "Söhne",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  }}
>                {post.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ── GET IN TOUCH ───────────────────────────────── */}
      <SimpleGetInTouch />

      {/* ── FOOTER ───────────────────────────────── */}
      <SimpleFooter />

      {/* ── RESPONSIVE ───────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .grid-3 {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 500px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
          }

          h1 {
            font-size: 36px !important;
            line-height: 44px !important;
          }
        }
      `}</style>
    </div>
  );
}