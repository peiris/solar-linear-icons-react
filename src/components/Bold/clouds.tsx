import * as React from "react";
import type { SVGProps } from "react";
const SvgClouds = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53 0 .43.082.844.23 1.226a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5Z"
      />
      <path
        fill="currentColor"
        d="M21.551 14.55a5.261 5.261 0 0 0-.751-.486c-.66-2.101-2.686-3.564-4.99-3.564-2.754 0-5.124 2.1-5.212 4.87-1.321.37-2.41 1.342-2.867 2.63H6.286C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 .78-.16 1.522-.449 2.197Z"
      />
    </svg>
  );
};
export default SvgClouds;
