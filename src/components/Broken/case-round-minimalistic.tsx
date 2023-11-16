import * as React from "react";
import type { SVGProps } from "react";
const SvgCaseRoundMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="#1C274D"
        strokeLinecap="round"
        
        d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2M16 11v2M9.17 4a3.001 3.001 0 0 1 5.66 0"
      />
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        
        d="M22 14c0-3.771 0-5.657-1.172-6.828-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6h-4c-1.356 0-2.468 0-3.39.054-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828"
      />
    </svg>
  );
};
export default SvgCaseRoundMinimalistic;
