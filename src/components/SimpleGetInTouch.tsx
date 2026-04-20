import { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const InputField = ({ label, placeholder, multiline = false }: InputFieldProps) => {
  const baseStyle: React.CSSProperties = {
    padding: "10px 12px",
    border: "1.5px solid #ccc",
    borderRadius: 6,
    fontFamily: "inherit",
    fontSize: 14,
    color: "#222",
    background: "#fff",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#222";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#ccc";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 ,width: "272px",
    height: "70px" }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: "#555", fontFamily: "inherit" }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          style={{ ...baseStyle, resize: "vertical" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          placeholder={placeholder}
          style={baseStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
};

export default function GetInTouch() {
  const [hovered, setHovered] = useState(false);

  const btnStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    borderRadius: 6,
    border: "none",
    background: hovered ? "#333" : "#111",
    color: "#fff",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
  };

  const sectionStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "160px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    background: "#fff",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 480,
    border: "1.5px solid #e0e0e0",
    borderRadius: 10,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    boxSizing: "border-box",
    background: "#fff",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700, textAlign: "center", color: "#111" }}>
        Get in touch
      </h2>

      <a href="#" style={{ fontSize: 14, color: "#0057ff", textDecoration: "underline" }}>
        Book a call
      </a>

      <div style={cardStyle}>
        <InputField label="Name" placeholder="Value" />
        <InputField label="Surname" placeholder="Value" />
        <InputField label="Email" placeholder="Value" />
        <InputField label="Message" placeholder="Value" multiline={true} />

        <button
          style={btnStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Submit
        </button>
      </div>
    </section>
  );
}