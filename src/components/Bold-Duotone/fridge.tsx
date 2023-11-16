import * as React from "react";
import type { SVGProps } from "react";
const SvgFridge = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M4 11.5V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-1.5H4Zm13 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v1.5H4V10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V7Z"
      />
    </svg>
  );
};
export default SvgFridge;
