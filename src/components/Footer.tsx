import { useEffect, useRef, useState } from "react";

const footerData = {
  Services: ["Buy a Home", "Sell a Property", "Rent & Lease", "Property Management", "Investment Advice", "Home Valuation"],
  Explore: ["Perth Listings", "New Developments", "Suburb Guides", "Market Reports", "Open Homes", "Auction Results"],
  Company: ["About Us", "Our Agents", "Careers", "Blog", "Testimonials", "Contact"],
};

const bottomLinks = ["Privacy", "Terms", "Cookies", "Sitemap"];

const socialIcons = [
  {
    label: "Facebook",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
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

function SocialButton({ icon, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36,
        borderRadius: 8,
        border: `1px solid ${hovered ? "#b8a96a" : "#2e4432"}`,
        background: hovered ? "rgba(184,169,106,0.1)" : "#1a2e1e",
        color: hovered ? "#e8e4d9" : "#5a7c5f",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(.34,1.56,.64,1)",
        transform: hovered ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)",
        outline: "none",
      }}
    >
      {icon}
    </button>
  );
}

function NavLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li style={{ listStyle: "none" }}>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          fontSize: 13.5, color: hovered ? "#e8e4d9" : "#7a9080",
          textDecoration: "none", padding: "5px 0",
          transition: "color 0.2s, transform 0.2s",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          letterSpacing: "0.01em",
        }}
      >
        {children}
        <span style={{
          fontSize: 11, color: "#b8a96a",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-4px)",
          transition: "all 0.2s",
        }}>→</span>
      </a>
    </li>
  );
}

function FooterColumn({ title, links, delay, inView }) {
  return (
    <div style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 11, fontWeight: 600,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "#b8a96a", marginBottom: 20,
      }}>
        {title}
      </p>
      <ul style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {links.map((link) => <NavLink key={link}>{link}</NavLink>)}
      </ul>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <div style={{
      marginTop: 28, padding: 20,
      border: "1px solid #2e4432", borderRadius: 10,
      background: "rgba(42,66,46,0.3)",
    }}>
      <p style={{ fontSize: 12, color: "#8a9e8d", marginBottom: 12, letterSpacing: "0.02em" }}>
        Get property insights delivered to your inbox.
      </p>
      {submitted ? (
        <p style={{ fontSize: 12, color: "#b8a96a" }}>Thanks for subscribing!</p>
      ) : (
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1, background: "#0f1f12",
              border: "1px solid #2e4432", borderRadius: 6,
              color: "#e8e4d9", fontSize: 12, padding: "8px 12px",
              outline: "none", fontFamily: "inherit",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: "8px 16px",
              background: "linear-gradient(135deg, #4a6b4e, #7a9e68)",
              border: "none", borderRadius: 6,
              color: "#e8e4d9", fontSize: 12,
              fontFamily: "inherit", cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes shimmerBar {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes blobFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.06; }
          50%       { transform: translateY(-18px) rotate(8deg); opacity: 0.10; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .re-footer-bottom-link {
          font-size: 12px;
          color: #3d5541;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.03em;
        }
        .re-footer-bottom-link:hover { color: #b8a96a; }

        .re-footer-nl-input::placeholder { color: #3d5541; }
        .re-footer-nl-input:focus { border-color: #5a7c5f !important; }
      `}</style>

      <footer
        ref={ref}
        style={{
          fontFamily: "'Inter', sans-serif",
          background: "#1a2e1e",
          color: "#e8e4d9",
          padding: "64px 48px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background blobs */}
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,124,95,0.08) 0%, transparent 70%)",
          top: -120, right: -100, pointerEvents: "none",
          animation: "blobFloat 10s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,169,106,0.05) 0%, transparent 70%)",
          bottom: 60, left: -60, pointerEvents: "none",
          animation: "blobFloat 14s ease-in-out infinite reverse",
        }} />

        {/* Shimmer accent bar */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, #5a7c5f, #b8a96a, #5a7c5f, transparent)",
          backgroundSize: "200% 100%",
          animation: "shimmerBar 4s linear infinite",
          marginBottom: 56,
        }} />

        {/* Main grid */}
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: 48,
        }}>
          {/* Brand column */}
          <div style={{
            display: "flex", flexDirection: "column",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}>
            {/* Logo */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20, cursor: "pointer" }}>
              <div style={{
                width: 44, height: 44,
                background: "linear-gradient(135deg, #4a6b4e, #7a9e68)",
                borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#e8e4d9" strokeWidth="1.5" />
                  <path d="M9 21V12h6v9" stroke="#e8e4d9" strokeWidth="1.5" />
                </svg>
              </div>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20, fontWeight: 600,
                color: "#e8e4d9", letterSpacing: "0.02em",
              }}>
                Prestige Homes
              </span>
            </div>

            <p style={{
              fontSize: 13, color: "#8a9e8d", lineHeight: 1.75,
              maxWidth: 230, letterSpacing: "0.01em",
            }}>
              Real experiences from real buyers — across Perth and beyond. We guide every step to secure your future home.
            </p>

            <Newsletter />

            {/* Socials */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {socialIcons.map((s) => (
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
              delay={0.2 + i * 0.12}
              inView={inView}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          maxWidth: 1100, margin: "56px auto 0",
          paddingTop: 24, borderTop: "1px solid #223026",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <span style={{
            fontSize: 12, color: "#3d5541",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic", letterSpacing: "0.03em",
          }}>
            © 2026 Prestige Homes. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {bottomLinks.map((link) => (
              <a key={link} href="#" className="re-footer-bottom-link">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}