import * as React from "react";
import type { SVGProps } from "react";
const SvgFireSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        
        d="M17 12.667C17 16.933 13.444 18 11.667 18 10.11 18 7 16.933 7 12.667 7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391.058 1.071.883 1.931 1.523 1.07.584-.788.873-1.858.873-2.501 0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667Z"
      />
    </svg>
  );
};
export default SvgFireSquare;
