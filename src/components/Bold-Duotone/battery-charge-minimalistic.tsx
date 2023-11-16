import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryChargeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172C19.5 17.657 19.5 15.771 19.5 12c0-3.771 0-5.657-1.172-6.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0v4ZM12.076 9.48a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 0 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899l1.475-1.77Z"
      />
    </svg>
  );
};
export default SvgBatteryChargeMinimalistic;
