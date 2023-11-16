import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationUnreadLines = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM7 13.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5H7ZM22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export default SvgNotificationUnreadLines;
