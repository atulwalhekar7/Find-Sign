import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";

const NakraniPropertyContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .contact-input {
          width: 100%;
          border: none;
          border-bottom: 1.5px solid #E8E3DB;
          padding: 12px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          background: transparent;
          outline: none;
          transition: all 0.3s ease;
          color: #1F3D2B;
        }

        .contact-input:focus {
          border-bottom-color: #1F3D2B;
          padding-left: 8px; /* Subtle interaction hint */
        }

        .contact-label {
          font-size: 11px;
          font-weight: 600;
          color: #1F3D2B;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
          margin-top: 24px;
        }

        .btn-submit:hover {
          background: #2a523a !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(31, 61, 43, 0.15);
        }
      `}</style>

      <section style={styles.section}>
        {/* ── Heading UI (As per image 2) ── */}
        <div style={styles.headerArea}>
          <div style={styles.eyebrowContainer}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>Get In Touch</span>
            <div style={styles.eyebrowLine} />
          </div>

          <h2 style={styles.mainTitle}>
            Let's Start The <span style={styles.italicWord}>Journey</span>
          </h2>

          <p style={styles.mainSubtitle}>
            Real experiences from real buyers — across Perth and beyond. 
            Reach out today to secure your future home.
          </p>
        </div>

        {/* ── Main Container (As per image 1) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={styles.mainContainer}
        >
          {/* Floating Info Card */}
          <div style={styles.infoCard}>
            <div style={{ position: "relative", zIndex: 3 }}>
              <h3 style={styles.infoTitle}>Contact Information</h3>
              <p style={styles.infoSubtitle}>Our team is available 7 days a week to discuss your property requirements.</p>
              
              <div style={styles.infoList}>
                <div style={styles.infoItem}>
                  <div style={styles.iconCircle}><Phone size={18} /></div>
                  <span>+61 4xx xxx xxx</span>
                </div>
                <div style={styles.infoItem}>
                  <div style={styles.iconCircle}><Mail size={18} /></div>
                  <span>hello@nakrani.com.au</span>
                </div>
                <div style={styles.infoItem}>
                  <div style={styles.iconCircle}><MapPin size={18} /></div>
                  <span>Perth, Western Australia</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Background Element */}
            <div style={styles.decoCircle} />
          </div>

          {/* Interaction/Form Area */}
          <div style={styles.formArea}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={styles.successMessage}
                >
                  <CheckCircle2 size={64} color="#C9A96E" strokeWidth={1.5} />
                  <h3 style={styles.successTitle}>Inquiry Sent</h3>
                  <p style={{ color: "#7A7468" }}>We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={styles.formGrid}>
                    <div>
                      <label className="contact-label">Your Name</label>
                      <input className="contact-input" placeholder="e.g. John Doe" required />
                    </div>
                    <div>
                      <label className="contact-label">Your Email</label>
                      <input className="contact-input" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <label className="contact-label">Subject</label>
                  <input className="contact-input" placeholder="I'm looking to buy in Perth..." required />

                  <label className="contact-label">Your Message</label>
                  <textarea 
                    className="contact-input" 
                    placeholder="Tell us about your dream home..." 
                    style={{ minHeight: '80px', resize: 'none' }}
                    required 
                  />

                  <motion.button 
                    whileTap={{ scale: 0.97 }}
                    type="submit" 
                    className="btn-submit" 
                    style={styles.btnSubmit}
                  >
                    Send Message 
                    <ArrowRight size={18} />
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    background: "#F9F7F2", // Creamy off-white background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 10px",
    fontFamily: "'DM Sans', sans-serif",
  },
  headerArea: {
    textAlign: "center",
    marginBottom: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  eyebrowContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "16px",
  },
  eyebrowLine: { width: "40px", height: "1px", background: "#C9A96E" },
  eyebrowText: {
    fontSize: "12px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#C9A96E",
    fontWeight: 600,
  },
  mainTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "56px",
    color: "#1F3D2B",
    fontWeight: 700,
    margin: "0 0 20px 0",
    lineHeight: 1.1,
  },
  italicWord: {
    fontStyle: "italic",
    fontWeight: "400",
    color: "#5E7D63", // Softer green contrast
  },
  mainSubtitle: {
    color: "#7A7468",
    fontSize: "18px",
    fontWeight: 300,
    maxWidth: "650px",
    lineHeight: 1.6,
  },
  mainContainer: {
    background: "#fff",
    width: "100%",
    maxWidth: "1100px",
    borderRadius: "32px",
    boxShadow: "0 40px 100px rgba(31, 61, 43, 0.08)",
    display: "flex",
    position: "relative",
    padding: "50px",
    minHeight: "550px",
  },
  infoCard: {
    background: "#1F3D2B",
    width: "380px",
    borderRadius: "24px",
    padding: "50px 40px",
    color: "#fff",
    position: "absolute",
    left: "30px",
    top: "30px",
    bottom: "30px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 2,
  },
  infoTitle: { fontSize: "28px", fontWeight: "600", marginBottom: "16px", fontFamily: "'Playfair Display', serif" },
  infoSubtitle: { fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "40px", lineHeight: "1.6" },
  infoList: { display: "flex", flexDirection: "column", gap: "28px" },
  infoItem: { display: "flex", alignItems: "center", gap: "20px", fontSize: "15px" },
  iconCircle: {
    width: "40px", height: "40px", borderRadius: "50%", background: "rgba(201, 169, 110, 0.15)",
    display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A96E"
  },
  formArea: { flex: 1, marginLeft: "420px", paddingLeft: "30px" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" },
  btnSubmit: {
    background: "#1F3D2B", color: "#fff", border: "none", padding: "16px 36px",
    borderRadius: "12px", fontSize: "15px", fontWeight: "600", marginTop: "50px",
    cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", transition: "all 0.3s ease"
  },
  decoCircle: {
    position: "absolute", bottom: "-60px", right: "-60px", width: "220px", height: "220px",
    borderRadius: "50%", background: "rgba(201, 169, 110, 0.12)", zIndex: 1
  },
  successMessage: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" },
  successTitle: { fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "#1F3D2B", marginTop: "20px" }
};

export default NakraniPropertyContact;