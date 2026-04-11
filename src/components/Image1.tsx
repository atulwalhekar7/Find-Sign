import React from "react";
import heroImage from "../assets/Image+subhead (1).png"; // your image file in assets folder

const Image1: React.FC = () => {
  return (
    <section
      style={{
        width: "1512px",
        height: "698px",
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
        }}
      />
    </section>
  );
};

export default Image1;