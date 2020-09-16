import React from "react";
import {BlurUp} from "./BlurUp";

export const BlurUpImage = () => {
  const [src, { blur }] = BlurUp(
    "../assets/tealShoeLowRes.png",
    "../assets/tealShoe.png"
  );

  return (
    <div>FUCKER
    <img
      src={src}
      style={{
        width: 200,
        filter: blur
          ? "blur(20px)"
          : "none",
        transition: blur
          ? "none"
          : "filter 0.3s ease-out",
        position: "relative",
        zIndex: "-1",
        width: "calc(80vmin)",
        mouseEvents: "none",
      }}
      aria-label="shoe" alt="shoe" className="shoe"
      
    />
    </div>
  )
}