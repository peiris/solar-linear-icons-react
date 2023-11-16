import * as React from "react";
import type { SVGProps } from "react";
const SvgSofa = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 12v1h10v-1a3 3 0 0 1 2.993-3 4.592 4.592 0 0 0-.07-.78 4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22a4.588 4.588 0 0 0-.07.78A3 3 0 0 1 7 12Z"
      />
      <path
        fill="currentColor"
        d="M18.444 18H5.556a3.57 3.57 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.548 3.548 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.548 3.548 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.57 3.57 0 0 1-.806.092Z"
      />
    </svg>
  );
};
export default SvgSofa;
