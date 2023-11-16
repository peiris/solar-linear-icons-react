import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 17a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 9a2 2 0 1 0 0 4h7.25v-1.5a.75.75 0 0 1 1.5 0V13H17a2 2 0 1 0 0-4H7Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.364 2.656a.75.75 0 1 0-.728-1.311L6.088 6.093c.876-.08 1.941-.091 3.256-.093l6.02-3.344Z"
      />
    </svg>
  );
};
export default SvgRadio;
