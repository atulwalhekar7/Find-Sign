import React from "react";
import bannerImg from "../assets/About.jpg";

// --- Helper Components ---

const FadeUp = ({ children, delay = 0 }) => (
  <div style={{
    animation: `heroFadeIn 0.8s ease-out ${delay}s both`
  }}>
    {children}
  </div>
);

const InputField = ({ label, placeholder, multiline = false }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
    <label style={{ fontSize: 13, fontWeight: 500, color: "#333" }}>{label}</label>
    {multiline ? (
      <textarea
        placeholder={placeholder}
        style={{
          padding: "12px", borderRadius: 6, border: "1.5px solid #e0e0e0",
          fontFamily: "inherit", fontSize: 14, minHeight: 100, resize: "vertical"
        }}
      />
    ) : (
      <input
        type="text"
        placeholder={placeholder}
        style={{
          padding: "12px", borderRadius: 6, border: "1.5px solid #e0e0e0",
          fontFamily: "inherit", fontSize: 14
        }}
      />
    )}
  </div>
);

const FooterLinkList = ({ title, links }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 140 }}>
    <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#111" }}>{title}</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {links.map((link) => (
        <a key={link} href="#" style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>
          {link}
        </a>
      ))}
    </div>
  </div>
);

// --- Main Component ---

const blogPosts = Array(6).fill({
  title: "Title",
  description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
});

const longBody = "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Quis international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

export default function Insights() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Söhne, sans-serif" }}>
      
      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "90%",
            maxWidth: "750px",
            margin: "0 auto",
            padding: "60px 40px",
            backgroundColor: "rgba(33,33,33,0.85)",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <h1 style={{ fontSize: "56px", fontWeight: 500, color: "#FFF", lineHeight: "64px", letterSpacing: "-1.12px", margin: 0 }}>
            Insights
          </h1>
          <p style={{ color: "#CCCCCC", fontSize: "24px", fontWeight: 300, lineHeight: "36px", maxWidth: "600px", margin: "20px auto 0" }}>
            Find & Sign
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Featured Article ───────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div className="about-grid" style={{ display: "flex", flexDirection: "row", gap: 56, alignItems: "flex-start" }}>
          <FadeUp>
            <div style={{ flexShrink: 0, width: 484, height: 350, backgroundColor: "#E5E5E5", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div style={{ opacity: 0.2, fontSize: "40px" }}>🖼️</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, color: "#111" }}>Heading</h2>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "#999" }}>Subheading</p>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#333" }}>
                Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
              </p>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#333" }}>{longBody}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SECTION 3: Blogs ────────────────────────────────────────────── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 40px" }}>
        <h2 style={{ fontSize: "28px", margin: "0 0 8px 0" }}>Blogs</h2>
        <p style={{ color: "#888", marginBottom: "40px" }}>Subheading</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {blogPosts.map((post, index) => (
            <div key={index} style={{ border: "1px solid #EEE", borderRadius: "12px", padding: "24px", display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ width: "160px", height: "160px", backgroundColor: "#F0F0F0", borderRadius: "8px" }}></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "22px" }}>{post.title}</h3>
                <p style={{ color: "#666", marginBottom: "20px", maxWidth: "600px" }}>{post.description}</p>
                <button style={{ padding: "8px 24px", border: "1px solid #CCC", borderRadius: "6px", backgroundColor: "#F9F9F9", cursor: "pointer" }}>Button</button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "60px", color: "#666" }}>
          <span style={{ cursor: "pointer" }}>← Previous</span>
          <span style={{ backgroundColor: "#333", color: "#FFF", padding: "5px 12px", borderRadius: "4px" }}>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>67</span>
          <span>Next →</span>
        </div>
      </section>

      {/* ── SECTION 4: Get in touch ──────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 320,
          margin: "0 auto",
          padding: "72px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <FadeUp>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700, textAlign: "center" }}>Get in touch</h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <a href="#" style={{ fontSize: 14, color: "#0057ff", textDecoration: "underline" }}>Book a call</a>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div
            style={{
              width: 320,
              border: "1.5px solid #e0e0e0",
              borderRadius: 10,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              boxSizing: "border-box",
            }}
          >
            <InputField label="Name" placeholder="Value" />
            <InputField label="Surname" placeholder="Value" />
            <InputField label="Email" placeholder="Value" />
            <InputField label="Message" placeholder="Value" multiline />
            <button
              style={{
                padding: "12px",
                borderRadius: 6,
                border: "none",
                background: "#111",
                color: "#fff",
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                width: "100%",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#333")}
              onMouseLeave={e => (e.currentTarget.style.background = "#111")}
            >
              Submit
            </button>
          </div>
        </FadeUp>
      </section>

      {/* ── SECTION 5: Footer ────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #e0e0e0", padding: "56px 40px 32px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: 48,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 140 }}>
            <div style={{ width: 80, height: 28, background: "#e0e0e0", borderRadius: 4 }} />
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "IG", "YT", "FB", "IN"].map((s) => (
                <a key={s} href="#" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>{s}</a>
              ))}
            </div>
          </div>
          <FooterLinkList title="Use cases" links={["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"]} />
          <FooterLinkList title="Explore" links={["Design", "Prototyping", "Development features", "Design systems", "Collaboration features", "Design process", "FigJam"]} />
          <FooterLinkList title="Resources" links={["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers", "Resource library"]} />
        </div>
        <div
          style={{
            maxWidth: 1200,
            margin: "40px auto 0",
            paddingTop: 24,
            borderTop: "1px solid #eee",
            fontSize: 12,
            color: "#999",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© 2024 Company Name. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .about-grid {
            flex-direction: column !important;
          }
          .about-grid > div {
            width: 100% !important;
          }
        }

        @media (max-width: 500px) {
          h1 { font-size: 36px !important; line-height: 44px !important; }
        }
      `}</style>
    </div>
  );
}