import * as React from "react";
import type { SVGProps } from "react";
const SvgMen = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M6 7.07A8 8 0 1 1 3.07 10"
      />
      <path
        fill="currentColor"
        d="M22 2h.75a.75.75 0 0 0-.75-.75V2Zm-.75 5a.75.75 0 0 0 1.5 0h-1.5ZM17 1.25a.75.75 0 0 0 0 1.5v-1.5Zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5 1.06 1.06ZM21.25 2v5h1.5V2h-1.5ZM17 2.75h5v-1.5h-5v1.5Z"
      />
    </svg>
  );
};
export default SvgMen;
