import React from "react";
import { View } from "../view-wrapper";

export const Footer = () => {
  return (
    <View>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          fontSize: "0.8rem",
          fontWeight: 600,
        }}
      >
        Made with 💝 By S.HariHaran Using Next.js
      </p>
    </View>
  );
};
