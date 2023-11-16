import * as React from "react";
import type { SVGProps } from "react";
const SvgTuningSquare2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        
        transform="matrix(0 -1 -1 0 16 10)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 16h5M10 8H5M5 16h1M19 8h-1M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgTuningSquare2;
