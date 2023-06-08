import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconAngleRightSmall(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1" +
          ",1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0," +
          "15.4,9.88Z"
        }
      />
    </CustomSvg>
  );
}
