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

        .contact-page {
          background: #F3F4F6;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
        }

        /* Outer card */
        .contact-card {
          background: #ffffff;
          border-radius: 0px;
          width: 100%;
          max-width: 1512px;
          display: flex;
          overflow: hidden;
          min-height: 672px;
          padding: 60px 196px;
        }

        /* Left panel */
        .contact-left {
          width: 320px;
          flex-shrink: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 16px;
          background: #ffffff;
        }

        .contact-left h2 {
          font-family: "H2-GT Super";
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 500;
          color: rgb(0, 51, 39);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .contact-left p {
          font-family: "B1-Söhne Leicht";
    font-size: 15px;
    font-weight: 300;
    color: rgb(85, 85, 85);
    line-height: 1.6;
        }

        /* Divider */
        // .contact-divider {
        //   width: 1px;
        //   background: #E5E7EB;
        //   flex-shrink: 0;
        //   margin: 0 48px;
        // }

        /* Right panel */
        .contact-right {
          width: 100%;
          max-width: 734px;
          padding: 0 0 0 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Fields */
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-fields-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-label {
          font-size: 13px;
          font-weight: 500;
          color: #111827;
        }

        .contact-input {
          width: 100%;
          height: 48px;
          border: 1px solid #E5E7EB;
          border-radius: 0px;
          padding: 0 14px;
          font-size: 14px;
          font-weight: 300;
          color: #111827;
          background: #ffffff;
          outline: none;
        }

        .contact-input::placeholder {
          color: #9CA3AF;
        }

        .contact-input:focus {
          border-color: #2DD4BF;
        }

        .contact-textarea {
          width: 100%;
          height: 144px;
          border: 1px solid #E5E7EB;
          border-radius: 0px;
          padding: 14px;
          font-size: 14px;
          font-weight: 300;
          color: #111827;
          background: #ffffff;
          outline: none;
          resize: none;
        }

        .contact-textarea::placeholder {
          color: #9CA3AF;
        }

        .contact-textarea:focus {
          border-color: #2DD4BF;
        }

        /* Button */
        .contact-btn {
          width: 100%;
          height: 48px;
          background: #2DD4BF;
          color: #ffffff;
          border: none;
          border-radius: 0px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 24px;
        }

        .contact-btn:hover {
          background: #14B8A6;
        }

        /* Success */
        .contact-success {
          flex: 1;
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
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }

        .contact-success-sub {
          font-size: 14px;
          font-weight: 300;
          color: #6B7280;
        }

        @media (max-width: 900px) {
          .contact-card {
            flex-direction: column;
            padding: 40px 20px;
          }

          .contact-left {
            width: 100%;
          }

          .contact-right {
            width: 100%;
            padding: 0;
          }

          .contact-divider {
            width: 100%;
            height: 1px;
            margin: 32px 0;
          }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-card">

          {/* Left */}
          <div className="contact-left">
            <h2>Get in touch</h2>
            <p>
              Tell us what you're looking for, and we'll come back
              with next steps.
            </p>
          </div>

          <div className="contact-divider" />

          {/* Right */}
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
                <div className="contact-fields-stack">

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