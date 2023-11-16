import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerMax = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346.321 1.459.482 2.188-.099 2.77-.58.58-1.31.42-2.769.098-.975-.214-1.9-.525-2.346-.971Z"
      />
    </svg>
  );
};
export default SvgSpedometerMax;
