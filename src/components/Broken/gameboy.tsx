import * as React from "react";
import type { SVGProps } from "react";
const SvgGameboy = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 12c0 4.714 0 7.071-1.318 8.535C18.364 22 16.242 22 12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536C5.636 2 7.758 2 12 2c4.243 0 6.364 0 7.682 1.464.876.974 1.17 2.343 1.268 4.536"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.112 9.949a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8s0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10h-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 14v3M7 15.5h3"
      />
      <path
        fill="currentColor"
        d="M16.333 13.833a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0ZM16.333 17.167a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0ZM14.667 15.5a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0ZM18 15.5a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Z"
      />
    </svg>
  );
};
export default SvgGameboy;
