import * as React from "react";
import type { SVGProps } from "react";
const SvgScreencast = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.5 4H14c3.772 0 5.657 0 6.829 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.171 6.828-1.1 1.1-3.708 1.168-7.141 1.172a.687.687 0 0 1-.688-.687C13 13.617 8.383 9 2.688 9a.685.685 0 0 1-.686-.688c.002-.31.007-.593.018-.704a4 4 0 0 1 3.588-3.589C5.804 4 6.036 4 6.5 4Z"
      />
      <path
        fill="currentColor"
        d="M2 10.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 20a.75.75 0 0 0 1.5 0c0-5.385-4.365-9.75-9.75-9.75Z"
      />
      <path
        fill="currentColor"
        d="M2 13.25a.75.75 0 0 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0A6.75 6.75 0 0 0 2 13.25Z"
      />
      <path
        fill="currentColor"
        d="M2 16.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 20a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25Z"
      />
    </svg>
  );
};
export default SvgScreencast;
