import React from "react";
import { Box } from "@mui/material";
import heroImage from "../assets/niki-nakrani-buyers-agent-image4-australia-find-and-sign.png";

const Image1: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: {
              xs: "4 / 5",
              sm: "16 / 9",
              md: "16 / 7",
            },
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
              objectPosition: {
                xs: "center 20px",
                sm: "center 40px",
                md: "center 20px",
              },
              transform: {
                xs: "scale(1.08)",
                sm: "scale(1.12)",
                md: "scale(1.08)",
              },
              display: "block",
            }}
          />

          {/* OVERLAY */}
          <Box
            className="image4-overlay-container"
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: {
                xs: "flex-end",
                sm: "center",
                md: "center",
              },
              padding: {
                xs: "20px",
                sm: "30px",
                md: "40px",
              },
            }}
          >
            <Box
              component="h2"
              className="image4-hero-title"
              sx={{
                color:
                  "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
                textAlign: "center",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily: "GT Super Display Medium",
                fontStyle: "normal",
                fontWeight: 500,
                margin: 0,

                /* MOBILE */
                fontSize: {
                  xs: "18px",
                  sm: "28px",
                  md: "44px",
                },

                lineHeight: {
                  xs: "24px",
                  sm: "36px",
                  md: "54px",
                },

                letterSpacing: {
                  xs: "-0.3px",
                  sm: "-0.5px",
                  md: "-0.88px",
                },

                /* IMPORTANT FIX */
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

                paddingBottom: {
                  xs: "30px",
                  sm: "0px",
                  md: "0px",
                },
              }}
            >
              Buyer representation built on judgement, not volume.
            </Box>
          </Box>
        </Box>
      </Box>

      {/* STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .image4-overlay-container {
            align-items: flex-end !important;
            padding-bottom: 40px !important;
          }

          .image4-hero-title {
            font-size: 30px !important;
            line-height: 24px !important;
          }
        }

        /* TABLET FIX */
        @media (min-width: 769px) and (max-width: 1024px) {
          .image4-overlay-container {
            align-items: center !important;
            padding: 24px !important;
          }

          .image4-hero-title {
            font-size: 28px !important;
            line-height: 36px !important;
            white-space: nowrap !important;
            max-width: 100% !important;
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