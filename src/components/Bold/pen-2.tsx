import * as React from "react";
import type { SVGProps } from "react";
const SvgPen2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m11.52 14.929 5.917-5.917a8.232 8.232 0 0 1-2.661-1.787 8.232 8.232 0 0 1-1.788-2.662L7.07 10.48c-.462.462-.693.692-.891.947a5.24 5.24 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-1.088 3.267a.848.848 0 0 0 1.073 1.073l3.266-1.088c.62-.207.93-.31 1.221-.45.344-.163.669-.364.969-.598.255-.199.485-.43.947-.891ZM19.079 7.37a3.146 3.146 0 0 0-4.45-4.449l-.71.71.031.09c.26.749.751 1.732 1.674 2.655A7.003 7.003 0 0 0 18.37 8.08l.71-.71Z"
      />
    </svg>
  );
};
export default SvgPen2;
