import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerLow = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2"
      />
      <path
        stroke="currentColor"
        
        d="M13.778 14.364a3 3 0 1 0-4.242-4.243c-.446.446-.757 1.371-.972 2.346-.32 1.459-.481 2.188.1 2.77.58.58 1.31.42 2.768.098.976-.214 1.9-.525 2.346-.971Z"
      />
    </svg>
  );
};
export default SvgSpedometerLow;
