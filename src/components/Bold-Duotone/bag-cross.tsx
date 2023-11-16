import * as React from "react";
import type { SVGProps } from "react";
const SvgBagCross = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022C19.794 22 18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084-.9-1.084-.591-2.73.026-6.022l.75-4Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6V5ZM9.53 10.47a.75.75 0 0 0-1.06 1.06L10.94 14l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 15.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L13.06 14l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47Z"
      />
    </svg>
  );
};
export default SvgBagCross;
