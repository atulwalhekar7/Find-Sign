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
  const [contactPreference, setContactPreference] = useState<"phone" | "email" | "">("email"); // Initialize with a default value
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
            setContactPreference("email"); // Reset to the default value after successful submission
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

        .contact-page {
          display: flex;
          padding: 64px 80px 64px 340px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          background: var(--Brand-Foundation-FS-SALTBUSH,#EAE5DF);
        }

        @media (max-width: 1512px) {
          .contact-page { padding: 64px 5% 64px 10%; }
        }

        .contact-row {
          animation: fadeSlideUp 0.8s ease forwards;
          opacity: 0;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 64px;
          flex: 0 1 350px;
          min-width: 0;
        }

        .contact-left-info {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          max-width: 297px;
        }
        .contact-left-info span {
          font-family: 'SohneBuch';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: #000000;
        }

        .contact-left h2 {
          color: #073B2F;
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-weight: 500;
          line-height: 54px;
          letter-spacing: -0.88px;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          text-align: left;
          width: 100%;
        }

        .contact-left h2::after {
          content: "";
          width: 160px;
          height: 1px;
          background: #073B2F;
        }

        .contact-left p {
          color: #000;
          font-family: 'Sohne';
          font-size: 24px;
          font-weight: 300;
          line-height: 28px;
          text-align: left;
          width: 100%;
        }

        .contact-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 12px 24px;
          border-radius: 8px;
          background: #69E4DC;
          color: #073B2F;
          font-family: "CX80";
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          text-decoration: none;
          text-transform: uppercase;
          white-space: nowrap;
          gap: 10px;
          transition: transform 0.2s ease, background 0.2s ease;
          width: fit-content;
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
          3%, 9%, 15% { transform: rotate(-12deg); }
          6%, 12%, 18% { transform: rotate(12deg); }
        }

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

        .contact_label {
          color: #000;
          font-family: 'SohneBuch';
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
        }

        .contact-input {
          height: 48px;
          padding: 8px 16px;
          width: 100%;
          border-radius: 8px;
          background: #FFF;
          border: none;
          outline: none;
          font-family: 'SohneBuch';
          font-weight: 400;
          font-size: 20px;
        }

        .contact-input::placeholder, .contact-textarea::placeholder { color: #BDBDBD; }
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
        select.contact-input option { color: #000; }

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
          font-family: 'SohneBuch';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: #000000;
          flex: 1;
          min-width: 0;
        }

        .pref-toggle-group {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 6px;
          height: 48px;
          flex-shrink: 0;
          margin-left: auto;
        }
        .pref-toggle-btn {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 6px 20px;
          gap: 4px;
          width: auto;
          min-width: 120px;
          height: 48px;
          border: 1px solid ${COLORS.aqua};
          border-radius: 8px;
          background: transparent;
          font-family: 'CX80';
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 4.8px;
          color: #073B2F;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .pref-toggle-btn.active { background: ${COLORS.aqua}; }
        .pref-toggle-btn:hover:not(.active) { background: rgba(105,228,220,0.15); }

        .contact-textarea {
          height: 112px;
          padding: 8px 16px;
          width: 100%;
          border-radius: 8px;
          background: #FFF;
          border: none;
          outline: none;
          font-family: 'Sohne';
          font-weight: 400;
          font-size: 20px;
          resize: none;
        }

        .contact-textarea:focus { outline: 1.5px solid ${COLORS.aqua}; }

        .contact-btn {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          background: #003327;
          border: none;
          cursor: pointer;
          color: #F9F9F9;
          font-family: 'CX80';
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 4.8px;
          text-transform: uppercase;
          transition: transform 0.2s ease;
        }

        .contact-btn:hover {
          background: #073B2F;
          transform: translateY(-2px);
        }

        .contact-btn:active { transform: scale(0.98); }

        @media (max-width: 900px) {
          .contact-page { padding: 40px 20px; }

          .contact-row {
            flex-direction: column !important;
            gap: 24px !important;
          }

          .contact-left {
            flex: none !important;
            width: 100% !important;
            gap: 16px;
          }

          .contact-left h2 {
            width: 100%;
            font-size: 32px;
            line-height: 42px;
          }

          .contact-left p {
            width: 100%;
            max-width: 100%;
            font-size: 18px;
          }

          .contact-pref-label {
            white-space: normal;
          }

          .contact-left-info {
            max-width: 100%;
          }

          .contact-pref-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .pref-toggle-group {
            max-width: 100%;
            margin-left: 0;
            width: 100%;
          }

          .contact-pref-row {
            gap: 12px;
          }
          .pref-toggle-btn {
            padding: 10px 16px;
            min-width: 110px;
            flex: 1;
          }
          .contact-right { width: 100% !important; }
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
              columnGap: { xs: "24px", md: "100px" },
              width: "100%",
            }}
          >
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