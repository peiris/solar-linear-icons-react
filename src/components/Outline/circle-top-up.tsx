import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleTopUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.25 12A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0Z"
      />
      <path
        fill="currentColor"
        d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l7.72-7.72v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0 0 1.5h3.533l-7.72 7.72Z"
      />
    </svg>
  );
};
export default SvgCircleTopUp;
