import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/buyer-advocate-perth-australia-property-services.png";
import "./Image4.css";

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
  alt="Perth Buyer Advocate Australia helping home buyers and property investors secure the right property"
  title="Perth Buyer Advocate Australia | Find and Sign"
  loading="eager"
  fetchPriority="high"
  decoding="async"           
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
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
              verticalAlign: "top",
              margin: 0,
              padding: 0,
            }}
          />

          {/* OVERLAY */}
          <Box
            className="no-theme image4-overlay-container"
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
                sm: "30px",
                md: "40px",
              },
            }}
          >
            <Box
              component="h2"
              className="no-theme image4-hero-title"
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
                  xs: "0px",
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
    </>
  );
};

export default Image1;