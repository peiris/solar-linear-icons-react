import * as React from "react";
import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294C22 4.818 19.17 2 15.68 2S9.363 4.818 9.363 8.293c0 1.61.734 2.781.734 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439 2.645-.147.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.406 2.645.586 3.086 0 .735-1.024 0-2.049 0-2.049-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"
      />
      <path
        stroke="currentColor"
        
        d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195 2.2 2.2 0 0 1-2.204-2.195 2.2 2.2 0 0 1 2.204-2.196 2.2 2.2 0 0 1 2.204 2.196Z"
      />
    </svg>
  );
};
export default SvgKey;
