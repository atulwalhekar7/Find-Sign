import { useState, useRef, useEffect } from "react";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';
import checkIcon from "../assets/check.png";
import callIcon from "../assets/Icon.png";
import { useTheme } from "./ThemeContext";



const SERVICES = [
  "Buyer Advocate",
  "Advisory",
  "Property Management",
  "Settlement Agent",
  "Building Inspection",
  "Sales Agent",
  "Accounting / Quantity Surveyor",
  "Mortgage Broker",
];

const THEMES = {
  dark: {
    pageBg:       "#121212",
    headingColor: "#F9F9F9",
    textColor:    "#EAE5DF",
    labelColor:   "#EAE5DF",
    inputBg:      "#1E1E1E",
    inputColor:   "#F9F9F9",
    inputBorder:  "#333333",
    toggleBg:     "#1E1E1E",
    toggleColor:  "#EAE5DF",
    submitBg:     "#69E4DC",
    submitColor:  "#073B2F",
    dialogBg:     "#1E1E1E",
    dialogText:   "#F9F9F9",
  },
  light: {
    pageBg:       "#ebe6de",
    headingColor: "#073B2F",
    textColor:    "#000000",
    labelColor:   "#000000",
    inputBg:      "#FFFFFF",
    inputColor:   "#000000",
    inputBorder:  "transparent",
    toggleBg:     "#FFFFFF",
    toggleColor:  "#073B2F",
    submitBg:     "#073B2F",
    submitColor:  "#FFFFFF",
    dialogBg:     "#F9F9F9",
    dialogText:   "#000000",
  },
};

interface NakraniContactProps {
  initialService?: string;
  showService?: boolean;
  hideInternalHeading?: boolean;
}

export default function GetInTouch({
  initialService = "",
  showService = false,
  hideInternalHeading = false,
}: NakraniContactProps) {
  const { theme } = useTheme();
  const t = THEMES[theme];

  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (initialService) setSelectedService(initialService);
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
            setContactMethod("");
            setSelectedService(initialService);
          },
          (error: any) => {
            setIsSending(false);
            console.error('EmailJS Error:', error.text);
            alert("Failed to send message. Please try again later.");
          },
        );
    }
  };

  const inputStyle: React.CSSProperties = {
    height: "52px",
    width: "100%",
    padding: "8px 16px",
    borderRadius: "8px",
    background: t.inputBg,
    border: `1px solid ${t.inputBorder}`,
    color: t.inputColor,
    fontFamily: "sohneBuch",
    fontSize: "18px",
    outline: "none",
    transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    color: t.labelColor,
    fontFamily: "sohneBuch",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
    transition: "color 0.3s ease",
  };

  return (
    <>
      <style>{`
        .contact-input:focus { border-color: #69e4dc !important; }
        .contact-textarea:focus { border-color: #69e4dc !important; }

        .toggle-btn:hover {
          background: #69E4DC !important;
          color: #073B2F !important;
          border-color: #69E4DC !important;
          transform: translateY(-1px);
        }

        .toggle-btn.selected {
          background: #69E4DC !important;
          color: #073B2F !important;
          border-color: #69e4dc !important;
        }

.contact-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 0 28px;

  background: #69E4DC;
  border: 1px solid #69E4DC;
  border-radius: 8px;

  width: fit-content;   /* IMPORTANT */
  max-width: fit-content;

  color: #073B2F;
  text-decoration: none;

  font-family: "CX80";
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 4.48px;
  text-transform: uppercase;

  transition: all 0.25s ease;
  white-space: nowrap;
  gap: 10px;
}

        @keyframes call-vibrate {
          0%, 20%, 100% { transform: rotate(0deg); }
          3%, 9%, 15% { transform: rotate(-12deg); }
          6%, 12%, 18% { transform: rotate(12deg); }
        }
        .vibrate-icon {
          animation: call-vibrate 3s infinite ease-in-out;
        }

.contact-cta:hover {
  transform: translateY(-1px);
  background: #69E4DC;
  border-color: #69E4DC;
}

.description-text {
  font-family: "sohneBuch", sans-serif;
  font-size: 24px;
        line-height: 36px;
        font-weight: 300;
        color: #000;
        width: 297px;
  transition: color 0.3s ease;
      }

.nikki-info {
  width: 100%;
  max-width: 297px;
  color: #000;
  font-family: 'sohneBuch';
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
}

/* RIGHT SIDE */

.contact-right {
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.contact_label {
  color: #000;
  font-family: 'sohneBuch';
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

.contact-input {
  display: flex;
  height: 52px;
  width: 100%;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  border: 1px solid transparent;
  font-family: 'sohneBuch';
  font-size: 18px;
  outline: none;
  transition: all 0.2s ease;
}

.contact-input:focus {
  border-color: #69e4dc;
}

.contact-textarea {
  display: flex;
  width: 100%;
  min-height: 140px;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid transparent;
  font-family: "Söhne", sans-serif;
  font-size: 18px;
  resize: none;
  outline: none;
  transition: all 0.2s ease;
}

.contact-textarea:focus {
  border-color: #69e4dc;
}

        .contact-field-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          width: 100%;
          margin-top: 8px;
        }

        .toggle-group { display: flex; gap: 12px; }

        @media (max-width: 992px) {
          .main-container { flex-direction: column !important; gap: 48px !important; }
          .contact-left, .contact-right { width: 100% !important; max-width: 100% !important; min-width: 0 !important; }
          .contact-field-row { flex-direction: column; align-items: flex-start; }
          .toggle-group { width: 100%; }
        }

        @media (max-width: 768px) {
          .contact-page { padding: 32px 20px !important; overflow-x: hidden; }
          .toggle-group { flex-direction: column; }
          .toggle-btn { width: 100% !important; }
        }

        @media (max-width: 480px) {
          .contact-page { padding: 24px 20px !important; }
          .contact-cta { width: 100% !important; }
        }
      `}</style>

      <div
        className="contact-page"
        style={{
          background: t.pageBg,
          display: "flex",
          width: "100%",
          // minHeight: "100vh",
          padding: "64px 130px",
          flexDirection: "column",
          alignItems: "center",
          transition: "background 0.3s ease",
        }}
      >
        <div
          className="main-container"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1164px",
            alignItems: "flex-start",
            gap: "36px",
            margin: "0 auto",
          }}
        >
          {/* LEFT SIDE */}
          <div
            className="contact-left"
            style={{
              display: "flex",
              width: "32%",
              minWidth: "300px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "36px",
            }}
          >
            {!hideInternalHeading && (
              <h2
                tabIndex={0}
                style={{
                  fontFamily: "GT Super Display Medium",
                  fontSize: "44px",
                  fontWeight: 500,
                  letterSpacing: "-0.88px",
                  lineHeight: "54px",
                  color: t.headingColor,
                  marginBottom: "26px",
                  width: "100%",
                  maxWidth: "350px",
                  transition: "color 0.3s ease",
                }}
              >
                Get in touch
              </h2>
            )}
            <p className="description-text" tabIndex={0}>
              Tell us what you’re looking for, and we’ll come back with next steps.
            </p>
            
            <a
              href="https://calendly.com/findandsignba-info"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta"
            >
              <img src={callIcon} className="vibrate-icon" width="20" height="20" alt="" />
              Book a Call
            </a>

            <div
              tabIndex={0}
              style={{
                color: t.textColor,
                fontFamily: "sohneBuch",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "30px",
                transition: "color 0.3s ease",
              }}
            >
              Contact Niki <br />
              T: 0431 158 233
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="contact-right"
            style={{ display: "flex", flex: 1, width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}
          >
            {submitted ? (
              <div
                tabIndex={0}
                style={{ color: t.textColor, fontFamily: "sohneBuch", fontSize: "20px", fontWeight: 300, lineHeight: "30px" }}
              >
                Thank you! We will be in touch.
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={handleSubmit}
                style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}
              >
                {/* First Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                  <label tabIndex={0} style={labelStyle}>First name</label>
                  <input name="first_name" className="contact-input" placeholder="e.g. Sarah" required style={inputStyle} />
                </div>

                {/* Last Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                  <label tabIndex={0} style={labelStyle}>Last name</label>
                  <input name="last_name" className="contact-input" placeholder="e.g. Smith" required style={inputStyle} />
                </div>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                  <label tabIndex={0} style={labelStyle}>Phone number</label>
                  <input name="phone_number" className="contact-input" placeholder="e.g. 0441 123 123" style={inputStyle} />
                </div>

                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                  <label tabIndex={0} style={labelStyle}>Email</label>
                  <input name="user_email" className="contact-input" type="email" placeholder="e.g. sarah@gmail.com" required style={inputStyle} />
                </div>

                {/* Service */}
                {showService ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                    <label tabIndex={0} style={labelStyle}>Service</label>
                    <select
                      name="service"
                      className="contact-input"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <input type="hidden" name="service" value={selectedService || "NA"} />
                )}

                {/* Contact Preference */}
                <div className="contact-field-row">
                  <label tabIndex={0} style={labelStyle}>
                    Would you prefer to be contacted by phone or email?
                  </label>
                  <input type="hidden" name="contact_preference" value={contactMethod} />
                  <div className="toggle-group">
                    <button
                      type="button"
                      className={`toggle-btn ${contactMethod === "phone" ? "selected" : ""}`}
                      onClick={() => setContactMethod("phone")}
                      style={{
                        height: "48px",
                        padding: "12px 16px",
                        background: contactMethod === "phone" ? "#69E4DC" : t.toggleBg,
                        borderRadius: "8px",
                        border: "1px solid #69e4dc",
                        color: contactMethod === "phone" ? "#073B2F" : t.toggleColor,
                        fontFamily: "CX80BOLD",
                        fontSize: "15px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "4.8px",
                        cursor: "pointer",
                        transition: "background 0.2s, color 0.2s",
                      }}
                    >
                      PHONE
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${contactMethod === "email" ? "selected" : ""}`}
                      onClick={() => setContactMethod("email")}
                      style={{
                        height: "48px",
                        padding: "12px 16px",
                        background: contactMethod === "email" ? "#69E4DC" : t.toggleBg,
                        borderRadius: "8px",
                        border: "1px solid #69e4dc",
                        color: contactMethod === "email" ? "#073B2F" : t.toggleColor,
                        fontFamily: "CX80BOLD",
                        fontSize: "15px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "4.8px",
                        cursor: "pointer",
                        transition: "background 0.2s, color 0.2s",
                      }}
                    >
                      EMAIL
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                  <label tabIndex={0} style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    className="contact-textarea"
                    placeholder="What are you looking for?"
                    required
                    style={{
                      width: "100%",
                      minHeight: "140px",
                      padding: "16px",
                      borderRadius: "8px",
                      background: t.inputBg,
                      border: `1px solid ${t.inputBorder}`,
                      color: t.inputColor,
                      fontFamily: "Söhne, sans-serif",
                      fontSize: "18px",
                      resize: "none",
                      outline: "none",
                      transition: "background 0.3s ease, color 0.3s ease",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!contactMethod || (showService && !selectedService) || isSending}
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    background: t.submitBg,
                    color: t.submitColor,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "CX80BOLD",
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "4.8px",
                    marginTop: "12px",
                    transition: "background 0.3s ease, color 0.3s ease, opacity 0.2s ease",
                  }}
                >
                  {isSending ? "SENDING..." : "SUBMIT"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog
        open={submitted}
        onClose={() => setSubmitted(false)}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            padding: "24px",
            backgroundColor: t.dialogBg,
            border: "2px solid #69E4DC",
            transition: "background-color 0.3s ease",
          },
        }}
      >
        <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}>
          <Box sx={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#69E4DC", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={checkIcon} alt="Success" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
          </Box>
          <Typography tabIndex={0} sx={{ fontFamily: "GT Super Display", fontSize: "32px", color: t.headingColor, fontWeight: 500, transition: "color 0.3s ease" }}>
            Success!
          </Typography>
          <Typography tabIndex={0} sx={{ fontFamily: "sohneBuch", fontSize: "18px", color: t.dialogText, fontWeight: 300, lineHeight: "28px", transition: "color 0.3s ease" }}>
            Your message has been sent successfully. We will get back to you shortly.
          </Typography>
          <button className="contact-cta" onClick={() => setSubmitted(false)} style={{ marginTop: "16px" }}>
            Close
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}