import * as React from "react";
import type { SVGProps } from "react";
const SvgEndCallRounded = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.083 10.503C2.277 11.373 2 12.613 2 13.851c0 2.06 1.782 3.564 3.607 3.047l1.34-.38C8.156 16.174 9 14.982 9 13.617m11.917-3.115c.806.87 1.083 2.11 1.083 3.348 0 2.06-1.782 3.564-3.607 3.047l-1.34-.38c-1.209-.343-2.053-1.535-2.053-2.9"
      />
      <path
        stroke="currentColor"
        
        d="M3.083 10.503C4.44 9.04 7.193 7 12 7c4.807 0 7.56 2.039 8.917 3.503M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgEndCallRounded;
