import { useNavigate } from "react-router-dom";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/Footer";
import AboutSection from "../components/AboutSection";

import aboutInsightsImg from "../assets/About Insights.jpg";
import bannerImg from "../assets/Insights_Banner.jpg";
import perthBlogImg from "../assets/Blogs/DSC06286.jpg";

// --- Helper Components ---

// --- Main Component ---

const blogPosts = [
  {
    title: "Your Ultimate Guide to Hiring a Buyer’s Agent in Perth",
    description: "Buying property in Perth is one of the biggest financial decisions you’ll ever make. Whether you're a first-home buyer, upgrading your family home, or building an investment portfolio, the process can feel overwhelming.",
    image: perthBlogImg,
    path: "/blog/buyers-agent-perth"
  }
];


export default function Insights() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Söhne, sans-serif" }}>
      
      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
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
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",

            animation: "heroFadeIn 0.8s ease both",
          }}
        >
<h1 style={{ 
            fontFamily: 'GT Super Display Medium',
            fontSize: "64px",
            fontWeight: 500,
            color: "#FFF",
            lineHeight: "1.1",
            letterSpacing: "-1.28px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0 
          }}>
            Insights
          </h1>
          <p style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 300, lineHeight: "1.5", margin: "24px auto 0", opacity: 0.9 }}>
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

    fontFamily: 'Söhne',
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
              <img src={post.image} alt={post.title} style={{ width: "160px", height: "160px", objectFit: "cover", borderRadius: "8px" }} />
              <div style={{ flex: 1 }}>
<h3
  style={{
    margin: "0 0 10px 0",

   color: "var(--sds-color-text-default-default, #111)",

  fontFamily: "GT Super Display Medium",
  fontSize: "20px",     // fixed
  fontWeight: 500,      // fixed

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

    // fontFamily: 'Söhne',
    fontSize: "16px", // ✅ fixed (replace 300)
    fontStyle: "normal",
    fontWeight: 400,

    lineHeight: "140%",
    width: "100%",

    maxWidth: "600px", // keep your original constraint
  }}
>
  {post.description}
</p>                
<button 
  onClick={() => navigate(post.path)}
  style={{ 
    padding: "12px 32px", 
    border: "none", 
    borderRadius: "6px", 
    backgroundColor: "#073B2F", 
    color: "#FFF", 
    cursor: "pointer",
    fontFamily: 'CX80',
    fontWeight: 400
  }}
>
  View more
</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SimpleGetInTouch />
      <SimpleFooter />

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .about-grid {
            flex-direction: column !important;
          }
          .about-grid > div {
            width: 100% !important;
          }
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
        }

        @media (max-width: 600px) {
          h1 { font-size: 36px !important; }
        }
      `}</style>
    </div>
  );
}
