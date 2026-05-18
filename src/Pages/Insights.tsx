import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";
import AboutSection from "../components/AboutSection";
import Image7 from "../components/Image7";
import { useTheme } from "../components/ThemeContext";

 import aboutInsightsImg from "../assets/niki-nakrani-buyers-agent-perth-property-expert-about-insights-find-and-sign.jpg";
import bannerImg from "../assets/client-outcomes-banner-find-and-sign-buyers-agent-australia.jpg";
import perthBlogImg from "../assets/niki.jpg";
import Blog2 from "../assets/niki.jpg";

// ── Theme ─────────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    pageBg:        "#121212",
    headingColor:  "#F9F9F9",
    dividerColor:  "#F9F9F9",
    subtitleColor: "#EAE5DF",
    cardBg:        "#1E1E1E",
    cardBorder:    "#69E4DC",
    titleColor:    "#F9F9F9",
    dateColor:     "#A0A0A0",
    descColor:     "#A0A0A0",
    btnColor:      "#69E4DC",
    btnBg:         "transparent",
    btnBgHover:    "#69E4DC",
    btnColorHover: "#073B2F",
  },
  light: {
    pageBg:        "#FFFFFF",
    headingColor:  "#073B2F",
    dividerColor:  "#073B2F",
    subtitleColor: "#000000",
    cardBg:        "#FFFFFF",
    cardBorder:    "#69E4DC",
    titleColor:    "#000000",
    dateColor:     "#6C5843",
    descColor:     "#757575",
    btnColor:      "#073B2F",
    btnBg:         "#FFFFFF",
    btnBgHover:    "#69E4DC",
    btnColorHover: "#073B2F",
  },
};

// ── Blog Card ─────────────────────────────────────────────────────────────────
const BlogCard = ({
  post,
  t,
}: {
  post: (typeof blogPosts)[0];
  t: typeof THEMES["light"];
}) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="blog-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(post.path)}
      style={{
        display: "flex",
        padding: "24px",
        gap: "24px",
        alignItems: "center",
        borderRadius: "16px",
        border: `2px solid ${t.cardBorder}`,
        background: t.cardBg,
        transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, background 0.3s ease",
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: hovered ? "0 10px 22px rgba(105, 228, 220, 0.96)" : "0 4px 12px rgba(0,0,0,0.03)",
        cursor: "pointer",
      }}
    >
      <div
        className="blog-card-img"
        style={{
          width: "145px",
          flexShrink: 0,
          alignSelf: "stretch",
          borderRadius: "20px",
          background: `url(${post.image}) lightgray 50% / cover no-repeat`,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", flex: 1 }}>
        <div
          tabIndex={0}
          style={{
            color: t.titleColor,
            fontVariantNumeric: "lining-nums proportional-nums",
            fontFamily: '"GT Super Display Medium"',
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "40px",
            letterSpacing: "-2%",
            margin: "0px",
            transition: "color 0.3s ease",
          }}
        >
          {post.title}
        </div>

        <div
          tabIndex={0}
          style={{
            color: t.dateColor,
            fontFamily: "CX80BOLD",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "14px",
            letterSpacing: "4.48px",
            transition: "color 0.3s ease",
          }}
        >
          {post.date}
        </div>

        <p
          tabIndex={0}
          style={{
            margin: "0px",
            color: t.descColor,
            fontFamily: "Söhne, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
            transition: "color 0.3s ease",
          }}
        >
          {post.description}
        </p>

        <button
          aria-label={`Read blog post about ${post.title}`}
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
            backgroundColor: hovered ? t.btnBgHover : t.btnBg,
            color: hovered ? t.btnColorHover : t.btnColor,
            fontFamily: "CX80",
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: "15px",
            letterSpacing: "4.8px",
            textTransform: "uppercase",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.2s ease",
            transform: hovered ? "translateY(-1px)" : "none",
            margin: "0",
          }}
        >
          Read Blog
        </button>
      </div>
    </div>
  );
};
  
// --- Main Component ---

const blogPosts = [
  {
    title: "Blog Post One",
    date: "01 march 2026",
    description: "Niki founded Find and Sign Buyer Advocate with a simple belief that every buyer deserves the same advantage he gave himself. Having built his own multi-million dollar property portfolio, he brings firsthand experience to every client engagement.",
    image: perthBlogImg,
    path: "/blog/best-suburbs-perth",
  },
  {
    title: "Blog Post Two",
    date: "01 april 2026",
    description:
      "Niki founded Find and Sign Buyer Advocate with a simple belief that every buyer deserves the same advantage he gave himself. Having built his own multi-million dollar property portfolio, he brings firsthand experience to every client engagement.",
    image: Blog2,
    path: "/blog/buyers-agent-perth",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function Insights() {
  const { theme } = useTheme();
  const t = THEMES[theme];

  return (
    <div style={{ backgroundColor: t.pageBg, fontFamily: "Söhne, sans-serif", transition: "background 0.3s ease" }}>

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero-banner"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
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
          <h1
            tabIndex={0}
            style={{ 
            fontFamily: 'GT Super Display Medium',
            fontSize: "64px",
            fontWeight: 500,
            color: "#FFF",
            lineHeight: "1.1",
            letterSpacing: "-2%",
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
       body1="These are insights drawn from our experience in the market. Real observations, informed perspectives, and practical guidance. When you engage with Find and Sign Buyer Advocate, you are gaining access to knowledge built through direct involvement and on-the-ground expertise. These articles are designed to help you understand the process, assess opportunities, and make more informed decisions."
      //  body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
     /> 

      {/* ── SECTION 3: Blogs ────────────────────────────────────────────── */}
      <section className="blogs-container" style={{ maxWidth: "1200px", margin: "0 auto ", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 
          tabIndex={0}
          style={{
            margin: "auto 24px",
            color: t.headingColor,
            fontFamily: "GT Super Display Medium",
            fontSize: "44px",
            fontWeight: 500,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            transition: "color 0.3s ease",
          }}
        >
          Blogs
          <div style={{ width: "160px", height: "1px", background: t.dividerColor, transition: "background 0.3s ease" }} />
        </h2>
        <p
          tabIndex={0}
          style={{
            color: t.subtitleColor,
            fontFamily: "Sohne",
            fontSize: "24px",
            fontWeight: 300,
            lineHeight: "36px",
            marginTop: "24px",
            textAlign: "center",
            marginBottom: "48px",
            transition: "color 0.3s ease",
          }}
        >
          Industry insights, Australia-wide expertise and more.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} t={t} />
          ))}
        </div>
      </section>

      <Image7 />
      <SimpleGetInTouch />
      <SimpleFooter />

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .page-hero-banner {
          aspect-ratio: 16 / 7;
          min-height: 60vh;
        }
        @media (max-width: 768px) {
          .page-hero-banner {
            aspect-ratio: 4 / 5;
            min-height: unset;
          }
        }

        .blogs-container { padding: 64px; }

        .blog-card { flex-direction: row; }

        @media (max-width: 900px) {
          .blogs-container { padding: 64px 20px; }
          .about-grid {
            flex-direction: column !important;
          }
          .about-grid > div {
            width: 100% !important;
          }
          h1 { font-size: 48px !important; line-height: 58px !important; }
          h2 { font-size: 38px !important; line-height: 48px !important; }
          section p { font-size: 18px !important; line-height: 28px !important; }
        }

        @media (max-width: 768px) {
          .blog-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .blog-card-img {
            width: 100% !important;
            height: 200px !important;
          }
          .blog-card > div > div:first-child {
             font-size: 28px !important;
          }
        }

        @media (max-width: 600px) {
          h1 { font-size: 48px !important; }
        }
      `}</style>
    </div>
  );
}