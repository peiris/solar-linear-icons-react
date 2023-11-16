import * as React from "react";
import type { SVGProps } from "react";
const SvgBellOff = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 9h4l-4 4h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7.5 19c.655 1.748 2.422 3 4.5 3 .245 0 .485-.017.72-.05M16.5 19a4.498 4.498 0 0 1-1.302 1.84M9.107 2.674A6.52 6.52 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.775 25.775 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002"
      />
    </svg>
  );
};
export default SvgBellOff;
