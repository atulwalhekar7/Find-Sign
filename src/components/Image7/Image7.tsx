import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/niki-nakrani-buyers-agent-perth-australia-find-and-sign.png";
import "./Image7.css";

const Image1: React.FC = () => {
  return (
    <>
      <Box className="image1-wrapper">
        {/* HERO */}
        <Box className="no-theme image1-hero">
          {/* IMAGE */}
          <Box
            component="img"
            src={heroImage}
            alt="Buyers Agent Perth | Perth Buyer Agent Niki Nakrani helping home buyers in Perth, Western Australia"
            className="no-theme image1-img"
          />

          {/* OVERLAY */}
          <Box className="no-theme image7-overlay-container">
            <Box
              component="h2"
              className="no-theme image7-hero-title"
              tabIndex={0}
            >
              Buying expertise informed by what’s seen on the ground.
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Image1;