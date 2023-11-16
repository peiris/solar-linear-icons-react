import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoRightRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 7H9a5 5 0 1 0 0 10h7m4-10-3-3m3 3-3 3"
      />
    </svg>
  );
};
export default SvgUndoRightRound;
