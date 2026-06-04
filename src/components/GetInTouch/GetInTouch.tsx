import { useState, useRef, useEffect, useMemo } from "react";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import checkIcon from "../../assets/check.png";
import callIcon from "../../assets/Icon.png";
import { useTheme } from "../ThemeContext";
import "./GetInTouch.css";

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
  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);
  const form = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
        .sendForm("service_78mscvf", "template_gy6jf2o", form.current, {
          publicKey: "LxY_G536CLzBbrRV-",
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
            console.error("EmailJS Error:", error.text);
            alert("Failed to send message. Please try again later.");
          }
        );
    }
  };

  // Build the select arrow SVG URL using the heading color from the theme
  const headingColor = isDark ? "#F9F9F9" : "#073B2F";
  const selectArrowColor = useMemo(
    () => encodeURIComponent(headingColor),
    [headingColor]
  );

  // The input-bg color also varies by theme (used in select background)
  const inputBg = isDark ? "#1E1E1E" : "#ffffff";

  return (
    <div className={`contact-page${isDark ? " theme-dark" : ""}`}>
      <div className="main-container">
        {/* ── LEFT SIDE ── */}
        <div className="contact-left">
          {!hideInternalHeading && (
            <h2
              className="contact-heading"
              tabIndex={0}
            >
              Get in touch
            </h2>
          )}

          <p className="description-text" tabIndex={0}>
            Tell us what you're looking for, and we'll come back with next steps.
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

          <div className="nikki-info" tabIndex={0}>
            Contact Niki <br />
            T: 0431 158 233
          </div>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div className="contact-right">
          {submitted ? (
            <div className="nikki-info" tabIndex={0}>
              Thank you! We will be in touch.
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={handleSubmit}
              style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div className="form-group">
                <label className="contact_label" tabIndex={0}>First name</label>
                <input name="first_name" className="contact-input" placeholder="e.g. Sarah" required />
              </div>

              <div className="form-group">
                <label className="contact_label" tabIndex={0}>Last name</label>
                <input name="last_name" className="contact-input" placeholder="e.g. Smith" required />
              </div>

              <div className="form-group">
                <label className="contact_label" tabIndex={0}>Phone number</label>
                <input name="phone_number" className="contact-input" placeholder="e.g. 0441 123 123" />
              </div>

              <div className="form-group">
                <label className="contact_label" tabIndex={0}>Email</label>
                <input
                  name="user_email"
                  className="contact-input"
                  type="email"
                  placeholder="e.g. sarah@gmail.com"
                  required
                />
              </div>

              {showService ? (
                <div className="form-group">
                  <label className="contact_label" tabIndex={0}>Service</label>
                  <select
                    name="service"
                    className="contact-input"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    style={{
                      appearance: "none",
                      background: `${inputBg} url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22${selectArrowColor}%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E') no-repeat right 16px center`,
                    }}
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

              <div className="contact-field-row">
                <label className="contact_label" tabIndex={0}>
                  Would you prefer to be contacted by phone or email?
                </label>

                {/* Hidden input to pass contactMethod state to EmailJS */}
                <input type="hidden" name="contact_preference" value={contactMethod} />

                <div className="toggle-group">
                  <button
                    type="button"
                    className={`toggle-btn${contactMethod === "phone" ? " selected" : ""}`}
                    onClick={() => setContactMethod("phone")}
                  >
                    PHONE
                  </button>
                  <button
                    type="button"
                    className={`toggle-btn${contactMethod === "email" ? " selected" : ""}`}
                    onClick={() => setContactMethod("email")}
                  >
                    EMAIL
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="contact_label" tabIndex={0}>Message</label>
                <textarea
                  name="message"
                  className="contact-textarea"
                  placeholder="What are you looking for?"
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={!contactMethod || (showService && !selectedService) || isSending}
              >
                {isSending ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── SUCCESS DIALOG ── */}
      <Dialog
        open={submitted}
        onClose={() => setSubmitted(false)}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            padding: "24px",
            backgroundColor: isDark ? "#1A1A1A" : "#F9F9F9",
            border: "2px solid #69E4DC",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "#69E4DC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={checkIcon}
              alt="Success"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </Box>

          <Typography
            tabIndex={0}
            sx={{
              fontFamily: "GT Super Display",
              fontSize: "32px",
              color: isDark ? "#F9F9F9" : "#073B2F",
              fontWeight: 500,
            }}
          >
            Success!
          </Typography>

          <Typography
            tabIndex={0}
            sx={{
              fontFamily: "sohneBuch",
              fontSize: "18px",
              color: isDark ? "#EAE5DF" : "#000000",
              fontWeight: 300,
              lineHeight: "28px",
            }}
          >
            Your message has been sent successfully. We will get back to you shortly.
          </Typography>

          <button
            className="contact-cta"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: "16px" }}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}