import * as React from "react";
import type { SVGProps } from "react";
const SvgMen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17 1.25a.75.75 0 1 0 0 1.5h3.19l-5.088 5.088a8 8 0 1 0 1.06 1.06l5.088-5.087V7a.75.75 0 1 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5Z"
      />
    </svg>
  );
};
export default SvgMen;
