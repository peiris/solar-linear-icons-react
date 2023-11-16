import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundArrowRightDown = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m9 9 6 6m0 0v-4.5m0 4.5h-4.5"
      />
    </svg>
  );
};
export default SvgRoundArrowRightDown;
