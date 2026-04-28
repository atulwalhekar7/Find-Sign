import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";
// import AboutSection from "../components/AboutSection";
import Image1 from "../components/Image1";

// import aboutInsightsImg from "../assets/About Insights.jpg";
import bannerImg from "../assets/Insights_Banner.jpg";
import perthBlogImg from "../assets/Blogs/DSC06286.jpg";

// --- Helper Components ---

const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(post.path)}
      style={{
        display: "flex",
        padding: "24px",
        gap: "24px",
        alignItems: "center",
        borderRadius: "16px",
        border: "2px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
        background: "var(--Brand-Utility-FS-WHITE, #FFF)",
        transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease",
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: hovered ? "0 10px 22px rgba(105, 228, 220, 0.96)" : "0 4px 12px rgba(0,0,0,0.03)",
        cursor: "pointer",
      }}
    >
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "160px",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div style={{ flex: 1 }}>
        <h3
          style={{
            color: "#000",
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
          }}
        >
          {post.description}
        </p>
        <button
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
            backgroundColor: hovered ? "#69E4DC" : "#ffffff",
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
        >
          View more
        </button>
      </div>
    </div>
  );
};

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
    image:bannerImg,
    path: "/blog/buyers-agent-perth"
  }
];


export default function Insights() {

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

     {/* <AboutSection
       imageSrc={aboutInsightsImg}
       heading="About Find & Sign"
      
       body1="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look."
       body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
     /> */}

      {/* ── SECTION 3: Blogs ────────────────────────────────────────────── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 40px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{  
          margin: "40px auto 24px",
  color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
  fontFamily: "GT Super Display Medium",
  fontSize: "44px",
  fontWeight: 500,
  lineHeight: "120%",
  letterSpacing: "-0.48px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px"
  }}>
    Blogs
    <div style={{ width: "160px", height: "1px", background: "#073B2F" }} />
  </h2>
  <p style={{
    color: "#000",
    fontFamily: "Sohne",
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "36px",
    marginTop: "24px",
    textAlign: "center",
    marginBottom: "48px"
  }}>
     Explore more about blogs.
  </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </section>
          <Image1/>
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
