import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 10c5 0 4.6 12-3 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.312 14c-5 0-4.6-12 3-12"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2 2"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.632 10.696c3.535-3.535 11.737 5.233 6.364 10.607"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2 2"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.68 13.304C10.144 16.84 1.942 8.07 7.316 2.697"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2 2"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.851 13.524C7.316 9.99 16.084 1.786 21.458 7.16"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2 2"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.46 10.476c3.536 3.535-5.232 11.738-10.606 6.364"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 12.312c0-5 12-4.6 12 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 12c0 5-12 4.6-12-3"
      />
    </svg>
  );
};
export default SvgBlackHole;