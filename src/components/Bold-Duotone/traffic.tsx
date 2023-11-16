import * as React from "react";
import type { SVGProps } from "react";
const SvgTraffic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10.683 18.62A6.75 6.75 0 0 0 18.75 12a.75.75 0 0 0-1.5 0A5.25 5.25 0 1 1 12 6.75a.75.75 0 0 0 0-1.5 6.75 6.75 0 0 0-1.317 13.37Z"
      />
      <path
        fill="currentColor"
        d="M13.31 6.045a.75.75 0 0 1 .986-.393 7.734 7.734 0 0 1 4.052 4.052.75.75 0 0 1-1.378.591 6.234 6.234 0 0 0-3.265-3.265.75.75 0 0 1-.394-.985Z"
      />
    </svg>
  );
};
export default SvgTraffic;
