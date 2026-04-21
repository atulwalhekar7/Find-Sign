import React, { useRef, useState, useEffect } from "react";
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
      <div className="about-row">
        {/* IMAGE */}
        <FadeUp>
          <div className="about-image">
            {imageSrc ? (
              <img src={AboutBanner} alt="" />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        </FadeUp>

        {/* TEXT */}
        <FadeUp delay={0.1}>
          <div className="about-text">
            <h3>{heading}</h3>
            <p className="sub">{subheading}</p>

            <p className="body">{body1}</p>
            <p className="body">{body2}</p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        /* MAIN LAYOUT (KEY FIX) */
        .about-row {
          display: flex;
          align-items: stretch; /* IMPORTANT for equal height alignment */
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
          justify-content: flex-start;
        }

        /* HEADING */
        .about-text h3 {
          margin: 0 0 6px 0;
font-family: "GT Super Display Medium";       
   font-size:44px;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.48px;
color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));        }

        /* SUBHEADING */
        .sub {
          margin: 0 0 16px 0;
          font-family: 'Sohne';
          font-size:24px;
          font-weight: 300;
          line-height: 120%;
          color: #888;
        }

        /* BODY */
        .body {
          margin: 0 0 12px 0;
          font-family: 'Sohne';
          font-size: 20px;
          font-weight: 400;
          line-height: 140%;
          color: #555;
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
        }
      `}</style>
    </section>
  );
};

export default AboutSection;