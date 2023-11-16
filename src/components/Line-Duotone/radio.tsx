import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 11a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 11.5V13M13 17h5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 6 15 2"
      />
    </svg>
  );
};
export default SvgRadio;
