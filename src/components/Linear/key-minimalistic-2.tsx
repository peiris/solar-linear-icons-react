import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={15} cy={9} r={7} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={15} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19"
      />
    </svg>
  );
};
export default SvgKeyMinimalistic2;
