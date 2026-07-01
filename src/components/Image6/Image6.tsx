import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/niki-nikrani-buyer-advocate-perth-australia-property.jpg";
import "./Image6.css";

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
          alt="Perth Buyer Advocate Niki Nakrani helping home buyers in Perth, Western Australia"
          title="Buyer Advocate Australia | Confident Property Buying"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
        />

        {/* OVERLAY */}
        <Box className="image6-overlay-container">
          <Box
            component="h2"
            className="image6-hero-title"
            tabIndex={0}
          >
            We find with confidence. You sign with certainty.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Image1;