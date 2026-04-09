import { useState } from "react";

export default function NakraniContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .page {
          background: #F3F4F6;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: 'DM Sans', sans-serif;
        }
        .card {
          background: #fff;
          border-radius: 10px;
          width: 100%;
          max-width: 820px;
          display: flex;
          overflow: hidden;
          min-height: 360px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
        }
        .left {
          width: 260px;
          flex-shrink: 0;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .left h2 {
          font-size: 21px;
          font-weight: 600;
          color: #111;
          line-height: 1.3;
        }
        .left p {
          font-size: 13.5px;
          color: #6B7280;
          line-height: 1.65;
        }
        .divider {
          width: 1px;
          background: #E5E7EB;
          flex-shrink: 0;
        }
        .right {
          flex: 1;
          padding: 28px 32px 32px;
          display: flex;
          flex-direction: column;
        }
        .field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
        label { font-size: 13px; font-weight: 500; color: #111; }
        input, textarea {
          border: 1px solid #E5E7EB;
          border-radius: 6px;
          padding: 8px 11px;
          font-size: 13.5px;
          font-family: 'DM Sans', sans-serif;
          color: #111;
          background: #fff;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }
        input::placeholder, textarea::placeholder { color: #9CA3AF; }
        input:focus, textarea:focus { border-color: #2DD4BF; }
        textarea { min-height: 88px; resize: none; }
        .btn {
          background: #2DD4BF;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 11px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          width: 100%;
          margin-top: 18px;
          transition: background 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn:hover { background: #14B8A6; }
        .success {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #6B7280;
          font-size: 14px;
          text-align: center;
        }
        .success-icon {
          width: 48px; height: 48px; border-radius: 50%;
          background: #CCFBF1;
          display: flex; align-items: center; justify-content: center;
        }
        @media (max-width: 580px) {
          .card { flex-direction: column; }
          .left { width: 100%; }
          .divider { width: 100%; height: 1px; }
        }
      `}</style>

      <div className="page">
        <div className="card">
          {/* Left */}
          <div className="left">
            <h2>Get in touch</h2>
            <p>Tell us what you're looking for, and we'll come back with next steps.</p>
          </div>

          <div className="divider" />

          {/* Right */}
          <div className="right">
            {submitted ? (
              <div className="success">
                <div className="success-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <strong style={{ color: "#111", fontSize: "15px" }}>Message sent!</strong>
                We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label>First name</label>
                  <input placeholder="e.g. Sarah" required />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input placeholder="e.g. Smith" required />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="e.g. sarah@gmail.com" required />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea placeholder="What are you looking for?" required />
                </div>
                <button type="submit" className="btn">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}