import React from "react";
import { Grid } from "@mui/material";
import heroImage from "../assets/Image+subhead.png";

const Image1: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      
      {/* 🔥 12-column responsive wrapper */}
      <Grid item xs={12}>
        
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

      </Grid>
    </Grid>
  );
};

export default Image1;