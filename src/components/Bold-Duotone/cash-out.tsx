import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 20h6c1.885 0 2.828 0 3.414-.586.471-.471.563-1.174.581-2.414H5.004c.018 1.24.11 1.943.581 2.414C6.171 20 7.114 20 9 20Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.25 6H9c-1.886 0-2.828 0-3.414.586C5 7.172 5 8.114 5 10v6c0 .368 0 .7.004 1h13.992c.004-.3.004-.632.004-1v-6c0-1.886 0-2.828-.586-3.414C17.828 6 16.886 6 15 6h-2.25v4.973l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794V6Z"
      />
      <path
        fill="currentColor"
        d="M18.111 3H5.89C3.74 3 2 4.8 2 7.02c0 1.905 1.28 3.5 3 3.915V10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h6c1.886 0 2.828 0 3.414.586C19 7.172 19 8.114 19 10v.935c1.72-.415 3-2.01 3-3.915C22 4.8 20.259 3 18.111 3Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgCashOut;
