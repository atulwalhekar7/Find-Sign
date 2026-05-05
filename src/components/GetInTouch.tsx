import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Box, Dialog, DialogContent, Typography } from "@mui/material";

const COLORS = {
  racingGreen: "#073B2F",
  aqua: "#69E4DC",
  black: "#000000",
  white: "#FFFFFF",
};

interface NakraniContactProps {
  initialService?: string;
  showService?: boolean;
}

export default function GetInTouch({ initialService = "", showService = false }: NakraniContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [contactPreference, setContactPreference] = useState<"phone" | "email" | "">("email");
  const [selectedService, setSelectedService] = useState(initialService);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    if (form.current) {
      emailjs
        .sendForm('service_78mscvf', 'template_gy6jf2o', form.current, {
          publicKey: 'LxY_G536CLzBbrRV-',
        })
        .then(
          () => {
            setSubmitted(true);
            setIsSending(false);
            form.current?.reset();
            setContactPreference("email");
            setSelectedService(initialService);
          },
          (error) => {
            setIsSending(false);
            console.error('EmailJS Error:', error.text);
            alert("Failed to send message. Please try again later.");
          },
        );
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ─── PAGE WRAPPER ─── */
        .contact-page {
          display: flex;
          padding: 64px 80px 64px 340px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          background: var(--Brand-Foundation-FS-SALTBUSH, #EAE5DF);
        }

        @media (max-width: 1512px) {
          .contact-page { padding: 64px 5% 64px 10%; }
        }

        /* ─── ROW ANIMATION ─── */
        .contact-row {
          animation: fadeSlideUp 0.8s ease forwards;
          opacity: 0;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── LEFT COLUMN ─── */
        .contact-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          flex: 0 0 350px;
          min-width: 0;
        }

        /* Gap after h2 → paragraph: 64px (Figma) */
        .contact-left p {
          margin-top: 64px;
        }

        /* Gap after paragraph → Book a Call: 36px (Figma) */
        .contact-cta {
          margin-top: 36px;
        }

        /* Gap after Book a Call → Contact info: 36px (Figma) */
        .contact-left-info {
          margin-top: 36px;
        }

        /* "Get in touch" — Figma: FS-H2, W Fixed 350px, H Fixed 48px */
        .contact-left h2 {
          width: 350px;
          height: 48px;
          overflow: visible;
          color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'GT Super Display', serif;
          font-size: 38px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -0.88px;
          white-space: nowrap;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        .contact-left h2::after {
          content: "";
          width: 160px;
          height: 1px;
          background: #073B2F;
        }

        /* "Tell us what you're looking for…" — Figma: FS-B1 */
        .contact-left p {
          width: 297px;
          color: #000;
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
          line-height: 36px;
          margin-top: 64px;
        }

        /* "Book a Call" button — Figma specs */
        .contact-cta {
          display: flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          background: var(--Brand-Contrast-FS-AQUA, #69E4DC);
          color: var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #073B2F));
          font-family: "CX80 Trial VAR", "CX80", sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 150;
          line-height: 14px;
          letter-spacing: 4.48px;
          text-decoration: none;
          text-transform: uppercase;
          white-space: nowrap;
          width: fit-content;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .contact-cta:hover {
          background: #3DD6CC;
          transform: translateY(-2px);
        }

        .contact-cta:active {
          transform: scale(0.98);
        }

        .vibrate-icon {
          animation: call-vibrate 3s infinite ease-in-out;
        }

        @keyframes call-vibrate {
          0%, 20%, 100% { transform: rotate(0deg); }
          3%, 9%, 15%   { transform: rotate(-12deg); }
          6%, 12%, 18%  { transform: rotate(12deg); }
        }

    /* ─── CONTACT INFO BLOCK — W Fixed 297px, H Hug 80px (Figma) ─── */
.contact-left-info {
  display: flex;
  flex-direction: column;
  gap: 24px;         /* ← 80px total: 28 + 24 + 28 = 80px ✅ */
  width: 297px;
  height: 80px;
  flex-shrink: 0;
  margin-top: 36px;
}

.contact-left-info span {
  display: block;       /* ← key fix: makes width work on span */
  width: 297px;
  color: #000;
  font-family: 'Söhne', 'Sohne', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}

/* ─── TABLET override fix ─── */
@media (max-width: 1024px) {
  .contact-left-info span {
    width: 297px !important;  /* ← stop the 100% override */
  }
}

        /* ─── RIGHT COLUMN ─── */
        .contact-right {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }

        .contact-right form {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        /* ─── FIELD WRAPPER ─── */
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeItem 0.5s ease forwards;
        }
        .contact-field:nth-child(1) { animation-delay: 0.1s; }
        .contact-field:nth-child(2) { animation-delay: 0.2s; }
        .contact-field:nth-child(3) { animation-delay: 0.3s; }
        .contact-field:nth-child(4) { animation-delay: 0.4s; }
        .contact-field:nth-child(5) { animation-delay: 0.5s; }
        .contact-field:nth-child(6) { animation-delay: 0.6s; }

        @keyframes fadeItem {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Label — Figma: FS-B2 */
        .contact_label {
          color: var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000));
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        }

        /* Input — Figma: Form field layout */
        .contact-input {
          display: flex;
          height: 48px;
          padding: 8px 16px;
          align-items: center;
          gap: 10px;
          align-self: stretch;
          width: 761px;
          border-radius: 8px;
          background: var(--Brand-Utility-FS-WHITE, #FFF);
          border: none;
          outline: none;
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-weight: 400;
          font-size: 20px;
          color: #000;
        }

        .contact-input::placeholder { color: #BDBDBD; }
        .contact-input:focus { outline: 1.5px solid ${COLORS.aqua}; }

        select.contact-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23BDBDBD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 16px;
          cursor: pointer;
        }

        select.contact-input:invalid { color: #BDBDBD; }
        select.contact-input option  { color: #000; }

        /* ─── CONTACT PREFERENCE ROW ─── */
        .contact-pref-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 12px;
          width: 100%;
          min-height: 48px;
          flex-wrap: nowrap;
        }

        .contact-pref-label {
          color: var(--FS-BLACK, #000);
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          flex: 1;
          min-width: 0;
        }

        .pref-toggle-group {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          height: 48px;
          flex-shrink: 0;
          margin-left: auto;
        }

        /* Toggle buttons */
        .pref-toggle-btn {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 16px;
          gap: 10px;
          height: 48px;
          min-width: 120px;
          border-radius: 8px;
          border: 1px solid var(--Brand-Contrast-FS-AQUA, ${COLORS.aqua});
          background: transparent;
          font-family: "CX80 Trial VAR", "CX80", sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 150;
          line-height: 14px;
          letter-spacing: 4.48px;
          color: #073B2F;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .pref-toggle-btn.active { background: var(--Brand-Contrast-FS-AQUA, ${COLORS.aqua}); }
        .pref-toggle-btn:hover:not(.active) { background: rgba(105,228,220,0.15); }

        /* Textarea */
        .contact-textarea {
          display: flex;
          height: 112px;
          padding: 8px 16px;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
          width: 761px;
          border-radius: 8px;
          background: var(--Brand-Utility-FS-WHITE, #FFF);
          border: none;
          outline: none;
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-weight: 400;
          font-size: 20px;
          resize: none;
          color: #000;
        }

        .contact-textarea::placeholder { color: #BDBDBD; }
        .contact-textarea:focus { outline: 1.5px solid ${COLORS.aqua}; }

        /* Submit button */
        .contact-btn {
          width: 761px;
          height: 48px;
          border-radius: 8px;
          background: #003327;
          border: none;
          cursor: pointer;
          color: #F9F9F9;
          font-family: "CX80 Trial VAR", "CX80", sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 150;
          line-height: 14px;
          letter-spacing: 4.48px;
          text-transform: uppercase;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .contact-btn:hover {
          background: #073B2F;
          transform: translateY(-2px);
        }

        .contact-btn:active { transform: scale(0.98); }

        /* ─── RESPONSIVE ─── */

        /* Tablet */
        @media (max-width: 1024px) {
          .contact-page { padding: 64px 40px; }

          .contact-left {
            flex: 0 0 350px;
            gap: 0;
          }

          .contact-left h2 {
            width: 350px;
            font-size: 38px;
            line-height: 48px;
          }

          .contact-left p {
            width: 297px;
          }

          .contact-left-info {
            width: 297px;%;
          }

          .contact-left-info span {
            width: 100%;
          }
        }

        /* Mobile */
        @media (max-width: 900px) {
          .contact-page { padding: 40px 20px; }

          .contact-row {
            flex-direction: column !important;
            gap: 32px !important;
          }

          .contact-left {
            flex: none !important;
            width: 100% !important;
            gap: 0;
          }

          .contact-left h2 {
            width: 100%;
            font-size: 32px;
            line-height: 40px;
            height: auto;
            white-space: normal;
          }

          .contact-left p {
            width: 100%;
            font-size: 18px;
            line-height: 28px;
            margin-top: 32px;
          }

          .contact-cta {
            margin-top: 24px;
            width: 100%;
            justify-content: center;
          }

          .contact-left-info {
            width: 100%;
            height: auto;      /* allow natural height on mobile */
            margin-top: 24px;
          }

          .contact-left-info span {
            width: 100%;
            font-size: 18px;
          }

          .contact-right {
            width: 100% !important;
          }

          .contact-pref-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            min-height: unset;
          }

          .pref-toggle-group {
            width: 100%;
            margin-left: 0;
            height: auto;
          }

          .pref-toggle-btn {
            flex: 1;
            min-width: unset;
            padding: 10px 12px;
            font-size: 12px;
            letter-spacing: 3px;
          }

          .contact-pref-label {
            font-size: 18px;
          }

          .contact_label {
            font-size: 18px;
          }

          .contact-input,
          .contact-textarea {
            font-size: 16px;
            width: 100%; /* Ensure form fields take full width on mobile */
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .contact-page { padding: 32px 16px; }

          .contact-left h2 {
            font-size: 28px;
            line-height: 36px;
          }

          .contact-left p {
            font-size: 16px;
            line-height: 24px;
          }

          .contact-left-info span {
            font-size: 16px;
          }

          .contact-cta {
            font-size: 12px;
            letter-spacing: 3px;
            padding: 12px 16px;
          }
          .contact-btn { width: 100%; } /* Ensure submit button takes full width on mobile */
        }
      `}</style>

      <div id="contact-form" className="contact-page">
        <Box sx={{ width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
          <Box
            className="contact-row"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              columnGap: { xs: "24px", md: "36px" },
              width: "100%",
            }}
          >
            {/* ── LEFT ── */}
            <div className="contact-left">
              <h2>Get in touch</h2>

              <p>Tell us what you're looking for, and we'll come back with next steps.</p>

              <a
                href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta"
              >
                <svg className="vibrate-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.6-.35-.12-.73-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 2 3.2 2.45 3.2 2.99 3.2 12.37 10.83 20 20.21 20c.54 0 .99-.45.99-.99v-2.64c0-.54-.45-.99-.99-.99z" />
                </svg>
                Book a Call
              </a>

              <div className="contact-left-info">
                <span>Contact Niki</span>
                <span>T: 0431 158 233</span>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="contact-right">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label className="contact_label">First name</label>
                  <input className="contact-input" name="first_name" placeholder="e.g. Sarah" required />
                </div>

                <div className="contact-field">
                  <label className="contact_label">Last name</label>
                  <input className="contact-input" name="last_name" placeholder="e.g. Smith" required />
                </div>

                <div className="contact-field">
                  <label className="contact_label">Phone number</label>
                  <input className="contact-input" name="phone_number" type="tel" placeholder="e.g. 0441 123 123" required />
                </div>

                <div className="contact-field">
                  <label className="contact_label">Email</label>
                  <input className="contact-input" name="user_email" type="email" placeholder="e.g. sarah@gmail.com" required />
                </div>

                {showService && (
                  <div className="contact-field">
                    <label className="contact_label">Select Services</label>
                    <select
                      className="contact-input"
                      name="service"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Buyer Advocate">Buyer Advocate</option>
                      <option value="Advisory">Advisory</option>
                      <option value="Property Management">Property Management</option>
                      <option value="Settlement Agent">Settlement Agent</option>
                      <option value="Building Inspection">Building Inspection</option>
                      <option value="Sales Agent">Sales Agent</option>
                      <option value="Quantity Surveyor">Quantity Surveyor</option>
                      <option value="Accounting">Accounting</option>
                    </select>
                  </div>
                )}

                <div className="contact-field">
                  <div className="contact-pref-row">
                    <span className="contact-pref-label">Would you prefer to be contacted by phone or email?</span>
                    <div className="pref-toggle-group">
                      <button
                        type="button"
                        className={`pref-toggle-btn${contactPreference === "phone" ? " active" : ""}`}
                        onClick={() => setContactPreference("phone")}
                      >
                        Phone
                      </button>
                      <button
                        type="button"
                        className={`pref-toggle-btn${contactPreference === "email" ? " active" : ""}`}
                        onClick={() => setContactPreference("email")}
                      >
                        Email
                      </button>
                    </div>
                    <input type="hidden" name="contact_preference" value={contactPreference} />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact_label">Message</label>
                  <textarea className="contact-textarea" name="message" placeholder="What are you looking for?" required />
                </div>

                <button type="submit" className="contact-btn" disabled={isSending}>
                  {isSending ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </Box>
        </Box>
      </div>

      <Dialog
        open={submitted}
        onClose={() => setSubmitted(false)}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: '16px',
            padding: '24px',
            backgroundColor: '#F9F9F9',
            border: `2px solid ${COLORS.aqua}`
          }
        }}
      >
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
          <Box sx={{
            width: 64, height: 64, borderRadius: '50%', backgroundColor: '#69E4DC',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#073B2F',
          }}>
            ✓
          </Box>
          <Typography sx={{ fontFamily: 'GT Super Display Medium', fontSize: '32px', color: '#073B2F', fontWeight: 500 }}>
            Success!
          </Typography>
          <Typography sx={{ fontFamily: 'Sohne', fontSize: '18px', color: '#000', fontWeight: 300, lineHeight: '28px' }}>
            Your message has been sent successfully. We will get back to you shortly.
          </Typography>
          <button
            className="contact-btn"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: '16px', width: 'auto', padding: '12px 48px' }}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}