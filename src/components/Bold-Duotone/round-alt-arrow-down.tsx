import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundAltArrowDown = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M15.53 11.03a.75.75 0 1 0-1.06-1.06L12 12.44 9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3Z"
      />
    </svg>
  );
};
export default SvgRoundAltArrowDown;
