import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/buyer-advocate-australia-perth-agent.png";
import "./Image5.css";

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
          alt="Buyer Advocate helping clients find the right property in Perth"
          title="Buyer Advocate Australia | Property Strategy Insights"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
        />

        {/* OVERLAY */}
        <Box className="no-theme image5-overlay-container">
          <Box
            component="h2"
            className="no-theme image5-hero-title"
            tabIndex={0}
          >
            Strategy informed by timing, access and experience.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Image1;