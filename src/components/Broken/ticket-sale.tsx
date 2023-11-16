import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketSale = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m9 15 6-6"
      />
      <path
        fill="currentColor"
        d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.004 4H9.996C6.218 4 4.33 4 3.156 5.172c-.88.877-1.1 2.154-1.156 4.322-.007.278.221.5.49.571A2.001 2.001 0 0 1 3.986 12c0 .929-.634 1.71-1.494 1.935-.27.07-.498.292-.49.57.055 2.17.276 3.446 1.154 4.323M18 4.1c1.309.128 2.189.417 2.845 1.072.878.877 1.1 2.154 1.155 4.322.007.278-.221.5-.49.571A2.002 2.002 0 0 0 20.014 12c0 .929.634 1.71 1.494 1.935.27.07.498.292.49.57-.055 2.17-.276 3.446-1.154 4.323C19.67 20 17.782 20 14.004 20H9.996C8.83 20 7.841 20 7 19.965"
      />
    </svg>
  );
};
export default SvgTicketSale;
