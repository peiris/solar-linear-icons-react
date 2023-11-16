import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphone2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828C6.343 22 8.229 22 12 22c3.771 0 5.657 0 6.828-1.172C20 19.657 20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828C17.657 2 15.771 2 12 2 8.229 2 6.343 2 5.172 3.172Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  );
};
export default SvgSmartphone2;
