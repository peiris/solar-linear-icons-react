import * as React from "react";
import type { SVGProps } from "react";
const SvgIncognito = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91.76-.593 1.79-.632 3.754-.635m10 7-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91-.76-.593-1.79-.632-3.754-.635"
      />
      <path
        stroke="currentColor"
        
        d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33"
      />
    </svg>
  );
};
export default SvgIncognito;
