import * as React from "react";
import type { SVGProps } from "react";
const SvgRewind10SecondsForward = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m7.5 10.5 2.5-2v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M10 4.5 12 2C6.477 2 2 6.477 2 12c0 .685.069 1.354.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.984 9.984 0 0 1-8-4"
      />
    </svg>
  );
};
export default SvgRewind10SecondsForward;
