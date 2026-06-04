import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/niki-nakrani-buyers-agent-image2-australia-find-and-sign.jpg";
import "./Image2.css";

const Image1: React.FC = () => {
  return (
    <Box className="no-theme image2-wrapper">
      {/* HERO */}
      <Box className="no-theme image2-hero">
        {/* IMAGE */}
        <Box
          component="img"
          className="no-theme image2-image"
          src={heroImage}
          alt="Expert property buying guidance and professional advocate services"
          title="Perth Buyer Advocate Australia | Find and Sign"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* OVERLAY */}
        <Box className="no-theme image2-overlay-container">
          <Box
            component="h2"
            className="no-theme image2-hero-title"
            tabIndex={0}
          >
            Expert guidance that shapes better outcomes.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Image1;