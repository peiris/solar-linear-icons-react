import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <circle cx={12} cy={12} r={2} />
      <path d="M12 10c5 0 4.6 12-3 12" />
      <path d="M12.312 14c-5 0-4.6-12 3-12" />
      <path d="M10.632 10.696c3.535-3.535 11.737 5.233 6.364 10.607" />
      <path d="M13.68 13.304C10.144 16.84 1.942 8.07 7.316 2.697" />
      <path d="M10.851 13.524C7.316 9.99 16.084 1.786 21.458 7.16" />
      <path d="M13.46 10.476c3.536 3.535-5.232 11.738-10.606 6.364" />
      <path d="M10 12.312c0-5 12-4.6 12 3" />
      <path d="M14 12c0 5-12 4.6-12-3" />
    </svg>
  );
};
export default SvgBlackHole;