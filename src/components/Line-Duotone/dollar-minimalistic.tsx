import * as React from "react";
import type { SVGProps } from "react";
const SvgDollarMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 17v1M12 6v1M15 9.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5 3 1.12 3 2.5-1.343 2.5-3 2.5-3-1.12-3-2.5"
      />
    </svg>
  );
};
export default SvgDollarMinimalistic;
