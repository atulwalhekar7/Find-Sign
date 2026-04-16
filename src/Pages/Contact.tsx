

// Helper for Footer Links
interface FooterLinkListProps {
  title: string;
  links: string[];
}

const FooterLinkList = ({ title, links }: FooterLinkListProps) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 140 }}>
    <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#111", textAlign: "left" }}>{title}</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
      {links.map((link) => (
        <a key={link} href="#" style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>
          {link}
        </a>
      ))}
    </div>
  </div>
);

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
          background: #f3f3f3;
        }

        .container {
          min-height: 80vh; /* Reduced to allow footer to show naturally */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
        }

        .title {
          font-family: "Playfair Display", serif;
          font-size: 48px;
          font-weight: 700;
          color: #2b2b2b;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 24px;
        }

        .form-box {
          width: 100%;
          max-width: 320px;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .field label {
          font-size: 13px;
          color: #333;
          font-weight: 500;
        }

        input, textarea {
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #d0d0d0;
          font-size: 14px;
          outline: none;
          
        }

        textarea {
          resize: none;
          height: 80px;
        }

        button {
          margin-top: 8px;
          padding: 12px;
          border: none;
          border-radius: 6px;
          background: #2b2b2b;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        button:hover {
          background: #000;
        }

        /* Footer specific CSS */
        footer a:hover {
          color: #111 !important;
        }
      `}</style>

      {/* Main Content */}
      <div className="container">
        <div className="title">Contact us</div>
        <div className="subtitle">Subtitle</div>

        <div className="form-box">
          <div className="field">
            <label>Name</label>
            <input placeholder="Value" />
          </div>

          <div className="field">
            <label>Surname</label>
            <input placeholder="Value" />
          </div>

          <div className="field">
            <label>Email</label>
            <input placeholder="Value" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea placeholder="Value"></textarea>
          </div>

          <button>Submit</button>
        </div>
      </div>

      {/* ── FOOTER SECTION ────────────────────────────────────────────── */}
      <footer style={{ 
        borderTop: "1px solid #e0e0e0", 
        padding: "56px 40px 32px", 
        backgroundColor: "#FFFFFF",
        marginTop: "auto"
      }}>
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
          {/* Brand & Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 140 }}>
            <div style={{ width: 80, height: 28, background: "#e0e0e0", borderRadius: 4 }} />
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "IG", "YT", "FB", "IN"].map((s) => (
                <a key={s} href="#" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <FooterLinkList title="Use cases" links={["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"]} />
          <FooterLinkList title="Explore" links={["Design", "Prototyping", "Development features", "Design systems", "Collaboration features", "Design process", "FigJam"]} />
          <FooterLinkList title="Resources" links={["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers", "Resource library"]} />
        </div>

        {/* Bottom Bar */}
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
    </>
  );
}