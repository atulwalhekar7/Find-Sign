// import { useState } from "react";
// import { Box } from "@mui/material";

// export default function NakraniContact() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         .contact-page {
//           display: flex;
//           padding: 64px 196px;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 10px;
//           background:var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
//         }

//         /* 🔥 animation only */
//         .contact-row {
//           animation: fadeSlideUp 0.8s ease forwards;
//           opacity: 0;
//         }

//         @keyframes fadeSlideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .contact-left {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 64px;
//           flex: 0 0 350px;
//         }

//        .contact-left h2 {
//   color: #073B2F;
//   font-family: 'GT Super Display Medium';
//   font-size: 44px;
//   font-weight: 500;
//   line-height: 54px;
//   letter-spacing: -0.88px;

//   position: relative;
//   display: inline-block;
// }

// .contact-left h2::after {
//   content: "";
//   display: block;
//   width: 230px; /* adjust as needed */
//   height: 2px;
//   background: #073B2F;
//   margin-top: 8px;
// }

//         .contact-left p {
//           color: #000;
//           font-family: 'sohne';;
//           font-size: 18px;
//           font-weight: 300;
//           line-height: 28px;
//           max-width: 220px;
//         }

//         .contact-cta {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 48px;
//           padding: 12px 24px;
//           border-radius: 8px;
//           background: #69E4DC;
//           color: #073B2F;
//           font-family: "CX80";
//           font-size: 15px;
//           font-weight: 700;
//           line-height: 15px;
//           letter-spacing: 4.8px;
//           text-decoration: none;
//           text-transform: uppercase;
//           white-space: nowrap;
//           gap: 10px;
//           transition: transform 0.2s ease, background 0.2s ease;
//           width: fit-content;
//         }

//         .contact-cta:hover {
//           background: #3DD6CC;
//           transform: translateY(-2px);
//         }

//         .contact-cta:active {
//           transform: scale(0.98);
//         }

//         .vibrate-icon {
//           animation: call-vibrate 3s infinite ease-in-out;
//         }

//         @keyframes call-vibrate {
//           0%, 20%, 100% { transform: rotate(0deg); }
//           3%, 9%, 15% { transform: rotate(-12deg); }
//           6%, 12%, 18% { transform: rotate(12deg); }
//         }

//         .contact-right {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//           min-width: 0;
//         }

//         .contact-right form {
//           display: flex;
//           width: 100%;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 16px;
//         }

//         /* 🔥 stagger animation */
//         .contact-field {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//           width: 100%;

//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeItem 0.5s ease forwards;
//         }

//         .contact-field:nth-child(1) { animation-delay: 0.1s; }
//         .contact-field:nth-child(2) { animation-delay: 0.2s; }
//         .contact-field:nth-child(3) { animation-delay: 0.3s; }
//         .contact-field:nth-child(4) { animation-delay: 0.4s; }
//         .contact-field:nth-child(5) { animation-delay: 0.5s; }

//         @keyframes fadeItem {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .contact_label {
//           color: #000;
//           font-family: 'DM Sans';
//           font-size: 20px;
//           font-weight: 400;
//           line-height: 28px;
//         }

//         .contact-input {
//           height: 48px;
//           padding: 8px 16px;
//           width: 100%;
//           border-radius: 8px;
//           background: #FFF;
//           border: none;
//           outline: none;
//           font-family: 'Sohne';
//            font-weight: 400;
//           font-size: 20px;
//         }

//         .contact-input::placeholder, .contact-textarea::placeholder { color: #BDBDBD; }
//         .contact-input:focus { outline: 1.5px solid #69E4DC; }

//         .contact-textarea {
//           height: 112px;
//           padding: 8px 16px;
//           width: 100%;
//           border-radius: 8px;
//           background: #FFF;
//           border: none;
//           outline: none;
//           font-family: 'Sohne';
//           font-weight: 400;
//           font-size: 20px;
//           resize: none;
//         }

//         .contact-textarea:focus { outline: 1.5px solid #69E4DC; }

//         .contact-btn {
//           width: 100%;
//           height: 48px;
//           border-radius: 8px;
//           background: #69E4DC;
//           border: none;
//           cursor: pointer;
//           color: #073B2F;
//            font-family: 'CX80';
//           font-size: 15px;
//           font-weight: 700;
//           letter-spacing: 4.8px;
//           text-transform: uppercase;

//           /* 🔥 animation only */
//           transition: transform 0.2s ease;
//         }

//         .contact-btn:hover { 
//           background: #3DD6CC;
//           transform: translateY(-2px);
//         }

//         .contact-btn:active {
//           transform: scale(0.98);
//         }

//         .contact-success {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 14px;
//           text-align: center;

//           /* 🔥 animation */
//           opacity: 0;
//           animation: fadeIn 0.5s ease forwards;
//         }

//         @keyframes fadeIn {
//           to { opacity: 1; }
//         }

//         .contact-success-icon {
//           width: 52px;
//           height: 52px;
//           border-radius: 50%;
//           background: #CCFBF1;
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           animation: pop 0.4s ease;
//         }

//         @keyframes pop {
//           0% { transform: scale(0.6); }
//           100% { transform: scale(1); }
//         }

//         .contact-success-title {
//           font-size: 20px;
//           font-weight: 500;
//           color: #073B2F;
//         }

//         .contact-success-sub {
//           font-size: 16px;
//           font-weight: 300;
//           color: #757575;
//         }

//         @media (max-width: 900px) {
//           .contact-page { padding: 40px 20px; }

//           .contact-row {
//             flex-direction: column !important;
//             gap: 24px !important;
//           }

//           .contact-left {
//             flex: none !important;
//             width: 100% !important;
//             gap: 16px;
//           }

//           .contact-left h2 {
//             width: 100%;
//             font-size: 32px;
//             line-height: 42px;
//           }

//           .contact-left p {
//             width: 100%;
//             max-width: 100%;
//             font-size: 18px;
//           }

//           .contact-right {
//             width: 100% !important;
//           }
//         }
//       `}</style>

//       <div id="contact-form" className="contact-page">
//         <Box sx={{ width: "100%", maxWidth: "1120px", margin: "0 auto" }}>
//           <Box
//             className="contact-row"
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "flex-start",
//               columnGap: "120px",
//               width: "100%",
//             }}
//           >
//             <div className="contact-left">
//               <h2>Get in touch</h2>
//               <p>Tell us what you're looking for, and we'll come back with next steps.</p>
//               <a
//                 href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-cta"
//               >
//                 <svg className="vibrate-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.6-.35-.12-.73-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 2 3.2 2.45 3.2 2.99 3.2 12.37 10.83 20 20.21 20c.54 0 .99-.45.99-.99v-2.64c0-.54-.45-.99-.99-.99z" />
//                 </svg>
//                 Book a Call
//               </a>
//             </div>

//             <div className="contact-right">
//               {submitted ? (
//                 <div className="contact-success">
//                   <div className="contact-success-icon">
//                     ✓
//                   </div>
//                   <span className="contact-success-title">Message sent!</span>
//                   <span className="contact-success-sub">We'll be in touch soon.</span>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="contact-field">
//                     <label className="contact_label">First name</label>
//                     <input className="contact-input" placeholder="e.g. Sarah" required />
//                   </div>

//                   <div className="contact-field">
//                     <label className="contact_label">Last name</label>
//                     <input className="contact-input" placeholder="e.g. Smith" required />
//                   </div>

//                   <div className="contact-field">
//                     <label className="contact_label">Email</label>
//                     <input className="contact-input" type="email" placeholder="e.g. sarah@gmail.com" required />
//                   </div>

//                   <div className="contact-field">
//                     <label className="contact_label">Message</label>
//                     <textarea className="contact-textarea" placeholder="What are you looking for?" required />
//                   </div>

//                   <button type="submit" className="contact-btn">Submit</button>
//                 </form>
//               )}
//             </div>
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';

const COLORS = {
  racingGreen: "#073B2F",
  aqua: "#69E4DC",
  black: "#000000",
  white: "#FFFFFF",
};

const SERVICES = [
  "Buyer Advocate",
  "Advisory",
  "Property Management",
  "Settlement Agent",
  "Building Inspection",
  "Sales Agent",
  "Quantity Surveyor",
  "Accounting",
];

interface NakraniContactProps {
  initialService?: string;
  showService?: boolean;
  hideInternalHeading?: boolean; // New prop to hide the internal heading
}

export default function GetInTouch({ initialService = "", showService = false, hideInternalHeading = false }: NakraniContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [isSending, setIsSending] = useState(false); // Keep isSending for button disabled state
  const [selectedService, setSelectedService] = useState(initialService);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true
    if (form.current) {
      emailjs
        .sendForm('service_78mscvf', 'template_gy6jf2o', form.current, {
          publicKey: 'LxY_G536CLzBbrRV-',
        })
        .then(
          () => {
            setSubmitted(true);
            setIsSending(false); // Reset sending state
            form.current?.reset();
            setContactMethod("");
            setSelectedService(initialService);
          },
          (error: any) => {
            setIsSending(false); // Reset sending state on error
            console.error('EmailJS Error:', error.text);
            alert("Failed to send message. Please try again later.");
          },
        );
    }
  };

  return (
    <>
      <style>{`
         url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.contact-page {
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 64px 140px;
  flex-direction: column;
  align-items: center;
  background: #ebe6de;
}

.main-container {
  display: flex;
  width: 100%;
  max-width: 1164px;
  align-items: flex-start;
  gap: 36px;
  margin: 0 auto;
}

/* LEFT SIDE */

.contact-left {
  display: flex;
  width: 32%;
  min-width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
}

.contact-left h2 {
  width: 100%;
  color: #073b2f;
  font-family: "GT Super Display", Georgia, serif;
  font-size: 44px;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: -0.88px;
}

.description-text {
  width: 100%;
  max-width: 297px;
  color: #000;
  font-family: 'sohne';
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
}

.contact-cta {
  display: inline-flex;
  height: 48px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #69e4dc;
  color: #073b2f;
  text-decoration: none;
  font-family: "CX80BOLD";
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  transition: all 0.25s ease;
}

.contact-cta:hover {
  transform: translateY(-1px);
  opacity: 0.95;
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

.toggle-group {
  display: flex;
  gap: 12px;
 
}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 44px;
  padding: 8px 24px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid #69e4dc;
  color: #073b2f;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-btn:hover {
  background: rgba(105, 228, 220, 0.12);
}

.toggle-btn.selected {
 
  border-color: #69e4dc;
}

.submit-btn {
  display: flex;
  width: 100%;
  height: 52px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #073b2f;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: "CX80BOLD";
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-top: 12px;
  transition: all 0.25s ease;
}

.submit-btn:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  background: #ccc;
  color: #666;
  cursor: not-allowed;
  opacity: 0.7;
}

/* =========================
   LARGE LAPTOPS
========================= */

@media (max-width: 1440px) {
  .contact-page {
    padding: 56px 72px;
  }

  .contact-left h2 {
    font-size: 40px;
    line-height: 48px;
  }

  .description-text {
    font-size: 24px;
    line-height: 36px;
    font-weight:300;
    color: #000;
width: 297px;
  }
}

/* =========================
   LAPTOPS
========================= */

@media (max-width: 1200px) {
  .contact-page {
    padding: 48px 40px;
  }

  .main-container {
    gap: 32px;
  }

  .contact-left {
    min-width: 260px;
  }

  .contact-left h2 {
    font-size: 38px;
    line-height: 46px;
  }

  .description-text {
     font-size: 24px;
    line-height: 36px;
    font-weight:300;
    color: #000;
width: 297px;
  }

  .contact_label {
    font-size: 18px;
  }

  .contact-input,
  .contact-textarea {
    font-size: 16px;
  }
}

/* =========================
   TABLETS
========================= */

@media (max-width: 992px) {
  .contact-page {
    padding: 40px 32px;
  }

  .main-container {
    flex-direction: column;
    gap: 48px;
  }

  .contact-left,
  .contact-right {
    width: 100%;
    max-width: 100%;
  }

  .description-text,
  .nikki-info {
    max-width: 100%;
  }

  .contact-field-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-group {
    width: 100%;
    
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .contact-page {
    padding: 32px 20px;
  }

  .main-container {
    gap: 40px;
  }

  .contact-left {
    min-width: 100%;
    gap: 28px;
  }

  .contact-left h2 {
    font-size: 34px;
    line-height: 42px;
  }

  .description-text {
    font-size: 20px;
    line-height: 30px;
  }

  .nikki-info {
    font-size: 18px;
    line-height: 28px;
  }

  .contact_label {
    font-size: 17px;
    line-height: 26px;
  }

  .contact-input {
    height: 50px;
    font-size: 16px;
  }

  .contact-textarea {
    font-size: 16px;
    min-height: 120px;
  }

  .toggle-group {
    width: 100%;
    flex-direction: column;
  }

  .toggle-btn {
    width: 100%;
  }

  .submit-btn {
    height: 50px;
    letter-spacing: 3px;
  }
}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {
  .contact-page {
    padding: 24px 16px;
  }

  .contact-left h2 {
    font-size: 30px;
    line-height: 38px;
  }

  .description-text {
    font-size: 18px;
    line-height: 28px;
  }

  .contact-cta {
    width: 100%;
  }

  .submit-btn {
    font-size: 13px;
    letter-spacing: 2px;
  }
}
      `}</style>

      <div className="contact-page">
        <div className="main-container">
          {/* LEFT SIDE */}
          <div className="contact-left">
            {!hideInternalHeading && (
              <h2 style={{fontFamily:"GT Super Display Medium" ,fontSize:"44px", fontWeight:"500",letterSpacing:"-0.88px",lineHeight:"54px",color:"#073B2F" ,height:"48px",width:"350px",fontStyle:"normal", marginBottom: "26px"}}>Get in touch</h2>
            )}
            <p className="description-text">
              Tell us what you’re looking for, and we’ll come back with next steps.
            </p>
            
            <a href="#" className="contact-cta">
              BOOK A CALL
            </a>

            <div className="nikki-info" style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
              <span>Contact Niki</span>
              <span>T: 0431 158 233</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            {submitted ? (
              <div className="nikki-info">Thank you! We will be in touch.</div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="form-group">
                  <label className="contact_label">First name</label>
                  <input className="contact-input" placeholder="e.g. Sarah" required />
                </div>

                <div className="form-group">
                  <label className="contact_label">Last name</label>
                  <input className="contact-input" placeholder="e.g. Smith" required />
                </div>

                <div className="form-group">
                  <label className="contact_label">Phone number</label>
                  <input className="contact-input" placeholder="e.g. 0441 123 123" />
                </div>

                <div className="form-group">
                  <label className="contact_label">Email</label>
                  <input className="contact-input" type="email" placeholder="e.g. sarah@gmail.com" required />
                </div>

                {showService && (
                  <div className="form-group">
                    <label className="contact_label">Service</label>
                    <select 
                      name="service" 
                      className="contact-input" 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      style={{ appearance: "none", background: "#fff url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23073B2F%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E') no-repeat right 16px center" }}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                )}

               <div className="contact-field-row">
  <label className="contact_label">
    Would you prefer to be contacted by phone or email?
  </label>
  
  <div className="toggle-group">
    <button 
      type="button" 
      className={`toggle-btn ${contactMethod === "phone" ? "selected" : ""}`}
      onClick={() => setContactMethod("phone")}
    >
      PHONE
    </button>
    <button 
      type="button" 
      className={`toggle-btn ${contactMethod === "email" ? "selected" : ""}`}
      onClick={() => setContactMethod("email")}
    >
      EMAIL
    </button>
  </div>
</div>

                <div className="form-group">
                  <label className="contact_label">Message</label>
                  <textarea className="contact-textarea" placeholder="What are you looking for?" required />
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
      </div>

      <Dialog
        open={submitted}
        onClose={() => setSubmitted(false)}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: '16px',
            padding: '24px',
            backgroundColor: '#F9F9F9',
            border: `2px solid ${COLORS.aqua}`
          }
        }}
      >
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
          <Box sx={{
            width: 64, height: 64, borderRadius: '50%', backgroundColor: '#69E4DC',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#073B2F',
          }}>
            ✓
          </Box>
          <Typography sx={{ fontFamily: 'GT Super Display Medium', fontSize: '32px', color: '#073B2F', fontWeight: 500 }}>
            Success!
          </Typography>
          <Typography sx={{ fontFamily: 'Sohne', fontSize: '18px', color: '#000', fontWeight: 300, lineHeight: '28px' }}>
            Your message has been sent successfully. We will get back to you shortly.
          </Typography>
          <button
            className="contact-btn"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: '16px', width: 'auto', padding: '12px 48px' }}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}