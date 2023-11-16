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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.172 18.828C4.343 20 6.229 20 10 20h5c3.114-.01 4.765-.108 5.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.765 4.108 18.114 4.01 15 4L12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 2v20"
      />
    </svg>
  );
};
export default SvgPasswordMinimalisticInput;