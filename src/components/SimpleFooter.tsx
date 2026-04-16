// ── Footer Link List ──────────────────────────────────────────────────────────
const FooterLinkList = ({ title, links }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <span style={{ fontWeight: 700, fontSize: 13, color: "#111", fontFamily: "inherit" }}>{title}</span>
    {links.map((link) => (
      <a
        key={link}
        href="#"
        style={{ fontSize: 13, color: "#444", textDecoration: "none", fontFamily: "inherit", lineHeight: 1.5, transition: "color 0.15s" }}
        onMouseEnter={e => (e.currentTarget.style.color = "#000")}
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
          gap: 48,
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 140 }}>
          <div style={{ width: 80, height: 28, background: "#e0e0e0", borderRadius: 4 }} />
          <div style={{ display: "flex", gap: 10 }}>
            {["𝕏", "IG", "YT", "FB", "IN"].map((s) => (
              <a key={s} href="#" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>{s}</a>
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
        <span>© 2024 Company Name. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

