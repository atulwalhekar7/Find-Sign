import xIcon from "../assets/icon/Icon.png";
import igIcon from "../assets/icon/instagrame.png";
import ytIcon from "../assets/icon/Logo YouTube.png";
import inIcon from "../assets/icon/LinkedIn.png";

interface FooterLinkListProps {
  title: string;
  links: string[];
}

// ── Footer Link List ──────────────────────────────────────────────────────────
const FooterLinkList = ({ title, links }: FooterLinkListProps) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
<span
  style={{
  fontFamily: "CX80",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "5.76px",
  marginBottom: "16px",
color: "#073B2F",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}}
>
  {title}
</span>{links.map((link: string) => (
      <a
        key={link}
        href="#"
style={{
  display: "block",
  fontFamily: "Sohne, sans-serif",
  fontSize: "13px",
  fontWeight: 300,
color: "#073B2F",
  textDecoration: "none",
  marginBottom: "10px",
  lineHeight: "1.6",
  cursor: "pointer",
  transition: "transform 0.2s ease",
}}        onMouseEnter={e => (e.currentTarget.style.color = "#000")}
        onMouseLeave={e => (e.currentTarget.style.color = "#444")}
      >
        {link}
      </a>
    ))}
  </div>
);

export default function SimpleFooter() {
  return (
    <footer style={{ borderTop: "1px solid #e0e0e0", padding: "56px 40px 32px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 140 }}>
          
          <div style={{ display: "flex", gap: 10 }}>
  {[
    { icon: xIcon, link: "#" },
    { icon: igIcon, link: "#" },
    { icon: ytIcon, link: "#" },
    { icon: inIcon, link: "#" },
  ].map((item, index) => (
    <a key={index} href={item.link}>
      <img
        src={item.icon}
        alt="social icon"
        style={{ width: 23.98, height: 24 }}
      />
    </a>
  ))}
</div>
        </div>
        <FooterLinkList title="Use cases" links={["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"]} />
        <FooterLinkList title="Explore" links={["Design", "Prototyping", "Development features", "Design systems", "Collaboration features", "Design process", "FigJam"]} />
        <FooterLinkList title="Resources" links={["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers", "Resource library"]} />
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid #eee",
          fontSize: 12,
          color: "#999",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        
      </div>
    </footer>
  );
}

