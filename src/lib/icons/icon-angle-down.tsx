import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconAngleDown(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8." +
          "17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0" +
          ",0,1,12,17.17Z"
        }
      />
    </CustomSvg>
  );
}
