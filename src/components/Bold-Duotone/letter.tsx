import * as React from "react";
import type { SVGProps } from "react";
const SvgLetter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318 1 5.636 1 7.758 1 12c0 4.243 0 6.364 1.289 7.682C3.577 21 5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318C23 18.364 23 16.242 23 12c0-4.243 0-6.364-1.289-7.682C20.423 3 18.348 3 14.2 3Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M19.128 8.033a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92.726.466 1.434.762 2.25.762.814 0 1.522-.296 2.249-.763.697-.448 1.487-1.107 2.462-1.92l2.416-2.013Z"
      />
    </svg>
  );
};
export default SvgLetter;
