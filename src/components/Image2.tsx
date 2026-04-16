import React from "react";
import { Box } from "@mui/material";
import heroImage from "../assets/Image+subhead.png";

const Image1: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      
      {/* 🔥 12-column responsive wrapper */}
      <Box sx={{ width: "100%" }}>
        
        <section
          style={{
            width: "100%",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <img
            src={heroImage}
            alt="The right property secured before the wider market"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",

              /* 🔥 responsive height control */
              aspectRatio: "16 / 7",
            }}
          />
        </section>

      </Box>
    </Box>
  );
};

export default Image1;