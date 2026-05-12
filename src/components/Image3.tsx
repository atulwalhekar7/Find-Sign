import React from "react";
import { Box } from "@mui/material";
import heroImage from "../assets/family-home-buyers-image2-australia-find-and-sign.png";

const Image1: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: { xs: "1 / 1", md: "16 / 7" },
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
    alignItems: "center", // vertically centered
    padding: { xs: "20px", md: "40px" },
    transform: "none",    // 👈 remove the translateY offset
  }}
>
  <Box
    component="h2"
    sx={{
      color: "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
      textAlign: "center",
      fontVariantNumeric: "lining-nums proportional-nums",
      fontFamily: 'GT Super Display Medium',
      fontSize: {
        xs: "24px",
        sm: "32px",
        md: "44px",
      },
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: {
        xs: "1.2",
        sm: "1.2",
        md: "54px",
      },
      letterSpacing: "-0.88px",
      margin: 0,
      maxWidth: { xs: "800px", md: "none" },
      whiteSpace: { xs: "normal", md: "nowrap" },
    }}
  >
    Local knowledge. Direct relationships. Earlier access.
  </Box>
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
        @media (min-width: 601px) and (max-width: 1024px) {
          .book-btn {
            font-size: 11px;
            letter-spacing: 3px;
            padding: 10px 14px;
          }
        }
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