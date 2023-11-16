import * as React from "react";
import type { SVGProps } from "react";
const SvgCassette2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6 13.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.5 11.5H16M8.5 16H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 4.5-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24-.514.356-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356-.514-.356-.75-.984-1.22-2.24L6.5 4.5"
      />
    </svg>
  );
};
export default SvgCassette2;
