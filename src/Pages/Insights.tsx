import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";
import aboutContentImg from "../assets/DSC06081.jpg";
import aboutInsightsImg from "../assets/About Insights.jpg";
import bannerImg from "../assets/Insights_Banner.jpg";

// --- Helper Components ---







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

     <AboutSection
       imageSrc={aboutInsightsImg}
       heading="About Find & Sign"
       subheading="Subheading"
       body1="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look."
       body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
     />

      {/* ── SECTION 3: Blogs ────────────────────────────────────────────── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 40px" }}>
        <h2 style={{  margin: 0,
  color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
  fontFamily: "GT Super Display Medium",
  fontSize: "44px",
  fontWeight: 500,
  lineHeight: "120%",
  letterSpacing: "-0.48px", }}>Blogs</h2>
       <p
  style={{
    margin: "0 0 16px 0",

    fontFamily: "'Söhne', sans-serif",
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "120%",

    color: "#888888",
  }}
>
  Subheading
</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {blogPosts.map((post, index) => (
            <div key={index} style={{ border: "1px solid #EEE", borderRadius: "12px", padding: "24px", display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ width: "160px", height: "160px", backgroundColor: "#F0F0F0", borderRadius: "8px" }}></div>
              <div style={{ flex: 1 }}>
<h3
  style={{
    margin: "0 0 10px 0",

   color: "var(--sds-color-text-default-default, #111)",

  fontFamily: "'GTSuper'",
  fontSize: "20px",     // fixed
  fontWeight: 300,      // fixed

    lineHeight: "120%",
    letterSpacing: "-0.48px",

    alignSelf: "stretch",
  }}
>
  {post.title}
</h3>              
<p
  style={{
    marginBottom: "20px",

    color: "var(--sds-color-text-default-secondary, #666)",

    fontFamily: "'Söhne', sans-serif",
    fontSize: "16px", // ✅ fixed (replace 300)
    fontStyle: "normal",
    fontWeight: "var(--sds-typography-body-font-weight-regular, 400)",

    lineHeight: "140%",
    width: "100%",

    maxWidth: "600px", // keep your original constraint
  }}
>
  {post.description}
</p>                
<button style={{ padding: "8px 24px", border: "1px solid #d1d0d0", borderRadius: "6px", backgroundColor: "#918d8d", cursor: "pointer" }}>Button</button>
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

      <SimpleGetInTouch />
      <SimpleFooter />

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
