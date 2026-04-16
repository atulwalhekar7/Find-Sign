

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
        /* GT Super alternative (closest free match) */

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
          background: #f3f3f3;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .title {
          font-family: "Playfair Display", serif; /* GT Super style */
          font-size: 48px;
          font-weight: 700;
          color: #2b2b2b;
          margin-bottom: 6px;
          margin-top: 50px;
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
          padding: 20px;
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

        input::placeholder,
        textarea::placeholder {
          color: #aaa;
        }

        button {
          margin-top: 8px;
          padding: 10px;
          border: none;
          border-radius: 6px;
          background: #2b2b2b;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }

        button:hover {
          background: #000;
        }
      `}</style>

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
    </>
  );
}