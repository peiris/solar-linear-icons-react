import * as React from "react";
import type { SVGProps } from "react";
const SvgStreetsMapPoint = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5.5 8.757C5.5 6.958 7.067 5.5 9 5.5s3.5 1.458 3.5 3.257c0 1.785-1.117 3.868-2.86 4.613a1.638 1.638 0 0 1-1.28 0c-1.743-.745-2.86-2.828-2.86-4.613Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m14 14 6.5 6.5M14 14l-7.605 7.605M14 14l2-2m5.607-5.606L19 9"
      />
      <path fill="currentColor" d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"
      />
    </svg>
  );
};
export default SvgStreetsMapPoint;
