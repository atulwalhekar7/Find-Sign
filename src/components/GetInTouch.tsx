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
  display: flex;
  padding: 64px 196px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
}

        /* Outer card */
       .contact-card {
  display: flex;
  width: 1120px;
  height: 544px;
  align-items: flex-start;
  gap: 36px;
  background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
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
            background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);

        }

      .contact-left h2 {
  width: 350px;
  height: 48px;
  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "GT Super Display";
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 122.727% */
  letter-spacing: -0.88px;
}

       .contact-left p {
  width: 297px;
  color: #000;
  font-family: "Söhne";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px; /* 150% */

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
  display: flex;
  width: 734px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
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
  color: var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000));
  font-family: "Söhne";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
}

       .contact-input {
  display: flex;
  height: 48px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Brand-Utility-FS-WHITE, #FFF);
  border: none;
    outline: none;
}

        .contact-input::placeholder {
          color: #9CA3AF;
        }

        .contact-input:focus {
          border-color: #2DD4BF;
        }

       .contact-textarea {
  display: flex;
  height: 112px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Brand-Utility-FS-WHITE, #FFF);
  margin-bottom: 8px;
  border: none;
    outline: none;
}

        .contact-textarea::placeholder {
          color: #9CA3AF;
        }

        .contact-textarea:focus {
          border-color: #2DD4BF;
        }

        /* Button */
     .contact-btn {
  display: flex;
  width: 725.921px;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Brand-Contrast-FS-AQUA, #69E4DC);
  border: none;
  outline: none;
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