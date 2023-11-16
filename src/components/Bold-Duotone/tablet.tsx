import * as React from "react";
import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 18.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
      />
    </svg>
  );
};
export default SvgTablet;
