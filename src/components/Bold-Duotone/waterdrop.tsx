import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterdrop = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.434 5.434 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928v.265C3 18.057 6.855 22 11.612 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12.066 5.961a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.691-2.186 2.206-3.993 4.17-4.902a.75.75 0 0 1 .996.366Z"
      />
    </svg>
  );
};
export default SvgWaterdrop;
