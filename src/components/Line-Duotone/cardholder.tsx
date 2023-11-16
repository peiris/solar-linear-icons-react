import * as React from "react";
import type { SVGProps } from "react";
const SvgCardholder = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M17 11v-1c0-1.886 0-2.828-.586-3.414C15.828 6 14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586C7 7.172 7 8.114 7 10v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5 11h14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 16h8"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCardholder;
