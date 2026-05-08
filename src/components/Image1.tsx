import React from "react";
import { Grid, Box } from "@mui/material";
import heroImage from "../assets/niki-nakrani-buyers-advocate-australia-ceo-find-and-sign.png";

const Image1: React.FC = () => {
  return (
    <Grid container>
      {/* Full width = 12 columns */}
      <Grid size={12}>
        <Box
  sx={{
    width: "100vw",
    aspectRatio: "16 / 7",   // 🔥 keeps height stable
    overflow: "hidden",
  }}
>
  <Box
    component="img"
    src={heroImage}
    alt="Hero"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",     // 🔥 prevents stretching
      display: "block",
    }}
  />
</Box>
      </Grid>
    </Grid>
  );
};

export default Image1;