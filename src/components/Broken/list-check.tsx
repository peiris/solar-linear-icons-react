import * as React from "react";
import type { SVGProps } from "react";
const SvgListCheck = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m14 16 2.1 2.5 3.9-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 14H3M10 18H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"
      />
    </svg>
  );
};
export default SvgListCheck;
