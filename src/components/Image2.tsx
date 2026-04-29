import React from "react";
import { Box } from "@mui/material";
import heroImage from "../assets/Image+subhead.png";

const Image1: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: { xs: "16 / 10", md: "16 / 7" }, // responsive height
            overflow: "hidden",
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src={heroImage}
            alt="Hero"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // perfectly centered
                transform: {
      xs: "translateY(22px)",  // mobile
      sm: "translateY(40px)",  // tablet
      md: "translateY(40px)",  // desktop
      lg: "translateY(60px)",  // large screens
    },
            }}
          >
            <button
              className="book-btn"
              onClick={() =>
                window.open(
                  "https://calendly.com/nakranipropertybuyers?text_color=003327&primary_color=69e4dc",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                         19.79 19.79 0 0 1-8.63-3.07
                         19.5 19.5 0 0 1-6.6-6.6
                         A19.79 19.79 0 0 1 1.63 3.18
                         2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72
                         c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6
                         a16 16 0 0 0 5.55 5.55l.96-.96
                         a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7
                         A2 2 0 0 1 22 16.92z"
                />
              </svg>

              Book a Call
            </button>
          </Box>
        </Box>
      </Box>

      {/* STYLES */}
      <style>{`
        .book-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 10px 14px;

          font-family: 'CX80';
          font-weight: 700;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 3px;

          border-radius: 5px;
          border: 1px solid #69E4DC;
          background: transparent;
          color: #fff;

          cursor: pointer;
          transition: all 0.25s ease;
          
        }

        .book-btn:hover {
          background: rgba(105, 228, 220, 0.15);
          transform: translateY(-1px);
        }

        .book-btn svg {
          width: 14px;
          height: 14px;
          stroke: #fff;
        }

        /* 📱 Mobile */
        @media (max-width: 600px) {
          .book-btn {
            font-size: 10px;
            letter-spacing: 2px;
            padding: 8px 12px;
          }

          .book-btn svg {
            width: 12px;
            height: 12px;
          }
        }

        /* 📲 Tablet */
        @media (min-width: 601px) and (max-width: 1024px) {
          .book-btn {
            font-size: 11px;
            letter-spacing: 3px;
            padding: 10px 14px;
          }
        }

        /* 💻 Large screens */
        @media (min-width: 1200px) {
          .book-btn {
            font-size: 13px;
            letter-spacing: 5px;
            padding: 12px 18px;
          }
        }
      `}</style>
    </>
  );
};

export default Image1;