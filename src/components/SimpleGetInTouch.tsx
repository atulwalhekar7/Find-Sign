import React from "react";

// ── InputField ────────────────────────────────────────────────────────────────
interface InputFieldProps {
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const InputField = ({ label, placeholder, multiline = false }: InputFieldProps) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <label style={{ fontSize: 13, fontWeight: 500, color: "#333", fontFamily: "inherit" }}>
      {label}
    </label>
    {multiline ? (
      <textarea
        placeholder={placeholder}
        rows={5}
        style={{
          padding: "10px 12px",
          border: "1.5px solid #ccc",
          borderRadius: 6,
          fontFamily: "inherit",
          fontSize: 14,
          color: "#222",
          resize: "vertical",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={e => (e.target.style.borderColor = "#222")}
        onBlur={e => (e.target.style.borderColor = "#ccc")}
      />
    ) : (
      <input
        placeholder={placeholder}
        style={{
          padding: "10px 12px",
          border: "1.5px solid #ccc",
          borderRadius: 6,
          fontFamily: "inherit",
          fontSize: 14,
          color: "#222",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={e => (e.target.style.borderColor = "#222")}
        onBlur={e => (e.target.style.borderColor = "#ccc")}
      />
    )}
  </div>
);

export default function SimpleGetInTouch() {
  return (
    <section
      style={{
        maxWidth: 320,
        margin: "0 auto",
        padding: "72px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700, textAlign: "center" }}>Get in touch</h2>
      <a href="#" style={{ fontSize: 14, color: "#0057ff", textDecoration: "underline" }}>Book a call</a>
      <div
        style={{
          width: 320,
          border: "1.5px solid #e0e0e0",
          borderRadius: 10,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          boxSizing: "border-box",
        }}
      >
        <InputField label="Name" placeholder="Value" />
        <InputField label="Surname" placeholder="Value" />
        <InputField label="Email" placeholder="Value" />
        <InputField label="Message" placeholder="Value" multiline />
        <button
          style={{
            padding: "12px",
            borderRadius: 6,
            border: "none",
            background: "#111",
            color: "#fff",
            fontFamily: "inherit",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            width: "100%",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#333")}
          onMouseLeave={e => (e.currentTarget.style.background = "#111")}
        >
          Submit
        </button>
      </div>
    </section>
  );
}

