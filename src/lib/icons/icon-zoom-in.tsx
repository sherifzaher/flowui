import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconZoomIn(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414," +
          "1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1," +
          "1,8-8A8.009,8.009,0,0,1,10,18Z"
        }
      />
      <path
        d={
          "M13,9H11V7A1,1,0,0,0,9,7V9H7a1,1,0,0,0,0,2H9v2a1,1,0,0," +
          "0,2,0V11h2a1,1,0,0,0,0-2Z"
        }
      />
    </CustomSvg>
  );
}
