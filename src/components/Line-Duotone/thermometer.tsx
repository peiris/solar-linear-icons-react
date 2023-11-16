import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m17.096 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.909 1.301 1.3M5.58 20.558l.383-.384a2.014 2.014 0 0 1 1.647-.578l.799.09a3.02 3.02 0 0 0 2.47-.867l8.942-8.943a4.028 4.028 0 1 0-5.696-5.696L5.18 13.122a3.021 3.021 0 0 0-.866 2.47l.089.8a2.014 2.014 0 0 1-.578 1.646l-.384.383a1.51 1.51 0 0 0 2.137 2.137Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m9 15 6.5-6.5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgThermometer;
