import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

 
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
          src="https://player.vimeo.com/video/1189029882?autoplay=1&loop=1&playsinline=1"
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
  const bgVideoRef = useRef<HTMLIFrameElement>(null);

  // Listen for Vimeo's playback events to hide the loader only when video starts running
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("vimeo.com")) return;
      
      try {
        const data = JSON.parse(event.data);
        // 'play' or 'playing' signals that frames are actually being rendered
        if (data.event === "play" || data.event === "playing" || data.event === "loaded" || data.event === "ready") {
          setIsVideoLoading(false);
        }
      } catch (err) {
        // Ignore non-JSON messages from other sources
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    // Primary fallback: Force hide loader after 1.2s to ensure the page feels fast
    // even if Vimeo events are delayed.
    const timer = setTimeout(() => setIsVideoLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  function openVideo() {
    bgVideoRef.current?.contentWindow?.postMessage('{"method":"pause"}', '*');
    setVideoOpen(true);
  }
  const navigate = useNavigate();
  function closeVideo() {
    setVideoOpen(false);
    bgVideoRef.current?.contentWindow?.postMessage('{"method":"play"}', '*');
  }

  return (
    <>
      {videoOpen && <VideoModal onClose={closeVideo} />}

      <div className="page-wrapper">
        <section className="hero-top">
          <div className="video-wrapper">
            <iframe
              ref={bgVideoRef}
              src="https://player.vimeo.com/video/1189023931?autoplay=1&muted=1&loop=1&background=1&playsinline=1&api=1"
              className="hero-bg-video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={() => {
                setIsVideoLoading(false);
              }}
               title="Find and Sign property buyer's advocate introduction video"
              loading="eager"
            />
          </div>

          <div className={`video-loader-container ${!isVideoLoading ? "hidden" : ""}`} />
          <div className="hero-overlay" />

          <div className="content-wrap">
            <div className={`attractive-loader ${!isVideoLoading ? "hidden" : ""}`} aria-hidden="true" />
            <h1 className="hero-title" tabIndex={0}>
             The Advantage of Choosing a Trusted Buyer's Advocate in Perth

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
            Find &amp; Sign is a property buyer's advocate (Buyer's agent). We represent clients Australia-wide,
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