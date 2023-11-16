import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M11 14H3M11 18H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"
      />
    </svg>
  );
};
export default SvgListArrowUp;
