import { useNavigate } from "react-router-dom";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";
import AboutSection from "../components/AboutSection";

import aboutInsightsImg from "../assets/About Insights.jpg";
import bannerImg from "../assets/Insights_Banner.jpg";
import perthBlogImg from "../assets/Blogs/DSC06286.jpg";

// --- Helper Components ---

// --- Main Component ---

const blogPosts = [
  {
    title: "Best Suburbs in Perth for Property Investment in 2026",
    description: "Discover the best suburbs in Perth for property investment in 2026. Learn where to invest for high growth, rental yield, and long-term returns.",
    image: perthBlogImg,
    path: "/blog/best-suburbs-perth"
  },
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
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 40px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{  
          margin: "0 auto 12px",
  color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
  fontFamily: "GT Super Display Medium",
  fontSize: "44px",
  fontWeight: 500,
  lineHeight: "120%",
  letterSpacing: "-0.48px",
  textAlign: "center",
  borderBottom: "2px solid #073B2F",
  paddingBottom: "8px",
  width: "fit-content"
  }}>Blogs</h2>
      
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {blogPosts.map((post, index) => (
            <div key={index} style={{ border: "1px solid #EEE", borderRadius: "12px", padding: "24px", display: "flex", gap: "24px", alignItems: "center" }}>
              <img src={post.image} alt={post.title} style={{ width: "160px", height: "160px", objectFit: "cover", borderRadius: "8px" }} />
              <div style={{ flex: 1 }}>
<h3
  style={{
    color: "rgb(0, 0, 0)",
    
    fontVariantNumeric: "lining-nums proportional-nums",
    fontFamily: '"GT Super Display Medium"',
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "40px",
    letterSpacing: "-0.64px",
    margin: "0px",
  }}
>
  {post.title}
</h3>            
<p
  style={{
    margin: "0px",
    marginBottom: "20px",

    color: "rgb(117, 117, 117)",
    

    fontFamily: "Söhne, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",

    flex: "1 1 0%",
  }}
>
  {post.description}
</p>          
<button
  onClick={() => navigate(post.path)}
  style={{
    display: "flex",
    height: "48px",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,

    borderRadius: "8px",
    border: "1px solid #69E4DC",
    backgroundColor: "#ffffff",

    color: "#073B2F",
    fontFamily: "CX80",
    fontSize: "15px",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "4.8px",

    textTransform: "uppercase",
    cursor: "pointer",
    textDecoration: "none",

    transition: "background 0.2s ease, color 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#69E4DC";
    e.currentTarget.style.color = "#073B2F";
    e.currentTarget.style.borderColor = "#69E4DC";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#ffffff";
    e.currentTarget.style.color = "#073B2F";
    e.currentTarget.style.borderColor = "#69E4DC";
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
