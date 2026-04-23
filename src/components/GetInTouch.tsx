import { useState } from "react";
import { Box } from "@mui/material";

export default function NakraniContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .contact-page {
          display: flex;
          padding: 64px 196px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          background:var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
        }

        /* 🔥 animation only */
        .contact-row {
          animation: fadeSlideUp 0.8s ease forwards;
          opacity: 0;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 64px;
          flex: 0 0 350px;
        }

        .contact-left h2 {
          color: #073B2F;
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-weight: 500;
          line-height: 54px;
          letter-spacing: -0.88px;
        }

        .contact-left p {
          color: #000;
          font-family: 'sohne';;
          font-size: 18px;
          font-weight: 300;
          line-height: 28px;
          max-width: 220px;
        }

        .contact-right {
          flex: 1;
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

        /* 🔥 stagger animation */
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

        @keyframes fadeItem {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact_label {
          color: #000;
          font-family: 'DM Sans', sans-serif;
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
          font-family: 'Sohne';
           font-weight: 400;
          font-size: 20px;
        }

        .contact-input::placeholder, .contact-textarea::placeholder { color: #BDBDBD; }
        .contact-input:focus { outline: 1.5px solid #69E4DC; }

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

        .contact-textarea:focus { outline: 1.5px solid #69E4DC; }

        .contact-btn {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          background: #69E4DC;
          border: none;
          cursor: pointer;
          color: #073B2F;
           font-family: 'CX80';
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 4.8px;
          text-transform: uppercase;

          /* 🔥 animation only */
          transition: transform 0.2s ease;
        }

        .contact-btn:hover { 
          background: #3DD6CC;
          transform: translateY(-2px);
        }

        .contact-btn:active {
          transform: scale(0.98);
        }

        .contact-success {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          text-align: center;

          /* 🔥 animation */
          opacity: 0;
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .contact-success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #CCFBF1;
          display: flex;
          align-items: center;
          justify-content: center;

          animation: pop 0.4s ease;
        }

        @keyframes pop {
          0% { transform: scale(0.6); }
          100% { transform: scale(1); }
        }

        .contact-success-title {
          font-size: 20px;
          font-weight: 500;
          color: #073B2F;
        }

        .contact-success-sub {
          font-size: 16px;
          font-weight: 300;
          color: #757575;
        }

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

          .contact-right {
            width: 100% !important;
          }
        }
      `}</style>

      <div id="contact-form" className="contact-page">
        <Box sx={{ width: "100%", maxWidth: "1120px", margin: "0 auto" }}>
          <Box
            className="contact-row"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              columnGap: "120px",
              width: "100%",
            }}
          >
            <div className="contact-left">
              <h2>Get in touch</h2>
              <p>Tell us what you're looking for, and we'll come back with next steps.</p>
            </div>

            <div className="contact-right">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    ✓
                  </div>
                  <span className="contact-success-title">Message sent!</span>
                  <span className="contact-success-sub">We'll be in touch soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-field">
                    <label className="contact_label">First name</label>
                    <input className="contact-input" placeholder="e.g. Sarah" required />
                  </div>

                  <div className="contact-field">
                    <label className="contact_label">Last name</label>
                    <input className="contact-input" placeholder="e.g. Smith" required />
                  </div>

                  <div className="contact-field">
                    <label className="contact_label">Email</label>
                    <input className="contact-input" type="email" placeholder="e.g. sarah@gmail.com" required />
                  </div>

                  <div className="contact-field">
                    <label className="contact_label">Message</label>
                    <textarea className="contact-textarea" placeholder="What are you looking for?" required />
                  </div>

                  <button type="submit" className="contact-btn">Submit</button>
                </form>
              )}
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}