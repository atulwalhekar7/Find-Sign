import { useRef, useState, useEffect } from "react";
import AboutBanner from "../assets/About Find&Sign.jpg";

/* ================= FADE UP ANIMATION ================= */
const FadeUp = ({ children, delay = 0, style = {} }: any) => {
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
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/* ================= ABOUT SECTION ================= */
const AboutSection = ({
  imageSrc,
  heading,
  subheading,
  body1,
  body2,
}: any) => {
  return (
     <div style={{ background: "#fff", width: "100%" }}> 
    <section
      style={{
       width: "1556px",
        margin: "0 auto",
        padding: "48px 130px",
        backgroundColor: "#fff", 
        
      }}
    >
      {/* HEADING */}
      <FadeUp>
        <div className="about-heading-block">
          <h2>{heading}</h2>
          <p className="sub">{subheading || " "}</p>
        </div>
      </FadeUp>

      {/* ROW */}
      <div className="about-row">
        {/* IMAGE */}
        <FadeUp
          style={{
            display: "flex",
            flexShrink: 0,
            width: "484px",
            alignSelf: "stretch",
            height:"auto"
          }}
        >
          <div className="about-image">
            <img  src={imageSrc || AboutBanner} alt="" />
          </div>
        </FadeUp>

        {/* TEXT */}
        <FadeUp delay={0.1} style={{ flex: 1, display: "flex" }}>
          <div className="about-text">
            {/* BODY 1 */}
            {body1
              ?.split("\n")
              .filter((para: string) => para.trim() !== "")
              .map((para: string, i: number) => (
                <p key={`b1-${i}`} className="body">
                  {para}
                </p>
              ))}

            {/* BODY 2 */}
            {body2
              ?.split("\n")
              .filter((para: string) => para.trim() !== "")
              .map((para: string, i: number) => (
                <p key={`b2-${i}`} className="body">
                  {para}
                </p>
              ))}
          </div>
        </FadeUp>
      </div>

      {/* STYLES */}
      <style>{`
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

        /* ROW */
        .about-row {
          display: flex;
 align-items: flex-start;
           gap: 48px;
        }

        /* IMAGE */
        .about-image {
          width: 100%;
          height: 100%;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        /* TEXT */
        .about-text {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding-right:130px;
           height:"520px !important"
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

        .body:last-child {
          margin-bottom: 0;
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

          .body {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
    </div>
  );
};

export default AboutSection;