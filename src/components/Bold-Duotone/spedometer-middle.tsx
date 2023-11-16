import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerMiddle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.02 13.015a3.006 3.006 0 0 0 3.008 3.004 3.006 3.006 0 0 0 3.008-3.004c0-.631-.435-1.507-.974-2.35-.807-1.26-1.21-1.89-2.034-1.89-.824 0-1.227.63-2.034 1.89-.54.844-.974 1.719-.974 2.35Z"
      />
      <path
        fill="currentColor"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M4.42 5.476c.326-.377.679-.73 1.057-1.055a.758.758 0 0 1 .053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5a.756.756 0 0 1-.05-.054ZM2.028 12.75a10.14 10.14 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5H2.028ZM5.476 19.58a10.06 10.06 0 0 1-1.055-1.056.76.76 0 0 1 .049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5a.751.751 0 0 1-.054.05ZM19.58 18.524c-.326.377-.679.73-1.056 1.055a.752.752 0 0 1-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5a.752.752 0 0 1 .05.053ZM21.972 11.25a10.124 10.124 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5h1.972ZM18.524 4.42c.377.326.73.679 1.055 1.056a.724.724 0 0 1-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.737.737 0 0 1 .053-.05ZM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10.14 10.14 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
export default SvgSpedometerMiddle;