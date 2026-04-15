import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", width: "100%", maxWidth: "420px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#111",
            marginBottom: "4px",
          }}
        >
          Contact us
        </h1>
        <p style={{ color: "#555", fontSize: "0.95rem", marginBottom: "20px" }}>
          Subtitle
        </p>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "6px",
            padding: "24px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: "14px", textAlign: "left" }}>
            <label
              style={{ fontSize: "0.8rem", color: "#333", display: "block", marginBottom: "4px" }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Value"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Surname */}
          <div style={{ marginBottom: "14px", textAlign: "left" }}>
            <label
              style={{ fontSize: "0.8rem", color: "#333", display: "block", marginBottom: "4px" }}
            >
              Surname
            </label>
            <input
              type="text"
              name="surname"
              placeholder="Value"
              value={form.surname}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "14px", textAlign: "left" }}>
            <label
              style={{ fontSize: "0.8rem", color: "#333", display: "block", marginBottom: "4px" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Value"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "18px", textAlign: "left" }}>
            <label
              style={{ fontSize: "0.8rem", color: "#333", display: "block", marginBottom: "4px" }}
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Value"
              value={form.message}
              onChange={handleChange}
              rows={4}
              style={{ ...inputStyle, resize: "vertical", height: "90px" }}
            />
          </div>

          {/* Submit */}
          <button onClick={handleSubmit} style={buttonStyle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "7px 10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "0.85rem",
  color: "#333",
  backgroundColor: "#fff",
  boxSizing: "border-box",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#111",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "0.9rem",
  cursor: "pointer",
  fontWeight: "500",
};

export default Contact;