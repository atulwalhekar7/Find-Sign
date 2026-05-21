import React from "react";
import { Box } from "@mui/material";
import heroImage from "../assets/niki-nakrani-buyers-agent-image2-australia-find-and-sign.jpg";

const Image1: React.FC = () => {
  return (
    <>
      <Box
        className="no-theme"
        sx={{
          width: "100%",
          display: "block",
          lineHeight: 0,
          fontSize: 0,
        }}
      >
        {/* HERO */}
        <Box
          className="no-theme"
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: {
              xs: "1 / 1",
              md: "16 / 7",
            },
            overflow: "hidden",
            display: "block",
            lineHeight: 0,
            fontSize: 0,
            margin: 0,
            padding: 0,
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            className="no-theme"
            src={heroImage}
            alt="Expert property buying guidance and professional advocate services"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
              verticalAlign: "top",
              margin: 0,
              padding: 0,
            }}
          />

          {/* OVERLAY */}
          <Box
            className="no-theme image2-overlay-container"
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              background: "rgba(0,0,0,0.45)",
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
              },
              padding: {
                xs: "20px",
                md: "40px",
              },
            }}
          >
            <Box
              component="h2"
              className="no-theme image2-hero-title"
              tabIndex={0}
              sx={{
                color:
                  "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
                textAlign: "center",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily: "GT Super Display Medium",
                fontStyle: "normal",
                fontWeight: 500,
                margin: 0,
                maxWidth: {
                  xs: "320px",
                  sm: "100%",
                  md: "none",
                },
                whiteSpace: {
                  xs: "normal",
                  sm: "nowrap",
                  md: "nowrap",
                },
              }}
            >
              Expert guidance that shapes better outcomes.
            </Box>
          </Box>
        </Box>
      </Box>

      {/* STYLES */}
      <style>{`
        /* ✅ Prevent dark mode from affecting this component */
        [data-theme="dark"] .no-theme {
          background: transparent !important;
        }

        /* MOBILE */
        @media (max-width: 599px) {
          .image2-overlay-container {
            align-items: center !important;
            padding-bottom: 0px !important;
          }

          .image2-hero-title {
            font-size: 18px !important;
            line-height: 24px !important;
            letter-spacing: -0.3px !important;
          }
        }

        /* TABLET */
        @media (min-width: 600px) and (max-width: 1024px) {
          .image2-hero-title {
            font-size: 32px !important;
            line-height: 40px !important;
            letter-spacing: -0.5px !important;
          }
        }

        /* DESKTOP */
        @media (min-width: 1025px) {
          .image2-hero-title {
            font-size: 44px !important;
            line-height: 50px !important;
            letter-spacing: -0.88px !important;
          }
        }

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