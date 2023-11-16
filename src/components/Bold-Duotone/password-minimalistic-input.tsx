import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordMinimalisticInput = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.658 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPasswordMinimalisticInput;
