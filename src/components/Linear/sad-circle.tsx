import * as React from "react";
import type { SVGProps } from "react";
const SvgSadCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"
      />
      <ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
    </svg>
  );
};
export default SvgSadCircle;