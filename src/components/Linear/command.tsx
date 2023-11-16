import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 8h8v8H8V8ZM16 16.001h3a3 3 0 1 1-3 3v-3ZM8.001 16.001h-3a3 3 0 1 0 3 3v-3ZM16 8h3a3 3 0 1 0-3-3v3ZM8.001 8h-3a3 3 0 1 1 3-3v3Z"
      />
    </svg>
  );
};
export default SvgCommand;
