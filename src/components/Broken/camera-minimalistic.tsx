import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={13} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 13c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C5.787 6 7.19 6 10 6h4c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C21 8.787 21 10.19 21 13c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C18.213 20 16.81 20 14 20h-4c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104c-.232-.347-.384-.74-.484-1.222M18 10h-.5M14.5 3.5h-5"
      />
    </svg>
  );
};
export default SvgCameraMinimalistic;
