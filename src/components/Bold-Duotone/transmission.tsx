import * as React from "react";
import type { SVGProps } from "react";
const SvgTransmission = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 4a2 2 0 1 1 2.75 1.855v5.395h6.5V5.855a2 2 0 1 1 1.5 0v5.395H16c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094V5.855a2 2 0 1 1 1.5 0v2.197c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H12.75v5.395a2 2 0 1 1-1.5 0V12.75h-6.5v5.395a2 2 0 1 1-1.5 0V5.855A2 2 0 0 1 2 4Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 15a.75.75 0 0 1 .75-.75h2.286c1.375 0 2.464 1.134 2.464 2.5a2.502 2.502 0 0 1-1.641 2.358l1.53 2.5a.75.75 0 1 1-1.279.784l-1.923-3.142h-.687V22a.75.75 0 0 1-1.5 0v-7Zm1.5 2.75h1.536c.518 0 .964-.433.964-1s-.446-1-.964-1H18.75v2Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTransmission;
