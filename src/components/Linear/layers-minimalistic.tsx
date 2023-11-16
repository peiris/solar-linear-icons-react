import * as React from "react";
import type { SVGProps } from "react";
const SvgLayersMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4c1.234 0 2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12c-1.234 0-2.227-.397-4.213-1.191L4.98 9.685Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16c-1.234 0-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12M22 16s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20c-1.234 0-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16"
      />
    </svg>
  );
};
export default SvgLayersMinimalistic;
