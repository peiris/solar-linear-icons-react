import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 4V2.5M17 4V2.5M2.5 9h19"
      />
      <path
        fill="currentColor"
        d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgCalendar;
