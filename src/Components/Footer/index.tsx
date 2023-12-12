import React from "react";
import { View } from "../view-wrapper";
import Reveal from "@/Common/Reveal";

export const Footer = () => {
  return (
    <Reveal>
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
      </View>{" "}
    </Reveal>
  );
};
