import { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const InputField = ({ label, placeholder, multiline = false }: InputFieldProps) => {
  const [focused, setFocused] = useState(false);

  const inputStyle: React.CSSProperties = {
    padding: "var(--sds-size-space-300, 10px) var(--sds-size-space-300, 12px)",
    border: `1px solid ${focused ? "var(--sds-color-border-default-strong, #222)" : "var(--sds-color-border-default-default, #ccc)"}`,
    borderRadius: "var(--sds-size-radius-200, 6px)",
    fontFamily: "var(--sds-typography-body-font-family,Sohne)",
    fontSize: "var(--sds-typography-body-size-medium, 14px)",
    fontWeight: "var(--sds-typography-body-font-weight, 400)" as any,
    lineHeight: "140%",
    color: "var(--sds-color-text-default-default, #222)",
    background: "var(--sds-color-background-default-default, #fff)",
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
    alignSelf: "stretch",
  };

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    width: "272px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--sds-size-space-200, 8px)",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "var(--sds-typography-body-size-medium, 14px)",
    fontWeight: "var(--sds-typography-body-font-weight, 300)" as any,
    fontStyle: "normal",
    lineHeight: "140%",
    color: "var(--sds-color-text-default-default, #222)",
    fontFamily: "var(--sds-typography-body-font-family, Sohne)",
    alignSelf: "stretch",
  };

  return (
    <div style={wrapperStyle}>
      <label style={labelStyle}>{label}</label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          placeholder={placeholder}
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
};

export default function GetInTouch() {
  const [hovered, setHovered] = useState(false);

  // Hero Form section — matches Image 5 layer properties
  const sectionStyle: React.CSSProperties = {
    display: "flex",
    width: "var(--sds-responsive-device-width, 100%)",
    height: "815px",
    padding: "var(--sds-size-space-4000, 160px) var(--sds-size-space-800, 32px)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "var(--sds-size-space-800, 32px)",
    boxSizing: "border-box",
    background: "var(--sds-color-background-default-default, #fff)",
  };

  // Book a call button — matches Image 4 layer properties
  const bookCallStyle: React.CSSProperties = {
    display: "flex",
    padding: "var(--sds-size-space-300, 12px) var(--sds-size-space-300, 12px)",
    justifyContent: "center",
    alignItems: "center",
    gap: "var(--sds-size-space-200, 8px)",
    borderRadius: "var(--sds-size-radius-200, 6px)",
    border: `var(--sds-size-stroke-border, 1px) solid var(--sds-color-border-default-default, #ccc)`,
    background: "var(--sds-color-background-brand-default, #111)",
    color: "var(--sds-color-text-default-inverse, #fff)",
    fontFamily: "var(--sds-typography-body-font-family, CX80)",
    fontSize: "var(--sds-typography-body-size-medium, 14px)",
    fontWeight: 400,
    lineHeight: "140%",
    cursor: "pointer",
    textDecoration: "none",
  };

  // FormBox/Card — matches Image 3 layer properties
  const cardStyle: React.CSSProperties = {
    display: "flex",
    minWidth: "320px",
    width: "272px",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "var(--sds-size-space-600, 24px)",
    gap: "var(--sds-size-space-600, 24px)",
    borderRadius: "var(--sds-size-radius-200, 8px)",
    border: `var(--sds-size-stroke-border, 1px) solid var(--sds-color-border-default-default, #e0e0e0)`,
    background: "var(--sds-color-background-default-default, #fff)",
    boxSizing: "border-box",
  };

  // Submit button — matches Image 3 (variant="primary")
  const submitBtnStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    padding: "var(--sds-size-space-300, 12px) var(--sds-size-space-300, 12px)",
    justifyContent: "center",
    alignItems: "center",
    gap: "var(--sds-size-space-200, 8px)",
    borderRadius: "var(--sds-size-radius-200, 6px)",
    border: "none",
    background: hovered
      ? "var(--sds-color-background-brand-strong, #333)"
      : "var(--sds-color-background-brand-default, #111)",
    color: "var(--sds-color-text-default-inverse, #fff)",
    fontFamily: "var(--sds-typography-body-font-family, CX80)",
    fontSize: "var(--sds-typography-body-size-medium, 14px)",
    fontWeight: 400,
    lineHeight: "140%",
    cursor: "pointer",
    alignSelf: "stretch",
    transition: "background 0.2s",
  };

  const headingStyle: React.CSSProperties = {
  margin: 0,

  fontFamily: "GT Super Display Medium",
  fontSize: "44px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "54px",
  letterSpacing: "-0.88px",
  fontVariantNumeric: "lining-nums proportional-nums",

  textAlign: "center",
  color: "var(--FS-RACING-GREEN, #073B2F)",

  marginBottom: "12px",

  width: "1120px",
  maxWidth: "100%",

  opacity: 1,
  transform: "translateY(0px)",
  transition: "opacity 0.8s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
};

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Get in touch</h2>

      <a href="#" style={bookCallStyle}>
        Book a call
      </a>

      <div style={cardStyle}>
        <InputField label="Name" placeholder="Value" />
        <InputField label="Surname" placeholder="Value" />
        <InputField label="Email" placeholder="Value" />
        <InputField label="Message" placeholder="Value" multiline />

        <button
          style={submitBtnStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Submit
        </button>
      </div>
    </section>
  );
}