import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M21 6H3M21 10H3M11 14H3M11 18H3"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgListArrowDown;
