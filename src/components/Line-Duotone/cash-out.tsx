import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.667 12C20.55 11.721 22 10.046 22 8.02 22 5.8 20.259 4 18.111 4H5.89C3.74 4 2 5.8 2 8.02c0 2.026 1.449 3.701 3.333 3.98"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7v7m0 0 2-2.333M12 14l-2-2.333"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 11c0-1.886 0-2.828.586-3.414C6.172 7 7.114 7 9 7h6c1.886 0 2.828 0 3.414.586C19 8.172 19 9.114 19 11v6c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17v-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18h14"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCashOut;
