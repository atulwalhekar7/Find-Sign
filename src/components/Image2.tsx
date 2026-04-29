import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Image+subhead.png";

const Image1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ width: "100%" }}>

        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 7",
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="book-btn"
              onClick={() => navigate("/contact")}
            >
              {/* ✅ RESTORED PHONE ICON */}
              <svg
                width="14"
                height="14"
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
                         A2 2 0 0 1 22 16.92z" />
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
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;

          font-family: 'CX80';
          font-weight: 700;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 4.8px;

          border-radius: 5px;
          border: 1px solid #69E4DC;
          background: transparent;
          color: white;

          cursor: pointer;
          transition: 0.2s;
          margin-top: 100px;
        }

        .book-btn:hover {
          background: rgba(105, 228, 220, 0.15);
        }

        .book-btn svg {
          stroke: currentColor;
          color: #69E4DC;
        }
      `}</style>
    </>
  );
};

export default Image1;