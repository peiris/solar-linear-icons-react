import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignHorizontalCenter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2v3m0 17v-3m0-5v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 6.098 19 6.565 19 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 8.902 5 8.435 5 7.5ZM7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"
      />
    </svg>
  );
};
export default SvgAlignHorizontalCenter;
