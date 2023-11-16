import * as React from "react";
import type { SVGProps } from "react";
const SvgVolleyball2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.466 3.67A9.99 9.99 0 0 0 2 12c0 1.619.385 3.147 1.067 4.5H3.5c3.155 0 6.133-1.457 8.07-3.947L12 12a9.134 9.134 0 0 1-.686-8.354L12 2a9.98 9.98 0 0 0-3.446.61l-.37.765a14.676 14.676 0 0 0-.86 8.48.75.75 0 1 1-1.471.29 16.152 16.152 0 0 1 .613-8.475Z"
      />
      <path
        fill="currentColor"
        d="M14.155 6.08a.75.75 0 1 0-.31 1.468c2.58.546 4.97 1.83 6.865 3.723l.002.002 1.267 1.288.006-.006a9.943 9.943 0 0 1-1.244 4.306L20.5 16.5A10.106 10.106 0 0 0 12.09 12H12a9.134 9.134 0 0 1-.686-8.354L12 2c4.942 0 9.047 3.585 9.855 8.296l-.078-.08-.004-.004a15.236 15.236 0 0 0-7.618-4.132Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M15.433 17.323a.75.75 0 0 0-.867-1.225c-2.597 1.84-5.744 2.945-8.834 2.945h-.831A10.03 10.03 0 0 1 3.067 16.5H3.5c3.155 0 6.133-1.457 8.07-3.947L12 12h.092c3.379 0 6.534 1.689 8.408 4.5l.241.361A9.997 9.997 0 0 1 12.001 22a9.953 9.953 0 0 1-5.258-1.492c3.095-.212 6.147-1.385 8.69-3.185Z"
        opacity={0.4}
      />
    </svg>
  );
};
export default SvgVolleyball2;
