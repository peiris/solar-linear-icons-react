import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.75 12C2.75 9.1 5.1 6.75 8 6.75a.75.75 0 0 0 0-1.5A6.75 6.75 0 1 0 14.75 12a.75.75 0 0 0-1.5 0 5.25 5.25 0 1 1-10.5 0Z"
      />
      <path
        fill="currentColor"
        d="M21.25 12c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 0 0 0 1.5A6.75 6.75 0 1 0 9.25 12a.75.75 0 0 0 1.5 0 5.25 5.25 0 1 1 10.5 0Z"
      />
    </svg>
  );
};
export default SvgLinkCircle;
