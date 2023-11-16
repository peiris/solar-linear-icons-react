import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForward = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m11 8.768-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232m0-8.109v9.754c0 1.616 1.467 2.638 2.661 1.853l7.417-4.877c1.229-.807 1.229-2.899 0-3.706L13.661 5.27C12.467 4.485 11 5.507 11 7.123Z"
      />
    </svg>
  );
};
export default SvgRewindForward;
