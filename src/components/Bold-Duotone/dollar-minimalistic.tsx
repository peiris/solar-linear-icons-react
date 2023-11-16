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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12.75 6a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183 0 1.917 1.813 3.25 3.75 3.25 1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75c-1.376 0-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183 0-1.917-1.813-3.25-3.75-3.25-1.376 0-2.25-.906-2.25-1.75s.874-1.75 2.25-1.75c1.377 0 2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183V6Z"
      />
    </svg>
  );
};
export default SvgDollarMinimalistic;
