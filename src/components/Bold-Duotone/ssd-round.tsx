import * as React from "react";
import type { SVGProps } from "react";
const SvgSsdRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.5 13.588h13c1.31 0 2.453.764 3.053 1.893L19 5.118C18.5 3.529 17.604 3 16.5 3h-9c-1.105 0-2 .53-2.5 2.118L2.446 15.48c.6-1.13 1.743-1.893 3.054-1.893Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 13.588h-13c-1.311 0-2.454.763-3.053 1.893A3.86 3.86 0 0 0 2 17.294C2 19.34 3.567 21 5.5 21h13c1.933 0 3.5-1.66 3.5-3.706a3.86 3.86 0 0 0-.447-1.813c-.6-1.13-1.742-1.893-3.053-1.893ZM18 16.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM13 16.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSsdRound;
