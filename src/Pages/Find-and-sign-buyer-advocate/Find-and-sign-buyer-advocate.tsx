import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import qrImage from '../../assets/niki-nakrani-buyer-advocate.png';
import logo1 from "../../assets/find-sign-brown-logo.png";


import id1 from '../../assets/benefits-of-using-a-buyers-agent-perth.jpg';
import id2 from '../../assets/buyer-advocate-agent-perth.png';
import id3 from '../../assets/niki-nikrani-buyer-advocate-perth-australia.png';
import id4 from '../../assets/Australia-Find-And-Sign-About-Us.jpg';
import id5 from '../../assets/find-sign-buyer-advocates-perth.jpg';
import id6 from '../../assets/what-is-a-buyers-agent-perth.jpg';
import id7 from '../../assets/best-perth-suburbs-for-property-investment.png';
import id8 from '../../assets/niki-nikrani-buyer-advocate-perth-australia.jpg';
import shareIcon from '../../assets/share.png';


const collageImages = [id1, id2, id3, id4, id5, id6, id7, id8];
import googleLogo from "../../assets/icon/Union.png";
import ReviewLogo from "../../assets/edit-05.png";
import facebookLogo from "../../assets/icon/Vector (2).png";
import InstagramLogo from "../../assets/Instagram.png";
import tiktokImg from "../../assets/icon/Tiktok.png";
import LinkdinImg from "../../assets/icon/Vector(1).png";
import websiteImg from "../../assets/arrow-up-right-large.png";

/* ── Inline SVG brand icons ── */

const GoogleGIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"/>
    <path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.5409-1.8368.8636-3.0477.8636-2.3445 0-4.3282-1.5832-5.0359-3.7104H.9573v2.3318C2.4382 15.9832 5.4818 18 9 18z"/>
    <path fill="#FBBC05" d="M3.9641 10.71c-.1814-.5409-.2855-1.1182-.2855-1.71s.1041-1.1691.2855-1.71V4.9582H.9573C.3477 6.1731 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.9641 10.71z"/>
    <path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5814-2.5814C13.4632.8918 11.4259 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.9641 7.29C4.6718 5.1627 6.6555 3.5795 9 3.5795z"/>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="#fff" stroke="none"/>
  </svg>
);

const TikTokIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.49 1.52V7.44s-1.88.09-3.43-1.62z"/>
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ── Link definitions ── */
type ProfileLink = {
  name: string;
  url: string;
  
  icon: React.ReactNode;
};

const profileLinks: ProfileLink[] = [
  {
    name: 'Google profile',
    url: 'https://www.google.com/search?q=Find+and+Sign+Buyer+Advocate',
   
icon: (
  <img
    src={googleLogo}
    alt="Google Business Profile"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),  },
  {
    name: 'Write a review',
    url: 'https://search.google.com/local/writereview?placeid=ChIJj2qYypAEkoERSz9lpUZb6o4&source=g.page.m._&laa=merchant-review-solicitation',
   
icon: (
  <img
    src={ReviewLogo}
    alt="Write a Google review for Find and Sign"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),   },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/findandsignbuyeradvocate/',
   
icon: (
  <img
    src={facebookLogo}
    alt="Facebook page of Find and Sign Buyer Advocate"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/find_and_sign?igsh=MWQxdDZzeG04dmFpYw%3D%3D',
    
icon: (
  <img
    src={InstagramLogo}
    alt="Instagram page of Find and Sign Buyer Advocate"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),  },
  {
    name: 'Tiktok',
    url: 'https://www.tiktok.com/@findandsignba/',
   
icon: (
  <img
    src={tiktokImg}
    alt="TikTok page of Find and Sign Buyer Advocate"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/niki-nakrani-13b269237/',
   
icon: (
  <img
    src={LinkdinImg}
    alt="Linkdin page of Find and Sign Buyer Advocate"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),   },
  {
    name: 'Website',
    url: 'https://findandsignba.com.au/',
   
icon: (
  <img
    src={websiteImg}
    alt="Website of Find and Sign Buyer Advocate"
    style={{
      width: '24px',
      height: '24px',
      // objectFit: 'contain',
    }}
  />
),  },
];

/* ── Component ── */
const FindAndSignBaAdvocate = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = { title: 'Find and Sign — Buyer Advocate', url: window.location.href };
    try {
      if (navigator.share) { await navigator.share(shareData); return; }
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* user cancelled */ }
  };

  return (
    <div
      className="page-wrap"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
          paddingTop: '40px',
          paddingBottom:'20px',

      }}
    >
      {/* ── Collage background — always dark, never changes ── */}
      <div
        className="collage-grid"
        style={{
          position: 'fixed',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '3px',
          pointerEvents: 'none',
        }}
      >
        {collageImages.map((src, i) => (
          <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.65) saturate(1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Neutral dim layer only — no green tint here, so the collage's own colours read through.
          The green/teal comes only from the card's own background below. */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          backgroundColor: 'rgba(0,0,0,0.28)',
        }}
      />

      {/* ── QR panel — desktop only ── */}
      <div
        className="qr-panel"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 30,
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0.85rem',
          borderRadius: '1.25rem',
          border: '1px solid rgba(105,228,220,0.25)',
          background: 'rgba(10,32,28,0.85)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      >
        <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, color: '#69E4DC' }}>
          View on mobile
        </p>
        <img src={qrImage} alt="QR code" style={{ width: 100, height: 100, objectFit: 'contain', borderRadius: 10 }} />
        <p style={{ fontSize: 9, marginTop: 6, color: '#a9c9c3' }}>Scan to open</p>
      </div>

      {/* ── Card — exact Figma spec: 402×741, 32px radius, flat racing green ── */}
      <div
        className="card"
        style={{
          position: 'relative',
          zIndex: 20,
          width: 402,
          // minHeight: 600,
          maxWidth: 'calc(100vw - 2rem)',
          flexShrink: 0,
          borderRadius: '32px',
          overflow: 'hidden',
          border: '1px solid rgba(105,228,220,0.18)',
          background: 'var(--Brand-Foundation-FS-RACING-GREEN, #073B2F)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
          padding: '2.4rem 1.5rem 1.75rem',
          margin: '2rem 0',
        }}
      >
        {/* Share button */}
       <button
  onClick={handleShare}
  aria-label="Share this page"
  style={{
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 40,
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    padding: 0,
  }}
>
  <img
    src={shareIcon}
    alt="Share"
    style={{
      width: '24px',
      height: '24px',
      objectFit: 'contain',
    }}
  />
</button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Logo medallion */}
          <a
            href="https://findandsignba.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-medallion"
            style={{
              display: 'flex',
              width: 80,
              height: 80,
              minWidth: 80,
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
<img
  className="logo-medallion-img"
  src={logo}
  alt="Logo of Find and Sign Perth Buyer Advocate"
  style={{
    width: '70px',
    height: '70px',
    borderRadius: '104px',
    objectFit: 'cover',
    display: 'block',
  }}
/>          </a>

          {/* Title */}
        <h1
  className="find-sign-title"
  style={{
    display: 'flex',
    height: '35px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    color: '#FFF',
    textAlign: 'center',
    fontVariantNumeric: 'lining-nums proportional-nums',
    fontFamily: '"GT Super Display Medium"',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '54px',
    letterSpacing: '-0.52px',
    marginTop: '14px',
  }}
>
  Find &amp; Sign
</h1>
 
          {/* Pills */}
<div
  className="pills-wrap"
  style={{
    marginTop: '1.5rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingLeft: '14%',
    paddingRight: '14%',
    boxSizing: 'border-box',
  }}
>          {profileLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
               style={{
  display: 'flex',
padding: '4px 25px 4px 16px',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch',

  borderRadius: '50px',
  border: '1px solid #69E4DC',

  textDecoration: 'none',
  transition: 'all 0.22s',
  cursor: 'pointer',
}}
               onMouseEnter={e => {
  const el = e.currentTarget as HTMLAnchorElement;
  el.style.background = 'rgba(105,228,220,0.08)';
  el.style.transform = 'translateY(-2px)';

  const name = el.querySelector('.link-name') as HTMLElement;
  if (name) name.style.color = '#69E4DC';
}}

onMouseLeave={e => {
  const el = e.currentTarget as HTMLAnchorElement;
  el.style.background = 'transparent';
  el.style.transform = 'translateY(0)';

  const name = el.querySelector('.link-name') as HTMLElement;
  if (name) name.style.color = '#F9F9F9';
}}
              >
                {/* Icon badge */}
             <div
  className="icon-badge"
  style={{
    width: 34,
    height: 34,
    minWidth: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }}
>
  {link.icon}
</div>

               <span
  className="link-name"
  style={{
    color: '#F9F9F9',
    fontFamily: 'Sohne, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px',
    transition: 'color 0.2s',
    paddingRight: '30px', // increase as needed
        whiteSpace: 'nowrap',

  }}
>
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Footer inside card */}
          <div style={{ marginTop: '1.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
<img
  src={logo1}
alt="Find and Sign Perth Buyer Advocate company logo"
  style={{
    width: '81px',
    height: '30px',
    objectFit: 'contain',
  }}
/>             
            </div>
           
           
          </div>
        </div>
      </div>

  <style>{`
  @media (min-width: 481px) and (max-width: 768px) {
    .card {
      width: 360px !important;
    }
    .icon-badge {
      width: 28px !important;
      height: 28px !important;
      min-width: 28px !important;
    }
    .icon-badge img {
      width: 20px !important;
      height: 20px !important;
    }
    .link-name {
      font-size: 16px !important;
      line-height: 22px !important;
    }
    .find-sign-title {
      font-size: 22px !important;
      line-height: 40px !important;
    }
  }
  @media (max-width: 480px) {
    .find-sign-title {
      font-size: 20px !important;
      line-height: 32px !important;
      letter-spacing: -0.4px !important;
    }
    .collage-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-rows: repeat(4, 1fr) !important;
    }
    .logo-medallion {
      width: 64px !important;
      height: 64px !important;
      min-width: 64px !important;
    }
    // .logo-medallion-img {
    //   width: 60px !important;
    //   height: 60px !important;
    // }
    .icon-badge {
      width: 26px !important;
      height: 26px !important;
      min-width: 26px !important;
    }
    .icon-badge img {
      width: 18px !important;
      height: 18px !important;
    }
    .link-name {
      font-size: 14px !important;
      line-height: 20px !important;
    }
  }
  @media (min-width: 1024px) {
    .qr-panel { display: flex !important; }
  }
  @media (max-width: 768px) {
    .page-wrap {
      justify-content: flex-start !important;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`}</style>
    </div>
  );
};

export default FindAndSignBaAdvocate;