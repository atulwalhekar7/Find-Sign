// import { NavLink } from "react-router-dom";
// import Logo from "../assets/FS Primary Lockup_Gold.png";

// import fbIcon from "../assets/icon/fb.svg";
// import igIcon from "../assets/icon/Instagram.svg";
// import liIcon from "../assets/icon/LinkedIn.svg";

// import tiIcon from "../assets/icon/Tiktok.svg"
// import goIcon from "../assets/icon/Google.svg"
// const socialIcons = [
//   { label: "Facebook", img: fbIcon, url: "https://www.facebook.com/nakranipropertybuyers/" },
//   { label: "Instagram", img: igIcon, url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" },
//   { label: "LinkedIn", img: liIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },

//   { label: "Tiktok", img: tiIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },
//   { label: "Google", img: goIcon, url: "https://www.google.com/search?kgmid=/g/11vyhyd916&hl=en-IN&q=Find+and+Sign+Buyer+Advocate&shem=rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=a7453dd27c8353ec&utm_source=rimspwouoe,sh/x/loc/osrp/m5/1" },
// ];

// const exploreLinks = [
//   { label: "About", to: "/about" },
//   { label: "Services", to: "/services" },
//   { label: "Client Outcomes", to: "/client-outcomes" },
//   { label: "Insights", to: "/insights" },
//   { label: "Contact", to: "/contact" },
// ];

// export default function Footer() {
//   return (
//     <>
//       <style>{`
//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .footer {
//           background: #073B2F;
//           color: white;
//           width: 100%;
//           position: relative;
//           overflow: hidden;
//           display: flex;
// height: 589px;
// padding: 96px 196px;
// flex-direction: column;
// align-items: flex-start;
// gap: 66px;
// align-self: stretch;
//         }

//         .call{
//         padding-top:24px;
//         font-family:"CX80 Trial VAR";
//         border-radius:8px;

//         }
//         .contact-cta{
//         display: flex;
// padding: 12px 16px;
// justify-content: center;
// align-items: center;
// gap: 10px;
// font-size: 14px;
// font-style: normal;
// // font-weight: 150;
// line-height: 14px; /* 100% */
// letter-spacing: 4.48px;
//         width:145px;
//         height:48px;
//         }


//         /* ✅ WHITE SHIMMER */
//         // .footer::before {
//         //   content: "";
//         //   position: absolute;
//         //   inset: 0;
//         //   background: linear-gradient(
//         //     120deg,
//         //     transparent,
//         //     rgba(255,255,255,0.06),
//         //     transparent
//         //   );
//         //   transform: translateX(-100%);
//         //   animation: shimmer 5s infinite;
//         // }

//         // @keyframes shimmer {
//         //   100% { transform: translateX(100%); }
//         // }

//         .footer-container {
//           max-width: 1180px;
//           margin: 0 auto;
//           padding: 80px 32px 48px;
//         }

//         .footer-grid {
//           display: grid;
//           grid-template-columns: repeat(12, 1fr);
//           column-gap:46px;
//           align-items: start;
//         }

//         .logo    { grid-column: 1 / span 2; }
//         .contact { grid-column: 3 / span 3; }
//         .explore { grid-column: 6 / span 2; }
//         .legal   { grid-column: 8 / span 2; }

//         .footer-section {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//         }

//         .footer-list {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 8px;
//           width: 100%;
//           // padding:10px
//         }

//         .social {
//        grid-column: 11 / 13;
//           display: flex;
//           justify-content: flex-start;
//           align-items: center;
//           gap: 30px;
//         }
// .social {
//   transform: translateX(-35px);
// }
//         .title {
//           font-family: "CX80";
//           font-size: 18px;
//           font-weight: 400;
//           line-height: 18px;
//           letter-spacing: 5.76px;
//           margin-bottom: 16px;
//           color: #F9F9F9;
//         }

//         /* ✅ POPUP + POINTER */
//         .link {
//           display: block;
//           font-family: "Sohne";
//           font-size: 16px;
//           font-weight: 400;
//           color: #EAE5DF;
//           text-decoration: none;
//           margin-bottom: 10px;
//           line-height: 1.6;

//           cursor: pointer;
//           transition: transform 0.2s ease;
//         }

//         .legal-link {
//           white-space: nowrap;
//         }

//         .link:hover {
//           transform: translateY(-2px) scale(1.03);
//         }

//         .contact-row {
//           display: flex;
//           align-items: flex-start;
        
//           width: 100%;
//           font-size: 16px;
//           line-height: 2.25;
//           font-family: "Sohne";
//           font-weight: 400;
//         }

//         .contact-label {
//           min-width: 14px;
//           color: #EAE5DF;
//         }

//         .contact-value {
//           color: #EAE5DF;
//           word-break: break-word;
//           transition: transform 0.2s ease;
//           textDecoration: 'underline'
//         }

//         .contact-value:hover {
//           transform: translateY(-2px) scale(1.03);
//         }

//         .social-link {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0.9;
//           text-decoration: none;
//           cursor: pointer;
//           transition: opacity 0.2s ease;
//         }

//         .social-link img {
//           width: 24px;
// height: 23.854px;
//         }

//         .social-link:hover {
//           opacity: 0.6;
//         }

//         .footer-bottom {
//           display: inline-flex;
//           align-items: center;
//           gap: 34px;
//           margin-top: 80px;
//         }

//         .footer-bottom-item {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 10px 0;
//           color: #846F58;
//           font-family: "Sohne";
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 24px;
//           white-space: nowrap;
//         }

//         .footer-bottom-spacer {
//           width: 160px;
//         }

//         .footer-bottom-abn {
//           width: 260px;
//         }

//         .footer-bottom-copy {
//           width: 354px;
//         }

//         @media (max-width: 768px) {
//           .footer-container { padding: 60px 20px 32px; }

//           .footer-grid {
//             grid-template-columns: 1fr 1fr;
//             row-gap: 32px;
//           }

//           .logo    { grid-column: 1 / span 2; }
//           .contact { grid-column: 1 / span 2; }
//           .explore { grid-column: 2 / span 1; }
//           .legal   { grid-column: 1 / span 1; }
//           .social  { grid-column: 1 / span 2; }

//           .footer-bottom {
//             display: flex;
//             width: 100%;
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 6px;
//             margin-top: 48px;
//           }

//           .footer-bottom-spacer {
//             display: none;
//           }

//           .footer-bottom-abn,
//           .footer-bottom-copy {
//             width: auto;
//           }
//         }

//         @media (max-width: 1024px) {
//           .footer-grid {
//             column-gap: 40px;
//           }
//         }
//       `}</style>

//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-grid">

//             <div className="logo">
//               <img src={Logo} alt="Find and Sign logo" style={{ width: "120px" }} />
//             </div>

//             <div className="contact footer-section">
//               <div className="title">CONTACT</div>
//               <div className="footer-list">
//                 <div className="contact-row">
//                   <span className="contact-label">T</span>
//                   <a className="contact-value" href="tel:0431158233">0431 158 233</a>
//                 </div>
//                 <div className="contact-row">
//                   <span className="contact-label">E</span>
//                   <a className="contact-value" href="mailto:niki@findandsignba.com.au">niki@findandsignba.com.au</a>
//                 </div>
//                 <div className="contact-row call">
//                   <a
//                 href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-cta"
//               >
//                 Book a Call
//               </a>
//                 </div>
//               </div>
//             </div>

//             <div className="explore footer-section">
//               <div className="title">EXPLORE</div>
//               <div className="footer-list">
//                 {exploreLinks.map(({ label, to }) => (
//                   <NavLink key={label} to={to} className="link">
//                     {label}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="legal footer-section">
//               <div className="title">LEGAL</div>
//               <div className="footer-list">
//                 <a className="link legal-link" href="#">
//                   Privacy Policy
//                 </a>
//                 <a className="link legal-link" href="#">
//                   Terms & Conditions
//                 </a>
//                 <span className="link">Licensed Real Estate Agent RA86202 / RA84411</span>
//                   <span className="link footer-bottom-abn">ABN 29 691 543 914</span>
//               </div>
//             </div>

//             <div className="social">
//               {socialIcons.map(({ label, img, url }) => (
//                 <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
//                   <img src={img} alt={label} />
//                 </a>
//               ))}
//             </div>

//           </div>

//           <div className="footer-bottom">
//             {/* <div className="footer-bottom-item footer-bottom-spacer" aria-hidden="true" /> */}
//             <span className="footer-bottom-item footer-bottom-copy">© 2026 Find and Sign Buyer Advocate</span>
//           </div>

//         </div>
//       </footer>
//     </>
//   );
// }



import { NavLink } from "react-router-dom";

import logo from "../assets/FS Primary Lockup_Gold.png";

import fbIcon from "../assets/icon/fb.svg";
import igIcon from "../assets/icon/Instagram.svg";
import liIcon from "../assets/icon/LinkedIn.svg";
import tiIcon from "../assets/icon/Tiktok.svg";
import goIcon from "../assets/icon/Google.svg";

const socialIcons = [
  { label: "Facebook", img: fbIcon, url: "https://www.facebook.com/nakranipropertybuyers/" },
  { label: "Instagram", img: igIcon, url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" },
  { label: "LinkedIn", img: liIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },
  { label: "Tiktok", img: tiIcon, url: "https://www.tiktok.com/" },
  { label: "Google", img: goIcon, url: "https://www.google.com/search?kgmid=/g/11vyhyd916&hl=en-IN&q=Find+and+Sign+Buyer+Advocate" },
];

const exploreLinks = [
  { label: "About", to: "/about" },
  { label: "Journeys", to: "/journeys" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .footer {
          background: #073B2F;
          color: white;
          width: 100%;
          display: flex;
          min-height: 589px;
          padding: 96px 196px; /* Updated per Figma */
          flex-direction: column;
          align-items: flex-start;
          gap: 66px; /* Space between social-row and grid-row */
          align-self: stretch;
        }

        /* ── SOCIAL ICONS ROW (Top) ── */
        .footer-social {
          display: flex;
          width: 258px;
          padding: 10px 0;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          transition: opacity 0.2s;
        }
        .social-link:hover { opacity: 0.6; }
        .social-link img { width: 24px; height: 24px; }

        /* ── MAIN CONTENT GRID ── */
        .footer-grid {
          display: inline-flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 55px 32px; 
          flex-wrap: wrap;
          width: 100%;
        }

        /* Logo Column */
        .footer-logo-container {
          width: 159px;
          height: 59px;
          flex-shrink: 0;
          aspect-ratio: 159/59;
        }
        .nav-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Contact Column */
        .footer-contact {
          display: flex;
          width: 267px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          margin-left: 32px; /* Space from logo */
        }

        /* Explore Column */
        .footer-explore {
          display: flex;
          width: 167px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        /* Legal Column */
        .footer-legal {
          display: flex;
          width: 168px;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        /* Text Styles */
        .section-title {
          font-family: "CX80BOLD", sans-serif;
          font-size: 18px;
          font-weight: 150;
          line-height: 18px;
          letter-spacing: 5.76px;
          color: #F9F9F9;
          padding: 10px 0;
          text-transform: uppercase;
        }

        .footer-row {
          display: flex;
          align-items: center;
          padding: 6px 0;
        }

        .footer-text, .footer-link {
          font-family: "Söhne", sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #EAE5DF;
          text-decoration: none;
        }
        .footer-link { text-decoration: underline; }

        .contact-label { margin-right: 8px; }

        .btn-book {
          display: flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          background: #69E4DC;
          border-radius: 8px;
          border: none;
          text-decoration: none;
          font-family: "CX80BOLD", sans-serif;
          font-size: 14px;
          letter-spacing: 4.48px;
          color: #073B2F;
          text-transform: uppercase;
          margin-top: 8px;
        }

        .footer-legal-text {
          font-family: "Söhne", sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #EAE5DF;
          padding: 4px 0;
        }

        .footer-bottom {
          margin-top: auto;
          width: 100%;
        }
        .footer-copyright {
          font-family: "Söhne", sans-serif;
          font-size: 16px;
          color: #846F58;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .footer { padding: 80px 40px; }
        }
        @media (max-width: 768px) {
          .footer-grid { flex-direction: column; }
          .footer-contact, .footer-explore, .footer-legal { width: 100%; margin-left: 0; }
        }
      `}</style>

      <footer className="footer">
        {/* Social Icons Row (Moves to top per your screenshot) */}
        <div className="footer-social">
          {socialIcons.map(({ label, img, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={img} alt={label} />
            </a>
          ))}
        </div>

        {/* Main Grid Row */}
        <div className="footer-grid">
          {/* Logo */}
          <div className="footer-logo-container">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </NavLink>
          </div>

          <div style={{width:"68px"}}>

          </div>

          {/* Contact */}
          <div className="footer-contact">
            <div className="section-title">Contact</div>
            <div className="footer-row">
              <span className="contact-label">T</span>
              <a className="footer-link" href="tel:0431158233">0431 158 233</a>
            </div>
            <div className="footer-row">
              <span className="contact-label">E</span>
              <a className="footer-link" href="mailto:niki@findandsignba.com.au">niki@findandsignba.com.au</a>
            </div>
            <div style={{width:"93px" ,display: "flex" ,padding:" 10px",alignItems: "center" ,gap: "10px"
}}>

            </div>
            <a href="https://calendly.com/..." target="_blank" rel="noopener noreferrer" className="btn-book">
              Book a call
            </a>
          </div>

          {/* Explore */}
          <div className="footer-explore">
            <div className="section-title">Explore</div>
            {exploreLinks.map(({ label, to }) => (
              <div className="footer-row" key={label}>
                <NavLink to={to} className="footer-text">{label}</NavLink>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div className="footer-legal">
            <div className="section-title">Legal</div>
            <div className="footer-row"><a href="#" className="footer-text">Privacy Policy</a></div>
            <div className="footer-row"><a href="#" className="footer-text">Terms & Conditions</a></div>
            <div className="footer-legal-text">
              Licensed Real Estate Agent<br />
              RA86202 / RA84411
            </div>
            <div className="footer-legal-text">ABN 29 691 543 914</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">© 2026 Find and Sign Buyer Advocate</span>
        </div>
      </footer>
    </>
  );
}