import { useRef, useState, useEffect } from "react";
import AboutBanner from "../assets/About Find&Sign.jpg";

const FadeUp = ({ children, delay = 0 }: any) => {
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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.5s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const AboutSection = ({
  imageSrc,
  heading,
  subheading,
  body1,
  body2,
}: any) => {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 32px",
      }}
    >
      {/* CENTERED HEADING BLOCK — above the row */}
      <FadeUp>
        <div className="about-heading-block">
          <h2>{heading}</h2>
          <p className="sub">{subheading || " "}</p>
        </div>
      </FadeUp>

      <div className="about-row">
        {/* IMAGE */}
        <FadeUp>
          <div className="about-image">
            <img src={imageSrc || AboutBanner} alt="" />
          </div>
        </FadeUp>

        {/* TEXT — body only */}
        <FadeUp delay={0.1}>
          <div className="about-text">
            <p className="body">{body1}</p>
            <p className="body">{body2}</p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        /* CENTERED HEADING BLOCK */
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
          gap: 20px;
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
          margin: 20px 0 0;
        }

        /* MAIN ROW */
        .about-row {
          display: flex;
          align-items: stretch;
          gap: 48px;
        }

        /* IMAGE */
        .about-image {
          width: 484px;
          height: 450px;
          flex-shrink: 0;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        .placeholder {
          width: 100%;
          height: 100%;
          background: #d9d9d9;
        }

        /* TEXT BLOCK */
        .about-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* BODY */
        .body {
          margin: 12px 0;
          font-family: 'Sohne';
          font-size: 24px;
          font-weight: 300;
          line-height: 140%;
          color: #000;
          text-align: left;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .about-row {
            flex-direction: column;
          }

          .about-image {
            width: 100%;
            height: 300px;
          }

          .about-heading-block h2 {
            font-size: 32px;
          }

          .sub {
            font-size: 18px;
            line-height: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;