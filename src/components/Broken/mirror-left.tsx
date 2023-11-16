import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorLeft = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3 12c0 4.243 0 6.364 1.318 7.682C5.636 21 7.758 21 12 21m0-18C7.757 3 5.636 3 4.318 4.318 3.502 5.134 3.192 6.257 3.073 8"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2.5 3"
        strokeLinecap="round"
        
        d="M11 21h4c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 22V2"
      />
    </svg>
  );
};
export default SvgMirrorLeft;
