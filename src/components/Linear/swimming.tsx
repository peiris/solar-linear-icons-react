import * as React from "react";
import type { SVGProps } from "react";
const SvgSwimming = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 15.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 14.876 14.485 16 12 16c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 14.366 3.684 15.376 2 15.773M22 20.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 19.876 14.485 21 12 21c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 19.366 3.684 20.376 2 20.773M4 11.5l3.477-2.086a1.5 1.5 0 0 0 .367-2.263L6.856 6a1.421 1.421 0 0 1 2.145-1.865L15.5 11.5M17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
};
export default SvgSwimming;
