import * as React from "react";
import type { SVGProps } from "react";
const SvgUfo = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M17 8.21c2.989.723 5 2.071 5 3.616C22 14.131 17.523 16 12 16S2 14.13 2 11.826c0-1.545 2.011-2.893 5-3.615"
      />
      <path
        stroke="currentColor"
        
        d="M7 8.729A4.729 4.729 0 0 1 11.729 4h.542A4.729 4.729 0 0 1 17 8.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82-.146-.1-.2-.274-.2-.451Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 16v3M5.5 15.5l-1 2M18.5 15.5l1 2"
      />
      <circle cx={12} cy={13} r={1} fill="currentColor" />
      <circle cx={7} cy={12} r={1} fill="currentColor" />
      <circle cx={17} cy={12} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgUfo;
