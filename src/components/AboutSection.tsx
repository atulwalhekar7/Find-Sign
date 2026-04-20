import React, { useRef, useState, useEffect } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0 }) => {
  const divRef = useRef<HTMLDivElement>(null);
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
    if (divRef.current) observer.observe(divRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

interface AboutSectionProps {
  imageSrc?: string;
  heading: string;
  subheading: string;
  body1: string;
  body2: string;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc,
  heading,
  subheading,
  body1,
  body2,
  className = '',
}) => {
  return (
    <section
      className={`about-section ${className}`}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px' }}
    >
      <div
        className="about-grid"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Left: Image */}
        <FadeUp>
          <div style={{ flexShrink: 0 }}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt=""
                style={{
                  width: 500,
                  height: 420,
                  objectFit: 'cover',
                  borderRadius: '12px',
                  display: 'block',
                }}
              />
            ) : (
              <div
                style={{
                  width: 500,
                  height: 420,
                  backgroundColor: '#D9D9D9',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            )}
          </div>
        </FadeUp>

        {/* Right: Text content */}
        <FadeUp delay={0.15}>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {/* Subheading pill/tag */}
            <p
              style={{
                margin: '0 0 16px 0',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#2E7D5E',           // green accent matching Figma
              }}
            >
              {subheading}
            </p>

            {/* Main heading */}
            <h2
              style={{
                margin: '0 0 24px 0',
                fontSize: 38,
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#111111',
                letterSpacing: '-0.5px',
              }}
            >
              {heading}
            </h2>

            {/* Divider */}
            <div
              style={{
                width: 48,
                height: 3,
                backgroundColor: '#2E7D5E',
                borderRadius: 2,
                marginBottom: 24,
              }}
            />

            {/* Body paragraphs */}
            <p
              style={{
                margin: '0 0 16px 0',
                fontSize: 15,
                lineHeight: 1.8,
                color: '#444444',
              }}
            >
              {body1}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.8,
                color: '#444444',
              }}
            >
              {body2}
            </p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            flex-direction: column !important;
          }
          .about-grid > div > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;