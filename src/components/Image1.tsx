import React from "react";
import { Grid, Box } from "@mui/material";
import heroImage from "../assets/Image+subhead (1).png";

const Image1: React.FC = () => {
  return (
    <Grid container>
      {/* Full width = 12 columns */}
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="The right property secured before the wider market"
            sx={{
              width: "100%",
              maxWidth: "1512px", // keeps original max size
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Image1;