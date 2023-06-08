import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconArrowUpSmall(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M17.71,9.88l-4.3-4.29a2,2,0,0,0-2.82,0L6.29,9.88a1,1,0,0,0,0,1.41," +
          "1,1,0,0,0,1.42,0L11,8V19a1,1,0,0,0,2,0V8l3.29,3.29a1,1,0,1,0,1.42-" +
          "1.41Z"
        }
      />
    </CustomSvg>
  );
}
