import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.124 18.255a2.243 2.243 0 0 0-1.351-1.369 2.25 2.25 0 0 0-3.364-2.977l-.802.801a2.25 2.25 0 0 0-3.698-.801l-2 2a2.241 2.241 0 0 0-.532.844c-.534.03-1.06.248-1.468.656l-1.268 1.268C3.091 18.04 2 16.528 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902Z"
      />
      <path
        fill="currentColor"
        d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.746.746 0 0 1-1.06 0 .746.746 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0ZM15.47 14.97l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06Z"
      />
    </svg>
  );
};
export default SvgCloudRain;
