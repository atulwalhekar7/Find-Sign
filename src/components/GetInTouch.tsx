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
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 50px;
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

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        .contact-label {
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
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
        }

        .contact-input::placeholder { color: #BDBDBD; }
        .contact-input:focus { outline: 1.5px solid #69E4DC; }

        .contact-textarea {
          height: 112px;
          padding: 8px 16px;
          width: 100%;
          border-radius: 8px;
          background: #FFF;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
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
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 4.8px;
          text-transform: uppercase;
        }

        .contact-btn:hover { background: #3DD6CC; }

        .contact-success {
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

      <div className="contact-page">
        <Box
          sx={{
            width: "100%",
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >
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
            {/* LEFT */}
            <div className="contact-left">
              <h2>Get in touch</h2>
              <p>Tell us what you're looking for, and we'll come back with next steps.</p>
            </div>

            {/* RIGHT */}
            <div className="contact-right">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5">
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
          </Box>
        </Box>
      </div>
    </>
  );
}