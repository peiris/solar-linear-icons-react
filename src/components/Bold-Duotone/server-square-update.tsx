import * as React from "react";
import type { SVGProps } from "react";
const SvgServerSquareUpdate = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.5}>
        <path d="M3.172 19.828C4.343 21 6.229 21 10 21h3.89a5.474 5.474 0 0 1-.89-3c0-.301.024-.597.07-.885a.75.75 0 0 1 .41-1.365 5.515 5.515 0 0 1 3.376-3H2V13c0 3.771 0 5.657 1.172 6.828ZM3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172Z" />
      </g>
      <path
        fill="currentColor"
        d="M14.929 16.753c.389-1.497 1.924-2.503 3.576-2.503 1.277 0 2.44.58 3.106 1.515a.75.75 0 1 1-1.222.87c-.36-.505-1.048-.885-1.884-.885-.967 0-1.687.482-2 1.08a.75.75 0 0 1 .15 1.24l-.583.5a.75.75 0 0 1-.976 0l-.584-.5a.75.75 0 0 1 .417-1.317Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.928 17.43a.75.75 0 0 1 .976 0l.584.5a.75.75 0 0 1-.417 1.317c-.389 1.497-1.924 2.503-3.576 2.503-1.277 0-2.44-.58-3.106-1.515a.75.75 0 1 1 1.222-.87c.36.505 1.048.885 1.884.885.967 0 1.687-.482 2-1.08a.75.75 0 0 1-.15-1.24l.583-.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2ZM8.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2ZM8.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2ZM6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM13.5 6.75a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-4.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.144 12.75H22v-1.5H2v1.5h14.856a5.5 5.5 0 0 1 1.644-.25 5.5 5.5 0 0 1 1.644.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgServerSquareUpdate;
