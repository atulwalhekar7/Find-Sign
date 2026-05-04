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