import * as React from "react";
import type { SVGProps } from "react";
const SvgDumbbellSmall = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12a2 2 0 0 1 1.5-1.937v3.874A2 2 0 0 1 2 12ZM22 12a2 2 0 0 1-1.5 1.937v-3.874A2 2 0 0 1 22 12ZM19 9v6c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C17.697 17 17.464 17 17 17s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C15 15.697 15 15.464 15 15v-2.25H9V15c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C7.696 17 7.464 17 7 17s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C5 15.697 5 15.464 5 15V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C6.304 7 6.536 7 7 7s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C9 8.304 9 8.536 9 9v2.25h6V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C16.303 7 16.536 7 17 7s.698 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C19 8.304 19 8.536 19 9Z"
      />
    </svg>
  );
};
export default SvgDumbbellSmall;
