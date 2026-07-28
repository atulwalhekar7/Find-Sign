import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/niki-nakrani-buyer-advocate-perth-australia.jpg";
import "./Image1.css";

const Image1: React.FC = () => {
  return (
    <Box className="no-theme image1-wrapper">
      {/* HERO */}
      <Box className="no-theme image1-hero">
        {/* IMAGE */}
        <Box
          component="img"
          className="no-theme image1-image"
          src={heroImage}
          alt="Commercial property acquisition with a Perth Buyer Advocate"
          title="Perth Buyer Advocate Australia | Find and Sign"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* OVERLAY */}
        <Box className="no-theme image1-overlay-container">
          <Box
            component="h2"
            className="no-theme image1-hero-title"
            tabIndex={0}
          >
            The right property, secured before the wider market.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Image1;