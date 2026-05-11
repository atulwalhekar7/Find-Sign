import { useRef, useState, useEffect } from "react";
import AboutBanner from "../assets/About Find&Sign.jpg";

/* ================= FADE UP ANIMATION ================= */
const FadeUp = ({ children, delay = 0, style = {}, className = "" }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.5s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/* ================= ABOUT SECTION ================= */
/**
 * 12-Column Grid Breakdown
 * ─────────────────────────────────────────────────
 * ≥1200px  Desktop     pad:196px  gap:24px
 *   Heading → 1/-1  (12 cols)
 *   Image   → 1/6   (5 cols)
 *   Text    → 6/13  (7 cols)
 *
 * 900–1199px  Tablet    pad:40px   gap:20px
 *   same column spans as desktop
 *
 * 768–899px  Tablet S   pad:24px   gap:16px   row-gap:32px
 *   Heading → 1/-1
 *   Image   → 1/-1  (stacked, h:340px)
 *   Text    → 1/-1
 *
 * 480–767px  Mobile L   pad:20px   gap:16px   row-gap:24px
 *   all → 1/-1   image h:280px
 *
 * <480px    Mobile S    pad:16px   gap:12px   row-gap:20px
 *   all → 1/-1   image h:220px
 * ─────────────────────────────────────────────────
 */
const AboutSection = ({ imageSrc, heading, subheading, body1, body2 }: any) => {
  return (
    <div style={{ background: "#fff", width: "100%" }}>
      <section className="as-grid">

        {/* Heading — full 12 cols always */}
        <FadeUp className="as-heading-col">
          <div className="about-heading-block">
            <h2>{heading}</h2>
            {subheading && <p className="sub">{subheading}</p>}
          </div>
        </FadeUp>

        {/* Image — 5 cols desktop → 12 cols tablet-S and below */}
        <FadeUp className="as-image-col" style={{ display: "flex" }}>
          <div className="about-image">
            <img src={imageSrc || AboutBanner} alt="" />
          </div>
        </FadeUp>

        {/* Text — 7 cols desktop → 12 cols tablet-S and below */}
        <FadeUp delay={0.1} className="as-text-col" style={{ display: "flex" }}>
          <div className="about-text">
            {body1
              ?.split("\n")
              .filter((p: string) => p.trim() !== "")
              .map((p: string, i: number) => (
                <p key={`b1-${i}`} className="body">{p}</p>
              ))}
            {body2
              ?.split("\n")
              .filter((p: string) => p.trim() !== "")
              .map((p: string, i: number) => (
                <p key={`b2-${i}`} className="body">{p}</p>
              ))}
          </div>
        </FadeUp>

      </section>

      <style>{`
        /* ── 12-col grid container ────────────────────────────────────── */
        .as-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 24px;
          row-gap: 0;
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 32px;
          background-color: #fff;
          box-sizing: border-box;
        }

        /* ── Column spans — desktop default ──────────────────────────── */
        .as-heading-col { grid-column: 1 / -1; }
        .as-image-col   { grid-column: 1 / 6;  align-self: stretch; }
        .as-text-col    { grid-column: 6 / 13; align-self: stretch; }

        /* ── Heading block ────────────────────────────────────────────── */
        .about-heading-block {
          text-align: center;
          margin-bottom: 48px;
        }

        .about-heading-block h2 {
          font-family: "GT Super Display Medium";
          font-size: 44px;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.48px;
          color: #073B2F;
          margin: 0 0 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .about-heading-block h2::after {
          content: "";
          width: 160px;
          height: 1px;
          background: #073B2F;
          display: block;
        }

        .sub {
          font-family: 'Sohne';
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          color: #000;
          margin: 24px 0 0;
        }

        /* ── Image ────────────────────────────────────────────────────── */
        .about-image {
          width: 100%;
          height: 100%;
          min-height: 320px;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        /* ── Text ─────────────────────────────────────────────────────── */
        .about-text {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .body {
          align-self: stretch;
          color: var(--FS-System-Grey-1, #757575);
          font-family: 'SohneBuch';
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          text-align: left;
          margin-bottom: 20px;
        }

        .body:last-child { margin-bottom: 0; }

        /* ── 1200px ── tighten padding ────────────────────────────────── */
        @media (max-width: 1200px) {
          .as-grid {
            padding: 64px 40px;
            column-gap: 20px;
          }
        }

        /* ── 900px ── reduce padding; spans unchanged ─────────────────── */
        @media (max-width: 900px) {
          .as-grid {
            padding: 40px 24px;
            column-gap: 16px;
          }
        }

        /* ── 768px ── stack: image + text go full width ───────────────── */
        @media (max-width: 768px) {
          .as-grid {
            padding: 40px 20px;
            column-gap: 16px;
            row-gap: 32px;
          }

          .as-image-col,
          .as-text-col { grid-column: 1 / -1; }

          .about-image  { min-height: unset; height: 340px; }

          .about-heading-block { margin-bottom: 32px; }
          .about-heading-block h2 { font-size: 32px; }
          .sub  { font-size: 18px; line-height: 28px; }
          .body { font-size: 18px; }
        }

        /* ── 480px ── smaller image, tighter padding ──────────────────── */
        @media (max-width: 480px) {
          .as-grid {
            padding: 32px 16px;
            column-gap: 12px;
            row-gap: 20px;
          }

          .about-image { height: 220px; }

          .about-heading-block h2 { font-size: 28px; gap: 16px; }
          .sub  { font-size: 16px; line-height: 24px; }
          .body { font-size: 16px; line-height: 24px; }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;