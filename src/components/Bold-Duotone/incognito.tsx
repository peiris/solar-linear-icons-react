import * as React from "react";
import type { SVGProps } from "react";
const SvgIncognito = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 10A.75.75 0 0 1 2 9.25h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m4.188 9.25.426-1.705c.545-2.183.818-3.274 1.632-3.91C7.06 3 8.185 3 10.435 3h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91l.427 1.705H4.188Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        fill="currentColor"
        d="M9.884 17.397a3.506 3.506 0 0 0 .025-1.69l.414-.207a3.75 3.75 0 0 1 3.354 0l.413.206a3.511 3.511 0 0 0 .026 1.69l-1.11-.555a2.25 2.25 0 0 0-2.012 0l-1.11.556Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgIncognito;
