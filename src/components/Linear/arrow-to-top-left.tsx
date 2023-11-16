import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowToTopLeft = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="m12 4.5 5 5m-5-5-5 5m5-5v10c0 1.667-1 5-5 5"
      />
    </svg>
  );
};
export default SvgArrowToTopLeft;
