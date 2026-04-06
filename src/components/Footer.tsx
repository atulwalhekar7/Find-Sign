import { useEffect, useRef, useState } from "react";

const footerData = {
  "Use Cases": ["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"],
  "Explore": ["Design", "Prototyping", "Dev features", "Design systems", "Collaboration", "Design process", "FigJam"],
  "Resources": ["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers", "Resource library"],
};

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { icon: <TwitterIcon />, label: "Twitter" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <YoutubeIcon />, label: "YouTube" },
  { icon: <LinkedinIcon />, label: "LinkedIn" },
];

const bottomLinks = ["Privacy", "Terms", "Cookies", "Status"];

// Hook to detect when element enters viewport
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36,
        height: 36,
        border: `1px solid ${hovered ? "#a78bfa" : "#1f1f1f"}`,
        borderRadius: 8,
        background: hovered
          ? "linear-gradient(135deg,rgba(167,139,250,0.15),rgba(56,189,248,0.15))"
          : "#111",
        color: hovered ? "#e0e0d8" : "#6b7280",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(.34,1.56,.64,1)",
        transform: hovered ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 8px 20px rgba(167,139,250,0.2)" : "none",
        outline: "none",
      }}
    >
      {icon}
    </button>
  );
}

function NavLink({ children }: { children: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li style={{ listStyle: "none" }}>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13.5,
          color: hovered ? "#e0e0d8" : "#9ca3af",
          textDecoration: "none",
          padding: "5px 0",
          transition: "color 0.2s, transform 0.2s",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          letterSpacing: "0.01em",
        }}
      >
        {children}
        <span
          style={{
            fontSize: 11,
            color: "#38bdf8",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-4px)",
            transition: "all 0.2s",
          }}
        >
          →
        </span>
      </a>
    </li>
  );
}

function FooterColumn({
  title,
  links,
  delay,
  inView,
}: {
  title: string;
  links: string[];
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#a78bfa",
          marginBottom: 20,
        }}
      >
        {title}
      </p>
      <ul style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { ref, inView } = useInView(0.1);
  const [logoHovered, setLogoHovered] = useState(false);

  // Shimmer animation for accent bar
  const [shimmer, setShimmer] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setShimmer((s) => !s), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }

        @keyframes accentShimmer {
          0% { opacity: 0.4; transform: scaleX(0.85); }
          50% { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0.4; transform: scaleX(0.85); }
        }

        .footer-bottom-link {
          font-size: 12px;
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.02em;
        }
        .footer-bottom-link:hover { color: #a78bfa; }
      `}</style>

      <footer
        ref={ref}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#0a0a0a",
          color: "#e0e0d8",
          padding: "64px 48px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating blob */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
            top: -100,
            right: -80,
            pointerEvents: "none",
            animation: "blobFloat 8s ease-in-out infinite",
          }}
        />

        {/* Shimmer accent bar */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, #a78bfa, #38bdf8, #34d399, transparent)",
            marginBottom: 64,
            animation: "accentShimmer 4s ease-in-out infinite",
          }}
        />

        {/* Main grid */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
          }}
        >
          {/* Brand column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
            }}
          >
            {/* Logo */}
            <div
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              style={{
                width: 48,
                height: 48,
                background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Syne', sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#0a0a0a",
                cursor: "pointer",
                transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s",
                transform: logoHovered ? "scale(1.12) rotate(-4deg)" : "scale(1) rotate(0deg)",
                boxShadow: logoHovered ? "0 0 32px rgba(167,139,250,0.5)" : "none",
                flexShrink: 0,
              }}
            >
              F
            </div>

            <p
              style={{
                fontSize: 13,
                color: "#6b7280",
                lineHeight: 1.7,
                maxWidth: 220,
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              Where ideas take shape. Design, prototype, and collaborate — all in one place.
            </p>

            {/* Social buttons */}
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              {socialLinks.map((s) => (
                <SocialButton key={s.label} icon={s.icon} label={s.label} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerData).map(([title, links], i) => (
            <FooterColumn
              key={title}
              title={title}
              links={links}
              delay={0.15 + i * 0.1}
              inView={inView}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: 1100,
            margin: "64px auto 0",
            paddingTop: 24,
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <span style={{ fontSize: 12, color: "#4b5563", letterSpacing: "0.03em" }}>
            © 2026 Figma Clone. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {bottomLinks.map((link) => (
              <a key={link} href="#" className="footer-bottom-link">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}