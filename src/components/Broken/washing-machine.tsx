import * as React from "react";
import type { SVGProps } from "react";
const SvgWashingMachine = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6 22v-1M18 22v-1M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3.108 18.765 3.01 17.114 3 14M3 9h9m9 0h-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 5.5h3"
      />
      <path
        fill="currentColor"
        d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgWashingMachine;
