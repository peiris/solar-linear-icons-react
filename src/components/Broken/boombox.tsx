import * as React from "react";
import type { SVGProps } from "react";
const SvgBoombox = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M6 9.5h12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 19a3 3 0 1 0-3-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.121 18.122a3 3 0 1 1-4.242-4.243 3 3 0 0 1 4.242 4.243Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 13v2M18.121 13.879l-1.414 1.414"
      />
    </svg>
  );
};
export default SvgBoombox;
