import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

 
/* ─── Video Modal ─── */
function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         2000,
        background:     "rgba(0, 0, 0, 0.4)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "clamp(12px, 5vw, 40px) 20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "900px" }}
      >
        {/* ✕ button: 4px below the overlay top-padding, snug above the iframe */}
        <button
          onClick={onClose}
          style={{
            display:      "block",
            marginLeft:   "auto",
            marginBottom: "4px",
            background:   "none",
            border:       "none",
            cursor:       "pointer",
            color:        "#fff",
            fontSize:     "24px",
            lineHeight:   1,
            padding:      "2px 6px",
          }}
          aria-label="Close video"
        >
          ✕
        </button>

        <iframe
          src="https://player.vimeo.com/video/1189029882?autoplay=0&loop=1&playsinline=1"
          style={{
            width:        "100%",
            aspectRatio:  "16/9",
            height:       "auto",
            borderRadius: "4px",
            display:      "block",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}


 
/* ─── Page ─── */
export default function App() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  // Listen for Vimeo's playback events to hide the loader only when video starts running
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("vimeo.com")) return;
      
      try {
        const data = JSON.parse(event.data);
        // 'play' or 'playing' signals that frames are actually being rendered
        if (data.event === "play" || data.event === "playing") {
          setIsVideoLoading(false);
        }
      } catch (err) {
        // Ignore non-JSON messages from other sources
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function openVideo() {
    bgVideoRef.current?.pause();
    setVideoOpen(true);
  }
  const navigate = useNavigate();
  function closeVideo() {
    setVideoOpen(false);
    bgVideoRef.current?.play();
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Söhne';
          background: #fff;
          overflow-x: hidden;
        }
        .page-wrapper { padding-top: 0; }

        /* ── Hero top ── */
        .hero-top {
          position: relative;
          width: 100%;
          min-height: 400px;
          aspect-ratio: 16 / 7;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .video-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #073B2F;
          z-index: 0;
        }
        .hero-bg-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 177.77vh;
          height: 100vh;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .video-loader-container {
          position: absolute;
          inset: 0;
          z-index: 2; /* Sits above the hero-overlay */
          background: #073B2F; 
          transition: opacity 0.8s ease;
          pointer-events: none;
        }
        .video-loader-container.hidden {
          opacity: 0;
        }

        /* ── Simple Single Loader ── */
        .attractive-loader {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(105, 228, 220, 0.2);
          border-radius: 50%;
          border-top-color: #69E4DC;
          animation: spin 1s infinite linear;
          transition: opacity 0.6s ease;
          opacity: 1;
          margin-bottom: 8px; /* Alignment spacing */
        }
        .attractive-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }

        @keyframes spin {
          to { transform: rotate(1turn); }
        }

        @media (min-aspect-ratio: 16/9) {
          .hero-bg-video {
            width: 100vw;
            height: 56.25vw;
          }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1;
        }
        .content-wrap {
          position:        relative;
          z-index:         3; /* Above loader background */
          display:         flex;
          flex-direction:  column;
          align-items:     center;
          gap:             24px;
          padding:         0 16px;
          width:           100%;
          max-width:       800px;
        }
        .hero-title {
          font-family:          'GT Super Display Medium';
          font-size:            56px;
          font-weight:          500;
          color:                #FFF;
          line-height:          64px;
          letter-spacing:       -2%;
          font-variant-numeric: lining-nums proportional-nums;
        }
        .watch-btn {
          display:         flex;
          height:          48px;
          padding:         12px 16px;
          justify-content: center;
          align-items:     center;
          gap:             10px;
          font-family:     'CX80';
          font-weight:     700;
          font-size:       12px;
          line-height:     15px;
          letter-spacing:  4.8px;
          border-radius:   5px;
          border:          1px solid #69E4DC;
          background:      transparent;
          color:           white;
          cursor:          pointer;
          transition:      background 0.2s, color 0.2s;
        }
        .watch-btn:hover {
          background: rgba(105, 228, 220, 0.15);
        }

        /* ── Hero bottom ── */
        .hero-bottom {
          // padding:        64px 5%;
          display:        flex;
          flex-direction: column;
          align-items:    center;
          text-align:     center;
          background:     #F9F9F9;
        }
        .description {
          width:       1046px;
          max-width:   100%;
          color:       #000;
          text-align:  center;
          font-family: 'Sohne';
          font-size:   24px;
          font-weight: 300;
          line-height: 36px;
          margin-top:48px;
        }
        .find-out-btn {
          display:         flex;
          height:          48px;
          padding:         12px 16px;
          justify-content: center;
          align-items:     center;
          gap:             10px;
          flex-shrink:     0;
          border-radius:   8px;
          border:          1px solid #69E4DC;
          color:           #073B2F;
          font-family:     'CX80';
          font-size:       15px;
          font-weight:     700;
          line-height:     15px;
          letter-spacing:  4.8px;
          margin-top:      30px;
          background:      white;
          cursor:          pointer;
          transition:      background 0.2s, color 0.2s;
          margin-bottom:48px;
        }
        .find-out-btn:hover {
          background: #69E4DC;
          color: #073B2F;
        }

        /* ── Responsive ── */
       @media (max-width: 1024px) {
  .hero-top    { aspect-ratio: 16 / 7; min-height: unset; height: auto; margin-top: 0; }
  .page-wrapper { padding-bottom: 0; }
  .hero-title  { font-size: 44px; line-height: 54px; letter-spacing: -2%; }
  .description { font-size: 20px; line-height: 32px; }
  .hero-bottom { padding: 0 6%; }
}
       @media (max-width: 768px) {
  .hero-title   { font-size: 36px; line-height: 44px; letter-spacing: 1px; }
  .description  { font-size: 18px; line-height: 28px; }
  .hero-top     { height: auto; aspect-ratio: 16 / 9; min-height: unset; }
}
        @media (max-width: 480px) {
          .hero-title  { font-size: 28px; line-height: 36px; }
          .description { font-size: 16px; line-height: 26px; }
          .hero-top    { height: auto; aspect-ratio: 4 / 5; min-height: unset; }
        }
      `}</style>

      {videoOpen && <VideoModal onClose={closeVideo} />}

      <div className="page-wrapper">
        <section className="hero-top">
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1189023931?autoplay=1&muted=1&loop=1&background=1&playsinline=1&api=1"
              className="hero-bg-video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={() => {
                // Fallback: hide loader after 8s if the play event is blocked or fails
                setTimeout(() => setIsVideoLoading(false), 8000);
              }}
              loading="lazy"
            />
          </div>

          <div className={`video-loader-container ${!isVideoLoading ? "hidden" : ""}`} />
          <div className="hero-overlay" />

          <div className="content-wrap">
            <div className={`attractive-loader ${!isVideoLoading ? "hidden" : ""}`} aria-hidden="true" />
            <h1 className="hero-title" tabIndex={0}>
              The advantage of being first.
            </h1>

            <button className="watch-btn" onClick={openVideo} aria-label="Watch the introductory video">
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <path d="M9 5.5L0 11V0L9 5.5Z" fill="currentColor" />
              </svg>
              Watch the Video
            </button>
          </div>
        </section>

        <section className="hero-bottom">
          <p className="description" tabIndex={0}>
            Find &amp; Sign is a property buyer's advocate. We represent clients Australia-wide,
            identifying the right properties and securing them before they reach the wider market.
          </p>
          <button
            className="find-out-btn"
            aria-label="Find out more about Find and Sign"
            onClick={() => navigate("/about")}
          >
            Find Out More
          </button>
        </section>
      </div>
    </>
  );
}