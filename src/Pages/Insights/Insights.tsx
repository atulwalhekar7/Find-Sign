import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleGetInTouch from "../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../components/Footer/Footer";
import AboutSection from "../../components/AboutSection";
import Image7 from "../../components/Image7/Image7";
import { useTheme } from "../../components/ThemeContext";
import "./Insights.css";

import aboutInsightsImg from "../../assets/perth-buyer-advocate-property-insights.jpg";
import bannerImg from "../../assets/buyer-advocate-perth-australia-agent-property.jpg";
import perthBlogImg from "../../assets/Best Suburbs in Perth for Property.jpg";
import Blog2 from "../../assets/buyer-agent-perth-australia-find-and-sign.jpg";
import Blog3 from "../../assets/find-and-sign-buyer-advocate-blog3.png";
import Blog4 from "../../assets/juneBlog.jpeg";

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

// ── Blog posts data ───────────────────────────────────────────────────────────
const blogPosts = [
 
  {
  title: "How Can I Find a Trustworthy Buyers Advocate in Perth?",
  date: "01 June 2026",
  description:
    "Discover how to find a reliable buyer's advocate in Perth with our comprehensive guide. Avoid overpayment and make informed property decisions today.",
  image: Blog4, // Replace with your actual image variable
  imageAlt:
    "Trustworthy buyers advocate in Perth helping property buyers make informed decisions",
  imageTitle:
    "How Can I Find a Trustworthy Buyers Advocate in Perth? | Find and Sign",
  imageCaption:
    "Learn how to identify a reliable buyers advocate in Perth, access expert guidance, avoid costly mistakes and secure the right property with confidence.",
  path: "/blog/find-trustworthy-buyers",
},
  {
  title: "Perth Buyers Agent & Advocate WA: Top Agents in Perth",
  date: "01 May 2026",
  description:
    "Top Perth Buyers Agents & Advocates WA. We help you find the right property in Perth's competitive market, including investment properties.",
  image: Blog3,
  imageAlt:
    "Perth buyers agent and advocate helping clients find residential and investment properties in Western Australia",
  imageTitle:
    "Perth Buyers Agent & Advocate WA: Top Agents in Perth | Find and Sign",
  imageCaption:
    "Discover how experienced Perth buyers agents and advocates can help you secure the right property and investment opportunities in Western Australia's competitive market.",
  path: "/blog/perth-buyers-agent-advocate-wa",
},
{
    title: "Your Ultimate Guide to Hiring a Buyer's Agent in Perth",
    date: "01 April 2026",
    description:
      "Learn how a Perth buyers agent can simplify the property buying process, access off-market opportunities and negotiate the best outcome on your behalf.",
    image: Blog2,
    imageAlt:
      "Guide to hiring a buyers agent in Perth for property purchases and investment opportunities",
    imageTitle:
      "Your Ultimate Guide to Hiring a Buyers Agent in Perth | Find and Sign",
    imageCaption:
      "Learn how a Perth buyers agent can help you find, evaluate and secure the right property while avoiding costly mistakes.",
    path: "/blog/buyers-agent-perth",
  },
   {
    title: "Best Suburbs in Perth for Property Investment in 2026",
    date: "01 March 2026",
    description:
      "Niki founded Find and Sign Buyer Advocate with a simple belief that every buyer deserves the same advantage he gave himself. Having built his own multi-million dollar property portfolio, he brings firsthand experience to every client engagement.",
    image: perthBlogImg,
    imageAlt:
      "Best suburbs in Perth for property investment in 2026 analysed by a Perth buyer advocate",
    imageTitle:
      "Best Suburbs in Perth for Property Investment 2026 | Find and Sign",
    imageCaption:
      "Discover the best Perth suburbs for property investment in 2026 based on growth potential, rental demand and market trends.",
    path: "/blog/best-suburbs-perth",
  },
];

// ── Blog Card ─────────────────────────────────────────────────────────────────
const BlogCard = ({
  post,
  t,
}: {
  post: (typeof blogPosts)[0];
  t: (typeof THEMES)["light"];
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
        background:  t.cardBg,
        border:      `2px solid ${t.cardBorder}`,
        transform:   hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow:   hovered
          ? "0 10px 22px rgba(105, 228, 220, 0.96)"
          : "0 4px 12px rgba(0,0,0,0.03)",
      }}
    >
      <div
        className="blog-card-img"
        style={{ background: `url(${post.image}) lightgray 50% / cover no-repeat` }}
      />

      <div className="blog-card__body">
        <div
          tabIndex={0}
          className="blog-card__title"
          style={{ color: t.titleColor }}
        >
          {post.title}
        </div>

        <div
          tabIndex={0}
          className="blog-card__date"
          style={{ color: t.dateColor }}
        >
          {post.date}
        </div>

        <p
          tabIndex={0}
          className="blog-card__desc"
          style={{ color: t.descColor }}
        >
          {post.description}
        </p>

        <button
          aria-label={`Read blog post about ${post.title}`}
          className="blog-card__btn"
          style={{
            backgroundColor: hovered ? t.btnBgHover : t.btnBg,
            color:           hovered ? t.btnColorHover : t.btnColor,
            transform:       hovered ? "translateY(-3px)" : "none",
            boxShadow:       hovered ? "0 8px 20px rgba(105, 228, 220, 0.4)" : "none",
          }}
        >
          Read Blog
        </button>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function Insights() {
  const { theme } = useTheme();
  const t = THEMES[theme];
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBannerLoading(false), 1200);
    const img = new Image();
    img.src = bannerImg;
    img.onload = () => setIsBannerLoading(false);
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  return (
    <div
      className="insights-page"
      style={{ backgroundColor: t.pageBg }}
    >

      {/* ── SECTION 1: Hero ───────────────────────────────────────────────── */}
      <section className="page-hero-banner">
        <img
          src={bannerImg}
          alt="Perth mortgage broker helping home buyers secure the right finance solution in Australia"
          title="Mortgage Broker Perth Australia | Find and Sign"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="page-hero-banner__img"
        />

        <div className={`video-loader-container ${!isBannerLoading ? "hidden" : ""}`} />
        <div className="page-hero-banner__overlay" />

        <div className="page-hero-banner__content">
          <div
            className={`attractive-loader ${!isBannerLoading ? "hidden" : ""}`}
            aria-hidden="true"
          />
          <h1 tabIndex={0} className="page-hero-banner__title">
            Insights
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: About ──────────────────────────────────────────────── */}
      <AboutSection
        imageSrc={aboutInsightsImg}
        imageAlt="Perth buyer advocate sharing property market insights and buying guidance"
        imageTitle="Perth Property Insights | Find and Sign Buyer Advocate"
        heading="About Find & Sign"
        body1="These are insights drawn from our experience in the market. Real observations, informed perspectives, and practical guidance. When you engage with Find and Sign Buyer Advocate, you are gaining access to knowledge built through direct involvement and on-the-ground expertise. These articles are designed to help you understand the process, assess opportunities, and make more informed decisions."
      />

      {/* ── SECTION 3: Blogs ──────────────────────────────────────────────── */}
      <section className="blogs-container">
        <h2
          tabIndex={0}
          className="blogs-container__heading"
          style={{ color: t.headingColor }}
        >
          Blogs
          <div
            className="blogs-container__divider"
            style={{ background: t.dividerColor }}
          />
        </h2>

        <p
          tabIndex={0}
          className="blogs-container__subtitle"
          style={{ color: t.subtitleColor }}
        >
          Industry insights, Australia-wide expertise and more.
        </p>

        <div className="blogs-list">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} t={t} />
          ))}
        </div>
      </section>

      <Image7 />
      <SimpleGetInTouch />
      <SimpleFooter />

    </div>
  );
}