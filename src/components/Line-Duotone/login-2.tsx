import * as React from "react";
import type { SVGProps } from "react";
const SvgLogin2 = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M2.001 11.999h14m0 0-3.5-3m3.5 3-3.5 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879-.768-.768-.865-1.946-.877-4.121"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgLogin2;
