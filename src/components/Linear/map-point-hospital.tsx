import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointHospital = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"
      />
      <circle cx={12} cy={10} r={4} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10.5 10h3M12 11.5v-3"
      />
    </svg>
  );
};
export default SvgMapPointHospital;
