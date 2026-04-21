
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/Footer";
import AboutSection from "../components/AboutSection";

// import aboutContentImg from "../assets/DSC06081.jpg";
import bannerImg from "../assets/Client Outcomes_Banner.jpg";
import AboutClientOutcomesImg from "../assets/About Client Outcomes.png";

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
borderRadius: 0,
          }}
        >
<h1 style={{ 
            fontFamily: "'GT Super Display Medium'",
            fontSize: "56px",
            fontWeight: "500",
            color: "#FFF",
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0 
          }}>
            Client Outcomes
          </h1>
          <p style={{ color: "#CCC", fontSize: "24px", marginTop: 20 }}>
            Find & Sign
          </p>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────── */}
      <AboutSection
        imageSrc={AboutClientOutcomesImg}
        heading="About Find & Sign"
        subheading="Subheading"
        body1="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look."
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


      {/* ── WHAT OUR CLIENTS ARE SAYING ───────────────────────────────── */}
<section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px" }}>

  {/* Section heading */}
<h2
  style={{
  margin: "0 0 32px 0",
  color: "var(--sds-color-text-default-default)",

  fontFamily: "GTSuper",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "120%",
  letterSpacing: "-0.48px",

  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationSkipInk: "auto",
  textDecorationThickness: "auto",
  textUnderlineOffset: "auto",
  textUnderlinePosition: "from-font",
}}
>    What our clients are saying
  </h2>

  {/* 3-column reviews grid */}
  <div
    className="reviews-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    }}
  >
    {reviews.map((review, i) => (
      <div
        key={i}
        style={{
          border: "1px solid #E5E5E5",
          borderRadius: 10,
          padding: "16px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {/* Star rating */}
        <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
          {Array(5).fill(null).map((_, s) => (
            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>

        {/* Review title */}
<p
  style={{
    margin: 0,
   fontFamily: "GTSuper",
  fontSize: "20px",
  fontWeight: 700,
    lineHeight: "120%",
        fontStyle: "normal",

    letterSpacing: "-0.48px",
  }}
>          {review.title}
        </p>

        {/* Review body */}
        <p
  style={{
    color: "rgb(117, 117, 117)",
    fontFamily: "Söhne",
    fontSize: "16px",
    fontStyle: "normal",
  }}
>
  {review.body}
</p>

        {/* Reviewer info */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
          {/* Avatar circle */}
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#D9D9D9",
              flexShrink: 0,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Name + date stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <span style={{  color: "rgb(12, 11, 11)",
    fontFamily: "Söhne",
    fontSize: "16px",
    fontStyle: "normal", }}>
              {review.name}
            </span>
            <span style={{ fontSize: 11, color: "#999", lineHeight: 1.2 }}>
              {review.date}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <style>{`
    @media (max-width: 900px) {
      .reviews-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 500px) {
      .reviews-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
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
