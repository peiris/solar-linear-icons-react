import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 5H9.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 6.098 7 6.565 7 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 10 8.565 10 9.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C21 8.902 21 8.435 21 7.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.28-.161-.636-.193-1.25-.2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 14V2m0 20v-4"
      />
    </svg>
  );
};
export default SvgAlignLeft;
