import * as React from "react";
import type { SVGProps } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 7H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 12H5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16 17H8"
      />
    </svg>
  );
};
export default SvgSort;
