import React, { useState, useEffect } from 'react';
import logo from '../../assets/Find-and-sign/find&sign.png';

import googleIcon from '../../assets/Find-and-sign/google.png';
import facebookIcon from '../../assets/Find-and-sign/facebook.png';
import instagramIcon from '../../assets/Find-and-sign/instagram.png';
import tiktokIcon from '../../assets/Find-and-sign/tiktok.png';
import reviewIcon from '../../assets/Find-and-sign/review.png';
import qrImage from '../../assets/niki-nakrani-buyer-advocate.png';

import id1 from '../../assets/benefits-of-using-a-buyers-agent-perth.jpg';
import id2 from '../../assets/buyer-advocate-agent-perth.png';
import id3 from '../../assets/niki-nikrani-buyer-advocate-perth-australia.png';
import id4 from '../../assets/Australia-Find-And-Sign-About-Us.jpg';
import id5 from '../../assets/find-sign-buyer-advocates-perth.jpg';
import id6 from '../../assets/what-is-a-buyers-agent-perth.jpg';
import id7 from '../../assets/best-perth-suburbs-for-property-investment.png';
import id8 from '../../assets/niki-nikrani-buyer-advocate-perth-australia.jpg';

import { ExternalLink, Sun, Moon } from 'lucide-react';

const collageImages = [id1, id2, id3, id4, id5, id6, id7, id8];

const profileLinks = [
  {
    name: 'Google Profile',
    url: 'https://www.google.com/search?q=Find+and+Sign+Buyer+Advocate',
    icon: <img src={googleIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
  },
  {
    name: 'Write a Review',
    url: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x81920490ca986a8f:0x8eea5b46a5653f4b!12e1?source=g.page.m._&laa=merchant-review-solicitation',
    icon: <img src={reviewIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/find_and_sign?igsh=MWQxdDZzeG04dmFpYw%3D%3D',
    icon: <img src={instagramIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
  },
  {
    name: 'Facebook Page',
    url: 'https://www.facebook.com/findandsignbuyeradvocate/',
    icon: <img src={facebookIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@find_and_sign',
    icon: <img src={tiktokIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
  },
  {
    name: 'Official Website',
    url: 'https://findandsignba.com.au/',
    icon: <img src={logo} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
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
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Collage background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
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
                filter: dark ? 'brightness(0.5)' : 'brightness(0.9)',
                transition: 'filter 0.5s',
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
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

      {/* QR panel — desktop only */}
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
          border: `1px solid ${dark ? 'rgba(105,228,220,0.22)' : 'rgba(0,0,0,0.08)'}`,
          background: dark ? 'rgba(13,22,30,0.85)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      >
        <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, color: dark ? '#69E4DC' : '#6b7280', fontFamily: 'GT Super Display Medium' }}>
          View on mobile
        </p>
        <img src={qrImage} alt="QR code" style={{ width: 100, height: 100, objectFit: 'contain', borderRadius: 10 }} />
        <p style={{ fontSize: 9, marginTop: 6, color: dark ? '#475569' : '#9ca3af' }}>Scan to open</p>
      </div>

      {/* Main card */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          maxWidth: 400,
          borderRadius: '2rem',
          overflow: 'hidden',
          border: `1px solid ${dark ? 'rgba(105,228,220,0.15)' : 'rgba(0,0,0,0.06)'}`,
          background: dark ? 'rgba(13,22,30,0.92)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(24px)',
          boxShadow: dark ? '0 24px 80px rgba(0,0,0,0.6)' : '0 24px 80px rgba(0,0,0,0.14)',
          margin: '0 1rem',
        }}
      >
        {/* Card header */}
        <div
          style={{
            position: 'relative',
            padding: '1.25rem 1.5rem 1rem',
            borderBottom: `1px solid ${dark ? 'rgba(105,228,220,0.12)' : 'rgba(0,0,0,0.06)'}`,
            background: dark ? '#111f2b' : '#ebe6de',
          }}
        >
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              width: 32,
              height: 32,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: `1px solid ${dark ? 'rgba(105,228,220,0.25)' : 'rgba(0,0,0,0.1)'}`,
              background: dark ? '#1e293b' : '#ffffff',
              color: dark ? '#69E4DC' : '#334155',
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Logo + Title side by side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a
              href="https://findandsignba.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                width: 64,
                height: 64,
                minWidth: 64,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(105,228,220,0.4)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <img src={logo} alt="Find and Sign logo" style={{ width: 42, height: 42, objectFit: 'contain' }} />
            </a>

            <div>
              <h1
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  letterSpacing: '-0.3px',
                  marginBottom: 2,
                  color: dark ? '#f0f8f7' : '#0f172a',
                  fontFamily: 'GT Super Display Medium',
                  lineHeight: 1.2,
                }}
              >
                Find and Sign
              </h1>
              <p
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: dark ? '#7ecfc9' : '#64748b',
                  fontFamily: 'Sohne, sans-serif',
                  margin: 0,
                }}
              >
                Buyer Advocate
              </p>
              <div style={{ marginTop: 8, width: 32, height: 2.5, backgroundColor: '#69E4DC', borderRadius: 2 }} />
            </div>
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.73rem',
              fontWeight: 500,
              marginBottom: '0.85rem',
              color: dark ? '#94a3b8' : '#64748b',
              fontFamily: 'Sohne, sans-serif',
            }}
          >
            Make your home buying experience outstanding
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {profileLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '0.6rem 0.85rem',
                  borderRadius: '0.85rem',
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
                  const name = el.querySelector('.link-name') as HTMLElement;
                  if (name) name.style.color = '#69E4DC';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.025)';
                  el.style.borderColor = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
                  el.style.transform = 'translateY(0)';
                  const name = el.querySelector('.link-name') as HTMLElement;
                  if (name) name.style.color = dark ? '#e2f0ef' : '#1e293b';
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    minWidth: 34,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: dark ? 'rgba(255,255,255,0.08)' : '#ffffff',
                    border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)'}`,
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
                    fontSize: '0.88rem',
                    transition: 'color 0.2s',
                    color: dark ? '#e2f0ef' : '#1e293b',
                  }}
                >
                  {link.name}
                </span>
                <ExternalLink size={13} style={{ color: dark ? '#475569' : '#cbd5e1', flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 20, textAlign: 'center', marginTop: 12 }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6786c4', margin: 0 }}>
          © 2026 Find and Sign Buyer Advocate
        </p>
        <a
          href="https://findandsignba.com.au/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: 3, color: '#6786c4', marginTop: 4, display: 'block' }}
        >
          Privacy Policy
        </a>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .qr-panel { display: flex !important; }
        }
        @media (max-width: 480px) {
          .background-collage-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(4, 1fr) !important;
          }
        }
      `}</style>
      </div>
  );
};

export default FindAndSignBaAdvocate;