import React, { useRef, useState, useEffect } from 'react';

// Animated wrapper (extracted from Services)
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0 }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

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
    <section className={`about-section ${className}`} style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px' }}>
      <div className="about-grid" style={{ display: 'flex', flexDirection: 'row', gap: 56, alignItems: 'flex-start' }}>
        <FadeUp>
          <div style={{ flexShrink: 0 }}>
{imageSrc ? (
              <img src={imageSrc} alt="" style={{ width: 484, height: 350, objectFit: 'cover', borderRadius: '8px' }} />
            ) : (
              <div 
                style={{ 
                  width: 484, 
                  height: 350, 
                  backgroundColor: '#E5E5E5', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <div style={{ opacity: 0.2, fontSize: '40px' }}>🖼️</div>
              </div>
            )}
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, color: '#111' }}>{heading}</h2>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: '#999' }}>{subheading}</p>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#333' }}>{body1}</p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#333' }}>{body2}</p>
          </div>
        </FadeUp>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            flex-direction: column !important;
          }
          .about-grid > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

