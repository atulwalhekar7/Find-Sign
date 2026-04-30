// import { NavLink } from "react-router-dom";
// import Logo from "../assets/FS Primary Lockup_Gold.png";

// import fbIcon from "../assets/Vector (2).png";
// import igIcon from "../assets/Instagram (2).png";
// import liIcon from "../assets/Vector(1).png";

// const socialIcons = [
//   { label: "Facebook", img: fbIcon, url: "https://www.facebook.com/nakranipropertybuyers/" },
//   { label: "Instagram", img: igIcon, url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" },
//   { label: "LinkedIn", img: liIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },
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
//         }

//         /* ✅ WHITE SHIMMER */
//         .footer::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             120deg,
//             transparent,
//             rgba(255,255,255,0.06),
//             transparent
//           );
//           transform: translateX(-100%);
//           animation: shimmer 5s infinite;
//         }

//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }

//         .footer-container {
//           max-width: 1120px;
//           margin: 0 auto;
//           padding: 80px 40px 48px;
//         }

//         .footer-grid {
//           display: grid;
//           grid-template-columns: repeat(12, 1fr);
//           column-gap: 24px;
//           row-gap: 40px;
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
//           gap: 10px;
//           width: 100%;
//         }

//         .social {
//           grid-column: 10 / span 2;
//           display: flex;
//           justify-content: flex-end;
//           align-items: center;
//           gap: 32px;
//         }

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
//           font-family: "Sohne", sans-serif;
//           font-size: 13px;
//           font-weight: 300;
//           color: white;
//           text-decoration: none;
//           margin-bottom: 10px;
//           line-height: 1.6;

//           cursor: pointer;
//           transition: transform 0.2s ease;
//         }

//         .link:hover {
//           transform: translateY(-2px) scale(1.03);
//         }

//         .contact-row {
//           display: flex;
//           align-items: flex-start;
        
//           width: 100%;
//           font-size: 13px;
//           line-height: 2.25;
//           font-family: "Sohne", sans-serif;
//           font-weight: 300;
          
//         }

//         .contact-label {
//           min-width: 14px;
//           font-size: 16px;
//           color: #F9F9F9;
//           margin-right: 2px;
//         }

//         .contact-value {
//           color: white;
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
//           color: #F9F9F9;
//           font-family: "Sohne", sans-serif;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 24px;
//           white-space: nowrap;
//         }

//         .footer-bottom-spacer {
//           width: 145px;
//         }

//         .footer-bottom-abn {
//           width: 223px;
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
//           .explore { grid-column: 1 / span 1; }
//           .legal   { grid-column: 2 / span 1; }
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
//                   <span className="contact-label">T: </span>
//                   <a className="contact-value" href="tel:0431158233">0431 158 233</a>
//                 </div>
//                 <div className="contact-row">
//                   <span className="contact-label">E: </span>
//                   <a className="contact-value" href="mailto:niki@findandsignba.com.au">niki@findandsignba.com.au</a>
//                 </div>
//                 <div className="contact-row">
//                   {/* <span className="contact-label">W</span> */}
//                   <a className="contact-value" href="/contact" target="_blank" rel="noopener noreferrer">
//                     Book a call
//                   </a>
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
//                 <a className="link" href="#">
//                   Privacy Policy
//                 </a>
//                 <a className="link" href="#">
//                   Terms & Conditions
//                 </a>
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
//             <div className="footer-bottom-item footer-bottom-spacer" aria-hidden="true" />
//             <span className="footer-bottom-item footer-bottom-abn">ABN XXXXXXXXXX</span>
//             <span className="footer-bottom-item footer-bottom-copy">© 2026 Find and Sign Buyer Advocate</span>
//           </div>

//         </div>
//       </footer>
//     </>
//   );
// }


import { NavLink } from "react-router-dom";
import Logo from "../assets/FS Primary Lockup_Gold.png";

import fbIcon from "../assets/Vector (2).png";
import igIcon from "../assets/Instagram (2).png";
import liIcon from "../assets/Vector(1).png";

import tiIcon from "../assets/icon/Tiktok.png"
import goIcon from "../assets/icon/Union.png"
const socialIcons = [
  { label: "Facebook", img: fbIcon, url: "https://www.facebook.com/nakranipropertybuyers/" },
  { label: "Instagram", img: igIcon, url: "https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" },
  { label: "LinkedIn", img: liIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },

  { label: "Tiktok", img: tiIcon, url: "https://www.linkedin.com/in/niki-nakrani-13b269237/" },
  { label: "Google", img: goIcon, url: "https://www.google.com/search?kgmid=/g/11vyhyd916&hl=en-IN&q=Find+and+Sign+Buyer+Advocate&shem=rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=a7453dd27c8353ec&utm_source=rimspwouoe,sh/x/loc/osrp/m5/1" },
];

const exploreLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Client Outcomes", to: "/client-outcomes" },
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
          position: relative;
          overflow: hidden;
        }

        .call{
        padding-top:24px;
        }
        .contact-cta{
        width:145px;
        height:48px;
        }


        /* ✅ WHITE SHIMMER */
        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.06),
            transparent
          );
          transform: translateX(-100%);
          animation: shimmer 5s infinite;
        }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .footer-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 80px 32px 48px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap:56px;
          align-items: start;
        }

        .logo    { grid-column: 1 / span 2; }
        .contact { grid-column: 3 / span 3; }
        .explore { grid-column: 6 / span 2; }
        .legal   { grid-column: 8 / span 2; }

        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          width: 100%;
        }

        .social {
       grid-column: 11 / 13;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 30px;
        }
.social {
  transform: translateX(-35px);
}
        .title {
          font-family: "CX80";
          font-size: 18px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 5.76px;
          margin-bottom: 16px;
          color: #F9F9F9;
        }

        /* ✅ POPUP + POINTER */
        .link {
          display: block;
          font-family: "Sohne", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: white;
          text-decoration: none;
          margin-bottom: 10px;
          line-height: 1.6;

          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .legal-link {
          white-space: nowrap;
        }

        .link:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
        
          width: 100%;
          font-size: 13px;
          line-height: 2.25;
          font-family: "Sohne", sans-serif;
          font-weight: 300;
        }

        .contact-label {
          min-width: 14px;
          color: rgba(249, 249, 249, 0.72);
        }

        .contact-value {
          color: white;
          word-break: break-word;
          transition: transform 0.2s ease;
          textDecoration: 'underline'
        }

        .contact-value:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .social-link img {
          width: 24px;
height: 23.854px;
        }

        .social-link:hover {
          opacity: 0.6;
        }

        .footer-bottom {
          display: inline-flex;
          align-items: center;
          gap: 34px;
          margin-top: 80px;
        }

        .footer-bottom-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          color: rgb(109, 88, 67);
          font-family: "Sohne", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          white-space: nowrap;
        }

        .footer-bottom-spacer {
          width: 160px;
        }

        .footer-bottom-abn {
          width: 260px;
        }

        .footer-bottom-copy {
          width: 354px;
        }

        @media (max-width: 768px) {
          .footer-container { padding: 60px 20px 32px; }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 32px;
          }

          .logo    { grid-column: 1 / span 2; }
          .contact { grid-column: 1 / span 2; }
          .explore { grid-column: 1 / span 1; }
          .legal   { grid-column: 2 / span 1; }
          .social  { grid-column: 1 / span 2; }

          .footer-bottom {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            margin-top: 48px;
          }

          .footer-bottom-spacer {
            display: none;
          }

          .footer-bottom-abn,
          .footer-bottom-copy {
            width: auto;
          }
        }

        @media (max-width: 1024px) {
          .footer-grid {
            column-gap: 40px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">

            <div className="logo">
              <img src={Logo} alt="Find and Sign logo" style={{ width: "120px" }} />
            </div>

            <div className="contact footer-section">
              <div className="title">CONTACT</div>
              <div className="footer-list">
                <div className="contact-row">
                  <span className="contact-label">T</span>
                  <a className="contact-value" href="tel:0431158233">0431 158 233</a>
                </div>
                <div className="contact-row">
                  <span className="contact-label">E</span>
                  <a className="contact-value" href="mailto:niki@findandsignba.com.au">niki@findandsignba.com.au</a>
                </div>
                <div className="contact-row call">
                  <a
                href="https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta"
              >
                Book a Call
              </a>
                </div>
              </div>
            </div>

            <div className="explore footer-section">
              <div className="title">EXPLORE</div>
              <div className="footer-list">
                {exploreLinks.map(({ label, to }) => (
                  <NavLink key={label} to={to} className="link">
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="legal footer-section">
              <div className="title">LEGAL</div>
              <div className="footer-list">
                <a className="link legal-link" href="#">
                  Privacy Policy
                </a>
                <a className="link legal-link" href="#">
                  Terms & Conditions
                </a>
                <span className="link">Licensed Real Estate Agent RA86202 / RA84411</span>
                  <span className="link footer-bottom-abn">ABN 29 691 543 914</span>
              </div>
            </div>

            <div className="social">
              {socialIcons.map(({ label, img, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={img} alt={label} />
                </a>
              ))}
            </div>

          </div>

          <div className="footer-bottom">
            {/* <div className="footer-bottom-item footer-bottom-spacer" aria-hidden="true" /> */}
            <span className="footer-bottom-item footer-bottom-copy">© 2026 Find and Sign Buyer Advocate</span>
          </div>

        </div>
      </footer>
    </>
  );
}
