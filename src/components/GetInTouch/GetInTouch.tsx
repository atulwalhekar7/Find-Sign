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

const BUDGET_RANGES = [
  "Under $500k",
  "$500k - $750k",
  "$750k - $1M",
  "$1M - $1.5M",
  "$1.5M+",
];

interface NakraniContactProps {
  initialService?: string;
  showService?: boolean;
  hideInternalHeading?: boolean;
  // NEW: fired once the EmailJS send succeeds — lets a parent page (e.g. the
  // calculator) know a lead has actually been captured, so it can unlock
  // gated features like PDF export.
  onSubmitSuccess?: () => void;
}

export default function GetInTouch({
  initialService = "",
  showService = false,
  hideInternalHeading = false,
  onSubmitSuccess,
}: NakraniContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);
  const [lookingFor, setLookingFor] = useState("");
  const [budget, setBudget] = useState("");
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
            setLookingFor("");
            setBudget("");
            // Let the parent know the lead was captured successfully.
            onSubmitSuccess?.();
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

  const selectArrowStyle = {
    appearance: "none" as const,
    background: `${inputBg} url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22${selectArrowColor}%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E') no-repeat right 16px center`,
  };

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
              <div className="form-row">
                <div className="field-wrap">
                  <input
                    id="first_name"
                    name="first_name"
                    className="contact-input"
                    placeholder="e.g. Sarah"
                    required
                  />
                  <label htmlFor="first_name" className="field-label">
                    First name
                  </label>
                </div>

                <div className="field-wrap">
                  <input
                    id="last_name"
                    name="last_name"
                    className="contact-input"
                    placeholder="e.g. Smith"
                    required
                  />
                  <label htmlFor="last_name" className="field-label">
                    Last name
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="contact_label" tabIndex={0}>What are you looking for?</label>
                <input type="hidden" name="looking_for" value={lookingFor} />
                <div className="lookingFor-toggle-group">
                  <button
                    type="button"
                    className={`lookingFor-btn${lookingFor === "Live in" ? " selected" : ""}`}
                    onClick={() => setLookingFor("Live in")}
                  >
                    Live in
                  </button>
                  <button
                    type="button"
                    className={`lookingFor-btn${lookingFor === "Investment" ? " selected" : ""}`}
                    onClick={() => setLookingFor("Investment")}
                  >
                    Investment
                  </button>
                </div>
              </div>

              <div className="form-row">
                <div className="field-wrap">
                  <select
                    id="budget"
                    name="budget"
                    className={`contact-input${budget ? " has-value" : ""}`}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                    style={selectArrowStyle}
                  >
                    <option value="" disabled>&nbsp;</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <label htmlFor="budget" className="field-label">
                    What's your budget?
                  </label>
                </div>

                <div className="field-wrap">
                  <input
                    id="suburb"
                    name="suburb"
                    className="contact-input"
                    placeholder="e.g. Subiaco"
                    required
                  />
                  <label htmlFor="suburb" className="field-label">
                    Suburb / Postcode
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="field-wrap">
                  <input
                    id="phone_number"
                    name="phone_number"
                    className="contact-input"
                    placeholder="e.g. 0441 123 123"
                  />
                  <label htmlFor="phone_number" className="field-label">
                    Phone number
                  </label>
                </div>

                <div className="field-wrap">
                  <input
                    id="user_email"
                    name="user_email"
                    className="contact-input"
                    type="email"
                    placeholder="e.g. sarah@gmail.com"
                    required
                  />
                  <label htmlFor="user_email" className="field-label">
                    Email
                  </label>
                </div>
              </div>

              {showService ? (
                <div className="field-wrap">
                  <select
                    id="service"
                    name="service"
                    className={`contact-input${selectedService ? " has-value" : ""}`}
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    style={selectArrowStyle}
                  >
                    <option value="" disabled>&nbsp;</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <label htmlFor="service" className="field-label">
                    Service
                  </label>
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

              <div className="field-wrap field-wrap--area">
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  placeholder="Tell us more about your requirements..."
                  required
                />
                <label htmlFor="message" className="field-label">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={!contactMethod || !lookingFor || !budget || (showService && !selectedService) || isSending}
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