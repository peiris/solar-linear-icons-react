import * as React from "react";
import type { SVGProps } from "react";
const SvgPerfume = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.161 16A7.07 7.07 0 0 1 2 14.495C2 10.355 5.582 7 10 7s8 3.356 8 7.495c0 1.915-.766 3.662-2.027 4.987-.45.473-.676.709-1.62 1.114C13.41 21 12.76 21 11.459 21H8.542c-1.302 0-1.952 0-2.896-.404a7.022 7.022 0 0 1-.646-.31"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98 2.49.28 3.995-1.396 6.14-1.685"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982-.552.956-1.97 1.172-3.165.482-1.196-.69-1.717-2.026-1.165-2.982.552-.957 1.97-1.173 3.165-.482Z"
      />
    </svg>
  );
};
export default SvgPerfume;
