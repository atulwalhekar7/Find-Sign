import React from "react";
import { Box } from "@mui/material";
import heroImage from "../assets/niki-nakrani-buyers-agent-image3-australia-find-and-sign.png";

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
      <Box sx={{ width: "100%" }}>
        <Box
          className="no-theme"
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: {
              xs: "3 / 4",
              sm: "16 / 9",
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
            alt="Happy family in front of their new home, secured through local property expertise"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: {
                xs: "center 30%",
                sm: "center top",
                md: "center top",
              },
              display: "block",
              verticalAlign: "top",
              margin: 0,
              padding: 0,
            }}
          />

          {/* OVERLAY */}
          <Box
            className="no-theme image3-overlay-container"
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
              className="no-theme image3-hero-title"
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
                paddingBottom: {
                  xs: "30px",
                  sm: "0px",
                  md: "0px",
                },
              }}
            >
              Local knowledge. Direct relationships. Earlier access.
            </Box>
          </Box>
<Box
  className="image3-overlay-container"
  sx={{
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "center",
                  background: "rgba(0,0,0,0.45)",

    alignItems: { xs: "center", sm: "center" }, 
    padding: { xs: "20px", md: "40px" },
    transform: "none",   
  }}
>
  <Box
    component="h2"
    className="image3-hero-title"
    tabIndex={0}
    sx={{
      color: "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
      textAlign: "center",
      fontVariantNumeric: "lining-nums proportional-nums",
      fontFamily: 'GT Super Display Medium',
      fontSize: {
        xs: "18px",
        sm: "32px",
        md: "44px",
      },
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: {
        xs: "1.2",
        sm: "40px",
        md: "54px",
      },
      letterSpacing: "-0.05px !important",
      margin: 0,
      maxWidth: { xs: "800px", sm: "none" },
      whiteSpace: { xs: "normal", sm: "nowrap" },
    }}
  >
    Local knowledge. Direct relationships. Earlier access.
  </Box>
</Box>
        </Box>
      </Box>

      <style>{`
        /* ✅ Prevent dark mode from affecting this component */
        [data-theme="dark"] .no-theme {
          background: transparent !important;
        }

        /* MOBILE - max 599px */
        @media (max-width: 599px) {
          .image3-hero-title {
            font-size: 20px !important;
            line-height: 24px !important;
            letter-spacing: -0.3px !important;
          }

          .image3-overlay-container {
            align-items: center !important;
            padding-bottom: 0px !important;
          }
          .image3-hero-title {
            font-size: 18px !important;
            line-height: 24px !important;
          }
        }

        /* TABLET - 600px to 1024px */
        @media (min-width: 600px) and (max-width: 1024px) {
          .image3-hero-title {
            font-size: 30px !important;
            line-height: 38px !important;
            letter-spacing: -0.5px !important;
          }
        }

        /* DESKTOP - 1025px+ */
        @media (min-width: 1025px) {
          .image3-hero-title {
            font-size: 44px !important;
            line-height: 54px !important;
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