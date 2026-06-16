import React, { useState, useEffect } from 'react';
import logo from '../../assets/Find-and-sign/find&sign.png';

// Social icons
import googleIcon from '../../assets/Find-and-sign/google.png';
import facebookIcon from '../../assets/Find-and-sign/facebook.png';
import instagramIcon from '../../assets/Find-and-sign/instagram.png';
import tiktokIcon from '../../assets/Find-and-sign/tiktok.png';
import reviewIcon from '../../assets/Find-and-sign/review.png';
import qrImage from '../../assets/niki-nakrani-buyer-advocate.png';

// Collage background images
import id1 from '../../assets/benefits-of-using-a-buyers-agent-perth.jpg';
import id2 from '../../assets/buyer-advocate-agent-perth.png';
import id3 from '../../assets/niki-nikrani-buyer-advocate-perth-australia.png';
import id4 from '../../assets/Australia-Find-And-Sign-About-Us.jpg';
import id5 from '../../assets/find-sign-buyer-advocates-perth.jpg';
import id6 from '../../assets/what-is-a-buyers-agent-perth.jpg';
import id7 from '../../assets/best-perth-suburbs-for-property-investment.png';
import id8 from '../../assets/niki-nikrani-buyer-advocate-perth-australia.jpg';

import { ExternalLink, Sun, Moon } from 'lucide-react';

const collageImages = [
  id1,
  id2,
  id3,
  id4,
  id5,
  id6,
  id7,
  id8,
];

const profileLinks = [
  {
    name: 'Google Profile',
    url: 'https://www.google.com/search?q=Find+and+Sign+Buyer+Advocate',
    icon: <img src={googleIcon} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
  },
  {
    name: 'Write a Review',
    url: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x81920490ca986a8f:0x8eea5b46a5653f4b!12e1?source=g.page.m._&laa=merchant-review-solicitation',
    icon: <img src={reviewIcon} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/find_and_sign?igsh=MWQxdDZzeG04dmFpYw%3D%3D',
    icon: <img src={instagramIcon} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
  },
  {
    name: 'Facebook Page',
    url: 'https://www.facebook.com/findandsignbuyeradvocate/',
    icon: <img src={facebookIcon} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@find_and_sign',
    icon: <img src={tiktokIcon} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
  },
  {
    name: 'Official Website',
    url: 'https://findandsignba.com.au/',
    icon: <img src={logo} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
  },
];

const FindAndSignBaAdvocate = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const dark = theme === 'dark';

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        backgroundColor: 'transparent',
        transition: 'background-color 0.5s',
      }}
    >
      {/* ── Collage background grid ── */}
      <div
        className="background-collage-grid"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          display: 'grid',
          gap: '3px',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {collageImages.map((src, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
            }}
          >
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
                objectPosition: 'center',
                opacity: 1,
                filter: dark ? 'brightness(0.5)' : 'brightness(0.9)',
                transition: 'filter 0.5s',
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Dark/light overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          backdropFilter: 'blur(1.5px)',
          backgroundColor: dark ? 'rgba(15,25,35,0.75)' : 'rgba(245,240,232,0.65)',
          transition: 'background-color 0.5s',
        }}
      />

      {/* ── QR panel — desktop only ── */}
      <div
        className="qr-panel"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 30,
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          borderRadius: '1.25rem',
          border: `1px solid ${dark ? 'rgba(105,228,220,0.22)' : 'rgba(0,0,0,0.08)'}`,
          background: dark ? 'rgba(13,22,30,0.85)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          transition: 'all 0.3s',
        }}
      >
        <p style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: 12,
          color: dark ? '#69E4DC' : '#6b7280',
          fontFamily: 'GT Super Display Medium',
        }}>
          View on mobile
        </p>
        <img
          src={qrImage}
          alt="QR code to open on mobile"
          style={{ width: 120, height: 120, objectFit: 'contain', borderRadius: 12 }}
        />
        <p style={{ fontSize: 10, marginTop: 8, color: dark ? '#475569' : '#9ca3af', fontFamily: 'Sohne, sans-serif' }}>
          Scan to open
        </p>
      </div>

      {/* ── Main content column ── */}
      <div
        className="content-column"
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          maxWidth: 420,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Card */}
        <div
          className="main-card"
          style={{
            width: '100%',
            borderRadius: '2.5rem',
            overflow: 'hidden',
            border: `1px solid ${dark ? 'rgba(105,228,220,0.15)' : 'rgba(0,0,0,0.06)'}`,
            background: dark ? 'rgba(13,22,30,0.88)' : 'rgba(255,255,255,0.93)',
            backdropFilter: 'blur(24px)',
            boxShadow: dark
              ? '0 24px 80px rgba(0,0,0,0.6)'
              : '0 24px 80px rgba(0,0,0,0.14)',
            transition: 'all 0.5s',
          }}
        >
          {/* Card header */}
          <div
            className="card-header"
            style={{
              position: 'relative',
              padding: '3rem 2rem 2rem',
              textAlign: 'center',
              borderBottom: `1px solid ${dark ? 'rgba(105,228,220,0.12)' : 'rgba(0,0,0,0.06)'}`,
              background: dark ? '#111f2b' : '#ebe6de',
              transition: 'background 0.5s',
            }}
          >
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 36,
                height: 36,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: `1px solid ${dark ? 'rgba(105,228,220,0.25)' : 'rgba(0,0,0,0.1)'}`,
                background: dark ? '#1e293b' : '#ffffff',
                color: dark ? '#69E4DC' : '#334155',
                transition: 'all 0.2s',
              }}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Logo circle */}
            <a
              href="https://findandsignba.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                width: 88,
                height: 88,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                border: '2px solid rgba(105,228,220,0.4)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                flexShrink: 0,
              }}
            >
              <img
                src={logo}
                alt="Find and Sign logo"
                style={{ width: 56, height: 56, objectFit: 'contain' }}
              />
            </a>

            <h1
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                letterSpacing: '-0.3px',
                marginBottom: 4,
                color: dark ? '#f0f8f7' : '#0f172a',
                transition: 'color 0.5s',
                fontFamily: 'GT Super Display Medium',
              }}
            >
              Find and Sign
            </h1>
            <p
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: dark ? '#7ecfc9' : '#64748b',
                transition: 'color 0.5s',
                fontFamily: "Sohne, sans-serif"
              }}
            >
              Buyer Advocate
            </p>
            <div
              style={{
                marginTop: 16,
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 40,
                height: 3,
                backgroundColor: '#69E4DC',
                borderRadius: 2,
              }}
            />
          </div>

          {/* Card body */}
          <div className="card-body" style={{ padding: '2rem 1.75rem 2.25rem' }}>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.78rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
                color: dark ? '#94a3b8' : '#64748b',
                fontFamily: "Sohne, sans-serif"
              }}
            >
              Make your home buying experience outstanding
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {profileLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '0.85rem 1rem',
                    borderRadius: '1rem',
                    border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.025)',
                    textDecoration: 'none',
                    color: dark ? '#e2f0ef' : '#1e293b',
                    transition: 'all 0.22s',
                    cursor: 'pointer',
                    fontFamily: 'GT Super Display Medium',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(105,228,220,0.10)';
                    el.style.borderColor = 'rgba(105,228,220,0.4)';
                    el.style.transform = 'translateY(-2px)';
                    el.style.boxShadow = '0 6px 24px rgba(105,228,220,0.12)';
                    const name = el.querySelector('.link-name') as HTMLElement;
                    if (name) name.style.color = '#69E4DC';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.025)';
                    el.style.borderColor = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                    const name = el.querySelector('.link-name') as HTMLElement;
                    if (name) name.style.color = dark ? '#e2f0ef' : '#1e293b';
                  }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: dark ? 'rgba(255,255,255,0.08)' : '#ffffff',
                      border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)'}`,
                      boxShadow: dark ? 'none' : '0 1px 4px rgba(0,0,0,0.06)',
                      flexShrink: 0,
                    }}
                  >
                    {link.icon}
                  </div>

                  <span
                    className="link-name"
                    style={{
                      flex: 1,
                      fontWeight: 600,
                      fontSize: '0.96rem',
                      transition: 'color 0.2s',
                      color: dark ? '#e2f0ef' : '#1e293b',
                    }}
                  >
                    {link.name}
                  </span>

                  <ExternalLink
                    size={15}
                    style={{ color: dark ? '#475569' : '#cbd5e1', flexShrink: 0 }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: 20,
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#6786c4',
          }}
        >
          © 2026 Find and Sign Buyer Advocate
        </p>
        <a
          href="https://findandsignba.com.au/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 6,
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            color: dark ? '#6786c4' : '#6786c4',
            transition: 'color 0.2s',
          }}
        >
          Privacy Policy
        </a>
      </div>

      <style>{`
        .page-container {
          padding: 100px 1rem 4rem;
        }

        /* QR panel: hidden on mobile & tablet, visible only on desktop */
        .qr-panel {
          display: none !important;
        }

        @media (min-width: 1024px) {
          .qr-panel {
            display: flex !important;
          }
        }

        @media (max-width: 1024px) {
          .page-container {
            padding: 80px 1rem 4rem;
          }
          .card-header {
            padding: 2.5rem 1.75rem 1.75rem !important;
          }
        }

        .background-collage-grid {
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }

        @media (max-width: 1024px) {
          .background-collage-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }
        }

        @media (max-width: 480px) {
          .content-column {
            padding: 0 12px;
          }
          .main-card {
            border-radius: 2rem !important;
          }
          .card-header {
            padding: 2rem 1.25rem 1.25rem !important;
          }
          .page-container {
            padding: 60px 12px 4rem;
          }
          h1 {
            font-size: 1.45rem !important;
          }
          .link-name {
            font-size: 0.88rem !important;
          }
          .card-body {
            padding: 1.75rem 1.25rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FindAndSignBaAdvocate;