import React from "react";
import { Youtube, Linkedin, Twitter, ArrowUpRight } from "lucide-react";


// ── LOGO IMPORT AREA ──
// import LogoImg from "../assets/logo.png"; 

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          margin-bottom: 12px;
        }

        .footer-link:hover {
          color: #C9A96E;
          padding-left: 5px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-icon:hover {
          background: #C9A96E;
          color: #1F3D2B;
          transform: translateY(-3px);
        }
      `}</style>

      <footer style={styles.footer}>
        <div style={styles.container}>
          
          <div style={styles.brandCol}>
            {/* ── LOGO SECTION ── */}
            <div style={styles.logoWrapper}>
               {/* Logo image use karne ke liye neeche wali line uncomment karein:
                  <img src={LogoImg} alt="Nakrani Logo" style={{ height: '45px' }} /> 
               */}
               <span style={styles.logoText}>NAKRANI</span>
               <div style={styles.logoSubline}>Property Buyers</div>
            </div>

            <p style={styles.brandDesc}>
              Elevating the property buying experience in Perth with expert guidance and premium service.
            </p>

            <div style={styles.socialRow}>
              <a href="#" className="social-icon"><Twitter size={18} /></a>
              <a href="#" className="social-icon"><Youtube size={18} /></a>
              <a href="#" className="social-icon"><Linkedin size={18} /></a>
            </div>
          </div>

          <div style={styles.linksGrid}>
            <div style={styles.col}>
              <h4 style={styles.colTitle}>Services</h4>
              <a href="#" className="footer-link">Buying <ArrowUpRight size={12} /></a>
              <a href="#" className="footer-link">Investment Strategy</a>
              <a href="#" className="footer-link">Market Analysis</a>
            </div>

            <div style={styles.col}>
              <h4 style={styles.colTitle}>Explore</h4>
              <a href="#" className="footer-link">Our Process</a>
              <a href="#" className="footer-link">Success Stories</a>
              <a href="#" className="footer-link">Contact Us</a>
            </div>

            <div style={styles.col}>
              <h4 style={styles.colTitle}>Legal</h4>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>

        <div style={styles.bottomBar}>
          <span>© 2026 Nakrani Property Buyers. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: { background: "#1F3D2B", padding: "80px 0 0 0", color: "#fff", fontFamily: "'DM Sans', sans-serif" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 20px 60px 20px", display: "flex", gap: "60px", flexWrap: "wrap" },
  brandCol: { flex: "1.5", minWidth: "280px" },
  logoWrapper: { marginBottom: "24px" },
  logoText: { fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: "bold", letterSpacing: "2px", color: "#C9A96E" },
  logoSubline: { fontSize: "10px", textTransform: "uppercase", letterSpacing: "3px", color: "rgba(255,255,255,0.5)" },
  brandDesc: { fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", maxWidth: "320px" },
  socialRow: { display: "flex", gap: "12px" },
  linksGrid: { flex: "3", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px" },
  colTitle: { fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "24px", fontFamily: "'Playfair Display', serif" },
  bottomBar: { borderTop: "1px solid rgba(255,255,255,0.1)", padding: "30px 20px", textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.3)" }
};

export default Footer;
