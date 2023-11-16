import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13 8h4M13 11h4M20 10v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMicrophone;
