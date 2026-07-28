import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/niki-nakrani-perth-buyer-agent.png";
import "./Image3.css";

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
             backgroundColor: "#073B2F",
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            className="no-theme"
            src={heroImage}
            alt="Buyer Advocate helping clients find the right property in Perth"
            title="Find and Sign Buyers Agent Australia Team"
            loading="lazy"
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

          {/* SINGLE OVERLAY — dark background + white text */}
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
              
            }}
          >
            <Box
              component="h2"
              className="image3-hero-title"
              tabIndex={0}
              sx={{
                color: "#FFFFFF",
                textAlign: "center",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily: "GT Super Display Medium",
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
                letterSpacing: "-0.88px",
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
    </>
  );
};

export default Image1;