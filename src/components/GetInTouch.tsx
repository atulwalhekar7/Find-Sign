import { useState } from "react";

export default function NakraniContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── PAGE WRAPPER
           Figma: display:flex; padding:64px 196px; flex-direction:column;
           align-items:flex-start; gap:10px;
           background:var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9) ── */
        .contact-page {
          display: flex;
          padding: 60px 196px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
        }

        /* ── OUTER CARD
           Figma: display:flex; width:1120px; height:544px;
           align-items:flex-start; gap:36px ── */
        .contact-card {
          display: flex;
          width: 1120px;
          height: 544px;
          align-items: flex-start;
          gap: 36px;
          background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
        }

        /* ── LEFT PANEL ── */
        .contact-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 50px;
          flex-shrink: 0;
          background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
        }

        /* Title — Figma: width:350px; height:48px; GT Super Display 44px/500/54px/ls-0.88px */
       /* Your specific class */
.contact-left h2 {
  width: 350px;
  height: 48px;
  color: var(--FS-RACING-GREEN, #073B2F);

  font-family: 'GT Super Display Medium';
  font-size: 44px;
  font-weight: 500;   /* Medium */
  line-height: 54px;
  letter-spacing: -0.88px;
}
        /* Subtitle — Figma: width:297px; Söhne 24px/300/36px; color:#000 (FS-B1) */
        .contact-left p {
  width: 297px;
  color: #000;

  font-family: 'Sohne';
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
}

        /* ── RIGHT PANEL
           Figma: display:flex; width:734px; flex-direction:column;
           align-items:flex-start; gap:16px ── */
        .contact-right {
          display: flex;
          width: 734px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
        }

        /* ── FORM fills the right panel width ── */
        .contact-right form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;              /* Figma image 4: gap:16px between every field row */
        }

        /* ── FIELD GROUP ── */
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        /* Label — Figma: Söhne 20px/400/28px; color:var(--FS-BLACK) (FS-B2) */
        .contact-label {
  color: var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000));

  font-family: 'Sohne', "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

        /* Input — Figma: display:flex; height:48px; padding:8px 16px;
           align-items:center; gap:10px; align-self:stretch;
           border-radius:8px; background:var(--Brand-Utility-FS-WHITE, #FFF); no border */
       .contact-input {
  display: flex;
  height: 48px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 100%;

  border-radius: 8px;
  background: var(--Brand-Utility-FS-WHITE, #FFF);
  border: none;
  outline: none;

  font-family: 'Sohne'
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #000;
}
        .contact-input::placeholder {
          color: var(--FS-System-Grey-3, #BDBDBD);
        }
        .contact-input:focus {
          outline: 1.5px solid #69E4DC;
        }

        /* Textarea — same rules, height:112px, align-items:flex-start */
        .contact-textarea {
          display: flex;
          height: 112px;
          padding: 8px 16px;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          width: 100%;
          border-radius: 8px;
          background: var(--Brand-Utility-FS-WHITE, #FFF);
          border: none;
          outline: none;
          font-family: Söhne, "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          color: #000;
          resize: none;
        }
        .contact-textarea::placeholder {
          color: var(--FS-System-Grey-3, #BDBDBD);
        }
        .contact-textarea:focus {
          outline: 1.5px solid #69E4DC;
        }

        /* Submit button — Figma: full-width; height:48px (hug);
           background:var(--Brand-Contrast-FS-AQUA, #69E4DC);
           CX80 Trial VAR 15px/150/15px/ls4.8px; color:var(--FS-RACING-GREEN) */
        .contact-btn {
  display: flex;
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: var(--Brand-Contrast-FS-AQUA, #69E4DC);
  border: none;
  outline: none;
  cursor: pointer;

  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));

  font-family: 'CX80'
  font-size: 15px;
  font-weight: 700;  /* ✅ matches Bold file */
  line-height: 15px;
  letter-spacing: 4.8px;
  text-transform: uppercase;

  transition: background 0.2s;
}
        .contact-btn:hover {
          background: #3DD6CC;
        }

        /* ── SUCCESS STATE ── */
        .contact-success {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          text-align: center;
        }
        .contact-success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #CCFBF1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-success-title {
          font-family: Söhne, "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: #073B2F;
        }
        .contact-success-sub {
          font-family: Söhne, "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: #757575;
        }

        @media (max-width: 900px) {
          .contact-page  { padding: 40px 20px; }
          .contact-card  { flex-direction: column; height: auto; width: 100%; }
          .contact-left h2 { width: 100%; height: auto; }
          .contact-left p  { width: 100%; }
          .contact-right { width: 100%; }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-card">

          {/* ── LEFT ── */}
          <div className="contact-left">
            <h2>Get in touch</h2>
            <p>Tell us what you're looking for, and we'll come back with next steps.</p>
          </div>

          {/* ── RIGHT ── */}
          <div className="contact-right">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="contact-success-title">Message sent!</span>
                <span className="contact-success-sub">We'll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="contact-field">
                  <label className="contact-label">First name</label>
                  <input className="contact-input" placeholder="e.g. Sarah" required />
                </div>

                <div className="contact-field">
                  <label className="contact-label">Last name</label>
                  <input className="contact-input" placeholder="e.g. Smith" required />
                </div>

                <div className="contact-field">
                  <label className="contact-label">Email</label>
                  <input className="contact-input" type="email" placeholder="e.g. sarah@gmail.com" required />
                </div>

                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea className="contact-textarea" placeholder="What are you looking for?" required />
                </div>

                <button type="submit" className="contact-btn">Submit</button>

              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}