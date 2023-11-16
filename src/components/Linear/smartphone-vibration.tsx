import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneVibration = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.5 19h-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m22 6-.776 1.553a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894L22 18M2 6l.776 1.553a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894L2 18"
      />
    </svg>
  );
};
export default SvgSmartphoneVibration;
