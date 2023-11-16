import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14.381 9.027a5.766 5.766 0 0 1 1.905-.32c.654-.001 1.283.108 1.87.308C20.392 9.78 22 11.881 22 14.353 22 17.472 19.442 20 16.286 20h-10C3.919 20 2 18.104 2 15.765c0-2.34 1.919-4.235 4.286-4.235a4.291 4.291 0 0 1 2.381.713"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7.116 11.609a5.577 5.577 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgCloud;
