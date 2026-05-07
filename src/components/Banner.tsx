import { useState, useRef } from "react";
import bannervideo from "../assets/F&S_Brand Video_Banner.mov";
import heroVideo from "../assets/Interview Draft (2).mp4";
import { useNavigate } from "react-router-dom";

 
/* ─── Video Modal ─── */
function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          2000,
        background:      "rgba(0, 0, 0, 0.35)",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: "900px" }}
      >
        <button
          onClick={onClose}
          style={{
            position:   "absolute",
            top:        "-40px",
            right:      0,
            background: "none",
            border:     "none",
            cursor:     "pointer",
            color:      "#fff",
            fontSize:   "28px",
            lineHeight: 1,
            padding:    "4px 8px",
            marginTop:"15%",
          }}
          aria-label="Close video"
        >
          ✕
        </button>
 
      <iframe
  src="https://player.vimeo.com/video/1189029882?autoplay=0&loop=1&playsinline=1"
  style={{
    width: "100%",
    height: "500px",
    borderRadius: "4px",
    marginTop: "10%",
  }}
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>

      </div>
    </div>
  );
}


 
/* ─── Page ─── */
export default function App() {
  const [videoOpen, setVideoOpen] = useState(false);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

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
  height: 610px;
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

@media (min-aspect-ratio: 16/9) {
  .hero-bg-video {
    width: 100vw;
    height: 56.25vw;
  }
}


//       .hero-bg-video {   
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 177.77vh;
//   height: 100vh;
//   transform: translate(-50%, -50%);
// }

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1;
}
        .content-wrap {
          position:        relative;
          z-index:         2;
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
          letter-spacing:       -1.12px;
          font-variant-numeric: lining-nums proportional-nums;
        }
        .watch-btn {
          display:        flex;
          height:         48px;
          padding:        12px 16px;
          justify-content:center;
          align-items:    center;
          gap:            10px;
          font-family:    'CX80';
          font-weight:    700;
          font-size:      12px;
          line-height:    15px;
          letter-spacing: 4.8px;
          border-radius:  5px;
          border:         1px solid #69E4DC;
          background:     transparent;
          color:          white;
          cursor:         pointer;
          transition:     background 0.2s, color 0.2s;
        }
        .watch-btn:hover {
          background: rgba(105, 228, 220, 0.15);
        }

        /* ── Hero bottom ── */
        .hero-bottom {
          padding:        72px 5%;
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
        }
        .find-out-btn {
          display:        flex;
          height:         48px;
          padding:        12px 16px;
          justify-content:center;
          align-items:    center;
          gap:            10px;
          flex-shrink:    0;
          border-radius:  8px;
          border:         1px solid #69E4DC;
          color:          #073B2F;
          font-family: 'CX80';
          font-size:      15px;
          font-weight:    700;
          line-height:    15px;
          letter-spacing: 4.8px;
          margin-top:     30px;
          background:     white;
          cursor:         pointer;
          transition:     background 0.2s, color 0.2s;
        }
       .find-out-btn:hover {
  background: #69E4DC;
  color: #073B2F;
}

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-title   { font-size: 36px; line-height: 44px; letter-spacing: -0.5px; }
          .description  { font-size: 18px; line-height: 28px; }
          .hero-top     { height: 420px; }
        }
        @media (max-width: 480px) {
          .hero-title  { font-size: 28px; line-height: 36px; }
          .description { font-size: 16px; line-height: 26px; }
          .hero-top    { height: 340px; }
          .hero-bottom { padding: 48px 6%; }
        }
      `}</style>

      {videoOpen && <VideoModal onClose={closeVideo} />}

      <div className="page-wrapper">
        <section className="hero-top">
          {/* <video
            ref={bgVideoRef}
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={bannervideo} type="video/mp4" />
          </video> */}

      <div className="video-wrapper">
  <iframe
    src="https://player.vimeo.com/video/1189023931?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
    className="hero-bg-video"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

          <div className="hero-overlay" />

          <div className="content-wrap">
            <h1 className="hero-title">
              The advantage of being first.
            </h1>

            <button className="watch-btn" onClick={openVideo}>
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <path d="M9 5.5L0 11V0L9 5.5Z" fill="currentColor" />
              </svg>
              Watch the Video
            </button>
          </div>
        </section>

        <section className="hero-bottom">
          <p className="description">
            Find &amp; Sign is a property buyer's advocate. We represent clients across Western Australia,
            identifying the right properties and securing them before they reach the wider market.
          </p>
          <button
      className="find-out-btn"
      onClick={() => navigate("/services")}
    >
      Find Out More
    </button>
        </section>
      </div>
    </>
  );
}
