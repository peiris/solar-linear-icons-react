import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareForward = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.155 3.434 2.357 2.043c1.623 1.406 2.434 2.11 2.434 3.023 0 .913-.811 1.616-2.434 3.023l-2.357 2.043c-.714.618-1.07.927-1.363.794-.292-.134-.292-.606-.292-1.55v-1.524c-3 0-6.25 1.393-7.5 3.714 0-7.429 4.444-9.286 7.5-9.286V4.19c0-.944 0-1.416.292-1.55.293-.133.65.176 1.363.794Z"
      />
    </svg>
  );
};
export default SvgSquareForward;
