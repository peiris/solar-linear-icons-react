import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsCase = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 7a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h2"
      />
      <path stroke="currentColor"  d="M21 9h-3.5M7 9H3" />
    </svg>
  );
};
export default SvgAirbudsCase;
